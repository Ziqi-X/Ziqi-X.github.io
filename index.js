function whichButton(event) {
    var btnNum = event.button;
    if (btnNum == 2) {
        console.log("你点击了鼠标右键！")
    } else if (btnNum == 0) {
        let timer = true;
        if (timer) {
            $('.canvas1').addClass('canvas2');　　
            setTimeout(function() {　　　　
                $('.canvas2').css('animation', 'bar-grow2 1s 1');　　
            }, 1000);

            timer = false
        }

        $('.canvas2').css('animation', 'bar-grow 1s 1');　　


        console.log("你点击了鼠标左键！")
    } else if (btnNum == 1) {
        console.log("你点击了鼠标中键！");

        let timer = true;
        if (timer) {
            $('.canvas1').addClass('canvas3');　　
            setTimeout(function() {　　　　
                $('.canvas2').css('animation', 'bar-grow 1s 1');　　
            }, 1000);

            timer = false
        }

        $('.canvas2').css('animation', 'bar-grow2 1s 1');　　

    } else {
        console.log("你点击了" + btnNum + "号键，我不能确定它的名称。");
    }
}

$(window).mousemove(function(e) {
    // console.log(e.pageX + '|' + e.pageY);
    $('.canvas1').offset({
        top: e.pageY - $('.canvas1').height() / 2,
        left: e.pageX - $('.canvas1').width() / 2
    })
})