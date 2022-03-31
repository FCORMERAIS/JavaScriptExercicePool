const isValid =(n) => {
    if (typeof n.getTime() == 'number') {
        return true
    }
    return false
} 