var dsq1,box=document.querySelector(".navImgR1"),leftBtn=document.querySelector(".btnLeft"),rightBtn=document.querySelector(".btnRight"),imgs=document.querySelectorAll(".navIm1"),bigBox=document.querySelector(".navImgright"),lis=bigBox.querySelectorAll("li"),index=0,bool=!0;function moveMent(){hide1(),2<++index&&(index=0),show1()}move(imgs[index],{opacity:100}),dsq1=setInterval(moveMent,3e3),box.onmouseover=function(){clearInterval(dsq1)},box.onmouseout=function(){dsq1=setInterval(moveMent,3e3)},rightBtn.onclick=function(){moveMent()},leftBtn.onclick=function(){hide1(),--index<0&&(index=2),show1()};for(let e=0;e<lis.length;e++)lis[e].onclick=function(){hide1(),index=e,show1()};function hide1(){imgs[index].style.zIndex=1,imgs[index].style.opacity=.1}function show1(){imgs[index].style.zIndex=3,move(imgs[index],{opacity:100});for(var e=0;e<lis.length;e++)lis[e].className="";lis[index].className="bg"}