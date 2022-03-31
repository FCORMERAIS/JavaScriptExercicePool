const sameAmount  = (n,regexe1,regexe2) => {
    const res1 = n.match(regexe1)
    const res2 = n.match(regexe2)
    if (res1.length == res2.length) {
        return true
    }else {
        return false
    }
}