'use strict';
(function(){
    function createLi()//随机生成瀑布流内容
    {
        var oLi=document.createElement('li');
        
        oLi.style.height=parseInt(Math.random()*500+50)+'px';
        
        return oLi;
    }

    window.onload=function ()
    {
        var oDiv=document.getElementById('div1');
        var aUl=oDiv.children;
        
        function createLis()
        {
            for(var i=0;i<20;i++)
            {
                var oLi=createLi();
                
                //找到最小的UL
                var arr=[];
                
                for(var j=0;j<aUl.length;j++)
                {
                    arr[j]=aUl[j];
                }
                
                arr.sort(function (ul1, ul2){
                    return ul1.offsetHeight-ul2.offsetHeight;
                });
                
                //最小的arr[0]
                arr[0].appendChild(oLi);
            }
        }
        
        createLis();
        
        window.onscroll=function ()
        {
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            
            var a=document.body.scrollHeight-document.documentElement.clientHeight;
            var b=scrollTop;
            
            document.title=b+'|'+a;
            
            if(a==b)
            {
                createLis();
            }
        };
    };
})();