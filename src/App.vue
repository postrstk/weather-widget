<template>
    <div id="app">
        
        <router-view />
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getUserLocations");
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
