const set = (obj, prop, val) => {
    const newJulia = {...obj };
    for (let argum in newJulia) {
        if (argum == prop) newJulia[argum] = val;
    }
    return (newJulia);
};


const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);



console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false


//------------------------------------------------------------------


// const setName = set2(/* ... */);
// const setSurName = set2(/* ... */);
// const setAge = set2(/* ... */);

// const julia2 = { name: "Julia", surname: "Álvarez", age: 19 };

// console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
// console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
// console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }