<template>
    <div class="options">
        <div class="options__option slide-in-right">
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
        <div class="options__option slide-in-right">
            <p>Publish</p>
            <input type="text" v-model="publishPath"/>
        </div>
    </div>
</template>

<script>
    import store from '../../shared/store';
    export default {
        data(){
            return {
                defaultWidth: store.state.mapSize.x,
                defaultHeight: store.state.mapSize.y,
                publishPath: "/Users/daniel.osborne/repos/2d-prototype/2d-prototype/Assets/Maps"
            };
        },
        methods: {
            createMap() {
                console.log("mapppy");
            }
        }
    }
</script>
