// const numbers = [ 1, 12, -45, 36, -12]; // main const

// .sort - порядок элементов for Numbers (selection/merge/tim sorts)

// console.log(numbers.sort()); // ordered with ASCII table

// console.log(
//     numbers.sort((a, b) => { //normal from 0 to infinity
//         if (a > b) return 1;
//         if (a === b) return 0;
//         if (a < b) return -1;
//     })
// );
// console.log(numbers.sort((a, b) => a - b)) //short version


// //.localCompare for strings 

// const names = ["Aygun", "Zulfiyye", "Khan"]
// console.log(names.sort((a,b) => a.localeCompare(b)));// a.(b) from A to Z


// .forEach - loop for arrays - select element, index, array

// let newArray = [];
// numbers.forEach((element, index, array) => { //function or arrow-function
//     if (element < 0) {
//     newArray.push(Math.abs(element))
//     } else {
//         newArray.push(element * 2);
//     }
// });
// console.log(newArray);
// console.log(numbers);
 
 
//.map - create new array by oldArray, return all elems in old array

// const newArray = numbers.map((number, index, array)=>{
//     if (element < 0) {
//     return Math.abs(number)
//     } else {
//         return number * 2;
//     }
// });
// console.log(newArray);


//.concat, .map, .filter, .slice - don't change old array, return newArray
// .splice - change old array


//.filter() - filter array, return all elems which is true

// const filteredNumbers = numbers.filter((element, index, array)=> {
//     if(element > 0) {
//         return element;
//     }
// });
// console.log(filteredNumbers)


//.find() - return first elem which is true || .findLast() - return last one

// const findedNumber = numbers.find((element, index, array)=> {
//     if(element > 0) { return element;} });
// console.log(findedNumber)




// .filter - find all elems
// .find - find first elem
// .findedIndex - find index of elem
// .findLastIndex - find index of last elem
// .some - if find one true elem return true or false (&&)
// .every - return true if all elem is true




//  


// TASK 1
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let maxNums = Math.max(...nums)

// console.log(maxNums);


// TASK 2 

// let employees = [
//   ["Jaylee Macy", "marketing"],
//   ["John Smith", "management"],
//   ["Blossom Hartley", "design"],
//   ["Austin Carpenter", "marketing"],
//   ["Joan Knowles", "development"],
//   ["Sally Nunez", "management"],
//   ["Laurel Ward", "development"],
//   ["Lark Simon", "marketing"],
//   ["Jane Stone", "management"],
//   ["Courtney Olson", "development"],
// ];

//method 1 - with .forEach

// let development = [];
// employees.forEach((element, index, array) => {
//     if (element.includes('development')) {
//         development.push(element)
//     } 
// });

// method 2 - with .filter

// let development = employees.filter((elem, i, array)=> {
// if (elem[1] == "development") {
//     return
//     }
// })
// console.log(development)



// TASK 3

// let array = [
//   1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,
// ];

// method 1
// function sortArray(orderedArray) { //function
//   orderedArray.sort((a, b) => {
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
//     })
//   return orderedArray
// }
// console.log(sortArray(array));

// method 2 - short version
// function sortArray(orderedArray) {
//   orderedArray.sort((a, b) => (a - b))
//   return orderedArray
// }
// console.log(sortArray(array));


// Task 4

// let array = [-10, -40, 4, 17, 0, -50]
// function findNumbers(numArray) {
//   let lastArray = numArray.filter((elem, i, array)=> {
//  if (elem < 0) {
//   return elem
//  }
//   })
//   console.log(lastArray);
// }

// findNumbers(array);


// TASK 5

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// names.forEach(printWithDashes)
// names.forEach(printWithHearts)
// names.forEach(printWithIndex)

// function printWithDashes (elem) {
//   console.log(`--------\n`+elem+ `\n--------`)
// }

// function printWithHearts (elem) {
//   console.log(`<3<3<3<3`+elem+ `<3<3<3<3`)
// }

// function printWithIndex (elem, index) {
//   console.log(`${index} - ${elem}`)
// }


// TASK 6

// function kebabToUpper(text) {
//   return text.toUpperCase().replaceAll("-", "_")
// }

// console.log(kebabToUpper("first-user"))


// Task 7
// const numbers = [ 1, 5, -7, 3, -9, 4, -6, 2];
// let newArray = [];
// numbers.forEach((element, index, array) => { //function or arrow-function
//     if (element < 0) {
//     newArray.push(Math.abs(element))
//     } else {
//         newArray.push(element * 2);
//     }
// });
// console.log(newArray);


// Task 8
// Adlar massivi verilib. Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir. 
//Həmin massivdə "A" hərfi ilə başlayan elementlərdən ibarət yeni massiv yaradıb, elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.
// let namesArray = [
//   "Alice",
//   "Bob",
//   "Catherine",
//   "David",
//   "Eva",
//   "Andrew",
//   "Frank",
//   "Anna",
//   "George",
//   "Alex",
// ];
// Task 9
// ƏDV xaric qiymətlər saxlayan massivini qəbul edən və ƏDV daxil olmaqla olan qiymətlərdən ibarət yeni massiv qaytaran funksiya yazın.
// addTax() funksiyası yaradın. Verilmiş ƏDV-siz qiymətlərlə olan price massivini ona ötürün. addTax() funksiyasının köməyi ilə ƏDV ilə qiymətlərin daxil olduğu massiv yaratın və funksiya həmin massivi geri qaytarsın. ƏDV 20% təşkil edir.

// Input: const pricesArray = [12.99, 24.95, 9.99, 34.50, 19.99, 42.75, 8.49, 15.00, 28.75, 10.99];

// Output:
// Task 10
// Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
// Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək üçün proqram tərtib edin.

// Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
// salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran getAnnualSalary() funksiyasını yazın.

// Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
// Ayın nömrəsini parametr kimi qəbul edən və salary massivindən həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.

// Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
// Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və salary massivi əsasında həmin rüb üçün şöbənin bütün işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın. Rüb - 3 aylıq bir müddətdir.

// Qeyd 1: Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
// Qeyd 2: salary massiviniz içərisində olan hər bir massivdə (10 ədəd) bir işçinin illik maaşının saxlanılmışdır.
// let salary = [
//   [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//   [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//   [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//   [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];