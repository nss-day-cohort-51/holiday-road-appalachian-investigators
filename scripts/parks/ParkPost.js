export const parkPost = (ppObject) => {
    return `
    <div>
        <h2>${ppObject.fullName}</h2>
        <p>${ppObject.description}</p>
        <h3>Address: ${ppObject.addresses[0].line1}, ${ppObject.addresses[0].city}  ${ppObject.addresses[0].stateCode} ${ppObject.addresses[0].postalCode} </h3>
    </div> 

    <div> 
        <img src="${ppObject.images[0].url}" alt="">
    </div>

    `
}