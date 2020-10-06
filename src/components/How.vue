<template>
	<section id="howwework">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2><img src="../assets/img/knife.png" class="knife">Как работает <br>EatMeat </h2>
				</div>
			</div>

			<div class="row">
				<div class="how">
					<div class="row">
						<div class="col-lg-4" v-for="adv in advantages">
							<div class="icon-box">
								<img :src="adv.img" alt="">
								<div>
									<h4>{{adv.title}}</h4>
									<p class="small-white">{{adv.descr}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 text-center">
					<router-link tag="a" to="/reviews">
						<button class="cart order">Отзывы</button>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default{
	data(){
		return{
			advantages: [
				{
					img: require('../assets/img/ic1.svg'),
					title: 'Только свежая продукция',
					descr: 'Фермерское мясо наивысшего качества'
				},
				{
					img: require('../assets/img/ic2.svg'),
					title: 'Только свежая продукция',
					descr: 'Фермерское мясо наивысшего качества'
				},
				{
					img: require('../assets/img/ic3.svg'),
					title: 'Только свежая продукция',
					descr: 'Фермерское мясо наивысшего качества'
				}
			]
		}
	}
}
	
</script>