const isValid =(n) => {
    console.log(typeof n.getTime())
    if (typeof n == 'number') {
        return true
    }else if (typeof n.getTime() === "number") {
        return true
    }
    return false
} 