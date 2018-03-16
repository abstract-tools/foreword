const filter = require('./filter');
const get = require('./get')
const includes = require('./includes')
const isEmpty = require('./isEmpty')
const keys = require('./keys')
const map = require('./map')
const reject = require('./reject')
const update = require('./update')
const values = require('./values')

module.exports = {
  filter,
  get,
  includes,
  isEmpty,
  keys,
  map,
  reject,
  update,
  values,
  vals: values
}
