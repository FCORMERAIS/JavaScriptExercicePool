const flat = (arr,n) =>{
    if (typeof n === "undefined") {
        n= 1
    }
    const stack = [...arr];
    const res = [];
    while (n) {
        const next = stack.pop()
    if (Array.isArray(next)) {
        stack.push(...next)
    }else {
        res.push(next)
    }
}
return res.reverse();

}