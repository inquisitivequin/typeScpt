var Moth;
(function (Moth) {
    var PI = 3.14;
    function calcCirc(dia) {
        return dia * PI;
    }
    Moth.calcCirc = calcCirc;
})(Moth || (Moth = {}));
var Moth;
(function (Moth) {
    function calcRect(width, length) {
        return width * length;
    }
    Moth.calcRect = calcRect;
})(Moth || (Moth = {}));
var PI = 43;
console.log(PI);
console.log(Moth.calcRect(10, 10));
console.log(Moth.calcCirc(23));
