function openNav() {
    document.getElementById("myOffnav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menuButton").removeAttribute("class");
    document.getElementById("menuButton").setAttribute("class", "column small-hidden");
}

function closeNav() {
    document.getElementById("myOffnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menuButton").removeAttribute("class");
    document.getElementById("menuButton").setAttribute("class", "column large-hidden small-1");
}
