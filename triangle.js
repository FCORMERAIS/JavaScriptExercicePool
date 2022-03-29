const triangle = (str, n) => {
    let res = ""
    for (let i= 1;n>= i ; i++) {
        res += (str.repeat(i))
        if (i === n) {
            return res
        }else {
            res += '\n'
        }
    }   
    return res
}