# Foreword

A JavaScript library for functional data transformation.

[![Build Status](https://travis-ci.org/abstract-tools/foreword.svg?branch=master)](https://travis-ci.org/abstract-tools/foreword)
[![npm version](https://badge.fury.io/js/foreword.svg)](https://badge.fury.io/js/foreword)
[![dependencies](https://david-dm.org/abstract-tools/foreword.svg)](https://david-dm.org/abstract-tools/foreword)

`npm install foreword`

## Why Foreword?

- Ability to partially apply all functions, allowing you to write smaller, cleaner code.
- Restrict functions to one type of data.
- Leverage type separation into a more interesting interface, such as [A.map](http://abstract.tools/foreword#array-map) and [O.map](http://abstract.tools/foreword#object-map).
- Provide useful functions for handling unwanted values.
- Ensure correctness of transformations, not allowing references to be mutated.

A benefit of this approach is that `foreword` will have no trouble adding functions for new types in the future, like `Map` or `Set`.

## Documentation

Refer to the [API documentation](http://abstract.tools/foreword).
