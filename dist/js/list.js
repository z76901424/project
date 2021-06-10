var row=document.querySelector(".list"),pagination=document.querySelector(".pagination"),nameCookie1=getCookie("name"),listA_all=document.querySelector(".list_title"),arr,arr2;!async function(){arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")");var o1={pageInfo:{pagenum:1,pagesize:20,totalsize:arr.length,totalpage:Math.ceil(arr.length/20)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{arr2=arr.slice(20*(a-1),20*a);var t="";arr2.forEach(a=>{t+=`
                <li class="list_cl fl">
                    <a href="../sy/xiangqing.html?id=${a.id}" class="pic">
                        <img src="${a.fdj_img2}" alt=".">
                    </a>
                    <a href="../sy/xiangqing.html?id=${a.id}" class="cont">
                        <span class="title" title="${a.title1}">
                        ${a.title1}
                        </span>
                    </a>
                    <a href="../sy/xiangqing.html?id=${a.id}" class="price">
                    <span>￥${a.new_mony}</span>
                    </a>
                    <a href="javascript:;" class="addbtns">加入购物车</a>
                </li>
            `}),row.innerHTML=t,listPage()})}();var fistAll1=listA_all.querySelectorAll("a");function liAll(){for(let i=0;i<fistAll1.length-1;i++)fistAll1[i].onclick=function(){var forAll=this.innerHTML;ajax({url:"../php/list1.php",data:`username=${forAll}`,success:function(dt){var arr1=eval("("+dt+")"),o1,str3;1<=arr1.length?($("lisAll").remove(),o1={pageInfo:{pagenum:1,pagesize:20,totalsize:arr1.length,totalpage:Math.ceil(arr1.length/20)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}},new Pagination(pagination,o1,a=>{arr2=arr1.slice(20*(a-1),20*a);var t="";arr2.forEach(a=>{t+=`
                        <li class="list_cl fl">
                            <a href="../sy/xiangqing.html?id=${a.id}" class="pic">
                                <img src="${a.fdj_img2}" alt=".">
                            </a>
                            <a href="../sy/xiangqing.html?id=${a.id}" class="cont">
                                <span class="title" title="${a.title1}">
                                ${a.title1}
                                </span>
                            </a>
                            <a href="../sy/xiangqing.html?id=${a.id}" class="price">
                            <span>￥${a.new_mony}</span>
                            </a>
                            <a href="javascript:;" class="addbtns">加入购物</a>
                        </li>
                    `}),row.innerHTML=t,listPage()})):($("lisAll").remove(),$(".pagination").css({display:"none"}),str3="",str3+=`<li class="lierro1" style="background-color:#fff;
                font-size:30px;
                width: 100%;
                height:500px;
                text-align: center;
                line-height: 280px;
                display: block;color:#666;">此类商品已下架完，请选择其它分类商品</li>
                `,row.innerHTML=str3,listPage())}})};var num1=0;$(".Min-Max").click(function(){var mimaMony;num1++,1==num1&&(mimaMony="ASC"),2==num1&&(mimaMony="DESC",num1=0),ajax({url:"../php/listMinmax.php",data:`minMony=${mimaMony}`,success:function(dt){var o1;listPage(),arr2=eval("("+dt+")"),1<=arr2.length&&($("lisAll").remove(),o1={pageInfo:{pagenum:1,pagesize:20,totalsize:arr2.length,totalpage:Math.ceil(arr2.length/20)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}},new Pagination(pagination,o1,a=>{arr2=arr2.slice(20*(a-1),20*a);var t="";arr2.forEach(a=>{t+=`
                    <li class="list_cl fl">
                        <a href="../sy/xiangqing.html?id=${a.id}" class="pic">
                            <img src="${a.fdj_img2}" alt=".">
                        </a>
                        <a href="../sy/xiangqing.html?id=${a.id}" class="cont">
                            <span class="title" title="${a.title1}">
                            ${a.title1}
                            </span>
                        </a>
                        <a href="../sy/xiangqing.html?id=${a.id}" class="price">
                        <span>￥${a.new_mony}</span>
                        </a>
                        <a href="javascript:;" class="addbtns">加入购物车</a>
                    </li>
                `}),row.innerHTML=t,listPage()}))}})})}function listPage(){var addbtns=row.querySelectorAll(".addbtns");for(let i=0;i<addbtns.length;i++)addbtns[i].onclick=function(){var cartName2=localStorage.getItem("cartName")||[],cartName2,bool;nameCookie1?0<cartName2.length?(cartName2=eval("("+cartName2+")"),bool=!0,cartName2.forEach(a=>{arr2[i].id==a.id&&(bool=!1,a.new_number++,localStorage.setItem("cartName",JSON.stringify(cartName2)))}),bool&&(arr2[i].new_number=1,console.log(arr2),cartName2.push(arr2[i]),localStorage.setItem("cartName",JSON.stringify(cartName2)))):(arr2[i].new_number=1,cartName2.push(arr2[i]),localStorage.setItem("cartName",JSON.stringify(cartName2))):alert("请登录")}}liAll();