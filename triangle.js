const triangle = (str, n) => {
    let res = ""
    for (let i= 1;n>= i ; i++) {
        res += (i*String(str))
        res += '\n'
        if (i === n) {
            return res
        }
    }   
    return res
}