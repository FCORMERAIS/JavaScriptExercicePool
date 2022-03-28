const round = (n) => {
    let signe =0 
    if (n < 0) {
        signe = 1
    }
    n = Math.abs(n)
    if ((n % 1) <= 0.5) {
        return (n+1)
    }else {
        return (n - (n%1))
    }
}

const ceil =(n) => {

}

const floor =(n) => {

}

const trunc =(n) => {

}