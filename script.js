document.addEventListener('DOMContentLoaded',function(){
    
    var orininal_width;
    document.querySelector('.open_nav').addEventListener('click',function(e){
    original_width=document.getElementById('open_nav').style.width ;   
    document.getElementById('open_nav').style.width= '0px';
    document.getElementById('close_nav').innerHTML='❌';
    document.getElementById("nav_bar").style.width = "200px";
              
    });


    document.querySelector('#close_nav').addEventListener('click',function(e){
        document.getElementById('close_nav').innerHTML= '';
        document.getElementById('open_nav').style.width= original_width;
        document.getElementById("nav_bar").style.width = "0px";


});
});
