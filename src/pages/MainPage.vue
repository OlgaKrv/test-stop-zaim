<template>
	<div class="wrapper_content wrapper-content--fixed">
		<popupAddingPayment
			v-if="isPopupAddingVisible"
			@closePopup="closePopupAdding"
		></popupAddingPayment>
		<section>
			<div class="container">
				<p class="title_text">Список платежей</p>
				<button @click="showPopupAdding" class="px-14 bg-blue-500 text-white">
					Добавить
				</button>
				<table>
					<thead>
						<tr>
							<th>
								Клиент
								<i class="material-icons" @click="sortByName('client')">
									unfold_more
								</i>
							</th>
							<th>
								Договор
								<i class="material-icons" @click="sortByName('contract')">
									unfold_more
								</i>
							</th>
							<th>
								Тип платежа
								<i class="material-icons" @click="sortByTypeId('type_id')">
									unfold_more
								</i>
							</th>
							<th>
								Дата
								<i class="material-icons" @click="sortByName('date')">
									unfold_more
								</i>
							</th>
							<th>
								Сумма (руб)
								<i class="material-icons" @click="sortByName('summ')">
									unfold_more
								</i>
							</th>
							<th>
								Источник платежа
								<i class="material-icons" @click="sortByTypeId('source_id')">
									unfold_more
								</i>
							</th>
							<th>
								Статус
								<i class="material-icons" @click="sortByTypeId('status_id')">
									unfold_more
								</i>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in TABLE_DATA" :key="row.id">
							<td>{{ row.client }}</td>
							<td>{{ row.contract }}</td>
							<td>
								{{
									DATA_ID_TYPE.types.find((idType) => idType.id === row.type_id)
										.title
								}}
							</td>
							<td>{{ row.date }}</td>
							<td>{{ row.summ }}</td>
							<td>
								{{
									SOURCE_ID_TYPE.find((idType) => idType.id === row.source_id)
										.title
								}}
							</td>
							<td>
								<span
									class="px-2 rounded-md text-white"
									:class="
										statusColor.find((id) => id.id === row.status_id).color
									"
								>
									{{
										DATA_ID_TYPE.statuses.find(
											(idType) => idType.id === row.status_id,
										).title
									}}
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				<div>{{ TABLE_DATA }}</div>
				<div>{{ SOURCE_ID_TYPE }}</div>
				<div>{{ DATA_ID_TYPE }}</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import popupAddingPayment from '../components/PopupAddingPayment.vue'

export default {
	components: {
		popupAddingPayment,
	},
	data() {
		return {
			isPopupAddingVisible: false,
			statusColor: [
				{ id: 1, color: 'bg-slate-500' },
				{ id: 2, color: 'bg-orange-500' },
				{ id: 3, color: 'bg-green-500' },
			],
		}
	},
	computed: {
		...mapGetters(['TABLE_DATA', 'SOURCE_ID_TYPE', 'DATA_ID_TYPE']),
	},
	methods: {
		...mapActions([
			'GET_TABLE_DATA_FROM_API',
			'GET_SOURCE_ID_TYPE_FROM_API',
			'GET_DATA_ID_TYPE_FROM_API',
		]),
		showPopupAdding() {
			this.isPopupAddingVisible = true
		},
		closePopupAdding() {
			this.isPopupAddingVisible = false
		},
		sortByName(name) {
			this.TABLE_DATA.sort((a, b) => a[name].localeCompare(b[name]))
		},
		sortByTypeId(typeId) {
			this.TABLE_DATA.sort((a, b) => a[typeId] - b[typeId])
		},
	},
	mounted() {
		this.GET_TABLE_DATA_FROM_API()
		this.GET_SOURCE_ID_TYPE_FROM_API()
		this.GET_DATA_ID_TYPE_FROM_API()
	},
}
</script>

<style>
th,
td {
	width: 13rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
tr {
	display: flex;
	height: 4rem;
	text-align: center;
	border-top: 2px solid #000;
	border-bottom: 2px solid #000;
}
i {
	cursor: pointer;
}
</style>
