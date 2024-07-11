<template>
  <div class="container">
    <div class="About">
      <div class="part1">
        <img src="/src/assets/icons/Picture (4).png" alt="" />
        <article class="text">
          <h1>
            <p class="h1_p">Our</p>
            restautant
          </h1>
          <p class="about_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </article>
      </div>
      <div class="part2">
        <article class="text">
          <p class="about_ps">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </article>
        <img
          class="part2-img"
          src="/src/assets/icons/unsplash_5dsZnCVDHd0.png"
          alt=""
        />
      </div>
      <div class="part3">
        <img
          class="img-part3"
          src="/src/assets/icons/unsplash_lRAWcT7uwhY.png"
          alt=""
        />
        <article class="texts">
          <h1>
            <span class="h1_pp">Owner </span>& <br />
            Executive Chef
          </h1>
          <h2>Ismail Marzuki</h2>
          <p class="about_pp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.About {
  padding-top: 100px;
  .part1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
    gap: 70px;
    img {
      position: relative;
      width: 49%;
    }
    h1 {
      font-size: 70px;
      line-height: 80px;
      margin-bottom: 20px;
      .h1_p {
        color: rgb(255, 83, 21);
      }
    }
    .about_p {
      font-size: 19px;
      font-weight: 500;
      line-height: 30px;
      width: 55%;
    }
  }
  .part2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
    gap: 10px;
    .about_ps {
      font-size: 20px;
      font-weight: 500;
      line-height: 40px;
      width: 48%;
    }
    .part2-img {
      width: 40%;
      height: 450px;
      margin-right: 100px;
    }
  }
  .part3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 330px;
    .img-part3 {
      width: 48%;
      height: 550px;
    }
    h1 {
      font-size: 70px;
      font-weight: 80px;
      margin-bottom: 20px;
    }
    .h1_pp {
      color: rgb(250, 85, 25);
    }
    h2 {
      font-size: 40px;
      line-height: 60px;
      margin-bottom: 20px;
    }
    .about_pp {
      font-size: 20px;
      font-weight: 500;
      line-height: 35px;
      width: 40%;
    }
  }
}
</style>
