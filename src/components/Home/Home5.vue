<template>
  <section class="w-full mb-24">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight text-center mb-16 md:mb-24 font-bold">
        Our greatest chef
      </h1>

      <!-- Chefs Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 lg:gap-28 mb-12 justify-items-center"
      >
        <!-- Single Chef Card -->
        <div
          v-for="chef in chefs"
          :key="chef.name"
          class="relative overflow-hidden border border-[#769878] rounded-2xl cursor-pointer group w-[80%] sm:w-[80%] md:w-full transition-transform"
        >
          <img :src="chef.image" :alt="chef.name" class="w-full rounded-2xl block object-cover" />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>

          <!-- Info -->
          <h2
            class="absolute top-[65%] w-full text-center text-white text-xl sm:text-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300"
          >
            {{ chef.name }}
          </h2>
          <h3
            class="absolute top-[80%] w-full text-center text-white text-lg sm:text-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"
          >
            {{ chef.role }}
          </h3>
        </div>
      </div>

      <!-- View All Button -->
      <div class="flex justify-center">
        <button
          class="px-8 py-3 sm:px-10 sm:py-4 bg-orange-600 text-white text-base sm:text-lg font-semibold rounded-full transition-all hover:scale-105 hover:bg-orange-700 active:scale-100"
        >
          View all
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const chefs = [
  {
    name: "Betran Komar",
    role: "Head chef",
    image: "/src/assets/icons/image 1.png",
  },
  {
    name: "Ferry Sauwi",
    role: "Chef",
    image: "/src/assets/icons/Group 8.png",
  },
  {
    name: "Iswan Dracho",
    role: "Chef",
    image: "/src/assets/icons/Group 10.png",
  },
];
</script>
