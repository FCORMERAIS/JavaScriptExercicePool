const defaultCurry = (obj1) => {
    return (obj2) => {
        let res = Object.assign({},obj1)
        Object.keys(obj2).forEach((k)=>res[k]=obj2[k])
        return res
    }
}