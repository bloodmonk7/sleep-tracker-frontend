# Below is my Leetcode challenge solution along with problem:

```
Object.prototype.findPath = function (path) {
  const keys = path.split('.');
  let result = this;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return undefined;
    }
  }

  return result;
};

var obj = {
  a: {
    b: {
      c: 12
    }
  }
};

console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined

```
