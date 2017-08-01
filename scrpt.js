function exho(data) {
    return data;
}
console.log(exho('potato').length);
console.log(exho('poat'));
console.log(exho({ name: string = "shea" }));
function bexo(dat) {
    return dat;
}
console.log(bexo('potato').length);
console.log(bexo(231));
console.log(bexo({ name: "shea" }));
var turs = [1.234, 345.34, 53425.4323];
function printAl(arg) {
    arg.forEach(function (el) { return console.log(el); });
}
printAl(['pota', 'poat', 'poatot']);
var exo = bexo;
console.log(exo('frato'));
var SimMat = (function () {
    function SimMat() {
    }
    SimMat.prototype.calc = function () {
        return +this.baseVal * +this.multVal;
    };
    return SimMat;
}());
var simM = new SimMat();
simM.baseVal = 23;
simM.multVal = 32923;
console.log(simM.calc());
//# sourceMappingURL=scrpt.js.map