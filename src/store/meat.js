
import axios from 'axios'

const meat = {
	namespaced: true,
	state: {
		cart: [],
		showAlert: false,
		meat: [
			{	
				id: 1,
				title: 'Свиной фарш',
				img: require('../assets/img/goods/sv_farsh.jpg'),
				price: 350,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},
			{	
				id: 2,
				title: 'Грудинка свиная',
				img: require('../assets/img/goods/sv_grud.jpg'),
				price: 250,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},
			{	
				id: 3,
				title: 'Корейка на кости',
				img: require('../assets/img/goods/sv_rebra.jpg'),
				price: 450,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},
			{	
				id: 4,
				title: 'Лопатка на кости',
				img: require('../assets/img/goods/sv_lopatka.jpg'),
				price: 500,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},
			{	
				id: 5,
				title: 'Окорок на кости',
				img: require('../assets/img/goods/sv_nakosti.jpg'),
				price: 450,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},
			{	
				id: 6,
				title: 'Свиная шея',
				img: require('../assets/img/goods/sv_sheya.jpg'),
				price: 500,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},
			{	
				id: 7,
				title: 'Рулька свиная',
				img: require('../assets/img/goods/sv_rulka.jpg'),
				price: 450,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},
			{	
				id: 8,
				title: 'Филе свиное',
				img: require('../assets/img/goods/sv_file.jpg'),
				price: 500,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},
			{	
				id: 9,
				title: 'Свиные ребра',
				img: require('../assets/img/goods/sv_koreyka.jpg'),
				price: 500,
				quant: 1,
				category: 'Свинина',
				defVal: 1
			},



			{	
				id: 10,
				title: 'Говяжье сердце',
				img: require('../assets/img/goods/gv_serdce.jpg'),
				price: 350,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 11,
				title: 'Щечки говяжьи',
				img: require('../assets/img/goods/gv_schech.jpg'),
				price: 250,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 12,
				title: 'Говяжья печень',
				img: require('../assets/img/goods/gv_pech.jpg'),
				price: 450,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 13,
				title: 'Мостолыга',
				img: require('../assets/img/goods/gv_most.jpg'),
				price: 500,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 14,
				title: 'Грудинка говяжья',
				img: require('../assets/img/goods/gv_grud.jpg'),
				price: 450,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 15,
				title: 'Фарш говяжий',
				img: require('../assets/img/goods/gv_farsh.jpg'),
				price: 500,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 16,
				title: 'Лопатка говяжья',
				img: require('../assets/img/goods/gv_lopatka.jpg'),
				price: 450,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 17,
				title: 'Суповой набор',
				img: require('../assets/img/goods/gv_sup.jpg'),
				price: 500,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 18,
				title: 'Язык говяжий',
				img: require('../assets/img/goods/gv_yaz.jpg'),
				price: 500,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 19,
				title: 'Ребро говяжье',
				img: require('../assets/img/goods/gv_rebro.jpg'),
				price: 500,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 20,
				title: 'Шея говяжья',
				img: require('../assets/img/goods/gv_sheya.jpg'),
				price: 500,
				quant: 1,
				category: 'Говядина',
				defVal: 1
			},
			{	
				id: 21,
				title: 'Филе куриной грудки',
				img: require('../assets/img/goods/k_grud.jpg'),
				price: 450,
				quant: 1,
				category: 'Курица',
				defVal: 1
			},
			{	
				id: 22,
				title: 'Куриный фарш',
				img: require('../assets/img/goods/k_farsh.jpg'),
				price: 500,
				quant: 1,
				category: 'Курица',
				defVal: 1
			},
			{	
				id: 23,
				title: 'Яйца домашние',
				img: require('../assets/img/goods/k_ya.png'),
				price: 450,
				quant: 1,
				category: 'Курица',
				defVal: 1
			},
			{	
				id: 24,
				title: 'Филе бедра',
				img: require('../assets/img/goods/k_bedfil.png'),
				price: 500,
				quant: 1,
				category: 'Курица',
				defVal: 1
			},
			{	
				id: 25,
				title: 'Курица целая домашняя',
				img: require('../assets/img/goods/k_cel.jpg'),
				price: 500,
				quant: 1,
				category: 'Курица',
				defVal: 1
			},
			{	
				id: 26,
				title: 'Голень куриная',
				img: require('../assets/img/goods/k_gol.jpg'),
				price: 500,
				quant: 1,
				category: 'Курица',
				defVal: 1
			},
			{	
				id: 27,
				title: 'Куриное бедро на кости',
				img: require('../assets/img/goods/k_bedkost.jpg'),
				price: 500,
				quant: 1,
				category: 'Курица',
				defVal: 1
			}
		]
  	},
  	mutations: {
  		ADD_TOCART(state, playload){



  			state.showAlert = true



  			 setTimeout(function(){
                    state.showAlert = false;
                }, 1000);
  			

  			let productInCart = state.cart.find(item =>{
  				return item.id == playload.id
  			})


  			if(productInCart){
  				productInCart.quant += playload.quant;
  				productInCart.price = playload.price * (productInCart.quant)
	  				state.meat.forEach( item =>{
		  				item.defVal = 1
		  			});
  				return 
  			}

  			state.cart.push(playload)

  			state.meat.forEach( item =>{
  				item.defVal = 1
  			});
  		
	
  		},
  		ADD_KILO(state, playload){

  			let productInGoods = state.meat.find(item =>{
  				return item.id == playload.id
  			})

  			let productInCart = state.cart.find(item =>{
  				return item.id == playload.id
  			})

  			productInCart.quant += 1;
  			productInCart.price = productInGoods.price * (productInCart.quant)
     
  		},
  		REMOVE_KILO(state, playload){

  			let productInGoods = state.meat.find(item =>{
  				return item.id == playload.id
  			})

  			let productInCart = state.cart.find(item =>{
  				return item.id == playload.id
  			})

  			productInCart.quant -= 1;
  			productInCart.price = productInGoods.price * (productInCart.quant)
     
  		},
  		DELITE_KILO(state, playload){

  			if(state.cart[playload].quant < 1){
  				state.cart.splice(playload, 1)
  			}
  		},
  		REMOVE_FROM_CART(state, playload){
  			state.cart.splice(playload, 1);
  		},
  		CART_NULL(state){
  			state.cart = []
  		}
  	},
	actions: {
		loadMeat({commit}){
			console.log('meat loaded')
		},
		addTocart({commit}, playload){
			commit('ADD_TOCART', playload)
			
		},
		addKilo({commit}, playload){
			commit('ADD_KILO', playload)
		},
		removeKilo({commit}, playload){
			commit('REMOVE_KILO', playload)
		},
		deliteKilo({commit}, playload){
			commit('DELITE_KILO', playload)
		},
		removeFromCart({commit}, playload){
			commit('REMOVE_FROM_CART', playload)
		},
		cartToNull({commit}){
			commit('CART_NULL')
		},
	},
	getters: {
  		getTotal(state){
  			let totalPrice = 0;

  			state.cart.forEach(item =>{
  				totalPrice += item.price
  			})
  			return totalPrice
  		}
	}
}

export default meat


