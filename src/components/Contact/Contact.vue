<template>
  <div class="container">
    <div class="contact">
      <div class="items">
        <div class="forma">
          <h1>Contact us</h1>
          <article class="p-home">
            <p>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.
            </p>
          </article>
          <form @submit.prevent="validateForm">
            <input class="inputtt" v-model="firstName" type="text" placeholder="First name" required />
            <input class="inputtt" v-model="lastName" type="text" placeholder="Last name" required />
            <input class="inputtt" v-model="email" type="email" placeholder="Email address" required />
            <input class="inputtt" v-model="subject" type="text" placeholder="Subject" required />
            <textarea v-model="specialRequest" cols="80" rows="3" placeholder="Add a special request"></textarea>
            <article></article>
            <article>
              <button class="btn" type="submit">Confirm reservation</button>
            </article>
          </form>
        </div>
      </div>
      <div class="item2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5989.957997474653!2d69.2885234!3d41.3528102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d2e88637151%3A0xfe2fe291a4c4f5ea!2sVELARA%20HOTEL!5e0!3m2!1sru!2s!4v1720161532621!5m2!1sru!2s"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <article class="desable">
          <img src="/src/assets/icons/unsplash_cHdvSYDK75E.png" alt="">
          <article class="texts-map">
            <h1 class="map-h1">Velara Hotel</h1>
            <span>Bronx, NY 10463, Amerika Serikat</span>
            <span>40.885147,-73.9220459</span>
          </article>
          <article class="icon-home">
          <a href="https://web.telegram.org/a/" target="_blank">
            <img src="/src//assets/icons/Icon.png" alt="">
          </a> 
          </article>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const specialRequest = ref('');
const subject = ref('');

const regaxName = /^[a-zA-Z ,.'-]+$/;
const regaxSurname = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
const regaxTextarea = /[A-Za-z]/;
const regaxEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const validateForm = () => {
  if (!regaxName.test(firstName.value)) {
    alert('First name is invalid.');
    return;
  }
  if (!regaxEmail.test(email.value)) {
    alert('Email is invalid');
    return;
  }
  if (!regaxSurname.test(lastName.value)) {
    alert('Last name is invalid.');
    return;
  }
  if (!regaxTextarea.test(specialRequest.value)) {
    alert('Special request is invalid.');
    return;
  }

  console.log('Form submitted successfully!');
  firstName.value = '';
  lastName.value = '';
  specialRequest.value = '';
  subject.value = '';
  email.value = '';

  router.push('/userpage');
};
</script>

<style scoped>
.items {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 100px;
}

.item2 {
  width: 100%;
  height: max-content;
  margin-top: 90px;
  position: relative;
  left: 0;
  right: 0;
  
  iframe {
    width: 100%;
    border-radius: 5px;
  }
  .desable{
    position: absolute;
    top: 30%;
    left: 30%;
    opacity: 0.8;
    z-index: 2223;
    display: flex;
    padding: 10px;
    background: #FFFFFF;
    box-shadow:  10px 10px 10px rgba(2, 149, 247, 0.15);
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    .icon-home{
      padding: 25px 25px 15px 15px ;
      border-radius: 50%;
      background: #311F09;
      opacity: 1;
    }
  }
}

.forma h1 {
  font-size: 60px;
  text-align: center;
  line-height: 80px;
  margin-bottom: 20px;
}

.p-home {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

p {
  font-size: 23px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 90px;
  width: 60%;
  line-height: 30px;
}

.forma form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, .5fr));
  gap: 30px;
}

.inputtt,
textarea {
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
}

.btn {
  padding: 15px 90px;
  font-size: 18px;
  font-weight: bold;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 50px;
}

.btn:hover {
  background-color: #ff4500;
}
</style>
