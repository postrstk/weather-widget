import Vue from "vue";

import Weather from "@/models/Weather";

export default {
    addLocation(state, value) {
        if (!(value in Object.keys(state.locations_weather))) {
            state.locations_order.push(value);
            Vue.set(state.locations_weather, value, new Weather(value));
        }
    },

    removeLocation(state, location) {
        state.locations_order = state.locations_order.filter(el => el !== location);
        delete state.locations_weather[location];
    },

    updateLocationsOrder(state, new_order) {
        state.locations_order = new_order;
    },

    updateLocationWeather(state, { location, payload }) {
        let updated_object = state.locations_weather[location];

        updated_object.setFetched();
        updated_object.setCountry(payload.country);
        updated_object.setTemperature(payload.temperature);
        updated_object.setTemperatureFeelsLike(payload.temperature_feels_like);
        updated_object.setTemperatureMax(payload.temperature_max);
        updated_object.setTemperatureMin(payload.temperature_min);
        updated_object.setPressure(payload.pressure);
        updated_object.setHumidity(payload.humidity);
        updated_object.setWindSpeed(payload.wind_speed);
        updated_object.setWindDeg(payload.wind_deg);
        updated_object.setIconCode(payload.icon_code);
        updated_object.setDescription(payload.description);
        updated_object.setMain(payload.main);
    },
};
