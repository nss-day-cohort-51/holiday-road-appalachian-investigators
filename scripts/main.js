import { getParks } from "./parks/ParkDataManager.js";
import { parklist } from "./parks/ParkDropDown.js";
import { states } from "./statestuff.js/state.js";
import { statelist } from "./statestuff.js/stateData.js";
import { getStates } from "./statestuff.js/statesDataManager.js";
const entryElement = document.querySelector(".states_sec");
const showStateDrpDwn = () => { 
    getStates().then(allStates =>{
        entryElement.innerHTML = statelist(allStates); 
    })  
  }

entryElement.addEventListener('change', event => {
  if(event.target.id === "states_sec"){
    getParks(event.target.value).then(data => {
    parkEntryElement.innerHTML = parklist(data.data)
  })
}})

const parkEntryElement = document.querySelector(".parks_sec");
// const showParkDrpDwn = () => {
//   getParks().then(data => {
//     parkEntryElement.innerHTML = parklist(data.data)
//   })
// }



    // showParkDrpDwn();
    showStateDrpDwn();
    getParks();