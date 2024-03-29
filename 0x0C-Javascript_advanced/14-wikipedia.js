function createElement (data) {
  const newParagraph = document.createElement('p');
  newParagraph.innerText = data;
  document.body.appendChild(newParagraph);
}

function queryWikipedia (callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  xhr.send();
  xhr.onload = function () {
    const response = JSON.parse(xhr.response);
    const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
    callback(extract);
  };
  xhr.onerror = function () {
    alert('Request failed');
  }
}
queryWikipedia(createElement);
