    // 顶部轮播图
    var num=1;
    function next(){
        if(num<3){
            num++;
            $("#img-lun").attr("src","image/lun"+num+".png");  
            button(); 
        }
        else if(num==3){
            $("#img-lun").attr("src","image/lun"+num+".png"); 
            button(); 
            num=0;    
        }
    }
    function button(){
        $(".item").css("background-color","rgb(211, 151, 151)");
        $("#li"+num).css("background-color","white");
    }
    button();
    setInterval("next()",3000);

    // 返回顶部
    var goTop = document.getElementById("goTop");
    var search = document.getElementsByClassName("m_header_bar");
    window.onscroll = function(e){
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if(top>0){
            search.style.background = "#e12f32";
        }else{
            search.style.background = "";
        }
        if(top>400){
            goTop.style.display = "block";
        }else{
            goTop.style.display = "none";
        }
    };
