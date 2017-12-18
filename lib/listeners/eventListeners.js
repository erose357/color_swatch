var $ = require('jquery')

$(document).ready(function() {
  $('body').on('click', function() {
    return $.get('https://color-swatch-api.herokuapp.com/api/v1/top_color', function(data) {
  $('span.top-color').append(`${data.value}, count: ${data.color_count}`)
    })
  })
})
