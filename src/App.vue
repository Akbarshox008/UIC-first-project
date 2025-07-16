<script setup>
import SignUp from "./components/SignUp/SignUp.vue";
import Parents from "./components/Parents/Parents.vue";
import { useToast } from "@/components/Order/composables/useToast.js"; // 👉 shu joyda global toast hook

const { toasts } = useToast();
</script>

<template>
  <!-- 🔔 Notification Container -->
  <div class="fixed top-5 right-5 z-[9999] space-y-4">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="[
        'px-4 py-2 rounded shadow-md text-white transition transform',
        toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
      ]"
    >
      {{ toast.message }}
    </div>
  </div>

  <!-- 🔗 Asl content -->
  <article class="com">
    <!-- <SignUp /> -->
    <Parents/>
  </article>
</template>

<style scoped>
/* Hozircha style kerak emas, hammasi Tailwind bilan */
</style>
