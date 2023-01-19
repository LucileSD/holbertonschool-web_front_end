function changeMode (size, weight, transform, background, color) {
  return function () {
    document.documentElement.style.fontSize = size;
    document.documentElement.style.fontWeight = weight;
    document.documentElement.style.textTransform = transform;
    document.documentElement.style.backgroundColor = background;
    document.documentElement.style.color = color;
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
  newButtonSpooky.setAttribute('id', 'spooky');
  document.body.appendChild(newButtonSpooky);

  const newButtonDark = document.createElement('button');
  newButtonDark.innerText = 'Dark mode';
  newButtonDark.setAttribute('id', 'dark');
  document.body.appendChild(newButtonDark);

  const newButtonScream = document.createElement('button');
  newButtonScream.innerText = 'Scream mode';
  newButtonScream.setAttribute('id', 'scream');
  document.body.appendChild(newButtonScream);

  document.getElementById('spooky').onclick = spooky;
  document.getElementById('dark').onclick = darkMode;
  document.getElementById('scream').onclick = screamMode;
}

main();
