
import * as ClickEvents from './js/Events/clicks.js'
import { updatePlants } from './js/Plants/updatePlants.js'
import * as Globals from './js/variables.js'



(function () {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {

        
        const gridSize = [8, 3];

        const gridDiv = document.getElementById("grid");

        for (let i = 0; i <= (gridSize[0]*gridSize[1]); i++) {
            const fragment = document.createElement("div");

            console.log(i);
            fragment.innerHTML = "";
            fragment.className = "square";
            gridDiv.appendChild(fragment);
        }
    }
    else setTimeout(arguments.callee, 100);
})();
