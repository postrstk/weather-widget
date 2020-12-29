<template>
    <div v-if="locations.length">
        <weather-card
            v-for="(location, index) in locations"
            :key="index"
            :location-name="location"
        />
    </div>
    <div v-else>
        <weather-card-empty @addLocation="handleClick"/>
    </div>
</template>

<script>
import WeatherCard from "@/components/Weather/WeatherCard";
import WeatherCardEmpty from "@/components/Weather/WeatherCardEmpty";


export default {
    components: {
        WeatherCard,
        WeatherCardEmpty,
    },
    computed: {
        locations() {
            return this.$store.getters.locations;
        },
    },
    methods: {
        handleClick() {
            this.$emit("openSettings")
        }
    }
};
</script>
