<template>
	<div id="app" class="wrapper">
		<header>
			<div class="navbar">
				<div class="container">
					<div class="navbar_content">
						<div class="logo">Вывод оплат</div>
						<ul class="navbar_list">
							<li class="navbar_item" v-for="link in links" :key="link.title">
								<router-link
									class="navbar_link"
									:title="link.title"
									:to="link.url"
									>{{ link.title }}</router-link
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<router-view></router-view>
		<!-- <footer></footer> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [{ title: 'Меню', url: '/' }],
		}
	},
}
</script>
