import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import meat from './meat'

export default new Vuex.Store({
	modules: {
		meat
	}
}) 