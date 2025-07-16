<template>
  <footer class="bg-[#311f09] w-full py-16 mt-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Block 1: Logo + Text + Social -->
        <div class="flex flex-col gap-6">
          <RouterLink to="/">
            <img src="/src/assets/icons/Logo Delizioso (1).png" alt="Logo" class="w-36"/>
          </RouterLink>
          <p class="text-white text-base leading-7">
            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
          </p>
          <div class="flex gap-4">
            <a href="https://x.com/?lang=ru" target="_blank">
              <img src="/src/assets/icons/twitter.png" alt="Twitter"
                class="w-8 hover:scale-110 transition duration-300 cursor-pointer"/>
            </a>
            <a href="https://www.facebook.com/?locale=ru_RU" target="_blank">
              <img src="/src/assets/icons/Facebook.png" alt="Facebook"
                class="w-8 hover:scale-110 transition duration-300 cursor-pointer"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="/src/assets/icons/Instagram.png" alt="Instagram"
                class="w-8 hover:scale-110 transition duration-300 cursor-pointer"/>
            </a>
          </div>
        </div>

        <!-- Block 2: Pages -->
        <div class="flex flex-col gap-6">
          <h2 class="text-[#ff8a00] text-lg font-bold">Page</h2>
          <div class="flex flex-col gap-4 text-white">
            <RouterLink to="/" class="hover:text-[#ff8a00] transition">Home</RouterLink>
            <RouterLink to="/menuorder" class="hover:text-[#ff8a00] transition">Menu</RouterLink>
            <RouterLink to="/menuorder" class="hover:text-[#ff8a00] transition">Order Online</RouterLink>
            <RouterLink to="/menuorder" class="hover:text-[#ff8a00] transition">Catering</RouterLink>
            <RouterLink to="/reservation" class="hover:text-[#ff8a00] transition">Reservation</RouterLink>
          </div>
        </div>

        <!-- Block 3: Information -->
        <div class="flex flex-col gap-6">
          <h2 class="text-[#ff8a00] text-lg font-bold">Information</h2>
          <div class="flex flex-col gap-4 text-white">
            <RouterLink to="/about" class="hover:text-[#ff8a00] transition">About us</RouterLink>
            <RouterLink to="/korzina" class="hover:text-[#ff8a00] transition">Testimonial</RouterLink>
            <RouterLink to="/contact" class="hover:text-[#ff8a00] transition">Event</RouterLink>
          </div>
        </div>

        <!-- Block 4: Contact -->
        <div class="flex flex-col gap-6">
          <h2 class="text-[#ff8a00] text-lg font-bold">Get in touch</h2>
          <div class="flex flex-col gap-4 text-white">
            <p>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
            <p>delizioso@gmail.com</p>
            <p>+123 4567 8901</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
