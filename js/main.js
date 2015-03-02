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
    liga_cores();
  });
  // Captura das cores
  qtd = cor1.length;
  while(qtd>=0){
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
var liga_cores = function(){
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
}
liga_cores();

// Conteudo append gerando scrollbar
checkScrollBar = function(){
  setTimeout(function(){
    $('.wrapper').slimScroll({width:"100%",height: '100%',alwaysVisible: true});
  },250);
};
// Seleciona menu e liga opcao desejada
  var liga_content = function(nome){
    $('.content').empty();
    arq = nome + ".html"
    $('.content').load(arq);
    checkScrollBar();
    $('.menu span').children().removeClass("menu_ativado");
    menu_item = ".ativa_"+nome;
    $(menu_item).addClass("menu_ativado");
  }
liga_content("inicio");
// MENUS
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
  // Verifica se scrollbar esta correta na pagina
  checkScrollBar2 = function(){
    $('.wrapper').slimScroll({width:"100%",height: '100%',alwaysVisible: true});
  };
  checkScrollBar2();

  //Selection Collor
  $("head").append("<style>::-moz-selection {color: "+escolha1+";background: "+escolha3+";}::selection {color: "+escolha1+";background: "+escolha3+";}</style>");
});
