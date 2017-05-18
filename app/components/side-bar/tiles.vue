<template>
    <div class="tiles">
        <div class="tile slide-in-right" :class="{'hidden': hidden, 'tile--active': currentIndex == $index}" v-for="tile in tiles" draggable="true">
            <div v-if="!hidden" class="tile__icon" @click="selectTile($index)" :class="{'tile--active': currentIndex == $index}" :style="tilebg(tile)"></div>
            <span v-if="hidden" class="centre" @click="selectTile($index)" >{{tile.position.x}} - {{tile.position.y}}</span>
        </div>
    </div>
</template>

<script>
    import utils from '../../shared/utils';
    import store from '../../shared/store';

    export default {
        data(){
            return {
                currentIndex : null
            }
        },
        props: {
            tiles: Array,
            hidden: Boolean
        },
        ready() {
            this.selectTile(0);
        },
        methods: {
            tilebg(tile) {
                return utils.tilebg(tile);
            },
            selectTile(index) {
                const tile = this.tiles[index];
                this.currentIndex = index;
                store.commit('selectTile', tile);
            }
        }
    }
</script>
