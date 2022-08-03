const symbols = 
// [
//    "Big Win",
//    "Banana",
//    "7",
//    "Plum",
//    "Water Melon",
//    "Lemon",
//    "Cherry",
//    "Orange",
//    "Bar",
// ];
[
{name:"Big Win", 
image: 'assets/bigWin.png',},
{name:"Banana", 
image: 'assets/banana.jpg',},
{name:"7", 
image: 'assets/seven.jpg',},
{name:"Plum", 
image: 'assets/plum.jpeg',},
{name:"Water Melon",
image: 'assets/watermellon.jpeg',},
{name:"Lemon", 
image: 'assets/lemon.jpeg',},
{name:"Cherry", 
image: 'assets/cherry.jpeg',}, 
{name:"Orange", 
image: 'assets/orange.jpeg',},
{name:"Bar", 
image: 'assets/bar.png',},
];
   
   
   const playButton = document.getElementById("playButton");
   const resetButton = document.getElementById("resetButton");
   const message = document.getElementById("message");
   var gamesPlayed = document.getElementById("gamesPlayed");
   var playClicked = 0;


   playButton.addEventListener("click", clickPlay); 

   function clickPlay() {
      let slot1 = chooseRandom(symbols, 1);
      let slot2 = chooseRandom(symbols, 1);
      let slot3 = chooseRandom(symbols, 1);
      document.getElementById("slot1").innerHTML = slot1.name;
      document.getElementById("slot1").style.backgroundImage = `url(${slot1.image})`;
      document.getElementById("slot2").innerHTML = slot2.name;
      document.getElementById("slot2").style.backgroundImage = `url(${slot2.image})`;
      document.getElementById("slot3").innerHTML = slot3.name;
      document.getElementById("slot3").style.backgroundImage = `url(${slot3.image})`;
     
      playButton.onclick = function () {
      playClicked++;
      gamesPlayed.innerHTML = playClicked;
      }
      if (slot1 === slot2  && slot1 === slot3 && slot2  === slot3) {
         message.innerHTML = "Congratulations, YOU WON!!!!!"
     } else if 
      (slot1 === slot2 || slot1 === slot3 || slot2 === slot3) {
      message.innerHTML = "You got 2 out 3...Not to bad!"
     } else {
      message.innerHTML = "You Lost!"
     }
      }; 
   function chooseRandom(symbols) {
      var result = "";
      var random = Math.floor(Math.random() * symbols.length);
      result = (symbols[random]);  
     return result;
   };
   resetButton.addEventListener("click", reset);

    function reset() {
         document.getElementById("slot1").innerHTML = "Slot 1";
         document.getElementById("slot2").innerHTML = "Slot 2";
         document.getElementById("slot3").innerHTML = "Slot 3";
         document.getElementById("gamesPlayed").innerHTML = 0;   
    }
