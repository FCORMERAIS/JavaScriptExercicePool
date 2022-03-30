const flat = (arr,n) =>{
    let res = []
    if (typeof n === "undefined") {
        n= 1
    }
    while (0!= n) {
        for (let index = 0; index < arr.length; index++) {
            console.log(Array.isArray(arr[index]))
            if (Array.isArray(arr[index]) == false) {
                res.push(arr[index])
            }
        }
        console.log(n,arr.length)
        n--
    }
    return res
}