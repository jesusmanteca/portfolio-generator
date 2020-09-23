const fs = require('fs');
const generatePage = require('./src/page-template.js');

// // STORE THE INPUT IN VALUE AS ARRAY STARTING AT INDEX 2 UNTIL THE LENGTH OF THE INDEX, SO... UNTIL YOU'RE DONE TYPING
const profileDataArgs = process.argv.slice(2, process.argv.length);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
//=
const [name, github] = profileDataArgs

// this is what we want inside the file we're creating, this is the stamp carving


// WRITE FILE
fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });


// var profileDataArr = process.argv.slice(2, process.argv.length);
// console.log(profileDataArr)

// console.log("");
// console.log('=================');

// //using the variable, we're going to do a for loop that goes through each item and print it in rows
// profileDataArr.forEach(index => console.log(index));

// console.log('=================');
// console.log("");

// const generatePage = () => 'Name: Jesus Manteca, Github: jesushub@abc.com';
// console.log(generatePage())

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;