<template>
    <div class="wrapper" @click="update">

        <a class="button">
            <text class="text" @click="jumplist">列表</text>
        </a>

        <a class="button">
            <text class="text" @click="jumplogin">登陆</text>
        </a>
    </div>
</template>

<style>
    .wrapper { align-items: center; margin-top: 120px; }

    .button {
        width: 450px;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 150px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-width: 2px;
        border-style: solid;
        border-color: #DDDDDD;
        background-color: #F5F5F5
    }
    .text {
        font-size: 30px;
        color: #666666;
        text-align: center;
    }
</style>

<script>
    export default {
        data: {

        },
        methods: {
            jumplist: function () {
              this.$router.push({ path: '/foo'})
            },

        }
    }
</script>
