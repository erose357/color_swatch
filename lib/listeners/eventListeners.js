const $ = require('jquery')
const getRequests = require('../ajax-requests/getRequests')

$(window).on('load', getRequests.topColor) 
$(document).ready(function() {
  $('button').on('click', function() {
    let text = $('textarea').val()
    console.log(text)
  })
})
