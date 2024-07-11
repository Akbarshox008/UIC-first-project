<template>
    <div class="home4">
        <div class="container">
            <div class="hom">
                <div class="home4-box1">
                    <img class="hom-img" src="/src/assets/icons/Picture (1).png" alt="">
                    <img class="hom-img-child" src="/src/assets/icons/Picture (3).png" alt="">
                    <img class="hom-img-chil2" src="/src/assets/icons/Picture (2).png" alt="">
                </div>
                <div class="home4-box2">
                    <h1>Let's reserve <span>a table</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.
                        Congue nibh nulla malesuada ultricies nec quam
                    </p>
                    <button class="btn">
                        Reservation
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.home4 {
    width: 100%;
    height: 110vh;
    background: #FFF4E7;
    margin-bottom: 100px;

    .hom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: center;
        gap: 150px;
        .home4-box1 {
            position: relative;
            display: flex;
            align-items: center;
            top: 100px;
            width: 35%;

            .hom-img {
                height: 90vh;
            }

            .hom-img-chil2 {
                position: absolute;
                width: 26%;
                top: 1px;
                right: -40px
            }

            .hom-img-child {
                position: absolute;
                bottom: -45px;
                width: 26%;
            }
        }
        .home4-box2{
            width: 60%;
            margin-left: 20px;
            margin-top: 200px;
            h1{
                width:50%;
                line-height: 88px;
                font-size: 60px;
                span{
                    color: #FF8A00;
                }
            }
            p{
                font-size: 20px;
                width: 53%;
                line-height: 30px;
                margin-bottom: 40px;
            }
            .btn{
                padding: 10px 30px;
                border-radius: 30px;
                background: #FF8A00;
                color: #fff;
                font-size: 20px;
                border: none;
                cursor: pointer;
                &:hover{
                transition: .5s;
                transform: scale(1.031);
                box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.15);
                background: orangered;
                }
                &:active{
                    transform: scale(1);
                    box-shadow: none;
                    transition: .3s;
                }
            }
        }
    }

}
</style>