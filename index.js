function produceDrivingRange(blockRange) {
  return function (pointA, pointB) {
    let distance = Math.abs(parseInt(pointA) - parseInt(pointB))
    if (blockRange > distance) {
      let difference = blockRange - distance
      return `within range by ${difference}`
    }
    else {
      let difference = distance - blockRange
      return `${difference} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(amount) {
    return amount * tip
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
