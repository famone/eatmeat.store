<template>
	<section id="shop">
		<div class="container">
			<div class="col-lg-12 text-center">
				<h2><img src="../assets/img/fleash.png" class="flesh">Магазин</h2>
			</div>

			<Gooditems />

		</div>
	</section>
</template>

<script>
import Gooditems from '../components/goods/Gooditems.vue'

export default{
	components: { Gooditems }
}
</script>

<style>

</style>