# Chapter 01 - Mongo DB Training


## Setup 

  * Download Windows or Mac MongoDB from the link - https://www.mongodb.org/downloads#production

  * The Mongo DB comes as a zip file, unzip it to a folder e.g "C:\mongodb-xxx.xxx" on windows or "/Application/mongodb-xxx.xxx".
  
  * Add the directory e.g "C:\mongodb-xxx.xxx\bin" or "/Application/mongodb-xxx.xxx/bin" to System PATH
  
  
## Run MongoDB

  * Open one terminal and start the server ```$>mongod```
  * Open another terminal and run the mongo console ```$>mongo```
  
## Document Based NoSQL
  
  A Document in Mongo DB work means JSON Document/Object. Following is an example of JSON Document. 
  
  ```
  {
     "firstName": "Rohit",
     "lastName":  "Ghatol",
     "address": {
       "city": "Sunnyvale",
       "state": "CA"
     },
     "phonenumbers":[
       {
          "type":"mobile",
          "number":"xxx-xxx-xxxx"
       },
       {
          "type":"home",
          "number":"xxx-xxx-xxxx"
       }
     ]
  }
  ```     
          
  Note that any thing in the world can be represented as an Object ```name:value``` or Array ```contacts:[ ... ]``` 
  or a combination of both. You can nest a Object in an Array or a Array in the Object to any level.
  
## Sample Data
  
  

