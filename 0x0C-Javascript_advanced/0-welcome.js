function welcome (firstname, lastname) {
  const fullname = firstname + ' ' + lastname;
  function displayFullName () {
    alert('Welcome ' + fullname + '!');
  }
  displayFullName();
}
