const triangle = (str, n) => {
    let res = ""
    for (let i= 1;n>= i ; i++) {
        res += i*str
        res += '\n'
    }   
    return res
}