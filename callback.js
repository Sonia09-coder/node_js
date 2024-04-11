//yeh thoda bada version
/*
function callback()
{
    console.log("Bhai apna kaam krke idhr bhi dekh leo");
}

const add= function(a,b,callback)
{
    var result=a+b;
    console.log("Result is :", result);
    callback();
}

add(4,5,callback);

*/

//yeh thoda chota 
const add= function(a,b,callback)
{
    var result=a+b;
    console.log("Result is :", result);
    callback();
}

add(67,8,function()
{
    console.log("bhai callback");
});