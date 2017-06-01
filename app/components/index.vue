<template>
	<controls></controls>
	<div class="app">
		<side-bar></side-bar>
		<main-panel></main-panel>
		<alerts></alerts>
	</div>		
</template>

<script>
	import controls from './controls/controls.vue';
	import sideBar from './side-bar/side-bar.vue';
	import mainPanel from './main-panel/main-panel.vue';
	import alerts from './main-panel/alerts.vue';

	export default {
		components: {
			controls,
			sideBar,
			mainPanel,
			alerts
		}
	}
</script>
