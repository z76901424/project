var Main_InfoL=document.querySelector(".Main_InfoL"),Main_InfoR=document.querySelector(".Main_InfoR"),selectC0=document.querySelector(".selectC0"),searchParticular=location.search,date1,searchP,dateID;function xqControl(){var Main_InfoLimg=$(".Main_InfoLimg")[0],Main_imgL=Main_InfoLimg.querySelector("img"),infoLimgMark=$(".infoLimgMark")[0],Main_InfoLimgR=$(".Main_InfoLimgR")[0],Main_imgR=Main_InfoLimgR.querySelector("img"),Main_InfoLiall=$(".Main_InfoLiall")[0],infoliAll=Main_InfoLiall.querySelectorAll("li");Main_InfoLimg.onmouseover=function(){infoLimgMark.style.display="block",Main_InfoLimgR.style.display="block"},Main_InfoLimg.onmouseout=function(){infoLimgMark.style.display="none",Main_InfoLimgR.style.display="none",Main_InfoLimgR.style.border="1px solid #ddd"},Main_InfoLimg.onmousemove=function(a){var e=(a=a||window.event).pageY-Main_InfoLimg.offsetTop-parseInt(infoLimgMark.offsetHeight/2),i=a.pageX-Main_InfoLimg.offsetLeft-parseInt(infoLimgMark.offsetWidth/2);e-=200;var n=Main_InfoLimg.offsetWidth-infoLimgMark.offsetWidth,a=Main_InfoLimg.offsetHeight-infoLimgMark.offsetHeight,i=(i-=100)<=0?(infoLimgMark.style.left="0px",0):n<=i?(infoLimgMark.style.left=n+"px",n):(infoLimgMark.style.left=i+"px",i),e=e<=0?(infoLimgMark.style.top="0px",0):a<=e?(infoLimgMark.style.top=a+"px",a):(infoLimgMark.style.top=e+"px",e);Main_imgR.style.height="960px",Main_imgR.style.width="960px",Main_imgR.style.left=-2*i+"px",Main_imgR.style.top=-2*e+"px"};for(var i=0;i<infoliAll.length;i++)infoliAll[i].onmouseover=function(){for(var a=0;a<infoliAll.length;a++)infoliAll[a].className="";this.className="bacgrd";var e=this.lastElementChild.getAttribute("src");Main_imgR.setAttribute("src",e),Main_imgL.setAttribute("src",e)};var $classIfyCP=$(".classIfyC p");$classIfyCP[0].onclick=function(){$classIfyCP[0].style.background="#FFEBE9",$classIfyCP[0].style.borderColor="#F33",$classIfyCP[1].style.background="#fff",$classIfyCP[1].style.borderColor="#ddd"},$classIfyCP[1].onclick=function(){$classIfyCP[1].style.background="#FFEBE9",$classIfyCP[1].style.borderColor="#F33",$classIfyCP[0].style.background="#fff",$classIfyCP[0].style.borderColor="#ddd"};var $infonumberAll=$(".Infonumber a"),$infonumberInpt=$(".Infonumber input"),inptNumber=$infonumberInpt[0].value;$infonumberAll[0].style.backgroundColor="#999",$infonumberAll[0].onclick=function(){inptNumber<=1?(inptNumber=1,$infonumberAll[0].style.backgroundColor="rgb(153, 153, 153)"):(inptNumber--,$infonumberInpt[0].value=inptNumber)},$infonumberAll[1].onclick=function(){inptNumber++,$infonumberInpt[0].value=inptNumber,$infonumberAll[0].style.backgroundColor="#ddd"};var $selectCardmoreAll=$(".selectCardmore a"),$selectDAll=$(".selectC");$selectCardmoreAll[0].onclick=function(){$selectDAll[0].style.display="block",$selectDAll[1].style.display="block",$selectDAll[2].style.display="block",$selectDAll[3].style.display="block"},$selectCardmoreAll[1].onclick=function(){$selectDAll[0].style.display="none",$selectDAll[1].style.display="block",$selectDAll[2].style.display="block",$selectDAll[3].style.display="block"},$selectCardmoreAll[2].onclick=function(){$selectDAll[0].style.display="none",$selectDAll[1].style.display="none",$selectDAll[2].style.display="block",$selectDAll[3].style.display="block"},$selectCardmoreAll[3].onclick=function(){$selectDAll[0].style.display="none",$selectDAll[1].style.display="none",$selectDAll[2].style.display="none",$selectDAll[3].style.display="block"};var shopping_cart=document.querySelector(".shopping_cart"),shopping_cart1=document.querySelector(".shopping_cart1");shopping_cart.addEventListener("click",function(e){e=e||window.event;var target=e.target,nameCookie,nameCookie1,cartName,cartName,judgeA;"立即购买"==target.innerHTML&&(nameCookie=getCookie("name"),nameCookie?alert("结算中"):alert("请登录账号")),"加入购物车"==target.innerHTML&&(inptNumber=$infonumberInpt[0].value,nameCookie1=getCookie("name"),nameCookie1?(cartName=localStorage.getItem("cartName")||[],0<cartName.length?(cartName=eval("("+cartName+")"),judgeA=!0,cartName.forEach(a=>{date1.id==a.id&&(judgeA=!1,1<inptNumber?a.new_number=parseInt(a.new_number)+parseInt(inptNumber):a.new_number++,localStorage.setItem("cartName",JSON.stringify(cartName)))}),judgeA&&(date1.new_number=1,cartName.push(date1),localStorage.setItem("cartName",JSON.stringify(cartName)))):(date1.new_number=1,cartName.push(date1),localStorage.setItem("cartName",JSON.stringify(cartName)))):alert("请登录账号"))})}searchParticular?(searchP=searchParticular.split("="),"?id"==searchP[0]?(dateID=searchP[1],async function(){date1=await promiseAjax({url:"../php/particular.php",data:"id="+dateID}),date1=eval("("+date1+")");var darr=`
            <!-- 显示的大图 -->
            <div class="Main_InfoLimg">
                <img src="${date1.fdj_img2}" alt="">
                <div class="infoLimgMark"></div>
            </div>
            <!-- 右边隐藏的大图 -->
            <div class="Main_InfoLimgR">
                <img src="${date1.fdj_img2}" alt="">
            </div>
            <!-- 所有图片 -->
            <div class="Main_InfoLiall">
                <ul>
                    <li class="bacgrd"><img src="${date1.fdj_img2}" alt=""></li>
                    <li>
                    <img src="${date1.fdj_img3}" alt="">
                    </li>
                    <li>
                    <img src="${date1.fdj_img5}" alt="">
                    </li>
                    <li>
                    <img src="${date1.fdj_img5}" alt="">
                    </li>
                </ul>
                <div class="clr"></div>
            </div>

            <!-- 售后承诺信息展示 -->
            <div class="Main_InfoLtxt">
                <ul>
                    <li><span class="iconfont icon-gou "></span>360商城发货&售后</li>
                    <li><span class="iconfont icon-gou "></span>满99元包邮</li>
                    <li><span class="iconfont icon-gou "></span>7天无理由退货</li>
                    <li><span class="iconfont icon-gou "></span>15天免费换货</li>
                </ul>
                <div class="clr"></div>
            </div>
            <div class="clr"></div>
            
            `;Main_InfoL.innerHTML=darr;var dtext=`
            <!-- 大标题 -->
                <div class="InfoRtitle">
                ${date1.title1}
                </div>
                <!-- 小标题 -->
                <div class="InfoRtitlemini">
                ${date1.title2}
                </div>
                <!-- 商品价格类型等 -->
               <div class="InfoRcontent">
                   <!-- 价格 -->
                    <div class="new_mony">
                        <span>价&nbsp;&nbsp;&nbsp;格</span>
                        <!-- 现价 -->
                        <strong class="new_monyl">￥${date1.new_mony}</strong>
                        <!-- 原价 -->
                        <span class="old_mony">
                        ${date1.old_mony}
                        </span>
                    </div>
                    <!-- 优惠卷 -->
                    <div class="discounts">
                        <span>
                            优&nbsp;&nbsp;&nbsp;惠
                        </span>
                        <i>满99.00减5.00元</i>

                    </div>
                    <!-- 促销 -->
                    <div class="Promotion">
                        <span>
                            促&nbsp;&nbsp;&nbsp;销
                        </span>
                        <span>
                            直降
                        </span>
                        <span class="plummet1">
                        ${date1.discounts}
                        </span>
                        <div class="plummet">
                        <span>
                            限购
                        </span>
                        <span>
                            该商品购买10件以下时享受单件价<span>${date1.new_mony}</span>元，超出数量以实际结算价为准
                        </span>
                        
                        </div>
                        
                    </div>
                    
               </div>
               <!-- 分类数量积分等 -->
               <div class="classIfy">
                <!-- 分类 -->
                <div class="classIfyC">
                    <span>分&nbsp;&nbsp;&nbsp;类</span>
                    <p type="checkbox">${date1.fenlei1}</p>
                    <p>${date1.fenlei2}</p>
                </div>
                <!-- 数量 -->
                <div class="Infonumber">
                    <span>数&nbsp;&nbsp;&nbsp;量</span>
                    <a href="javascript:;">-</a>
                    <input type="text" value="1">
                    <a href="javascript:;">+</a>
                </div>
                <!-- 积分 -->
                <div class="Infointegral">
                    <span>积&nbsp;&nbsp;&nbsp;分</span>
                    <i>购买可获得<span>${date1.new_mony}</span>积分</i><a href="javascript:;" class="spImg"> <img src="../img/gantanhaozhong.png" alt=""></a>
                </div>

                <!-- 购物车按钮 -->
               <div class="shopping_cart">
                <a href="javascript:;">立即购买</a>
                <a href="javascript:;">加入购物车</a>
                <a href="javascript:;"><span class="iconfont icon-xin"></span></a>
                </div>
               </div>
            `;Main_InfoR.innerHTML=dtext;var dadvertising=`
            <p>
            <a href="javascript:;" title="360生活馆">
                <img src="${date1.jieshao_img1}" alt="新品上市"></a>
            </p>
            <p>
            <a href="javascript:;" title="360生活馆">
                <img src="${date1.jieshao_img2}" alt="新品上市"></a>
            </p>
            <p>
                <a href="javascript:;" title="360生活馆">
                <img src="${date1.jieshao_img3}" alt="360生活馆"></a>
            </p>
            <p>
            <a href="javascript:;" title="360生活馆">
                <img src="${date1.jieshao_img4}" alt="新品上市"></a>
            </p>
            <p>
                <a href="javascript:;" title="360生活馆">
                <img src="${date1.jieshao_img5}" alt="360生活馆"></a>
            </p>
            <p>
            <a href="javascript:;" title="360生活馆">
                <img src="${date1.jieshao_img6}" alt="新品上市"></a>
            </p>
            <p>
                <a href="javascript:;" title="360生活馆">
                <img src="${date1.jieshao_img7}" alt="360生活馆"></a>
            </p>
            
            `;selectC0.innerHTML=dadvertising,xqControl()}()):(alert("参数有误"),location.href="../sy/list.html")):(alert("非法进入,请选择商品"),location.href="../sy/list.html");