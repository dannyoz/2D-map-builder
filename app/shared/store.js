import Vue from 'vue';
import Vuex from 'vuex';
import utils from './utils';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sprite: {"width": 40, "height": 20},
        mapSize: {"x": 50, "y": 50},
        currentTile: null,
        zoom: 100,
        currentTab:null
    },
    mutations: {
        selectTile(state, tile) {
            state.currentTile = tile;
        },
        setZoom(state, zoom) {
            state.zoom = zoom;
        },
        switchTab(state, tab) {
            state.currentTab = tab;
        },
        setMapSize(state, size) {
            state.mapSize = size;
        },
    }
});

export default store;
