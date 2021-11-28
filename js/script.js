

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


  // var topBtn = $('.top-page');
  // topBtn.hide();
  //  var mv = $('.mv').height();
  // // ボタンの表示設定
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > mv) {
  //     // 指定px以上のスクロールでボタンを表示
  //     topBtn.fadeIn();
  //   } else {
  //     // 画面が指定pxより上ならボタンを非表示
  //     topBtn.fadeOut();
  //   }
  // });


  var topBtn = $('.top-page');
  topBtn.hide();
   var mv = $('.mv-message').height();
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



  // $(function () {
  //   var imgHeight = $('.mv').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  //   var topBtn = $('.top-page');
  //   $(window).on('load scroll' , function() {
  //   if ($(this).scrollTop() > imgHeight) {
  //     // 指定px以上のスクロールでボタンを表示
  //     topBtn.fadeIn();
  //   } else {
  //     // 画面が指定pxより上ならボタンを非表示
  //     topBtn.fadeOut();
  //   }
  // });
  // });

  // $(window).on('load scroll', function ()



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


// $(".qa-q").click(function(){
//   $(this).next().slideToggle(300);
//   $(this).css('border-radius', '10px 10px 10px 10px');
//   $(this).find('.qa-q__icon').toggleClass("is-open");
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




// $(function() {
//   $('.qa-q').click(function() {
//     //クリックされた質問の子要素の.qa-a以外からはis-openというクラスを外す
    

//     $('.qa-q').not(this).children('.qa-a').removeClass('is-open');
//     $('.qa-q').not(this).children('.qa-q__icon').removeClass('is-open');
//     //クリックされた質問部分に対する回答以外は全て閉じる
//     $('.qa-q').not(this).next().slideUp(400);
    
   
//     //クリックされた質問の子要素の.qa-aにis-openクラスが付与されいなければ付与し、付与されていれば外す
//     $(this).children('.qa-a').toggleClass('is-open');
//     $(this).children('.qa-q__icon').toggleClass('is-open');

//     //クリックされた質問に対する回答を表示する
//     $(this).next().slideToggle(400);
//   });
// });


$(function() {
  $('.qa-q').click(function() {
    //クリックされた質問の子要素の.qa-a以外からはis-openというクラスを外す
    
    $($(this).next("qa-a")[0]).toggleClass("qa-a-is-open");
    $('.qa-q').not(this).children('.qa-a').removeClass('is-open');
    $('.qa-q').not(this).children('.qa-q__icon').removeClass('is-open');
    //クリックされた質問部分に対する回答以外は全て閉じる
    $('.qa-q').not(this).next().slideUp(400);
    
   
    //クリックされた質問の子要素の.qa-aにis-openクラスが付与されいなければ付与し、付与されていれば外す
    $(this).children('.qa-a').toggleClass('is-open');
    $(this).children('.qa-q__icon').toggleClass('is-open');

    //クリックされた質問に対する回答を表示する
    $(this).next().slideToggle(400);
  });
});


// $(function () {
//   $("dt").on("click", function () {
//       $($(this).next("dd").find(".box")[0]).toggleClass("box-expanded");
//   });
// });


// new WOW().init();




// $(function(){
//   $(window).scroll(function (){
//       $('.mv-message__ttl').each(function(){
//           var elemPos = $(this).offset().top;
//           var scroll = $(window).scrollTop();
//           var windowHeight = $(window).height();
//           if (scroll > elemPos - windowHeight + 150){
//               $(this).addClass('scrollin');
//           }
//       });
//   });
// });
 
        $(document).ready( function(){
          // ページ読み込み時に実行したい処理
          $('.mv-message__ttl').addClass('scrollin');   
    });




