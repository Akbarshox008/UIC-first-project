<template>
  <div class="relative z-20 py-12">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg px-6 py-10 relative">
      
      <!-- Close -->
      <button
        @click="goToHomePage"
        class="absolute top-4 right-4 w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl hover:shadow-md hover:scale-105 transition"
      >
        ×
      </button>

      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <img src="/src/assets/icons//Logo Delizioso (1).png" alt="Logo" class="w-40" />
        <div class="flex gap-4">
          <button class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-orange-500 transition">Sign In</button>
          <button class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-orange-500 transition">Sign Up</button>
        </div>
      </div>

      <!-- Icon -->
      <div class="flex justify-center mb-10">
        <img src="@/assets/icons/Picture (7).png" alt="Icon" class="w-32 md:w-48" />
      </div>

      <!-- Reservation Details -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold mb-8">Reservation Details</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/Icon calender.png" alt="Calendar" class="w-6" />
            <span class="capitalize text-lg">{{ reservationData.date }}</span>
          </div>
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/Icon Time.png" alt="Time" class="w-6" />
            <span class="capitalize text-lg">{{ reservationData.time }}</span>
          </div>
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/icon people.png" alt="People" class="w-6" />
            <span class="capitalize text-lg">{{ reservationData.chairs }}</span>
          </div>
        </div>
        <div class="mt-8 bg-cyan-100 px-6 py-4 rounded-md">
          <p class="text-gray-700">
            Due to limited availability, we can hold this table for you for 
            <span class="font-semibold text-black">5:00 minutes</span>.
          </p>
        </div>
      </div>

      <!-- Order Form -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Data Order</h2>
        <form @submit.prevent="validateForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input v-model="firstName" type="text" placeholder="First name"
            class="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"/>
          <input v-model="lastName" type="text" placeholder="Last name"
            class="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"/>
          <input v-model="telephone" type="tel" placeholder="Telephone number"
            class="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"/>
          <input v-model="email" type="email" placeholder="Email address"
            class="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"/>

          <!-- Custom Select -->
          <div class="relative col-span-full">
            <div @click="toggleDropdown"
              class="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 cursor-pointer text-center">
              {{ selectedOption }}
            </div>
            <div v-if="dropdownOpen"
              class="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md max-h-52 overflow-y-auto z-30">
              <div v-for="option in options" :key="option"
                @click="selectOption(option)"
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center">
                {{ option }}
              </div>
            </div>
          </div>

          <!-- Special Request -->
          <textarea v-model="specialRequest" rows="3" placeholder="Add a special request"
            class="col-span-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none resize-none"></textarea>

          <!-- Radio Inputs -->
          <div class="col-span-full flex flex-col gap-4 text-sm text-gray-700">
            <label class="flex items-center gap-2">
              <input type="radio" name="agreement" class="w-4 h-4" />
              I agree with what is stated above
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="newsletter1" class="w-4 h-4" />
              Sign me up to receive dining offers and news from this restaurant by email.
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="newsletter2" class="w-4 h-4" />
              Sign me up to receive dining offers and news from this restaurant by email.
            </label>
          </div>

          <!-- Confirm Button -->
          <button type="submit"
            class="col-span-full mt-4 w-full md:w-auto px-8 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 active:scale-95 transition">
            Confirm reservation
          </button>
        </form>
      </div>

      <!-- Restaurant Information -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-4">Restaurant Information</h2>
        <p class="mb-4 text-gray-600">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <p class="text-gray-600">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['reservationData'])

const firstName = ref('')
const lastName = ref('')
const telephone = ref('')
const email = ref('')
const specialRequest = ref('')
const selectedOption = ref('Select an occasion (optional)')
const dropdownOpen = ref(false)

const options = ['Birthday', 'Anniversary', 'Business', 'Other']

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const selectOption = (option) => {
  selectedOption.value = option
  dropdownOpen.value = false
}

const regaxName = /^[a-zA-Z ,.'-]+$/
const regaxTel = /^[0-9]{10,15}$/

const validateForm = () => {
  if (!regaxName.test(firstName.value)) {
    alert('First name is invalid.')
    return
  }
  if (!regaxName.test(lastName.value)) {
    alert('Last name is invalid.')
    return
  }
  if (!regaxTel.test(telephone.value)) {
    alert('Telephone number is invalid.')
    return
  }
  alert('Reservation confirmed!')
}

const goToHomePage = () => {
  window.location.href = '/reservation'
}
</script>
