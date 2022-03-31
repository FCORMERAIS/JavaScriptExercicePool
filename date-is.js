const isValid =(n) => {
    console.log(n.getTime() !=NaN,n.getTime())
    if (typeof n == 'number') {
        return true
    }else if (typeof n.getTime() === "number" && n.getTime() !== NaN) {
        return true
    }
    return false
} 