module.exports = class SalesMan{
    constructor(name='Anonim', cash=0){
        this.name = name;
        this.cash = cash;
    }

    walk(){
        return `${this.name} is walking...`;
    }

    toString(){
        return `Salesman ${this.name} has $${this.cash}!`
    }
}
