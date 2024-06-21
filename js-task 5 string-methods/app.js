// Lesson 24 string methods


//znacki

//console.log(`lorem ipsum \u00A9`);  




// stringin icinde - ardiciligina ve sayini gosterir


// const text = `lorem ipsum`
// const text1 = new String(`lorem ipsum`); 
// console.log(text1);


// [kvadrat skobkalarin icinde secirsen poradkoviy nomer]

// const text = new String(`lorem ipsum`); 
// console.log(text[3]);
// console.log(text.length); - umumi sayini gosterir


// boyuk ve ya kicik edir butun herifleri

// const text = new String(`lorem ipsum`); 
// console.log(text.toUpperCase());  



//search symbol or number 
// const text = 'test@test.com'
// console.log(text.indexOf("@")); //simvolu tapir , (lastIndexOf) seach from end
// console.log(text.charAt("4")); //reqemi tapir


// console.log(text.includes("@")); //symbol var or not voobwe
// console.log(text.startsWith("test")); // search symbol in start
// console.log(text.endsWith("com")); //search symbol in end


//console.log(`lorem`.concat(`ipsum`))// .concat - birlewdirir

// const newText = text.replace("t", "T") // .replace - change selected symbol
// const newText = text.replaceAll("t", "T") // .replaceAll - change all selected symbol

// console.log(newText);
// console.log(newText.trim()) //.trim - delete spaces from start and end



// const text1 = `lOreM`;
// const newText1 = text1.replace(text1.toUpperCase[0],)

// console.log(newText1);


// const text = `test@test.com`;
// const pass = `lorem ipsum`;

// console.log(text.slice(0,4));
// console.log(text.slice(10));


//split
//const text = `medaxil etme`;
//console.log(text.split("m")); //.split cut with help symbol


//date
// const today = new Date(2020, 0,3)
// console.log(today)


// TASK 1

// let text = "John Doe"; // 7
// let text1 = "A beautiful game"; // 14
// let newText = text.replaceAll(" ", "")
// let newText1 = text1.replaceAll(" ", "")
// console.log(newText.length, newText1.length)


// TASK 2

// let fullName = prompt(`adinizi ve soyadinizi daxil edin`, "john doe")
// let firstSide = fullName.slice(0, fullName.indexOf(" "))
// let secondSide = fullName.slice(fullName.indexOf(" ")+1)
// console.log(secondSide, firstSide );



// TASK 3

// let num1 = 16792
// let num2 = 5437
// let numberLast = num1 * num2
// console.log(numberLast) // umumi alinan reqem
// console.log(String(numberLast)[6]) // 6-cı rəqəmi



// TASK 4

// let balance = prompt(`"000.00" formatinda reqem daxil edin`, "530.90")
// let manat = balance.slice(0, balance.indexOf("."))
// let qepik = balance.slice(balance.indexOf(".")+1)
// console.log(`sizin balansinizdaki mebleg: ${manat} manat ${qepik} qepikdir`);


// TASK 5

// let fullName = prompt(`adinizi soyadinizi ve atanizin adini qeyd eleyin`, `Məmmədov Ramil Qurban`)
// let userName = fullName.slice(fullName.indexOf(" ")+1, fullName.indexOf(" ")+2)
// let userPatronymic = fullName.slice(fullName.lastIndexOf(" ")+1, fullName.lastIndexOf(" ")+2)
// let userSurname = fullName.slice(0,fullName.indexOf(" "))

// console.log(`${userSurname} ${userName}. ${userPatronymic}.`)


// TASK 6

// const userInput = prompt(`"YYYY.MM.DD" formatinda tarix daxil edin`, `2019.05.12`)
// function month (months) {
// let months = `01` === "JAN"
// let months = `02` === "FEB"
// let months = `03` === "MAR"
// let months = `04` === "APR"
// let months = `05` === "MAY"
// let months = `06` === "JUN"
// let months = `07` === "JUL"
// let months = `08` === "AUG"
// let months = `09` === "SEP"
// let months = `10` === "OCT"
// let months = `11` === "NOV"
// let months = `12` === "DEC"


// }

// const date = 

// console.log(months)




// TASK 7 

// TASK 8 - part I

// function findNumber() {

//     let userInput = prompt(`metn daxil edin`)

// if (userInput.includes(1) || userInput.includes(2)|| 
// userInput.includes(3)|| 
// userInput.includes(4)||
// userInput.includes(5)||
// userInput.includes(6) ||
//  userInput.includes(7)|| 
//  userInput.includes(8) || 
//  userInput.includes(9) || userInput.includes(0))  {
//     console.log(`sizin metninizde reqem var`)

// } else {
//     console.log(`sizin metninizde reqem yoxdur`)
// }
// }

// findNumber()

// TASK 8 - part II

// function numberOrNot() {
// let userInput = prompt(`metn daxil edin`)
//  for (let i = 0; i < userInput.length; i++) {

//    if (!isNaN(userInput.charAt(i))) {
//     return console.log(`sizin metninizde reqem var`)
//    }
//  }
//  console.log(`sizin metninizde reqem yoxdur`)
// }


// numberOrNot()







// function changeFirstWord(word, firstLetter){
//     const  firstLetter = word.replace(word[0], `R`)
    
//      return firstLetter
// }


// console.log(`Kamil`, `R`)
// console.log(changeFirstWord())
