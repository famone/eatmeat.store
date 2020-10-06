<template>
	<section id="reviews">
		<div class="container">
			<div class="col-lg-12" v-for="rev in reviews">
				<div class="rev-box">
					<div class="avatar">{{rev.avatar}}</div>
					<h3>{{rev.name}}</h3>
					<p class="white-txt">{{rev.rev}}</p>
					<p class="small-white">{{rev.date}}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{
			reviews: [
				{
					name: 'Глеб',
					avatar: '👶',
					rev: 'Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Eius odit saepe rerum alias. Iusto doloremque quibusdam, magnam harum facilis consequatur! 🍖🍽️',
					date: '22.09.2020'
				},
				{
					name: 'Регина',
					avatar: '👩',
					rev: 'Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Eius odit saepe rerum alias. Iusto doloremque quibusdam, magnam harum facilis consequatur! 🥩🔪',
					date: '22.09.2020'
				},
				{
					name: 'Дмитрий',
					avatar: '🧔',
					rev: 'Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Eius odit saepe rerum alias. Iusto doloremque quibusdam, magnam harum facilis consequatur! 🐄',
					date: '22.09.2020'
				},
			]
		}
	}
}
</script>	