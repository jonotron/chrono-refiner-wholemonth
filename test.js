import test from 'tape'
import chrono from 'chrono-node'
import wholeMonth from './'
import moment from 'moment'

const parser = new chrono.Chrono
parser.refiners.push(wholeMonth)

test('test single months', t => {
  const dates = parser.parse('Jan')  

  const janStart = moment('2016-01-01')
  const janEnd = moment('2016-01-31')

  t.ok(moment(dates.start).isSame(janStart, 'day'))
  t.ok(moment(dates.end).isSame(janEnd, 'day'))
  t.end()
})
