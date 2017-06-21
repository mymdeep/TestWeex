import Vue from 'vue'
import Router from 'vue-router'
import foo from '../foo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/foo',
      name: 'foo',
      component: foo
    }


  ]
})
