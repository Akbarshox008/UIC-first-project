<template>
  <section class="w-full h-auto md:h-screen bg-[#78faa6] flex items-center py-20 md:py-0">
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4">
      <!-- O'ng matn qismi -->
      <div class="w-full md:w-[70%] md:ml-40 flex flex-col text-center md:text-left items-center md:items-start">
        <h1
          class="w-full md:w-[60%] text-[38px] md:text-[70px] leading-[50px] md:leading-[88px] font-bold text-[#000]"
        >
          Welcome to
          <span class="text-[#FF8A00]">delizioso</span>
        </h1>
        <p
          class="w-full md:w-[50%] text-[16px] md:text-[20px] font-medium leading-[26px] md:leading-[35px] mt-4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.
          Congue nibh nulla malesuada ultricies nec quam
        </p>
        <RouterLink to="/menuorder">
          <button
            class="mt-8 md:mt-20 px-8 py-4 md:px-8 md:py-4 rounded-full bg-[#FF8A00] text-white text-[17px] md:text-[20px] font-semibold border-none cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-[#fb3802] active:scale-100 w-full md:w-max"
          >
            See our menu
          </button>
        </RouterLink>
      </div>

      <!-- Chap rasm qismi -->
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="/src/assets/icons/Picture.png"
          alt="Picture"
          class="w-[100%] md:w-[100%] max-w-[400px] md:max-w-none object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
