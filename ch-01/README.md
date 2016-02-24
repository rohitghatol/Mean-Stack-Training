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
  
Let's look at the following Data
  
```
  {
     "id": 2341,
     "isbn": "xxxxxx",
     "name": "Seven Habits of Highly Effective People",
     "author":???
     "libraryCard":???
  }
```
     
```
  {
     "id": 123933,
     "firstName": " Stephen",
     "lastName": "Covey",
     "books": ???
  }
```
     
```
  {
     "id":449232,
     "book": ????,     
     "available": false,
     "issuedTo":???,
     "history":???
  }
```       

We have a Library System in which we have to put in data related to 

 * Book
 * Author
 * Library Issue Card for that Book (This contains when we issued the book to whom)
 
Some considerations we have to make are
 * A Book can be written by single Author
 * An Author can write multiple Books
 * There is only one Library Issue Card per book.
  
  
## Mongo Usage
 
### Show all databases
 
 ```
 mongo> show dbs
 ```
 
### Create a New Database named test
 
 ```
 mongo> use test
 ```

### See All Collections 

 Collection is equivalent of table in mongodb, but doesn't support joins, transactions, foreign keys etc
 
 ```
 mongo> show collections
 ```
 
### Insert a New Author
 
 ```
 mongo> db.authors.insert({"firstName":"Steven","lastName":"Covey"})
 ```
 
### View the Author Collection
 
 ```
 mongo> db.authors.find().pretty();
 ```

### Insert a Another Author
 
 ```
 mongo> db.authors.insert({"firstName":"Steven","lastName":"Smith"})
 mongo> db.authors.insert({"firstName":"Mark","lastName":"Stew"})
 ```

### Filter Authors by first Name 
 
 ```
 mongo> db.authors.find({"firstName":"Steven"}).pretty();
 ```

### Insert a Book
 
 ``` 
 mongo> db.books.insert({"isbn":"1234","name":"Seven Habits", "author":{"$ref":"authors","$id":ObjectId("56ccf2998339eb0b8fb7f65f")}, "card":{"available":true,"history":[]}});
 ```
 
### View the Book Collection
 

 ```
 mongo> db.books.find().pretty();
 ```
 