const reverse = (n) => {
    if (typeof n === 'string') {
        let result = ''
        for (let index = n.length-1; index >= 0; index--) {
            result += n[index]
        }
        return result
    }else {
        let arr = []
        for (let i = n.length - 1; i >= 0; i--) {
            arr.push(n[i])
        }
        return result
    }
}