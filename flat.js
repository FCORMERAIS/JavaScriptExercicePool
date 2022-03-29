const flat = (arr,n) =>{
    let res = []
    if (typeof n === "undefined") {
        n= 1
    }
    for (let flatt = 0; flatt <= n; flatt++) {
        console.log(n)
        for (let index = 0; index < arr.length; index++) {
            if (Array.isArray(arr[index])) {
                for (let i = 0; i < arr[index].length; i++) {    
                    if (Array.isArray(arr[index][i]) == false ) {
                        res.push(arr[index][i])
                    }else {
                        arr.push(arr[index][i])
                    }
                }
            }else {
                res.push(arr[index])
            }
            arr = arr.filter(function(f) { return f !== arr[index] })
        }
    }
    for (let index = 0; index < arr.length; index++) {
        res.push(arr[index])
    }
    return res
}