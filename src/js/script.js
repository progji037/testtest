jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  $(".header__drawer").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header-drawer").removeClass("open");
    } else {
      $(this).addClass("active");
      $(".header-drawer").addClass("open");
    }
    // ウィンドウのリサイズを監視し、幅が768px以上の場合はドロワーメニューを閉じる
    $(window).on("resize", function () {
      if ($(window).width() > 767) {
        $(".drawer-bar").removeClass("active");
        $(".header-drawer").removeClass("open");
      }
    });
  });
});

/* .ドロワーの後ろがスクロールされない
-------------------------------------------------------------*/
$(function () {
  // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
  $(".header__drawer").click(function () {
    // 現在のbodyタグのoverflowスタイルを確認
    if ($("body").css("overflow") === "hidden") {
      // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
      $("body").css({ height: "", overflow: "" });
    } else {
      // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
      $("body").css({ height: "100%", overflow: "hidden" });
    }
  });
});

/* .fv
-------------------------------------------------------------*/
const fv__swiper = new Swiper(".js-fv-swiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  speed: 3000,
  autoplay: {
    // 自動再生
    delay: 3000, // 2.5秒後に次のスライド
  },
});

/* .campaign
-------------------------------------------------------------*/

const campaign__swiper = new Swiper(".js-top-swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  speed: 2000,
  autoplay: {
    // 自動再生
    delay: 1500, // 1.5秒後に次のスライド
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    //ブレークポイント
    767: {
      //横幅が767px以上の場合
      spaceBetween: 40,
    },
  },
});

/* .top-scroll
-------------------------------------------------------------*/
$(function () {
  const pageTop = $("#js-pageTop").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  opacity: 1,
    pageTop.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        50,
      );
      return false;
    });
});

//要素の取得とスピードの設定
var box = $(".mask-slide"),
  speed = 700;

//.maskの付いた全ての要素に対して下記の処理を行う
box.each(function () {
  $(this).append('<div class="mask"></div>');
  var mask = $(this).find($(".mask")),
    image = $(this).find("img");
  var counter = 0;

  image.css("opacity", "0");
  mask.css("width", "0%");
  //inviewを使って背景色が画面に現れたら処理をする
  mask.on("inview", function () {
    if (counter == 0) {
      $(this)
        .delay(200)
        .animate({ width: "100%" }, speed, function () {
          image.css("opacity", "1");
          $(this).css({ left: "0", right: "auto" });
          $(this).animate({ width: "0%" }, speed);
        });
      counter = 1;
    }
  });
});

// loading animation
$(document).ready(function () {
  const leftSlides = $(".fv-loading__split-left .slide");
  const rightSlides = $(".fv-loading__split-right .slide");
  const totalSlides = leftSlides.length;
  let currentIndex = 0;

  // 最初のスライドを表示
  $(leftSlides[currentIndex]).addClass("active");
  $(rightSlides[currentIndex]).addClass("active");
});

/* .loading fadeout
-------------------------------------------------------------*/ // script.js

$(document).ready(function () {
  // フェードアウトさせる要素を取得
  var $targetElement = $(".js-fv-loading");

  // 指定の秒数（ミリ秒）後にフェードアウトさせる
  var delay = 3000; // 3000ミリ秒（3秒）

  setTimeout(function () {
    $targetElement.addClass("fade-out");

    // フェードアウト後に非表示にする
    setTimeout(function () {
      $targetElement.fadeOut();
    }, 3000); // フェードアウトアニメーションの時間と同じにする
  }, delay);
});

/* .archive-pulldown
-------------------------------------------------------------*/

$(document).ready(function () {
  $(".blog-low__archive-item").hide();

  $(".blog-low__archive-head").click(function (e) {
    e.preventDefault();

    var $this = $(this);
    var $item = $this.next(".blog-low__archive-item");

    // クリック時に即座にクラスをトグル
    $this.toggleClass("is-open");

    // スライドトグルアニメーション
    $item.slideToggle(300); // 300ミリ秒でアニメーション
  });
});

/* .page-info タブ切り替え
-------------------------------------------------------------*/
$(document).ready(function () {
  $(".info-low__tab-list").click(function (e) {
    e.preventDefault();
    var tabId = $(this).data("tab");

    // すべてのタブコンテンツをフェードアウト
    $(".info-low__contents.active").fadeOut(300, function() {
      // フェードアウト完了後、active クラスを削除
      $(this).removeClass("active");

      // クリックされたタブに対応するコンテンツを表示してフェードイン
      $("#" + tabId).addClass("active").fadeIn(300);
    });

    // クリックされたボタンにアクティブクラスを追加し、他のボタンから削除する
    $(".info-low__tab-list").removeClass("active");
    $(this).addClass("active");
  });
});