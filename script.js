let randomNum1 = Math.floor(Math.random()*6)+1;
let randomNum2 = Math.floor(Math.random()*6)+1;

let randomImg1 ="dice"+randomNum1+".png";
let randomImg2 = "dice"+randomNum2+".png";

let imgSource1 = "./images/"+randomImg1;
let imgSource2 = "./images/"+randomImg2;

document.querySelector(".img1").setAttribute("src",imgSource1);
document.querySelector(".img2").setAttribute("src",imgSource2);

if(randomNum1>randomNum2){
    document.querySelector("h1").textContent= "Player 1 wins!";
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").textContent = "Player 2 wins !";
}
else{
    document.querySelector("h1").textContent = "Match Tie !";
}

