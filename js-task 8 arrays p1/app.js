// let names = ["Salam", "Äleykum"]
// names[1] = 'vA ALEYKUMA' // 1ci elementi deyiwdrir


// console.log(names[1]); // kvadrat skobka cagirmaq ucun
// names[3] = 'Privet' // olmuyan elementi elave etmek olur, arasinda empty-elementi ata bilir
// console.log(names);
// names.push("Elmir") //push - add last elem
// names.unshift("Elmir") //unshift - add first elem
// names.shift() //delet first element
// names.pop() //delet last element




// TASK 1

// const names =[ `Khan`,`Nicat`,`Murad`]
//  names.push("Elmir") 
//  names.shift() 
// console.log(names); 
 
 
// // Task2 

// const names =[`Khan`,`Nicat`,`Murad`]
// names[1]= "Classified"; 
// console.log(names); 

 
 
// Task3 

// const num = [3,4,5,6,7]; 
// let num2 = []
// function sum() {
    
//     for (let i = 0; i < num.length; i++) {
//         num2.push(num[i]*2)
//     }
// }
// sum()
// console.log(num);
// console.log(num2);



// TASK 4
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jedi']
// episode4 = [];episode5 = [];episode6 = [];
// episode4.push(arr[0]);
// episode5.push(arr[1]);
// episode6.push(arr[2]);


// // old version is: let episodes = `Episode IV: ${arr[0]}. \nEpisode V: ${arr[1]}.\nEpisode VI: ${arr[2]}`
// console.log(`Episode IV: ${episode4}`)
// console.log(`Episode V: ${episode5}`);
// console.log(`Episode VI: ${episode6}`);



// TASK 5

// let numbers = prompt(`gosterilen formatda 5 reqem  daxil edin: x,x,x,x,x  `, `1,2,3,4,5`)

// let numberArray = numbers.split(",")
// let numbers2 = [];

// if (numberArray.length === 5){

           
//     for (let i = 0; i < numberArray.length; i++) {
//         numbers2.push(+numberArray[i])
//             } 
//             console.log(numbers2)


//             let smallestNumber = numbers2[0]; 

//             for (let i = 1; i < numbers2.length; i++) {
//                 if (numbers2[i] < smallestNumber) {
//                     smallestNumber = numbers2[i];
//                 }
//             } console.log(smallestNumber);
        

//         }   else {
//             console.log('reqemleri duzgun daxil edin')
//         }


// Task 6


// let num = `32, 31, 34, 36, 31`



// let splittedNum = num.split(",")
// let newNum = []
// for (let i = 0; i < splittedNum.length; i++) {
//     newNum.push(splittedNum[i]+';')
    
// }
// console.log(newNum);
