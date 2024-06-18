// task 1

// const user = {
//     userName: `Khan`,
//     surname: `Huseynov`,
//     gender: `man`,
//     birthday: `14.02.1997`,
// }

// console.log(user.birthday);
// // console.log(user[`birthday`]); - cagirmaq ucun 2ci variant


// task 2

// const user = {
//     userName: `Khan`,
//     surname: `Huseynov`,
//     gender: `man`,
//     birthday: `14.02.1997`,
// }

// delete user.birthday;
// user.age = 27

// console.log(user);


// task 3



// const user = {
//     userName: `Khan`,
//     surname: `Huseynov`,
//     gender: `man`,
//     birthday: `14.02.1997`,
// }

// for (const key in user) {
//     console.log(`${key} : ${user[key]}`)
// }





// task 4
// const user = {
//     userName: `Khan`,
//     surname: `Huseynov`,
//     gender: `man`,
//     birthday: `14.02.1997`,
//     age:20,
//     setAge(){
//         user.age = +prompt(`yawinizi daxil edin`)
//     },
//     getYearsBeforeRetirement(){
//         if (user.age<65) {
//             console.log(`sizin pensiyaya qalan illerin sayi ${65-user.age}`)
//         } else {
//             console.log(`siz artiq pensiya alirsiniz`)
//         }
//     }
// }

// user.setAge()
// user.getYearsBeforeRetirement()


// task 5

// function prop2Taker(obj) {
//     console.log(obj['prop-2'])
// }

// prop2Taker({one: 1, 'prop-2': 2});
// prop2Taker({ 'prop-2': 'two', prop: 'test'})




// task 6
// function propertyTaker(obj, propertyName) {
//     console.log(obj[propertyName]);
// }

// propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent') // 'Asia'

// propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country') // 'Sweden'

// propertyTaker({name:'ali', age:12}, 'name') // 'ali'


// TASK7


// function existsAndTruthy(obj, propName){
//     if (obj[propName]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(existsAndTruthy({a:1,b:2,c:3},'b')); 

// console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y')); 

// console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z')); 




// test