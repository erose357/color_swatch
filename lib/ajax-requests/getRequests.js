const $ = require('jquery')
const API = 'https://color-swatch-api.herokuapp.com/api/v1/'
const responses = require('../ajax-responses/getResponses')

function topColor() {
  return $.get(`${API}top_color`, function(data) {
    responses.appendTopColor(data)
  })
}

function postColors(colors) {
  debugger
  //return $.ajax({
    //url: `${API}/colors`,
    //method: 'POST',
    //data: 
  //})
}

module.exports = {topColor, postColors}
