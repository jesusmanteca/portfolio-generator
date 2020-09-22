var profileDataArr = process.argv.slice(2, process.argv.length);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
//   };
  
//   printProfileData(profileDataArr);

// console.log("");
// console.log('========2========');
// console.log("");

// profileDataArr.forEach(function(profileItem) {
//   console.log(profileItem);
// });

console.log("");
console.log('=================');
console.log("");

//using the variable, we're going to do a for loop that goes through each item
profileDataArr.forEach(index => console.log(index));

console.log("");
console.log('=================');
console.log("");

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs)

console.log("");
console.log('=================');
console.log("");