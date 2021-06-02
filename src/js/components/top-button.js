//Top Button

$(window).scroll(function() {
	const height = $(window).scrollTop();
	
	if (height > 200) {
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

// window.addEventListener('scroll', () => {
//     const height = window.scrollY;
//     const topButton = document.getElementById("toTopButton");
//     console.log(height);

//     if (height > 200) {
// 		topButton.classList.add("fade-in");
// 	} else {
// 		topButton.classList.remove("fade-in");
// 	}
// })