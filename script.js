

$(document).ready(function(){
    
    $('.menuItem').mouseenter(function(){
        $(this).fadeTo('fast', 1);
       
    });


    $('.menuItem').mouseleave(function(){
            $(this).fadeTo('fast', .8);

    });


    $('.button').mouseenter(function(){
        $(this).fadeTo('fast', 1);
       
    });


    $('.button').mouseleave(function(){
            $(this).fadeTo('fast', .9);
           
    });  


    $('.downloadTitle').mouseenter(function(){
        $(this).css('cursor', 'pointer').fadeTo('fast', 1);
       
    });

     $('.downloadTitle').mouseleave(function(){
        $(this).fadeTo('fast', .9);
       
    });

    $('#hebKeyDown').click(function(){ 
        $('#hebKeyInfo').toggle();
       
    });

    $('#grkKeyDown').click(function(){ 
        $('#grkKeyInfo').toggle();
       
    });

    $('#keyDown').click(function(){ 
        $('#keyInfo').toggle();
    
    });

    $('#chartsDown').click(function(){
        $('#chartsInfo').toggle();
    });

     $('#compChartDown').click(function(){
        $('#compChartInfo').toggle();
    });

});

