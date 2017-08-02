var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
function ed(val) {
    return function (targ, propNom, desc) {
        desc.writable = val;
    };
}
function oved(val) {
    return function (targ, propNom) {
        var newDes = {
            writable: val
        };
        return newDes;
    };
}
var Proj = (function () {
    function Proj(name) {
        this.projNam = name;
    }
    Proj.prototype.calcBud = function () {
        console.log(202020);
    };
    __decorate([
        oved(false)
    ], Proj.prototype, "projNam", void 0);
    __decorate([
        ed(false)
    ], Proj.prototype, "calcBud", null);
    return Proj;
}());
var prj = new Proj('Poat');
prj.calcBud();
prj.calcBud = function () {
    console.log(2349234);
};
prj.calcBud();
console.log(prj);
function printInd(targ, meth, param) {
    console.log('Targ', targ);
    console.log('Meth', meth);
    console.log('Param', param);
}
var Puppy = (function () {
    function Puppy(name) {
        this.name;
    }
    Puppy.prototype.printPup = function (mode, printYall) {
        if (printYall) {
            console.log('Shea');
        }
        else {
            console.log('Dap');
        }
    };
    __decorate([
        __param(1, printInd)
    ], Puppy.prototype, "printPup", null);
    return Puppy;
}());
var pups = new Puppy();
pups.printPup("pota", true);
//# sourceMappingURL=scrpt.js.map