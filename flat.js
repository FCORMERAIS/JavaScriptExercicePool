const flat = (arr,n) =>{
    let res = []
    let tempo = []
    if (typeof n === "undefined") {
        n= 1
    }
    if (n>4) {
        return arr
    }
    while (0 !== n) {
        tempo = []
        for (let index = 0; index < arr.length; index++) {
            // console.log(arr.length,index,arr,arr[index],Array.isArray(arr[index]))
            if (Array.isArray(arr[index]) == false) {
                res.push(arr[index])
            }else {
                for (let i = 0; i < arr[index].length; i++) {
                    console.log(arr[index][i])
                    if (Array.isArray(arr[index][i]) == false) {
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