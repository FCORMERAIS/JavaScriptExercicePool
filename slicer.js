const slice = (slice,n1, n2) =>{
    let type = 0
    if (typeof slice == "string") {
        slice = slice.split("")
        type = 1
    }
    let arr = slice
    if ( typeof n1 == "undefined") {
    }else if (typeof n2 == "undefined") {
        for (let index = n1; index < array.length; index++) {
            arr.push(array[index])  
        }
    }else {
        for (let index = n1; index < n2; index++) {
            arr.push(array[index])  
        }
    }
    if (type == 1) {
        return arr.join("")
    }
    return arr
}