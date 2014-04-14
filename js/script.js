$(document).ready(function () {

    /* 
    CSS3 transitions - transitions are defined in CSS using another class
    jQuery is simply used here to add the class dynamically and then add the second class
    */

    //called either as a function or when document ready i.e. DOM assembled 
    //function css3Solution() {

        $('#bubble2').addClass('bubblepop');
        //waits for first class transitions to complete (grow circle 0 to oversized) 
        //before applying second class transitions (decrease circle oversized to optimum) 
        
        setTimeout(function () {

            $('#bubble2')
                .css('transition', 'height 0.25s, width 0.25s, line-height 0.25s, border-radius 0.25s, border-width 0.25s, font-size 0.25s, right 0.25s, top 0.25s')
                .addClass('bubblepop2');

        }, 500);

        $('#bubble3').addClass('bubblepop');
        setTimeout(function () {

            $('#bubble3')
                .css('transition', 'height 0.25s, width 0.25s, line-height 0.25s, border-radius 0.25s, border-width 0.25s, font-size 0.25s, right 0.25s, top 0.25s')
                .addClass('bubblepop2');

        }, 500);

    //}

    //css3Solution();

});
