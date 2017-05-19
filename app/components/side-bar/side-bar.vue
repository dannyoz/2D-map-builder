<template>
    <div class="side-bar">
        <tiles v-if="currentTab == 'tiles'" :hidden="hidden"></tiles>
        <options v-if="currentTab == 'options'"></options>
    </div>
</template>

<script>
    import store from '../../shared/store';
    import utils from '../../shared/utils';
    import tiles from './tiles.vue';
    import options from './options.vue';

    export default {
        components: {
            tiles,
            options
        },
        computed: {
            hidden() {
                return utils.isHidden();
            },
            currentTab() {
                return store.state.currentTab;
            }
        }
    }
</script>
