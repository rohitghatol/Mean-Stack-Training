var hello = require('./hello');
var world = require('./world');
  
  
var helloWorld = hello.getValue() + " " + world.getValue();
  
console.log(helloWorld);
