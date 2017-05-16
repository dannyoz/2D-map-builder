<template>
    <div class="grid" :style="calculateGridSize()">
        <div class="grid__row" v-for="row in grid">
            <div @click="drawTile(cell)" class="grid__cell" v-for="cell in row" :class="{'grid__cell--unassigned': !cell.tile}">
                <div v-if="cell.tile && !hidden" class="grid__cell__icon" :style="tilebg(cell.tile)"></div>
                <span v-if="cell.tile && hidden" class="centre">{{cell.tile.position.x}} - {{cell.tile.position.y}}</span>
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
            this.loadGrid();
        },
        computed: {
            currentTile() {
                return store.state.currentTile;
            },
            mapSize() {
                return store.state.mapSize;
            },
            hidden() {
                return utils.isHidden();
            },
            zoom() {
                return store.state.zoom;
            }
        },
        methods: {
            loadGrid() {
                const savedGrid = localStorage.getItem("grid");
                const saveData = JSON.parse(savedGrid);
                if (saveData) {
                    this.grid = saveData;
                } else {
                    this.grid = utils.createGrid(this.mapSize.x, this.mapSize.y);
                } 
            },
            drawTile(cell) {
                const y = cell.gridPosition.y;
                const x = cell.gridPosition.x;
                this.grid[y][x].tile = this.currentTile;
                const data = JSON.stringify(this.grid);
                localStorage.setItem("grid", data);
            },
            tilebg(tile) {
                return utils.tilebg(tile);
            },
            calculateGridSize() {
                const value = this.zoom / 100;
                return {
                    'transform': `scale(${value})`,
                    'width': `${64 * this.mapSize.x}px`
                }
            }
        }
    }
</script>