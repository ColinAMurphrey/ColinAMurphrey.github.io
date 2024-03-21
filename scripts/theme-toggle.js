const checkbox = document.getElementById("checkbox");

// Load the saved dark mode state from localStorage
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
document.body.classList.toggle("dark", isDarkMode);
checkbox.checked = isDarkMode;

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    // Save the dark mode state to localStorage
    localStorage.setItem('isDarkMode', document.body.classList.contains("dark"));
});





// const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//     document.body.classList.toggle("dark")
// })