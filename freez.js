const bottle = {title:'manush',color:'yellow',isClean:true, house:1};
const keys = Object.keys(bottle);
console.log(keys);
const values = Object.values(bottle);
// console.log(values)
const objectSide = Object.entries(bottle);
// console.log(objectSide)

// seal side is a property change hobe but delete hobe na
Object.seal(bottle);
// console.log(bottle)

// freez side a change hobe na but delete hobe na
Object.freeze(bottle);
// console.log(bottle)

bottle.price = 1000;

// delete side
delete bottle.isClean;
// console.log(bottle)
