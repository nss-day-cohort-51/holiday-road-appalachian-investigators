import { keys } from "../Settings.js"
export const getParks = (state) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${keys.npsKey}`)
    .then(response => response.json())
    .then(data => data)
}

