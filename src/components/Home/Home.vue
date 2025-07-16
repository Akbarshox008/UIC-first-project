<template>
  <section class="container mx-auto flex flex-col md:flex-row w-full h-auto pt-32 md:pt-40 px-4 md:px-0">
    <!-- Left box -->
    <div class="w-full md:w-1/2 pt-6 md:pt-20 flex flex-col text-center md:text-left items-center md:items-start">
      <button class="flex items-center justify-center md:justify-start w-max px-6 py-2 mb-5 text-[#ff2200] bg-[#fbb667] rounded-full text-[16px] md:text-[17px]">
        Restauran
      </button>
      <h1 class="text-[42px] md:text-[75px] text-[#311F09] font-bold leading-tight w-full md:w-[80%]">
        Italian Cuisine
      </h1>
      <p class="text-[16px] md:text-[21px] font-normal leading-[28px] md:leading-[40px] w-full md:w-[75%] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.
      </p>
      <article class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-10 mt-8">
        <button
          class="px-8 py-4 md:px-10 md:py-4 rounded-full cursor-pointer bg-[#FF8A00] text-white text-[17px] md:text-[20px] font-semibold border-none transition-all duration-500 hover:bg-[#3FA72F] hover:text-[#311F09] active:scale-95 w-full md:w-max"
        >
          Order Now
        </button>
        <button
          class="px-8 py-4 md:px-10 md:py-4 rounded-full cursor-pointer bg-[#3FA72F] text-white text-[17px] md:text-[20px] font-semibold border-none transition-all duration-500 hover:bg-[#FF8A00] hover:text-[#311F09] active:scale-95 w-full md:w-max"
        >
          Reservation
        </button>
      </article>
    </div>

    <!-- Right box -->
    <div class="w-[50%] md:w-1/2 mt-10 md:mt-[-30px] flex justify-center">
      <img src="/src/assets/icons/Illustration.png" alt="Illustration" class="w-full md:w-[90%] h-auto object-contain" />
    </div>
  </section>
</template>

<script setup>
// Hozircha kerak emas
</script>
