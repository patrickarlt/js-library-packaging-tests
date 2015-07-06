import {value, nested} from "./dependency";

console.log(value, 'in ./index');
console.log(nested, 'in ./index');

export {value as value};
export {nested as nested};
