"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var set = function (obj, prop, val) {
    var newJulia = __assign({}, obj);
    for (var argum in newJulia) {
        if (argum == prop)
            newJulia[argum] = val;
    }
    return (newJulia);
};
var julia = { name: "Julia", surname: "Álvarez", age: 19 };
var updatedJulia = set(julia, "age", 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false
//------------------------------------------------------------------
var setName = set2( /* ... */);
var setSurName = set2( /* ... */);
var setAge = set2( /* ... */);
var julia2 = { name: "Julia", surname: "Álvarez", age: 19 };
console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
