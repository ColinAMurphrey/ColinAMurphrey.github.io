function loadHTML() {
    fetch('/index-nav.html')
    .then(response => response.text())
    .then(text => document.getElementById('navigation').innerHTML = text);
}

window.onload = loadHTML;