
import * as ClickEvents from './js/Events/clicks.js'
import { updatePlants } from './js/Plants/updatePlants.js'
import * as Globals from './js/variables.js'



(function () {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {

        
        const gridSize = [6, 3];

        const gridDiv = document.getElementById("grid");

        function openPopup(id, y, x) {

        }
        function plantFlower(id, flower) {
            const tSquare = document.getElementById(id);
            console.log(tSquare);
            tSquare.style.backgroundImage = `url("public/assets/images/fleur${flower}.webp")`;
            tSquare.style.backgroundPosition = "0px 80px";
            tSquare.style.backgroundSize = "300px";
        }

        for (let i = 1; i <= gridSize[1]; i++) {

            for (let h = 1; h <= gridSize[0]; h++) {

                const fragment = document.createElement("div");
                fragment.id = ((i-1)*gridSize[0])+h;
                fragment.setAttribute("data-row", i);
                fragment.setAttribute("data-pos", h);
                fragment.addEventListener("click",  function() {
                    openPopup(((i-1)*gridSize[0])+h, i, h);
                    console.log(((i-1)*gridSize[0])+h);
                    plantFlower(((i-1)*gridSize[0])+h, Math.floor(Math.random()*5)+1); 
                })
                console.log(((i-1)*gridSize[0]));
                fragment.innerHTML = "";
                fragment.className = "square";
                gridDiv.appendChild(fragment);
            }
        }


        plantFlower(1, "1");
    }
    else setTimeout(arguments.callee, 100);
})();
