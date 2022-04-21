/**
 * 1. Write a One liner JavaScript function to create an array of objects from an array of strings in the format:
 */
 const input = ['Dirk', 'Plato', 'Gwen'];
 const output = [
   {
     index: 0,
     name: 'Dirk',
   },
   {
     index: 1,
     name: 'Plato',
   },
   {
     index: 2,
     name: 'Gwen',
   },
 ];

 console.log(input.map((elem,ind) => {
    return {index: ind, name: elem}
}))

console.log("--------------------------------")

 /**
  * 2. Write a one liner function to calculate the total amount donated to a charity by all donors.
  * The data is presented in an array of objects:
  */
 const donorsInfo = [
   {
     name: 'Donor1',
     amount: 500,
   },
   {
     name: 'Donor2',
     amount: 500,
   },
   {
     name: 'Donor3',
     amount: 500,
   },
 ];
 
 const sum = donorsInfo.reduce(
   (previousValue, currentValue) =>{ 
     currentValue.amount = previousValue.amount + currentValue.amount
     return currentValue
    }
 ).amount;
 console.log(sum)
 console.log("--------------------------------")

 /**
  * 3. Write a one liner Function in JS to get all the keys of an object in an array in lowercase.
  */
 const object = {
   firstName: 'val',
   lastName: 'val',
 };
 const outputLowerCase = ['firstname', 'lastname'];

 let keys = Object.keys(object).map((element) => {
    return element.toLowerCase()
 })
 console.log(keys)
 console.log("--------------------------------")

 
 /**
  * 4. Write a JS Function to get the first and last index of the nth largest element in an array that satisfies a condition.
  * EG:
  * In an array of donors as below:
  */
 const donorsInfo2 = [
   {
     name: 'Donor1',
     amount: 1500,
   },
   {
     name: 'Donor1',
     amount: 2500,
   },
   {
     name: 'Donor1',
     amount: 5500,
   },
   {
    name: 'Donor1',
    amount: 6000,
  },
 ];
 /**
  * Consider only the donors who have donated more than 5000 and find the first index of the nth largest donor.
  */

 let largest = (n) => {
   return (donorsInfo2.filter(element => 
    element.amount > 5000
   )).sort((a,b) => a.amount - b.amount)[n-1]
 }

 console.log(largest(1))
 console.log("Index",donorsInfo2.indexOf(largest(1)))
 console.log("--------------------------------")

 
 /**
  * 5. Write a JavaScript function to find the largest level of nesting for arrays.
  * Assume that we do not have circular references.
  */
 const myNestedArray = [[[1, 2, 3]], 4, 5, 6, [[[[[7, 8, [9, [10]]]]]]]];

 let prevArr = []
 let i = 1
 while(JSON.stringify(prevArr) !== JSON.stringify(myNestedArray.flat(i)))
 {
    prevArr = myNestedArray.flat(i)
    i += 1
 }
 console.log(i)
 console.log("--------------------------------")

 // Answer: 8
 
 /**
  * 6. Write a JavaScript program to get the index of the function in an array of functions
  * which executed the fastest.
  * You cannot run a function more than once.
  */

  let first_function = async () => { await sleep(300);}
  let second_function = async () => { await sleep(200);}
  let third_function = async () => { await sleep(400);}
  let forth_function = async () => {await sleep(100);}

  var array_of_functions = [
    first_function,
    second_function,
    third_function,
    forth_function
]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  let fastest = 10000
  let index = 0
  async function fast (){
    await sleep(2000)
    for (func of array_of_functions) {
      let start = new Date().getTime();
      await func()
      let end = new Date().getTime();
      let time = end - start;
      console.log(time)
      if(time < fastest){
      fastest = time
      index = array_of_functions.indexOf(func)
      }
    }
    console.log('Fastest function: ' + index);
  }
  
  // fast()
  // console.log("--------------------------------")

 
 /**
  * 7. Write a JS Function (2 liner??) to get the the nth largest element
  * in an array of objects based on a sort function. This index must be only among those
  * elements that satisfy a condition as provided by a callbackFn
  * Where the sortfunction, the `n` and the condition are params.
  * eg:
  */

 const donorsInfo3 = [
  {
    name: "Donor1",
    amount: 1500,
  },
  {
    name: "Donor1",
    amount: 2500,
  },
  {
    name: "Donor1",
    amount: 5500,
  },
];
sortFunction = function (a, b) {
  return b.amount - a.amount;
};
conditionCallBack = function (a) {
  return a.amount > 2000;
};
const getNthIndex = (n, sortFunction, conditionCallBack) => {
  const arr = donorsInfo3
    .filter((x) => conditionCallBack(x))
    .sort(sortFunction);
  return arr[n - 1];
};

console.log(getNthIndex(1, sortFunction, conditionCallBack));
console.log("--------------------------------")


const p1 = result => new Promise((resolve,reject) => {resolve(1),reject(0)})
const p2 = result => new Promise((resolve,reject) => {resolve(1),reject(0)})
const p3 = result => new Promise((resolve,reject) => {resolve(1),reject(0)})
const p4 = result => new Promise((resolve,reject) => {resolve(1),reject(0)})

const ayn = async () => {
  p1(1).then(res => p2(res).then().catch()).catch(res => p3(res).then().catch()).finally(res => p4(res).then().catch())
}

ayn()

 