export default {
	state: {
		tableData: [
			{
				client: 'Петров',
				contract: 69812,
				type_id: 'Депозит',
				date: 'Дата',
				summ: '1000',
				source_id: 'касса',
				status_id: 'Оплачено',
			},
			{
				client: 'Петров',
				contract: 69813,
				type_id: 'Депозит',
				date: 'Дата',
				summ: '1000',
				source_id: 'касса',
				status_id: 'Оплачено',
			},
			{
				client: 'Петров',
				contract: 69814,
				type_id: 'Депозит',
				date: 'Дата',
				summ: '1000',
				source_id: 'касса',
				status_id: 'Оплачено',
			},
		],
	},
	mutations: {},
	actions: {},
	getters: {
		tableData(state) {
			return state.tableData
		},
	},
}
