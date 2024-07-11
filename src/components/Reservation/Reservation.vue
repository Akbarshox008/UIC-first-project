<template>
<div class="homes">
  <div class="container">
      <div class="reservation">
        <div class="part1">
          <img src="/src/assets/icons/Picture (5).png" alt="Table Reservation Image">
        </div>
        <div class="part2">
          <h1>Book a table</h1>
          <form @submit.prevent="handleSubmit">
            <input type="date" v-model="reservationDate" required>
            <input type="time" v-model="reservationTime" required>
            <div class="custom-select">
              <div class="selected-option" @click="toggleDropdown">{{ selectedOption }}</div>
              <div class="options" v-show="dropdownOpen">
                <div v-for="option in options" :key="option" @click="selectOption(option)" class="option">
                  {{ option }}
                </div>
              </div>
            </div>
            <button type="submit" class="btn">Book now</button>
          </form>
        </div>
      </div>
      <Reservation2 v-if="showReservation2" :reservationData="reservationData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Reservation2 from '../Reservation/Reservation2.vue';

const options = ref([
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
  "10 more",
]);

const selectedOption = ref("Select a chairs");
const dropdownOpen = ref(false);
const showReservation2 = ref(false);
const reservationDate = ref('');
const reservationTime = ref('');
const reservationData = ref({});

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  dropdownOpen.value = false;
};

const handleSubmit = () => {
  if (reservationDate.value && reservationTime.value && selectedOption.value !== "Select a chairs") {
    reservationData.value = {
      date: reservationDate.value,
      time: reservationTime.value,
      chairs: selectedOption.value
    };
    showReservation2.value = true;

    // Clear the form
    reservationDate.value = '';
    reservationTime.value = '';
    selectedOption.value = "Select a chairs";
  }
};
</script>
<style scoped>
.reservation {
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  border-radius: 5PX;
  margin-top: 100px
}
.homes{
  /* position: relative; */
  z-index: -1;
}
.part1 {
  flex: 1;
}

.part1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.part2 {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.part2 h1 {
  margin-bottom: 40px;
  font-size: 60px;
  color: #333;
  text-align: center;
}

.part2 form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 46%;
}

.part2 input,
.part2 select {
  border: none;
  background: #d0ccc74d;
  border-radius: 5px;
  padding: 20px 30px;
  font-size: 18px;
}

.custom-select {
  position: relative;
  width: 100%;
  z-index: 1;
}

.selected-option {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background: #d0c9c9a2;
  text-align: center;
  font-size: 18px;
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px; /* Adjust the max-height as needed */
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Enable vertical scrolling */
  z-index: 10;
}

.option {
  padding: 10px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
}

.option:hover {
  background: #f0f0f0;
}

input[type="time"] {
  width: 100%;
}

.part2 select {
  width: 100%;
}

.btn {
  padding: 18px 30px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: orangered;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transform: scale(.99);
  margin-top: 10px;
}

.btn:hover {
  transform: scale(1.02);
  transition: .4s;
}

.btn:active {
  transform: scale(.95);
  transition: .4s;
}
</style>
