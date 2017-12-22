const $ = require('jquery')
const colors = require('../data/colors')

function appendSwatches() {
    let text = $('textarea').val()
    let clean = removePunctuation(text)
    let wordArray = splitString(clean)
    let swatches = [] 
    wordArray.forEach(function(word) {
      if (colors[word]) {
        if (swatches.includes(colors[word]) === false)
        swatches.push(colors[word])
      }
    })
    swatches.forEach(function(hexColor) {
      $('article.colorized-text').append(`<div class="swatch" style="background-color:${hexColor}"></div>`)
    })

}

function removePunctuation(text) {
  return text.replace(/[.\r?,']/gi,"")
}

function splitString(text) {
  return text.split(' ')
}

module.exports = {appendSwatches}
