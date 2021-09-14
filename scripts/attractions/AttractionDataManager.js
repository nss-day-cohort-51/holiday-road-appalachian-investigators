export const getAttractions = () => {
    return fetch(`http://holidayroad.nss.team/bizarreries`)
    .then(response => response.json())
}

export const getSingleAt = (taco) => {
    return fetch(`http://holidayroad.nss.team/bizarreries/${taco}`)
    .then(response => response.json())
}