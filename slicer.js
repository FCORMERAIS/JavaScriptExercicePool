const slice = (slice,n1, n2) =>{
    let type = 0
    if (typeof slice == "string") {
        slice = slice.split("")
        type = 1
    }
    let arr = []
    
    if ( typeof n1 == "undefined") {
    }else if (typeof n2 == "undefined") {
        if (n1 < 0) {
            n1 = slice.length + n1 
        }
        for (let index = n1; index < slice.length; index++) {
            arr.push(slice[index])  
        }
    }else {
        if (n1 < 0) {
            n1 = slice.length + n1 
        }
        if (n2 < 0) {
            n2 = slice.length + n2
        }
        for (let index = n1; index < n2; index++) {
            arr.push(slice[index])  
        }
    }
    if (type == 1) {
        return arr.join("")
    }
    return arr
}