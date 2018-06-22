var texts = [ 'Ed', 'Edd', 'Eddy' ]

var ul = document.getElementById('mainList')
for (i = 0; i < texts.length; i++) {
  ul.innerHTML += '<li class="list-group-item">' + texts[i] + '</li>'
}
