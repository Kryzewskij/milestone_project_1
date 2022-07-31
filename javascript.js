const symbols = [
"Big Win", // 0
"Banana", // 1
"7", // 2
"Plum", // 3
"Water Melon",// 4
"Lemon", // 5
 "Cherry", // 6
 "Orange", // 7
 "Bar", // 8
];

   var slot1 = chooseRandom(symbols, 1);
   var slot2 = chooseRandom(symbols, 1);
   var slot3 = chooseRandom(symbols, 1);
   const playButton = document.getElementById("playButton");
   const resetButton = document.getElementById("resetButton")
   

   //document.getElementById("playButton").addEventListener("click", clickPlay);

   playButton.addEventListener("click", clickPlay); 

   function clickPlay() {
      document.getElementById("slot1").innerHTML = slot1;
      document.getElementById("slot2").innerHTML = slot2;
      document.getElementById("slot3").innerHTML = slot3;
      };
      
   function chooseRandom(symbols) {
      var result = [];
      var random = Math.floor(Math.random() * symbols.length);
      result.push(symbols[random]);
      return result;
   };
   resetButton.addEventListener("click", reset)
    function reset() {
        if(slot1 !== "?" && slot2!== "?" && slot3 !== "?") {
            //message.innerHTML = "";
            chooseRandom();
        }
    }


   

  


   

   

   

   






  


 
