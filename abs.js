function isPositive(n) {
    return n > 0 ? true : false 
}

function abs(n) {
    if (n == -0 ){
        return 0
    }
    if (isPositive(n) == true) {
        return n
    }else {
        return -n
    }
}