const slice = (slice,n1, n2) =>{
    let type = 0
    if (typeof slice == "string") {
        slice = slice.split("")
        type = 1
    }
    let arr = slice
    if ( typeof n1 == "undefined") {
    }else if (typeof n2 == "undefined") {
        for (let index = n1; index < slice.length; index++) {
            arr.push(slice[index])  
        }
    }else {
        for (let index = n1; index < n2; index++) {
            arr.push(slice[index])  
        }
    }
    if (type == 1) {
        return arr.join("")
    }
    return arr
}
console.log(slice('abcdef', 2))