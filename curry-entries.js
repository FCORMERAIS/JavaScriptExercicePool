const defaultCurry = (obj) => {
    return (replace) => {
        let res = Object.assign({},obj)
        Object.keys(replace).forEach((k)=>res[k]=replace[k])
        return res
    }
}