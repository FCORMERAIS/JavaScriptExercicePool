const flat = (arr,n = 1) =>{
    let res = []
    let tempo = []
    let test = 0
    while (0 !== n) {
        tempo = []
        test = 0
        for (let index = 0; index < arr.length; index++) {
            if (Array.isArray(arr[index]) == false) {
                res.push(arr[index])
            }else {
                for (let i = 0; i < arr[index].length; i++) {
                        if (Array.isArray(arr[index][i]) == false) {
                        res.push(arr[index][i])
                    }else {
                        tempo.push(arr[index][i])
                    }
                }
                test++
            }
        }
        arr = tempo
        n--
        if (test == 0) {
            return res
        }
    }
    if (Array.isArray(arr[arr.length-1])) {
        res.push(arr[arr.length-1])
    }
    return res
}