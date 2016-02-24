# Chapter 02 - Basic Node Training

Node needs two things to work
 * Node - The Runtime interpreter which reads javascript file and executes them. (No compilation is required)
 * NPM - The Node Package Manager. A Package is a software library with id,name and version. NPM stores all packages (open source) on a central repository on the cloud

## Setup 

 * Download and Install Node from this link - https://nodejs.org/en/download/
 * It will also install NPM
 
## Project Setup
 
 Step 1 - Create a Project directory
 
 ```
 $> mkdir helloworld
 ```
 
 Step 2 - Initialize NPM Project
 
 ```
 $> npm init
 name: (ch-02) helloworld
 version: (1.0.0) 
 description: Hello World Example in Node 
 entry point: (index.js) 
 test command: 
 git repository: 
 keywords: helloworld node
 author: Rohit Ghatol
 license: (ISC) Apache-License
 
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
 