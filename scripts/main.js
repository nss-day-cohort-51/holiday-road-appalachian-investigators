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
import { getWeather } from "./weather/WeatherDataManager.js";
import { weatherPost } from "./weather/weatherPost.js";
import { weatherList } from "./weather/WeatherList.js";
import { createPost } from "./aside/asideDatamanager.js";
import { asideCard } from "./aside/asidePost.js";



const atEntryElement = document.querySelector (".attraction_info");

const atPostEntryElement = document.querySelector (".attraction_post");

const eatEntryElement = document.querySelector (".eaten_drp");

const eatPostEntryElement = document.querySelector (".eat_info");

const parkEntryElement = document.querySelector(".parks_sec");

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

// const showAsideEntry = () => {
//   (asideEntryElement.innerHTML = asideCard());

// }

// const asideEntryElement = document.querySelector(".aside")
// asideEntryElement.addEventListener("click", event => {
//   event.preventDefault();
//   if (event.target.class === dropdown) {
//     const state = document.querySelector("select[name=`states_sec`]").value
//     const park = document.querySelector("select[name=`park_sec`]").value
//     const attraction = document.querySelector("select[name=``attraction_info]").value
//     const eatery = document.querySelector("select[name=`eat_info`]").value

//     const postObject = {
//       state: state,
//       park: park,
//       attraction: attraction,
//       eatery: eatery
//     }
//     createPost(postObject)
//     .then(dbResponse => {
//       showAsidecCard
//     })
//   }
// })

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
  getWeather(data.data[0].addresses[0].postalCode)
  .then(weather => {
    parkEntryElement.innerHTML = weatherList(weather.list)
  })
  })
  }
})

}})


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
    // getParks();
    showAtDropDown();
    showEatDrpDown();
  // showAsideEntry();