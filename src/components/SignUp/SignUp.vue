<template>
  <div class="flex flex-col md:flex-row w-full min-h-screen">
    <!-- Form Section -->
    <div v-if="formVisible" class="flex flex-1 items-center justify-center px-6 py-12">
      <div class="w-full max-w-lg">
        <!-- Logo -->
        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold mb-8">
          D
        </div>

        <!-- Card -->
        <h1 class="text-4xl font-bold mb-2">Sign Up</h1>
        <p class="text-gray-600 mb-6 text-sm">
          Already have an account? <RouterLink to="/login" class="text-orange-500 underline">Login</RouterLink>
        </p>

        <!-- Form -->
        <form @submit.prevent="login" class="space-y-4">
          <!-- Full Name -->
          <div>
            <label class="block mb-1 font-medium">Full name</label>
            <input v-model="fullname" type="text" placeholder="Full name"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none">
            <span v-if="errors.fullname" class="text-red-500 text-sm">{{ errors.fullname }}</span>
          </div>

          <!-- Email -->
          <div>
            <label class="block mb-1 font-medium">Email address</label>
            <input v-model="email" type="email" placeholder="Email"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none">
            <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
          </div>

          <!-- Password -->
          <div>
            <label class="block mb-1 font-medium">Password</label>
            <input v-model="password" type="password" placeholder="Password"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none">
            <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
          </div>

          <!-- Remember me -->
          <div class="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" v-model="rememberMe" class="w-4 h-4">
            <span>Remember me</span>
            <a href="#" class="text-orange-500 underline ml-2">Forgot Password?</a>
          </div>

          <!-- Submit -->
          <button type="submit"
            class="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>

    <!-- Side Image -->
    <div v-if="formVisible"
      class="hidden md:block md:flex-1 bg-cover bg-center"
      style="background-image: url(/src/assets/icons/unsplash_8Nc_oQsc2qQ.png)">
    </div>

    <!-- RouterView for next page -->
    <div v-else class="w-full">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink, RouterView } from 'vue-router'

// Regex
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}/i
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
const regexFullname = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/

// States
const fullname = ref('')
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const formVisible = ref(true)
const errors = ref({ fullname: '', email: '', password: '' })

const router = useRouter()

// Check if already signed up
if (localStorage.getItem('signUpSeen')) {
  formVisible.value = false
}

// Methods
function login() {
  errors.value = { fullname: '', email: '', password: '' }
  let valid = true

  if (!regexFullname.test(fullname.value)) {
    errors.value.fullname = 'Please enter a valid full name.'
    valid = false
  }
  if (!regexEmail.test(email.value)) {
    errors.value.email = 'Please enter a valid email address.'
    valid = false
  }
  if (!regexPassword.test(password.value)) {
    errors.value.password = 'Password must be at least 6 characters (0-9, A-z).'
    valid = false
  }

  if (!valid) return

  // Save to localStorage
  localStorage.setItem('fullname', fullname.value)
  localStorage.setItem('email', email.value)
  localStorage.setItem('rememberMe', rememberMe.value)
  localStorage.setItem('signUpSeen', 'true')

  // Clear
  fullname.value = ''
  email.value = ''
  password.value = ''
  rememberMe.value = false

  // Navigate to Profile page
  router.push('/profile')
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
