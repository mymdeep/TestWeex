import App from './App.vue'
import router from './router/routes'

App.el = '#root'
App.router = router

new Vue(App)