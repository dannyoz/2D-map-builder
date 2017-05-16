import Vue from 'vue';
import Vuex from 'vuex';
import utils from './utils';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sprite: {"width": 10, "height": 10},
        mapSize: {"x": 50, "y": 50},
        currentTile: null,
    },
    mutations: {
        selectTile(state, tile) {
            state.currentTile = tile;
        }
    }
});

export default store;
