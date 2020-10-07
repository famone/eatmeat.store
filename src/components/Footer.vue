<template>
	<footer>
		<div class="container">

				<div class="footer-bread">
					<div class="logo">
					<img src="../assets/img/logo.svg" alt="">
				</div>


				<div class="nav-items">
					<nav class="hidden-xs hidden-sm">
						<ul>
							<li>МАГАЗИН</li>
							<li>ОТЗЫВЫ</li>
							<li>ПАРТНЕРАМ</li>
							<li>О КОМПАНИИ</li>
							<li>КОНТАКТЫ</li>
						</ul>
					</nav>
					<div class="socials">
						<a :href="soc.link" v-for="soc in socials">
							<img :src="soc.img">
						</a>
					</div>
					<div class="webink text-center">
						<a href="https://webink.site/">Разработка сайта - <span>webink.site</span></a>
					</div>
				</div>


				<div class="cont-footer">
						<p><a href="mailto:info@eatmeat.store">info@eatmeat.store</a></p>
						<p><a href="tel:900-22-02">900-22-02</a></p>
						<p>д. Большое Рейзино 80</p>
					</div>
				</div>
		</div>
	</footer>
</template>

<script>
	export default{
		data(){
			return{
				socials: [
					{
						link: '',
						img: require('../assets/img/vk.svg')
					},
					{
						link: '',
						img: require('../assets/img/inst.svg')
					},
					{
						link: '',
						img: require('../assets/img/whats.svg')
					},
					{
						link: '',
						img: require('../assets/img/tg.svg')
					}
				]
			}
		}
	}
</script>

<style>
	.webink{
	font-weight: 400;
	color: #fff;
	font-size: 16px;
	transition: all .3s ease;
	margin-top: 30px;
}
.webink a{
	color: #fff;
}
.webink span{
	color: #E52026;
}
.webink:hover{
	animation: 1s myshake alternate;
}
@keyframes myshake{
	0% {
	    transform: skewX(-15deg);
	}
	5% {
	    transform: skewX(15deg);
	}
	10% {
	    transform: skewX(-15deg);
	}
	15% {
	    transform: skewX(15deg);
	}
	20% {
	    transform: skewX(0deg);
	}
	100% {
	    transform: skewX(0deg);
	}
}
</style>
