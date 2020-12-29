class Weather {
    constructor(location_name) {
        this._is_fetched = false;
        this._location_name = location_name;
        this._temperature = 0;
        this._country = "Not Found";
        this._temperature = 0;
        this._temperature_feels_like = 0;
        this._temperature_max = 0;
        this._temperature_min = 0;
        this._pressure = 0;
        this._humidity = 0;
        this._visibility = 0;
        this._wind_speed = 0;
        this._wind_deg = 0;
        this._description = "";
        this._main = "";
        this._icon_code = "";
    }

    isFetched() {
        return this._is_fetched;
    }

    setFetched() {
        this._is_fetched = true;
    }

    location() {
        return `${this._location_name}, ${this._country}`;
    }

    locationName() {
        return this._location_name;
    }

    setCountry(value) {
        this._country = value;
    }

    setTemperature(value_in_kelvin) {
        this._temperature = Math.round(value_in_kelvin - 273.15);
    }
    temperature() {
        return this._temperature + "°C";
    }

    setTemperatureFeelsLike(value_in_kelvin) {
        this._temperature_feels_like = Math.round(value_in_kelvin - 273.15);
    }
    temperatureFeelsLike() {
        return `Feels like ${this._temperature_feels_like}°C`;
    }

    setTemperatureMax(value_in_kelvin) {
        this._temperature_max = Math.round(value_in_kelvin - 273.15);
    }
    temperatureMax() {
        return this._temperature_max + "°C";
    }

    setTemperatureMin(value_in_kelvin) {
        this._temperature_min = Math.round(value_in_kelvin - 273.15);
    }
    temperatureMin() {
        return this._temperature_min + "°C";
    }


    temperatureMinMax() {
        return `${this._temperature_min}..${this._temperature_max}`
    }

    pressure() {
        return this._pressure + "hPa";
    }
    setPressure(value) {
        this._pressure = value;
    }

    humidity() {
        return this._humidity + "%";
    }
    setHumidity(value) {
        this._humidity = value;
    }

    visibility() {
        return (this._visibility/1000).toFixed(1) + "km";
    }
    setVisibility(value) {
        this._visibility = value;
    }

    windSpeed() {
        return this._wind_speed + "m/s";
    }
    setWindSpeed(value) {
        this._wind_speed = value;
    }

    windDeg() {
        return this._wind_deg;
    }
    setWindDeg(value) {
        this._wind_deg = value;
    }

    setDescription(value) {
        this._description = value;
    }
    description() {
        if (!this._description) return this._description;
        //Title case
        return this._description[0].toUpperCase() + this._description.slice(1);
    }

    setMain(value) {
        this._main = value;
    }
    main() {
        return this._main;
    }

    iconCode() {
        return this._icon_code;
    }
    setIconCode(value) {
        this._icon_code = value;
    }
}

export default Weather;
