# Peekable Array Iterator
This module allows iterating over an array (or any other object with an `[]` accessor and a `length` attribute, like a `string` for example) and creates an iterator for peeking at each iteration step.

## Example
```js
const PeekableArrayIterator = require('peekable-array-iterator')

const it = new PeekableArrayIterator('HelloWorld')

console.log(it.next().value) // prints 'H'
console.log(it.next().value) // prints 'e'

console.log(it.peek.next().value) // prints 'l'
console.log(it.peek.next().value) // prints 'l'
console.log(it.peek.next().value) // prints 'o'

console.log(it.next().value) // prints 'l'
console.log(it.next().value) // prints 'l'

for (const peek of it.peek) {
  console.log(peek) 
  // prints 'oWorld' in seperate lines
}
```
## API
#### `const it = new PeekableArrayIterator(container, [start])`
This creates a new iterator with the `container` to be iterated over (any object with an `[]` accessor and a `length` attribute, like an `array` or a `string`). Optionally, a `start` value can be passed to set the starting index. The starting index is 0 by default. The iterator (aswell, as the `peek` iterator) uses the standard interface for iterators [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators]. This is allows the usage in `for-of` loops.

#### `it.next()`
Return next entry. The returned `object` has the following form:
```
  {
    data: The next value
    done: `true`, until there is no next value available
  }
```

#### `it.peek`
Iterator starting at the current index. 

#### `it.peek.next()`
Same as `it.next()`, but won't modify the state of `it`.