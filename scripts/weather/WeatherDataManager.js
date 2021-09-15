import { keys } from "../Settings.js"

export const getWeather = (zipCode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=${keys.weatherKey}`)
    .then(response => response.json())
    .then(data => data)
}