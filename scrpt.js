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
//# sourceMappingURL=scrpt.js.map