const isValid =(n) => {
    if (n=='') {
        return false
    }
    if (typeof n == 'number') {
        return true
    }
    if (typeof n.getTime() == 'number') {
        return true
    }
    return false
} 