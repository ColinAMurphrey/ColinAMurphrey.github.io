var css_ver = "1.0.0"  // Change this when changing the CSS before each push to Github

var global_css = 'global_css';
if (!document.getElementById(global_css)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = global_css;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `/styles/global.css?ver=${css_ver}`;
    head.appendChild(link)
}

var bootstrap_css = 'bootstrap_css';
if (!document.getElementById(bootstrap_css)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = bootstrap_css;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `/styles/bootstrap.min.css?ver=${css_ver}`;
    head.appendChild(link);
}

var theme_toggle_css = 'theme_toggle_css';
if (!document.getElementById(theme_toggle_css)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = theme_toggle_css;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href= `/styles/theme-toggle.css?ver=${css_ver}`;
    head.appendChild(link);
}