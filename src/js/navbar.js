
document.addEventListener("DOMContentLoaded", function () {
    fetch("/src/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Adjust link paths dynamically based on the current page location
            const isSubpage = window.location.pathname.includes("/pages/");

            document.getElementById("home-link").href = isSubpage ? "../index.html" : "../index.html";
            document.getElementById("home-nav").href = isSubpage ? "../index.html" : "../index.html";
            document.getElementById("about-nav").href = isSubpage ? "about.html" : "pages/about.html";
        });
});
