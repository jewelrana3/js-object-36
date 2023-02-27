// create a object literals
const payer = {};
payer.name = 'juyel';
payer.address = 'manik';
payer.bat = function(){
   console.log('with a new card')
}
console.log(payer);
payer.bat();

// class
class person{
    name = 'juyel';
    address ='bademaju';
    constructor(age){
        this.age = age;
    }
} 
const person1 = new person(33);
console.log(person1)