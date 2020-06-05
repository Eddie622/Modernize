$(document).ready(function () {
    $("li.item, footer p span, header.mainHead p").hover(
        function () {
            $(this).css("color", "white");
        }, function () {
            $(this).css("color", "#999a98");
        }
    );

    $("button").hover(
        function () {
            $(this).css("background-color", "white");
            $(this).css("color", "black");
        }, function () {
            $(this).css("background-color", "#d6782a");
            $(this).css("color", "white");
        }
    );

    $("h1").hover(
        function () {
            $(this).css("color", "white");
        }, function () {
            $(this).css("color", "#d6782a");
        }
    );


    $("span").hover(
        function () {
            $(this).css("font-style", "normal");
        }, function () {
            $(this).css("font-style", "italic");
        }
    );

    $("footer p span").click(function () {
        window.scrollTo(0, 0);
    });
});