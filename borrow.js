const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'aljebra', 'geometry', ],
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return this.name + ' is participating in an exam'
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

const result = kodomAli.exam();
const badamAli = {
    name: 'kacha badam',
    money: 8000,

}

const result2 = kodomAli.exam.call(badamAli)
console.log(result2);

const badamMoney = kodomAli.treatDe.call(badamAli, 400, 50)
console.log(badamMoney);

const badamMoney2 = kodomAli.treatDe.apply(badamAli, [1000, 100])
console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDe.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);