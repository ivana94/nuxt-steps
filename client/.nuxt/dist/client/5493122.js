(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(t,e,n){"use strict";e.a={methods:{formatLargeNum:function(t){return t.toLocaleString()}}}},188:function(t,e,n){var content=n(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("5761fcbf",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";n(188)},193:function(t,e,n){(e=n(51)(!1)).push([t.i,"ul[data-v-cdf5a414]{flex-wrap:wrap}ul[data-v-cdf5a414],ul li[data-v-cdf5a414]{display:flex}ul li[data-v-cdf5a414]{justify-content:center;align-items:center;font-family:Monaco;width:15vw;height:10vh;list-style-type:none;box-shadow:0;transition:width 3s}ul li[data-v-cdf5a414]:hover{background-image:linear-gradient(90deg,red,orange,#ff0,green,#00f,indigo,violet);background-position:100% 50%;transition:all .3s;box-shadow:10px 10px 10px #000;-webkit-animation:rainbow-data-v-cdf5a414 3s ease-in-out infinite alternate;animation:rainbow-data-v-cdf5a414 3s ease-in-out infinite alternate}@-webkit-keyframes rainbow-data-v-cdf5a414{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}@keyframes rainbow-data-v-cdf5a414{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}",""]),t.exports=e},202:function(t,e,n){"use strict";n.r(e);n(39);var o=n(3),r={mixins:[n(187).a],data:function(){return{weeklyStepData:null}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/weekly-step-data");case 2:n=e.sent,o=n.weeklyStepData,n.weeklyDistanceData,t.weeklyStepData=o;case 6:case"end":return e.stop()}}),e)})))()}},c=(n(192),n(30)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"data-container"},t._l(t.weeklyStepData,(function(e,i){return n("li",{key:i},[t._v("\n            #"+t._s(i+1)+" || "+t._s(t.formatLargeNum(e))+"\n        ")])})),0)])}),[],!1,null,"cdf5a414",null);e.default=component.exports}}]);