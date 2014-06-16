$(document).ready(function() {
	var count = 1;
	var zoom = 100;
	
	$(".btn").on("click",function(){
		location.href = "http://www.apira.com.br/testes/";
	});
	$(".mudaPagina").on("click",function(){
		count++;
		$("#page img.active").attr("src","pages/pag"+count+".jpg").show();
		$("#page img.turn").css("z-index",2);
		setTimeout(function(){
			$("#page img.turn").addClass("magictime perspectiveLeft");
			if(count == 2){
				$(".btn2").show();
			}else if(count == 3){
				$(".btn2").hide();
				$(".btn1").show();
			}
			setTimeout(function(){
				$("#page img.turn").css("z-index",0).removeClass("magictime perspectiveLeft");
				$("#page img.turn").attr("src","pages/pag"+count+".jpg");
			},1000);
		},1500);
	});
	$(".zoomIn").on("click",function(){
		$("#page img.active").css({
			"max-width":"200%",
			height:"auto"
		});
		$("#page img.turn").css({
			"max-width":"200%",
			height:"auto"
		});
		
	});
	$(".zoomOut").on("click",function(){
		$("#page img.active").css({
			"max-width":"100%",
			height:"auto"
		});
		$("#page img.turn").css({
			"max-width":"100%",
			height:"auto"
		});
		
	});
	$(".btn1").on("click",function(){
		location.href = "oeds/obj1/index.html"
	});
	$(".btn2").on("click",function(){
		location.href = "oeds/obj2/index.html"
	});
});
/*$(window).load(function(e){
	var loader = new PxLoader();
	var loadimagens = new Array ("creditos/capa.jpg","creditos/intro_capa.png","creditos/intro_rodape.png","creditos/logo_apoema.png","creditos/logoEBSA.png","bginstrucoes.png","botaoajuda.png","botaohome.png","botaosom.png","botaosomoff.png","h1bg.png","btnNext.png","btnPrev.png","btnView.png","painel.png","painel2.png","map1.jpg","map1original.jpg","map2.jpg","map2original.jpg","background.jpg","modelo1.png","pin.gif","pin-visto.png"); // Coloque todas as imagens aqui para serem carregadas
	
	for(var i=0; i<loadimagens.length; i++){
		pathimagens = "img/"+loadimagens[i]; // Path do diretório das imagens
		loader.addImage(pathimagens);
	}

	loader.addProgressListener(function(e) { 
		console.log(e.resource.getName());
	});

	loader.addCompletionListener(function(e) { 
    		$("#loading").remove();
		console.log(loadimagens.length+' imagens carregadas!');
		
		//////////////////////////////////////////////////////////////////////////////////////////////////
		// JAVASCRIPT CAPA
		var overlay = $("#overlay");
		$("#intro-topo").animate({
			marginTop:0,
			marginLeft:0
		}, 600, 'easeOutBack', function(){
			$(".intro-label").stop().animate({
				'width':'100%',
			}, 1000);
			$(".intro-label img").stop().delay(1000).show(800, function(){
				$("#btnentrar").stop().animate({'bottom':'60px', 'right':'35px'}, 500, 'easeOutBack');
				$(".btnCreditos").delay(300).stop().animate({'bottom':'15px', 'right':'35px'}, 500, 'easeOutBack');
			});
			$(".btnFechar").click(function(){
				overlay.hide(300);
			});
			$(".btnCreditos").click(function(){
				overlay.show(300);
			});
		});
		$("#btnentrar").click(function(){
			$("#global").show();
			$("#menu-oed").hide();
			$('#audio1').get(0).play();
			$("#audio1").prop("volume", 0.2);
			global(); // FUNÇÃO QUE INICIA O OBJETO
		});
		// FINAL JAVASCRIPT CAPA
		function montaPlayer(urlAudio){
		
			var som = document.createElement("audio");
			var source = document.createElement("source");
				
			som.setAttribute("class","narracoes");
			source.setAttribute("src","audio/"+urlAudio+".mp3");
			source.setAttribute("type","audio/mpeg");
			
			som.appendChild(source);
			document.body.appendChild(som);
		}
		
		////////////////////////////////////////////////// ESCREVER JAVASCRIPT DENTRO DESTA FUNÇÃO GLOBAL
		function global(){
		
		
		$(".btnNext").mouseover(function(){
			$('.narracoes:first').remove();
			$(this).stop().transition({scale:"1.3"},200);
			$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
				$(this).hide();	
			});
		});
		$(".btnNext").mouseleave(function(){
			$(this).stop().transition({scale:"1"},200);
		});
		$(".btnNext").click(function(){
			$(".janela").stop().transition({scale:"0"}, 600, "easeInBack",function(){
				$(this).hide();	
			});
			$("#painel").transition({skewX:"60deg", skewY:"40deg", perspective:"250", rotateY:"180deg",scale:"0"},1000, "easeInQuad");
			$("#painel2").transition({skewX:"60deg", skewY:"40deg", perspective:"250", rotateY:"180deg",scale:"0"},1, "easeInQuad");
			setTimeout(function(){
				$('#audio1').get(0).pause();
				$('#audio2').get(0).play();
				$("#audio2").prop("volume", 0.2);
				$(this).hide();
				$("#painel2").show();
				$("#painel2").css({"skewY":"-60deg","skewX":"40deg","rotateY":"-180deg"});
				$("#painel2").transition({skewX:"0deg",skewY:"0deg", rotateY:"0deg",scale:"1"},1000, "easeOutQuad");	
			},1000);
		});
		$(".btnPrev").mouseover(function(){
			$('.narracoes:first').remove();
			$(this).stop().transition({scale:"1.3"},200);
			$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
				$(this).hide();	
			});
		});
		$(".btnPrev").mouseleave(function(){
			$(this).stop().transition({scale:"1"},200);
		});
		$(".btnPrev").click(function(){
			$(".janela").stop().transition({scale:"0"}, 600, "easeInBack",function(){
				$(this).hide();	
			});
			$("#painel2").transition({skewX:"-60deg", skewY:"-40deg", perspective:"250", rotateY:"-180deg",scale:"0"},1000, "easeInQuad");
			$("#painel").transition({skewX:"-60deg", skewY:"-40deg", perspective:"250", rotateY:"-180deg",scale:"0"},1, "easeInQuad");
			setTimeout(function(){
				$('#audio2').get(0).pause();
				$('#audio1').get(0).play();
				$("#audio2").prop("volume", 0.2);
				$(this).hide();
				$("#painel").show();
				$("#painel").css({"skewY":"60deg","skewX":"-40deg","rotateY":"180deg"});
				$("#painel").transition({skewX:"0deg",skewY:"0deg", rotateY:"0deg",scale:"1"},1000, "easeOutQuad");	
			},1000);
		});
		$(".btnView").mouseover(function(){
			$('.narracoes:first').remove();
			$(this).stop().transition({scale:"1.3"},200);
			$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
				$(this).hide();	
			});
		});
		$(".btnView").mouseleave(function(){
			$(this).stop().transition({scale:"1"},200);
		});
		$(".btnView").click(function(){
			//$(".imgPin").removeClass("visto");$("#painel .imgPin").attr("src","img/pin.gif");
			$(".janela").stop().transition({scale:"0"}, 600, "easeInBack",function(){
				$(this).hide();	
			});
			$("#cntinstrucoes").text("Passe o cursor sobre as imagens para visualizar detalhes das duas cenas urbanas.")
			$("#painel2").transition({skewX:"-60deg", skewY:"-40deg", perspective:"250", rotateY:"-180deg",scale:"0"},1000, "easeInQuad");
			$("#painel").transition({skewX:"-60deg", skewY:"-40deg", perspective:"250", rotateY:"-180deg",scale:"0"},1, "easeInQuad");
			setTimeout(function(){
				$(this).hide();
				$("#detalhes").show();
				$("#detalhes").css({"skewY":"60deg","skewX":"-40deg","rotateY":"180deg"});
				$("#detalhes").transition({skewX:"0deg",skewY:"0deg", rotateY:"0deg",scale:"1"},1000, "easeOutQuad");
				$('.zoom-map1, .zoom-map2').elevateZoom({zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn: 500,zoomWindowFadeOut: 500,scrollZoom: true});	
			},1000);
		});
		
		function ativaclick(x){
			$(x).attr("src","img/pin-visto.png");
			$(x).addClass("visto");
			
			if($(".visto").size() == 5){
				$(".btnNext").show(500);
			}else{
				$(".btnNext").hide();
			}
		};
		function ativaclick2(x){
			$(x).attr("src","img/pin-visto.png");
			$(x).addClass("visto2");
			
			if($(".visto2").size() == 6){
				$(".btnPrev").show(500);
				$(".btnView").show(500);
			}else{
				$(".btnPrev").hide();
				$(".btnView").hide();
			}
		};
		
		$(".pos1").mouseover(function(){
			$(".label").show("fade", 200);
		});
		$(".pos1").mouseleave(function(){
			$(".label").hide("fade", 100);
		});
		$(".pos1").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("britadeira");
				$('.narracoes').get(0).play();
				ativaclick(this);
				$("#idBritadeira").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos2").mouseover(function(){
			$(".label2").show("fade", 200);
		});
		$(".pos2").mouseleave(function(){
			$(".label2").hide("fade", 100);
		});
		$(".pos2").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("predio");
				$('.narracoes').get(0).play();
				ativaclick(this);
				$("#idPredio").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos3").mouseover(function(){
			$(".label3").show("fade", 200);
		});
		$(".pos3").mouseleave(function(){
			$(".label3").hide("fade", 100);
		});
		$(".pos3").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);	
				});
			}else{
				montaPlayer("transito");
				$('.narracoes').get(0).play();
				ativaclick(this);
				$("#idTransito").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos4").mouseover(function(){
			$(".label4").show("fade", 200);
		});
		$(".pos4").mouseleave(function(){
			$(".label4").hide("fade", 100);
		});
		$(".pos4").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("estatua");
				$('.narracoes').get(0).play();
				ativaclick(this);
				$("#idEstatua").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos5").mouseover(function(){
			$(".label5").show("fade", 200);
		});
		$(".pos5").mouseleave(function(){
			$(".label5").hide("fade", 100);
		});
		$(".pos5").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("lixo");
				$('.narracoes').get(0).play();
				ativaclick(this);
				$("#idLixo").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos6").mouseover(function(){
			$(".label6").show("fade", 200);
		});
		$(".pos6").mouseleave(function(){
			$(".label6").hide("fade", 100);
		});
		$(".pos6").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("onibus");
				$('.narracoes').get(0).play();
				ativaclick2(this);
				$("#idOnibus").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos7").mouseover(function(){
			$(".label7").show("fade", 200);
		});
		$(".pos7").mouseleave(function(){
			$(".label7").hide("fade", 100);
		});
		$(".pos7").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("pessoasconversando");
				$('.narracoes').get(0).play();
				ativaclick2(this);
				$("#idPessoasconversando").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos8").mouseover(function(){
			$(".label8").show("fade", 200);
		});
		$(".pos8").mouseleave(function(){
			$(".label8").hide("fade", 100);
		});
		$(".pos8").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("ciclistas");
				$('.narracoes').get(0).play();
				ativaclick2(this);
				$("#idCiclistas").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos9").mouseover(function(){
			$(".label9").show("fade", 200);
		});
		$(".pos9").mouseleave(function(){
			$(".label9").hide("fade", 100);
		});
		$(".pos9").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("arvore");
				$('.narracoes').get(0).play();
				ativaclick2(this);
				$("#idArvore").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		
		$(".pos0").mouseover(function(){
			$(".label0").show("fade", 200);
		});
		$(".pos0").mouseleave(function(){
			$(".label0").hide("fade", 100);
		});
		$(".pos0").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("predio2");
				$('.narracoes').get(0).play();
				ativaclick2(this);
				$("#idPredio2").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
		$(".pos11").mouseover(function(){
			$(".label11").show("fade", 200);
		});
		$(".pos11").mouseleave(function(){
			$(".label11").hide("fade", 100);
		});
		$(".pos11").click(function(){
			$('.narracoes:first').remove();
			if($(".janela").is(":visible")){
				$(".janela").transition({scale:"0"}, 600, "easeInBack",function(){
					$(this).hide();
					$(".inf-tooltip, .inf-tooltip2, .inf-tooltip3").hide("fade",100);
				});
			}else{
				montaPlayer("coleta");
				$('.narracoes').get(0).play();
				ativaclick2(this);
				$("#idColeta").show();	
				$(".janela").transition({scale:"1"}, 600, "easeOutBack");
			}
		});
				
		}
		//////////////////////////////////////////////// FIM DO SCRIPT, NÃO ALTERAR ABAIXO!
		
		$('.btnsom').click(function() {
			if ($(this).hasClass('som_ligado')) {
				$(this).removeAttr('class').addClass('botao').addClass('btnsom').addClass('som_desligado').html('<img src="img/botaosomoff.png" alt="" width="43" height="43" />');
				$(".narracoes").prop("volume", 0);
				$("#audio1").get(0).pause();
				$("#audio2").get(0).pause();
			}
			else if ($(this).hasClass('som_desligado')) {
				$(this).removeAttr('class').addClass('botao').addClass('btnsom').addClass('som_ligado').html('<img src="img/botaosom.png" alt="" width="43" height="43" />');
				$(".narracoes").prop("volume", 1);
				$("#audio1").get(0).play();
				$("#audio2").get(0).pause();
			}
		});
		
		$(".btnhome").click(function(){
			location.href = "index.html";
		});
		
		$(".btninstrucao").click(function(){
			if($("#cntinstrucoes").is(":visible")){
				$("#instrucoes").hide();
				$("#cntinstrucoes").hide();
			}else{
				$("#instrucoes").show();
				$("#cntinstrucoes").show();
			}
		});
		
			$(".tool").click(function(){
				var pegasom = $(this).attr("name");
				$('.narracoes:first').remove();
					montaPlayer(pegasom);
				$(".inf-tooltip2, .inf-tooltip3").hide("fade",100);
				if($(this).find(".model1").is(":visible")){
					$('.narracoes:first').remove();
					$(".inf-tooltip").hide("fade",100);
				}else{
					
					$('.narracoes').get(0).play();
					$(".inf-tooltip").show("fade",100);
				}
			});
			$(".tool2").click(function(){
				var pegasom = $(this).attr("name");
				$(".inf-tooltip, .inf-tooltip3").hide("fade",100);
				if($(this).find(".model1").is(":visible")){
					$('.narracoes:first').remove();
					$(".inf-tooltip2").hide("fade",100);
				}else{
					$('.narracoes:first').remove();
					montaPlayer(pegasom);
					$('.narracoes').get(0).play();
					$(".inf-tooltip2").show("fade",100);
				}
			});
			$(".tool3").click(function(){
				var pegasom = $(this).attr("name");
				$(".inf-tooltip, .inf-tooltip2").hide("fade",100);
				if($(this).find(".model1").is(":visible")){
					$('.narracoes:first').remove();
					$(".inf-tooltip3").hide("fade",100);
				}else{
					$('.narracoes:first').remove();
					montaPlayer(pegasom);
					$('.narracoes').get(0).play();
					$(".inf-tooltip3").show("fade",100);
				}
			});

		
		

	});
	loader.start(); 
	
});
*/