console.log("Yourindex.js file is loaded correctly!!")


$(".get-in-touch-button").hover(
  function() {
    $(this).css({
      "text-decoration": "underline",
      "color": "#EFCF48"
    });
  },
  function() {
    $(this).css({
      "text-decoration": "none",
      "color": "white"
    });
  }
);