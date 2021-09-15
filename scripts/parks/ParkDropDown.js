import { parks } from "./park.js";

export const parklist = (allParks) => {

    let postHTML = '<select class="dropdown" id="park_sec"> <option value="0">please select a park</option> '; 
    console.log(allParks)
    for (const parkObject of allParks) {
        postHTML += parks(parkObject)
    }
    postHTML += '</select>'

    return postHTML;

}

