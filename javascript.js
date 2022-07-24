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

console.log(symbols);

const chooseRandom = (symbols, num) => {
    const result = [];
    for(let i = 0; i < num; i++ ){
       const random = Math.floor(Math.random() * symbols.length);

       console.log(random);

    //    if(result.indexOf(symbols[random]) !== -1){
    //       continue;
    //    };
       result.push(symbols[random]);

       
       
    }; 
    console.log(result,"line 30");
    return result;
 };
 console.log(chooseRandom(symbols, 3));


 