const chunk = (arr,n) => {
    let res = []
    while (arr.length > n) {
        res.push(arr.slice(0,n+1))
        arr = arr.slice(n+1,arr.length+1)
    }
    return res
}