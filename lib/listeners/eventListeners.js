const $ = require('jquery')
const getRequests = require('../ajax-requests/getRequests')
const swatches = require('../objects/swatches')

//$(window).on('load', getRequests.topColor) 
$(document).ready(function() {
  $('button').on('click', swatches.appendSwatches) 
})
