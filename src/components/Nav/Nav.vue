<template>
  <header class="fixed top-0 left-0 z-[1999] w-full bg-[#b9b9b9]/80 shadow-md">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <RouterLink to="/">
          <img
            src="/src/assets/icons/Logo Delizioso.png"
            alt="Logo"
            class="w-[120px] md:w-[150px] active:translate-y-[2px] transition-transform duration-300"
          />
        </RouterLink>

        <!-- Desktop Nav Links -->
        <ul class="hidden md:flex items-center gap-20">
          <li v-for="(link, index) in links" :key="index">
            <RouterLink
              :to="link.to"
              class="text-black text-[17px] font-semibold hover:text-[#ff8a00] hover:scale-110 transition-all"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>

        <!-- Cart & Sign In (Desktop) -->
        <div class="hidden md:flex items-center gap-6">
          <RouterLink to="/korzina">
            <img
              src="/src/assets/icons/Cart.png"
              alt="Cart"
              class="w-6 h-6 active:translate-y-[2px] transition"
            />
          </RouterLink>
          <!-- TO‘G‘RILANGAN LINK -->
          <RouterLink to="/login">
            <button
              class="px-6 py-2 rounded-full bg-[#3fa72f] text-white font-semibold text-[16px] transition hover:bg-transparent hover:border hover:border-[#3fa72f] hover:text-black"
            >
              Sign In
            </button>
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden" @click="toggleMenu">
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu Slide -->
      <transition name="slide">
        <div
          v-if="menuOpen"
          class="md:hidden bg-[#f4f4f4] rounded-xl shadow-lg p-6 flex flex-col gap-4 mt-2"
        >
          <RouterLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            class="text-black font-medium text-[18px] hover:text-[#ff8a00] transition"
            @click="closeMenu"
          >
            {{ link.name }}
          </RouterLink>
          <div class="flex items-center justify-between mt-4 cursor-pointer">
            <RouterLink to="/korzina">
              <img src="/src/assets/icons/Cart.png" alt="Cart" class="w-6 h-6" />
            </RouterLink>
            <RouterLink to="/login">
              <button
                class="px-6 py-2 rounded-full  bg-[#3fa72f] text-white font-semibold text-[16px] transition hover:bg-transparent hover:border hover:border-[#3fa72f] hover:text-black"
              >
                Sign In
              </button>
            </RouterLink>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const links = [
  { name: "About Us", to: "/about" },
  { name: "Order Online", to: "/menuorder" },
  { name: "Reservation", to: "/reservation" },
  { name: "Contact Us", to: "/contact" },
];
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
