function quickExit() {
  // Quick Exit to open new Google tab
  window.open("http://www.google.com", "_newtab");
  // Quick Exit to replace current site with NTGov home page
  window.location.replace('https://nt.gov.au/');
}

$(function() {

  $("#quickexit").on("click", function(e) {
    quickExit();
  });

  $("#quickexit a").on("click", function(e) {
    // allow the link to work
    e.stopPropagation();
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // allows escape key
      quickExit();
    }
  });

});