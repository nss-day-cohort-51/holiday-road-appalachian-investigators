import { getParks } from "./parks/ParkDataManager.js";

import { states } from "./statestuff.js/state.js";
import { statelist } from "./statestuff.js/stateData.js";
import { getStates } from "./statestuff.js/statesDataManager.js";

const showStateDrpDwn = () => { 
    getStates().then(allStates =>{
        
        const entryElement = document.querySelector(".states_sec");
        entryElement.innerHTML = statelist(allStates);
    
    }) 

    

    
  }



  
    showStateDrpDwn();
    getParks();