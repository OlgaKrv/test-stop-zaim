<template>
	<div class="wrapper_content wrapper-content--fixed">
		<popupAddingPayment
			v-if="isPopupAddingVisible"
			@closePopup="closePopupAdding"
		>
			<div>
				<div class="flex justify-end items-center">
					<label class="mr-4">Клиент:</label>
					<input type="text" placeholder="row.client" />
				</div>
				<div class="flex justify-end items-center">
					<label class="mr-4">Договор:</label>
					<input type="text" placeholder="row.contract" />
				</div>
				<div class="flex justify-end items-center">
					<label class="mr-4">Тип оплаты:</label>
					<input type="text" placeholder="row.type_id" />
				</div>
				<div class="flex justify-end items-center">
					<label class="mr-4">Дата оплаты:</label>
					<input type="text" placeholder="row.date" />
				</div>
				<div class="flex justify-end items-center">
					<label class="mr-4">Сумма оплаты:</label>
					<input type="text" placeholder="row.summ" />
				</div>
				<div class="flex justify-end items-center">
					<label class="mr-4">Статус:</label>
					<input type="text" placeholder="row.status_id" />
				</div>
			</div>
		</popupAddingPayment>
		<section>
			<div class="container">
				<p class="title_text">Список платежей</p>
				<button @click="showPopupAdding" class="px-14 bg-blue-500 text-white">
					Добавить
				</button>
				<table>
					<thead>
						<tr>
							<th>Клиент</th>
							<th>Договор</th>
							<th>Тип платежа</th>
							<th>Дата</th>
							<th>Сумма (руб)</th>
							<th>Источник платежа</th>
							<th>Статус</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in paymentsData" :key="row.id">
							<td>{{ row.client }}</td>
							<td>{{ row.contract }}</td>
							<td>
								{{
									statusIdType.types.find((idType) => idType.id === row.type_id)
										.title
								}}
							</td>
							<td>{{ row.date }}</td>
							<td>{{ row.summ }}</td>
							<td>
								{{
									sourceIdType.find((idType) => idType.id === row.source_id)
										.title
								}}
							</td>
							<td>
								<span class="px-2 bg-orange-500 rounded-md text-white">
									{{
										statusIdType.statuses.find(
											(idType) => idType.id === row.status_id,
										).title
									}}
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				<!-- <div>{{ paymentsData }}</div>
				<div>{{ sourceIdType }}</div>
				<div>{{ statusIdType }}</div> -->
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import popupAddingPayment from '../components/PopupAddingPayment.vue'

export default {
	components: {
		popupAddingPayment,
	},
	data() {
		return {
			tableData: null,
			paymentsData: null,
			sourceIdType: null,
			statusIdType: null,
			isPopupAddingVisible: false,
			statusColor: [
				{ id: 1, color: 'bg-slate-500' },
				{ id: 2, color: 'bg-orange-500' },
				{ id: 3, color: 'bg-green-500' },
			],
		}
	},
	created() {
		this.tableData = this.$store.getters.tableData
	},
	methods: {
		showPopupAdding() {
			this.isPopupAddingVisible = true
		},
		closePopupAdding() {
			this.isPopupAddingVisible = false
		},
	},
	mounted() {
		axios
			.get('https://payments-test.stop-zaim.ru/public_html/payments')
			.then((response) => {
				this.paymentsData = response.data
			})
		axios
			.get('https://payments-test.stop-zaim.ru/public_html/sources')
			.then((response) => {
				this.sourceIdType = response.data
			})
		axios
			.get('https://payments-test.stop-zaim.ru/public_html/form_tss')
			.then((response) => {
				this.statusIdType = response.data
			})
	},
}
</script>

<style>
th {
	width: 300px;
}
tr {
	height: 4rem;
	text-align: center;
	border-top: 2px solid #000;
	border-bottom: 2px solid #000;
}
</style>
