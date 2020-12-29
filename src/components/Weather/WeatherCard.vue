<template>
    <div>
        <div v-if="location_weather.isFetched()" class="weather-card">
            <div class="weather-card__title">
                {{ location_weather.location() }}
            </div>
            <div class="weather-card__main-group">
                <img :src="icon_src" class="main-group__icon" />
                <div class="main-group__value">
                    {{ location_weather.temperature() }}
                </div>
            </div>
            <div class="weather-card__description">
                <p class="description__text">
                    {{ location_weather.temperatureFeelsLike() }}.
                    {{ location_weather.description() }}.
                </p>
            </div>
            <div class="weather-card__parameters">
                <div class="parameters__value-box">
                    <span>
                        <mdicon name="weatherWindy" :size="20" />
                    </span>
                    <span class="parameters__text">
                        Wind: {{ location_weather.windSpeed() }}
                        {{ location_weather.windDeg() }}.
                    </span>
                </div>
                <div class="parameters__value-box">
                    <span>
                        <mdicon name="speedometer" :size="20" />
                    </span>
                    <span class="parameters__text">
                        Pressure: {{ location_weather.pressure() }}.
                    </span>
                </div>
                <div class="parameters__value-box">
                    <span>
                        <mdicon name="water" :size="20" />
                    </span>
                    <span class="parameters__text">
                        Humidity: {{ location_weather.humidity() }}.
                    </span>
                </div>
                <div class="parameters__value-box">
                    <span>
                        <mdicon name="eye" :size="20" />
                    </span>
                    <span class="parameters__text">
                        Visibility: {{ location_weather.visibility() }}.
                    </span>
                </div>
            </div>
        </div>
        <div v-else class="weather-card weather-card--not-found">
            {{ location_weather.location() }}
        </div>
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
    mounted() {
        if (!this.location_weather.isFetched()) {
            this.$store.dispatch("fetchWeather", this.LocationName);
        }
    },
};
</script>
