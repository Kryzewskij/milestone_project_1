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
   
   
   const playButton = document.getElementById("playButton");
   const resetButton = document.getElementById("resetButton")

   playButton.addEventListener("click", clickPlay); 

   function clickPlay() {
      let slot1 = chooseRandom(symbols, 1);
      let slot2 = chooseRandom(symbols, 1);
      let slot3 = chooseRandom(symbols, 1);
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

   resetButton.addEventListener("click", reset);

    function reset() {
         document.getElementById("slot1").innerHTML = "Slot 1";
         document.getElementById("slot2").innerHTML = "Slot 2";
         document.getElementById("slot3").innerHTML = "Slot 3";  
    }
