<template>
	<div>
		<Slider />
		<Shop />
		<How />
	</div>
</template>


<script>
import Slider from '../components/Slider.vue'
import Shop from '../components/Shop.vue'
import How from '../components/How.vue'

export default {
	components: { 
		Slider ,
		Shop,
		How
	}
}
</script>