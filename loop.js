// const numbers = [33,21,34,56,78,43,5];
// for(const number of numbers){
//     console.log(number)
// }

// object no use for of 
const bottle = {title:'manush',color:'yellow',isClean:true, house:1};
const keys = Object.keys(bottle);
for(const key of keys){
    // console.log(key,bottle[key])
}
// for in use to objec
for(const key in bottle){
    const value = bottle[key]
    console.log(key,value)
}

// advanced
// const pair = Object.entries(bottle);
// console.log(pair);

for(const[key,value] of Object.entries(bottle)){

    console.log(key,value)
}