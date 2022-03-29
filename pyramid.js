const pyramid = (str, n) => {
    let res = ""
    let space = ""
    for (let i=1;str.length>=i;i++) {
        space += " "
    }
    for (let i= 1;n>= i ; i++) {
        res += space.repeat(n-i)+(str.repeat(i*2 -1))
        if (i === n) {
            return res
        }else {
            res += '\n'
        }
    }   
    return res
}