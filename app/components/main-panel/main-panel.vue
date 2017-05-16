<template>
    <div class="main-panel">Main panel <pre>{{currentTile | json}}</pre></div>
</template>

<script>
    import store from '../../shared/store';
    export default {
        data() {
            return {
                main: true
            }
        },
        computed: {
            currentTile() {
                return store.state.currentTile;
            },
            mapSize() {
                return store.state.mapSize;
            }
        }
    }
</script>
