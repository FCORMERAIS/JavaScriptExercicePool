const adder = (n) => {  
    const sumWithInitial = n.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
    return sumWithInitial
}