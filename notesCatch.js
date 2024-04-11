const notes=require('./notes.js')
var _=require('lodash');
console.log("NotesCatch is available here");

console.log("Age is: ",notes.age);

var result=notes.addNum(notes.age+10, 67); //

console.log("the sum of a and b is: ",result);

//lodash module in nodejs
var data=["person","person",1,1,2,1,2,7,9,"me"];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isString(true));