$(document).ready(() => {
    $(".special-item").click((obj) => {
        $(".special-item").removeClass("special-active");
        $(obj.target).addClass("special-active");
    });
});