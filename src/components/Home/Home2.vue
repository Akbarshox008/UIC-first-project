<template>
    <div class="home_box">
        <div class="container">
            <div class="box">
                <div class="box1">
                    <img src="/src/assets/icons/Picture.png" alt="">
                </div>
                <div class="box2">
                    <h1>
                        Welcome to
                        <span>
                            delizioso
                        </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin.
                        Congue nibh nulla malesuada ultricies nec quam
                    </p>
                    <button class="btn">
                        See our menu
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    .home_box{
        width: 100%;
        height: 100vh;
        background: #78faa6;
        .box{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            .box1{
                display: flex;
                align-items: center;
                margin-top: 100px;
                width: 50%;
                img{
                    width: 140%;
                }
            }
            .box2{
                width: 70%;
                margin-left: 200px;
                h1{
                    width: 60%;
                    font-size: 70px;
                    line-height: 88px;
                    span{
                        color: #FF8A00;
                    }
                }
                p{
                    width: 50%;
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 35px;
                    margin-top: 20px;
                }
                .btn{
                    padding: 10px 30px;
                    border-radius: 30px;
                    background: #FF8A00;
                    border: none;
                    color: #fff;
                    font-size: 20px;
                    margin-top: 80px;
                    cursor: pointer;
                    &:hover{
                        transform: scale(1.06);
                        background: #fb3802;
                        transition: .8s;
                    }
                    &:active{
                        transform: scale(1.02);
                    }
                }
            }
        }
    }
</style>