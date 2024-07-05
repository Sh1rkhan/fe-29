// TASK I method 1

// const body = document.body

// let gray = document.querySelector(".gray")
// let red = document.querySelector(".red")
// let blue = document.querySelector(".blue")
// let yellow = document.querySelector(".yellow")


// gray.onclick = () => {
//     body.style.backgroundColor = "gray"
//  }
//  red.onclick = () => {
//     body.style.backgroundColor = "red"
//  }
//  blue.onclick = () => {
//     body.style.backgroundColor = "blue"
//  }
//  yellow.onclick = () => {
//     body.style.backgroundColor = "yellow"
//  }
 


// TASK I method 2 -!!!ATTENTION!!! 
// // for this method we need to turn off styles of circles in index.html (lines: 37-40)

// const body = document.body
// let circles = document.querySelectorAll(".c1")

// let gray = document.querySelector(".gray").style.backgroundColor = "gray"
// let red = document.querySelector(".red").style.backgroundColor = "red"
// let blue = document.querySelector(".blue").style.backgroundColor = "blue"
// let yellow = document.querySelector(".yellow").style.backgroundColor = "yellow"


// circles.forEach(element => {
//     element.onclick  = () => {
//         body.style.backgroundColor =  element.style.backgroundColor
//     }})



// TASK II


// let tbody = document.body.querySelector('tbody')


// const data = [
//     { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
//     { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
//     { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
//     { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
//     { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
//     { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
//     { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
//     { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
//     { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
//     { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
//     { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
//     { name: "Ethereum Classic", ticker: "ETC", value: "12.5988",change: "4.09%" },
//     { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
//     { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
//     { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" },
//   ];



  
// data.forEach((elem, i, array) => {
  
// let tr = document.createElement("tr")
// tbody.appendChild(tr)

// function createTd(text) {
//     let td = document.createElement("td")
//     td.innerText = text
//     tr.appendChild(td)}
//     createTd(elem.name)
//     createTd(elem.ticker)
//     createTd(elem.value)
//     createTd(elem.change)
// })

