const filter = (arr, func) => {
    let res = []
    arr.map((cv,i,a) => func(cv,i,a) ? res.push(cv) : [])
    return res
}