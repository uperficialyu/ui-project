import { FormValue } from './Form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: (value: string) => Promise<string>
}

type FormRules = Array<FormRule>

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

interface FormErrors {
  [K: string]: string[];
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.map( rule => {
    const value = formValue[rule.key];
    if (rule.required) {
      if (value === undefined || value === null || value === '') {
        addError(rule.key, '必填')
        // if (errors[rule.key] === undefined) {
        //   errors[rule.key] = [];
        // }
        // errors[rule.key].push('必填');
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value!.length < rule.minLength) {
        addError(rule.key, '太短')
        // if (errors[rule.key] === undefined) {
        //   errors[rule.key] = [];
        // }
        // errors[rule.key].push('太短')
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value!.length > rule.maxLength) {
        addError(rule.key, '太长')
        // if (errors[rule.key] === undefined) {
        //   errors[rule.key] = [];
        // }
        // errors[rule.key].push('太短')
      }
    }
  });
  return errors;
}

// function isEmpty(value: any) {
//   return value === undefined || value === null || value === '';
// }

// export function noError(errors: any) {
//   return Object.keys(errors).length === 0;
// }

// type OneError = string | Promise<string>;

// const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void): void => {
//   let errors: { [key: string]: OneError[] } = {};
//   const addError = (key: string, error: OneError) => {
//     if (errors[key] === undefined) {
//       errors[key] = [];
//     }
//     errors[key].push(error);
//   };
//   rules.map(rule => {
//     const value = formValue[rule.key];
//     if (rule.validator) {
//       const promise = rule.validator(value);
//       addError(rule.key, promise);
//     }
//     if (rule.required && isEmpty(value)) {
//       addError(rule.key, 'required');
//     }
//     if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
//       addError(rule.key, 'minLength');
//     }
//     if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
//       addError(rule.key, 'maxLength');
//     }
//     if (rule.pattern) {
//       if (!(rule.pattern.test(value))) {
//         addError(rule.key, 'pattern');
//       }
//     }
//   });
//   function hasError(item: [string, undefined] | [string, string]): item is [string, string] {
//     return typeof item[1] === 'string';
//   }
//   const flattenErrors = flat(Object.keys(errors).map(
//     key => errors[key].map<[string, OneError]>(error => [key, error]))
//   );
//   const newPromises = flattenErrors.map(
//     ([key, promiseOrString]) => {
//       const promise = (promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString));
//       return promise.then<[string, undefined], [string, string]>(() => [key, undefined], (reason) => [key, reason]);
//     }
//   );
//   Promise.all(newPromises).then(results => {
//     callback(zip(results.filter<[string, string]>(hasError)));
//   });
// };
export default Validator;

// function flat<T>(array: Array<T | T[]>) {
//   const result: T[] = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] instanceof Array) {
//       result.push(...array[i] as T[]);
//     } else {
//       result.push(array[i] as T);
//     }
//   }
//   return result;
// }

// function zip(kvList: Array<[string, string]>) {
//   const result: { [key: string]: string[] } = {};
//   kvList.map(([key, value]) => {
//     result[key] = result[key] || [];
//     result[key].push(value);
//   });
//   return result;
// }

// function fromEntries(array: Array<[string, string[]]>) {
//   const result: { [key: string]: string[] } = {};
//   for (let i = 0; i < array.length; i++) {
//     result[array[i][0]] = array[i][1];
//   }
//   return result;
// }