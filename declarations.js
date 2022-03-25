const escapeStr = '`\\/"\''
const arr = [4,'2']
let undef
const obj = {str : 'string',num : 1,bool : true,undef : undefined }
const nested = {
    arr:[4,undefined,'2'],
    obj:{str:obj.str,num:obj.num,bool:obj.bool}
}

Object.freeze(nested.arr)
Object.freeze(nested.obj);
Object.freeze(nested);
Object.freeze(obj);
Object.freeze(arr);