// function createUser(name, email,password){
//     const newUser = {
//         name : name, // belede yazmaq olar
//         email,// bu qisa formasidir
//         password,
//     }

//     return newUser;
// }

//obyekt yaradir
// let user1 ={
//     name: "Shirkhan",
//     email: "test@test.com",
//     password: "123456",
// }

// obyekte qisa olaraq deyerleri gondermek
// let user1 = createUser("Shirkhan","test@test.com","123456")
// console.log(user1);


//Constructor-function - boyuk ad ile yaradilir


// function User(name, email, password, age) {

//     this.name = name;
//     this.age = age;
//     this.email = email
//     this.password = password
//     this.getInfo = function() {
//         console.log(`Name : ${this.name}
//             age: ${age}`)
//     }
    
// }

// let user1 = new User ("Shirkhan","test@test.com","123456", '27') 
// console.log(user1);
// user1.getInfo();


// Calc

    // this.sum = function() {
    //     console.log(`Result: ${this.num1 + this.num2} `);
    // }
    // this.mul = () => { //funksiya arrow tipli
    //     console.log(`Result: ${this.num1 * this.num2} `);
    // }
    // this.sum = function() {
    //     console.log(`Result: ${this.num1 - this.num2} `);
    // }
    // this.mul = () => { //funksiya arrow tipli
    //     console.log(`Result: ${this.num1 / this.num2} `);
    // }

// calc1.mul()
// calc1.sum()






// // TASK 1

// function User(fullName) {
//     this.fullname = "";
//     this.creditLimit = 1000;
//     this.balans = 50;
//     this.precentOfMinPayment = 10;
//     this.borc;
//     // this.setFullname = function () { //promtu finksiya icinde yazmaq meslehetdir
//     //     this.fullName = prompt(`tam adinizi qeyd edin`)
//     // }
//     this.getBalance = function ()  {
//         if (this.balans === 0 && this.creditLimit < 1000) {
//             this.borc =  (1000 - this.creditLimit) + ((1000-this.creditLimit)/100 * this.precentOfMinPayment)
//             console.log(`Sizin borcunuz ${this.borc}`); 
//         } else if (this.balans > 0) { 
//             console.log(`sizin balansiniz: ${this.balans}`);
//         } else {
//             console.log(`sizin borcunuz yoxdur`);
//         }
//     };

//     this.withdraw = function (amount) {
//         if (amount > this.balans + this.creditLimit) {
//             console.log(`almaq isteyiniz mebleg coxdur`);
//         } else if (amount > this.balans ) {
//             const diff = amount - this.balans;
//             this.balans = 0;
//             this.creditLimit -= diff;
//             console.log(`cixilan mebleg ${amount} AZN. Balans: ${this.balans} AZN, Kredirt limiti: ${this.creditLimit} AZN`);
//         } else {
//             this.balans = this.balans - amount; // ve ya this.balans -= amount
//             console.log(`cixilan mebleg ${amount} AZN. Balans: ${this.balans} AZN`);

//         }
//     }
//     this.refill = function (amount) {
//        this.borc =  (1000 - this.creditLimit) + ((1000-this.creditLimit)/100 * this.precentOfMinPayment)
        
//          if (this.balans === 0 && this.borc > 0){
//             if (amount >= this.borc) {
//                 amount -= this.borc;
//                 this.borc = 0;
//                 this.balans += amount;
//                 console.log(`sizin borcunuz tamamile odenildi. Balansiniz: ${this.balans}`);
//             } else{
//                 this.borc -= amount;
//                 console.log(`Sizin borcunuzun mueyyen hissesi odenildi. Balansiniz: ${this.balans}. Borcunuz: ${this.borc} `);

//             }
            
//         }
//     }
//  }


// const client = new User(`Khan Huseynov`);

// client.withdraw(500)
// client.getBalance()
// client.refill(100)


// TASK 2 

// function Calculator () {
//     this.num1 = 0;
//     this.num2 = 0;
//     this.read = function () {
//       this.num1 = +prompt('birinci ededi daxil edin')
//       this.operation = prompt(`operatoru daxil edin`)
//       this.num2 = +prompt('ikinci ededi daxil edin')
      
//     };


//     this.math = function () {
//     switch (this.operation) {
//         case `+`:
//             console.log(`Result: num1 + num2 = ${this.num1 + this.num2} `);
//             break;
//         case `-`:
//             console.log(`Result: num1 + num2 = ${this.num1 - this.num2} `);
//           break;
//         case `*`:
//             console.log(`Result: num1 + num2 = ${this.num1 * this.num2} `);
//           break;
//         case `/`:
//             console.log(`Result: num1 + num2 = ${this.num1 / this.num2} `);
//           break;
//     }
// }


// }

// const calc1 = new Calculator();
// calc1.read(); // cagirmaq ucun promt-lari
// calc1.math(); // 



