// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// };

// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: 'Adbhut', age: 19}, {name: 'Anahad', age: 19});
// console.log(age);

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function upadteUser(upadtedProps: UpdatePropsOptional){

// }
// upadteUser({
//     name: "asd"
// })

//  Record ----  
// type Users = Record<string, number>;
// const users : Users = {
//     "rad@q12": 21,
//     "ras1@d": 31,
// }

//  Map --- 
interface User {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map with string keys and User values
  const usersMap = new Map<string, User>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }