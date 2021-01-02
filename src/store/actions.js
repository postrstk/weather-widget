import {
    buildWeatherByCoordinates,
    buildWeatherByLocation,
} from "@/utils/weatherBuilder";
import { fetchLocations, updateLocations } from "@/utils/localStorage";
import userCoordinates from "@/utils/geolocation";

import {
    FETCH_WEATHER,
    GET_USER_LOCATIONS,
    SET_USER_LOCATIONS,
    SYNC_UPDATE_LOCATIONS,
} from "./actionsType";

import {
    ADD_LOCATION,
    REMOVE_LOCATION,
    UPDATE_LOCATIONS_ORDER,
    UPDATE_LOCATION_WEATHER,
} from "./mutationsType";

export default {
    async [FETCH_WEATHER](context, location) {
        let new_weather_object = await buildWeatherByLocation(location);
        context.commit(UPDATE_LOCATION_WEATHER, {
            location,
            new_weather_object,
        });
    },

    async [GET_USER_LOCATIONS]({ dispatch, commit, getters }) {
        let locations = fetchLocations();
        if (locations && locations.length > 0) {
            locations.forEach((location) =>
                commit(ADD_LOCATION, { value: location }),
            );
        } else {
            let coords = await userCoordinates();
            if (coords) {
                let new_weather_obj = await buildWeatherByCoordinates(coords);
                commit(ADD_LOCATION, {
                    value: new_weather_obj.locationName(),
                    weather: new_weather_obj,
                });
                dispatch(SET_USER_LOCATIONS);
            } else {
                getters.geolocationErrorHandler.addErrorMessage(
                    "Geolocation not allowed!"
                );
            }
        }
    },

    [SET_USER_LOCATIONS](context) {
        updateLocations(context.getters.locations);
    },

    async [SYNC_UPDATE_LOCATIONS](
        { dispatch, commit, getters },
        { type, payload },
    ) {
        switch (type) {
            case ADD_LOCATION: {
                if (getters.locations.includes(payload)) {
                    getters.inputLocationsErrorHandler.addErrorMessage(
                        "This locations already exist!",
                    );
                    return;
                }
                let new_weather_obj = await buildWeatherByLocation(payload);
                commit(ADD_LOCATION, {
                    value: new_weather_obj
                        ? new_weather_obj.locationName()
                        : payload,
                    weather: new_weather_obj,
                });
                break;
            }
            case REMOVE_LOCATION:
            case UPDATE_LOCATIONS_ORDER:
                commit(type, payload);
                break;
        }
        dispatch(SET_USER_LOCATIONS);
    },
};
