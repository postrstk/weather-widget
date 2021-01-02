export default {
    weather(state) {
        return state.locations_weather;
    },
    locations(state) {
        return state.locations_order;
    },
    inputLocationsErrorHandler(state) {
        return state.input_location_error_handler;
    },
    geolocationErrorHandler(state) {
        return state.geolocation_error_handler;
    }
};
