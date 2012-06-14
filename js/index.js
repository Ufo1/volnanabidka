$(document).ready(function() {
    $('.selectMainCategory').live('click',function(){
        var tohle = $(this);
        var dropDown = $('.dropDownMainCategory');

        if(dropDown.css('display') == "none"){
            
        
            var offset = tohle.offset();
        
            dropDown.css('top',150);
            dropDown.css('left',76);
            dropDown.slideDown();
        }else {
            dropDown.slideUp();
        }
        
    });
});

function showMainDropDown(){
    
}

