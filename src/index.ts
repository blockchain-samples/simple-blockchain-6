const name = "kimi",
    age = 29,
    gender = "woman";

const sayHi = (name:string, age:number, gender:string):string => {
    return `Hi ${name}, ${age}, ${gender}`;
};

console.log(sayHi(name, age, gender)+'!!');

export {};