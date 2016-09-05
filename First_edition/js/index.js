window.onscroll = function (e) {
    var top = $(window).scrollTop();
    if (top == 0) {
        $("header").css({
            "background": "#fafafe"
        })
        $("header>div>section").css({
            "background": "#fafafe"
        })
    } else if (top > 0) {
        $("header").css({
            "background": "#fff"
        })
        $("header>div>section").css({
            "background": "#fff"
        })
    }
}
$(".buttns").on("mousemove", function () {
    thisimgurl = $(this).attr("direction");
    if (thisimgurl == "left") {
        $(this).find("img").attr("src", "../img/index-assets/actionleft.png")
    } else if (thisimgurl == "right") {
        $(this).find("img").attr("src", "../img/index-assets/actionright.png")
    }

})
$(".buttns").on("mouseout", function () {
    thisimgurl = $(this).attr("direction");

    if (thisimgurl == "left") {
        $(this).find("img").attr("src", "../img/index-assets/left.png")
    } else if (thisimgurl == "right") {
        $(this).find("img").attr("src", "../img/index-assets/right.png")
    }
})
var list = $(".banner>ul>li");
var mySwiper = new Swiper(".banner", {
    autoplay: 3500,
    loop: true,
    loopAdditionalSlides: 0,
    pagination: '.swiper-pagination',
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    /*paginationClickable: true,*/
    onSlideChangeEnd: function (swper) {
        var index = swper.activeIndex;
        var lists = $(".banner>ul>li");
        var listindex = lists.eq(index).attr("data-index");
        for (var i = 0; i < lists.size(); i++) {
            var s = i;
            var itemdataindex = lists.eq(s).attr("data-index");
            if (itemdataindex == listindex) {
                lists.eq(s).find("img").show();
                setTimeout(function () {
                    lists.find("img").hide();
                }, 3500)
            }
        }
    }
});
var mySwiper = new Swiper(".worksItem", {
    loop: true,
    prevButton: '.worksItemnext',
    nextButton: '.worksItemprev'
});
var mySwiper = new Swiper(".shareItem", {
    loop: true,
    nextButton: '.shareItemnext',
    prevButton: '.shareItemprev'
});