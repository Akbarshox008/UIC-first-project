<template>
  <section class="w-full bg-[#e3dace] py-16 md:py-24">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <!-- Title -->
      <h1 class="text-3xl sm:text-4xl md:text-[60px] font-bold text-center mb-8 md:mb-16">
        Our customers say
      </h1>

      <!-- Customer Image + Name + Title -->
      <div class="flex flex-col items-center gap-4 md:gap-6 mb-10 md:mb-12">
        <img :src="getActiveImage()" alt="" class="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-orange-400 shadow-lg" />
        <div class="text-center">
          <h2 class="text-xl sm:text-2xl font-semibold">{{ getActiveName() }}</h2>
          <h4 class="text-base sm:text-lg text-gray-700">{{ getActiveTitle() }}</h4>
        </div>
      </div>

      <!-- Quote Text -->
      <div class="relative max-w-3xl text-center mb-12 md:mb-16 px-2 sm:px-4">
        <img src="/src/assets/icons/“.png" alt="" class="absolute -top-4 -left-4 sm:-left-8 w-6 sm:w-8" />
        <p class="text-base sm:text-lg md:text-xl text-[#5C4529] leading-7 sm:leading-8 md:leading-9">
          {{ getActiveText() }}
        </p>
        <img src="/src/assets/icons/“ (1).png" alt="" class="absolute -bottom-4 -right-4 sm:-right-8 w-6 sm:w-8" />
      </div>

      <!-- Avatars Carousel -->
      <div class="relative flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-4xl">
        <img
          v-for="(t, i) in testimonials"
          :key="i"
          :src="t.image"
          @click="setActive(i)"
          :class="[
            'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full cursor-pointer transition-all duration-300',
            activeIndex === i ? 'ring-4 ring-orange-500 scale-110' : 'hover:scale-105'
          ]"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);

const testimonials = [
  {
    name: 'Starla Virgoun',
    title: 'Financial advisor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.',
    image: '/src/assets/icons/Ellipse 27.png'
  },
  {
    name: 'John Doe',
    title: 'Software Engineer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.',
    image: '/src/assets/icons/Ellipse 20.png'
  },
  {
    name: 'Jane Smith',
    title: 'Graphic Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.',
    image: '/src/assets/icons/Ellipse 17.png'
  },
  {
    name: 'Anna Petersen',
    title: 'SMM Manager',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.',
    image: '/src/assets/icons/Ellipse 16.png'
  },
  {
    name: 'Carlos Adam',
    title: 'Mobilograf',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.',
    image: '/src/assets/icons/Ellipse 19.png'
  },
  {
    name: 'Alian Smith',
    title: 'UI/UX Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.',
    image: '/src/assets/icons/Ellipse 21.png'
  },
  {
    name: 'Cerial Johnson',
    title: 'CEO Manager',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.',
    image: '/src/assets/icons/Ellipse 26.png'
  },
];

function setActive(index) {
  activeIndex.value = index;
}

function getActiveImage() {
  return testimonials[activeIndex.value].image;
}

function getActiveName() {
  return testimonials[activeIndex.value].name;
}

function getActiveTitle() {
  return testimonials[activeIndex.value].title;
}

function getActiveText() {
  return testimonials[activeIndex.value].text;
}
</script>
