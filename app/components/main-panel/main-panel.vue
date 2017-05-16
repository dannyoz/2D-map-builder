<template>
    <div class="main-panel">Main panel {{count}}</div>
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
            count() {
                return store.state.count;
            }
        }
    }
</script>
