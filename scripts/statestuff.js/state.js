import { getStates } from "./statesDataManager.js"

export const states = (stateObject) => {

return`



<option value="${stateObject.abbreviation}">${stateObject.name}</option>



`


} 

