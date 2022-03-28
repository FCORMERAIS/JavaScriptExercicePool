const round = (n) => {
    let signe =0 
    if (n < 0) {
        signe = 1
    }
    n = Math.abs(n)
    if ((n % 1) <= 0.5) {
        n= n - (n%1)
    }else {
        n=n+ (1-(n%1))
    }
    if (signe == 1) {
        return -n
    }
    return n
}

const ceil =(n) => {
    if (n % 1 == 0) {
        return n
    }
    if (n < 0) {
        return n - (n%1)
    }else {
        return (n + (1-(n%1)))
    }
}

const floor =(n) => {
    let signe = 0 
    if (n < 0) {
        signe = 1
    }
    n = n - (n%1) 
    if (signe == 1) {
        return (-n)-1
    }
    return n
}

const trunc =(n) => {

}