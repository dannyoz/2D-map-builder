<template>
    <div class="side-bar">
        <button @click="test">Test</button>
    </div>
</template>

<script>
    import store from '../../shared/store';
    export default {
        data() {
            return {
                spriteWidth: 10,
                spriteHeight: 10
            }
        },
        computed: {
            count() {
                return store.state.count;
            }
        },
        methods: {
            test() {
                store.commit('increment');
            }
        }
    }
</script>
