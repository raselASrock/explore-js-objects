const numbers = [12,15,45,25,75,49,62]
for(const number of numbers){
    // console.log(number)
}

// for of can not be with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// for(const key of bottle){
//     console.log(key)
// }


// First option to loop throw an object
const keys = Object.keys(bottle)
// console.log(keys);
for(const key of keys){
    // console.log(key)
    // console.log(key, bottle[key])
}
/* 
3 ways to to read object properties
1. bottle.color
2. bottle['color']
3. bottle[key]
*/

/* 
for in loop
*/

for(const key in bottle){
    console.log(key)
    console.log(key, bottle[key])
}

// Advanced

const pair = Object.entries(bottle)
console.log(pair);
for( const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}