const isValid =(n) => {
    if (typeof n == 'number') {
        return false
    }
    if (typeof n.getTime() == 'number') {
        return true
    }
    return false
} 