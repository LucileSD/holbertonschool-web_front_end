function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main () {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const newParagraph = document.createElement('p');
  newParagraph.innerText = "Welcome Holberton!";
  document.body.appendChild(newParagraph);

  const newButtonSpooky = document.createElement('button');
  newButtonSpooky.innerText = 'Spooky';
  document.body.appendChild(newButtonSpooky);

  const newButtonDark = document.createElement('button');
  newButtonDark.innerText = 'Dark mode';
  document.body.appendChild(newButtonDark);

  const newButtonScream = document.createElement('button');
  newButtonScream.innerText = 'Scream mode';
  document.body.appendChild(newButtonScream);

  newButtonSpooky.onclick = spooky;
  newButtonDark.onclick = darkMode;
  newButtonScream.onclick = screamMode;
}

main();
