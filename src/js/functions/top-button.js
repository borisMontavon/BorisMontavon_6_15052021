export default function topButton() {
    $(window).scroll(() => {
        const height = $(window).scrollTop();
        
        if (height > 150) {
            $("#toTopButton").fadeIn();
        } else {
            $("#toTopButton").fadeOut();
        }
    });
        
    $(document).ready(() => {
        $("#toTopButton").click((event) => {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    });
}
