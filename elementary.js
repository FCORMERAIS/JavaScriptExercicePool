const multiply = (a,b) => {
    let count = 0
    let result = 0
    let signe = 0 
    if (b < 0) {
        signe = 1
    }
    while (Math.abs(b) > count) {
        result = result+a
        count = count+1
    }
    if (signe == 1 ){
        return -result
    }
    return result
}

const divide  = (a,b) => {
    let result = 0
    let signe = 0
    if (b < 0 || a < 0) {
        signe = 1
    }
    if (b < 0 && a < 0) {
        signe = 0
    }
    a = Math.abs(a)
    b = Math.abs(b)
    while (a >= b) {
        result = result +1 
        a = a-b
    }
    if (signe == 1 ){
        return -result
    }
    return result
}

const modulo  = (a,b) => {
    while (a >= b) {
        a = a-b
    }
    return a
}