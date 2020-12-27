<template>
    <div @click="handleClick">
        <div>Weather view</div>
        <weather-item
            v-for="(location, index) in locations"
            :key="index"
            :location-name="location"
        />
    </div>
</template>

<script>
import WeatherItem from "@/components/Weather/WeatherItem";

export default {
    components: {
        WeatherItem,
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
