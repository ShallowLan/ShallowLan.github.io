(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-30fb529f"],{"08ac":function(t,i,e){t.exports=e.p+"img/team1.dba3872b.jpg"},"2bb1":function(t,i,e){"use strict";var s=e("1988"),n=e("d282"),a=Object(n.a)("swipe-item"),o=a[0],c=a[1];i.a=o({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var i=t,e=this.$parent,n=e.vertical,a=e.computedWidth,o=e.computedHeight,r={width:a+"px",height:n?o+"px":"100%",transform:"translate"+(n?"Y":"X")+"("+this.offset+"px)"};return i("div",{class:c(),style:r,on:Object(s.a)({},this.$listeners)},[this.slots()])}})},4598:function(t,i,e){"use strict";(function(t){e.d(i,"c",(function(){return r})),e.d(i,"b",(function(){return h})),e.d(i,"a",(function(){return u}));var s=e("a142"),n=Date.now(),a=s.d?t:window,o=a.requestAnimationFrame||function(t){var i=Date.now(),e=Math.max(0,16-(i-n)),s=setTimeout(t,e);return n=i+e,s},c=a.cancelAnimationFrame||a.clearTimeout;function r(t){return o.call(a,t)}function h(t){r((function(){r(t)}))}function u(t){c.call(a,t)}}).call(this,e("c8ba"))},"482d":function(t,i,e){"use strict";function s(t,i,e){return Math.min(Math.max(t,i),e)}e.d(i,"a",(function(){return s}))},"4b0a":function(t,i,e){"use strict";e("68ef"),e("786d")},5596:function(t,i,e){"use strict";var s=e("d282"),n=e("1325"),a=e("3875"),o=e("5fbe"),c=e("4598"),r=e("482d"),h=Object(s.a)("swipe"),u=h[0],l=h[1];i.a=u({mixins:[a.a,Object(o.a)((function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()}))],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return(t={})[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=1<this.count?-this.size*this.active:0,this.swipes.forEach((function(t){t.offset=0})),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(n.c)(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:0<t?0<this.delta?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(r.a)(i+t,-1,e):Object(r.a)(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var s=Math.round(i-e);return this.loop||(s=Object(r.a)(s,this.minOffset,0)),s},move:function(t){var i=t.pace,e=void 0===i?0:i,s=t.offset,n=void 0===s?0:s,a=t.emitChange,o=this.loop,c=this.count,r=this.active,h=this.swipes,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var f=this.getTargetActive(e),p=this.getTargetOffset(f,n);if(o){if(h[0]){var d=p<l;h[0].offset=d?u:0}if(h[c-1]){var v=0<p;h[c-1].offset=v?-u:0}}this.active=f,this.offset=p,a&&f!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(c.b)((function(){var s;s=e.loop&&t===e.count?0===e.active?0:t:t%e.count,e.move({pace:s-e.active,emitChange:!0}),i.immediate?Object(c.b)((function(){e.swiping=!1})):e.swiping=!1}))},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&1<this.count&&(this.clear(),this.timer=setTimeout((function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(c.b)((function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()}))}),i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,s=this.activeIndicator,n=this.slots("indicator");return n||(this.showIndicators&&1<e?i("div",{class:l("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,n){return i("i",{class:l("indicator",{active:n===s}),style:n===s?t.indicatorStyle:null})}))]):void 0)}},render:function(t){var i=t;return i("div",{class:l()},[i("div",{ref:"track",style:this.trackStyle,class:l("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}})},"5d2c":function(t,i,e){t.exports=e.p+"img/team3.57bb26a3.jpg"},"66c6":function(t,i,e){t.exports=e.p+"img/team6.1354cfa1.jpg"},7844:function(t,i,e){"use strict";e("68ef"),e("8270")},"786d":function(t,i,e){},"817c":function(t,i,e){t.exports=e.p+"img/team4.ca035eda.jpg"},8270:function(t,i,e){},"82ff":function(t,i,e){t.exports=e.p+"img/team2.255bf3f7.jpg"},b392:function(t,i,e){"use strict";var s=e("d47f");e.n(s).a},c398:function(t,i,e){"use strict";e.r(i),e("4b0a");var s=e("2bb1"),n=(e("7844"),{name:"About",data:function(){return{}},components:{Swipe:e("5596").a,SwipeItem:s.a}}),a=(e("b392"),e("2877")),o=Object(a.a)(n,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"about"},[s("div",{staticClass:"about-banner"}),s("div",{staticClass:"about-box"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),s("div",{staticClass:"about-box-main pb10"},[s("Swipe",{staticClass:"about-swipe",attrs:{autoplay:3e3,"indicator-color":"#FFFFFF"}},[s("SwipeItem",[s("img",{attrs:{src:e("08ac")}})]),s("SwipeItem",[s("img",{attrs:{src:e("82ff")}})]),s("SwipeItem",[s("img",{attrs:{src:e("5d2c")}})]),s("SwipeItem",[s("img",{attrs:{src:e("817c")}})]),s("SwipeItem",[s("img",{attrs:{src:e("c553")}})]),s("SwipeItem",[s("img",{attrs:{src:e("66c6")}})])],1)],1)])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"about-box-top"},[i("p",[this._v("公司介绍")]),i("p",[this._v("COMPANY PROFILE")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"about-box-main"},[i("p",[this._v("自我游旅游拼多多是自我游旗下的全资旅游社交分销平台，秉承“让交易更简单”的使命，为旅游资源方解决淡季库存产品。与传统平台不同，旅游拼多多项目通过人与人的社交化分享传播，将精选的周边游、本地吃喝玩乐的优质特惠产品迅速触达到消费者手中，让消费者可以超值享受欢乐时光。")]),i("p",[this._v("母公司自我游是国内领先的旅游技术服务商，服务全国超过200万用户的运营，目前在全国30多个省市实现了旅游拼多多项目的业务覆盖，2018年分出累计超高5亿元的合作分成。")]),i("div",{staticClass:"box-main-img1"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"about-box-top"},[i("p",[this._v("关于我们")]),i("p",[this._v("ABOUT US")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"about-box-main"},[i("p",[this._v("\n        自我游旅游拼多多是一个集全国吃喝玩乐特惠旅游产品于一体的分销平台，我们助力商家通过自我游旅游拼多多实现新型创业、自有流量变现、资金快回笼、产品分销得力、游客特惠无忧出行……\n        我们是旅游行业的“大本营”，我们是致力让“大本营”中每一位参与者都能从中获得快乐、提升和实现自有价值的大家庭。\n      ")]),i("div",{staticClass:"box-main-img2"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"about-box-top color"},[i("p",[this._v("旅游拼多多的八大优势")]),i("p",[this._v("EIGHT ADVANTAGES")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ul",{staticClass:"about-box-icon"},[e("li",[e("span",{staticClass:"icon1"}),e("p",[t._v("模式成熟")])]),e("li",[e("span",{staticClass:"icon2"}),e("p",[t._v("海量产品")])]),e("li",[e("span",{staticClass:"icon3"}),e("p",[t._v("定期培训")])]),e("li",[e("span",{staticClass:"icon4"}),e("p",[t._v("区域保护")])]),e("li",[e("span",{staticClass:"icon5"}),e("p",[t._v("成本剔除")])]),e("li",[e("span",{staticClass:"icon6"}),e("p",[t._v("运营帮扶")])]),e("li",[e("span",{staticClass:"icon7"}),e("p",[t._v("营收点高")])]),e("li",[e("span",{staticClass:"icon8"}),e("p",[t._v("市场无限")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"about-box-top"},[i("p",[this._v("办公环境")]),i("p",[this._v("ABOUT US")])])}],!1,null,"1138d06f",null);i.default=o.exports},c553:function(t,i,e){t.exports=e.p+"img/team5.469403b4.jpg"},d47f:function(t,i,e){}}]);