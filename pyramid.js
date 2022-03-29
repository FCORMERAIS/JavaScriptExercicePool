const pyramid = (str, n) => {
    let res = ""
    for (let i= 1;n>= i ; i++) {
        res += (' '.repeat(n-i)*str.length) +(str.repeat(i*2 -1))
        if (i === n) {
            return res
        }else {
            res += '\n'
        }
    }   
    return res
}