function countdown(callback){
  window.setTimeout(callback, 2000)
}



function createMultiplier(y){
  return function (x){
    return y * x
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(multiplierValue, value){
  multiplierValue * value
}

var doublerWithBind = multiplier.bind(null,2)
var triplerWithBind = multiplier.bind(null,3)
