//JSON


const user = {
    email: "test@test.com",
    password: 12345,
    getInfo() {
      console.log(`${this.email} ${this.email} `);
    }
}
user.getInfo()



let jsonStr = JSON.stringify(user) //convert to JSON
let parcedJson = JSON.parse(jsonStr) //convert from JSON


console.log(user);
console.log(jsonStr);
console.log(parcedJson);

//AJAX - respond only part of website


//API

const xhr  = new XMLHttpRequest();
const url = "https://dummyjson.com/products";
xhr.open("GET", url, ) // GET -  for get some info // POST - for send info// PUT/CATCH changes info 

