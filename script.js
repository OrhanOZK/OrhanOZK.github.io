
document.addEventListener("DOMContentLoaded", () => {
    fetch("nav.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        });
});


document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});
