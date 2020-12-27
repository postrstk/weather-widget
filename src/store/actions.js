import openWeatherResponseParser from "@/utils/openWeatherAPI/responseParser"
import openWeatherFetchUrl from "@/utils/openWeatherAPI/fetchUrl";

import {fetchLocations, updateLocations} from "@/utils/localStorage";

export default {
    async fetchWeather(context, location) {
        context;
        let response = await fetch(openWeatherFetchUrl(location));
        if (response.ok) {
            let json = await response.json();
            context.commit("updateLocationWeather", {
                location: location,
                payload: openWeatherResponseParser(json),
            });
        } else {
            console.log("HTTP Error: " + response.status);
        }
    },

    getUserLocations(context) {
        let locations = fetchLocations();
        locations.forEach(location => context.commit("addLocation", location));
    },

    setUserLocations(context) {
        updateLocations(context.getters.locations);
    },

    addLocation({dispatch, commit}, payload) {
        commit("addLocation", payload);
        dispatch("setUserLocations");
    },

    removeLocation({dispatch, commit}, payload) {
        commit("removeLocation", payload);
        dispatch("setUserLocations");
    },

    updateLocationsOrder({dispatch, commit}, payload) {
        commit("updateLocationsOrder", payload);
        dispatch("setUserLocations");
    },
};
