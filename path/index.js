const path = require('path')


console.log(path.dirname('/Users/yogeshmandyal/Desktop/nodejs practice/path/index.js'))
console.log(path.basename('/Users/yogeshmandyal/Desktop/nodejs practice/path/index.js'))
console.log(path.parse('/Users/yogeshmandyal/Desktop/nodejs practice/path/index.js'))
console.log(path.extname('/Users/yogeshmandyal/Desktop/nodejs practice/path/index.js'))
console.log(path.normalize('/Users/yogeshmandyal/Desktop/nodejs practice/path/index.js'))

const root = path.parse('/Users/yogeshmandyal/Desktop/nodejs practice/path/index.js')

console.log(root.dir)