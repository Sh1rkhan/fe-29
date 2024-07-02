// console.dir(document) // show document properties in console

// console.dir(document.body.children[0].textContent) // choose elem in html

// document.body.children[1].textContent = prompt('sehife bawligi daxil edin') // change choosen elem
// document.querySelector() - can select tags with name, id, class
// .textContent - set or return only text without CSS style
// .innerText - set or return tags with CSS style
// .innerHTML - set or return tags
// .createElement - create Element
// .appenchild - add last child element in parent element
// .getElemenById - call elem by id
// .getElemenByClass - call elem by class


// // TASK 1

// console.dir(document.body.children[1].children[1].parentNode)
// console.dir(document.body.children[1].firstElementChild.textContent)

// // TASK 2

// document.body.firstElementChild.remove()
// document.querySelector('ul').appendChild(document.createElement('li')).textContent = "Titan X"

// console.log(document.querySelector('ul').textContent)


// TASK 3

// document.querySelector("h1").innerText = 'GeForce 20 Series'
// console.dir(document.querySelector('h1').innerText)

// document.querySelector('.primary').style.backgroundColor = '#ebebeb'
// document.body.children[1].lastElementChild.style.backgroundColor = '#ebebeb'

// TASK 4 method
// document.querySelectorAll(".primary").forEach((elem, i, array) => {
//     console.dir(elem.textContent)
// })

// TASK 5
// document.querySelectorAll('li').forEach((elem) => {
//     if (elem.className !== 'primary' ) {
//         elem.className = 'item secondary'
//     } else  {elem.className = 'item primary'}
// }); 

// console.dir(document.body.children[1].outerHTML)
