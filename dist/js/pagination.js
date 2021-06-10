function Pagination(e,t,i){this.ele=e,this.options=t||{},this.cb=i||function(){},this.default={pageInfo:{pagenum:1,pagesize:10,totalsize:130,totalpage:13},textInfo:{first:"first",prev:"prev",list:"",next:"next",last:"last"}},this.list=null,this.init()}function createP(e,t){var i=document.createElement("p");return i.innerHTML=e,setStyle(i,{backgroundColor:"#fff",border:"1px solid #ddd",margin:"0px 3px",padding:"2px 5px",width:"22px",color:"#666",lineHeight:"20px",textAlign:"center",cursor:"pointer"}),e==t&&setStyle(i,{backgroundColor:"#23ac38",color:"#fff"}),i}function setStyle(e,t){for(var i in t)e.style[i]=t[i]}Pagination.prototype.init=function(){this.replace1(),this.showBox(),this.clickBox()},Pagination.prototype.replace1=function(){if(this.options.pageInfo)for(var e in this.options.pageInfo)this.default.pageInfo[e]=this.options.pageInfo[e];if(this.options.textInfo)for(var t in this.options.textInfo)this.default.textInfo[t]=this.options.textInfo[t]},Pagination.prototype.showBox=function(){this.ele.innerHTML="",setStyle(this.ele,{display:"flex",justifyContent:"center",alignItems:"center"}),this.showText(),this.showP(),this.stop1(),this.showBtn(),this.cb(this.default.pageInfo.pagenum)},Pagination.prototype.showBtn=function(){var e=document.createElement("input");e.value=this.default.pageInfo.pagenum,setStyle(e,{outline:"none",background:"#fff",border:"1px solid #ddd",margin:"0px 5px",width:"30px",lineHeight:"24px",textAlign:"center"}),this.ele.appendChild(e);e=document.createElement("button");e.innerHTML="GO",setStyle(e,{background:"#fff",border:"1px solid #ddd",textAlign:"center",margin:"0px 5px",width:"40px",lineHeight:"22px",cursor:"pointer"}),this.ele.appendChild(e)},Pagination.prototype.stop1=function(){var e=this.default.pageInfo.pagenum,t=this.default.pageInfo.totalpage,i=this.ele.children;1==e&&(i[0].style.backgroundColor="#fff",i[1].style.backgroundColor="#fff"),e==t&&(i[3].style.backgroundColor="#fff",i[4].style.backgroundColor="#fff")},Pagination.prototype.showText=function(){var e,t=this.default.textInfo;for(e in t){var i=document.createElement("div");"list"==(i.className=e)?setStyle(this.list=i,{display:"flex",justifyContent:"center",alignItems:"center"}):(setStyle(i,{background:"#fff",border:"1px solid #ddd",margin:"0px 3px",padding:"4px 10px",fontSize:"12px",cursor:"pointer"}),i.innerHTML=t[e]),this.ele.appendChild(i)}},Pagination.prototype.showP=function(){var e,t=this.default.pageInfo.pagenum,i=this.default.pageInfo.totalpage;if(i<10)for(let e=1;e<=i;e++){var n=createP(e,t);this.list.appendChild(n)}else if(t<5){for(let e=1;e<=5;e++){n=createP(e,t);this.list.appendChild(n)}(e=document.createElement("span")).innerHTML="...",this.list.appendChild(e);for(let e=i-1;e<=i;e++){n=createP(e,t);this.list.appendChild(n)}}else if(5==t){for(let e=1;e<=7;e++){n=createP(e,t);this.list.appendChild(n)}(e=document.createElement("span")).innerHTML="...",this.list.appendChild(e);for(let e=i-1;e<=i;e++){n=createP(e,t);this.list.appendChild(n)}}else if(5<t&&t<i-4){for(let e=1;e<=2;e++){n=createP(e,t);this.list.appendChild(n)}(e=document.createElement("span")).innerHTML="...",this.list.appendChild(e);for(let e=t-2;e<=t+2;e++){n=createP(e,t);this.list.appendChild(n)}var a=document.createElement("span");a.innerHTML="...",this.list.appendChild(a);for(let e=i-1;e<=i;e++){n=createP(e,t);this.list.appendChild(n)}}else if(t==i-4){for(let e=1;e<=2;e++){n=createP(e,t);this.list.appendChild(n)}(e=document.createElement("span")).innerHTML="...",this.list.appendChild(e);for(let e=i-6;e<=i;e++){n=createP(e,t);this.list.appendChild(n)}}else if(i-4<t){for(let e=1;e<=2;e++){n=createP(e,t);this.list.appendChild(n)}(e=document.createElement("span")).innerHTML="...",this.list.appendChild(e);for(let e=i-4;e<=i;e++){n=createP(e,t);this.list.appendChild(n)}}},Pagination.prototype.clickBox=function(){this.ele.onclick=e=>{var t=this.default.pageInfo.pagenum,e=(e=e||window.event).target||e.srcElement;"next"==e.className&&t!=this.default.pageInfo.totalpage&&(this.default.pageInfo.pagenum+=1,this.showBox()),"prev"==e.className&&1!=t&&(--this.default.pageInfo.pagenum,this.showBox()),"last"==e.className&&t!=this.default.pageInfo.totalpage&&(this.default.pageInfo.pagenum=this.default.pageInfo.totalpage,this.showBox()),"first"==e.className&&1!=t&&(this.default.pageInfo.pagenum=1,this.showBox()),"P"==e.nodeName&&t!=e.innerHTML&&(this.default.pageInfo.pagenum=parseInt(e.innerHTML),this.showBox()),"BUTTON"==e.nodeName&&e.previousElementSibling.value!=t&&(this.default.pageInfo.pagenum=parseInt(e.previousElementSibling.value),this.showBox())}};