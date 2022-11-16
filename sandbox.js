

  
  
  // Цей варіант 4.3 не працює, ЧОМУ??
// const fibsArr1 = [];



// for(let i = 1; i <= 10; i++){
//   let nextNum = 0;
  
//     if( i == 1 || i==2){
//     nextNum[i] = 1;
   
//   }else{
//     nextNum[i] = nextNum[i-1] + nextNum[i-2]
   
//   }
//   console.log(nextNum);
//   fibsArr1.push(nextNum);
// }
// console.log(fibsArr1);


Працюючий варіант 4.3
const fibsArr2 = [];

for(i = 0; i< 10; i++){
 if(i == 0 || i == 1){
  fibsArr2[i] = 1;
 }else { fibsArr2[i] = fibsArr2[i-2] + fibsArr2[i-1]};

}
console.log(fibsArr2);


// Завдання 4.4

let x = [3, 10];
let y = [];
x[77] = 7;

for(let i = 0; i <= x.length; i++){
  y[i] = Math.pow(x[i], 2);
  
};
console.log(y); 
console.log(y.length); //79 

// for(const num of x){
//   y.push(Math.pow(num, 2));
// };
// console.log(y);
// console.log(y.length); //78

// for (const num of x){
//   y.push(Math.pow(num, 2));
// };
// console.log(y);
// console.log(y.length); //78;
};

