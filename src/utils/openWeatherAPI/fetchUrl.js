import { API_KEY, API_URL } from "@/config/openWeatherAPI";

const fetchByLocationUrl = (location) => {
    return `${API_URL}/weather?q=${location}&appid=${API_KEY}`;
};

const fetchByCoordinatesUrl = (lat, lon) => {
    return `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
};

export { fetchByLocationUrl, fetchByCoordinatesUrl };
