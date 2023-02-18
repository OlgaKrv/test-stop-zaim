<template>
	<div class="wrapper_content wrapper-content--fixed">
		<section>
			<div class="container">
				<p class="m-0 mb-3 text-xl font-bold">Список платежей</p>
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
						<tr v-for="row in tableData" :key="row.contract">
							<td>{{ row.client }}</td>
							<td>{{ row.contract }}</td>
							<td>{{ row.type_id }}</td>
							<td>{{ row.date }}</td>
							<td>{{ row.summ }}</td>
							<td>{{ row.source_id }}</td>
							<td>{{ row.status_id }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: null,
		}
	},
	created() {
		this.tableData = this.$store.getters.tableData
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
