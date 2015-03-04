// Inicia Script quando o dom esta carregado
$(document).on('ready',function(){
  // Pega altura e largura
  var largura = $(".main-logo").width();
  var altura = $(".main-logo").height();
  // Cria instancia de trianglify
  var t = new Trianglify({cellsize:largura/7});
  var pattern = t.generate(largura, altura);
  // Gera frame com o tamanho e largura atual e seta em logo
  document.body.setAttribute('style',  'background-image: '+pattern.dataUrl);
  $(".main-logo").css( "background-image", pattern.dataUrl );
  // Captura cores dos temas gerado
  cor1 = pattern.options.x_gradient;
  cor2 = pattern.options.y_gradient;
  // Gera background e seta em body
  var t = new Trianglify({cellsize:largura/1.5, x_gradient: cor1,
  y_gradient: cor2});
  var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
  document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
  // Recria o pattern uma vez que janela foi redimensionada
  $(window).on('resize', function(){
    pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
    document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
    colorir();
  });
  // Captura das cores
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
  // Gera as cores dos elementos do dom
  var colorir = function(){
    $("body").css( "color", escolha2 );
    $(".footer").css( "background-color", escolha2 );
    $("a").css("color", escolha3);
    $("a").mouseover(function() {
        $(this).css("color",escolha2);
    }).mouseout(function() {
        $(this).css("color",escolha3);
    });
    $("head").append("<style>.content a{color: "+escolha3+";font-weight: bold}a:hover{color: "+escolha2+"}a.active{color: "+escolha2+";text-decoration: underline;}</style>");
    $("head").append("<style>.btn-custom{border-color:"+escolha2+"; color: "+escolha2+" }.btn-custom:hover,.btn-custom:focus,.btn-custom:active,.btn-custom.active{border-color:"+escolha3+"; color: "+escolha3+";background-color:"+escolha1+"}.btn-custom.disabled:hover,.btn-custom.disabled:focus,.btn-custom.disabled:active,.btn-custom.disabled.active,.btn-custom[disabled]:hover,.btn-custom[disabled]:focus,.btn-custom[disabled]:active,.btn-custom[disabled].active,fieldset[disabled] .btn-custom:hover,fieldset[disabled] .btn-custom:focus,fieldset[disabled] .btn-custom:active,fieldset[disabled] .btn-custom.active{border-color:"+escolha3+"}</style>");
    $("head").append("<style>.botoes a{color:"+escolha2+"}</style>");
    $("head").append("<style>#posts .post p{border-right: 1px solid "+escolha3+";}#posts .post .post-content:hover {color:"+escolha2+";font-weight: bold;}#posts .post .post-content{color:"+escolha1+"}</style>");
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
}
colorir();

// Conteudo append gerando scrollbar
checkScrollBar = function(){};
// Seleciona menu e liga opcao desejada
  var liga_content = function(nome){
    $('.content').empty();
    arq = nome + ".html"
    $('.content').load(arq);
    $('.menu span').children().removeClass("menu_ativado");
    menu_item = ".ativa_"+nome;
    $(menu_item).addClass("menu_ativado");
  };
liga_content("inicio");
// MENUS
  $('.main-logo').on('click',function(){
    if(!$('.ativa_inicio').hasClass('menu_ativado')){
      liga_content("inicio");
    };
  });
  $('.ativa_inicio').on('click',function(){
    if(!$('.ativa_inicio').hasClass('menu_ativado')){
      liga_content("inicio");
    };
  });
  $('.ativa_sobre').on('click',function(){
    if(!$('.ativa_sobre').hasClass('menu_ativado')){
    liga_content("sobre");
    };
  });
  $('.ativa_projetos').on('click',function(){
    if(!$('.ativa_projetos').hasClass('menu_ativado')){
      liga_content("projetos");
    };
  });
  $('.ativa_contato').on('click',function(){
    if(!$('.ativa_contato').hasClass('menu_ativado')){
      liga_content("contato");
    };
  });

  $("b1_sobre").on('click',function(){alert("opa")});
  //Selection Collor
  $("head").append("<style>::-moz-selection {color: "+escolha1+";background: "+escolha3+";}::selection {color: "+escolha1+";background: "+escolha3+";}</style>");


});
