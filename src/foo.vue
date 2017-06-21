<template>
  <div class="wrapper" @click="update">
    <!--<image :src="logoUrl" class="logo"></image>-->
    <input ref="input" class="input" type="text"  :value="hinttext" @input="oninput" />
    <a class="button">
      <text class="text" @click="add">添加</text>
    </a>

    <ul>
      <li v-for="item in items" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
  .image { width: 750px; height: 200px; }
  .img { width: 200px; height: 800px; margin-left: 275px; background-color: #F5F5F5}
  .input {
    font-size: 50px;
    width: 350px;
    margin-top: 50px;
    margin-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
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
  import name from './name.vue'
  component:{name}
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World',
      hinttext:'World',
      sex:'male',
      items:[]
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      oninput (event) {
        this.hinttext = event.value;
      },
      add(){
        if(this.hinttext === '')
          return;
        this.items.unshift({name:this.hinttext,sex:this.sex})
        this.hinttext = "";
        this.target = this.items.toString()
        if(this.sex === 'female'){
          this.sex = 'male';
        }else{
          this.sex = 'female';
        }
      }
    }
  }
</script>
