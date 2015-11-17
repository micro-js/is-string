/**
 * Imports
 */

var isString = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(isString('test'))
  t.ok(!isString())
  t.ok(!isString(undefined))
  t.ok(!isString(null))
  t.ok(!isString({}))
  t.ok(!isString([]))
  t.ok(!isString(1))
  t.end()
})
