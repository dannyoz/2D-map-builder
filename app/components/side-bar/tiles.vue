<template>
    <div class="tiles">
        <div class="tile"
            :class="tileClass($index)"
            v-for="tile in tiles"
            track-by="$index"
            draggable="true"
            @drop="drop($event)"
            @dragover="allowDrop($event)"
            @dragenter="targetDropspace($index)"
            @dragStart="dragTile($index)">
            <div v-if="!hidden && tile.position" class="tile__icon" @click="selectTile($index)" :class="{'tile--active': currentIndex == $index}" :style="tilebg(tile)"></div>
            <span v-if="hidden && tile.position" class="centre" @click="selectTile($index)" >{{tile.position.x}} - {{tile.position.y}}</span>
            <span v-if="tile.targetTile" class="centre" >derp</span>
        </div>
    </div>
</template>

<script>
    import utils from '../../shared/utils';
    import store from '../../shared/store';
    export default {
        data(){
            return {
                tiles: [],
                currentIndex : null,
                dragIndex: null,
                targetIndex: null,
                enterIndex: null,
                tileSize: 64,
                border: 1,
                columns: 5,
            }
        },
        props: {
            hidden: Boolean
        },
        computed: {
            spriteHeight() {
                return store.state.sprite.height;
            },
            spriteWidth() {
                return store.state.sprite.width;
            },
            spriteMap() {
                return utils.loadSideBar(this.spriteWidth, this.spriteHeight);
            },
        },
        ready() {
            this.tiles = this.spriteMap.tiles;
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
            },
            tileClass($index) {
                return {
                    'hidden': this.hidden,
                    'tile--drag-target': $index == this.targetIndex,
                    'tile--dragged' : $index == this.dragIndex,
                    'tile--active': this.currentIndex == $index
                }
            },
            dragTile(i) {
                this.dragIndex = i;
            },
            targetDropspace(i){
                if(i != this.dragIndex && i != this.targetIndex){
                    this.targetIndex = i;
                }   
            },  
            allowDrop(e,) {
                e.preventDefault();
            },
            drop(e) {
                const remove = (this.targetIndex < this.dragIndex) ? this.dragIndex + 1 : this.dragIndex;
                const insert = (this.targetIndex < this.dragIndex) ? this.targetIndex : this.targetIndex + 1;
                this.tiles.splice(insert, 0, this.tiles[this.dragIndex]);
                this.tiles.splice(remove, 1);
                this.targetIndex = null;
                this.dragIndex = null;

                utils.saveSideBar({
                    tiles: this.tiles,
                    grid: this.spriteMap.grid 
                });
            }
        }
    }
</script>
