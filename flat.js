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
                for (let l = 0; l < array[index].length; l++) {
                    arr.splice(index+l, 0, arr[index][l]);
                }
            }
            arr = arr.filter(function(f) { return f !== arr[index] })
        }
    }
    return res
}