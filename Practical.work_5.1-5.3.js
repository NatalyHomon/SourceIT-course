// Практична робота 5.1

let text = 'Одного разу в далеких краях';
const word = 'ких';
const index = text.indexOf(word);
const res = text.slice(index, index+3);
console.log(res);

// Практична робота 5.2

function substrCount(input, needle, offset, length){
const newInput = input.substr(offset, length);

console.log(newInput);
const array = newInput.split(' ');
console.log(array);
let count = 0;
for(let i = 0; i< array.length; i++){
    if(array[i].includes(needle)){
        count += 1;
    }
}
return count
}

const count = substrCount('Good Golly Miss Molly', 'll', 7, 10);

console.log(count)

// Практична робота 5.3

function strPad(input, fullLen, fillStr, fillType){


let newStr = ''; 

    if(fillType === 'FILL_LEFT'){
       newStr = input.padStart(fullLen, fillStr) 
    } 
    else if(fillType === 'FILL_BOTH'){
        let index = (fullLen - input.length)/2 + input.length;
        newStr = input.padStart(index, fillStr);
        
        for(let i = 0; newStr.length < fullLen; i++ ){
             newStr+= fillStr;
               
        }
    }
    else{
        newStr = input.padEnd(fullLen, fillStr) 
    }

console.log(newStr)
}
strPad('star', 10, '-*-')
strPad('star', 8, '-*-', 'FILL_LEFT')
strPad('star', 8, '*', 'FILL_BOTH')

