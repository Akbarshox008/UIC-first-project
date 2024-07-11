<template>
  <div class="Sign-home">
    <div class="sign-card">
      <article class="logo">
        <h2>D</h2>
      </article>
      <div class="card-home">
        <h1>Login</h1>
        <h3>Don't have an account? <router-link to="/sign-up">Sign up</router-link></h3>
        <form @submit.prevent="login">
          <div class="input-home">
            <div class="input-group">
              <label>Email address
                <input type="email" id="email" v-model="email" required />
              </label>
            </div>
            <div class="input-group">
              <label>Password
                <input type="password" id="password" v-model="password" required />
              </label>
            </div>
            <div class="action">
              <div class="action-child">
                <input type="checkbox" v-model="rememberMe" />
                <p>
                  Remember me
                  <a href="https://careers.librariesni.org.uk/forgotten-password.aspx" target="_blank">Forget Password?</a>
                </p>
              </div>
            </div>
          </div>
          <button type="submit">Login</button>
          <p v-if="message" :class="{'success': success, 'error': !success}">{{ message }}</p>
        </form>
      </div>
    </div>
    <div class="sign-card2"></div>
  </div>
</template>

<script>
export default {
  props: {
    fullname: String,
    email: String,
    password: String,
  },
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      message: '',
      success: false,
    };
  },
  methods: {
    login() {
      if (this.email === 'user@example.com' && this.password === 'password') {
        this.message = 'Login successful!';
        this.success = true;
        // Handle your routing logic or state management here
        // Example: this.$router.push({ name: 'home' });
      } else {
        this.message = 'Invalid credentials';
        this.success = false;
      }

      // Reset fields
      this.email = '';
      this.password = '';
      this.rememberMe = false;
    },
  },
};
</script>

<style scoped>
.Sign-home {
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}

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
}
.logo:hover {
  transform: scale(1.04);
  transition: .5s;
}
.logo:active {
  transform: scale(.99);
  transition: .5s;
}

.sign-card2 {
  background-image: url('/src/assets/icons/unsplash_8Nc_oQsc2qQ.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 45%;
  height: 100%;
}

.sign-card {
  width: 50%;
}

.card-home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
}
.card-home h1 {
  font-size: 55px;
  font-weight: 600;
  line-height: 70px;
  margin: 60px 0px 20px;
}
.card-home h3 {
  font-size: 20px;
  color: rgb(60, 59, 59);
  margin-bottom: 50px;
}
.card-home h3 a {
  text-decoration: none;
}
.card-home form {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  width: 100%;
}
.input-home {
  width: 100%;
}
.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.input-group label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  font-size: 19px;
  line-height: 30px;
  width: 100%;
  gap: 10px;
  cursor: pointer;
  margin: 15px 0px;
}
.input-group label input {
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

.action {
  font-size: 18px;
  display: flex;
  align-items: center;
}
.action-child {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}
.action-child input {
  position: relative;
  top: 16px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 40px;
}
.action-child p {
  display: flex;
  gap: 200px;
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
}
button:hover {
  transform: scale(1.02);
  transition: .5s;
}
button:active {
  transform: scale(.99);
  transition: .5s;
}

p {
  margin-top: 20px;
  font-size: 16px;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>
