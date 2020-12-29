<template>
    <div id="app">
        <router-view />
        <aside class="right-bar">
            <span class="right-bar__fab-button" @click="handleClick">
                <mdicon :name="icon" />
            </span>
        </aside>
    </div>
</template>

<script>
import "@/plugins/icons";
import store from "@/store";
import router from "@/router";

export default {
    store,
    router,
    name: "App",
    mounted() {
        this.$store.dispatch("getUserLocations");
        this.$router.push("/");
    },
    computed: {
        next_route_name() {
            if (this.$route.name === "Weather") return "Settings";
            return "Weather";
        },
        icon() {
            if (this.next_route_name === "Weather") return "close";
            return "cog";
        },
    },
    methods: {
        handleClick() {
            this.$router.push({ name: this.next_route_name });
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
