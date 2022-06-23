let userScore = 0;
let gunting = document.getElementById("scissor").getAttribute('src')
let batu = document.getElementById("rock").getAttribute('src')
let kertas = document.getElementById("paper").getAttribute('src')
let userChoice =  ''
let countWin = 0
let countLose = 0
let countDraw = 0
const pilihGunting =()=>{
    //console.log(gunting)
    document.getElementById("choice").innerHTML = '<img src="img/gunting.png" style="width: 100px"/>'
    userChoice = "gunting"
    choicePc()
    game(userChoice)
  //  console.log(userChoice)
}
const pilihBatu =()=>{
    //console.log(batu)
    document.getElementById("choice").innerHTML = '<img src="img/batu.png" style="width: 100px"/>'
    userChoice = "batu"
    choicePc()
    game(userChoice)
 //   console.log(userChoice)
}
const pilihKertas =()=>{
   // console.log(userChoice)
    document.getElementById("choice").innerHTML = '<img src="img/kertas.png" style="width: 100px"/>'
    userChoice = "kertas"
    choicePc()
    game(userChoice)
   // console.log(userChoice)
}
let pilihPc = ""
const choicePc = () =>{
    let img = new Array("img/gunting.png" , "img/batu.png" , "img/kertas.png")
    let randomGbr = Math.floor(Math.random() * img.length)
    document.getElementById("pc_choice").innerHTML = `<img src=${img[randomGbr]} style="width: 100px"/>`
    if(img[randomGbr] == "img/gunting.png"){
        pilihPc = "Gunting"
    }else if(img[randomGbr] == "img/batu.png"){
        pilihPc = "Batu"
    }else { pilihPc = "Kertas"}
   // console.log(pilihPc)
}
const game = (userChoice) => {
    
    switch (userChoice + pilihPc) {
        case "batuGunting":
        case "guntingKertas":
        case "kertasBatu":
        Win();
      console.log("menang");
     // console.log(userScore); 
      Result("Win")
            break;
        case "batuKertas":
        case "guntingBatu":
        case "kertasGunting":
            console.log("kalah");
            Lose()
            Result("Lose")
           // console.log(countLose)
            break;

        default:
            console.log("draw");
            Draw()
            Result("Draw")
            //console.log(countDraw)
            break;
    } 
}
const Win = () =>{
    countWin += 1
    userScore += 25

}
const Lose = () =>{
    countLose += 1
}
const Draw = () =>{
    countDraw += 1
}

const Result = (match) =>{
    document.getElementById("score").innerHTML = `<h1>Player ${match}</h1><h2>Result:<br>Score:${userScore}<br>Win:${countWin}<br>Lose:${countLose}<br>Draw:${countDraw}</h2>`
}
