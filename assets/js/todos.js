// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
  /*
  // If li is grey
  if($(this).css("color") === "rgb(128, 128, 128)") {
    // Turn it black
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  // Else
  } else {
    //Turn it grey
    $(this).css({
      color: "grey",
      textDecoration: "line-through"
    });
  }
  */
})

// Click on X to delete To-Do
$("ul").on("click", "span",function(event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
  }
})

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})