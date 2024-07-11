<template >
    <div>
        <footer>
            <div class="container">
                <div class="footer-home">
                    <div class="footer-item1">
                        <RouterLink to="/"><img src="/src/assets/icons/Logo Delizioso (1).png" alt="" /></RouterLink>
                        <h2>
                            Viverra gravida morbi egestas facilisis tortor netus non duis
                            tempor.
                        </h2>
                        <div class="footer-icons">
                            <a href="https://x.com/?lang=ru" target="_blank"> <img class="icons"
                                    src="/src/assets/icons/twitter.png" alt="" /></a>
                            <a href="https://www.facebook.com/?locale=ru_RU" target="_blank"><img class="icons"
                                    src="/src/assets/icons/Facebook.png" alt="" /></a>
                            <a href="https://www.instagram.com/" target="_blank"><img class="icons"
                                    src="/src/assets/icons/Instagram.png" alt="" /></a>
                        </div>
                    </div>
                    <div class="footer-item2">
                        <h1 class="footer-list-h1">Page</h1>
                        <article class="footer-list">
                            <RouterLink to="/">
                                <h3>Home</h3>
                            </RouterLink>
                            <RouterLink to="/menyu">
                                <h3>Menu</h3>
                            </RouterLink>
                            <RouterLink to="/order">
                                <h3>Order online</h3>
                            </RouterLink>
                            <RouterLink to="/menyu">
                                <h3>Catering</h3>
                            </RouterLink>
                            <RouterLink to="/reservation">
                                <h3>Reservation</h3>
                            </RouterLink>
                        </article>
                    </div>
                    <div class="footer-item3">
                        <h1 class="footer-list3-h1">Information</h1>
                        <article class="footer-list3">
                            <RouterLink to="/about">
                                <h3>About us</h3>
                            </RouterLink>
                            <RouterLink to="/korzina">
                                <h3>Testimonial</h3>
                            </RouterLink>
                            <RouterLink to="/contact">
                                <h3>Event</h3>
                            </RouterLink>
                        </article>
                    </div>
                    <div class="footer-item2">
                        <h1 class="footer-list-h2">Get in touch</h1>
                        <article class="footer-list">
                            <h3>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</h3>
                            <h3>delizioso@gmail.com</h3>
                            <h3>+123 4567 8901</h3>
                        </article>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
    footer {
  position: relative;
  width: 100%;
  background: #311f09;
  /* width: 100%; */
  height:max-content;
  padding: 60px 0px;
  margin-top: 100px;
  .footer-item1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    h2 {
      width: 90%;
      line-height: 35px;
      font-weight: 5 class= "icons" 00;
      color: #fff;
    }
    .footer-icons {
      display: flex;
      gap: 15px;
      .icons {
        width: 50px;
        transform: scale(0.91);
        cursor: pointer;
        &:hover {
          transform: scale(1);
          transition: 0.5s;
        }
        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
  .footer-item2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    color: #fff;
    a{
      text-decoration: none;
      color: #fff;
    }
    .footer-list-h1 {
      color: #ff8a00;
      margin-right: 60px;
    }
    .footer-list-h2 {
      color: #ff8a00;
      margin-left: -165px;
      margin-top: -66px;
    }
    .footer-list {
      display: flex;
      flex-direction: column;
      gap: 30px;
      font-size: 17px;
      font-weight: 500;
      text-align: start;
      h3 {
        cursor: pointer;
        user-select: none;
        &:hover {
          color: #ff8a00;
        }
        &:active {
          transform: scale(0.95);
          transition: 0.3s;
        }
      }
    }
  }

  .footer-item3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    color: #fff;
    .footer-list3-h1 {
      color: #ff8a00;
      margin-left: 30px;
      margin-top: -90px;
    }
    .footer-list3 {
      display: flex;
      flex-direction: column;
      gap: 30px;
      font-size: 17px;
      font-weight: 500;
      text-align: start;
      a {
        text-decoration: none;
      }
      h3 {
        color: #fff;
        cursor: pointer;
        user-select: none;
        &:hover {
          color: #ff8a00;
        }
        &:active {
          transform: scale(0.9);
          transition: 0.3s;
        }
      }
    }
  }
  .footer-home {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
    justify-content: space-between;
  }
}
</style>