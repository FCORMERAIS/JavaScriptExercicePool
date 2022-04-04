const adder = (n) => {  
    const initialValue = 0
    const sumWithInitial = n.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
    return sumWithInitial
}

const sumOrMul = (arr,n) => {
    return records.reduce(function(n, record){
        if( record %2== 0) return sum * record; 
        else return sum+record;
    }, 0);
}

