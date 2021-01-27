var UserUtils;
(function (UserUtils) {
    var users = /** @class */ (function () {
        function users() {
        }
        users.prototype.getName = function () {
            return 'anil';
        };
        return users;
    }());
    UserUtils.users = users;
})(UserUtils || (UserUtils = {}));
var a = new UserUtils.users();
console.log(a.getName());
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
