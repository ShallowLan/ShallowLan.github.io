(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-31f91a86"],{1146:function(t,e,i){},"28cf":function(t,e,i){"use strict";var s=i("62b9");i.n(s).a},5447:function(t,e,i){},"565f":function(t,e,i){"use strict";var s=i("2638"),a=i.n(s),n=i("1988"),r=i("ad06"),l=i("7744"),c=i("dfaf"),o=i("1325"),h=i("a8fa"),u=i("d282"),d=i("a142"),f=i("ea8e"),v=Object(u.a)("field"),b=v[0],p=v[1];e.a=b({inheritAttrs:!1,props:Object(n.a)({},c.a,{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(d.b)(this.value)&&!this.readonly},listeners:function(){var t=Object(n.a)({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(f.a)(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t.value,i=this.$attrs.maxlength;return"number"===this.type&&Object(d.b)(i)&&e.length>i&&(e=e.slice(0,i),t.value=e),e}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),Object(h.a)()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(o.c)(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf(".");48<=e&&e<=57||46===e&&i||45===e||Object(o.c)(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(d.c)(this.autosize)){var i=this.autosize,s=i.maxHeight,a=i.minHeight;s&&(e=Math.min(e,s)),a&&(e=Math.max(e,a))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:p("control",this.inputAlign)},[e]);var i={ref:"input",class:p("control",this.inputAlign),domProps:{value:this.value},attrs:Object(n.a)({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",a()([{},i])):t("input",a()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement;if(this.slots("left-icon")||this.leftIcon)return t("div",{class:p("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(r.a,{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots;if(e("right-icon")||this.rightIcon)return t("div",{class:p("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(r.a,{attrs:{name:this.rightIcon}})])},renderWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.$attrs.maxlength)return t("div",{class:p("word-limit")},[this.value.length,"/",this.$attrs.maxlength])}},render:function(t){var e,i=t,s=this.slots,a=this.labelAlign,n={icon:this.renderLeftIcon};return s("label")&&(n.title=function(){return s("label")}),i(l.a,{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[p("label",a),this.labelClass],arrowDirection:this.arrowDirection},class:p((e={error:this.error},e["label-"+a]=a,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:n,on:{click:this.onClick}},[i("div",{class:p("body")},[this.renderInput(),this.showClear&&i(r.a,{attrs:{name:"clear"},class:p("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),s("button")&&i("div",{class:p("button")},[s("button")])]),this.renderWordLimit(),this.errorMessage&&i("div",{class:p("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},6258:function(t,e,i){},"62b9":function(t,e,i){},7744:function(t,e,i){"use strict";var s=i("1988"),a=i("2638"),n=i.n(a),r=i("d282"),l=i("a142"),c=i("dfaf"),o=i("ba31"),h=i("48f4"),u=i("ad06"),d=Object(r.a)("cell"),f=d[0],v=d[1];function b(t,e,i,s){var a=e.icon,r=e.size,c=e.title,d=e.label,f=e.value,b=e.isLink,p=e.arrowDirection,g=i.title||Object(l.b)(c),m=i.default||Object(l.b)(f),k=(i.label||Object(l.b)(d))&&t("div",{class:[v("label"),e.labelClass]},[i.label?i.label():d]),y=g&&t("div",{class:[v("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[c]),k]),O=m&&t("div",{class:[v("value",{alone:!i.title&&!c}),e.valueClass]},[i.default?i.default():t("span",[f])]),C=i.icon?i.icon():a&&t(u.a,{class:v("left-icon"),attrs:{name:a}}),w=i["right-icon"],j=w?w():b&&t(u.a,{class:v("right-icon"),attrs:{name:p?"arrow-"+p:"arrow"}}),x=b||e.clickable,I={clickable:x,center:e.center,required:e.required,borderless:!e.border};return r&&(I[r]=r),t("div",n()([{class:v(I),attrs:{role:x?"button":null,tabindex:x?0:null},on:{click:function(t){Object(o.a)(s,"click",t),Object(h.a)(s)}}},Object(o.b)(s)]),[C,y,O,j,i.extra&&i.extra()])}b.props=Object(s.a)({},c.a,{},h.c),e.a=f(b)},"77fa":function(t,e,i){"use strict";i.r(e);var s=i("75fc"),a=(i("e7e5"),i("d399")),n=(i("4917"),i("2994"),i("2bdd")),r=(i("68ef"),i("09fe"),i("1146"),i("f032"),i("2638")),l=i.n(r),c=i("1988"),o=i("d282"),h=i("ba31"),u=i("1325"),d=i("565f"),f=Object(o.a)("search"),v=f[0],b=f[1],p=f[2];function g(t,e,i,s){var a={attrs:s.data.attrs,on:Object(c.a)({},s.listeners,{keypress:function(t){13===t.keyCode&&(Object(u.c)(t),Object(h.a)(s,"search",e.value)),Object(h.a)(s,"keypress",t)}})},n=Object(h.b)(s);return delete n.attrs,t("div",l()([{class:b({"show-action":e.showAction}),style:{background:e.background}},n]),[t("div",{class:b("content",e.shape)},[function(){if(i.label||e.label)return t("div",{class:b("label")},[i.label?i.label():e.label])}(),t(d.a,l()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable},scopedSlots:{"left-icon":i["left-icon"],"right-icon":i["right-icon"]}},a]))]),function(){if(e.showAction)return t("div",{class:b("action"),attrs:{role:"button",tabindex:"0"},on:{click:function(){i.action||(Object(h.a)(s,"input",""),Object(h.a)(s,"cancel"))}}},[i.action?i.action():e.actionText||p("cancel")])}()])}g.props={value:String,label:String,rightIcon:String,actionText:String,showAction:Boolean,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},background:{type:String,default:"#fff"},leftIcon:{type:String,default:"search"}};var m=v(g),k=i("9d22"),y=i("47cc"),O={name:"Eilter",components:{productList:k.a,Like:y.a},props:["add","taget","isCust"],data:function(){return{}},watch:{isCust:function(t){}}},C=(i("e6c6"),i("2877")),w=Object(C.a)(O,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fiter"},[0<t.add.length?i("productList",{attrs:{list:t.add,isCust:t.isCust}}):t.taget?i("div",[i("div",{staticClass:"no-result"},[i("div",{staticClass:"result-img"}),i("span",[t._v("暂无内容,换个类型试试吧！")])]),i("div",{staticClass:"belike"},[i("div",[i("like")],1)])]):t._e()],1)}),[],!1,null,null,null).exports,j=i("3191"),x=(i("96cf"),i("3b8d")),I=i("4020");function S(){return(S=Object(x.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(I.a)("/index/hotKeyword/".concat(e)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var N={name:"Seek",components:{Search:m,product:k.a,EIlter:w,Like:y.a,List:n.a},directives:{focus:{inserted:function(t){t.focus()}}},data:function(){return{isCust:0,styleShow:!1,clickType:0,searchResult:!0,searchStatus:!1,heaederfixed:!1,finished:!1,loading:!1,val:"",bourn:[],list:[],moreList:[],Navlist:[],flag:!1,themeId:0,newProductOrderBy:0,Rateitem:0,resultNum:5,startIndex:0,sortOrder:"all",areaId:"",taget:!1}},mounted:function(){var t=this;window.addEventListener("scroll",this.handleScrool),this.getCity(),function(t){return S.apply(this,arguments)}(this.areaId).then((function(e){1===e.state&&e.data.map((function(e,i){t.bourn.push(e.keyName)}))}))},methods:{stateBlack:function(){this.$router.push("/home")},inputIndex:function(t){""===this.val?this.styleShow=!1:this.styleShow=!0,null===t.match("^[a-zA-Z0-9_一-龥]+$")&&(this.val="")},getCity:function(){return this.areaId=this.$store.state.city.id,this.areaId},handleScrool:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.heaederfixed=45<t},ResetOption:function(){this.Navlist=[],this.finished=!1,this.resultNum=5,this.startIndex=0},Goosclick:function(){this.clickType=1,this.Navlist=[],this.startIndex=0,this.NavAjax()},changeOrder:function(t){if(this.clickType=1,this.Navlist=[],this.startIndex=0,"just"===t&&"just"===this.sortOrder)return this.sortOrder="reverse",this.newProductOrderBy=0,this.Rateitem=1,void this.NavAjax();this.sortOrder=t,"new"===this.sortOrder&&(this.newProductOrderBy=1,this.Rateitem=0),"just"===this.sortOrder&&(this.newProductOrderBy=0,this.Rateitem=2),"all"===this.sortOrder&&(this.newProductOrderBy=0,this.Rateitem=0),this.NavAjax()},Clearclick:function(){this.flag=!1,this.searchStatus=!1,this.val="",this.Navlist=[],this.startIndex=0,this.resultNum=5,this.themeId=0,this.Rateitem=0,this.clickType=0,this.searchResult=!0},searchInput:function(t){this.clickType=0,this.ResetOption(),this.flag=!1,this.val=t,this.searchStatus=!0,this.NavAjax()},handleSearch:function(t){this.clickType=0,this.ResetOption(),this.flag=!1,this.themeId=0,this.Rateitem=0,this.newProductOrderBy=0,this.sortOrder="all",""===this.val?this.searchResult=!1:(this.NavAjax(),this.searchStatus=!0)},onLoad:function(){this.flag&&(this.startIndex=this.startIndex+this.resultNum,this.themeId=this.themeId,this.priceOrderBy=this.Rateitem,this.NavAjax())},NavAjax:function(){var t=this;a.a.loading({duration:0,message:"加载中...",forbidClick:!0});var e={key:this.val,resultNum:this.resultNum,priceOrderBy:this.Rateitem,startIndex:this.startIndex,newProductOrderBy:this.newProductOrderBy,areaId:this.getCity(),isSearch:1};this.themeId&&(e.themeId=this.themeId),this.taget=!1,Object(j.g)(e).then((function(e){t.loading=!1,a.a.clear(),1===e.state&&(t.isCust=e.isCust,0===e.data.results.length&&(t.finished=!0,0===t.Navlist.length&&(t.finished=!0,0===t.clickType?(t.searchResult=!1,t.searchStatus=!1):t.taget=!0)),t.flag?t.Navlist=[].concat(Object(s.a)(t.Navlist),Object(s.a)(e.data.results)):(t.Navlist=e.data.results,t.flag=!0))}))}}},$=(i("28cf"),i("bb53"),Object(C.a)(N,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"search"}},[i("Search",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"seek",attrs:{placeholder:"请输入搜索关键词","show-action":"",maxlength:"14"},on:{clear:t.Clearclick,search:function(e){return t.handleSearch(t.val)},input:t.inputIndex},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}},[t.styleShow?i("div",{attrs:{slot:"action"},on:{click:function(e){return t.handleSearch(t.val)}},slot:"action"},[t._v("搜索")]):i("div",{attrs:{slot:"action"},on:{click:t.stateBlack},slot:"action"},[t._v("取消")])]),t.searchStatus?i("div",[i("div",{staticClass:"header",class:1==t.heaederfixed?"fixation":""},[i("div",{staticClass:"sort-item",class:{active:"all"===t.sortOrder},on:{click:function(e){return t.changeOrder("all")}}},[i("span",[t._v("全部")])]),i("div",{staticClass:"sort-item",class:{active:"new"===t.sortOrder},on:{click:function(e){return t.changeOrder("new")}}},[i("span",[t._v("最新")])]),i("div",{staticClass:"sort-item",class:{active:"just"===t.sortOrder||"reverse"===t.sortOrder},on:{click:function(e){return t.changeOrder("just")}}},[i("span",[t._v("价格")]),i("div",{staticClass:"sort-item-icon"},[i("i",{staticClass:"iconfont",class:{bright:"just"===t.sortOrder}},[t._v("")]),i("i",{staticClass:"iconfont botton",class:{bright:"reverse"===t.sortOrder}},[t._v("")])])])]),i("List",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("EIlter",{attrs:{add:t.Navlist,taget:t.taget,isCust:t.isCust}})],1)],1):i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.searchResult,expression:"searchResult"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:0<t.bourn.length,expression:"bourn.length > 0"}],staticClass:"hotsearch"},[i("h3",[t._v("热门搜索")]),i("div",{staticClass:"hotsite"},t._l(t.bourn,(function(e,s){return i("div",{key:s,staticClass:"site-item",on:{click:function(i){return t.searchInput(e)}}},[t._v(t._s(e))])})),0)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.searchResult,expression:"!searchResult"}]},[t._m(0)]),i("div",{staticClass:"belike"},[i("div",[i("like")],1),i("div",{staticClass:"like-nav"},[i("product",{attrs:{type:"1",list:t.list,isCust:t.isCust}})],1)])]),i("div")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-result"},[e("div",{staticClass:"result-img"}),e("span",[this._v("无搜索结果，换个词试试吧~")])])}],!1,null,"53ed2155",null));e.default=$.exports},a8fa:function(t,e,i){"use strict";var s=i("a142"),a=i("a8c1");i.d(e,"a",(function(){return r}));var n=!s.d&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());function r(){n&&Object(a.e)(Object(a.b)())}},bb53:function(t,e,i){"use strict";var s=i("5447");i.n(s).a},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var s={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},e6c6:function(t,e,i){"use strict";var s=i("6258");i.n(s).a},f032:function(t,e,i){}}]);