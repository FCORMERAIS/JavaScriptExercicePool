const reverse = (n) => {
    let result = []
    for (let index = n.lenght-1; index > 0; index--) {
        result = result.push(n[index])
    }
    return result
}