document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('.open_nav').addEventListener('click',function(e){
    document.getElementById('open_nav').style.width= '0px';
    document.getElementById('close_nav').innerHTML='❌';
    document.getElementById("nav_bar").style.width = "200px";
              
    });


    document.querySelector('#close_nav').addEventListener('click',function(e){
        document.getElementById('close_nav').innerHTML= '';
        document.getElementById('open_nav').style.width='114px';
        document.getElementById("nav_bar").style.width = "0px";


});
});
