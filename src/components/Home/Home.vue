<template>
    <div class="container">
        <div class="home">
            <div class="box1">
                <button class="bts">Restauran</button>
                <h1>Italian Cuisine</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique
                    donec eget.
                </p>
                <article class="buttons">
                    <button class="btn">Order Now</button>
                    <button class="btn">Reservation</button>
                </article>
            </div>
            <div class="box2">
                <img src='/src/assets/icons/Illustration.png' alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.home {
  display: block;
    display: flex;
    width: 100%;
    height: max-content;
    padding-top: 130px;

    .box1 {
        width: 50%;
        padding-top: 70px;
        .bts {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 10px 30px;
            color: #ff2200;
            background: #fbb667;
            border: none;
            border-radius: 30px;
            font-size: 17px;
            margin-bottom: 20px;
        }
        h1 {
            font-size: 75px;
            width: 40%;
            color: #311F09;
        }
        p {
            font-size: 21px;
            font-weight: 400;
            line-height: 40px;
            width: 62%;
        }
        .buttons{
            display: flex;
            gap: 40px;
            margin-top: 30px;
            .btn{
                padding: 15px 40px;
                border-radius: 30px;
                cursor: pointer;
                background: #FF8A00;
                color: #fff;
                font-size: 20px;
                font-weight: 600;
                border: none;
                &:hover{
                    background: #3FA72F;
                    color: #311F09;
                    transition: .8s;
                }
                &:active{
                    transition: .3s;
                    transform: scale(.97);
                }
                &:last-child{
                    background: #3FA72F;
                    &:hover{
                        background: #FF8A00;
                        color: #311F09;
                        transition: .8s;
                    }
                }
            }
        }
    }

    .box2 {
        width: 50%;
        margin-top: -30px;
    }
}
</style>