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
            <input type="text" v-model="publishPath"/>
            <button class="submit block-icon-check" @click="publish">Publish</button>
        </div>
    </div>
</template>

<script>
    import store from '../../shared/store';
    import utils from '../../shared/utils';

    export default {
        data(){
            return {
                defaultWidth: String(store.state.mapSize.x),
                defaultHeight: String(store.state.mapSize.y),
                publishPath: "/Users/daniel.osborne/repos/2d-prototype/2d-prototype/Assets/Maps"
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
                console.log("publish");
            }
        }
    }
</script>
