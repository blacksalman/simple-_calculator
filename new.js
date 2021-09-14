// console.log('salman');

// function biodata(){
//     let myFirstName = 'salman';
//     console.log(myFirstName);

//     if(true){
//         let myLastName = 'khan';
//         console.log('inner ' + myFirstName);
//         console.log('outer ' + myLastName);

//     }
//     console.log('innerOuter ' + myFirstName);
// }
// biodata();

// var myFriend = ['salman','khan','this']
// for(i = 0; i < myFriend.length; i++){
//     console.log(myFriend[i]);
// }

// var myFriend = ['salman','khan','this']
// for(let elements of myFriend){
//     console.log(elements);
// }

// var myFriend = ['salman','khan','this']

// myFriend.forEach(function(element,index,array){    // |
//     console.log(element + " : " + index);          // | // forEach loop break statement are not allowed :
// });                                                 //| // this argument are not allowed in fat arrow function :



// var myFriend = ['salman','khan','this']
// for(let elements in myFriend){
//     console.log(elements);
// }

// const array1 = [1,30,4,21,99];
// console.log(array1.sort());

// const animals = ['cow','goat','sheep'];
// animals.push('chicken');
// console.log(animals);

// const animals = ['cow','goat','sheep'];
// const count = animals.push('chicken');
// console.log(animals);
// console.log(count);

// const animals = ['cow','goat','sheep'];
// const count = animals.unshift('chicken');
// console.log(animals);                           ||/// Unshift method :- Unshift method are add the starting of the array :
// console.log(count);

// const animals = ['cow','goat','sheep','chicken'];
// const count = animals.pop();
// console.log(animals);                           ||/// Pop method :- Pop method remove the last element of the array :

// const animals = ['cow','goat','sheep','chicken'];
// const count = animals.shift();
// console.log(animals);                           ||/// Shift method :- Shift method remove the first element of the array :    
 
///  *********************************** CHALLENGE TIME ********************************************************////

//sol:-1
// const months = ['Jan','march','April','June','July'];

// const newMonth = months.splice(5,0,'Dec');
//                  //OR//
// const newMonth = months.splice(months.length,0,'Dec')               
// console.log(months);

//sol:-2

// console.log(newMonth);

//sol:-3

// const months = ['Jan','march','April','June','July'];   
                                                                      //||// Updating data march to March and July to july :
// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){                                                ||// In array index doesn't found data they return the -1 :
//     const updateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
// }
// else{
//     console.log('no data found');
// }


//sol:-4

// const months = ['Jan','march','April','June','July'];   
//                                                                       //||// Updating data march to March and July to july :
// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1);
//     console.log(months);
//     console.log(updateMonth);
// }
// else{
//     console.log('no data found');
// }

// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((curElm) =>{
//     return Math.sqrt(curElm)
// })
// console.log(arrSqr)


// let arr = [2,3,4,6,8];

// let arr2 = arr.map((curElm) => curElm * 2).filter((curElm) => curElm > 10).reduce((accumulator,curElem) => {
//     return accumulator += curElem;
//  });
// console.log(arr2)


// let arr = [3,4,5];

// let sum = arr.reduce((accumulator,curElem,index,arr) => {
//     return accumulator += curElem;

// })
// console.log(sum);

// ***************************** STRINGS *****************************************///////

// let myName = 'salman khan';

// let myChannelName = 'khan';

// //let ytName = new String('Black_bear');      ||// strting() constructor method :
// let ytName = 'Black';
// console.log(myName);
// console.log(ytName);


// finding a string into a string

// let myLine = 'Hello sir I am salman';
// console.log(myLine.indexOf('sir'));            ||// indexOf method are case sensitive :


//    Extracting string :
//    1- Slice(start , end) 
//    2- Substring(start , end)                                   //||// Slice method(start, end) :
//     3- Substr()                                            //||// Substring method(start , end) are silimar to slice method 
                                                                  //    but Substring are not allowed to negative index value : 

//***************************************  Replace method() *****************************   

// let myLine = `My name is salman khan`;

// let res = myLine.replace('salman','Salman');
// console.log(res);


//************************************** Extracting string character ***********************//

// let str = 'salman khan';
// console.log(str.charAt(2));

//*************************************** To uppercase and To lowercase ********************//

// let str = 'SALMAN KHAN';
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// In adding two string there also a new Method concat in place of (+) ://////////////////////////////
// Trim Method to remove the whitespace of both side : /////////////////////////////////
// Split Method split the Array : /////////////////////////////

// var txt = "a,b,c,d,e";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));

//************************ Date and Time *****************///

// let currentDate = new Date(2021);                          1-method
// console.log(currentDate);                                  2-method      
// console.log(new Date());                                   3-method
// console.log(new Date().toLocaleString());                  4-method
// console.log(new Date().toString());                        5-method
// console.log(Date.now());                                   6-method

// Milisecond form in 1 january ,1970 :


//********************************* Date Method ***********************///

// **  Getter Method :

// const curDate = new Date();
// console.log(curDate.toLocaleString());           //11/9/2021, 10:15:41 am
// console.log(curDate.getFullYear());             // 2021
// console.log(curDate.getMonth());                // 8
// console.log(curDate.getDate());                 // 11
// console.log(curDate.getDay());                  // 6

// ** Setter Method :

// const curDate = new Date();
// console.log(curDate.setFullYear(2021));           //1631336181507
// let setMonth = curDate.setMonth(9);               //1631336181507
// console.log(setMonth);                  
// console.log(curDate.setDate(5))                   //1631336181507
// console.log(curDate.toLocaleString());            //5/10/2021, 10:26:21 am

// ** All the output of setter method are same all are in miliseconds

//*************************** Time Method **************///

// const curTime = new Date();
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// The trunc() method returns the integer part of a number :

// If the argument is  positive number, Math.trunc() is wquivalent to Math.floor(), to
//otherwise Math.trunc() is equivalent to Math.ceil() :
//[ console.log(Math.floor(4.5))
  //console.log(Math.ceil(-4.5)) ];


//************************************ Query Selector *********************///

// queryselector change the first matching element : 
//And querySelectorAll to change the all element:

//In class we using dot(.) And for id we using hashtag(#) :


//********************************* Events *****************///

//************************** Object ****************///

// function call inside a object is called method :


//*************************** Destructuring ********************///

//********* Array destructuring **********///

// const bioData = ['salman', 'khan', 20];
// let [myFName,myLName,myAge] = bioData;
// console.log(myAge);

//************ Object destructuring **********///

// const bioData = {
//   myFName : 'salman',
//   myLName : 'khan',
//   myAge : 20
// }

// // let age = bioData.age;

// let {myFName,myLName,myAge }= bioData;
// console.log(myAge);

//********************** object properties ***********///

// dealing with square bracket they treat as dynamic properties :
 
//*********************** Spread Operator *************///

// const colors = ['red','green','blue','white','pink'];

// const myColors = ['red','green','blue','white','pink','yellow','black'];

// const myFavColors = [...colors,'yellow','black']
// //Spread can identity by 3dots(...) :
// console.log(myFavColors);



//******************* ES7 Features ************///
 
// 1- array include

// const colors = ['red','green','blue','white','pink'];
// const isPresent = colors.includes('pink');
// console.log(isPresent);

// 2- power operator(**) 
// console.log(2**3);


//********************** ES8 Features ************///

// 1- String padding()
// 2- object.values()
// 3- object.entries()

// const person = { name:'fred', age:20};

// //console.log( Object.values(person));
// console.log( Object.entries(person));


//*********************** ES9 Features ***************///

// flat() method 

//*********************** ES2020 Features **************///

// #1- BIGINT

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log(9007199254740991n + 12n);

// const newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof(newNum));







/////****************************************** Advanced JavaScript ******************************///

//EVENT PROPOGATION 

// Top to bottom this is known as capeturing phase 
// And bottom to top known as bubbling phase :

// Event BUBBLING :-
                    // with Event bubbling , the event is first captured  and handled by the innermost,
                    //  element and then propagated to outer Elements. (bottom to top)

// EVENT CAPTURING :-
                    // with Event capturing, the evetn is first captured by the outermost element and propagated to the inner elements.
                    // Capturing is also called "trickling", which helps remember the propagation order. (top to bottom)                    


// In event propagation by default system was in event bubbling phase
// if we use false ,false then it is event bubbling
// And we use true , true then it is event capturing :

// Create a simple calculator

const add = (a,b) => {
  return a+b;
}
const subs = (a,b) =>{
  return Math.abs(a-b);
}
const mul = (a,b) => {
  return a*b;
}
const calculator = (num1, num2, operator) =>{
  return operator(num1, num2);

}

console.log(calculator(5,2,add));
