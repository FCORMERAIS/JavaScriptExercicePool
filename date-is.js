const isValid =(n) => {
    let tempo = n.getTime
    if (isNaN(tempo) === true) {
        return false
    }
    if (typeof n == 'number') {
        return true
    }else if (typeof n.getTime === "number") {
        return true
    }
    return false
} 