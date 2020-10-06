import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import Shoppage from './pages/Shoppage.vue'
import Reviews from './pages/Reviews.vue'
import Partners from './pages/Partners.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'


export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/cart',
			component: Cart
		},
		{
			path: '/shop',
			component: Shoppage
		},
		{
			path: '/reviews',
			component: Reviews
		},
		{
			path: '/partners',
			component: Partners
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/contacts',
			component: Contacts
		},
		// {
		// 	path: '/generators/:id',
		// 	component: Singlegen
		// },
		// {
		// 	path: '*',
		// 	component: NotFound
		// }
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})
