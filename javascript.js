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

function clickPlay() {
   document.getElementById("slot1").innerHTML = slot1;
   document.getElementById("slot2").innerHTML = slot2;
   document.getElementById("slot3").innerHTML = slot3;
   };

   document.getElementById("playButton").addEventListener("click", clickPlay);

   function chooseRandom(symbols, num) {
   const result = [];
   for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * symbols.length);
      console.log(random);
      result.push(symbols[random]);
   };
   return result;

}   

   const slot1 = chooseRandom(symbols, 1)
   console.log(slot1, 'line 24');
   
   const slot2 = chooseRandom(symbols, 1);
   console.log(slot2, 'line 26');
  
   const slot3 = chooseRandom(symbols, 1);
   console.log(slot3, 'line 30');

   

   






  


 
