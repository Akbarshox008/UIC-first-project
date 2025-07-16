<template>
  <div class="relative z-0 py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        
        <!-- Left Image -->
        <div class="md:w-1/2 h-80 md:h-auto">
          <img
            src="@/assets/icons/Picture (5).png"
            alt="Table Reservation Image"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Right Form -->
        <div class="flex flex-col md:w-1/2 p-8 md:p-12 items-center justify-center">
          <h1 class="text-4xl md:text-5xl font-bold text-center mb-10">Book a table</h1>

          <form @submit.prevent="handleSubmit" class="flex flex-col gap-6 w-full max-w-md">
            <input
              type="date"
              v-model="reservationDate"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="time"
              v-model="reservationTime"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <!-- Custom Select -->
            <div class="relative w-full">
              <div
                @click="toggleDropdown"
                class="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 cursor-pointer select-none text-center"
              >
                {{ selectedOption }}
              </div>
              <div
                v-if="dropdownOpen"
                class="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md max-h-52 overflow-y-auto shadow-md z-20"
              >
                <div
                  v-for="option in options"
                  :key="option"
                  @click="selectOption(option)"
                  class="px-4 py-2 hover:bg-gray-100 text-center cursor-pointer"
                >
                  {{ option }}
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 active:scale-95 transition"
            >
              Book now
            </button>
          </form>
        </div>
      </div>

      <!-- Show Reservation2 if needed -->
      <Reservation2 v-if="showReservation2" :reservationData="reservationData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Reservation2 from "../Reservation/Reservation2.vue";

const reservationDate = ref("");
const reservationTime = ref("");
const selectedOption = ref("Select chairs");
const dropdownOpen = ref(false);

const showReservation2 = ref(false);
const reservationData = ref({});

const options = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "10+",
];

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  dropdownOpen.value = false;
};

const handleSubmit = () => {
  if (reservationDate.value && reservationTime.value && selectedOption.value !== "Select chairs") {
    reservationData.value = {
      date: reservationDate.value,
      time: reservationTime.value,
      chairs: selectedOption.value,
    };
    showReservation2.value = true;

    // Reset form
    reservationDate.value = "";
    reservationTime.value = "";
    selectedOption.value = "Select chairs";
  } else {
    alert("Please fill in all fields correctly.");
  }
};
</script>
