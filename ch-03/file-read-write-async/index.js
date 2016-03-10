var fs = require('fs');


console.log('1');

var fileName = 'test.txt';

console.log('2');

fs.readFile(fileName, 'utf8', function (err, result) {

  console.log('3');

  if (err) {

    console.log('4');

    console.log('Unable to read file');
  }
  else {

    console.log('5');

    console.log('Read ' + result);

    var content = '!!'+result;

    fs.writeFile(fileName,content,'utf8',function(err,result){
      console.log('6');
      if(err){
        console.log('7');
        console.log('Unable to write to file');
      }
      else{
        console.log('8');
        console.log('Successfully Wrote to the File');

        fs.readFile(fileName,'utf8',function(err,result){
          console.log('9');
          if(err){
            console.log('10');
            console.log('Unable to read file');
          }
          else{
            console.log('11');
            console.log('Read ' + result);
          }
        })
        console.log('12')
      }
    })
    console.log('13');

  }
});

console.log('14');

