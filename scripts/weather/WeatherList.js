import { weatherPost } from "./weatherPost.js";

export const weatherList = (allWeather) => {
    
    let postHTML = `<ul id="weather_list"> 
     `; 
     console.log(allWeather)
    for (const weatherObj of allWeather) {
        if ((allWeather.indexOf(weatherObj) + 1) % 8 === 0) {
            postHTML += weatherPost(weatherObj)
        }

    }
    postHTML += '</ul>'

    return postHTML;
}