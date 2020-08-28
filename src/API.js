const fetchWeather = async () => {
    const endpoint = 'https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=17601845f2ac4f3e222d500405631c04&units=metric';
    const data = fetch(endpoint)
        .then((res) => res.json())
    return data;
}

export default fetchWeather;