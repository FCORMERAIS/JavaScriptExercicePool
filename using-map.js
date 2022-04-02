function citiesOnly(arr) {
    var res = arr.map(function (officer) {
        return officer.city
    });
    return res
}

function upperCasingStates(arr) {
    return arr.map(function (string) {
      let arr = string.split(" ");
      return arr
        .map(function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        })
        .join(" ");
    });
}