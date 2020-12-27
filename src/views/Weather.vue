<template>
    <div>
        <span class="mdi mdi-cog fab-button" @click="handleClick"></span>
        <weather-card
            v-for="(location, index) in locations"
            :key="index"
            :location-name="location"
        />
    </div>
</template>

<script>
import WeatherCard from "@/components/Weather/WeatherCard";

export default {
    components: {
        WeatherCard,
    },
    computed: {
        locations() {
            return this.$store.getters.locations;
        },
    },
    data() {
        return {};
    },
    methods: {
        handleClick() {
            this.$router.push({name: 'Settings'})
        }
    }
};
</script>
