/* Variable declaration
let and const keywords 
Prefer not to use var because of issue in block scope and functional scope  */
 
                                               /* DATA TYPES */

 // number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => uniquex

//typeof --> used for getting type of variable

//let name = 'Ramesh'
//console.log(typeof(name))

                                           /* TYPE CONVERSION */

//let name = "Ram"
//let num = Number(name)--> converting string to num

// === -->  This operator will check the data type equality also
                                 
                                        /* String */

let schoolName = new String("Vivekanand public school")
//console.log(schoolName[0]);
//console.log(schoolName.length);
//console.log(schoolName.charAt(5));
//console.log(schoolName.indexOf('a'));
//console.log(schoolName.substring(0,8));
//let newArr=(schoolName.slice(5,24))
//console.log(newArr);
//console.log(schoolName.trim());
//console.log(schoolName.replace('Vivek','dayan'));
//console.log(schoolName.includes('nand'));
//console.log(schoolName.split('p'));


                               /* Maths */
let balance = new Number(1000000.77687)
//console.log(balance);
//console.log(balance.toString().length)
//console.log(balance.toFixed(1));
//console.log(balance.toPrecision(6));
//console.log(balance.toLocaleString('en-IN'));

//console.log(Math);
//console.log(Math.abs(-8));
//console.log(Math.round(8.2));
//console.log(Math.floor(8.9));
//console.log(Math.ceil(8.1));
//console.log(Math.max(4,3,6,8));
//console.log(Math.min(4,3,6,8));
//console.log(Math.random());
//console.log(Math.random()*10);

const min = 10
const max = 20

//console.log(Math.floor(Math.random() * (max - min + 1)) + min)



                                                            /* Dates */
 let dateNow = new Date()
// console.log(dateNow);  
//console.log(dateNow.toString());      
//console.log(dateNow.toDateString());    
//console.log(dateNow.toLocaleString())     
  //console.log(typeof(dateNow));
  
  // let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now();
//console.log(timeStamp)

//console.log(myCreatedDate.getTime());
//console.log(Math.floor(timeStamp/1000));

//console.log(dateNow.getMonth())
//console.log(dateNow.getDay());

console.log(dateNow.toLocaleString('default',{
    weekday:'long'
}))