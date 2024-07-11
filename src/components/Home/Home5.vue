<template>
    <div class="container">
        <div class="home5-box">
            <h1>Our greatest chef</h1>
            <article class="box-child5">
                <div class="item">
                    <img src="/src/assets/icons/image 1.png" alt="cookier">
                    <h2>Betran Komar</h2>
                    <h3>Head chef</h3>
                </div>
                <div class="item">
                    <img src="/src/assets/icons/Group 8.png" alt="cookier">
                    <h2>Ferry Sauwi</h2>
                    <h3>Chef</h3>
                </div>
                <div class="item">
                    <img src="/src/assets/icons/Group 10.png" alt="cookier">
                    <h2>Iswan Dracho</h2>
                    <h3>Chef</h3>
                </div>
            </article>
            <article class="button">
                <button class="btn">
                    View all
                </button>
            </article>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.home5-box {
    margin-bottom: 100px;
    h1 {
        font-size: 70px;
        text-align: center;
        margin-bottom: 100px;
    }

    .box-child5 {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        justify-content: center;
        gap: 140px;
        margin-bottom: 50px;

        .item {
            position: relative;
            border: 1px solid #769878;
            background: #d05afe;
            border-radius: 25px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s;

            img {
                display: block;
                width: 100%;
                border-radius: 25px;
            }

            h2,
            h3 {
                text-align: center;
                margin: 20px 0;
                position: absolute;
                transform: scale(0);
                transition: transform 0.3s;
                width: 100%;
            }

            h2 {
                top: 70%;
            }

            h3 {
                top: 85%;
            }
        }

        .item:hover {
            h2,
            h3 {
                transform: scale(1);
                color: rgb(254, 254, 254);
                z-index: 2;
            }

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.371);
                pointer-events: none;
            }
        }
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
    }

    .btn {
        padding: 10px 50px;
        background: rgb(240, 91, 37);
        color: #fff;
        border-radius: 20px;
        border: none;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.3s, background 0.3s;

        &:hover {
            transform: scale(1.05);
            background: orangered;
        }
    }
}
</style>
