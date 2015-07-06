import nested from "./nested-dependency";

let value = 'Dependency';

console.log(value, 'in ./dependency');
console.log(nested, 'in ./dependency');

export {value as value};
export {nested as nested};
