<template>
  <section class="w-full py-24">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-12">Menyu</h1>

      <!-- Category Filter -->
      <ul class="flex flex-wrap justify-center gap-4 mb-12">
        <li
          v-for="cat in categories"
          :key="cat.id"
          @click="selectCategory(cat.id)"
          :class="[
            'cursor-pointer px-6 py-2 rounded-full font-semibold transition',
            currentCategory === cat.id ? 'bg-orange-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
          ]"
        >
          {{ cat.name }}
        </li>
      </ul>

      <!-- Menu Items -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in paginatedItems"
          :key="index"
          class="bg-white rounded-xl shadow-md p-6 flex flex-col text-center"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-60 object-cover rounded-lg mb-4"/>
          <h2 class="text-xl font-bold mb-2">{{ item.name }}</h2>

          <!-- Rating -->
          <div class="flex justify-center mb-4">
            <span
              v-for="star in 5"
              :key="star"
              @click="setRating(item, star)"
              :class="[
                'text-2xl cursor-pointer transition',
                star <= item.rating ? 'text-yellow-400' : 'text-gray-300'
              ]"
            >
              ★
            </span>
          </div>

          <p class="text-gray-600 mb-4">{{ item.description }}</p>
          <div class="flex justify-between items-center mt-auto">
            <span class="text-lg font-bold">${{ item.price }}</span>
            <button
              @click="handleAddToCart(item)"
              class="bg-orange-600 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-700 transition"
            >
              Order now
            </button>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-12 gap-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-[#311F09] text-white rounded hover:bg-orange-700 disabled:bg-gray-400"
        >
          Previous
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-[#311F09] text-white rounded hover:bg-orange-700 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCart } from "../Order/store";
import menuItemsData from "/src/MenyuItems.json";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const items = ref([]);
const currentPage = ref(1);
const itemsPerPage = 6;
const currentCategory = ref(1);

const categories = [
  { id: 1, name: "All category" },
  { id: 2, name: "Dinner" },
  { id: 3, name: "Lunch" },
  { id: 4, name: "Dessert" },
  { id: 5, name: "Drink" },
];

const { addToCart } = useCart();

const setRating = (item, value) => {
  item.rating = value;
};

// Category filter + pagination
const filteredItems = computed(() => {
  if (currentCategory.value === 1) return items.value;
  return items.value.filter((i) => i.categoryId === currentCategory.value);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredItems.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / itemsPerPage);
});

const selectCategory = (id) => {
  currentCategory.value = id;
  currentPage.value = 1;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};


const handleAddToCart = (item) => {
  addToCart(item);
  toast.success(`${item.name} added to cart!`, {
    position: "top-right",
    autoClose: 2000,
  });
};

onMounted(() => {
  items.value = menuItemsData.map((item) => ({ ...item, rating: 0 }));
});
</script>

