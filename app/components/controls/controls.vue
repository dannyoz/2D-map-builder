<template>
	<div class="controls">
		<side-bar-controls></side-bar-controls>
		<main-panel-controls></main-panel-controls>
	</div>		
</template>

<script>
	import sideBarControls from  './side-bar-controls.vue';
	import mainPanelControls from './main-panel-controls.vue';
	export default {
		components: {
			sideBarControls,
			mainPanelControls
		}
	}
</script>
