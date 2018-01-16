function _generateRandomNumber () {
  const random = Math.random() * 11
  return Math.floor(random) + 1
}
function populateFields () {
  const a = _generateRandomNumber()
  const b = _generateRandomNumber()
  const c = _generateRandomNumber()
  const aDisplay = document.getElementById('a')
  const bDisplay = document.getElementById('b')
  const cDisplay = document.getElementById('c')
  aDisplay.value = a
  bDisplay.value = b
  cDisplay.value = c
  const figure = document.getElementById('figure')
  figure.style.width = a * 10
  figure.style.height = b * 10
  const figure2 = document.getElementById('figure2')
  figure2.style.width = a * 10
  figure2.style.height = b * 10
  figure2.style.marginLeft = c * 5
  figure2.style.marginTop = c * 5
  const coordinates = [[0,0],[0,a],[b,0],[b,a]]
  const diagonals = document.getElementsByClassName('diagonal')
  console.warn(diagonals);
  for (var i = 0; i < diagonals.length; i++) {
    diagonals[i].style.top = coordinates[i][0] * 10
    diagonals[i].style.left = coordinates[i][1] * 10
    diagonals[i].style.width = Math.ceil(c * 5 * Math.sqrt(2)) + 5
  }
}
function calculateVolume () {
  const aDisplay = document.getElementById('a')
  const bDisplay = document.getElementById('b')
  const cDisplay = document.getElementById('c')
  const result =
    aDisplay.value *
    bDisplay.value *
    cDisplay.value
  document.getElementById("vol").innerHTML = result
}