// check off specific to-dos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on x to delete the to-do
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text'").keypress(function(e) {
	if (e.which === 13) {
		// grab to-do text from input
		var inputVal = $(this).val();
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + inputVal + "</li>");
		// clear input
		$(this).text("");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text'").slideToggle();
});