//Anonymous function
let show = function(){
    console.log('Hello World')
}
show();


//Named function
function add(a:number,b:number){
    var c = a+b;
    console.log(c);
}
add(10,20);

// function parameter

function display(name:string){
    console.log("Hello"+" "+name);
}
display('arjun');

//default parameters
function greet(name:string = "dhruve",greeting:string = 'hello'){
    return greeting + " "+name;
}
console.log(greet());

//Rest Parameters
function greets(greeting:string,...name:string[]){
    return greeting + " " + name;
}
console.log(greets('hello','john','smith','suresh'))
// using anonymous rest parameter and arrow function 
let a =(greeting:string,...name:string[])=>{
    return greeting + " " + name;
}
console.log(a('hello','john','smith','suresh'))

//optional parameter function
function showName(name:string,greeting?:string){
    if(greeting == undefined){
        greeting = "Hello"
    }
    return greeting + " "+name;
}
console.log(showName('arjun'));
















// for(let i = 0; i<10; i++){
//     console.log(i)
// }

// var arr = [12,23,45,45,78,55];

// for(let i = 0; i<=arr.length; i++){
//     console.log(arr[i]);
// }

// let i:number = 1;

// while(i<=10){
//     console.log(i);
//     if(i%5==0){
//         break;
//     }
//     i++;
// }

// do{
//     console.log(i);
//     i++
// }while(i<=10);














//enum
//  enum days{
//     mon = 'mon'
//     // ,tue,wed,thus,fri,sat,sun
// }

// function whichDay(day:days){
//     return day;
// }
// // let whichDay:days;
// // whichDay =days.tue

// console.log(whichDay(days.mon));

// console.log(users({name:'anil',age:30}).name);


//Genrics
// function users<T>(data:T):T
// {
//     return data
// }


//Module
// import sLogin from './Student'
// import tLogin from './Teacher'

// let teacher = new tLogin();
// console.log(teacher.data);

// let student = new sLogin();
// console.log(student.data)



//Namespace
// /// <reference path="./utils.ts" />
//  namespace UserUtils{
//     export class users extends parent implements getType{
//         getName(){
//             return this.name
//         }
//     }
// }
// let a = new UserUtils.users();
// a.setName('bruce')
// console.log(a.getName())


















//inheritance
// export{}
// class parent{
//     name:string;
//     setName(name){
//         this.name = name;
//     }
// }
// class child extends parent{
//     getName()
//     {
//         return this.name;
//     }
// }

// let a = new child();
// a.setName('anil');
// console.log(a.getName());

//classes
// class App{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     getName()
//     {
//         return this.name
//     }

// }
// let a = new App('anil');
// console.log(a.getName());

//functions
    // function calc(a:number,b?:number):number
    // {
    //     return b?a+b:a;
    // }
    // console.log(calc(100+45))

// interface userinterface{
//     name:string,
//     age:number,
//     getData:()=>string,
// }
// var users:userinterface={
//     name:'smith',
//     age:30,
//     getData:function(){
//         return "anil sidhu";
//     }
// }
// console.log(users.getData())

// //union types
// let data:string|number|boolean = 'anil';
// data = 

// console.log(data)