export default (location) => {
    const API_KEY = '8b946ededa108fcbb3a85d31924f052e'
    return `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
}