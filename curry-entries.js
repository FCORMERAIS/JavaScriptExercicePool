function defaultCurry (obj) {
    return (replace) => {
        let res = Object.assign({},obj)
        Object.keys(replace).forEach((k)=>res[k]=replace[k])
        return res
    }
}

function mapCurry (func) {
    return (obj) => Object.fromEntries(Object.entries(obj).map(func))
}

const reduceCurry = (func) => {
    return (obj,iv) => Object.entries(obj).reduce(func, iv)
}

const filterCurry = (func) => {
    return (obj) =>  Object.fromEntries(Object.entries(obj).filter(func))
}

const reduceScore = (obj,iv) => reduceCurry((acc,[k,v]) => acc + v.shootingScore+ v.pilotingScore)(forceUsers(obj),iv)

const filterForce = (obj) => filterCurry(([k,v])=>v.shootingScore >= 80)(forceUsers(obj))

const mapAverage = (obj) => mapCurry(([k,v])=>{
    let nv = {...v,averageScore: (v.shootingScore+v.pilotingScore)/2}
    return [k,nv]
})(obj)

const forceUsers = filterCurry(([k,v]) => v.isForceUser)