var Person = (function () {
    function Person(name, usrname) {
        if (usrname === void 0) { usrname = 'shea'; }
        this.usrname = usrname;
        this.name = name;
    }
    return Person;
}());
console.log(new Person('poat', 'jurd'));
//# sourceMappingURL=scrpt.js.map