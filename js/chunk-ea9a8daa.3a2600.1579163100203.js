(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ea9a8daa"],{"28d8":function(t,e,s){},"38cd":function(t,e,s){"use strict";var a=s("28d8");s.n(a).a},"98fb":function(t,e,s){"use strict";var a=s("cd02");s.n(a).a},adec:function(t,e,s){"use strict";s.r(e),s("96cf");var a,i=s("3b8d"),n=s("c24f"),c={name:"PageNav",data:function(){return{active:"home"}},computed:{getUserInfo:function(){return this.$store.state.userInfo}},mounted:function(){"/home"===this.$route.path?this.active="home":"/user"===this.$route.path?this.active="user":this.active="play"},watch:{$route:{handler:function(t,e){"/home"===t.path?this.active="home":"/user"===t.path?this.active="user":this.active="play"}}},methods:{toHome:function(){this.active="home",this.$router.push({path:"/home"})},toUser:function(){this.active="user",this.$router.push({path:"/user"})},toPlay:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.active="play",!(this.getUserInfo&&1<this.getUserInfo.bc)){t.next=5;break}this.$router.push({path:"/game"}),t.next=9;break;case 5:return t.next=7,Object(n.j)();case 7:(e=t.sent)&&1===e.state?this.$router.push({path:"/newinvite"}):this.$router.push({path:"/invite"});case 9:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})}},o=(s("98fb"),s("38cd"),s("2877")),r=Object(o.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav"},[s("router-view"),s("div",{staticClass:"tabbar"},[s("div",{staticClass:"tabbar-item",class:{active:"home"===t.active},on:{click:t.toHome}},[s("i",{staticClass:"iconfont",staticStyle:{"font-size":"20px"},attrs:{slot:"icon"},slot:"icon"},[t._v("")]),s("span",[t._v("首页")])]),s("div",{staticClass:"tabbar-item",class:{active:"play"===t.active},on:{click:t.toPlay}},[s("i",{staticClass:"iconfont",staticStyle:{"font-size":"20px"},attrs:{slot:"icon"},slot:"icon"},[t._v("")]),s("span",[t._v("玩赚")])]),s("div",{staticClass:"tabbar-item",class:{active:"user"===t.active},on:{click:t.toUser}},[s("i",{staticClass:"iconfont",staticStyle:{"font-size":"20px"},attrs:{slot:"icon"},slot:"icon"},[t._v("")]),s("span",[t._v("我的")])])])],1)}),[],!1,null,"178a5832",null);e.default=r.exports},cd02:function(t,e,s){}}]);