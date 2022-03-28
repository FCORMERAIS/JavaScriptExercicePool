const reverse = (n) => {
    if (typeof n === 'string') {
        let result = ''
        for (let index = n.length-1; index >= 0; index--) {
            result += n[index];
        }
        return result
    }else {
        var result = []
        for (let index = n.lenght-1; index >= 0; index--) {
            result.push(n[index])
        }
        return result
    }
}