<template>
  <div id="app">

  	<Header />

<Alert />
  		<div class="content-main">
  			<router-view></router-view>
  		</div>

  	<Footer />
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
import './assets/css/style.css';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Alert from './components/goods/Alert.vue'



export default {
	components: { 
		Header,
		Footer,
		Alert
	},
	mounted(){
		this.$store.dispatch('meat/loadMeat')
	}
}
</script>

<style>

</style>

