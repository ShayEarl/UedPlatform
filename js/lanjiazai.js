function lanjiazai() {
    var warp = $("body");
    var imgarry = {};
    var h = $(window).height();
    initimg();
    loadimg();
    $(window).on("resize", function () {

        initimg();
    })
    $(window).on("scroll", function () {
        autoplay()
    })

    function initimg() {
        warp.find("img").each(function () {
            var $this = $(this)
            var offsets = $this.offset().top;
            var h = $(window).height();
            if ($this.attr('data-src') && $this.attr('data-src')) {
                if (!imgarry[offsets]) {
                    imgarry[offsets] = [];
                }
                imgarry[offsets].push($this);
            }
        })
    }

    function loadimg() {
        var scrolltop = $(window).scrollTop();
        for (var i in imgarry) {

            if (i < (h + scrolltop)) {
                var imggs = imgarry[i];
                for (var j = 0; j < imggs.length; j++) {
                    imggs[j].attr("src", imggs[j].attr("data-src"))
                }
                delete imgarry[i]
            }
        }
    }

    function autoplay() {
        var _key = null;
        for (var i in imgarry) {
            _key = 1;
        }
        if (!_key) return;
        loadimg();
        _key = null
    }
}
lanjiazai()