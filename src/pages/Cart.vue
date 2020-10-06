<template>
	<section id="cart">
		<succes v-if="succes" @closeSucces="closeSucces" />
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
							<input type="text" v-model="fio" :class="{errorInp : $v.fio.$dirty && !$v.fio.required}">
						</div>
						<div class="col-lg-6">
							<label for="">Телефон:</label>
						<input type="text" v-model="phone"
						:class="{errorInp : ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.minLength)}" 
						v-mask="'+7 (###) ###-##-##'">
						</div>
					</div>
					<label for="">Адрес доставки:</label>
					<input type="text" v-model="adress" :class="{errorInp : $v.adress.$dirty && !$v.adress.required}">

					<div class="submit-box">
						<button type="submit" class="submit-btn" @click.prevent="submitCart()">Оформить заказ</button>
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
import succes from '../components/succes.vue'
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
import { required, minLength } from "vuelidate/lib/validators";
import axios from 'axios'

export default{
	components: {succes},
	data(){
		return{
			fio: '',
			phone: '',
			adress: '',
			succes: false
		}
	},
	validations: {
			fio: {
				required
			},
			phone: {
				required,
				minLength: minLength(18)
			},
			adress: {
				required
			}
		},
	computed: {
		...mapState('meat', ['cart']),
		...mapGetters('meat', ['getTotal'])
	},
	methods: {
		closeSucces(){
			this.succes = false
		},
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
		},
		submitCart(){
			if(this.$v.$invalid) {
					this.$v.$touch();
					return;
			}

			// скрипт получения крзины
			let cartString = []
			this.cart.forEach(item =>{
				let single = '';
				single = item.title + ' - ' + item.quant + 'кг '
				cartString.push(single)
			})
			let cartInput = cartString.join('..... ') +  '..... ИТОГО: ' + this.getTotal + '₽'
			if(cartInput === ''){
				alert('Корзина пуста!')
				return
			}
			//end скрипт получения крзины

			let emailBody = {
				fio: this.fio,
				phone: this.phone,
				adress: this.adress,
				cart: cartInput
			}

			var form2 = new FormData();

			for (var field in emailBody){
				form2.append(field, emailBody[field]);
			};

			axios
            	.post('https://eatmeat.store/wp-json/contact-form-7/v1/contact-forms/24/feedback', form2)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    alert('Произошла ошибка!')
                });

                this.$store.dispatch('meat/cartToNull')

                this.succes = true;

				console.log(emailBody)
		}
	}
}
</script>



<style>
.errorInp{
	border-color: red!important;
}
</style>