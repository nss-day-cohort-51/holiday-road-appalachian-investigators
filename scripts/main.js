import { getParks, getSinglePark } from "./parks/ParkDataManager.js";
import { parklist } from "./parks/ParkDropDown.js";
import { parkPost } from "./parks/ParkPost.js";
import { statelist } from "./statestuff.js/stateData.js";
import { getStates } from "./statestuff.js/statesDataManager.js";
import { atList } from "./attractions/AttractionData.js";
import { getAttractions } from "./attractions/AttractionDataManager.js";
import { atPost } from "./attractions/AttractionPost.js";
import { getSingleAt } from "./attractions/AttractionDataManager.js";
import { getEaten, getSingleEat } from "./eateries/EateryDataManager.js";
import { eatList } from "./eateries/eateryData.js";
import { eatPost } from "./eateries/EateryPost.js";


const atEntryElement = document.querySelector (".attraction_info");

const atPostEntryElement = document.querySelector (".attraction_post");

const eatEntryElement = document.querySelector (".eaten_drp");

const eatPostEntryElement = document.querySelector (".eat_info");

const showEatDrpDown = () => {
  getEaten().then(eatAll => {
    eatEntryElement.innerHTML = eatList(eatAll)
      })

}

eatEntryElement.addEventListener('change', event => {
  if (event.target.id === "eat_info"){
    getSingleEat(event.target.value).then(shaco => {
      eatPostEntryElement.innerHTML = eatPost(shaco)
    })
  }
})

const showAtDropDown = () => {
  getAttractions().then(allAt => {
atEntryElement.innerHTML = atList(allAt)
  })
}

atEntryElement.addEventListener('change', event => {
  if (event.target.id === "attraction_info"){
    getSingleAt(event.target.value).then(taco => {
      atPostEntryElement.innerHTML = atPost(taco)
    })
  }
})

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
    showAtDropDown();
    showEatDrpDown();