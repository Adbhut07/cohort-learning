//Types *****

// type greetArg = string | number;

// function printId(id: greetArg){
//     console.log(`ID: ${id}`);
// }

// printId(101);
// printId("202");
// printId('303');

//difference between types and interfaces ->  we can extend interface as a class but we can't extend type as a class
//and we can use type only to use '|' and '&' operator


// type Employee = {
//   name: string;
//   startDate: Date;
// };

// interface Manager {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//   name: "harkirat",
//   startDate: new Date(),
//   department: "Software developer",
// };
  
