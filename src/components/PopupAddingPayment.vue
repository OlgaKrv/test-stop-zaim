<template>
	<div class="popup_wrapper" ref="popup_wrapper">
		<div class="popup">
			<div class="popup_header">
				<span class="title_text">Добавление нового платежа</span>
				<span>
					<i class="material-icons cursor-pointer" @click="closePopup">close</i>
				</span>
			</div>
			<div class="popup_content">
				<slot></slot>
			</div>
			<div class="popup_footer">
				<button class="px-4 bg-slate-400 text-black" @click="closePopup">
					Отменить
				</button>
				<button class="px-4 bg-blue-500 text-white">Добавить оплату</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		closePopup() {
			this.$emit('closePopup')
		},
	},
	mounted() {
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
	padding: 16px;
	position: fixed;
	top: 50px;
	width: 400px;
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
}
.popup_content {
	padding: 1rem 0;
	display: block;
	justify-content: center;
	align-items: center;
}
</style>
