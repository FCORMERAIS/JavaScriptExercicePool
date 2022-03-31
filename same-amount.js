const sameAmount  = (n,regexe1,regexe2) => {
    const reg1 = new RegExp(regexe1,'g')
    const reg2 = new RegExp(regexe2,'g')
    const res1 = n.match(reg1)
    const res2 = n.match(reg2)
    if (res1 == null && res2 == null) {
        return true
    }else if (res1 == null || res2 == null) {
        return false
    }else if (res1.length === res2.length) {
        return true
    }else {
        return false
    }
}