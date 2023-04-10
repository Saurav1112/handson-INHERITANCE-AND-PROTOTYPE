//Answer to Q1//

// const parent ={
//     firstname : "Saurav",
//     lastname : "Chaudhary",
//     fullname : function title(){
//         console.log(this.firstname+" "+this.lastname);
//     }
// }

// const child ={
//     _proto_: parent
// }
// child.fullname();







//Answer to Q2

//  let obj={
//     name : "Saurav"
// }

// let obj1 ={
//     _proto_: obj,
//     lastname : "Chaudhary"
// }

// let obj2 = {
//     _proto_: obj1,
//     age :   "24",
// }

// console.log(obj.name)





//Answer to Q3

// Array.prototype.sum = function() {
//     let result = 0;
//     for (let i = 0; i &lt; this.length; i++) {
//       result += this[i];
//     }
//     return result;
//   };

// let N1 = [1, 2, 3];
// let N2 = [3, 2, 1];


// let addition = N1.sum() + N2.sum()
// console.log(addition);


//Answer to Q4

// class student {
//     constructor(name, rollno, division){
//         this.name= name;
//         this.rollno= rollno;
//         this.division = division; 
//     }

//     set setFriend(friend){
//         this.friend= friend
//     }
// }

// let obj = new student("Saurav", "37","B")
// obj.friend="Harman"
// console.log(obj)

// class senior extends student{
//      constructor(){
//         super("Pankaj", "40", "C")
//      }
// }
//  let seniorobj = new senior();
//  console.log(seniorobj)