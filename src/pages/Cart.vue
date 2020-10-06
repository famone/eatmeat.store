<template>
	<section id="cart">
		<div class="container">

			<div class="row">
				<div class="col-lg-12">
					<h2>Оформление заказа</h2>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-6">
					<h3>Ваши данные</h3>
					<div class="row">
						<div class="col-lg-6">
							<label for="">ФИО:</label>
							<input type="text">
						</div>
						<div class="col-lg-6">
							<label for="">Телефон:</label>
						<input type="text">
						</div>
					</div>
					<label for="">Адрес доставки:</label>
					<input type="text">

					<div class="submit-box">
						<button type="submit" class="submit-btn">Оформить заказ</button>
						<div class="text-right">
							<p class="white-txt">Сумма заказа: {{getTotal.toLocaleString()}} ₽</p>
							<p class="small-white">*Без учета доставки</p>
						</div>
					</div>


				</div>
				<div class="col-lg-6">
					<h3>Корзина</h3>
					<div class="itog">
						<p class="white-txt">Итого к оплате:</p>
						<p class="white-txt"><strong style="color: #E52026;font-size: 20px;">{{getTotal.toLocaleString()}} ₽</strong></p>
					</div>

					<div class="cart-item" v-for="(item, index) in cart" :key="index">
						<div class="cross" @click="removeFromCart(index)">✕</div>
						<img :src="item.img" alt="">
						<div class="handlers">
							<p class="white-txt">{{item.title}}</p>
							<div class="quant">
								<div class="quantbtn" @click="removeKilo(index);deliteKilo(index)">-</div>
								<p class="small-white">{{item.quant}} кг</p>
								<div class="quantbtn" @click="addKilo(index)">+</div>
							</div>
						</div>
						<p class="white-txt">{{item.price}} ₽</p>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default{
	computed: {
		...mapState('meat', ['cart']),
		...mapGetters('meat', ['getTotal'])
	},
	methods: {
		addKilo(id){
			this.$store.dispatch('meat/addKilo', this.cart[id])
		},
		removeKilo(id){
			this.$store.dispatch('meat/removeKilo', this.cart[id])
		},
		deliteKilo(index){
			this.$store.dispatch('meat/deliteKilo', index)
		},
		removeFromCart(index){
			this.$store.dispatch('meat/removeFromCart', index)
		}
	}
}
</script>