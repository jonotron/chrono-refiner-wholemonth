[![Build Status](https://semaphoreci.com/api/v1/twostoryrobot/chrono-refiner-wholemonth/branches/master/shields_badge.svg)](https://semaphoreci.com/twostoryrobot/chrono-refiner-wholemonth)

# chrono-refiner-wholemonth
A chrono refiner for returning whole month ranges

# Installation

    npm install chrono-refiner-wholemonth

# Usage

Add the refiner to any chrono parser you need it in.

```javascript
import chrono from 'chrono-node'
import wholeMonth from 'chrono-refiner-wholemonth'

const parser = new chrono.Chrono
parser.refiners.push(wholeMonth)

parser.parse('Jan - Feb') // returns start: Jan 1, 2016 end: Feb 29, 2016
```

