const flow = (arr) => (...args) => {
    let temp = arr[0](...args)
    arr = arr.slice(1)
    for (let each of arr) {
        temp = each.apply(x, [temp])
    }
    return temp
}