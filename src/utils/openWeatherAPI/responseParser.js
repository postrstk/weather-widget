const parseWindDegValue = (wind_deg) => {
    let directions_value = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];
    return directions_value[Math.round(wind_deg/22.5) + 1]
}

export default (response_json) => {
    return {
        location_name: response_json.name,
        country: response_json.sys.country,
        temperature: response_json.main.temp,
        temperature_feels_like: response_json.main.feels_like,
        temperature_max: response_json.main.temp_max,
        temperature_min: response_json.main.temp_min,
        pressure: response_json.main.pressure,
        humidity: response_json.main.humidity,
        visibility: response_json.visibility,
        wind_speed: response_json.wind.speed,
        wind_deg: parseWindDegValue(response_json.wind.deg),
        icon_code: response_json.weather[0].icon,
        description: response_json.weather[0].description,
        main: response_json.weather[0].main 
    }
};