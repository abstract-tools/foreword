# (a -> b)

A JavaScript library for functional data transformation.

[![Build Status](https://travis-ci.org/abstract-tools/a-to-b.svg?branch=master)](https://travis-ci.org/abstract-tools/a-to-b)
[![npm version](https://badge.fury.io/js/%40bchar%2Fa-to-b.svg)](https://badge.fury.io/js/%40bchar%2Fa-to-b)
[![dependencies](https://david-dm.org/abstract-tools/a-to-b.svg)](https://david-dm.org/abstract-tools/a-to-b)

`npm install @bchar/a-to-b`

## Why (a -> b)?

- Ability to partially apply all functions, allowing you to write smaller, cleaner code.
- Restrict functions to one type of data.
- Leverage type separation into a more interesting interface, such as [A.map](#array-map) and [O.map](#object-map).
- Provide useful functions for handling unwanted values.
- Ensure correctness of transformations, not allowing references to be mutated.

A benefit of this approach is that `(a -> b)` will have no trouble adding functions for new types in the future, like `Map` or `Set`.

## Documentation

Refer to the [API documentation](http://abstract.tools/a-to-b).
