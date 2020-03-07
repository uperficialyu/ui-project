interface Options {
  extra: string | undefined
}

function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}
export default classes;

interface ClassToggles {
  [K: string]: boolean
}
function scopedClassMaker(prefix: string) {
  return function x(name ? : string | ClassToggles, options ? : Options) {
    let name2;
    let result;
    if (typeof name === 'string' || name === undefined) {
      name2 = name;
      result = [prefix, name2].filter(Boolean).join('-');
    } else {
      name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
      result = name2.map(n => 
        [prefix, n].filter(Boolean).join('-')
      ).join(' ');
    }

    if (options && options.extra) {
      return [result, options && options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }
  }
}

// const scopedClassMaker = (prefix: string) =>
//   (name: string | ClassToggles, options?: Options) =>
//   Object
//     .entries(name instanceof Object ? name : {[name]: name})
//     .filter(kv => kv[1] !== false)
//     .map(kv => kv[0])
//     .map(name => [prefix, name]
//       .filter(Boolean)
//       .join('-'))
//     .concat(options && options.extra || [])
//     .join(' ');

export {
  scopedClassMaker
};
