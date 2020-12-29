<template>
    <div>
        <weather-card
            v-for="(location, index) in locations"
            :key="index"
            :location-name="location"
        />
    </div>
</template>

<script>
import WeatherCard from "@/components/Weather/WeatherCard";
import store from "@/store";
import router from "@/router"

export default {
    store,
    router,
    components: {
        WeatherCard,
    },
    computed: {
        locations() {
            return this.$store.getters.locations;
        },
    },
};
</script>
