import foo from './src/foo.vue'
// import testna from './src/testna.vue'
foo.el = '#root'
export default new Vue(foo);
// export default new Vue({
//  	// store,
//  	// router,
//  	el: '#root',
//     render: h => {
//         return h(foo)
//     }
//  })

