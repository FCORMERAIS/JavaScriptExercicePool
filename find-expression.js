const findExpression  = (n) => {
    let res = ''
    let number = 1
    if (n%2 == 1) {
        return 'undefined'
    }
    while (number < n) {
        if (number*2 < n ) {
            number = number *2
            res+= ' *2'
        }else {
            number +=4
            res += ' +4'
        }
    }
}   