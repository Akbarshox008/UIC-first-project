<template>
    <div>
        <header>
            <div class="header">
                <div class="container">
                    <nav>
                        <article class="logo">
                            <RouterLink to="/"><img src="/src/assets/icons/Logo Delizioso.png" alt="" /></RouterLink>
                        </article>
                        <article class="list">
                            <RouterLink to="/">Home</RouterLink>
                            <RouterLink to="/menyu">Menu</RouterLink>
                            <RouterLink to="/about">About Us</RouterLink>
                            <RouterLink to="/order ">Order online</RouterLink>
                            <RouterLink to="/reservation">Reservation</RouterLink>
                            <RouterLink to="/contact ">Contact us</RouterLink>
                        </article>
                        <article class="cart">
                            <RouterLink to="/korzina"><img src="/src//assets/icons/Cart.png" alt="no img" /></RouterLink>
                            <RouterLink to="/login"><button class="btn">Sign In</button></RouterLink>
                        </article>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
nav {
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #b9b9b9;
  opacity: .8;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1999;
  .logo {
    img {
      &:active {
        transform: translateY(2px);
        transition: 0.3s;
      }
    }
  }

  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    /* margin-left: 30px; */

    a {
      text-decoration: none;
      font-size: 17px;
      font-weight: 600;
      color: #000;
      &:hover {
        color: #ff8a00;
        transition: 0.4s;
        transform: scale(1.1);
      }

    }
  }
  a:active {
    transform:scale(1);
    transition: 0.3s;
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-left: 50px;
    img {
      &:active {
        transform: translateY(2px);
        transition: 0.3s;
      }
    }

    .btn {
      padding: 10px 40px;
      border-radius: 30px;
      border: none;
      background: #3fa72f;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      color: #fff;

      &:hover {
        border: 1.5px solid #3fa72f;
        color: #000;
        background: none;
        box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.15);
        transition: 0.8s;
      }

      &:active {
        transform: translateY(2px);
        transition: 0.3s;
        box-shadow: none;
      }
    }
  }
}
</style>