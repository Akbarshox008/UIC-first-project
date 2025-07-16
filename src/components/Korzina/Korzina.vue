<template>
  <section class="container mx-auto px-4 ">
    <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center pt-30">Shopping Cart</h1>

    <ul v-if="cartItems.length" class="flex flex-col gap-4">
      <li
        v-for="(item, index) in cartItems"
        :key="item.id"
        class="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border rounded-lg shadow-sm bg-white"
      >
        <!-- Product Info -->
        <div class="flex items-center gap-4 w-full md:w-auto">
          <img :src="item.image" alt="" class="w-20 h-20 object-cover rounded" />

          <div>
            <h2 class="text-lg font-semibold">{{ item.name }}</h2>
            <p class="text-gray-600 text-sm mb-2">{{ item.description }}</p>
            <p class="text-gray-800 font-medium">$ {{ item.price }}</p>
            <p class="text-gray-800 font-medium">Quantity: {{ item.count }}</p>
          </div>
        </div>

        <!-- Rating -->
        <div class="flex flex-col items-center gap-2">
          <div class="flex">
            <span
              v-for="star in 5"
              :key="star"
              @click="setRating(item, star)"
              class="text-2xl cursor-pointer transition-colors"
              :class="star <= item.rating ? 'text-yellow-400' : 'text-gray-300'"
            >
              ★
            </span>
          </div>
          <button
            @click="removeFromCart(index)"
            class="px-4 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 active:scale-95 transition"
          >
            Remove
          </button>
        </div>
      </li>
    </ul>

    <div v-else class="text-center text-gray-500 text-lg mt-8">
      Your cart is empty.
    </div>
  </section>
</template>

<script setup>
import { useCart } from '@/components/Order/store.js';

const { cartItems, removeFromCart } = useCart();

const setRating = (item, value) => {
  item.rating = value;
};
</script>
