import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tableData: [],
		sourceIdType: [],
		dataIdType: [],
	},
	mutations: {
		SET_TABLE_DATA_TO_STATE: (state, tableData) => {
			state.tableData = tableData
		},
		SET_SOURCE_ID_TYPE_TO_STATE: (state, sourceIdType) => {
			state.sourceIdType = sourceIdType
		},
		SET_DATA_ID_TYPE_TO_STATE: (state, dataIdType) => {
			state.dataIdType = dataIdType
		},
	},
	actions: {
		GET_TABLE_DATA_FROM_API({ commit }) {
			return axios('https://payments-test.stop-zaim.ru/public_html/payments', {
				method: 'GET',
			})
				.then((tableData) => {
					commit('SET_TABLE_DATA_TO_STATE', tableData.data)
					return tableData
				})
				.catch((error) => {
					alert(error)
					return error
				})
		},
		POST_TABLE_DATA_FROM_API({ commit }) {
			return axios('https://payments-test.stop-zaim.ru/public_html/payments', {
				method: 'POST',
			})
				.then((tableData) => {
					commit('SET_TABLE_DATA_TO_STATE', tableData.data)
					return tableData
				})
				.catch((error) => {
					alert(error)
					return error
				})
		},
		GET_SOURCE_ID_TYPE_FROM_API({ commit }) {
			return axios('https://payments-test.stop-zaim.ru/public_html/sources', {
				method: 'GET',
			})
				.then((sourceIdType) => {
					commit('SET_SOURCE_ID_TYPE_TO_STATE', sourceIdType.data)
					return sourceIdType
				})
				.catch((error) => {
					alert(error)
					return error
				})
		},
		GET_DATA_ID_TYPE_FROM_API({ commit }) {
			return axios('https://payments-test.stop-zaim.ru/public_html/form_tss', {
				method: 'GET',
			})
				.then((dataIdType) => {
					commit('SET_DATA_ID_TYPE_TO_STATE', dataIdType.data)
					return dataIdType
				})
				.catch((error) => {
					alert(error)
					return error
				})
		},
	},
	getters: {
		TABLE_DATA(state) {
			return state.tableData
		},
		SOURCE_ID_TYPE(state) {
			return state.sourceIdType
		},
		DATA_ID_TYPE(state) {
			return state.dataIdType
		},
	},
})
