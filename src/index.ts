class Human {
    public name:string;
    private age:number;
    public gender:string;

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getAge = () => {
        return this.age;
    }
}


const person = new Human("kimi", 29, "woman");

const sayHi = (person:Human):string => {
    return `${person.name}, ${person.getAge()}, ${person.gender}`;
};

console.log(sayHi(person)+'!!');

export {};