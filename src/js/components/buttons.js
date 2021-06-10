//Top button

$(window).scroll(function() {
	const height = $(window).scrollTop();
	
	if (height > 150) {
		$("#toTopButton").fadeIn();
	} else {
		$("#toTopButton").fadeOut();
	}
});
	
$(document).ready(function() {
	$("#toTopButton").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0}, "slow");
		return false;
	});
});

// Close form button

const closeForm = () => {
	const form = document.getElementById("form-background");

	form.style.display = "none";
}