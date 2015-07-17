function sayHello() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/texty-text', false);
  xhr.send(null);
}
sayHello();
