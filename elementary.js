const multiply = (a,b) => {
    let count = 0
    let result = 0
    while (b != count) {
        result = result+a
        count = count+1
    }
    return result
}

const divide  = (a,b) => {
    let result = 0
    while (a >= b) {
        result = result +1 
        a = a-b
    }
    return result
}

const modulo  = (a,b) => {
    while (a >= b) {
        a = a-b
    }
    return a
}