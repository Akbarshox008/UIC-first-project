<template>
    <div class='container'>
        <div class="home7-home">
            <div class="home7">
                <h1>we are open from</h1>
                <article class="texts">
                    <h2>Monday-Sunday</h2>
                    <h4>Launch : Mon-Sun : 11:00am-02:00pm</h4>
                    <h4>Dinner : sunday : 04:00pm-08:00pm</h4>
                    <h4 class="h4-last">04:00pm-09:00pm</h4>
                </article>
                <article class="buttonss">
                    <button :class="{ Active: actives === 0 }" @click="setActive(0)" class="btn">Order now</button>
                    <button :class="{ Active: actives === 1 }" @click="setActive(1)" class="btn">Reservation</button>
                </article>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const actives = ref(0);

function setActive(index) {
    actives.value = index;
}
</script>
<style scoped>
.home7-home {
    width: 100%;
    height: 130vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: auto;
    .home7 {
        background-image: url(/src/assets/icons/Background.png);
        background-repeat: no-repeat;
        background-size: cover;
        height: 99vh;
        width: 100%;
        border-radius: 119px;
        h1 {
            font-size: 60px;
            text-align: center;
            padding-top: 140px;
        }
        .texts {
            text-align: center;
            h2 {
                text-align: center;
                font-size: 40px;
                margin: 15px 0px;
            }
            h4 {
                font-size: 18px;
                line-height: 30px;
                font-weight: 400;
                &:nth-child(3) {
                    font-size: 19px;
                }
            }
            .h4-last {
                margin-left: 144px;
            }
        }
        .buttonss {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 80px;
            gap: 20px;
            .btn {
                padding: 10px 40px;
                border-radius: 30px;
                background: #fff;
                font-size: 19px;
                font-weight: 600;
                cursor: pointer;
                border: none;

                &:active {
                    transform: scale(.95);
                    transition: .4s;
                }
            }
            .btn.Active {
                background: orangered;
                color: #fff;
                transition: .5s;
            }
        }
    }
}
</style>
