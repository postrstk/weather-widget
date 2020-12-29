import Vue from "vue";

import Weather from "@/models/Weather";
import {
    ADD_LOCATION,
    REMOVE_LOCATION,
    UPDATE_LOCATIONS_ORDER,
    UPDATE_LOCATION_WEATHER,
} from "./mutationsType";

export default {
    [ADD_LOCATION](state, { value, weather }) {
        if (!(value in Object.keys(state.locations_weather))) {
            state.locations_order.push(value);
            Vue.set(
                state.locations_weather,
                value,
                weather ?? new Weather(value),
            );
        }
    },

    [REMOVE_LOCATION](state, index) {
        state.locations_order = state.locations_order.filter(
            (_, idx) => idx !== index,
        );
        delete state.locations_weather[location];
    },

    [UPDATE_LOCATIONS_ORDER](state, new_order) {
        state.locations_order = new_order;
    },

    [UPDATE_LOCATION_WEATHER](state, { location, new_weather_object }) {
        Vue.set(
            state.locations_weather,
            location,
            new_weather_object ?? new Weather(location),
        );
    },
};
