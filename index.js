// Random Number for Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png")

// Random Number for Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png")

if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Win🚩"
}
else if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Win"
}
else {
  document.querySelector("h1").innerHTML = "Draw"
}
