
import * as ClickEvents from './js/Events/clicks.js'
import addPlant from './js/Plants/addPlant.js'
import updatePlants from './js/Plants/updatePlants.js'
import * as Globals from './js/variables.js'


(function () {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {

        //Le code va ici, aprés l'initiation du DOM


    }
    else setTimeout(arguments.callee, 100);
})();
