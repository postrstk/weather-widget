export default (response_json) => {
    return {
        country: response_json.sys.country,
        temperature: response_json.main.temp,
        temperature_feels_like: response_json.main.feels_like,
        temperature_max: response_json.main.temp_max,
        temperature_min: response_json.main.temp_min,
        pressure: response_json.main.pressure,
        humidity: response_json.main.humidity,
        visibility: response_json.visibility,
        wind_speed: response_json.wind.speed,
        wind_deg: response_json.wind.deg,
        icon_code: response_json.weather[0].icon,
        description: response_json.weather[0].description,
        main: response_json.weather[0].main 
    }
};