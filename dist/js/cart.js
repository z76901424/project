var cartContent=document.querySelector(".cartContent"),cartConten=document.querySelector(".cartConten"),cartName1=localStorage.getItem("cartName"),checkout=document.querySelector(".checkout"),cookieName=getCookie("name");function exhibition(){var t,a,r;cartName1?(t=cartName1.every(e=>1==e.is_select),r=a="",cartName1.forEach(e=>{a+=` 
            <ul >
            <li>
            <input type="checkbox" name="xuan" ${1==e.is_select?"checked":""}
            data-id=${e.id}  >
            </li>
            <li class="cartCochild"><a href="javascript:;"><img src="${e.fdj_img2}" alt="">
            <a href="#" >
                ${e.title1}</a>
            </a></li>
            <li>${e.fenlei1}</li>
            <li>¥${e.new_mony}</li>
            <li class="cartoperation">
                <button ${e.new_number<=1?"disabled":""} data-id=${e.id}>-</button>
                <input type="tynmber" value="${e.new_number}">
                <button ${e.new_number>=e.cart_number?"disabled":""} data-id=${e.id} >+</button>
            </li>
            <li>¥<span>${e.new_mony*e.new_number}</span></li>
            <li data-id=${e.id}>删除</li>
            </ul>
            
        `,r=`
            <div class="checkoutL fl">
            <input type="checkbox" name="quan" ${t?"checked":""}>全选 
            <a href="javascript:;">删除选中商品</a>
            </div>
            <a href="javascript:;" class="gocheckout fr ">去结算</a>
            <div class="checkoutM fr">
                <p>已选 <span>${total()[0]}件</span> 商品 <i>合计：<span>￥${total()[1]}</span></i> </p>
                <p>已优惠:￥<span>${total()[2]}</span> </p>
            </div>
            <div class="clr"></div>
        `}),cartConten.innerHTML=a,checkout.innerHTML=r):cartConten.innerHTML=`
            <ul>
                <li class="cartLi"><h4><a href="../sy/list.html">购物车内还没有物品，快去选购吧！</a></h4>
                </li>
            </ul>
            <div class="clr clr2"></div>
        `}function total(){var t=0,a=0,r=0;return cartName1.forEach(e=>{1==e.is_select&&(r=e.old_mony.split("¥"),t+=e.new_number,a+=parseFloat(e.new_mony)*parseInt(e.new_number),r=parseInt(e.new_number)*(parseFloat(r[1])-parseFloat(e.new_mony)))}),[t,a,r]}function astyle(){var t=document.querySelector(".gocheckout");cartName1.forEach(e=>{1<=total()[1]?($(".gocheckout").attr("disabled",!0),t.style.cursor="pointer",t.style.background="linear-gradient(180deg,rgba(255,51,51,1) 0,rgba(255,102,51,1) 100%)"):($(".gocheckout").attr("disabled",!1),t.style.background="#ddd")})}cookieName?(cartName1=eval("("+cartName1+")"),exhibition()):(alert("非法进入，请登录！"),location.href="../sy/HomePage.html"),cartContent.onclick=function(e){var t,a,r=(e=e||window.event).target||e.srcElement;"+"==r.innerHTML&&(t=r.getAttribute("data-id"),cartName1.forEach(e=>{e.id==t&&e.new_number++}),localStorage.setItem("cartName1",JSON.stringify(cartName1)),exhibition(),astyle()),"-"==r.innerHTML&&(t=r.getAttribute("data-id"),cartName1.forEach(e=>{e.id==t&&e.new_number--}),localStorage.setItem("cartName1",JSON.stringify(cartName1)),exhibition(),astyle()),"删除"==r.innerHTML&&(t=r.getAttribute("data-id"),cartName1=cartName1.filter(e=>e.id!=t),localStorage.setItem("cartName1",JSON.stringify(cartName1)),exhibition()),"quan"==r.name&&(cartName1.forEach(e=>{r.checked?e.is_select=1:e.is_select=0}),localStorage.setItem("cartName1",JSON.stringify(cartName1)),exhibition(),astyle()),"xuan"==r.name&&(a=r.getAttribute("data-id"),cartName1.forEach(e=>{e.id==a&&(1==e.is_select?e.is_select=0:e.is_select=1),localStorage.setItem("cartName1",JSON.stringify(cartName1)),exhibition(),astyle()})),"去结算"==r.innerHTML&&(1<=total()[1]&&alert("您已支付："+total()[1]+"元"),cartName1=cartName1.filter(e=>1!=e.is_select),localStorage.setItem("cartName1",JSON.stringify(cartName1)),exhibition()),"删除选中商品"==r.innerHTML&&(cartName1=cartName1.filter(e=>1!=e.is_select),localStorage.setItem("cartName1",JSON.stringify(cartName1)),exhibition())};