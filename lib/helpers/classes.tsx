interface Options {
  extra: string | undefined
}

function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

function scopedClassMaker(prefix: string) {
  return function x(name ? : string, options ? : Options) {
    const result = [prefix, name].filter(Boolean).join('-');
    if (options && options.extra) {
      return [result, options && options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }
  }
}

export {
  scopedClassMaker
};
