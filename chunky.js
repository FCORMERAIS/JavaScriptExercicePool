const chunk = (arr,n) => {
    let res = []
    let result = []
    while (arr.length >= n) {
        res = arr.slice(0,n)
        arr = arr.slice(n,arr.length+1)
        result.push(res)
    }
    result.push(arr.slice(0,arr.length+1))
    return result
}
console.log(chunk(['a', 'b', 'c', 'd'], 2))