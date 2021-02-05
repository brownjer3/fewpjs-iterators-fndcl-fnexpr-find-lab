// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(array) {
  let winner = array.find(element => element.result === "W")
  return !!winner ? winner.year : undefined
}
