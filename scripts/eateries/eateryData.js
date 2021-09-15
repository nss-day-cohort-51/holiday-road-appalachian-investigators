import { eatery } from "./eatery.js";

export const eatList = (eatAll) => {
    let postHTML = '<select class="dropdown" id="eat_info"> <option value="0"> please select Eatery </option> '; 

    for (const eatObject of eatAll) {
        postHTML += eatery(eatObject)
    }
    postHTML += '</select>'

    return postHTML;

}