<template>
    <div class="side-bar">
        <tiles v-if="currentTab == 'tiles'" :tiles="spriteMap.tiles" :hidden="hidden"></tiles>
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
            spriteHeight() {
                return store.state.sprite.height;
            },
            spriteWidth() {
                return store.state.sprite.width;
            },
            spriteMap() {
                return utils.sideBarMap(this.spriteWidth, this.spriteHeight);
            },
            hidden() {
                return utils.isHidden();
            },
            currentTab() {
                return store.state.currentTab;
            }
        }
    }
</script>
