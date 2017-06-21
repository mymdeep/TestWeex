import Login from '../components/Login.vue'
import VueRouter from 'vue-router'
import Home from '../home.vue'
import App from '../App.vue'
import foo from '../foo.vue'
Vue.use(VueRouter)
export default new VueRouter({
	routes: [
		{ path: '/home',  component: Home  },
		{ path: '/app', component: App },
		{ path: '/foo', component: foo },
		{ path: '/login', component: Login }

	]
})