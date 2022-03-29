const flat = (arr,n) =>{
    let res = []
    if (typeof n === "undefined") {
        n= 1
    }
    for (let flatt = 0; flatt <= n; flatt++) {
        for (let index = 0; index < arr.length; index++) {
            if (Array.isArray(arr[index]) == false ) {
                res.push(arr[index])
            }else {
                for (let l = 0; l <= arr[index].length; l++) {
                    res.push(arr[index])
                }
            }
            arr = arr.filter(function(f) { return f !== arr[index] })
        }
    }
    return res
}
