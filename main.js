
import * as ClickEvents from './js/Events/clicks.js'
import { updatePlants } from './js/Plants/updatePlants.js'
import * as Globals from './js/variables.js'



(function () {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {

        
        const gridSize = [6, 3];

        const gridDiv = document.getElementById("grid");

        let watering = false;

        const burronArroser = document.getElementById("arroser");
        burronArroser.addEventListener("click", function() {
            watering = true;
            const tSquares = document.querySelectorAll(".square");
            tSquares.forEach(tSquare => {
                
                tSquare.style.cursor = "url('public/assets/images/watering.webp'), auto";
                console.log(tSquare.style.cursor);
            });
        })
        function openPopup(id, y, x) {

        }
        function plantFlower(id, flower) {
            const tSquare = document.getElementById(id);
            console.log(tSquare);
            tSquare.style.backgroundImage = `url("public/assets/images/flower-${flower}-1.webp")`;
            tSquare.style.backgroundPosition = "left center";
            tSquare.style.backgroundSize = "34px";
            tSquare.style.backgroundRepeat = "no-repeat";

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
                    if (watering) {
                        watering = false;
                        const tSquares = document.querySelectorAll(".square");
                        tSquares.forEach(tSquare => {
                            tSquare.style.cursor =  "pointer";
                        });
                        fragment.style.backgroundImage = `url("public/assets/images/flower-1-3.webp")`;
                        console.log(url("public/assets/images/flower-${flower}-3.webp"));
                    } else {
                        plantFlower(((i-1)*gridSize[0])+h, Math.floor(Math.random()*3)+1); 
                    }
                    
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
