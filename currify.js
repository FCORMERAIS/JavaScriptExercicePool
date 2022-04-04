function currify(fn, ...values) {
    return (...next) => {
      if (Number.isNaN(fn(...values, ...next))) {
        return currify(fn, ...values, ...next);
      } else {
        return fn(...values, ...next);
      }
    };
  }