import test from 'tape'
import chrono from 'chrono-node'
import wholeMonth from './'
import moment from 'moment'

const parser = new chrono.Chrono
parser.refiners.push(wholeMonth)

const ref = new Date('2016-03-15') // March 15, 2016

test('single month in the past', t => {
  const dates = parser.parse('Jan')  

  const janStart = moment('2016-01-01')
  const janEnd = moment('2016-01-31')

  t.ok(moment(dates[0].start.date()).isSame(janStart, 'day'), 'start jan 1')
  t.ok(moment(dates[0].end.date()).isSame(janEnd, 'day'), 'end jan 31')
  t.end()
})

test('month range in the past', t => {
  const dates = parser.parse('Jan - Feb')  

  const janStart = moment('2016-01-01')
  const febEnd = moment('2016-02-29')

  t.ok(moment(dates[0].start.date()).isSame(janStart, 'day'), 'start jan 1')
  t.ok(moment(dates[0].end.date()).isSame(febEnd, 'day'), 'end feb 29')
  t.end()
})

test.skip('specific year', t => {
  const dates = parser.parse('Jan 2015 - Feb 2016')

  const janStart = moment('2015-01-01')
  const febEnd = moment('2016-02-29')

  t.ok(moment(dates[0].start.date()).isSame(janStart, 'day'), 'start jan 1')
  t.ok(moment(dates[0].end.date()).isSame(febEnd, 'day'), 'end feb 29')
  t.end()
})

test('spanning the new year', t => {
  const dates = parser.parse('Dec - Feb')

  const decStart = moment('2015-12-01')
  const febEnd = moment('2016-02-29')

  t.ok(moment(dates[0].start.date()).isSame(decStart, 'day'), 'start dec 1')
  t.ok(moment(dates[0].end.date()).isSame(febEnd, 'day'), 'end feb 29')
  t.end()
})
