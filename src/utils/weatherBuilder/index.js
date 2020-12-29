import Weather from "@/models/Weather";
import {
    fetchByLocationUrl,
    fetchByCoordinatesUrl,
} from "@/utils/openWeatherAPI/fetchUrl";
import openWeatherResponseParser from "@/utils/openWeatherAPI/responseParser";

const fetchWeather = async (url) => {
    let response = await fetch(url);
    if (!response.ok) {
        console.log("HTTP Error: " + response.status);
        return null;
    } else {
        let json = await response.json();
        let result_dict = openWeatherResponseParser(json);

        let weather_object = new Weather(result_dict.location_name);
        weather_object.setCountry(result_dict.country);
        weather_object.setTemperature(result_dict.temperature);
        weather_object.setTemperatureFeelsLike(result_dict.temperature_feels_like);
        weather_object.setTemperatureMax(result_dict.temperature_max);
        weather_object.setTemperatureMin(result_dict.temperature_min);
        weather_object.setPressure(result_dict.pressure);
        weather_object.setHumidity(result_dict.humidity);
        weather_object.setWindSpeed(result_dict.wind_speed);
        weather_object.setVisibility(result_dict.visibility);
        weather_object.setWindDeg(result_dict.wind_deg);
        weather_object.setIconCode(result_dict.icon_code);
        weather_object.setDescription(result_dict.description);
        weather_object.setMain(result_dict.main);
        weather_object.setFetched();

        return weather_object;
    }
}

const buildWeatherByCoordinates = ({lat, lon}) => {
    return fetchWeather(fetchByCoordinatesUrl(lat, lon));
};

const buildWeatherByLocation = (location) => {
    return fetchWeather(fetchByLocationUrl(location));
};

export {
    buildWeatherByCoordinates,
    buildWeatherByLocation
};