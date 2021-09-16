import { getSingleAt } from "../attractions/AttractionDataManager.js";
import { getSingleEat } from "../eateries/EateryDataManager.js";
import { getSinglePark } from "../parks/ParkDataManager.js";
import { getTrips } from "./asideDatamanager.js";
import { asideCard } from "./asidePost.js";

export const tripList = (allTrips) => {
    const tripsPostEntryElement = document.querySelector(".aside")
    tripsPostEntryElement.innerHTML = ''
		
		for (const tripObject of allTrips) {
			getSinglePark(tripObject.park).then(parkResponse => {
                console.log(parkResponse)
               let park = parkResponse

                getSingleEat(tripObject.eatery).then(eatResponse =>{
                    let eat = eatResponse

                    getSingleAt(tripObject.attraction).then(atResponse => {
                        let at = atResponse
                        
                        asideCard(park, eat, at)
                        
                    })
                }
                )


            })			
		}
		
    }