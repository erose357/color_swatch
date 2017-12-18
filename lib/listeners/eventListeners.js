const $ = require('jquery')
const getRequests = require('../ajax-requests/getRequests')
const colors = require('../data/colors')

$(window).on('load', getRequests.topColor) 
$(document).ready(function() {
  $('button').on('click', function() {
    let text = $('textarea').val()
    let removePunctuation = text.replace(/[.\r?,']/gi,"")
    let wordArray = removePunctuation.split(' ')
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
  })
})
