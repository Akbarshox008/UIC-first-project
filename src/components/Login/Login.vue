<template>
  <div class="flex flex-col md:flex-row w-full min-h-screen mt-24">
    <!-- Left: Form Card -->
    <div class="flex flex-col w-full md:w-1/2 justify-center items-center px-6 py-12">
      <!-- Logo / Icon -->
      <router-link to="/" class="flex items-center justify-center mb-8 w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold cursor-pointer hover:scale-105 transition">
        D
      </router-link>

      <div class="w-full max-w-md">
        <h1 class="text-4xl font-bold mb-2">Login</h1>
        <h3 class="text-gray-600 mb-8">
          Don't have an account?
          <router-link to="/signup" class="text-blue-600 underline">Sign up</router-link>
        </h3>

        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label class="block text-base font-medium mb-2">Email address</label>
            <input
              type="email"
              v-model="email"
              required
              placeholder="Enter your email"
              class="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label class="block text-base font-medium mb-2">Password</label>
            <input
              type="password"
              v-model="password"
              required
              placeholder="Enter your password"
              class="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div class="flex items-center justify-between text-sm text-gray-600">
            <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="rememberMe" class="w-4 h-4" />
              <span>Remember me</span>
            </label>
            <a href="#" class="text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 active:scale-95 transition"
          >
            Login
          </button>

          <p v-if="message" :class="success ? 'text-green-600' : 'text-red-600'" class="mt-4 text-center">
            {{ message }}
          </p>
        </form>
      </div>
    </div>

    <!-- Right: Image Banner -->
    <div
      class="hidden md:block h-[80vh] m-auto ml-20 max-lg:hidden"
    >
      <img
        src="@/assets/icons/unsplash_8Nc_oQsc2qQ.png"
        alt="Login Banner"
        class="w-full h-full object-contain rounded-lg max-lg:hidden"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const message = ref('');
const success = ref(false);
const router = useRouter();

const login = () => {
  if (email.value === 'user@example.com' && password.value === 'password') {
    message.value = 'Login successful!';
    success.value = true;
    setTimeout(() => {
      router.push('/dashboard'); // Example route
    }, 1000);
  } else {
    message.value = 'Invalid credentials';
    success.value = false;
  }

  email.value = '';
  password.value = '';
  rememberMe.value = false;
};
</script>
