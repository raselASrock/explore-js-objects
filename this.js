console.log('this added', this);
const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'aljebra', 'geometry', ],
    exam: function(){
        console.log(this)
        // console.log(this.name, 'is participating in an exam');
        return this.name + ' is participating in an exam'
    },
    examArrow: () =>{
        console.log(this);
    },
    examNested: () =>{
        const arrow = () =>{
            console.log(this);
        }
        arrow()
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

kodomAli.exam()


const badamAli = {
    name: 'kacha badam Ali',
    money: 8000,

}

badamAli.exam = kodomAli.exam;
badamAli.exam()

function clickHandler(){
    console.log('inside click handler', this);
}