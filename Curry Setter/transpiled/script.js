"use strict";
var julia = { name: "Julia", surname: "Álvarez", age: 19 };
var updatedJulia = set(julia, "age", 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false
