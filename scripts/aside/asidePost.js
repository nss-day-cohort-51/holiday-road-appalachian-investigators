import { getSinglePark } from "../parks/ParkDataManager.js"



export const asideCard = (park, eatery, attraction) => {
   const tripsPostEntryElement = document.querySelector(".aside")
   const asidePost = `
 <div>
      <h3>
            ${park.data[0].fullName}
      </h3>
 </div>
 <div>
      <h3>
            ${eatery.businessName}
      </h3>
 </div>
 <div>
      <h3>
         ${attraction.name}
      </h3>
 </div>  
     `
     tripsPostEntryElement.innerHTML += asidePost
}


