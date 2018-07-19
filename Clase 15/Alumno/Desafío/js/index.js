$(document).ready(function () {
  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }
  url = 'https://swapi.co/api/people/'
  getData(url, getStatus)

  function getStatus (error, data) {
    if (!error) {
      if (data.next) {
        getData(data.next, getStatus)
        showData(data.results)
        console.log(data.results)
      }
    } else {
      console.log('error', error)
    }
  }
  var id = 0
  function showData (results) {
    var tbody = $('#tableBody')
    for (i = 0; i < results.length; i++) {
      id++
      tbody.append(
        '<tr id="' +
          i +
          '" style="overflow: hidden;"><td>' +
          id +
          '</td><td>' +
          results[i].name +
          '</td></tr>'
      )
    }
  }
})
