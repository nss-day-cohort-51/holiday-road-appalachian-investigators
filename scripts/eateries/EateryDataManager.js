export const getEaten = () => {
    return fetch(`http://holidayroad.nss.team/eateries`)
    .then(response => response.json())
}

export const getSingleEat = (shaco) => {
    return fetch(`http://holidayroad.nss.team/eateries/${shaco}`)
    .then(response => response.json())
}