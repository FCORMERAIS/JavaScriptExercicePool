const reverse = (n) => {
    let result = []
    for (let index = n.lenght; index > 0; index--) {
        result.push(n[index])
    }
    return result
}