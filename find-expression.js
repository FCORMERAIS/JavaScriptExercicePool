const add4 = '+4'
const mul2 = '*2'

const findExpression  = (n) => {
    let res = '1'
    let number = 1
    if (n%2 == 1) {
        return 'undefined'
    }
    while (number < n) {
        if ((number-n) %4 != 0 ) {
            number = number *2
            res+= ' '+mul2
        }else {
            number +=4
            res +=' '+ add4 
        }
    }
    return res
}