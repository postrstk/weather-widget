import openWeatherResponseParser from "@/utils/openWeatherAPI/responseParser";
import {
    fetchByLocationUrl,
    fetchByCoordinatesUrl,
} from "@/utils/openWeatherAPI/fetchUrl";
import { fetchLocations, updateLocations } from "@/utils/localStorage";

export default {
    async fetchWeather(context, location) {
        fetchByCoordinatesUrl;
        console.log(fetchByLocationUrl(location))
        let response = await fetch(fetchByLocationUrl(location));
        let result_dict = {
            location: location,
            status: response.ok,
        };
        if (response.ok) {
            let json = await response.json();
            result_dict.payload = openWeatherResponseParser(json);
        } else {
            console.log("HTTP Error: " + response.status);
        }
        context.commit("updateLocationWeather", result_dict);
    },

    getUserLocations(context) {
        // context;
        // if (window.navigator.geolocation) {
        //     window.navigator.geolocation.getCurrentPosition(
        //         console.log,
        //         console.log,
        //     );
        // }

        // fetchLocations();
        let locations = fetchLocations() ?? [];
        locations.forEach(location => context.commit("addLocation", location));
    },

    setUserLocations(context) {
        updateLocations(context.getters.locations);
    },

    updateLocations({ dispatch, commit }, { type, payload }) {
        commit(type, payload);
        dispatch("setUserLocations");
    },
};
