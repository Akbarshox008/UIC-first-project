<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-12">
    <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-3xl font-bold mb-6">Welcome, {{ fullname }}</h1>
      <p class="mb-2 text-gray-700"><strong>Email:</strong> {{ email }}</p>
      <p class="mb-2 text-gray-700"><strong>Remember Me:</strong> {{ rememberMe }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullname = ref('')
const email = ref('')
const rememberMe = ref('')

// Load from localStorage on mount
onMounted(() => {
  fullname.value = localStorage.getItem('fullname') || ''
  email.value = localStorage.getItem('email') || ''
  rememberMe.value = localStorage.getItem('rememberMe') === 'true' ? 'Yes' : 'No'
})
</script>

<style scoped>
body {
  background-color: #f9fafb;
}
</style>
