        // 顶部轮播图
        var num=1;
        function next(){
            if(num<8){
                num++;
                $("#img-lun").attr("src","image/首页轮播图/lun"+num+".jpg");  
                button(); 
            }
            else if(num==8){
                $("#img-lun").attr("src","image/首页轮播图/lun"+num+".jpg"); 
                button(); 
                num=0;    
            }
        }
        function button(){
            $(".item").css("background-color","rgba(211, 151, 151,0.1)");
            $("#li"+num).css("background-color","white");
        }
        button();
        setInterval("next()",2000);

    // 返回顶部
    var goTop = document.getElementById("goTop");
    var search = document.getElementById("search");
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