var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserUtils;
(function (UserUtils) {
    var parent = /** @class */ (function () {
        function parent() {
        }
        parent.prototype.setName = function (name) {
            return this.name = name;
        };
        return parent;
    }());
    UserUtils.parent = parent;
})(UserUtils || (UserUtils = {}));
/// <reference path="./utils.ts" />
var UserUtils;
(function (UserUtils) {
    var users = /** @class */ (function (_super) {
        __extends(users, _super);
        function users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        users.prototype.getName = function () {
            return this.name;
        };
        return users;
    }(UserUtils.parent));
    UserUtils.users = users;
})(UserUtils || (UserUtils = {}));
var a = new UserUtils.users();
a.setName('bruce');
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
