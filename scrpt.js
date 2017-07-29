var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, usrname) {
        if (usrname === void 0) { usrname = 'shea'; }
        this.usrname = usrname;
        this.color = 'brown';
        this.name = name;
    }
    Person.prototype.getColor = function () {
        console.log(this.color);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var poat = new Person('Shea', 'Poat');
console.log(poat.name, poat.usrname);
poat.getColor();
poat.setType('Puppy');
var Puppy = (function (_super) {
    __extends(Puppy, _super);
    function Puppy(usrName) {
        return _super.call(this, 'Lry', usrName) || this;
    }
    Puppy.prototype.setColor = function (color) {
        this.color = color;
        console.log(this.color);
    };
    return Puppy;
}(Person));
var pup = new Puppy('Jerd');
console.log(pup);
pup.setColor('blue');
console.log(pup);
var Plant = (function () {
    function Plant() {
        this._species = 'plant';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (val) {
            if (val.length > 3) {
                this._species = val;
            }
            else {
                this._species = "potato";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plt = new Plant();
console.log(plt.species);
plt.species = 'qw';
console.log(plt.species);
plt.species = 'shrub';
console.log(plt.species);
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCrcnf = function (dia) {
        return this.PI * dia;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCrcnf(12));
var Proj = (function () {
    function Proj() {
        this.projName = "Project 1";
    }
    Proj.prototype.calcBudg = function () {
        return this.budget * 2;
    };
    return Proj;
}());
var ITProj = (function (_super) {
    __extends(ITProj, _super);
    function ITProj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProj.prototype.changeName = function (name) {
        this.projName = name;
    };
    return ITProj;
}(Proj));
var prj1 = new ITProj();
console.log(prj1);
prj1.changeName('Super Project');
console.log(prj1);
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Toooooooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration =
            this.acceleration + speed;
    };
    return Car;
}());
var car = new Car('Audi');
car.honk();
console.log(car.acceleration);
car.accelerate(320);
console.log(car.acceleration);
var baseObject = (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    baseObject.prototype.setWidth = function (num) {
        this.width = num;
    };
    baseObject.prototype.setLength = function (num) {
        this.length = num;
    };
    return baseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(baseObject));
var rect = new Rectangle;
rect.setWidth(5);
rect.setLength(2);
console.log(rect.calcSize());
var Pers = (function (_super) {
    __extends(Pers, _super);
    function Pers() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._firstName = "";
        return _this;
    }
    Object.defineProperty(Pers.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Pers;
}(Person));
var poj = new Pers('ryan', 'dwon');
console.log(poj.firstName);
poj.firstName = "te";
console.log(poj.firstName);
poj.firstName = 'RyanDwon';
console.log(poj.firstName);
console.log(poj.usrname);
//# sourceMappingURL=scrpt.js.map