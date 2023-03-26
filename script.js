let currentScoreText = document.querySelector("#currentScoreText");
let clicks = 0;
let highScoreText = document.querySelector("#highScoreText")
let highScore = localStorage.getItem('highScore')

if(highScore){
  highScoreText.innerHTML = "High Score: " + highScore;
}

function increaseClicks(){
  clicks++;
  currentScoreText.innerHTML = clicks;
}

function saveScore(){
  if(clicks>highScore){
    localStorage.setItem('highScore', clicks);
    highScoreText.innerHTML = "High Score:" + clicks;
  }
}