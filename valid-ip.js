const findIP  = (data) => {
    const reg = /[1-9]|[1-9][0-9]|[1-2][0-9][0-9][.]{3}[1-9]|[1-9][0-9]|[1-2][0-9][0-9][.]/
    return data.match(reg)
}