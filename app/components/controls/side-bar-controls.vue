<template>
    <div class="side-bar-controls">
        <nav class="button-group tab">
            <button @click="switchTab($index)" :class="{'active': current == $index}" v-for="tab in tabs"><i :class="tabClass(tab)"></i> {{tab.title}}</button>
        </nav>
    </div>
</template>

<script>
    import store from '../../shared/store';
    export default {
        data(){
            return {
                current: 1,
                tabs: [{
                    'title':'Build',
                    'component': 'tiles',
                    'icon': 'block-icon-layers'
                },{
                    'title':'Options',
                    'component': 'options',
                    'icon': 'block-icon-cog'
                }]
            }
        },
        ready() {
            this.switchTab(this.current);
        },
        methods: {
            switchTab(index) {
                this.current = index;
                const component = this.tabs[index].component;
                store.commit('switchTab', component);
            },
            tabClass(tab) {
                return [tab.icon];
            }
        }
    }
</script>
