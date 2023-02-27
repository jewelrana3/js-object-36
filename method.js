const student = {
    name : 'juyel',
    money : 2200,
    color : 'white',
    address : 'alomdanga',
    sunject : ['bangla','english','math'],
    exam:function(){
        console.log(this.name + 'my side math')
    },
    improve:function(subject){
        this.exam();
        return `${this.name} preparting man side to fixed${subject}`
    },
    treatBer:function(amount,trips){
        this.money = this.money - amount - trips;
        return this.money;
    }
    
}
const examSide = student.exam();
// console.log(examSide)
const subject = student.improve('manegment');
// console.log(subject)
const remaing = student.treatBer(1200,220);
console.log(remaing)