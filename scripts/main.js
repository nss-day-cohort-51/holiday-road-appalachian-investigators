import { getParks, getSinglePark } from "./parks/ParkDataManager.js";
import { parklist } from "./parks/ParkDropDown.js";
import { parkPost } from "./parks/ParkPost.js";
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

parkEntryElement.addEventListener('change', event => {
  if (event.target.id === "park_sec"){
    const parkPostElement = document.querySelector(".park_info");
  getSinglePark(event.target.value).then(data => {
    console.log(data)
    parkPostElement.innerHTML = parkPost(data.data[0])
  })
  }
})

}})

const parkEntryElement = document.querySelector(".parks_sec");
// const showParkDrpDwn = () => {
//   getParks().then(data => {
//     parkEntryElement.innerHTML = parklist(data.data)
//   })
// }

// const showParkData = document.querySelector()

// const showParkPost = () => {
//   // const parkPostElement = document.querySelector(".park_info");
//   // getParks().then(data => {
//   //   parkPostElement.innerHTML = ParkPostList(data.data)
//   // })
// }



    // showParkDrpDwn();
    showStateDrpDwn();
    getParks();
 