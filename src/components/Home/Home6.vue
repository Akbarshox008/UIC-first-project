<template>
    <div class="home6">
        <div class="container">
            <div class="home-box">
                <h1>Our customers say</h1>
                <div class="items">
                    <img class="item-img" :src="getActiveImage()" alt="">
                    <article class="items-child">
                        <h2>{{ getActiveName() }}</h2>
                        <h4>{{ getActiveTitle() }}</h4>
                    </article>
                </div>
                <div class="items2">
                    <img class="img2" src="/src/assets/icons/“.png" alt="">
                    <h4>
                        {{ getActiveText() }}
                    </h4>
                    <img class="img1" src="/src/assets/icons/“ (1).png" alt="">
                </div>
                <div class="items3">
                    <img
                        class="items3-img"
                        :class="{ active: activeIndex === 0 }"
                        @click="setActive(0)"
                        src="/src/assets/icons/Ellipse 27.png"
                        alt=""
                    />
                    <img
                        class="items3-img"
                        :class="{ active: activeIndex === 1 }"
                        @click="setActive(1)"
                        src="/src/assets/icons/Ellipse 20.png"
                        alt=""
                    />
                    <img
                        class="items3-img"
                        :class="{ active: activeIndex === 2 }"
                        @click="setActive(2)"
                        src="/src/assets/icons/Ellipse 17.png"
                        alt=""
                    />
                    <img
                        class="items3-img"
                        :class="{ active: activeIndex === 3 }"
                        @click="setActive(3)"
                        src="/src/assets/icons/Ellipse 28.png"
                        alt=""
                    />
                    <img
                        class="items3-img"
                        :class="{ active: activeIndex === 4 }"
                        @click="setActive(4)"
                        src="/src/assets/icons/Ellipse 19.png"
                        alt=""
                    />
                    <img
                        class="items3-img"
                        :class="{ active: activeIndex === 5 }"
                        @click="setActive(5)"
                        src="/src/assets/icons/Ellipse 21.png"
                        alt=""
                    />
                    <img
                        class="items3-img"
                        :class="{ active: activeIndex === 6 }"
                        @click="setActive(6)"
                        src="/src/assets/icons/Ellipse 26.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);

const testimonials = [
    {
        name: 'Starla Virgoun',
        title: 'Financial advisor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam',
        image: '/src/assets/icons/Ellipse 27.png'
    },
    {
        name: 'John Doe',
        title: 'Software Engineer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam',
        image: '/src/assets/icons/Ellipse 20.png'
    },
    {
        name: 'Jane Smith',
        title: 'Graphic Designer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam',
        image: '/src/assets/icons/Ellipse 17.png'
    },
    {
        name: 'Anna Petersen',
        title: 'SMM Menenger',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam',
        image: '/src/assets/icons/Ellipse 16.png'
    },
    {
        name: 'Carlos Adam',
        title: 'Mobilograf',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam',
        image: '/src/assets/icons/Ellipse 19.png'
    },
    {
        name: 'Alian Smith',
        title: 'UI/UX Designer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam',
        image: '/src/assets/icons/Ellipse 21.png'
    },
    {
        name: 'Cerial Johnson',
        title: 'CEO Menanger',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam',
        image: '/src/assets/icons/Ellipse 26.png'
    },
];

function setActive(index) {
    activeIndex.value = index;
}

function getActiveImage() {
    return testimonials[activeIndex.value].image;
}

function getActiveName() {
    return testimonials[activeIndex.value].name;
}

function getActiveTitle() {
    return testimonials[activeIndex.value].title;
}

function getActiveText() {
    return testimonials[activeIndex.value].text;
}
</script>
<style scoped>
.home6 {
    width: 100%;
    height: 160vh;
    background: #e3dace;

    h1 {
        font-size: 60px;
        font-weight: 600;
        line-height: 88px;
        text-align: center;
        padding: 100px 0px;
    }

    .items {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        gap: 40px;
        .item-img{
            width: 150px;
        }

        .items-child {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
    }

    .items2 {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        h4 {
            width: 33%;
            font-size: 20px;
            text-align: center;
            line-height: 30px;
            margin-top: 30px;
            color: #5C4529;
        }

        .img2 {
            position: absolute;
            top: 1px;
            left: 330px;
        }

        .img1 {
            position: absolute;
            right: 320px;
            bottom: -30px;
        }
    }

    .items3 {
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 150px;

        .items3-img {
            position: absolute;
            cursor: pointer;
            transition: background 0.3s;

            &:nth-child(1) {
                top: -150px;
                left: 100px;
            }

            &:nth-child(2) {
                left: 230px;
                top: -60px;
            }

            &:nth-child(3) {
                left: 400px;
                top: 30px;
            }

            &:nth-child(4) {
                left: 615px;
                top: 70px;
            }

            &:nth-child(5) {
                left: 900px;
                top: 35px;
            }

            &:nth-child(6) {
                left: 1100px;
                top: -50px;
            }

            &:nth-child(7) {
                left: 1250px;
                top: -150px;
            }
        }

        .items3-img.active {
            box-shadow: -2px 1px 60px rgb(244, 4, 4);
            padding: 20px;
            border-radius: 50%;
            background: rgba(255, 77, 0, 0.458);
        }
    }
}
</style>
