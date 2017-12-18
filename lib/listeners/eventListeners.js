const $ = require('jquery')
const getRequests = require('../ajax-requests/getRequests')
const colors = require('../data/colors')

$(window).on('load', getRequests.topColor) 
$(document).ready(function() {
  $('button').on('click', function() {
    let text = $('textarea').val()
    let removePunctuation = text.replace(/[.\r]/gi,"")
    debugger
    console.log(removePunctuation.split(' '))
  })
})
