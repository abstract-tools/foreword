# API

- [Basics](#basics)
  - [add](#add)
  - [always](#always)
  - [and](#and)
  - [ap](#ap)
  - [apply](#apply)
  - [ascend](#ascend)
  - [ascendBy](#ascendBy)
  - [between](#between)
  - [both](#both)
  - [branch](#branch)
  - [call](#call)
  - [clamp](#clamp)
  - [compare](#compare)
  - [complement](#complement)
  - [compose](#compose)
  - [curry](#curry)
  - [dec](#dec)
  - [descend](#descend)
  - [descendBy](#descendBy)
  - [divide](#divide)
  - [either](#either)
  - [equal](#equal)
  - [equalBy](#equalBy)
  - [flip](#flip)
  - [gt](#gt)
  - [gte](#gte)
  - [id](#id)
  - [inc](#inc)
  - [isEven](#isEven)
  - [isOdd](#isOdd)
  - [lt](#lt)
  - [lte](#lte)
  - [match](#match)
  - [max](#max)
  - [maxBy](#maxBy)
  - [min](#min)
  - [minBy](#minBy)
  - [mod](#mod)
  - [multiply](#multiply)
  - [negate](#negate)
  - [not](#not)
  - [on](#on)
  - [or](#or)
  - [pipe](#pipe)
  - [pow](#pow)
  - [rem](#rem)
  - [subtract](#subtract)
  - [unless](#unless)
  - [when](#when)
- [Array](#array)
  - [append](#array-append)
  - [concat](#array-concat)
  - [concatMap](#array-concatMap)
  - [countBy](#array-countBy)
  - [drop](#array-drop)
  - [dropWhile](#array-dropWhile)
  - [every](#array-every)
  - [filter](#array-filter)
  - [find](#array-find)
  - [get](#array-get)
  - [gets](#array-gets)
  - [groupBy](#array-groupBy)
  - [head](#array-head)
  - [includes](#array-includes)
  - [indexOf](#array-indexOf)
  - [init](#array-init)
  - [isEmpty](#array-isEmpty)
  - [last](#array-last)
  - [length](#array-length)
  - [map](#array-map)
  - [partition](#array-partition)
  - [prepend](#array-prepend)
  - [range](#array-range)
  - [reduce](#array-reduce)
  - [reject](#array-reject)
  - [reverse](#array-reverse)
  - [scan](#array-scan)
  - [slice](#array-slice)
  - [some](#array-some)
  - [sort](#array-sort)
  - [sortBy](#array-sortBy)
  - [sortWith](#array-sortWith)
  - [span](#array-span)
  - [tail](#array-tail)
  - [take](#array-take)
  - [takeWhile](#array-takeWhile)
  - [unique](#array-unique)
  - [uniqueBy](#array-uniqueBy)
  - [zip](#array-zip)
- [Maybe](#maybe)
  - [encase](#maybe-encase)
  - [isNothing](#maybe-isNothing)
  - [map](#maybe-map)
  - [toArray](#maybe-toArray)
  - [withDefault](#maybe-withDefault)
- [Object](#object)
  - [concat](#object-concat)
  - [every](#object-every)
  - [filter](#object-filter)
  - [find](#object-find)
  - [get](#object-get)
  - [gets](#object-gets)
  - [includes](#object-includes)
  - [isEmpty](#object-isEmpty)
  - [length](#object-length)
  - [map](#object-map)
  - [reject](#object-reject)
  - [some](#object-some)
  - [update](#object-update)
- [String](#string)
  - [append](#string-append)
  - [concat](#string-concat)
  - [drop](#string-drop)
  - [dropWhile](#string-dropWhile)
  - [includes](#string-includes)
  - [indexOf](#string-indexOf)
  - [isEmpty](#string-isEmpty)
  - [join](#string-join)
  - [length](#string-length)
  - [repeat](#string-repeat)
  - [replace](#string-replace)
  - [reverse](#string-reverse)
  - [search](#string-search)
  - [slice](#string-slice)
  - [span](#string-span)
  - [split](#string-split)
  - [take](#string-take)
  - [takeWhile](#string-takeWhile)
  - [toLower](#string-toLower)
  - [toUpper](#string-toUpper)
  - [trim](#string-trim)

---

<div id="basics" class="section-name"></div>

## Basics
```javascript
const F = require('foreword')
// or
const { add, always, ... } = require('foreword')
```

<div id="add" class="section-name"></div>

### add
`Number -> Number -> Number`

Adds two numbers.

```javascript
const add2 = add(2)
add2(2) //=> 4
```

<div id="always" class="section-name"></div>

### always
`a -> b -> a`

Returns its first argument.

```javascript
const True = always(true)
True(false) //=> true
```

<div id="and" class="section-name"></div>

### and
`a -> b -> a | b`

Returns `true` if both values are `true`.

```javascript
const test = and(true)
test(false) //=> false
```

<div id="ap" class="section-name"></div>

### ap
`[a -> b] -> [a] -> [b]`

Applies a list of functions over a list of values.

```javascript
const f = ap([mul(2), add(3)])
f([1, 2, 3]) //=> [ 2, 4, 6, 4, 5, 6 ]
```

<div id="apply" class="section-name"></div>

### apply
`(* -> a) -> [*] -> a`

Applies a list of arguments over a function, which can aid in partial application.

```javascript
const adding = apply(add)
adding([1, 1]) //=> 2
```

<div id="ascend" class="section-name"></div>

### ascend
`(a, a) -> Number`

Takes two comparables and returns a number for sorting in ascending order.

```javascript
const ascending = A.sort(ascend)
ascending([3, 1, 2]) //=> [ 1, 2, 3 ]
```

<div id="ascendBy" class="section-name"></div>

### ascendBy
`(a -> b) -> (a, a) -> Number`

Takes a function and applies it over two comparable values for sorting in ascending order.

```javascript
const sortByName = compose(A.sort, ascendBy(O.get('name')))
sortByName([{ name: 'bob' }, { name: 'alice' }]) //=> [ { name: 'alice' }, { name: 'bob' } ]
```

<div id="between" class="section-name"></div>

### between
`(Number, Number) -> Number -> Boolean`

Determines if a number is between two predicate numbers.

```javascript
const f = between(0, 10)
f(5) //=> true
f(20) //=> false
```

<div id="both" class="section-name"></div>

### both
`(a -> Boolean, a -> Boolean) -> a -> Boolean`

Applies a value over two predicate functions, returns the result of an `and` comparison. Short-circuits if the first predicate returns false.

```javascript
const f = both(gt(10), lt(20))
f(15) //=> true
f(30) //=> false
```

<div id="branch" class="section-name"></div>

### branch
`(a -> Boolean, a -> b, a -> b) -> a -> b`

If the predicate is matched, apply the first function, otherwise apply the second.

```javascript
const f = branch(gt(10), dec, inc)
f(11) //=> 10
f(9) //=> 10
```

<div id="call" class="section-name"></div>

### call
`(* -> a) -> * -> a`

Like apply, but using function arguments instead of an array of arguments.

```javascript
const addArgs = call(add) 
addArgs(1, 2) //=> 3
```

<div id="clamp" class="section-name"></div>

### clamp
`(Number, Number) -> Number -> Number`

Retricts a number to be within a range.

```javascript
const f = clamp(1, 10)
f(0) //=> 1
f(5) //=> 5
f(20) //=> 10
```

<div id="compare" class="section-name"></div>

### compare
`((a, a) -> Boolean) -> (a, a) -> Number`

Creates a function that compares two values, to be used with sorting functions.

```javascript
const descend = compare((a, b) => a > b)
const sortDescending = A.sort(descend)
sortDescending([3, 1, 2]) //=> [ 3, 2, 1 ]
```

<div id="complement" class="section-name"></div>

### complement
`(a -> Boolean) -> a -> Boolean`

Returns the opposite boolean value that the predicate returned.

```javascript
const notOne = complement(equal(1))
notOne(1) //=> false
```

<div id="compose" class="section-name"></div>

### compose
`(b -> c, a -> b) -> a -> c`

Applies value through two functions, from right to left.

```javascript
const f = compose(Math.sqrt, add(1))
f(99) //=> 10
```

<div id="dec" class="section-name"></div>

### dec
`Number -> Number`

Decrements a number.

```javascript
dec(10) //=> 9
```

<div id="divide" class="section-name"></div>

### divide
`Number -> Number -> Number`

Divides two numbers.

```javascript
const divideByTwo = divide(2)
divideByTwo(10) //=> 5
```

<div id="descend" class="section-name"></div>

### descend
`(a, a) -> Number`

Takes two comparables and returns a number for sorting in descending order.

```javascript
const sortDescending = A.sort(descend)
sortDescending([3, 1, 2]) //=> [ 3, 2, 1 ]
```

<div id="descendBy" class="section-name"></div>

### descendBy
`(a -> b) -> (a, a) -> Number`

Takes a function and applies it over two comparable values for sorting in descending order.

```javascript
const descendingByName = compose(A.sort, descendBy(O.get('name')))
descendingByName([{ name: 'alice' }, { name: 'bob' }])
//=> [ { name: 'bob' }, { name: 'alice' } ]
```

<div id="either" class="section-name"></div>

### either
`(a -> Boolean, a -> Boolean) -> a -> Boolean`

Applies a value over two predicate functions, returns the result of an `or` comparison. Short-circuits if the first predicate returns true.

```javascript
const f = either(gt(10), isEven)
f(15) //=> true
f(5) //=> false
f(4) //=> true
```

<div id="equal" class="section-name"></div>

### equal
`a -> a -> Boolean`

Returns the result of comparing two values.

```javascript
const equalABC = equal('abc')
equalABC('abc') //=> true
equalABC('xyz') //=> false
```

<div id="equalBy" class="section-name"></div>

### equalBy
`(a -> b) -> (a, a) -> Boolean`

Returns the result of comparing two values, after applying a function over the values

```javascript
const equalByAbs = equalBy(Math.abs)
equalByAbs(5, -5) //=> true
```

<div id="flip" class="section-name"></div>

### flip
`(a -> b -> c) -> b -> a -> c`

Reverses the order of the first two arguments of the provided function.

```javascript
const gt_ = flip(gt)
gt_(1)(2) //=> false
```

<div id="gt" class="section-name"></div>

### gt
`a -> a -> Boolean`

Determines if a value is greater.

```javascript
const gtOne = gt(1)
gtOne(2) //=> true

const gtA = gt('a')
gtA('b') //=> true
```

<div id="gte" class="section-name"></div>

### gte
`a -> a -> Boolean`

Determines if a value is greater than or equal.

```javascript
const gteOne = gte(1)
gteOne(1) //=> true
gteOne(2) //=> true
gteOne(0) //=> false
```

<div id="id" class="section-name"></div>

### id
`a -> a`

Returns itself.

```javascript
id('a') //=> 'a'

const filterById = A.filter(id)
filterById([0, 1, null, 'test']) //=> [ 1, 'test' ]
```

<div id="inc" class="section-name"></div>

### inc
`Number -> Number`

Increments a number.

```javascript
inc(10) //=> 11
```

<div id="isEven" class="section-name"></div>

### isEven
`Number -> Boolean`

Determines if a number is even.

```javascript
isEven(10) //=> true
```

<div id="isOdd" class="section-name"></div>

### isOdd
`Number -> Boolean`

Determines if a number is odd.

```javascript
isOdd(9) //=> true
```

<div id="lt" class="section-name"></div>

### lt
`a -> a -> Boolean`

Determines if a value is lesser.

```javascript
const ltTwo = lt(2)
ltTwo(1) //=> true
```

<div id="lte" class="section-name"></div>

### lte
`a -> a -> Boolean`

Determines if a value is less than or equal.

```javascript
const lteOne = lte(1)
lteOne(1) //=> true
lteOne(2) //=> false
```

<div id="match" class="section-name"></div>

### match
`[a -> b?] -> a -> b?`

Contains a list of functions that return a value or `undefined`, working well with [when](#function-when), [unless](#function-unless), and [branch](#function-branch). Provide a function that always returns a value at the end, to avoid the case where no matches are found.

```javascript
const f = match([
  when(lt(10), inc),
  when(gt(10), dec),
  when(always(true), id)
])

f(1) //=> 2
f(15) //=> 14
f(10) //=> 10
```

<div id="max" class="section-name"></div>

### max
`a -> a -> a`

Returns the larger value.

```javascript
const maxFour = max(4)
maxFour(9) //=> 9
```

<div id="maxBy" class="section-name"></div>

### maxBy
`(a -> b) -> a -> a -> a`

Returns the larger value after applying a transformation to both values.

```javascript
const square = n => n * n

maxBy(square)(-3)(2) //=> -3
A.reduce(call(maxBy(square)), 0)([1, -3, 2, -2]) //=> -3
```

<div id="min" class="section-name"></div>

### min
`a -> a -> a`

Returns the smaller value.

```javascript
const minFour = min(4)
minFour(9) //=> 4
```

<div id="minBy" class="section-name"><div>

### minBy
`(a -> b) -> a -> a -> a`

Returns the smaller value after applying a transformation to both values.

```javascript
const square = n => n * n

minBy(square)(-3)(2) //=> 2
```

<div id="mod" class="section-name"></div>

### mod
`Number -> Number -> Number`

Behaves like the mathematical modulo operator.

```javascript
const f = mod(-20)
f(3) //=> 1
```

<div id="multiply" class="section-name"></div>

### multiply
`Number -> Number -> Number`

Multiplies two numbers.

```javascript
const mulByTwo = multiply(2)
mulByTwo(5) //=> 10
```

<div id="negate" class="section-name"></div>

### negate
`Number -> Number`

Negated number.

```javascript
negate(10) //=> -10
```

<div id="not" class="section-name"></div>

### not
`Boolean -> Boolean`

Returns the opposite boolean value.

```javascript
not(true) //=> false
```

<div id="on" class="section-name"></div>

### on
`(b -> b -> c, a -> b) -> (a, a) -> c`

Applies a binary function over a unary function twice.

```javascript
const sameLength = on(equal, S.length)
sameLength('hey', 'now') //=> true
```

<div id="or" class="section-name"></div>

### or
`Boolean -> Boolean -> Boolean`

Returns `true` if one or both values are `true`.

```javascript
const orTrue = or(true)
orTrue(false) //=> true
```

<div id="pipe" class="section-name"></div>

### pipe
`[a -> b] -> a -> b`

Applies a sequence of transformations over a value.

```javascript
const f = pipe([
  add(1),
  Math.sqrt
])

f(99) //=> 10
```

<div id="pow" class="section-name"></div>

### pow
`Number -> Number -> Number`

Returns the power.

```javascript
const powTwo = pow(2)
powTwo(-2) //=> 4
```

<div id="rem" class="section-name"></div>

### rem
`Number -> Number -> Number`

Returns the remainder.

```javascript
const remThree = rem(3)
remThree(-20) //=> -2
```

<div id="subtract" class="section-name"></div>

### subtract
`Number -> Number -> Number`

Subtracts two numbers.

```javascript
const subTwo = subtract(2)
subTwo(10) //=> 8
```

<div id="unless" class="section-name"></div>

### unless
`(a -> Boolean, a -> b) -> a -> b?`

If the predicate is not matched, run a transformer function, otherwise return `undefined`.

```javascript
const incGtTen = unless(lt(10), inc)
incGtTen(15) //=> 16
incGtTen(5) //=> 5
```

<div id="when" class="section-name"></div>

### when
`(a -> Boolean, a -> b) -> a -> b?`

If the predicate is matched, run a transformer function, otherwise return `undefined`.

```javascript
const incLtTen = when(lt(10), inc)
incLtTen(5) //=> 6
```

---

<div id="array" class="section-name"></div>

## Array
```javascript
const A = require('foreword/array')
```

<div id="array-append" class="section-name"></div>

### append
`a -> [a] -> [a]`

Adds a value to the end of an array.

```javascript
const f = A.append(4)
f([1, 2, 3]) //=> [ 1, 2, 3, 4 ]

const g = A.append([4])
g([1, 2, 3]) //=> [ 1, 2, 3, [ 4 ] ]
```

<div id="array-concat" class="section-name"></div>

### concat
`[[a]] -> [a]`

Concatenate an array of arrays into a single array, removing one level of nesting.

```javascript
A.concat([[1, 2], [3], [4, 5]]) //=> [ 1, 2, 3, 4, 5 ]
```

<div id="array-concatMap" class="section-name"></div>

### concatMap
`(a -> [b]) -> [a] -> [b]`

Concatenates the result of a map function.

```javascript
const duplicate = A.concatMap(x => [x, x])
duplicate([1, 2, 3]) //=> [ 1, 1, 2, 2, 3, 3 ]

const oneToX = A.concatMap(x => A.range(1, inc(x)))
oneToX([1, 2, 3]) //=> [ 1, 1, 2, 1, 2, 3 ]
```

<div id="array-countBy" class="section-name"></div>

### countBy
`(a -> b) -> [a] -> {b: Number}`

Returns an object with keys as the result of applying a function to elements, and the value is the amount of every matched element.

```javascript
const countByFloor = A.countBy(Math.floor)
countByFloor([4.2, 6.1, 6.4]) //=> { 4: 1, 6: 2 }

const countByLen = A.countBy(S.length)
countByLen(['one', 'two', 'three']) //=> { 3: 2, 5: 1 }
```

<div id="array-drop" class="section-name"></div>

### drop
`Number -> [a] -> [a]`

Drops the first n elements in an array.

```javascript
const dropTwo = A.drop(2)
dropTwo([1, 2, 3, 4, 5]) //=> [ 3, 4, 5 ]
```

<div id="array-dropWhile" class="section-name"></div>

### dropWhile
`(a -> Boolean) -> [a] -> [a]`

Drops the first items of an array which match the predicate.

```javascript
const dropWhileEven = A.dropWhile(isEven)
dropWhileEven([2, 4, 5, 6]) //=> [ 5, 6 ]
```

<div id="array-every" class="section-name"></div>

### every
`(a -> Boolean) -> [a] -> Boolean`

Determines if every element satisfies the predicate.

```javascript
const allOne = A.every(equal(1))
allOne([1, 1, 1]) //=> true

const allA = A.every(equal('a'))
allA(['a', 'b', 'c']) //=> false
```

<div id="array-filter" class="section-name"></div>

### filter
`(a -> Boolean) -> [a] -> [a]`

Returns an array of every element that matches the predicate.

```javascript
const filterOne = A.filter(equal(1))
filterOne([1, 2, 3]) //=> [ 1 ]
```

<div id="array-find" class="section-name"></div>

### find
`(a -> Boolean) -> [a] -> a?`

Returns the value of the first element that matches the predicate, or `undefined` if it does not exist.

```javascript
const findOne = A.find(equal(1))
findOne([1, 2, 3]) //=> 1
```

<div id="array-findIndex" class="section-name"></div>

### findIndex
`(a -> Boolean) -> [a] -> Number?`

Returns the index of the first value that matches the predicate, or undefined if not found.

```javascript
const indexOfOne = A.findIndex(equal(1))
indexOfOne([3, 2, 1]) //=> 2
```

<div id="array-get" class="section-name"></div>

### get
`Number -> [a] -> a?`

Retrieves an element of an array by index.

```javascript
const head = A.get(0)
head([1, 2, 3]) //=> 1

const second = A.get(1)
second([]) //=> undefined
```

<div id="array-gets" class="section-name"></div>

### gets
`[Number] -> [a] -> [a?]`

Retrieves multiple elements of an array by index.

```javascript
const firstTwo = A.get([0, 1])
firstTwo([1, 2, 3, 4]) //=> [1, 2]
firstTwo([]) //=> [undefined, undefined]
```

<div id="array-groupBy" class="section-name"></div>

### groupBy
`(a -> b) -> [a] -> {b: [a]}`

Returns an object with keys as the result of applying a function to elements, and the value is an array of every matched element.

```javascript
const groupByFloor = A.groupBy(Math.floor)
groupByFloor([4.2, 6.1, 6.4]) //=> { '4': [ 4.2 ], '6':  [ 6.1, 6.4 ] }
```

<div id="array-head" class="section-name"></div>

### head
`[a] -> a?`

Returns the first element in an array.

```javascript
A.head([1, 2, 3, 4, 5]) //=> 1
A.head([]) //=> undefined
```

<div id="array-includes" class="section-name"></div>

### includes
`a -> [a] -> Boolean`

Determines if an array contains a value.

```javascript
const hasA = A.includes('a')
hasA(['a', 'b', 'c']) //=> true
```

<div id="array-indexOf" class="section-name"></div>

### indexOf
`a -> [a] -> Number?`

Returns the index of a value, or undefined if not found.

```javascript
const indexOfOne = A.indexOf(1)
indexOfOne([3, 2, 1]) //=> 2
```

<div id="array-init" class="section-name"></div>

### init
`[a] -> [a]`

Returns every element except the last.

```javascript
A.init([1, 2, 3, 4, 5]) //=> [ 1, 2, 3, 4 ]
```

<div id="array-isEmpty" class="section-name"></div>

### isEmpty
`[a] -> Boolean`

Determines if an array contains any elements.

```javascript
A.isEmpty([1]) //=> false
```

<div id="array-last" class="section-name"></div>

### last
`[a] -> a?`

Returns the last element in an array.

```javascript
A.last([1, 2, 3, 4, 5]) //=> 5
A.last([]) //=> undefined
```

<div id="array-length" class="section-name"></div>

### length
`[a] -> Number`

Returns the number of elements in an array.

```javascript
A.length([1, 2, 3]) //=> 3
```

<div id="array-map" class="section-name"></div>

### map
`(a -> b) -> [a] -> [b]`

Applies a function over every element in an array.

```javascript
const listOfA = A.map(O.get('a'))
listOfA([{a: 1}, {a: 2}, {a: 3}]) //=> [ 1, 2, 3 ]
```

<div id="array-partition" class="section-name"></div>

### partition
`(a -> Boolean) -> [a] -> [[a], [a]]`

Equivalent to `[filter(f), reject(f)]`.

```javascript
const partByEven = A.partition(isEven)
partByEven([1, 2, 3, 4, 5]) //=> [ [ 2, 4 ], [ 1, 3, 5 ] ]
```

<div id="array-prepend" class="section-name"></div>

### prepend
`a -> [a] -> [a]`

Adds a value to the beginning of an array.

```javascript
A.prepend(4)([1, 2, 3]) //=> [ 4, 1, 2, 3 ]

const f = compose(A.concat, A.prepend([4, 5]))
f([1, 2, 3]) //=> [ 4, 5, 1, 2, 3 ]
```

<div id="array-range" class="section-name"></div>

### range
`(Number, Number) -> [Number]`

Returns an array of numbers from the start (inclusive) to the end (exclusive).

```javascript
A.range(0, 5) //=> [ 0, 1, 2, 3, 4 ]
A.range(20, 25) //=> [ 20, 21, 22, 23, 24 ]
```

<div id="array-reduce" class="section-name"></div>

### reduce
`((b, a) -> b, b) -> [a] -> b`

Applies a function over an accumulator and every element in an array, returning the result as a single value.

```javascript
const sum = A.reduce(add, 0)
sum([1, 2, 3]) //=> 6
```

<div id="array-reject" class="section-name"></div>

### reject
`(a -> Boolean) -> [a] -> [a]`

Returns an array of all elements that do not match the predicate.

```javascript
const rejectEven = A.reject(isEven)
rejectEven([1, 2, 3, 4, 5]) //=> [ 1, 3, 5 ]
```
 
<div id="array-reverse" class="section-name"></div>

### reverse
`[a] -> [a]`

Returns a new array with the elements in reverse order.

```javascript
A.reverse([1, 2, 3]) //=> [ 3, 2, 1 ]
```

<div id="array-scan" class="section-name"></div>

### scan
`((b, a) -> b, b) -> [a] -> [b]`

Like `reduce`, but returns a list with the initial value, the intermediate values, and the final value.

```javascript
const sums = A.scan(add, 0)
sums([1, 2, 3]) //=> [ 0, 1, 3, 6 ]
```

<div id="array-slice" class="section-name"></div>

### slice
`(Number, Number) -> [a] -> [a]`

Returns a subset of an array, providing starting and ending indexes.

```javascript
const twoThruFour = A.slice(1, 3)
twoThruFour([1, 2, 3, 4, 5]) //=> [ 2, 3 ]
```

<div id="array-some" class="section-name"></div>

### some
`(a -> Boolean) -> [a] -> Boolean`

Determines if any elements match the predicate.

```javascript
const someEqOne = A.some(equal(1))
someEqOne([1, 2, 3]) //=> true
```

<div id="array-sort" class="section-name"></div>

### sort
`((a, a) -> Number) -> [a] -> [a]`

Returns a sorted array, given a comparison function.

```javascript
const ascending = A.sort((a, b) => a - b)
ascending([5, 39, 1]) //=> [ 1, 5, 39 ]
```

<div id="array-sortBy" class="section-name"></div>

### sortBy
`(a -> b) -> [a] -> [a]`

Sort an array by applying a function to elements.

```javascript
const sortByLen = A.sortBy(S.length)
sortByLen(['abc', 'a', 'ab']) //=> [ 'a', 'ab', 'abc' ]

const sortByName = A.sortBy(O.get('name'))
sortByName([{ name: 'bob'}, { name: 'alice' }, { name: 'charlie' }])
//=> [ { name: 'alice' }, { name: 'bob' }, { name: 'charlie' } ]
```

<div id="array-sortWith" class="section-name"></div>

### sortWith
`[(a, a) -> Number] -> [a] -> [a]`

Takes an array of comparators, and returns the first non-tie result.

```javascript
const test = A.sortWith([
  descendBy(O.get('age')),
  ascendBy(O.get('name'))
])

test([{ name: 'charlie', age: 40 }, { name: 'bob', age: 30 }, { name: 'alice', age: 40 }])
//=> [ { name: 'alice', age: 40 }, { name: 'charlie', age: 40 }, { name: 'bob', age: 30 } ]
```

<div id="array-span" class="section-name"></div>

### span
`(a -> Boolean) -> [a] -> [[a], [a]]`

Equivalent to `[takeWhile(f, arr), dropWhile(f, arr)]`.

```javascript
const spanEven = A.span(isEven)
spanEven([2, 4, 5, 6]) //=> [ [ 2, 4 ], [ 5, 6 ] ]
```

<div id="array-tail" class="section-name"></div>

### tail
`[a] -> [a]`

Returns every element except the first.

```javascript
A.tail([1, 2, 3, 4, 5]) //=> [ 2, 3, 4, 5 ]
```

<div id="array-take" class="section-name"></div>

### take
`Number -> [a] -> [a]`

Returns the first n elements in an array.

```javascript
const takeTwo = A.take(2)
takeTwo([1, 2, 3, 4, 5]) //=> [ 1, 2 ]
```

<div id="array-takeWhile" class="section-name"></div>

### takeWhile
`(a -> Boolean) -> [a] -> [a]`

Returns the first elements in an array which match the predicate.

```javascript
const takeWhileEven = A.takeWhile(isEven)
takeWhileEven([2, 4, 5, 6]) //=> [ 2, 4 ]
```

<div id="array-unique" class="section-name"></div>

### unique
`[a] -> [a]`

Returns a list of unique elements.

```javascript
A.unique([1, 1, 1, 3, 5, 5, 9]) //=> [ 1, 3, 5, 9 ]
```

<div id="array-uniqueBy" class="section-name"></div>

### uniqueBy
`(a -> b) -> [a] -> [a]`

Returns an array of unique values from the applied function.

```javascript
const uniqByLen = A.uniqueBy(S.length)
uniqByLen(['and', 'here', 'are', 'some', 'words'])
//=> [ 'and', 'here', 'words' ]
```

<div id="array-zip" class="section-name"></div>

### zip
`[k] -> [v] -> {k: v}`

Returns an object, combining an array of keys and an array of values.

```javascript
const f = A.zip(['a', 'b', 'c'])
f([1, 2, 3, 4]) //=> { a: 1, b: 2, c: 3 }
f([1, 2]) //=> { a: 1, b: 2 }
```

---

<div id="maybe" class="section-name"></div>

## Maybe
A set of functions for dealing with unwanted values.

```javascript
const Maybe = require('foreword/maybe')
```

<div id="maybe-encase" class="section-name"></div>

### encase
`(a -> b) -> a -> b?`

Applies a function that may throw and a value, returns the result or, if it throws, `undefined`.

```javascript
const maybeGetC = Maybe.encase(x => x.a.b.c)
maybeGetC({a: 0}) //=> undefined
maybeGetC({a: {b: {c: 0}}}) //=> 0
```

<div id="maybe-isNothing" class="section-name"></div>

### isNothing
`a -> Boolean`

Determines if a value exists.

```javascript
Maybe.isNothing(null || undefined) //=> true
Maybe.isNothing(0) //=> false
```

<div id="maybe-map" class="section-name"></div>

### map
`(a -> Maybe b) -> Maybe a -> Maybe b`

Applies function to value, if value exists, or returns value.

```javascript
const maybeAddOne = Maybe.map(add(1))
maybeAddOne(1) //=> 2
maybeAddOne(undefined) //=> undefined

pipe([
  Maybe.map(A.head),
  Maybe.map(multiply(2)),
  Maybe.map(isEven)
], []) //=> undefined
```

<div id="maybe-toArray" class="section-name"></div>

### toArray
`Maybe a -> Array a`

Returns an empty array if value does not exist, or an array with the value.

```javascript
Maybe.toArray(undefined) //=> []
Maybe.toArray(1) //=> [1]
```

<div id="maybe-withDefault" class="section-name"></div>

### withDefault
`a -> Maybe a -> a`

Returns the first value, if the second does not exist.

```javascript
const defaultOne = Maybe.withDefault(1)
defaultOne(undefined) //=> 1
defaultOne(10) //=> 10
```

---

<div id="object" class="section-name"></div>

## Object
```javascript
const O = require('foreword/object')
```

<div id="object-concat" class="section-name"></div>

### concat
`[{k: v}] -> {k: v}`

Combine an array of objects into one object.

```javascript
O.concat([{ name: 'bob': id: 123 }, { name: 'alice' }, { id: 321 }])
//=> { name: 'alice', id: 321 }
```

<div id="object-every" class="section-name"></div>

### every
`{k: (v -> Boolean)} -> {k: v} -> Boolean`

Returns whether every key matches the predicate.

```javascript
const test = O.every({
  a: equal('foo'),
  b: not(equal('bar')),
  x: gt(10),
  y: lt(20)
})

test({ a: 'foo', b: 'baz', x: 15, y: 15 }) //=> true
test({ a: 'foo', b: 'baz': x: 10, y: 15 }) //=> false
```

<div id="object-filter" class="section-name"></div>

### filter
`[k] -> {k: v} -> {k: v}`

Returns a subset of an object, with only the specified keys.

```javascript
const idAndName = O.filter(['id', 'name'])
idAndName({ id: 123, name: 'bob', test: 'testing' })
//=> { id: 123, name: 'bob' }

const filterId = A.map(O.filter(['id']))
filterId([{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }])
//=> [ { id: 1 }, { id: 2 } ]
```

<div id="object-find" class="section-name"></div>

### find
`[k] -> {k: v} -> v?`

Returns a value from a nested object path.

```javascript
const getC = O.find(['a', 'b', 'c'])
getC({ a: { b: { c: 1 } } }) //=> 1
```

<div id="object-get" class="section-name"></div>

### get
`k -> {k: v} -> v?`

Returns the property of an object, if it exists.

```javascript
const getA = O.get('a')
getA({ a: 'test' }) //=> 'test'

const mapA = A.map(getA)
mapA([{ a: 1 }, { a: 2 }, { a: 3 }]) //=> [ 1, 2, 3 ]
```

<div id="object-gets" class="section-name"></div>

### gets
`[k] -> {k: v} -> [v?]`

Returns an array of values where Object k is found. 

```javascript
const getAB = O.gets(['a', 'b'])
getAB({ a: 1, b: 2 }) //=> [ 1, 2 ]
```

<div id="object-includes" class="section-name"></div>

### includes
`k -> {k: v} -> Boolean`

Determines if an object contains a key.

```javascript
const hasA = O.includes('a')
hasA({ a: 1, b: 2 }) //=> true
```

<div id="object-isEmpty" class="section-name"></div>

### isEmpty
`{k: v} -> Boolean`

Determines if an object contains any keys.

```javascript
O.isEmpty({}) //=> true
```

<div id="object-length" class="section-name"></div>

### length
`{k: v} -> Number`

Returns the number of keys in an object.

```javascript
O.length({ a: 1, b: 2 }) //=> 2
O.length({}) //=> 0
```

<div id="object-map" class="section-name"></div>

### map
`{k: (a -> b)} -> {k: a} -> {k: b}`

Returns an object with transformations applied over specified keys.

```javascript
const f = O.map({ ms: inc })
f({ id: 123, ms: 999 }) //=> { id: 123, ms: 1000 }
```

<div id="object-reject" class="section-name"></div>

### reject
`[k] -> {k: v} -> {k: v}`

Returns an object, without the keys specified.

```javascript
const rejectNameTest = O.reject(['name', 'test'])
rejectNameTest({ id: 123, name: 'alice', test: 'test' }) //=> { id: 123 }

const mapRejectId = A.map(O.reject(['id']))
mapRejectId([{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }])
//=> [ { name: 'alice' }, { name: 'bob' } ]
```

<div id="object-some" class="section-name"></div>

### some
`{k: (v -> Boolean) -> {k: v} -> Boolean`

Returns whether some keys matches the predicate.

```javascript
const test = O.some({
  x: gt(10),
  y: lt(20)
})

test({ x: 15, y: 25 }) //=> true
test({ x: 5, y: 25 }) //=> false
```

<div id="object-update" class="section-name"></div>

### update
`{k: v} -> {k: v} -> {k: v}`

Creates a new object with values from the first argument merged over the second argument.

```javascript
const f = O.update({ a: true })
f({ a: false, b: 1 }) //=> { a: true, b: 1 }
```

---

<div id="string" class="section-name"></div>

## String
```javascript
const S = require('foreword/string')
```

<div id="string-append" class="section-name"></div>

### append
`String -> String -> String`

Combine two strings.

```javascript
S.append('ing')('append') //=> 'appending'
```

<div id="string-concat" class="section-name"></div>

### concat
`[String] -> String`

Combines a list of strings into one string.

```javascript
S.concat(['a', 'b', 'c']) //=> 'abc'
```

<div id="string-drop" class="section-name"></div>

### drop
`Number -> String -> String`

Drops the first n elements in a string.

```javascript
const dropThree = S.drop(3)
dropThree('mmmhmmm') //=> 'hmmm'
```

<div id="string-dropWhile" class="section-name"></div>

### dropWhile
`(String -> Boolean) -> String -> String`

Drops the first elements of a string that pass the predicate.

```javascript
const dropWhileM = S.dropWhile(equal('m'))
dropWhileM('mmmhmm') //=> 'hmm'
```

<div id="string-includes" class="section-name"></div>

### includes
`String -> String -> Boolean`

Determines if a string contains a substring.

```javascript
const hasABC = S.includes('abc')
hasABC('abcdef') //=> true
```

<div id="string-indexOf" class="section-name"></div>

### indexOf
`String -> String -> Number?`

Returns the index of a value, or undefined if not found.

```javascript
const indexABC = S.indexOf('abc')
indexABC('xyzabc') //=> 3
```

<div id="string-isEmpty" class="section-name"></div>

### isEmpty
`String -> Boolean`

Determines if a string contains any characters.

```javascript
S.isEmpty('abc') //=> false
```

<div id="string-join" class="section-name"></div>

### join
`String -> [String] -> String`

Joins every element in an array with a string, creating a single string.

```javascript
const f = S.join(':')
f(['a', 'b', 'c']) //=> 'a:b:c'
```

<div id="string-length" class="section-name"></div>

### length
`String -> Number`

Returns the number of values in a string.

```javascript
S.length('abc') //=> 3
```

<div id="string-repeat" class="section-name"></div>

### repeat
`Number -> String -> String`

Repeated a string n amount of times.

```javascript
const repeatThree = S.repeat(3)
repeatThree('abc') //=> 'abcabcabc'
```

<div id="string-replace" class="section-name"></div>

### replace
`(RegExp | String, String) -> String -> String`

Returns a new string with the specified parts replaced.

```javascript
const fooBar = S.replace('foo', 'bar')
fooBar('foo foo foo') //=> 'bar foo foo'

const fooBar = S.replace(/foo/g, 'bar')
fooBar('foo foo foo') //=> 'bar bar bar'
```

<div id="string-reverse" class="section-name"></div>

### reverse
`String -> String`

Reverses the order of a string.

```javascript
S.reverse('abc') //=> 'cba'
```

<div id="string-search" class="section-name"></div>

### search
`RegExp -> String -> Number`

Returns the index of the first match from the regular expression, or -1 if not found.

```javascript
const findCap = S.search(/[A-Z]/g)
findCap('hello World') //=> 6
```

<div id="string-slice" class="section-name"></div>

### slice
`(Number, Number) -> String -> String`

Returns a subset of a string, given starting and ending indexes.

```javascript
const twoThruFour = S.slice(1, 3)
twoThruFour('abcdef') //=> 'bc'
```

<div id="string-span" class="section-name"></div>

### span
`(String -> Boolean) -> String -> [String, String]`

Equivalent to `[takeWhile(f, str), dropWhile(f, str)]`.

```javascript
const spanM = S.span(equal('m'))
spanM('mmmhmm') //=> [ 'mmm', 'hmm' ]
```

<div id="string-split" class="section-name"></div>

### split
`String -> String -> [String]`

Splits a string into an array of substrings.

```javascript
const f = S.split(':')
f('a:b:c') //=> [ 'a', 'b', 'c' ]
```

<div id="string-take" class="section-name"></div>

### take
`Number -> String -> String`

Returns the first n elements in a string.

```javascript
const takeThree = S.take(3)
takeThree('mmmhmmm') //=> 'mmm'
```

<div id="string-takeWhile" class="section-name"></div>

### takeWhile
`(String -> Boolean) -> String -> String`

Takes the first elements of a string that pass the predicate.

```javascript
const takeWhileM = S.takeWhile(equal('m'))
takeWhileM('mmmhmm') //=> 'mmm'
```

<div id="string-toLower" class="section-name"></div>

### toLower
`String -> String`

Returns an all lowercase string.

```javascript
S.toLower('ABCDEF') //=> 'abcdef'
```

<div id="string-toUpper" class="section-name"></div>

### toUpper
`String -> String`

Returns an all uppercase string.

```javascript
S.toUpper('abcdef') //=> 'ABCDEF'
```

<div id="string-trim" class="section-name"></div>

### trim
`String -> String`

Removes whitespace from both ends of a string.

```javascript
S.trim('   a \n') //=> 'a'
```
