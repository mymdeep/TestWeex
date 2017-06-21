<template>
<div>	
<router-link to="/login"  class="wrapper">请登录</router-link>
<router-link to="/foo"  class="wrapper">进入main页面</router-link>
    <!-- 路由匹配到的组件将渲染在这里 -->
<router-view @click="testss"></router-view>
</div>
</template>
<style>
    .wrapper { align-items: center; margin-top: 20px; }

    .button {
        width: 650px;
        height: 1280px;

    }
    .text {
        font-size: 30px;
        color: #666666;
        text-align: center;
    }
</style>
<script>
	export default{
        methods: {
            testss: function (e) {
                alert('1111');
            },
        }
	}
</script>