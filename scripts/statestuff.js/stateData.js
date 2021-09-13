import { states } from "./state.js";
import { getStates } from "./statesDataManager.js";

export const statelist = (allStates) => {

    let postHTML = '<select id="states_sec"> <option value="0"> please select state </option> '; 

    for (const stateObject of allStates) {
        postHTML += states(stateObject)
    }
    postHTML += '</select>'

    return postHTML;

}

