//enums ********

// enum Direction {
//     Up = "up",  
//     Down ="down",  
//     Left = "left",  
//     Right = "right" 
// }

// function doSomething(keyPressed: Direction) {
// 	if(keyPressed == Direction.Up){

//     }
// }
// doSomething(Direction.Right);
// doSomething(Direction.Up);
// console.log(Direction.Right);
// console.log(Direction.Down);


// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/", (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })


// Generics*******
// <T>  this syntax is using for generics

// function identity<T>(arg: T): T {
//     return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

function getFirstElement<T>(arr: T[]){
    return arr[0];
}
const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);     // we can remove <string> keyword ..... Ts will automatically detect it
const el2 = getFirstElement([1,2]);
console.log(el.toLowerCase())
console.log(el2)