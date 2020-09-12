import './css/index.css'
console.log('hello webpack')
import info1,{name as n,conent}from './test.js'
console.log(n+'---'+conent)


import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

import login from './login.vue'

var vm = new Vue({
	el:"#app",
	data:{
		msg:"124"
	},
	// components:{
	// 	login
	// }
	render: c => c(login)

})

