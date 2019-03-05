interface Human {
    name:string;
    age:number;
    gender:string;
}

const person = {
    name: "kimi",
    age: 29,
    gender: "woman"
};

const sayHi = (person:Human):string => {
    return `${person.name}, ${person.age}, ${person.gender}`;
};

console.log(sayHi(person)+'!!');

export {};