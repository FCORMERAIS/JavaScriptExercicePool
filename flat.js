const flat = (arr,n) =>{
    let res = []
    if (typeof n === "undefined") {
        n= 1
    }
    while (0!= n) {
        for (let index = 0; index < arr.length; index++) {
            console.log(Array.isArray(arr[index]))
        }
        n--
    }
    return res
}