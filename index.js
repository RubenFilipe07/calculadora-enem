$(document).ready(function() {

    $("#calcular").click(function(){
        if ($('input[type=number]').val() == ''){
           alert("Verifique se digitou valores em todos os campos")
        }else{
            let notaRedação = parseFloat($('#nota-redacao').val());
            let notaNatureza = parseFloat($('#nota-natureza').val());
            let notaHumanas = parseFloat($('#nota-humanas').val()); 
            let notaLinguagens = parseFloat($('#nota-linguagens').val());
            let notaMatematica = parseFloat($('#nota-matematica').val());
            let pesoRedação = parseFloat($('#peso-redacao').val());
            let pesoNatureza = parseFloat($('#peso-natureza').val());
            let pesoHumanas = parseFloat($('#peso-humanas').val());
            let pesoLinguagens = parseFloat($('#peso-linguagens').val());
            let pesoMatematica = parseFloat($('#peso-matematica').val());
            let somaPesos = pesoRedação + pesoNatureza + pesoHumanas + pesoLinguagens + pesoMatematica
            let mediaFinal = ((notaRedação*pesoRedação)+(notaNatureza*pesoNatureza)+(notaHumanas*pesoHumanas)+(notaLinguagens*pesoLinguagens)+(notaMatematica*pesoMatematica))/somaPesos
            $('#media-final').text('Média: ' + mediaFinal.toFixed(2));
            $('#media-final').css('color', '#212529');
        }
      });

      $("#detalhar").click(function(){
        if ($('input[type=number]').val() == ''){
            alert("Verifique se digitou valores em todos os campos")
         }else{
             let notaRedação = parseFloat($('#nota-redacao').val());
             let notaNatureza = parseFloat($('#nota-natureza').val());
             let notaHumanas = parseFloat($('#nota-humanas').val()); 
             let notaLinguagens = parseFloat($('#nota-linguagens').val());
             let notaMatematica = parseFloat($('#nota-matematica').val());
             let pesoRedação = parseFloat($('#peso-redacao').val());
             let pesoNatureza = parseFloat($('#peso-natureza').val());
             let pesoHumanas = parseFloat($('#peso-humanas').val());
             let pesoLinguagens = parseFloat($('#peso-linguagens').val());
             let pesoMatematica = parseFloat($('#peso-matematica').val());
             let somaPesos = pesoRedação + pesoNatureza + pesoHumanas + pesoLinguagens + pesoMatematica
             let mediaProvas = ((notaRedação*pesoRedação)+(notaNatureza*pesoNatureza)+(notaHumanas*pesoHumanas)+(notaLinguagens*pesoLinguagens)+(notaMatematica*pesoMatematica))
             let mediaFinal = (mediaProvas/somaPesos)
        
             $('#media-final').text('Média: ' + mediaFinal.toFixed(2));
             $('#media-final').css('color', '#212529');
            
             $('#tabela-nota-humanas').html(`${notaHumanas}`);
             $('#tabela-nota-natureza').html(`${notaNatureza}`);
             $('#tabela-nota-linguagens').html(`${notaNatureza}`);
             $('#tabela-nota-matematica').html(`${notaNatureza}`);
             $('#tabela-nota-redacao').html(`${notaNatureza}`);
 
             $('#tabela-peso-humanas').html(`${pesoHumanas}`);
             $('#tabela-peso-natureza').html(`${pesoNatureza}`);
             $('#tabela-peso-linguagens').html(`${pesoLinguagens}`);
             $('#tabela-peso-matematica').html(`${pesoMatematica}`);
             $('#tabela-peso-redacao').html(`${pesoRedação}`);
             $('#tabela-soma-pesos').html(`${somaPesos}`);

             $('#tabela-peso-nota-humanas').html(`${pesoHumanas*notaHumanas}`);
             $('#tabela-peso-nota-natureza').html(`${pesoNatureza*notaNatureza}`);
             $('#tabela-peso-nota-linguagens').html(`${pesoLinguagens*notaLinguagens}`);
             $('#tabela-peso-nota-matematica').html(`${pesoMatematica*notaMatematica}`);
             $('#tabela-peso-nota-redacao').html(`${pesoRedação*notaRedação}`);
             $('#tabela-multiplica-peso-nota').html(`${mediaProvas}`);
            
             $('#span-soma-pesos').text(`${somaPesos}`);
             $('#span-multiplica-peso-nota').text(`${mediaProvas.toFixed(2)}`);
             $('#span-media-detalhada').text(`${mediaFinal.toFixed(2)}`);

             $('#formulario').hide();
             $('.janela-detalhamento').show();
         }
    });  

    $("#limpar").click(function(){
        $('input[type=number]').val('');
    });

    $("#btn-fechar-detalhamento").click(function(){
        $('#formulario').show();
        $('.janela-detalhamento').hide();
    });
});