import test from 'tape'
import chrono from 'chrono-node'
import wholeMonth from './'
import moment from 'moment'

const parser = new chrono.Chrono
parser.refiners.push(wholeMonth)

test('test single month in the past', t => {
  const ref = new Date('2016-02-03') // Feb 3, 2016
  const dates = parser.parse('Jan')  

  const janStart = moment('2016-01-01')
  const janEnd = moment('2016-01-31')

  t.ok(moment(dates[0].start.date()).isSame(janStart, 'day'), 'start jan 1')
  t.ok(moment(dates[0].end.date()).isSame(janEnd, 'day'), 'end jan 31')
  t.end()
})

test('test month range in the past', t => {
  const ref = new Date('2016-03-15') // March 15, 2016
  const dates = parser.parse('Jan - Feb')  

  const janStart = moment('2016-01-01')
  const febEnd = moment('2016-02-29')

  t.ok(moment(dates[0].start.date()).isSame(janStart, 'day'), 'start jan 1')
  t.ok(moment(dates[0].end.date()).isSame(febEnd, 'day'), 'end feb 29')
  t.end()
})
