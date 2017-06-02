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
                return store.state.alert;
            }
        },
        watch: {
            alert() {
                if (!alert.notimer) {
                    this.timeout();
                }
            },
        },
        methods: {
            close() {
                store.commit('setAlert', null);
            },
            timeout() {
                setTimeout(() => {
                    this.close();
                }, 4500);
            },
        }
    }
</script>
