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
var car = "audi";
console.log(car);
car = { brand: 'audi', year: 2001 };
console.log(car.year);
function returnMe() {
    return nom;
}
console.log(returnMe());
function muli(val2, val1) {
    return val2 * val1;
}
console.log(muli(12, 12));
var mo;
mo = returnMe;
console.log(mo(10, 10));
