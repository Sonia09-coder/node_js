/*var prompt=require('prompt-sync')();
console.log("NodeJs me aapka welcome hai!")

var age=prompt("What's your age dear?");

if(age<18){
    console.log("You get a 20% discount")
}

else if(age>=18 && age<=65)
{
    console.log("Normal ticket prices")
}
else{
    console.log("You get a 30% senior discount")
}

var len=prompt("What's your length dear?");
var bre=prompt("What's your breadth dear?");
var area=len*bre;
console.log(area)


*/
//functions in js -- 4 ways
/*
function add(a,b)
{
    return a+b;
}
*/
/*
var add=function(a,b){
    return a+b;
}
*/
//var add=(a,b)=>{return a+b}
/*var add=(a,b)=> a+b;
var result=add(9,10);*/
//console.log(result)

(function(){
    console.log('hi,sonia there');
})();

var array=['sonia','bhush',123];
console.log(typeof array);

const product=[
    {
        names:"Ridhit",
    price:345,
    inStock:false
},
{
    names:"Harsh",
price:345,
inStock:true
},
{
    names:"Parteek",
price:899,
inStock:false
},

]

console.log(typeof product)