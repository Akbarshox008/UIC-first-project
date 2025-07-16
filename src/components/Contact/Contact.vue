<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-12 mt-28">
      <!-- Form Block -->
      <div class="bg-white rounded-lg shadow-lg p-8 flex-1">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">Contact us</h1>
        <p class="text-center text-lg mb-8 max-w-xl mx-auto">
          We love hearing from our customers. Feel free to share your experience or ask any questions you may have.
        </p>

        <form @submit.prevent="validateForm" class="grid gap-6">
          <input
            v-model="firstName"
            type="text"
            placeholder="First name"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            v-model="lastName"
            type="text"
            placeholder="Last name"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            v-model="email"
            type="email"
            placeholder="Email address"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            v-model="subject"
            type="text"
            placeholder="Subject"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            v-model="specialRequest"
            rows="4"
            placeholder="Add a special request"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            class="w-full py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Confirm reservation
          </button>
        </form>
      </div>

      <!-- Map Block -->
      <div class="flex-1 relative">
        <iframe
          src="https://maps.app.goo.gl/2YFezckxqKYdFntC8"
          width="100%"
          height="450"
          class="rounded-lg shadow-md"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
        >
          <img src="/src/assets/icons/unsplash_cHdvSYDK75E.png" alt="" class="w-20 h-20 rounded-full"/>
          <div>
            <h1 class="text-xl font-bold mb-1">Velara Hotel</h1>
            <p class="text-sm text-gray-600">Bronx, NY 10463, Amerika Serikat</p>
            <p class="text-sm text-gray-600">40.885147,-73.9220459</p>
          </div>
          <a
            href="https://web.telegram.org/a/"
            target="_blank"
            class="p-3 rounded-full bg-[#311F09] hover:bg-[#503214] transition"
          >
            <img src="/src/assets/icons/Icon.png" alt="" class="w-6 h-6"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// ✅ State
const router = useRouter();
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const specialRequest = ref('');
const subject = ref('');

// ✅ Regex
const regaxName = /^[a-zA-Z ,.'-]+$/;
const regaxSurname = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
const regaxTextarea = /[A-Za-z]/;
const regaxEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ✅ Validate function with alert OR Tailwind notification
const validateForm = () => {
  if (!regaxName.test(firstName.value)) {
    alert('❌ First name is invalid.');
    return;
  }
  if (!regaxSurname.test(lastName.value)) {
    alert('❌ Last name is invalid.');
    return;
  }
  if (!regaxEmail.test(email.value)) {
    alert('❌ Email is invalid.');
    return;
  }
  if (!regaxTextarea.test(specialRequest.value)) {
    alert('❌ Special request is invalid.');
    return;
  }

  // Simulate successful submission
  alert('✅ Your reservation was submitted successfully!');

  // Reset fields
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  specialRequest.value = '';
  subject.value = '';

  // Navigate to success page
  router.push('/userpage');
};
</script>
