<template>
    <div class="grid" :style="{'width': `${64 * mapSize.x}px`}">
        <div class="grid__row" v-for="row in grid">
            <div @click="drawTile(cell)" class="grid__cell" v-for="cell in row" :class="{'grid__cell--unassigned': !cell.tile}">
                <span v-if="cell.tile" class="centre">{{cell.tile.position.x}} - {{cell.tile.position.y}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../../shared/store';
    import utils from '../../shared/utils';
    export default {
        data(){
            return {
                grid: []
            }
        },
        props: {
            currentTile: Object,
        },
        ready() {
            this.grid = utils.createGrid(this.mapSize.x, this.mapSize.y);
        },
        computed: {
            currentTile() {
                return store.state.currentTile;
            },
            mapSize() {
                return store.state.mapSize;
            }
        },
        methods: {
            drawTile(cell) {
                const y = cell.gridPosition.y;
                const x = cell.gridPosition.x;
                this.grid[y][x].tile = this.currentTile;
            }
        }
    }
</script>