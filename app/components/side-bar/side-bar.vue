<template>
    <div class="side-bar">
        <tiles :tiles="spriteMap.tiles" :hidden="hidden"></tiles>
    </div>
</template>

<script>
    import store from '../../shared/store';
    import utils from '../../shared/utils';
    import tiles from './tiles.vue';

    export default {
        components: {
            tiles
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
            }
        }
    }
</script>
