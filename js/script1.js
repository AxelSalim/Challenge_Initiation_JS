"use strict";

document.addEventListener("DOMContentLoaded", function () {
    
    let array = [], prenom, prenoms;

    while (true) {

        prenom = prompt('Entrez un prénom : ');

        if (prenom) {
            prenoms += prenom;
            array.push(prenom);
            alert(array);
        }
        else {
            break;
        }
    }

});
