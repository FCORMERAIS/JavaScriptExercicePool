const reverse = (n) => {
    var result = []
    for (let index = n.lenght-1; index > 0; index--) {
        result.push(n[index])
    }
    return result
}