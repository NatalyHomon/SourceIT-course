function getDate(date){
    const reg = /^(0[1-9]|[1-2]\d|3[0-1]|\d)-(0[1-9]|1[0-2]|\d)-([0-2]\d{3})$/;
    try{
        if(reg.test(date) == false ){
            throw new Error ('Wrong type of date');
        };

        let rightDate = date.replace(reg, '$3-$2-$1');
        const reqDate = new Date(rightDate);
    
        return reqDate;}
    catch(e){
        console.log(e.message);
    }
}
const result = getDate('11-12-2021');
console.log(result);
