<template>
    <div class="alert" v-if="alert">
        <div class="message slide-in-up" :class="[alert.type]">
            <p>{{alert.message}}</p>
            <i class="alert__close block-icon-cross" @click="close"></i>
        </div>
    </div>
</template>

<script>
    import store from '../../shared/store';
    export default {
        computed: {
            alert() {
                return store.state.alert
            }
        },
        watch: {
            alert() {
                this.timeout();
            },
        },
        methods: {
            close() {
                store.commit('setAlert', null);
            },
            timeout() {
                const self = this;
                setTimeout(() => {
                    self.close();
                }, 3500);
            },
        }
    }
</script>
