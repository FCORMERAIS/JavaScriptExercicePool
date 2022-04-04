const adder = (n,initialValue) => {  
    const sumWithInitial = n.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
    return sumWithInitial
}

const sumOrMul = (arr,initialValue) => arr.reduce(((a,b) => b%2 === 0 ? a*b : a+b), initialValue = initialValue || 0)


const funcExec  = (arr,initialValue) => arr.reduce(((a,b) => b(a)), initialValue = initialValue || 0)
