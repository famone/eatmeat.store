<template>
	<section id="shop-section">
		<div class="container">
			<div class="col-lg-12">
				<div class="categories">
					<button 
					v-for="(cat, index) in categories" 
					:class="{active: cat.active}"
					@click="changeCategory(index)"
					>{{cat.name}}</button>
				</div>
			</div>

			<div class="row">
<!-- 				<div class="col-lg-3 col-sm-6" 
				v-if="categoryActive === 'Все' || item.category === categoryActive " 
				v-for="(item, index) in meat" :key="index">
			<div class="good-item">
				<img :src="item.img" alt="">
				<button class="toCart" @click="addTocart(index)">В корзину</button>
				<h3>{{item.title}}</h3>
				<p class="price">{{item.price}} ₽/ кг</p>
				<p class="small-white">Категория: <strong>{{item.category}}</strong></p>
			</div>
		</div> -->


		<div class="col-lg-3 col-sm-6" v-if="categoryActive === 'Все' || item.category === categoryActive "  v-for="(item, index) in meat" :key="index">
			<div class="good-item">
				<img :src="item.img" alt="">
				<h3>{{item.title}}</h3>
				<div class="price-nqunt">
					<p class="price">{{item.price}} ₽/ кг</p>
					<button class="toCart" @click="addTocart(index)">В корзину</button>
				</div>
				<label for="">Кол-во кг:</label>
				<div class="quant quant2">
					<transition name="slide-fade">
						<button class="quantbtn" v-if="item.defVal > 1" @click="item.defVal--;">-</button>
					</transition>
						<input type="number" v-model="item.defVal" min="1" max="100" class="defVal" >
						<button class="quantbtn" @click="item.defVal++">+</button>
					</div>
					<!-- <input type="number" v-model="item.defVal" min="1" max="100" class="defVal"> -->
					
				<!-- <p class="small-white">Категория: <strong>{{item.category}}</strong></p> --> 
			</div>
		</div>



			</div>
		</div>
	</section>
</template>


<script>
import {mapState} from 'vuex'

export default {
	computed: {
		...mapState('meat', ['meat'])
	},
	methods: {
		changeCategory(index){
			this.categories.forEach(item =>{
				item.active = false
			})

			this.categories[index].active = true
			this.categoryActive = this.categories[index].name

		},
		addTocart(index){

			let goodItem = {
				id: this.meat[index].id,
				img: this.meat[index].img,
				title: this.meat[index].title,
				price: this.meat[index].price * parseInt(this.meat[index].defVal),
				quant: parseInt(this.meat[index].defVal)
			}


			this.$store.dispatch('meat/addTocart', goodItem)
		}
	},
	data(){
		return{
			categoryActive: 'Все',
			categories: [
			{
				name: 'Все',
				active:  true
			},
			{
				name: 'Свинина',
				active:  false
			},
			{
				name: 'Говядина',
				active:  false
			},
			{
				name: 'Курица',
				active:  false
			},

		]
		}
	}
}
</script>

<style scoped>
	.defVal{
	width: 30%;
	padding: 5px 3px;
	margin-left: 10px;
	text-align: center;
	text-align: center;
}
.defVal{
	width: 30%;
	padding: 5px 3px;
	margin-left: 10px;
	text-align: center;
	text-align: center;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>