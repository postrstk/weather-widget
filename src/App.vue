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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}
</style>
