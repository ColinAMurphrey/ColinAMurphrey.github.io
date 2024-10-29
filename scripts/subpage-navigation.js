function loadHTML() {
    fetch('/subpage-nav.html')
    .then(response => response.text())
    .then(text => document.getElementById('navigation').innerHTML = text);
}

window.onload = loadHTML;