const flat = (arr,n) =>{
    let res = []
    let tempo = []
    if (typeof n === "undefined") {
        n= 1
    }
    while (0!== n) {
        for (let index = 0; index < arr.length; index++) {
            console.log(Array.isArray(arr[index]) , arr[index])
            if (Array.isArray(arr[index]) == false) {
                res.push(arr[index])
            }else {
                for (let i = 0; i < arr.length[index]; i++) {
                    if (Array.isArray(arr[index]) == false) {
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
    return res
}