
import * as ClickEvents from './js/Events/clicks.js'
import { updatePlants } from './js/Plants/updatePlants.js'
import * as Globals from './js/variables.js'



(function () {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {

        
        const gridSize = [8, 3];

        const gridDiv = document.getElementById("grid");

        function openPopup(id, y, x) {
            
        }

        for (let i = 0; i <= gridSize[1]; i++) {

            for (let h = 0; h <= gridSize[0]; h++) {

                const fragment = document.createElement("div");
                fragment.setAttribute("data-id", i*h);
                fragment.setAttribute("data-row", i);
                fragment.setAttribute("data-pos", h);
                fragment.addEventListener("click",  function() {
                    openPopup(i*h, i, h);    
                })
                console.log(i);
                fragment.innerHTML = "";
                fragment.className = "square";
                gridDiv.appendChild(fragment);
            }
            
        }
    }
    else setTimeout(arguments.callee, 100);
})();
