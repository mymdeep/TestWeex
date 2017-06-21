<template>
	<div id="app">
		<form>
			<div>
				<label>用户名</label>
				<p><input  type="text"  :value="name" @input="oninputname"/></p>
			</div>
			<div>
				<label>密码</label> 
				<p><input v-model="pwd" type="password"   :value="pwd" @input="oninputpwd"/></p>
			</div>
			<br/>
			<button @click="login" class="button">登陆</button>
		</form>
		</div>
	</template>
	<script>
		var modal = weex.requireModule('modal')
		export default {

			data: {
				name:'',
				pwd:'',
				error:''
			},
			methods:{
				login: function (e) {
					modal.toast({ message: 'callback: ' + e })
				},
				oninputname (event) {
					this.name = event.value;
				},
				oninputpwd (event) {
					this.pwd = event.value;
				},
			}
		}
	</script>
	<style>
		.button {
			font-size: 50px;
			width: 650px;
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
	</style>