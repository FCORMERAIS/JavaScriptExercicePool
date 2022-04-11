function defaultCurry (obj,replace) {
    let res = Object.assign({},obj)
    Object.keys(replace).forEach((k)=>res[k]=replace[k])
    return res
}

function mapCurry (func,obj) {

}