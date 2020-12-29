import Vue from "vue";

import Weather from "@/models/Weather";

export default {
    addLocation(state, {value, weather}) {
        if (!(value in Object.keys(state.locations_weather))) {
            state.locations_order.push(value);
            Vue.set(state.locations_weather, value, weather ?? new Weather(value));
        }
    },

    removeLocation(state, index) {
        state.locations_order = state.locations_order.filter((_, idx) => idx !== index);
        delete state.locations_weather[location];
    },

    updateLocationsOrder(state, new_order) {
        state.locations_order = new_order;
    },

    updateLocationWeather(state, {location, new_weather_object}) {
        Vue.set(state.locations_weather, location, new_weather_object ?? new Weather(location))
    },
};
