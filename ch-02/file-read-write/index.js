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
  
