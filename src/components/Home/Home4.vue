<template>
  <section class="w-full flex flex-col lg:flex-row justify-between min-h-[110vh] bg-[#FFF4E7] mb-24">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 md:gap-36 pt-24 px-4">
      <!-- Images -->
      <div class="relative w-full lg:w-1/3 flex justify-center mb-10 lg:mb-0">
        <img src="/src/assets/icons/Picture (1).png" alt="" class="h-[60vh] sm:h-[70vh] object-contain" />
        <img src="/src/assets/icons/Picture (2).png" alt="" class="absolute top-0 -right-6 sm:-right-10 w-[26%]" />
        <img src="/src/assets/icons/Picture (3).png" alt="" class="absolute bottom-[-25px] sm:bottom-[-45px] w-[26%]" />
      </div>

      <!-- Text Content -->
      <div class="w-full lg:w-2/3 relative lg:left-40 text-center lg:text-left">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] w-full lg:w-[50%] mx-auto lg:mx-0 mb-6">
          Let's reserve <span class="text-[#FF8A00]">a table</span>
        </h1>
        <p class="text-base sm:text-lg leading-7 sm:leading-8 w-full lg:w-[53%] mx-auto lg:mx-0 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.
          Congue nibh nulla malesuada ultricies nec quam.
        </p>
        <button
          class="px-8 py-3 rounded-full bg-[#FF8A00] text-white text-base sm:text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:bg-orange-600 active:scale-100 active:shadow-none"
        >
          Reservation
        </button>
      </div>
    </div>
  </section>
</template>
