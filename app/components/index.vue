<template>
		<side-bar></side-bar>
		<main-panel></main-panel>
</template>

<script>
	import sideBar from './side-bar/side-bar.vue';
	import mainPanel from './main-panel/main-panel.vue';

	export default {
		components: {
			sideBar,
			mainPanel
		}
	}
</script>
