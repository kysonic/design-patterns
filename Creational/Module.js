// IIFE
const ModuleA = (() => {
  let myPrivateVariable = 'hello world';
  const myPrivateMethod = (value) => {
    myPrivateVariable = value;
  }
  return {
    someVariable: 12,
    myPrivateMethod,
  }
})();