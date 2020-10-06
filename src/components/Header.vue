<template>
	<header>
		<div class="container">
			<div class="shapka">
				<router-link tag="div" to="/" class="logo">
					<img src="../assets/img/logo.svg" alt="">
				</router-link>
				<div class="nav-items hidden-xs hidden-sm">
					<nav>
						<ul>
							<router-link v-for="nav in navigation" tag="li" :to="nav.link" active-class="aLink">
								{{nav.name}}
							</router-link>
						</ul>
					</nav>
					<div class="cont-row">
						<p><a href="mailto:dmitry.sachkov@mail.ru">dmitry.sachkov@mail.ru</a></p>
						<p><a href="tel:+79218623930">+7 921 862-39-30</a></p>
						<p>г. Гатчина, Рощинская 13-б</p>
					</div>
				</div>
				<router-link tag="div" to="/cart" class="cart-link hidden-md hidden-lg" :class="{notempty: getTotal !== 0}">
					<img src="../assets/img/cart.svg" alt="">
				</router-link>
				<button class="cart hidden-md hidden-lg" @click="openMenu()">Меню</button>
				<div class="left-sidebar" :class="{mobileAc: activeMenu}">
					<div class="cross" @click="openMenu()">✕</div>
					<ul @click="openMenu()">
							<router-link v-for="nav in navigation" tag="li" :to="nav.link" active-class="aLink">
								{{nav.name}}
							</router-link>
							<li><router-link tag="a" to="/cart">
					<button class="cart">Корзина: {{getTotal}} ₽</button>
				</router-link></li>
					</ul>
				</div>
				<router-link tag="a" to="/cart" class="hidden-sm hidden-xs">
					<button class="cart">Корзина: {{getTotal}} ₽</button>
				</router-link>
			</div>
		</div>
	</header>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
	data(){
		return{
			activeMenu: false,
			navigation: [
				{
					name: 'МАГАЗИН',
					link: '/shop'
				},
				{
					name: 'ОТЗЫВЫ',
					link: '/reviews'
				},
				{
					name: 'ПАРТНЕРАМ',
					link: '/partners'
				},
				{
					name: 'О КОМПАНИИ',
					link: '/about'
				},
				{
					name: 'КОНТАКТЫ',
					link: '/contacts'
				}
			]
		}
	},
	computed: {
		...mapGetters('meat', ['getTotal'])
	},
	methods: {
		openMenu(){
			this.activeMenu = !this.activeMenu
		}
	}
}
</script>

<style>
	
</style>