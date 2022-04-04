const every = (arr, fn) => arr.reduce((acc, val) => acc && fn(val), true)

const some = (arr, fn) => arr.reduce((acc, val) => acc || fn(val), false)

const none = (arr, fn) => arr.reduce((acc, val) => acc && !fn(val), true)