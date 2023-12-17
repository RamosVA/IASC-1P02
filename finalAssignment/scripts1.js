

function changeText(){
  document.getElementById("question").innerHTML = "Surprise, He's Bingley"
  console.log ("Replacing text")
}

var todayFullDate = new Date();
var todayFullYear = todayFullDate.getFullYear();
var todayMonth = todayFullDate.getMonth() + 1;
var todayDate = todayFullDate.getDate();


function displayDate(){
  document.getElementById("theDate").innerHTML =String(todayDate) + "/" + String(todayMonth) + "/" + String(todayFullYear)
}
