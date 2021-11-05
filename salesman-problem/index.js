const Sailor = require('./SalesMan')

const man = new Sailor('Andrii', 10000);
const man2 = new Sailor();
//console.log(man,'\n', man2);
console.log(man.walk());
//man2.walk();

console.log(man.toString());
