const findExpression  = (n) => {
    let res = '1 '
    let number = 1
    if (n%2 == 1) {
        return 'undefined'
    }
    while (number < n) {
        if (number*2 <= n ) {
            number = number *2
            res+= mul2
        }else {
            number +=4
            res += add4 
        }
    }
    console.log(res)
    return res
}
const add4 = '+4'
const mul2 = '*2'