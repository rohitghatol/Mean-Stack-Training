# Chapter 02 - Basic Node Training

Node needs two things to work
 * Node - The Runtime interpreter which reads javascript file and executes them. (No compilation is required)
 * NPM - The Node Package Manager. A Package is a software library with id,name and version. NPM stores all packages (open source) on a central repository on the cloud

## Setup 

 * Download and Install Node from this link - https://nodejs.org/en/download/
 * It will also install NPM
 
## Hello World Project
 
 Step 1 - Create a Project directory
 
 ```
 $> mkdir helloworld
 ```
 
 Step 2 - Initialize NPM Project
 
 ```
 $> cd helloworld
 $> npm init
 name: (ch-02) helloworld
 version: (1.0.0) 
 description: Hello World Example in Node 
 entry point: (index.js) 
 test command: 
 git repository: 
 keywords: helloworld node
 author: Rohit Ghatol
 license: (ISC) Apache-2.0
 
 ```
 
 Step 3 - Create index.js
 
 ```
 var hello = "Hello";
 var world = "World";
 
 var helloWorld = hello + " " + world;
 
 console.log(helloWorld);
 
 ```
 
 Step 4 - Run the Program
 
 ```
 $> node index
 ```
 
## Node Modules Project
 
 Step 1 - Create a Project directory
 
 ```
 $> mkdir module-test
 ```
 
 Step 2 - Initialize NPM Project
 
 ```
 $> cd module-test
 $> npm init
 name: (ch-02) module-test
 version: (1.0.0) 
 description: Using Modules for HelloWorld 
 entry point: (index.js) 
 test command: 
 git repository: 
 keywords: helloworld modules node
 author: Rohit Ghatol
 license: (ISC) Apache-2.0
 
 ```
 
 Step 3 - Create hello.js
 
 ```
 module.exports = {
    getValue: function(){
      return "Hello";
    }  
 }

 
 ```

  Step 4 - Create world.js
  
  ```
  module.exports = {
     getValue: function(){
       return "World";
     }  
  }
 
  
  ```

 Step 4 - Import the Modules in index.js
 
 
  
  ```
  var hello = require('./hello');
  var world = require('./world');
  
  
  var helloWorld = hello.getValue() + " " + world.getValue();
  
  console.log(helloWorld);
  
  ```
 
  Step 5 - Run the Program
   
   ```
   $> node index
   ``` 
   
## Read and Write to a File  

Step 1 - Create a Project directory
 
 ```
 $> mkdir file-read-write
 ```
 
 Step 2 - Initialize NPM Project
 
 ```
 $> cd module-test
 $> npm init
 name: (ch-02) file-read-write
 version: (1.0.0) 
 description: File Read and Write 
 entry point: (index.js) 
 test command: 
 git repository: 
 keywords: file read write node
 author: Rohit Ghatol
 license: (ISC) Apache-2.0
 
 ```
 
 Step 3 - Create Test Data
 
   ``` 
   $> echo "Hello World" > test.txt
   ```
 
 Step 4 - Create index.js
  
  ```
  var fs = require('fs');
  
  
  var read = function(fileName){
    return fs.readFileSync(fileName, 'utf8');
    
  }
  
  var write = function(fileName,content){
    fs.writeFile(fileName,content, 'utf8');
  }
  
  
  var contents = read('test.txt');  
  console.log('Read '+contents);
  
  contents = contents + "!!";
  
  write('test.txt',contents);
  console.log('Wrote '+contents);
  
  contents = read('test.txt');
  console.log('Read '+contents);
  
  
  ```
 
  Step 5 - Run the Program
   
   ```
   $> node index
   ``` 