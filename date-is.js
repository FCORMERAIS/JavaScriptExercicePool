const isValid =(n) => {
    if (typeof n == 'number') {
        return true
    }
    if (typeof n.getTime() == 'number' && n != null) {
        return true
    }
    return false
} 