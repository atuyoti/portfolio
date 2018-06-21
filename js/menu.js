$(function(){
      
   // #で始まるアンカーをクリックした場合に処理
   $('.index a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 600; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top - 80;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return true;
   });
    $("#toggle").click(function(){
    return false;
});
    
  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $("#menu").hide();
    }else{
      $("#menu").show();
    }
  });     
});

