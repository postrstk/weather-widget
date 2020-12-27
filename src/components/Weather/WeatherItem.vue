<template>
    <div>
        {{ location_weather.location() }} : {{ location_weather.temperature() }}
        <img :src="icon_src" />
    </div>
</template>

<script>
import IconUrl from "@/utils/openWeatherAPI/iconsUrl";

export default {
    props: {
        LocationName: {
            type: String,
            default: "",
        },
    },
    computed: {
        location_weather() {
            return this.$store.getters.weather[this.LocationName];
        },
        icon_src() {
            if (!this.location_weather.iconCode()) return "";
            return IconUrl(this.location_weather.iconCode());
        },
    },
    data() {
        return {
            own_location_name: "",
        };
    },
    mounted() {
        if (!this.location_weather.isFetched()) {
            this.$store.dispatch("fetchWeather", this.LocationName);
        }
    },
};
</script>
