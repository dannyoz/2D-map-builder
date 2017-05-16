export default {
    createGrid(width, height){
        const grid = [];
        for (let y = 0; y < height; y++) {
            const columns = [];
            for (let x = 0; x < width; x++) {
                const tile = {
                    gridPosition: {x,y},
                    tile: null
                };
                columns.push(tile);
            }
            grid.push(columns);
        }
        return grid;
    },
    sideBarMap(width, height){
        const grid = [];
        const tiles = [];
        for (let y = 0; y < height; y++) {
            const columns = [];
            for (let x = 0; x < width; x++) {
                const tile = {
                    position: {x,y}
                };
                columns.push(tile);
                tiles.push(tile);
            }
            grid.push(columns);
        }
        return {
            grid,
            tiles
        };
    },
    isHidden() {
        const mode = location.search.replace("?hidden=", "");
        const bool = (mode == "true") ? true : false;
        return bool;
    },
    tilebg(tile) {
        const imgPath = "../img/worlds/streets/sprite-map.png";
        const size = 64;
        const x = size * tile.position.x;
        const y = size * tile.position.y;
        return {
            "background": `url(${imgPath})`,
            "backgroundPosition" : `-${x}px -${y}px`
        }
    }
}
