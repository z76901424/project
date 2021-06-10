var u1,headerRighthL=document.querySelector(".header-righthL"),header_userMore=document.querySelector(".header-userMore"),Aexit=header_userMore.querySelector(".exit"),gouwuche=document.querySelector(".gouwuche"),search1=location.search;function lonGin(){var e=document.createElement("div");e.style=`
 width:100%;
 height:100%;
 background-color:rgba(0,0,0,0.3);
 position:fixed;
 top:"0px";
 left:"0px";
 right:0px;
 bottom:0px;
 z-index:200;
`,document.body.appendChild(e);e=document.createElement("div");e.innerHTML=`
<div class="login">
<div class="loginTop">
 <span class="iconfont  icon-guanbi"></span>
 <div class="loginTop1"><a >360账号登陆</a>
 </div>
</div>
<div class="loginContent">
 <div class="loginC">
     <form  id="from1" method="post">
         <!-- 账号输入有误提示框 -->
         <div class="userNanme-error" style="display: none;">-</div>
         <!-- //账号框 -->
         <div class="userName">
             <input type="text"
             class="zH"
             required="required"
             placeholder="请输入手机号或邮箱"
             autofocus="autofocus" >
         </div>
         <div class="userPWD">
             <input type="password" class="Pwd"
             required="required"
             placeholder="请输入密码">
         </div>
         <!-- 密码提示框 -->
         <div class="userPwd-error"></div>
         <div class="btn1">   
             <input type="submit" value="登录" class="btn-login1"></input>
         </div>  
         <div class="enroll">
             <a href="//i.360.cn/findpwd/" class="quc-right fr" target="_blank">找回密码</a>
             <a href="javascript:;" class="quc-link-sign-up fl">快速注册</a>
         </div>
     </form>
    
 </div>
</div>
</div>
`,document.body.appendChild(e)}function denglu(){var e=$("#from1"),n=document.querySelector(".btn-login1"),r=document.querySelector(".zH"),o=document.querySelector(".userNanme-error"),i=document.querySelector(".Pwd"),l=document.querySelector(".userPwd-error");$(".quc-link-sign-up").on("click",function(){$(".login").parent().prev().remove(),$(".login").parent().remove(),enroll1(),zhuce()}),$(".icon-guanbi").on("click",function(){$(".login").parent().prev().remove(),$(".login").parent().remove()}),r.onblur=function(){var e=this.value;/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(e)?(o.style.display="block",o.innerHTML="手机号码格式正确"):/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)?(o.style.display="block",o.innerHTML="邮箱格式正确"):(o.style.display="block",o.innerHTML="手机号码或邮箱格式有误，请重新输入")},i.onblur=function(){var e=this.value;pwd2=/^\w{6,16}$/.test(e)?(l.style.display="block",l.innerHTML="密码格式正确",!0):(l.style.display="block",!(l.innerHTML="密码格式有误"))},$("input").each(function(e,n){$(n).focus(function(){$(n).css("border","2px solid #36b447")}),$(n).blur(function(){$(n).css("border","2px solid #ccc")})}),e[0].onsubmit=function(e){e=e||window.event;return!1},n.onclick=function(){u1=r.value;var e=i.value;ajax({url:"../php/login.php",data:`username=${u1}&password=${e}`,success:function(e){1==e?(setCookie("name",u1),search1?location.reload():location.href="./list.html"):(o.style.display="block",o.innerHTML="账号或密码错误，请正确输入")}})}}function enroll1(){var e=document.createElement("div");e.style=`
         width:100%;
         height:100%;
         background-color:rgba(0,0,0,0.3);
         position:fixed;
         top:"0px";
         left:"0px";
         right:0px;
         bottom:0px;
         z-index:200;
     `,document.body.appendChild(e);e=document.createElement("div");e.innerHTML=`
     <div class="login1 " style="display:block;">
     <div class="loginTop">
         <span class="iconfont  icon-guanbi"></span>
         <div class="loginTop1 loginTop2">360账号注册
         </div>
     </div>
     <div class="loginContent loginContent1">
         <div class="loginC">
             <form  id="from2" method="post">
                 <!-- 账号输入有误提示框 -->
                 <div class="userName-error1"></div>
                 <!-- //账号框 -->
                 <div class="userName">
                     <input type="text"
                     class="zH2"
                     placeholder="请输入手机号或邮箱(必填)" required="required"
                     autofocus="autofocus" >
                 </div>
                 <!-- 密码提示框1 -->
                 <div class="userPwd-error1"></div>
                 <div class="userPWD">
                     <input type="password" class="Pwd1"
                     required="required"
                     placeholder="密码(6-16字符)仅包括数字、字母下划线(必填)">
                 </div>
                 <div class="userPWD1">
                     <input type="password" class="Pwd2"
                     required="required"
                     placeholder="请再次输入密码(必填)">
                 </div>
                 <!-- 密码提示框2 -->
                 <div class=" userPwd-error2"></div>
                 <!-- 邮箱框-->
                 <div class="userEmail">
                     <input type="text"
                     class="userEmail1"
                     required="required"
                     placeholder="请输入有效的邮箱(必填)">
                 </div>
                  <!-- 邮箱提示框 -->
                  <div class="userEmail-error"></div>

                 <!-- 同意注册框 -->
                 <div class="treaty">
                     <label>
                        <input type="checkbox" name="is_agree"> 阅读并同意
                        <a href="//i.360.cn/pub/protocol.html" target="_blank" class="quc-link">《360用户服务条款》</a>和
                        <a href="//i.360.cn/reg/privacy" target="_blank" class="quc-link">《360用户隐私政策》</a>
                     </label>
                 </div>
                 <div class="btn1">   
                     <input type="submit" value="注册" class=" btn-login2"></input>
                 </div>  
                 <div class="enroll1">
                     <a href="javascript:;" class="quc-link-sign-down fr">直接登录</a>
                     <span class="Account fr">已有账号,</span> 
                 </div>
             </form>
            
         </div>
     </div>
    </div>
     `,document.body.appendChild(e)}function zhuce(){var e,n,r=$("#from2"),o=document.querySelector("[name='is_agree']"),i=document.querySelector(".btn-login2"),l=document.querySelector(".zH2"),t=document.querySelector(".userName-error1"),s=document.querySelector(".Pwd1"),c=document.querySelector(".Pwd2"),a=document.querySelector(".userPwd-error1"),u=document.querySelector(".userPwd-error2"),d=document.querySelector(".userEmail1"),p=document.querySelector(".userEmail-error"),v=!1,m=!1,y=!1,h=!1,g=!1;r[0].onsubmit=function(e){e=e||window.event;return!1},$("input").each(function(e,n){$(n).focus(function(){$(n).css("border","2px solid #36b447")}),$(n).blur(function(){$(n).css("border","2px solid #ccc")})}),$(".quc-link-sign-down").on("click",function(){$(".login1").parent().prev().remove(),$(".login1").parent().remove(),lonGin(),denglu()}),$(".icon-guanbi").on("click",function(){$(".login1").parent().prev().remove(),$(".login1").parent().remove()}),l.oninput=function(){var e=this.value;v=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(e)?(t.style.display="block",t.innerHTML="手机号码格式正确",!0):(t.style.display="block",!(t.innerHTML="手机号码格式有误，请重新输入"))},s.oninput=function(){e=this.value,m=/^\w{6,16}$/.test(e)?(a.style.display="block",a.innerHTML="密码格式正确",!0):(a.style.display="block",!(a.innerHTML="密码输入格式不正确"))},c.oninput=function(){n=this.value,y=/^\w{6,16}$/.test(n)&&e===n?(u.style.display="block",u.innerHTML="两次密码输入正确",!0):(u.style.display="block",!(u.innerHTML="两次密码输入不正确或格式不对，请注意大小写"))},d.oninput=function(){var e=this.value;h=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)?(p.style.display="block",p.innerHTML="邮箱格式正确",!0):(p.style.display="block",!(p.innerHTML="邮箱格式有误，请重新输入"))},o.onclick=function(){g=!!o.checked},i.onclick=function(){var e,n,r;o.checked||(p.style.display="block",p.innerHTML="请确认，并勾选选项框"),v&&y&&m&&h&&g&&(e=l.value,n=c.value,r=d.value,ajax({url:"../php/enroll.php",data:`username=${e}&password=${n}&emal=${r}`,success:function(e){1==e?alert("账号已存在！请重新设置"):(alert("注册成功，请登录！"),$(".login1").parent().prev().remove(),$(".login1").parent().remove(),lonGin(),denglu())}}))}}function userTest(){var e=header_userMore.querySelector(".jsUser"),n=header_userMore.querySelector(".jsUser1");getCookie("name")?(header_userMore.style.display="block",headerRighthL.style.display="none",e.innerHTML=`${getCookie("name")}`,n.innerHTML=`${getCookie("name")}`,Aexit.onclick=function(){delCookie("name"),location.href="../sy/HomePage.html"}):header_userMore.style.display="none"}headerRighthL.addEventListener("click",function(e){e=(e=e||window.event).target||e.scrElement;"登录"==e.innerHTML&&(lonGin(),denglu()),"注册"==e.innerHTML&&(enroll1(),zhuce())}),gouwuche.onclick=function(){console.log(11),getCookie("name")?location.href="../sy/cart.html":alert("请登录后，再试。")},userTest();