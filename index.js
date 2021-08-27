$(document).ready(function () {

    function calcular(detalhar) {
        $('.alert').hide();
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
        let mediaProvas = ((notaRedação * pesoRedação) + (notaNatureza * pesoNatureza) + (notaHumanas * pesoHumanas) + (notaLinguagens * pesoLinguagens) + (notaMatematica * pesoMatematica))
        let mediaFinal = (mediaProvas / somaPesos)

        if (isNaN(mediaFinal)) {
            $('#media-final').css('color', 'transparent');
            console.log(mediaFinal)
        } else {
            $('#media-final').text('Média: ' + mediaFinal.toFixed(2));
            $('#media-final').css('color', '#212529');
        }

        if (detalhar) {
            $('#tabela-nota-humanas').html(`${notaHumanas}`);
            $('#tabela-nota-natureza').html(`${notaNatureza}`);
            $('#tabela-nota-linguagens').html(`${notaLinguagens}`);
            $('#tabela-nota-matematica').html(`${notaMatematica}`);
            $('#tabela-nota-redacao').html(`${notaRedação}`);

            $('#tabela-peso-humanas').html(`${pesoHumanas}`);
            $('#tabela-peso-natureza').html(`${pesoNatureza}`);
            $('#tabela-peso-linguagens').html(`${pesoLinguagens}`);
            $('#tabela-peso-matematica').html(`${pesoMatematica}`);
            $('#tabela-peso-redacao').html(`${pesoRedação}`);
            $('#tabela-soma-pesos').html(`${somaPesos}`);

            $('#tabela-peso-nota-humanas').html(`${pesoHumanas * notaHumanas}`);
            $('#tabela-peso-nota-natureza').html(`${pesoNatureza * notaNatureza}`);
            $('#tabela-peso-nota-linguagens').html(`${pesoLinguagens * notaLinguagens}`);
            $('#tabela-peso-nota-matematica').html(`${pesoMatematica * notaMatematica}`);
            $('#tabela-peso-nota-redacao').html(`${pesoRedação * notaRedação}`);
            $('#tabela-multiplica-peso-nota').html(`${mediaProvas}`);

            $('#span-soma-pesos').text(`${somaPesos}`);
            $('#span-multiplica-peso-nota').text(`${mediaProvas.toFixed(2)}`);
            $('#span-media-detalhada').text(`${mediaFinal.toFixed(2)}`);

            $('#formulario').hide();
            $('.janela-detalhamento').show();
        }
    }

    $("#calcular").click(function () {
        if ($('#nota-natureza').val() == '' || $('#nota-humanas').val() == ''
            || $('#nota-linguagens').val() == '' || $('#nota-matematica').val() == ''
            || $('#nota-redacao').val() == '' || $('#peso-natureza').val() == ''
            || $('#peso-humanas').val() == '' || $('#peso-linguagens').val() == ''
            || $('#peso-matematica').val() == '' || $('#peso-redacao').val() == ''
        ) {
            $('.alert').fadeIn();
        } else {
            calcular()
        }
    });

    $("#detalhar").click(function () {
        if ($('#nota-natureza').val() == '' || $('#nota-humanas').val() == ''
            || $('#nota-linguagens').val() == '' || $('#nota-matematica').val() == ''
            || $('#nota-redacao').val() == '' || $('#peso-natureza').val() == ''
            || $('#peso-humanas').val() == '' || $('#peso-linguagens').val() == ''
            || $('#peso-matematica').val() == '' || $('#peso-redacao').val() == ''
        ) {
            $('.alert').fadeIn();
        } else {
            $('.alert').hide();
            calcular(detalhar = true)
        }
    });

    $("#limpar").click(function () {
        $('input[type=number]').val('');
        $('#media-final').css('color', 'transparent');
    });

    $("#btn-fechar-detalhamento").click(function () {
        $('#formulario').show();
        $('.janela-detalhamento').hide();
    });

    $(".btn-close").click(function () {
        $('.alert').hide();
    });

    $(":input").keyup(function () {
        if ($('#nota-natureza').val() != '' || $('#nota-humanas').val() != ''
            || $('#nota-linguagens').val() != '' || $('#nota-matematica').val() != ''
            || $('#nota-redacao').val() != '' || $('#peso-natureza').val() != ''
            || $('#peso-humanas').val() != '' || $('#peso-linguagens').val() != ''
            || $('#peso-matematica').val() != '' || $('#peso-redacao').val() != ''
        ) {
            calcular()
        }
    });

    $(":input").change(function () {
        if ($('#nota-natureza').val() != '' || $('#nota-humanas').val() != ''
            || $('#nota-linguagens').val() != '' || $('#nota-matematica').val() != ''
            || $('#nota-redacao').val() != '' || $('#peso-natureza').val() != ''
            || $('#peso-humanas').val() != '' || $('#peso-linguagens').val() != ''
            || $('#peso-matematica').val() != '' || $('#peso-redacao').val() != ''
        ) {
            calcular()
        }
    });

});