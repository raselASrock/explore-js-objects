// 1. Create Object using object Literals
const player = {};
player.name = 'Small Nirob';
player.speciality = 'batsman';
player.bat = function(){
    // console.log('Swing your bat')
}
player.bat ()
// console.log(player);

const student = {
    name: 'Pandey',
    job: 'Khay Andey',
    ball: function(){
        console.log('Throw the ball')
    },
    salary: 10000,
}

// 2. Object Constructor
const person = new Object()
// console.log(person)

//  3. Object create method
// const item = Object.create(null);
const atel = Object.create(student)
// console.log(item);
// console.log(atel);
// console.log(atel.name);
// console.log(atel.job);

//  4. Class

class Person{
    name = 'abul';
    address = 'sodor-ghat'
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56)
console.log(person1);

// Function
function Car (model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car('325k756po', '$32560000')

console.log(tesla);

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name";
 console.log(getGirlFriend());
