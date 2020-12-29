import {
    buildWeatherByCoordinates,
    buildWeatherByLocation
} from "@/utils/weatherBuilder";
import { fetchLocations, updateLocations } from "@/utils/localStorage";
import userCoordinates from "@/utils/geolocation";

export default {
    async fetchWeather(context, location) {
        let new_weather_object = await buildWeatherByLocation(location);
        context.commit("updateLocationWeather", {location, new_weather_object});
    },

    async getUserLocations({dispatch, commit}) {
        let locations = fetchLocations();
        if (locations && locations.length > 0) {
            locations.forEach((location) => commit("addLocation", {value: location}));
        } else {
            let coords = await userCoordinates();
            if (coords) {
                let new_weather_obj = await buildWeatherByCoordinates(coords);
                commit("addLocation", {
                    value: new_weather_obj.locationName(),
                    weather: new_weather_obj,
                });
                dispatch("setUserLocations");
            }
        }
    },

    setUserLocations(context) {
        updateLocations(context.getters.locations);
    },

    async syncUpdateLocations({ dispatch, commit }, { type, payload }) {
        switch (type) {
            case "addLocation": {
                let new_weather_obj = await buildWeatherByLocation(payload);
                commit("addLocation", {
                    value: new_weather_obj ? new_weather_obj.locationName() : payload,
                    weather: new_weather_obj,
                });
                break;
            }
            case "removeLocation":
            case "updateLocationsOrder":
                commit(type, payload);
                break;
        }
        dispatch("setUserLocations");
    },
};
