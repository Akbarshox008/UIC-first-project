<template>
  <div class="container">
    <div class="Reservation2">
        <article @click="goToHomePage" class="delete">
          <h1>x</h1>
        </article>
      <div class="items">
        <article class="items-child">
          <img src="/src/assets/icons/Logo Delizioso.png" alt="logo" />
          <div class="button">
            <button class="btn">Sign In</button>
            <button class="btn">Sign Up</button>
          </div>
        </article>
        <div class="icon">
          <img src="/src/assets/icons/Picture (7).png" alt="" />
        </div>
        <div class="text">
          <h1>Reservation detail</h1>
          <div class="text-home">
            <article class="text-icons">
              <article class="text-item">
                <img src="/src/assets/icons/Icon calender.png" alt="" />
                <h1 class="pro">{{ reservationData.date }}</h1>
              </article>
              <article class="text-item">
                <img src="/src/assets/icons/Icon Time.png" alt="" />
                <h1 class="pro">{{ reservationData.time }}</h1>
              </article>
              <article class="text-item">
                <img src="/src/assets/icons/icon people.png" alt="" />
                <h1 class="pro">{{ reservationData.chairs }}</h1>
              </article>
            </article>
            <div class="text-block">
              <h1>
                Due to limited availability, we can hold this table for you for
                <span>5:00 minutes</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="forma">
          <h1>Data order</h1>
          <form @submit.prevent="validateForm">
            <input class="inputtt" v-model="firstName" type="text" placeholder="First name"/>
            <input class="inputtt" v-model="lastName" type="text" placeholder="Last name"/>
            <input class="inputtt" v-model="telephone" type="number" placeholder="Telephone number" />
            <input class="inputtt" v-model="email" type="email" placeholder="Email address" />
            <div class="custom-select">
              <div class="selected-option" @click="toggleDropdown">
                {{ selectedOption }}
              </div>
              <div class="options" v-show="dropdownOpen">
                <div
                  v-for="option in options"
                  :key="option"
                  @click="selectOption(option)"
                  class="option"
                >
                  {{ option }}
                </div>
              </div>
            </div>
            <textarea v-model="specialRequest" cols="40" rows="3" placeholder="Add a special request"></textarea>
            <article>
              <article class="checkbox">
                <article class="check">
                  <input class="inps" type="radio" name="group" />
                  <h2>I agree with what is stated above</h2>
                </article>
                <article class="check">
                  <input class="inp" type="radio" name="group" />
                  <h2>
                    Sign me up to receive dining offers and news from this
                    restaurant by email.
                  </h2>
                </article>
                <article class="check">
                  <input class="inp" type="radio" name="group" />
                  <h2>
                    Sign me up to receive dining offers and news from this
                    restaurant by email.
                  </h2>
                </article>
              </article>
              <button class="btn" type="submit">Confirm reservation</button>
            </article>
            <article class="infos">
              <h1 class="info-h1">Restaurant information</h1>
              <p class="info-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p class="info-pp">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam.
              </p>
            </article>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(['reservationData']);

const firstName = ref("");
const lastName = ref("");
const telephone = ref("");
const email = ref("");
const specialRequest = ref("");
const selectedOption = ref("Select an occasion (optional)");
const dropdownOpen = ref(false);

const regaxName = /^[a-zA-Z ,.'-]+$/;
const regaxSurname = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
const regaxTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const regaxTextarea = /[A-Za-z]/;

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const validateForm = () => {
  if (!regaxName.test(firstName.value)) {
    alert("First name is invalid.");
    return;
  }
  if (!regaxSurname.test(lastName.value)) {
    alert("Last name is invalid.");
    return;
  }
  if (!regaxTel.test(telephone.value)) {
    alert("Telephone number is invalid.");
    return;
  }
  if (!regaxTextarea.test(specialRequest.value)) {
    alert("Special request is invalid.");
    return;
  }
  
  alert("Form submitted successfully!");
  firstName.value = '';
  lastName.value = '';
  telephone.value = '';
  specialRequest.value = '';
  selectedOption.value = 'Select an occasion (optional)';
};

const goToHomePage = () => {
  window.location.href = '/reservation'; 
};
</script>
<style scoped>
.Reservation2 {
  width: 100%;
  position: relative;
  top: -900px;
  z-index: 10;
  padding: 0px 0px 50px 0px;
}
.delete {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0px;
  padding-top: 1px;
  position: relative;
  top: 10px;
  &:active{
    transform: scale(.95);
  }

  h1 {
    padding: 10px 15px;
    border-radius: 50%;
    border: 1px solid #000;
    font-size: 30px;
    background: #fff;
    cursor: pointer;
    &:hover {
      border: none;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.645);
    }
  }
}
.items {
  max-width: 1000px;
  height: auto;
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px 30px;
  border-radius: 10px;
}
.items-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 180px;
  }
  .button {
    display: flex;
    gap: 40px;
    .btn {
      border-radius: 10px;
      border: none;
      background: rgba(0, 128, 0, 0.795);
      padding: 10px 30px;
      font-size: 18px;
      font-weight: 600;
      color: #000;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: orangered;
        transition: 0.4s;
        transform: scale(1.03);
      }
      &:active {
        transform: scale(0.95);
        transition: 0.5s;
      }
    }
  }
}
.items::after{
    content: '';
    position: absolute;
    top: 1px;
    width: 100%;
    height:100%;
    background: #311f09b5;
    left: 0;
    right: 0;
    z-index:-10;
    border-radius: 10px;
  }
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0px;  
}
.text {
  text-align: center;
  .text-icons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    .text-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      .pro {
        font-size: 19px;
        text-transform: capitalize;
      }
    }
  }
  .text-block {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 10px;
    border-radius: 10px;
    background: aqua;
    margin: 100px 0px;
    h1 {
      color: rgb(107, 106, 106);
      span {
        color: #000;
      }
    }
  }
}
.forma {
  form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
    gap: 40px;
    margin: 50px 0px;
    align-items: center;
    justify-content: space-around;
    .inputtt{
      padding: 15px;
      background: transparent;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      border: none;
      outline: none;
      border-radius: 10px;
      font-size: 19px;
      margin-left: -35px;
    }
    textarea {
      padding: 5px 10px;
      background: transparent;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      border: none;
      outline: none;
      border-radius: 10px;
      margin-left: -35px;
    }
  }
}
.custom-select {
  position: relative;
  width: 100%;
  z-index: 1;
}

.selected-option {
  padding: 15px;
  background: transparent;
  margin-left: -35px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 19px;
  text-transform: capitalize;
  text-align: center;
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px; /* Adjust the max-height as needed */
  border: 1px solid #ccc;
  border-radius: 5px;
  text-transform: capitalize;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Enable vertical scrolling */
  z-index: 10;
  font-size: 19px;
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
.checkbox{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 15px;
  margin-bottom: 20px;
  gap: 40px;
  .check{
    display: flex;
    gap:30px;
    .inp{
      font-size: 20px;
      width: 50px;
    }
    .inps{
      width: 30px ;
    }
  }
}
.btn{
  padding:15px 45px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  background: orangered;
  color: #fff;
  margin-top: 30px;
  cursor: pointer;
  &:hover{
    transform: scale(1.04);
  }
  &:active{
    transform: scale(.98);
  }
}
.infos{
  .info-h1{
    font-size: 25px;
    margin: 20px 0px;
  }
  .info-p{
    font-size: 17px;
    width: 81%;
    margin-bottom: 20px;
    line-height: 27px;
  }
  .info-pp{
    font-size: 17px;
    width: 81%;
    line-height: 26px;
  }
}
</style>
