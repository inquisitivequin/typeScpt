var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function word(cons) {
    console.log(cons);
}
var Pers = (function () {
    function Pers() {
        console.log('Hola');
    }
    Pers = __decorate([
        word
    ], Pers);
    return Pers;
}());
function printo(cons) {
    cons.prototype.print = function () {
        console.log(this);
    };
}
var Veg = (function () {
    function Veg() {
        this.name = "Ferny";
    }
    Veg = __decorate([
        printo
    ], Veg);
    return Veg;
}());
var vegr = new Veg();
vegr.print();
//# sourceMappingURL=scrpt.js.map