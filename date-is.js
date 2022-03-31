const isValid =(n) => {
    console.log(isNaN(5))
    if (typeof n == 'number') {
        return true
    }else if ((typeof n.getTime() === "number") && (isNaN(n.getTime()) === false)) {
        return true
    }
    return false
} 