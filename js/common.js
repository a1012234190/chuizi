$(function () {
    //nav
    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 45) {
            $(".fixed-nav").css({
                "position": "fixed",
                "top": "0",
                "z-index": "999"
            })
        } else {
            $(".fixed-nav").css({
                "position": "relative"
            })
        }
        if ($("body,html").scrollTop() > 45) {
            $(".slip-sy").css({
                "position": "fixed",
                "top": "74px",
                "z-index": "999"
            })
        }
        else {
            $(".slip-sy").css({
                "position": "absolute",
                "top": "119px"
            })
        }
    })
    $(".sy").mouseover(function () {
        $(".slip-sy").css({ display: "block" })
    })
    $(".sy").mouseout(function () {
        $(".slip-sy").css({ "display": "none" })
    })
    $(".slip-sy").mouseover(function () {
        $(this).css({ "display": "block" })
    })
    $(".slip-sy").mouseout(function () {
        $(this).css({ "display": "none" })
    })

    $(".top-left i").click(function () {
        location.href("./index.html")
    })
})