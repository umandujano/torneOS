$(function(){
    $('#vamonos').click(function() {
        //alert('funciona el click');
//        $.post('http://www.inpgetsemani.com/100.php',{ identifica:'desarrollo'}, function(data) {
        $.post('http://www.isstech.gob.mx/eje/mobil/100.php',{ identifica:'desarrollo'}, function(data) {
            $('#resulta2').html(data);
        });
    });
    
});