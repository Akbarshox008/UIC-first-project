<template>
  <section class="w-full py-24">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-12">Menu</h1>

      <!-- Menu List -->
      <ul class="flex flex-col gap-6">
        <li 
          v-for="(item, index) in menuItems" 
          :key="item.id"
          class="flex flex-col md:flex-row items-center md:justify-between gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
        >
          <div class="flex items-center gap-4">
            <img :src="item.image" alt="Menu Item" class="w-20 h-20 object-cover rounded-lg"/>
            <span class="text-lg font-semibold">{{ item.name }} - ${{ item.price }}</span>
          </div>
          <button
            @click="handleAdd(item)"
            class="px-5 py-2 bg-blue-600 text-white rounded-full font-medium transition hover:bg-blue-700 active:scale-95"
          >
            Add to Cart
          </button>
        </li>
      </ul>

      <!-- Cart -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCart } from '@/components/Order/store.js';
import menuItemsData from '/src/MenyuItems.json';

const menuItems = ref([]);
const { addToCart, cartItems } = useCart();

onMounted(() => {
  menuItems.value = menuItemsData;
});

function handleAdd(item) {
  addToCart(item);
}
</script>
