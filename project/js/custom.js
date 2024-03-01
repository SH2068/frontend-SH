//탭 메뉴

var $tab_list = $('.tab_menu');
$tab_list.find('ul ul').hide();
$tab_list.find('li.active>ul').show();

function tabMenu(e){
    e.preventDefault();
    let $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}
$tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu);
//라이트박스
$(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

// 윈도우 팝업 
$(".window").click(function(e){
   e.preventDefault();
   //window.open("파일명", "팝업이름", "옵션설정")
   //옵션 : left, top, width, height, status, toolbor, location, menubar, scrollbars, fullscreen, channelmode
   window.open('sample_popup.html', 'popup01', 'width=800, height=580, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');

});

//레이어 팝업 
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").css("display","block");

});

$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").css("display","none");
});

// 배너

$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:3000,
    dots:true
});

// 갤러리

$(".gallery_img").slick({
    arrows: false,
    fade:true,
    pauseOnHover:true,
    infinite:true,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToScroll:1
});

$(".play").click(function () {
    $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function () {
    $(".gallery_img").slick("slickPause");
});

$(".prev").click(function () {
    $(".gallery_img").slick("slickPrev");
});

$(".next").click(function () {
    $(".gallery_img").slick("slickNext");
});



// 버튼 클릭하면 전체 메뉴를 보이게 하기 
$(".tit .btn").click(function (e) {
    e.preventDefault();
    $("#cont_nav").slideToggle(300);
    $(this).toggleClass("on");
});