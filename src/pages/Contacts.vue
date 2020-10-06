<template>
	<section id="contacts">
		<div class="container">
			<div class="col-lg-12 text-center">
				<h2>Контакты</h2>
			</div>
			<div class="col-lg-4">
				<div class="cont-box text-center">
					<img src="../assets/img/teleph.svg" alt="">
					<h3>Телефон:</h3>
						<p><a href="tel:900-22-02">900-22-02</a></p>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="cont-box text-center">
					<img src="../assets/img/mail.svg" alt="">
					<h3>E-mail:</h3>
					<p><a href="mailto:dmitry.sachkov@mail.ru">dmitry.sachkov@mail.ru</a></p>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="cont-box text-center">
					<img src="../assets/img/map.svg" alt="">
					<h3>Адрес:</h3>
					<p><a href="#">д.Большое Рейзино 80</a></p>
				</div>
			</div>

			<div class="col-lg-12">
				<div id="map"></div> 
			</div>
		</div>
	</section>
</template>



<script>
	
export default{
	methods: {
			yaMapInit2() { 
				var myMap2 = new ymaps.Map("map", {
		            center: [59.597673, 30.053120],
		            zoom: 16,
		            controls: []

		        });

		        myMap2.behaviors.disable('scrollZoom');
		        // myMap2.behaviors.disable('drag');

		        myMap2.geoObjects.add(new ymaps.Placemark([59.597673, 30.053120], {
		            hintContent: 'Собственный значок метки',
		            balloonContent: 'Это красивая метка'
		        }, {
		            iconLayout: 'default#image',
		            iconImageHref: 'https://image.flaticon.com/icons/svg/787/787433.svg',
		            iconImageSize: [50, 50],
		        
		        }));

			}
		},
		created() { 
			const script = document.createElement('script')

			script.onload = () => {
			ymaps.ready(() => this.yaMapInit2());

			};

			script.id = 'ymaps'
			script.src = "https://api-maps.yandex.ru/2.1/?apikey=8c4059db-3b8d-4535-a15e-569ee80fc827&lang=ru_RU"
			document.head.append(script);
		}
}
</script>


<style>
[class*="ymaps-2"][class*="-ground-pane"] {
filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
/* Firefox 3.5+ */
-webkit-filter: grayscale(100%);
/* Chrome 19+ & Safari 6+ */
}


</style>