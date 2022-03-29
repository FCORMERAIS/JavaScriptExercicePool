const triangle = (str, n) => {
    let res = ""
    for (let i= 1;n>= i ; i++) {
        res += (str.repeat(i))
        res += '\n'
        if (i === n) {
            return res
        }
    }   
    return res
}