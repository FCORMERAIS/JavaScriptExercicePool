const flat = (arr,n) =>{
    let res = []
    if (typeof n === "undefined") {
        n= 1
    }
    while (0!== n) {
        for (let index = 0; index < arr.length; index++) {
            if (Array.isArray(arr[index]) == false) {
                res.push(arr[index])
                arr.splice(index, arr.length+1)
            }else {
                for (let i = 0; i < arr.length[index]; i++) {
                    if (Array.isArray(arr[index]) == false) {
                        res.push(arr[index][i])
                    }else {
                        arr.push(arr[index][i])
                    }
                    arr.splice(arr.indexOf(arr[index]), 1);
                }
            }
        }
        n--
    }
    return res
}