const isValid =(n) => {
    console.log(new Date(''))
    if (typeof n == 'number') {
        return true
    }else if (typeof n.getTime() === "number") {
        return true
    }
    return false
} 