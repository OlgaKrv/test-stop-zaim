<template>
	<div class="popup_wrapper" ref="popup_wrapper">
		<div class="popup">
			<div class="popup_header">
				<span class="title_text">Добавление нового платежа</span>
				<span>
					<i class="material-icons cursor-pointer" @click="closePopup">close</i>
				</span>
			</div>
			<hr />
			<div class="popup_content">
				<div class="input_category">
					<label class="mr-4">Клиент:</label>
					<input
						class="input_field"
						:class="changeInputСolor('client')"
						type="text"
						v-model="newPayment.client"
					/>
				</div>
				<div class="input_category">
					<label class="mr-4">Договор:</label>
					<input
						class="input_field"
						:class="changeInputСolor('contract')"
						type="text"
						v-model="newPayment.contract"
					/>
				</div>
				<div class="input_category">
					<label class="mr-4">Тип оплаты:</label>
					<select
						class="input_field"
						:class="changeInputСolor('type_id')"
						v-model="newPayment.type_id"
					>
						<option
							v-for="ID_TYPE in DATA_ID_TYPE.types"
							v-bind:key="ID_TYPE.id"
							v-bind:value="ID_TYPE.id"
							v-text="ID_TYPE.title"
						></option>
					</select>
				</div>
				<div class="input_category">
					<label class="mr-4">Дата оплаты:</label>
					<input
						class="input_field"
						:class="changeInputСolor('date')"
						type="text"
						v-model="newPayment.date"
					/>
				</div>
				<div class="input_category">
					<label class="mr-4">Сумма оплаты:</label>
					<input
						class="input_field"
						:class="changeInputСolor('summ')"
						type="text"
						v-model="newPayment.summ"
					/>
				</div>
				<div class="input_category">
					<label class="mr-4">Статус:</label>
					<select
						class="input_field"
						:class="changeInputСolor('status_id')"
						v-model="newPayment.status_id"
					>
						<option
							v-for="ID_TYPE in DATA_ID_TYPE.statuses"
							v-bind:key="ID_TYPE.id"
							v-bind:value="ID_TYPE.id"
							v-text="ID_TYPE.title"
						></option>
					</select>
				</div>
			</div>
			<hr />
			<div class="popup_footer">
				<button class="px-4 bg-slate-200 text-black" @click="closePopup">
					Отменить
				</button>
				<button class="px-4 bg-blue-500 text-white" @click="addPopup">
					Добавить оплату
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			newPayment: {
				id: null,
				client: '',
				contract: '',
				type_id: null,
				date: '',
				summ: '',
				source_id: null,
				status_id: null,
			},
			isValidNewPayment: true,
		}
	},
	computed: {
		...mapGetters(['TABLE_DATA', 'DATA_ID_TYPE']),
	},
	methods: {
		...mapActions(['GET_DATA_ID_TYPE_FROM_API']),
		changeInputСolor(category) {
			if (this.isValidNewPayment) {
				return ''
			}
			return this.newPayment[category] ? '' : 'bg-red-200 border-red-600'
		},
		closePopup() {
			this.$emit('closePopup')
		},
		checkValidityPayment() {
			if (
				this.newPayment.client &&
				this.newPayment.contract &&
				this.newPayment.type_id &&
				this.newPayment.date &&
				this.newPayment.summ &&
				this.newPayment.status_id
			)
				this.isValidNewPayment = true
			else this.isValidNewPayment = false
		},
		addPopup() {
			this.checkValidityPayment()
			if (this.isValidNewPayment) {
				axios
					// .delete('https://payments-test.stop-zaim.ru/public_html/payments/', {
					// 	date: '2023-02-14',
					// })
					.post('https://payments-test.stop-zaim.ru/public_html/payments', {
						id: this.TABLE_DATA.length + 1,
						client: this.newPayment.client,
						contract: this.newPayment.contract,
						type_id: this.newPayment.type_id,
						date: this.newPayment.date,
						summ: this.newPayment.summ,
						source_id: this.newPayment.source_id,
						status_id: this.newPayment.status_id,
					})
					.then((response) => {
						return response.data
					})
			}
		},
	},
	mounted() {
		this.GET_DATA_ID_TYPE_FROM_API()
		document.addEventListener('click', (item) => {
			if (item.target === this.$refs.popup_wrapper) {
				this.closePopup()
			}
		})
	},
}
</script>

<style>
.popup_wrapper {
	background: rgba(64, 64, 64, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
}
.popup {
	position: fixed;
	top: 50px;
	width: 450px;
	background: #fff;
	box-shadow: 0 0 17px #e7e7e7;
	z-index: 10;
	border-radius: 0.3rem;
}
.popup_header,
.popup_footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
}
.popup_content {
	display: block;
	justify-content: center;
	align-items: center;
	padding: 16px;
}
</style>
