const isValid =(n) => {
    if (isNaN(n.getTime()) == true) {
        return false
    }
    if (typeof n == 'number') {
        return true
    }else if (typeof n.getTime() === "number") {
        return true
    }
    return false
} 