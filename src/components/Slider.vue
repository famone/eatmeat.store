<template>
	<section id="slider">
		<div class="container">
			<div class="slider-row">
				<h1>Фермерское мясо <br>
				от производителя</h1>

				<p class="white-txt" v-for="advant in advantages">
					<img src="../assets/img/check.svg" alt="">
					{{advant}}
				</p>
			</div>
		</div>	
	</section>
</template>

<script>
export default{
	data(){
		return{
			advantages: ['Только свежее мясо', 'Без посредников', 'Высочайшего качества']
		}
	}
}
	
</script>

