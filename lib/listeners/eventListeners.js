const $ = require('jquery')
const getRequests = require('../ajax-requests/getRequests')
const swatches = require('../objects/swatches')

$(document).ready(function() {
  getRequests.topColor()
  $('button').on('click', swatches.appendSwatches) 
})
