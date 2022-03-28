const round = (n) => {
    let signe =0 
    if (n < 0) {
        signe = 1
    }
    n = Math.abs(n)
    if ((n % 1) <= 0.5) {
        n=n+1
    }else {
        n= n - (n%1)
    }
    if (signe == 1) {
        return -n
    }
    return n
}

const ceil =(n) => {

}

const floor =(n) => {

}

const trunc =(n) => {

}