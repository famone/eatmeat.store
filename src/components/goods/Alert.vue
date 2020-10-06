<template>
	<div class="goodAlert text-center" :class="{goodAlertAc: showAlert}">
		<img src="../../assets/img/success.svg" alt="">
		<p class="white-txt">Товар добавлен в корзину</p>
	</div>
</template>


<script>
import {mapState} from 'vuex'

export default{
	computed: {
		...mapState('meat', ['showAlert'])
	}
}
</script>


<style scoped>
.goodAlert{
	position: fixed;
	top: -20%;
	left: calc(50% - 130px);
	padding: 15px;
	background-color: #262626;
	border-radius: 10px;
	z-index: 30;
	box-shadow: 0px 0px 30px rgba(229, 32, 38, 0.4);
	transition: all .3s ease;
}
.goodAlert img{
	height: 20px;
	margin-bottom:5px;
}
.goodAlert p{
	margin-bottom: 0;
}
.goodAlertAc{
	top: 20px;
}
</style>