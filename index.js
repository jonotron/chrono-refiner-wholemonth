import chrono, { ParsedComponents } from 'chrono-node'
import moment from 'moment'

const refiner = new chrono.Refiner

export default refiner 

refiner.refine = refine

function refine (text, results, opt) {
  results.map(r => {
    if (!isOnlyCertainMonth(r.start)
        && r.end
        && !isOnlyCertainMonth(r.end))
      return r

    r.start.imply('day', 1)
    r.start.imply('hour', 0)
    r.start.imply('minute', 0)
    r.start.imply('second', 0)
    r.start.imply('millisecond', 0)

    r.end = new ParsedComponents(r.start, r.ref)
    const momentEnd = moment(r.start.date()).endOf('month')
    r.end.assign('month', momentEnd.get('month') + 1)
    r.end.imply('day', momentEnd.get('date'))
    r.end.imply('hour', momentEnd.get('hour'))
    r.end.imply('minute', momentEnd.get('minute'))
    r.end.imply('second', momentEnd.get('second'))
    r.end.imply('millisecond', momentEnd.get('millisecond'))

    return r
  })
  return results
}

function isOnlyCertainMonth (date) {
  return date.isCertain('month') 
  && !date.isCertain('day')
  && !date.isCertain('hour')
  && !date.isCertain('minute')
  && !date.isCertain('second')
  && !date.isCertain('millisecond')
}
