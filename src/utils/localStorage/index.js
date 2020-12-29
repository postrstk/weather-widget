const fetchLocations = () => {
    return JSON.parse(localStorage.getItem("widget-weather-locations"));
};

const updateLocations = (locations) => {
    localStorage.setItem("widget-weather-locations", JSON.stringify(locations));
};

export { fetchLocations, updateLocations };
