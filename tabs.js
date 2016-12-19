
 
$(document).ready(function () {
  //Escribe tu código aquí
  $('#tab1').css('display', 'block'); //convierte el elemento en una caja
  $('.tabs a').on("click", function (){var tab = ($(this).attr('href'));
  //Bind an event handler to the “click” JavaScript event, or trigger that event on an element.
    num = Number(tab.slice(-1))

    $('li').removeClass('active'); //removes class active from all of them
    $('.tab').css('display', 'none'); //remove the element 
    // $('.tab').hide();
    $('li:nth-child(' + num + ' )').addClass('active'); //clicked tab to active
    $('#tab' + num).css('display', 'block'); //add info to tab
    // $('#tab' + num).show();
  });
});