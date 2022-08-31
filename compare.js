const first = {a : 2, b : 3, d: 5}
const second = {a : 2, c: 5, b : 3}
const third = second
// if(first == second){
//     console.log('they are same')
// }
// else{
//     console.log('different');
// }

/* donot use this method to compare object or arrey */

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);

if(firstString === secondString){
    console.log('We are same Bro')
}
else{
    console.log('We are not Same Bro');
}

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for( const key of firstKeys ){
            if(first[key] !== second[key])
            return false;
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);