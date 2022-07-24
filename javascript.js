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

const chooseRandom1 = (symbols, num) => {
    const result1 = [];
    for(let i = 0; i < num; i++ ){
       const random = Math.floor(Math.random() * symbols.length);
       console.log(random);
       result1.push(symbols[random]);  
    }; 
    return result1;
 };
 console.log(chooseRandom1(symbols, 1), "line 33");

 const chooseRandom2 = (symbols, num) => {
    const result2 = [];
    for(let i = 0; i < num; i++ ){
       const random = Math.floor(Math.random() * symbols.length);
       console.log(random);
       result2.push(symbols[random]);  
    }; 
    return result2;
 };
 console.log(chooseRandom2(symbols, 1), "line 33");

 const chooseRandom3 = (symbols, num) => {
    const result3 = [];
    for(let i = 0; i < num; i++ ){
       const random = Math.floor(Math.random() * symbols.length);
       console.log(random);
       result3.push(symbols[random]);  
    }; 
    return result3;
 };
 console.log(chooseRandom3(symbols, 1), "line 33");

 