$(document).on('ready',function(){
  var largura = $(".main-logo").width();
  var altura = $(".main-logo").height();
  var t = new Trianglify({cellsize:largura/7});
  var pattern = t.generate(largura, altura);
  document.body.setAttribute('style',  'background-image: '+pattern.dataUrl);
  $(".main-logo").css( "background-image", pattern.dataUrl );
  cor1 = pattern.options.x_gradient;
  cor2 = pattern.options.y_gradient;
  var t = new Trianglify({cellsize:largura/1.5, x_gradient: cor1,
  y_gradient: cor2});
  var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
  document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
  $(window).on('resize', function(){
    pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
    document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
  });
  var escolha1;
  var escolha2;
  qtd = cor1.length;
  while(qtd>0){
    if (qtd == cor1.length){
      escolha2 = cor1[qtd-1];
      escolha3 = cor1[qtd-2];
    }
    if (cor1[qtd-1] != "#ffffff"){
      escolha1 = cor1[qtd-1];
    }
    qtd = qtd - 1;
  }

  $("body").css( "color", escolha2 );
  $(".footer").css( "background-color", escolha2 );
  $("a").css("color", escolha3);
  $("a").mouseover(function() {
      $(this).css("color",escolha2);
  }).mouseout(function() {
      $(this).css("color",escolha3);
  });
  $(".menu a").mouseover(function() {
      $(this).addClass("menu_ativo");
  }).mouseout(function() {
      $(this).removeClass("menu_ativo");
  });
  $(".footer").css( "color", escolha1 );
  $(".footer a").css( "color", escolha1 );
  $(".footer a").mouseover(function() {
      $(this).css("color",escolha3);
  }).mouseout(function() {
      $(this).css("color",escolha1);
  });


// MENUS
  var limpaContent = function(){
    $('.content').children().addClass("invisible");
    $('.menu span').children().removeClass("menu_ativado");
  }
  $('.ativa_inicio').on('click',function(){
    limpaContent();
    $('.inicio').removeClass("invisible");
    $(this).addClass("menu_ativado");
    checkScrollBar();
  });
  $('.ativa_sobre').on('click',function(){
    limpaContent();
    $('.sobre').removeClass("invisible");
    $(this).addClass("menu_ativado");
    checkScrollBar();
  });
  $('.ativa_projetos').on('click',function(){
    limpaContent();
    $('.projetos').removeClass("invisible");
    $(this).addClass("menu_ativado");
    checkScrollBar();
  });
  $('.ativa_contato').on('click',function(){
    limpaContent();
    $('.contato').removeClass("invisible");
    $(this).addClass("menu_ativado");
    checkScrollBar();
  });
  checkScrollBar = function(){
    $('.wrapper').slimScroll({width:"100%",height: '100%',alwaysVisible: true});
  };
  checkScrollBar();

  $("head").append("<style>::-moz-selection {color: "+escolha1+";background: "+escolha3+";}::selection {color: "+escolha1+";background: "+escolha3+";}</style>");
  console.log(cor1);



});
