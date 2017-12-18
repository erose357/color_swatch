const $ = require('jquery')

function appendTopColor(data) {
  $('span.top-color').append(`${data.value}, count: ${data.color_count}`)
}

module.exports = {appendTopColor}
