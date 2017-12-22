const $ = require('jquery')
const colors = require('../data/colors')

function getSwatches() {
    let text = $('textarea').val()
    let clean = removePunctuation(text)
    let wordArray = splitString(clean)
    let colors = getColorsNoDuplicates(wordArray)
    appendSwatches(colors['swatches'])
}

function removePunctuation(text) {
  return text.replace(/[.\r?,']/gi,"")
}

function splitString(text) {
  return text.split(' ')
}

function getColorsNoDuplicates(wordArray) {
  let swatches = []
  let allColors = []
  wordArray.forEach(function(word) {
    if (colors[word]) {
      allColors.push(colors[word])
      if (swatches.includes(colors[word]) === false)
      swatches.push(colors[word])
    }
  })
  return { swatches: swatches, allColors: allColors }
}

function appendSwatches(swatches) {
  swatches.forEach(function(hexColor) {
    $('article.colorized-text').append(`<div class="swatch" style="background-color:${hexColor}"></div>`)
  })
}

module.exports = {getSwatches}
