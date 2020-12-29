import { API_KEY, SERVICE_URL } from "@/config/openWeatherAPI";

const fetchByLocation = (location) => {
    console.log(`${SERVICE_URL}/data/2.5/weather?q=${location}&appid=${API_KEY}`);
    return `${SERVICE_URL}/data/2.5/weather?q=${location}&appid=${API_KEY}`;
};

const fetchByCoordinates = (lat, lon) => {
    return `${SERVICE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
};

export { fetchByLocation, fetchByCoordinates };
