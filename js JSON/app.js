//JSON


// const user = {
//     email: "test@test.com",
//     password: 12345,
//     getInfo() {
//       console.log(`${this.email} ${this.email} `);
//     }
// }
// user.getInfo()



// let jsonStr = JSON.stringify(user) //convert to JSON
// let parcedJson = JSON.parse(jsonStr) //convert from JSON


// console.log(user);
// console.log(jsonStr);
// console.log(parcedJson);

//AJAX - respond only part of website


//API
const root = document.getElementById("root")
const xhr  = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";
// const url = "https://dummyjson.com/products";
xhr.open("GET", url ) 
xhr.send() 
xhr.onreadystatechange = () => {
   
    if(xhr.readyState === 4 ) {  //readyState = 1 - connection // 4 - end
        const data = JSON.parse(xhr.response);
        console.log(data);
        data.forEach(({name}) => { //  {} - destruction

            
            // root.innerHTML += //first variant
            // `<h1>${user.name} </h1>
            // <hr>`

            const html = //second variant
            `<h1>${name}</h1>
             <hr>`;


             root.insertAdjacentHTML ("afterend", html)

        });
     }
}



//jQuerry - old but with it we can write short code