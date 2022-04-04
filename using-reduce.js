const adder = (n) => {  
    const initialValue = 0
    const sumWithInitial = n.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
    return sumWithInitial
}