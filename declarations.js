let str 
let num 
let bool 
let undef
let escapeStr
let arr 
const obj = {
    str: '',
    num: 0,
    bool:0,
    undef:0
  }; 


arr = [4,'2']
escapeStr = '`\\/"\''
str = 'string'
num = 1
bool = true
undef = undefined  
obj.str = str,obj.bool=bool,obj.undef=undef,obj.num =num
const nested = {
    arr:[4,undefined,'2'],
    obj: {
        str :obj.str,
        num:obj.num,
        bool:obj.bool
    }
}

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);