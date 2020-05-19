$(document).ready(function () {
    $("#image_list a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    $("#image_list a").hover(
        function (evt) {
            $(this).stop(true).animate({
                top: 5
            }, "fast");

            $("#image_list a").click(function (evt) {

                var imageURL = $(this).attr("href");
                $("#image").attr("src", imageURL);

                var caption = $(this).attr("title");
                $("#caption").text(caption);

                evt.preventDefault();
            });
        },
        function (evt) {
            $(this).stop(true).animate({
                top: 0
            }, "fast");
        }
    );

    $("image_list:first-child:first-child").focus();

});