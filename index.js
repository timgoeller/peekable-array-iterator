class PeekableArrayIterator {
  constructor (array, start = 0) {
    this.array = array
    this.i = start
  }

  [Symbol.iterator] () { return this }

  next () {
    const self = this
    if (this.i < this.array.length) {
      this.peek = (function * peek () {
        for (let peekI = self.i; peekI < self.array.length; peekI++) {
          yield self.array[peekI]
        }
        return
      })()

      return { done: false, value: this.array[this.i++] }
    }
    return { done: true, value: undefined }
  }
}

module.exports = PeekableArrayIterator
