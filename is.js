is.num = (n) => typeof n == "number" ? true : false
is.nan = (n) => typeof n == "number" ? false : true
is.str = (n) => typeof n == "string"? true : false
is.bool =(n) => typeof n == "boolean" ? true : false
is.undef = (n) => typeof n == undefined ? true : false
is.def =(n) => typeof n == undefined ? false : true
is.arr = (n) => Array.isArray(n)
is.obj = (n) => typeof n == 'object' ? true : false
is.fun = (n) => typeof n === "function" ? true : false
is.truthy = (n) => n && true
is.falsy = (n) => n && false