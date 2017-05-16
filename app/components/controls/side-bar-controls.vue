<template>
    <div class="side-bar-controls">
        tabs
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tabs: ['settings','tiles']
            }
        },
        methods: {
            switchTab() {
                console.log('switch')
            }
        }
    }
</script>