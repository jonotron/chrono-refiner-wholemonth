import chrono from 'chrono-node'

const refiner = new chrono.Refiner

export default refiner 

refiner.refine = refine

function refine (text, results, opt) {
  return results
}
