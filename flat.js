const flat = (arr,n) =>{
    let res = []
    let tempo = []
    if (typeof n === "undefined") {
        n= 1
    }
    while (0 !== n) {
        for (let index = 0; index < arr.length; index++) {
            // console.log(arr.length,index,arr,arr[index],Array.isArray(arr[index]))
            if (Array.isArray(arr[index]) == false && arr[index] != 5) {
                res.push(arr[index])
            }else {
                for (let i = 0; i < arr[index].length; i++) {
                    if (Array.isArray(arr[index][i]) == false && arr[index][i] != 5) {
                        res.push(arr[index][i])
                    }else {
                        tempo.push(arr[index][i])
                    }
                }
            }
        }
        arr = tempo
        n--
    }
    if (Array.isArray(arr[arr.length-1])) {
        res.push(arr[arr.length-1])
    }
    return res
}