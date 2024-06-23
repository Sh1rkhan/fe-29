// TASK 1 // 

// function DNACode(dna) {
//     const complement = {
//         'A': 'T',
//         'T': 'A',
//         'C': 'G',
//         'G': 'C'
//     };


//     let changeCode = '';
//     for (let i = 0; i < dna.length; i++) {
//         let base = dna[i];
//         changeCode += complement[base];

//     return changeCode;
// }

// console.log(DNACode("ATTGC")); 
// console.log(DNACode("GTAT"));  





//TASK2

// function contamination(text, char){
//     return console.log(char.repeat(text.length))
//   }
  
  
//   contamination("abc", "z")




// TASK 3

// function  getNumberFromString(number) {
//     let reqem = number
//     let onlyNumber = ""
//     for (let i = 0; i < reqem.length; i++) {
//         if (Number(reqem.charAt(i))) {
//             onlyNumber = onlyNumber + reqem.charAt(i)
//         }
        
//     }
//     return console.log(onlyNumber);
// }

// getNumberFromString("hell5o wor6ld")



// TASK 4

// function nameWord(params) {
//     let word = params
//     word = word.replaceAll("!", "")
//     console.log(word + "!");
// }

// nameWord("!Hi! H!i!")





// TASK 5

// function  getNumberFromString(text) {
//     let word = text
//     let onlyWord = ""
//     for (let i = 0; i < word.length; i++) {
//         if (!Number(word.charAt(i))) {
//             onlyWord = onlyWord + word.charAt(i)
//         }
        
//     }
//     return console.log(onlyWord);
// }

// getNumberFromString("! !")
// getNumberFromString("123456789")
// getNumberFromString("This looks5 grea8t!")




//TASK 6

// function stringy(text){
//       let binaryText = ""
//       for (let i = 0; i < text.length; i++) {
//         if (i%2 === 0) {
//             binaryText += "1"
//         } else {
//         binaryText += "0"};

    
// }return console.log(binaryText);
// }

// stringy("STERLING")





// TASK 7

// function input(word){
//     if (word === word.toUpperCase()){ 
//         return console.log("true");
//     }
//     else console.log("false")
// }

// input("SALAM")




// TASK 8

// function myFunction(number, str) {
//     return console.log(str.repeat(number));
// }


// myFunction(2, "Hello")





// TASK 9

// function changeWord (word) {
//     let soz = word
//     let mirrorWord = "";
//     for (let i = soz.length; i >= 0; i--) {
//         mirrorWord = mirrorWord + soz.charAt(i)
        
//     }

//     return console.log(mirrorWord);

// }

// changeWord('world')
// changeWord('drow')




// TASK 10

// function marginWords(text) {
//    let newText = text.replaceAll(" ", "" )
//    return console.log(newText);
// }

// marginWords("Lorem ipsum dolar sit")
// marginWords("8aaaaa dddd r")



