<template>
    <div class="wrapper">
        <text class="button" @click="jumplist">list</text>
        <text class="button" @click="jumplogin">login</text>
    </div>
</template>
<script>
    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')

    export default {
        methods: {
            jumplist (event) {
                var url = this.$getConfig().bundleUrl;
                url = url.split('/').slice(0,-1).join('/') + '/list.js'
                console.log('will jump')
                navigator.push({
                    url: url,
                    animated: "true"
                }, event => {
                    modal.toast({ message: 'callback: ' + url })
                })
            },
            jumplogin (event) {
                var url = this.$getConfig().bundleUrl;
                url = url.split('/').slice(0,-1).join('/') + '/loginn.js'
                console.log('will jump')
                navigator.push({
                    url: url,
                    animated: "true"
                }, event => {
                    modal.toast({ message: 'callback: ' + url })
                })
            }
        }
    };
</script>
<style scoped>
    .wrapper {
        flex-direction: column;
        justify-content: center;
    }
    .button {
        font-size: 60px;
        width: 450px;
        text-align: center;
        margin-top: 30px;
        margin-left: 150px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-width: 2px;
        border-style: solid;
        color: #666666;
        border-color: #DDDDDD;
        background-color: #F5F5F5
    }
</style>