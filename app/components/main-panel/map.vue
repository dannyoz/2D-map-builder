<template>
    <div class="grid" :style="calculateGridSize()">
        <div class="grid__row" v-for="row in grid">
            <div @click="drawTile(cell)" @contextmenu="deleteTile($event, cell)" class="grid__cell" v-for="cell in row" :class="{'grid__cell--unassigned': !cell.tiles.length, 'grid__cell--disabled' : !canDraw(cell.tiles)}">
                <div v-if="cell.tiles.length && !hidden">
                    <div class="grid__cell__icon" v-for="tile in cell.tiles" track-by="$index" :style="tilebg(tile)"></div>
                </div>
                <span v-if="cell.tiles.length && hidden" class="centre">
                    <span v-for="tile in cell.tiles" track-by="$index">{{tile.position.x}}{{tile.position.y}}</span>
                </span>
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
            store.commit("setMapSize", {
                "x": this.grid[0].length,
                "y": this.grid.length
            });
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
        watch: {
            mapSize() {
                this.loadGrid();
            },
        },
        methods: {
            loadGrid() {
                this.grid = utils.loadGrid(this.mapSize.x, this.mapSize.y);
            },
            drawTile(cell) {
                if(this.canDraw(cell.tiles) && this.currentTile){
                    const y = cell.gridPosition.y;
                    const x = cell.gridPosition.x;
                    this.grid[y][x].tiles.push(this.currentTile);
                    utils.saveGrid(this.grid);
                }
            },
            deleteTile(e, cell) {
                e.preventDefault();
                if(cell.tiles.length) {
                    const y = cell.gridPosition.y;
                    const x = cell.gridPosition.x;
                    this.grid[y][x].tiles.splice(-1,1);
                    utils.saveGrid(this.grid);
                }
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
            },
            canDraw(tiles){
                const limit = 3;
                return tiles.length < limit;
            }
        }
    }
</script>
