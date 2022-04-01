const citiesOnly = (n) => {
    let res = []
    for (let index = 0; index <  n.length; index++) {
        res.push(n[index].key)
    }
    return res
}