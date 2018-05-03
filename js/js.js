function openNav() {
    document.getElementById("myOffnav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("menuButton").removeAttribute("class");
    document.getElementById("menuButton").setAttribute("class", "column small-hidden");
}

function closeNav() {
    document.getElementById("myOffnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menuButton").removeAttribute("class");
    document.getElementById("menuButton").setAttribute("class", "column large-hidden small-1");
}
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top
          }, 1000);
          return false;
      }
  }
});
