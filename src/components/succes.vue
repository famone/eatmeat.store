<template>
	<div class="succes">
		<div class="succes-box text-center">
			<img src="../assets/img/success.svg" alt="">
		<p class="white-txt">Спасибо за ваш заказ</p>
		<p class="closeit" @click="$emit('closeSucces')">ЗАКРЫТЬ</p>
		</div>
	</div>
</template>

<style>
.succes{
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.8);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.succes-box{
	top: -20%;
	left: calc(50% - 130px);
	padding: 25px 40px;
	background-color: #262626;
	border-radius: 10px;
	z-index: 30;
	box-shadow: 0px 0px 30px rgba(229, 32, 38, 0.4);
	transition: all .3s ease;
}
.succes-box img{
	height: 20px;
	margin-bottom:5px;
}
.succes-box p{
	margin-bottom: 0;
}
.closeit{
	color: #fff;
	text-decoration: underline;
	font-size: 16px;
	margin-top: 15px;
	cursor: pointer;
}
</style>