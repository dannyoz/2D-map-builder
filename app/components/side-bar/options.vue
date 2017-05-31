<template>
    <div class="options">
        <div class="options__option slide-in-right">
            <div class="options__option__map-creator">
                <p>Create new map</p>
                <fieldset>
                    <label for="width">Width</label>
                    <input type="number" id="width" min="10" max="500" v-model="defaultWidth"/>
                </fieldset>
                <fieldset>
                    <label for="height">Height</label>
                    <input type="number" id="height" min="10" max="500" v-model="defaultHeight"/>
                </fieldset>
                <button class="submit block-icon-check" @click="createMap">Create</button>
            </div>
        </div>
        <div class="options__option slide-in-right">
            <p>Publish</p>
            <fieldset>
                <label for="file-name">File name</label>
                <input type="text" id="file-name" v-model="fileName"/>
            </fieldset>
            <fieldset>
                <label for="path">Path</label>
                <input type="text" id="path" v-model="publishPath"/>
            </fieldset>
            <button class="submit block-icon-check" @click="publish">Publish</button>
        </div>
    </div>
</template>

<script>
    import store from '../../shared/store';
    import utils from '../../shared/utils';
    import ApiService from '../../shared/api-service';
    const apiService = new ApiService();

    export default {
        data(){
            return {
                defaultWidth: String(store.state.mapSize.x),
                defaultHeight: String(store.state.mapSize.y),
                publishPath: "/Users/daniel.osborne/repos/2d-prototype/2d-prototype/Assets/Maps",
                fileName: "test"
            };
        },
        methods: {
            createMap() {
                utils.clearGrid();
                store.commit("setMapSize", {
                    "x": Number(this.defaultWidth),
                    "y": Number(this.defaultHeight)
                });
            },
            publish() {
                apiService.post('/api/publish', {
                    path: this.publishPath,
                    fileName: this.fileName,
                    map: utils.loadGrid(1, 1),
                }).end((err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Map saved successfully!");
                    }
                });
            }
        }
    }
</script>
