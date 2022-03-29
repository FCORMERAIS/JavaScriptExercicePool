const chunk = (arr,n) => {
    let res = []
    let result = []
    while (arr.length > n) {
        res.push(arr.slice(0,n+1))
        arr = arr.slice(n,arr.length+1)
        result.push(res)
    }
    return res
}