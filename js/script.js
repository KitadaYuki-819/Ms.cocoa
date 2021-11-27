
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // var topBtn = $('.pagetop');
  // topBtn.hide();

  // // ボタンの表示設定
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 70) {
  //     // 指定px以上のスクロールでボタンを表示
  //     topBtn.fadeIn();
  //   } else {
  //     // 画面が指定pxより上ならボタンを非表示
  //     topBtn.fadeOut();
  //   }
  // });


  var topBtn = $('.top-page');
  topBtn.hide();
   var mv = $('.mv').height();
  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > mv) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });



  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});


$(".qa-q").click(function(){
  $(this).next().slideToggle(300);
  $(this).css('border-radius', '10px 10px 10px 10px');
  $(this).find('.qa-q__icon').toggleClass("is-open");
});


// $(function(){
//   $('.qa-q').on('click',function(){
//       $('.qa-a').fadeIn();
//       return false;
//   });
//   $('.qa-q').on('click',function(){
//       $('.qa-a').fadeOut();
//       return false;
//   });
// });



jQuery('.drawer-icon').on('click', function (e) {
  e.preventDefault();
  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  return false;
});


$(function () {
  var imgHeight = $('.mv').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。

  var header = $('.header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function () {
    if ($(window).scrollTop() < imgHeight) {
      //メインビジュアル内にいるので、クラスを外す。
      header.removeClass('headerColor-default');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      header.addClass('headerColor-default');
    }
  });
});

jQuery('.drawer-content__item a').on('click', function (e) {
  e.preventDefault();
  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  // return false;
});