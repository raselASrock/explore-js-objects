const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'aljebra', 'geometry', ],
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return this.name + 'is participating in an exam'
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDe: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
// student.exam();
const output = student.exam();
const output2 = student.improveExam('Algebra');
const remaining = student.treatDe(900, 100);
const dolaRemaining = student.treatDe(500,50)

console.log(output)
console.log(output2);
console.log(remaining);
console.log(dolaRemaining);
