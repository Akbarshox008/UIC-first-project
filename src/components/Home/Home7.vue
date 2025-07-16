<template>
  <section class="w-full py-16 md:py-24 flex justify-center items-center text-white">
    <div
      class="w-full max-w-7xl h-[70vh] sm:h-[60vh] md:h-[50vh] rounded-[40px] sm:rounded-[60px] md:rounded-[120px] bg-cover bg-center flex flex-col items-center justify-center px-4 text-center"
      style="background-image: url('/src/assets/icons/Background.png');">
      
      <!-- Title -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold mb-6 md:mb-8">
        we are open from
      </h1>

      <!-- Texts -->
      <div class="space-y-2 sm:space-y-3 md:space-y-4">
        <h2 class="text-xl sm:text-2xl md:text-3xl">Monday-Sunday</h2>
        <h4 class="text-sm sm:text-base md:text-lg">Launch : Mon-Sun : 11:00am-02:00pm</h4>
        <h4 class="text-sm sm:text-base md:text-lg">Dinner : Sunday : 04:00pm-08:00pm</h4>
        <h4 class="text-sm sm:text-base md:text-lg md:ml-36">04:00pm-09:00pm</h4>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-12">
        <RouterLink to="/menuorder">
          <button
            @click="setActive(0)"
            :class="[
              'px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full font-semibold text-base sm:text-lg transition-all cursor-pointer',
              actives === 0 ? 'bg-orange-600 text-white' : 'bg-white text-black hover:bg-orange-100'
            ]">
            Order now
          </button>
        </RouterLink>

        <RouterLink to="/reservation">
          <button
            @click="setActive(1)"
            :class="[
              'px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full font-semibold text-base sm:text-lg transition-all cursor-pointer',
              actives === 1 ? 'bg-orange-600 text-white' : 'bg-white text-black hover:bg-orange-100'
            ]">
            Reservation
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const actives = ref(0);

function setActive(index) {
  actives.value = index;
}
</script>
