// const x: number = 1;
// console.log(x);

// function greet(firstName: string) {
//     console.log("Hello " + firstName);
// }
// greet("Adbhut");

// function sum(a: number, b: number): number{
//     return a+b;
// }
// const value = sum(1,2);
// console.log(value);

// function isLegal(age: number): boolean{
//     if(age >= 18){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(isLegal(2));

// function delayedCall(fn: () => void) {
//     setTimeout(fn, 1000);
// } 

// delayedCall(function() {
//     console.log("hi there");
// })

// const greet = (name:string) => `Hello ${name}`;

// interfaces : How can you assign types to objects
// interface User{
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string;
// }
// // function isLegal(user: User){
//     if(user.age >= 18){
//         return true;
//     } else{
//         return false;
//     }
// }
// isLegal({
//     firstName: "Adbhut",
//     lastName: "Stasangi",
//     age: 20,
//     email: "adbhut@gmail.com"
// })

// interfaces used in classes 
// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// const e = new Employee("Adbhut", 22);
// console.log(e.name);