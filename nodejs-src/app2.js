/** created class EventEmitter */
const EventEmitter = require('events');
/** create New Instance of class: object*/
const eventEmitter = new EventEmitter();
/** attach listener-tutorial */

eventEmitter.on('tutorial', (n1, n2)=>{
  console.log(n1 + n2)
})
/** pass arguments to the eventEmitter */

eventEmitter.emit('tutorial', 1, 4)
/** need to emit the event tutorial */
/** tutorial event occurs using emit method */


/** Class
-> Object
-> listener, parameters
-> invoke emit method for event with parameter values
-> Display event occurrence  */

/** need to send parameter values
to invoke method if parameters in listener */

class Person extends EventEmitter{
  constructor(name){
    super();
    this._name = name;
  }
  get name(){
    return this._name;
  }
}
/** defined a person class that returns name of the object */
/** super allows to use this property within class */

let pedro = new Person('Pedro');
/** Pedro is an instance of both
Person and EventEmitter */

pedro.on('name', ()=>{
  console.log('My name is' + ' ' + pedro.name);
})

pedro.emit('name');
