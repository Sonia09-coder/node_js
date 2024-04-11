//Inter conversion of JSON to object in Node.js:

const jString='{"name":"sonia","age":20,"city":"mukerian"}';
const jObject=JSON.parse(jString);  //ye object me convert krdega json string ko
console.log(typeof jObject);

const objectJson={
    "name":"yamini",
    "age":22,
    "city":"hoshiarpur"
};
const stringJson=JSON.stringify(objectJson);  //ye string me convert kr deta hai object ko
console.log(typeof stringJson);
