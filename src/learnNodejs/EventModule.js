const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('module', (num1, num2)=>{
    console.log( num1 + num2);
});

eventEmitter.emit('module', 2,7);

class Person extends EventEmitter{
    constructor(name) {
        super()
    
        this._name = name;
    }
    
    get name(){
        return this._name
    }
}

let Diana = new Person('jeniffer');
Diana.on('name', ()=>{
    console.log('my name is ' + Diana.name)
})

Diana.emit('name')