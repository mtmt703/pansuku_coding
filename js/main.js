
$(function(){

    // accordion
    $('#accordion dt').on('click',function(){
        $(this).next('dd').slideToggle(200);
        // アコーディオンのプラスマイナスの部分
        $(this).toggleClass('selected');
    });


    // スムーススクロール
    var scroll = new SmoothScroll('a[href*="#"]', {
        header: '',
        speed: 300,
    });


});



   





