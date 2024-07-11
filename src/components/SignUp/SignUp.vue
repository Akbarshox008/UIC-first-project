<template>
  <div class="signUp">
    <div v-if="formVisible" class="Sign-home">
      <div class="sign-card">
        <article class="logo">
          <h2>D</h2>
        </article>
        <div class="card-home">
          <h1>Sign Up</h1>
          <h3>Don't have an account? <RouterLink to="/login">Login</RouterLink>
          </h3>
          <form @submit.prevent="login">
            <div class="input-home">
              <div class="input-group">
                <label>Full name
                  <input placeholder="Full name" type="text" v-model="fullname">
                </label>
                <span v-if="errors.fullname" class="error">{{ errors.fullname }}</span>
              </div>
              <div class="input-group">
                <label>Email address
                  <input placeholder="Email" type="email" id="email" v-model="email" required />
                </label>
                <span v-if="errors.email" class="error">{{ errors.email }}</span>
              </div>
              <div class="input-group">
                <label>Password
                  <input placeholder="Password" type="password" id="password" v-model="password" required />
                </label>
                <span v-if="errors.password" class="error">{{ errors.password }}</span>
              </div>
              <div class="action">
                <div class="action-child">
                  <input type="checkbox" v-model="rememberMe" />
                  <p>
                    Remember me
                    <a href="https://careers.librariesni.org.uk/forgotten-password.aspx" target="_blank">Forget
                      Password?</a>
                  </p>
                </div>
              </div>
            </div>
            <button type="submit">
              Sign up
            </button>
            <div id="g_id_onload" data-client_id="YOUR_GOOGLE_CLIENT_ID" data-callback="handleCredentialResponse"></div>
            <div class="g_id_signin" data-type="standard"></div>
          </form>
        </div>
      </div>
      <div class="sign-card2"></div>
    </div>
    <div v-else>
      <Nav />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Nav from '../Nav/Nav.vue';
import Footer from '../Footer/Footer.vue';

const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const regexFullname = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;

export default {
  components: {
    Nav,
    Footer,
    RouterLink,
    RouterView
  },
  data() {
    return {
      fullname: '',
      email: '',
      password: '',
      rememberMe: false,
      errors: {
        fullname: '',
        email: '',
        password: '',
      },
      formVisible: true,
    };
  },
  created() {
    if (localStorage.getItem('signUpSeen')) {
      this.formVisible = false;
    }
  },
  methods: {
    login() {
      this.errors = { fullname: '', email: '', password: '' };
      let valid = true;

      if (!this.validateEmail(this.email)) {
        this.errors.email = 'Please enter a valid email address.';
        valid = false;
      }
      if (!this.validateFullname(this.fullname)) {
        this.errors.fullname = 'Please enter a valid full name.';
        valid = false;
      }
      if (!this.validatePassword(this.password)) {
        this.errors.password = 'Password must be at least 6 characters(0-9, A-z)';
        valid = false;
      }

      if (!valid) return;

      if (this.email === 'example@email.com' && this.password === 'password') {
        this.$router.push({ name: 'parents' });
      } else {
        console.log('Invalid credentials');
        console.log('Email:', this.email);
        console.log('Fullname:', this.fullname);
        console.log('Password:', this.password);
        this.formVisible = false;  // Hide form on successful login
        localStorage.setItem('signUpSeen', 'true');
      }

      this.fullname = '';
      this.email = '';
      this.password = '';
      this.rememberMe = false;
    },
    validateEmail(email) {
      return regexEmail.test(email);
    },
    validatePassword(password) {
      return regexPassword.test(password);
    },
    validateFullname(fullname) {
      return regexFullname.test(fullname);
    },
    handleCredentialResponse(response) {
      console.log('Encoded JWT ID token:', response.credential);
    },
  },
};
</script>

<style scoped>

.Sign-home {
  max-width: 1300px;
  height: max-content;
  margin: auto;
  padding: 0;
  height: 100vh;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 7%;
    text-align: center;
    padding: 10px 15px;
    border-radius: 50%;
    background: #FF8A00;
    display: flex;
    align-items: center;
    position: relative;
    top: 1%;
    color: #fff;
    cursor: pointer;

    &:hover {
      transform: scale(1.04);
      transition: .5s;
    }

    &:active {
      transform: scale(.99);
      transition: .5s;
    }
  }

  .sign-card2 {
    background-image: url(/src/assets/icons/unsplash_8Nc_oQsc2qQ.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 45%;
    height: 100%;
  }

  .sign-card {
    width: 50%;

    .card-home {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 50px;

      h1 {
        font-size: 55px;
        font-weight: 600;
        line-height: 70px;
        margin: 60px 0px 20px;
      }

      h3 {
        font-size: 20px;
        color: rgb(60, 59, 59);
        margin-bottom: 50px;

        a {
          text-decoration: none;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: self-start;
        width: 100%;

        .input-home {
          width: 100%;

          .input-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;

            label {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: start;
              font-size: 19px;
              line-height: 30px;
              width: 100%;
              gap: 10px;
              cursor: pointer;

              input {
                padding: 15px 25px;
                font-size: 18px;
                width: 80%;
                margin-bottom: 20px;
                border-radius: 10px;
                border: none;
                outline: none;
                background: #ccc;
                opacity: .6;
              }
            }
          }
        }

        .action {
          font-size: 18px;
          display: flex;
          align-items: center;

          .action-child {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          input {
            position: relative;
            top: 16px;
            width: 20px;
            height: 20px;
            margin-top: 10px;
            margin-bottom: 40px;
          }
        }

        button {
          padding: 15px 25px;
          border-radius: 15px;
          border: none;
          background: #FF8A00;
          width: 80%;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          color: #fff;

          &:hover {
            transform: scale(1.02);
            transition: .5s;
          }

          &:active {
            transform: scale(.99);
            transition: .5s;
          }
        }
      }
    }

  }
}

.error {
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
}

.g_id_signin {
  margin-top: 10px;
}
</style>
