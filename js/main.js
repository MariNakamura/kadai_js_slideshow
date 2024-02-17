// jsを記述する際はここに記載していく
$(document).ready(function () {
    $("#startSlideshowBtn").click(function () {
        startSlideshow();
    });

    $("#slideshowFrame").click(function () {
        stopSlideshow();
    });
});

function startSlideshow() {
    // 画像のパスを配列に格納
    var images = [];
    for (var i = 1; i <= 20; i++) {
        images.push("image" + ("0" + i).slice(-2) + ".jpg");
    }

    // 画像をランダムに並び替え
    images.sort(function () {
        return 0.5 - Math.random();
    });

    // スライドショーを開始
    $("#slideshowContainer").empty();
    images.forEach(function (image) {
        $("#slideshowContainer").append('<img src="' + image + '">');
    });

    $("#slideshowFrame").fadeIn();
    $("#slideshowContainer img").hide().first().show();

    var currentImage = 0;
    var slideshowInterval = setInterval(function () {
        $("#slideshowContainer img").eq(currentImage).fadeOut(1000, function () {
            currentImage++;
            if (currentImage === images.length) {
                stopSlideshow();
            } else {
                $("#slideshowContainer img").eq(currentImage).fadeIn(1000);
            }
        });
    }, 3000);

    $("#slideshowFrame").data("interval", slideshowInterval);
}

function stopSlideshow() {
    $("#slideshowFrame").fadeOut();
    clearInterval($("#slideshowFrame").data("interval"));
}