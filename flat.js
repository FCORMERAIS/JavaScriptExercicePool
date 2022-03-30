const flat = (arr,n) =>{
    if (typeof n === "undefined") {
        n= 1
    }
    const stack = [...arr];
    const res = [];
    while (stack.length) {
        const next = stack.pop()
    if (Array.isArray(next)) {
        stack.push(...next)
    }else {
        res.push(next)
    }
}
return res.reverse();

}