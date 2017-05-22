<template>
    <div class="main-panel-controls">
        <div class="main-panel-controls__zoom">
            <i class="block-icon-magnifying-glass"></i> 
            <input type="range" min="10" max="100" v-model="zoom" @input="handleZoom"/>
        </div>
    </div>
</template>

<script>
    import store from '../../shared/store';
    export default {
        data(){
            return {
                zoom: 100
            }
        },
        methods:{
            handleZoom() {
                store.commit('setZoom', this.zoom);
            }
        }
    }
</script>