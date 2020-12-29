export default (location) => {
    const API_KEY = 'dd86d1e3a435c7aa8fb696d643ed1ceb'
    return `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
}