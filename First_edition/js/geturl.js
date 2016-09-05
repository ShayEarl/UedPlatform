function getParam() {
    var url = location.search.substr(1);
    var obj = {};
    if (!url) return false;
    var arr = url.split("&");
    for (var i = 0, len = arr.length - 1; i <= len; i++) {
        var patharr = arr[i].split("=");
        obj[patharr[0]] = decodeURI(patharr[1]);
    }
    return obj;
}