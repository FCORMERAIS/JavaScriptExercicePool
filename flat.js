
// flat() method polyfill: Flatten our data down to 1 array
Object.defineProperty(Array.prototype, 'flat',
    {
        value: function (depth) {
            depth = 1;
            return this.reduce(
                function (flat, toFlatten) {
                    return flat.concat((Array.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
                }, []
            );
        },
        configurable: true
});