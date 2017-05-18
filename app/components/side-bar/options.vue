<template>
    <div class="options slide-in-right">
        <div class="options__create-map">
            <p>Create new map</p>
            <label for="width">Width</label>
            <input type="number" id="width" min="10" max="500"/>
            <label for="height">Height</label>
            <input type="number" id="height" min="10" max="500"/>
            <button @click="createMap">Create</button>
        </div>
    </div>
</template>

<script>
    import store from '../../shared/store';
    export default {
        data(){
            return {
                defaultWidth: store.state.mapSize.x,
                defaultHeight: store.state.mapSize.y
            };
        },
        methods: {
            createMap() {
                console.log("mapppy");
            }
        }
    }
</script>
