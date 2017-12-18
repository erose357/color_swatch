const $ = require('jquery')
const API = 'https://color-swatch-api.herokuapp.com/api/v1/'

function topColor() {
  return $.get(`${API}top_color`, function(data) {
    $('span.top-color').append(`${data.value}, count: ${data.color_count}`)
  })
}

module.exports = {topColor}
