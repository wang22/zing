<template>
    <div class="curtain">
        <div class="main">
            <div class="left">
                <div class="text">
                    <p>Amazing framework with tons of options! It helped us build our project! Jack Estrada, Web Developer</p>
                </div>
            </div>
            <div class="right"><router-view/></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@base-width: 750px;
@border-radius: 5px;

.curtain {
    background: #e6ebf4;
    height: 100vh;
    widows: 100%;
    .main {
        position:absolute;
        top: 150px;
        left: 50%;
        margin-left: -@base-width/2;
        width: @base-width;
        background: #fff;
        box-shadow: 0 0.5rem 2rem #d8dfed;
        border-radius: @border-radius;
        background-image: url('../assets/login_bg.jpg');
        background-position: 0 50%;
        background-size: cover;
        .left {
            position: absolute;
            bottom: 0;
            top: 0;
            width: @base-width/2;
            background-color: rgba(5,77,158,.8)!important;
            border-top-left-radius: @border-radius;
            border-bottom-left-radius: @border-radius;
            .text {
                position: absolute;
                top: 20%;
                padding: 30px;
                font-size: 18px;
                color: #fff;
            }
        }
        .right {
            float: right;
            width: @base-width/2;
            background: #fff;
            padding: 20px;
            padding-bottom: 0;
            border-top-right-radius: @border-radius;
            border-bottom-right-radius: @border-radius;
        }
    }
}
</style>
