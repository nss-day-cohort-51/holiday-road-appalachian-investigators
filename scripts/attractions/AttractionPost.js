export const atPost = (atPostObject) => {
    return `
        <div class="attraction_header"> 
        <h2>${atPostObject.name}</h2>
        <p>${atPostObject.description}</p>
        <h3>${atPostObject.city}, ${atPostObject.state}</h3>
    `
}