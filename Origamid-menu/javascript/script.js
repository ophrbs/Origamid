// origamid-menu plugin
$(".lista-menu-header").origamidMenu({
  breakpoint: 800,
  top: 83,
  background: "blueviolet",
  color: "white",
});

// width feedback
$(window).resize(function () {
  if (this.resizeTO) clearTimeout(this.resizeTO);
  this.resizeTO = setTimeout(function () {
    $(this).trigger("resizeEnd");
  }, 500);
});

$(window).bind("resizeEnd", function () {
  $("#width").text("a janela atualmente está com " + $(this).width() + "px");
});
