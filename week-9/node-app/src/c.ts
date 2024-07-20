// Arrays*****

// function maxValue(arr: number[]){
//     let max = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

//console.log(maxValue([1, 2, 3])); 

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filterUsers(user: User[]){
    return user.filter(x => x.age >=18);

}

console.log(filterUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));