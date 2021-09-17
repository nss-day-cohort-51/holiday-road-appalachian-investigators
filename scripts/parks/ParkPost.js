export const parkPost = (ppObject) => {
    return `
    <div class="park_data">
        <h2>${ppObject.fullName}</h2>
        <p>${ppObject.description}</p>
        <h3>Address: ${ppObject.addresses[0].line1}, ${ppObject.addresses[0].city}  ${ppObject.addresses[0].stateCode} ${ppObject.addresses[0].postalCode} </h3>
    </div> 

    <div class="image_sec"> 
        <img src="${ppObject.images[0].url}" alt="Image of parks">
    </div>

    `
}