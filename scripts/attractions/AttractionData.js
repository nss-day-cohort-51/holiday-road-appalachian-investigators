import { attraction } from "./Attraction.js";

export const atList = (allAt) => {
    let postHTML = '<select name="attraction_info" class="dropdown" id="attraction_info"> <option value="0"> please select attraction </option> '; 

    for (const atObject of allAt) {
        postHTML += attraction(atObject)
    }
    postHTML += '</select>'

    return postHTML;

}