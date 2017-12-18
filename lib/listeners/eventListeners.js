var $ = require('jquery')

$(document).ready(function() {
  $(window).on('click', function() {
    return $.get('https://color-swatch-api.herokuapp.com/api/v1/top_color', function(data) {
      return data
    })
    .then(console.log(data))
  })
})
