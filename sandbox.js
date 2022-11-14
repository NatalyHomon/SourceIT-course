

// Практична робота 3.1 

function printRow(star, space, rows, stars, spaces){
  let res = ""; 
      for(let i = 1; i <= rows; i++){
          res = "";
          spaces = rows - i;
          for(let j = 0; j < spaces; j++){
              res += space;
          };
          stars = i * 2 - 1;
          for(let j = 0; j < stars; j++){
              res += star;
          };
          console.log( res);  
      }
  }

printRow("*", "_", 5, "", "");


// Практична робота 3.6

 function printNumbers(nums, cols){
    let rows = nums/cols;
    
    for(let i = 1; i<= rows; i++){
        let base = i;
        let number = 0;
        let space = " ";
        let total =``;

        for(let j = 1; j <= cols; j++){
          
           if(j===1){
            number += base;
            total += number}
                   
           else{ number += rows;
            total += number};

            total+= space;
        }
      console.log(total);
    }
    
  };

printNumbers(12,3)

// Практична робота 3.5

let items = 16;
let result = '';
const car = 'car';
const bus = 'bus';
const space = ' ';
const nextRow = '\n';
let oneRow = 8;

let i = 1;
while (i <= items){   //items

 //лічильник елементів в рядку
  
  for(let c = 1; c <= 4; c++){
      result += car;
      if (i < 8){
        result+= space
      }
      if(i === 8){
        result +=nextRow};
    };

    for(let b = 1; b <= 3; b++){
      result += bus;
      if (i < 8){
        result+= space};
        if(i === 8){
          result +=nextRow};
  };
  i+=1;
  
}

console.log(result);



// Практична робота 3.3
function compare(x){
  return function(y){
    if(y === x) return null;
    if(y < x) return -1;
    if(y>x) return 1 ;
    }
  }

let resultFunc = compare(12);

console.log(resultFunc(11));

// Практична робота 4.1 4.2

let product1 = {
  name: 'apple',
  brand: 'fruit',
  price: 100,
  // showProduct(){
  //   console.log(`Product name: ${this.name}, product price: ${this.price}`);
  // }
  show: function showProduct(){
   console.log(`Product name: ${this.name}, product price: ${this.price}`);
  }
};

let product2 = {
  name:'banana',
  brand:'fruit',
  price:50,
  showProduct(){
    console.log(`Product name: ${this.name}, product price: ${this.price}`);
  }
};

product1.show();
product2.showProduct();

for( const prop in product2 ){
  console.log(product2[prop]);
};
