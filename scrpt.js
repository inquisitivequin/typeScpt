"use strict";
var nom = 'Poat';
var age = 32;
var hobs = ['food', 'moreFood'];
var Veg;
(function (Veg) {
    Veg[Veg["tomato"] = 0] = "tomato";
    Veg[Veg["onion"] = 1] = "onion";
    Veg[Veg["potato"] = 2] = "potato";
})(Veg || (Veg = {}));
var myVeg = Veg.onion;
console.log(myVeg);
