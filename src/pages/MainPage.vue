<template>
	<div class="wrapper_content wrapper-content--fixed">
		<transition name="popup_animated">
			<popupAddingPayment
				v-if="isPopupAddingVisible"
				@closePopup="closePopupAdding"
			></popupAddingPayment>
		</transition>
		<section>
			<div class="container">
				<p class="title_text">Список платежей</p>
				<button
					@click="showPopupAdding"
					class="my-4 px-14 bg-blue-500 text-white"
				>
					Добавить платеж
				</button>
				<div class="payment_filtering my-4">
					<div class="payment_filtering_by_data">
						<p class="mr-4">Дата платежа</p>
						<input class="input_field" type="date" v-model="filteredDate" />
					</div>
					<div class="payment_filtering_by_source ml-3">
						<p class="mr-4">Источник платежа:</p>
						<select class="input_field" v-model="filteredSourse">
							<option value="0">все источники</option>
							<option
								v-for="SOURCE_ID in SOURCE_ID_TYPE"
								v-bind:key="SOURCE_ID.id"
								v-bind:value="SOURCE_ID.id"
								v-text="SOURCE_ID.title"
							></option>
						</select>
					</div>
				</div>
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
						<tr v-for="row in filterableDataTable" :key="row.id">
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
			filterableDataTable: [],
			isTableFiltered: false,
			filteredDate: '',
			filteredSourse: 0,
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
			this.filterableDataTable.sort((a, b) => a[name].localeCompare(b[name]))
		},
		sortByTypeId(typeId) {
			this.filterableDataTable.sort((a, b) => a[typeId] - b[typeId])
		},
	},
	watch: {
		TABLE_DATA() {
			this.filterableDataTable = this.TABLE_DATA
		},
		filteredSourse() {
			if (this.filteredSourse === '0')
				this.filterableDataTable = this.TABLE_DATA
			else {
				this.filterableDataTable = this.TABLE_DATA.filter(
					(data) => data.source_id === this.filteredSourse,
				)
			}
		},
		filteredDate() {
			this.filterableDataTable = this.TABLE_DATA.filter(
				(data) => data.date === this.filteredDate,
			)
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
.payment_filtering {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.payment_filtering_by_data {
	display: block;
}

.popup_animated-enter-active,
.popup_animated-leave-active {
	transition: opacity 0.5s ease;
	transition-delay: 0.5s !important;
}
.popup_animated-enter-from,
.popup_animated-leave-to {
	opacity: 0.2;
}
</style>
