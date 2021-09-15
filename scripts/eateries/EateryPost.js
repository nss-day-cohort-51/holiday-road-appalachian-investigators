export const eatPost = (eatPostObject) => {
    return `
        <div> 
        <h2>${eatPostObject.businessName}</h2>
        <p>${eatPostObject.description}</p>
        <h3>${eatPostObject.city}, ${eatPostObject.state}</h3>
    `
}