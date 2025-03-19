(function(){"use strict";var e={995:function(e,t,a){var i=a(5471),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o={name:"App"},l=o,s=a(1656),d=(0,s.A)(l,n,r,!1,null,null,null),c=d.exports,u=a(173),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-wrapper",class:{hideSidebar:!e.sidebarOpen}},[t("Sidebar",{attrs:{open:e.sidebarOpen},on:{"toggle-sidebar":e.toggleSidebar}}),t("div",{staticClass:"main-container"},[t("Navbar",{attrs:{"sidebar-open":e.sidebarOpen},on:{"toggle-sidebar":e.toggleSidebar}}),t("div",{staticClass:"app-main"},["/"===e.$route.path?t("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[t("el-tab-pane",{attrs:{label:"แข่งขันรับงาน",name:"grab"}},[t("el-form",{staticClass:"query-form",attrs:{inline:!0}},[t("el-form-item",{attrs:{label:"ภูมิภาค"}},[t("el-select",{attrs:{placeholder:"กรุณาเลือก",size:"mini"},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}},[t("el-option",{attrs:{label:"B",value:"B"}}),t("el-option",{attrs:{label:"C",value:"C"}}),t("el-option",{attrs:{label:"NE",value:"NE"}})],1)],1),t("el-form-item",{attrs:{label:"ชนิดของรถ"}},[t("el-select",{attrs:{placeholder:"กรุณาเลือก",size:"mini"},model:{value:e.vehicleType,callback:function(t){e.vehicleType=t},expression:"vehicleType"}},[t("el-option",{attrs:{label:"4W",value:"4W"}}),t("el-option",{attrs:{label:"4WJ",value:"4WJ"}}),t("el-option",{attrs:{label:"6W7.2",value:"6W7.2"}})],1)],1),t("el-form-item",[t("el-button",{class:{"button-clicked":e.isSearching},attrs:{type:"primary",size:"mini"},on:{click:e.handleSearch}},[e._v("ค้นหา")])],1)],1),t("JobTable",{attrs:{tableData:e.paginatedTableData},on:{"open-dialog":e.openDialog}}),t("div",{staticClass:"pagination-container"},[t("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next",total:e.tableData.length},on:{"current-change":e.handlePageChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),t("el-dialog",{attrs:{title:"ยืนยันแข่งขันรับงาน",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t},open:e.initTurnstile,close:e.destroyTurnstile}},[t("p",[e._v("เส้นทาง: "+e._s(e.selectedRow.route))]),t("p",[e._v("ภูมิภาค: "+e._s(e.selectedRow.region))]),t("p",[e._v("ชนิดของรถ: "+e._s(e.selectedRow.vehicleType))]),t("div",{attrs:{id:"turnstile-container"}}),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",disabled:!e.isCaptchaSolved},on:{click:e.goToDetails}},[e._v("แข่งขันรับงาน")])],1)])],1),t("el-tab-pane",{attrs:{label:"รายการของฉัน",name:"my-list"}},[t("p",[e._v("ยังไม่มีข้อมูล")])])],1):e._e(),t("router-view")],1)],1)],1)},h=[],g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-container"},[t("el-menu",{staticClass:"el-menu--collapse",attrs:{collapse:!0}},[t("el-menu-item",{attrs:{index:"1"},on:{click:function(t){return e.$router.push("/")}}},[t("i",{staticClass:"el-icon-house"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Home")])]),t("el-menu-item",{attrs:{index:"2"},on:{click:function(t){return e.$router.push("/")}}},[t("i",{staticClass:"el-icon-document"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("แข่งขันรับงาน")])])],1)],1)},m=[],b={},f=b,v=(0,s.A)(f,g,m,!1,null,"37624273",null),w=v.exports,T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"navbar"},[e._m(0),t("el-breadcrumb",{staticClass:"app-breadcrumb"},[t("el-breadcrumb-item",[e._v("แข่งขันรับงาน")])],1)],1)},y=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"hamburger-container"},[t("i",{staticClass:"el-icon-s-unfold"})])}],_={},R=_,S=(0,s.A)(R,T,y,!1,null,"31381cbc",null),D=S.exports,C=function(){var e=this,t=e._self._c;return t("el-table",{staticClass:"custom-table",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("p",[e._v("รายละเอียดเพิ่มเติม: "+e._s(a.row.route))])]}}])}),e._e(),t("el-table-column",{attrs:{prop:"route",label:"เส้นทาง",width:"220","min-width":"120"}}),t("el-table-column",{attrs:{prop:"region",label:"ภูมิภาค",width:"150","min-width":"80"}}),t("el-table-column",{attrs:{prop:"vehicleType",label:"ชนิดของรถ",width:"150","min-width":"100"}}),t("el-table-column",{attrs:{prop:"distance",label:"ระยะทางรวม (KM)",width:"150","min-width":"100"}}),t("el-table-column",{attrs:{prop:"endTime",label:"เวลาสิ้นสุดการแข่งขันรับงาน",width:"240","min-width":"150"}}),t("el-table-column",{attrs:{prop:"remainingTime",label:"เหลือเวลาสิ้นสุดแข่งขันรับงาน",width:"240","min-width":"130"}}),t("el-table-column",{attrs:{prop:"expectedArrival",label:"เวลาคาดว่าที่จะถึง",width:"200","min-width":"130"}}),t("el-table-column",{attrs:{prop:"fare",label:"ค่าเที่ยว",width:"120","min-width":"100"}}),t("el-table-column",{attrs:{label:"ดำเนินการ",width:"120","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{staticClass:"grab-single",attrs:{type:"text"},on:{click:function(t){return e.handleOpenDialog(a.row)}}},[e._v("แข่งขันรับงาน")])]}}])})],1)},M=[],x={props:{tableData:{type:Array,required:!0}},methods:{handleOpenDialog(e){this.$emit("open-dialog",e)}}},A=x,O=(0,s.A)(A,C,M,!1,null,"6fc2d732",null),N=O.exports,W=a(1052),k=a.n(W);const j=[{id:1,route:"2BKI-LAS",region:"B",vehicleType:"4W",distance:30,endTime:"03-03-2025 19:00",remainingTime:"4h 7m",expectedArrival:"03-03-2025 20:00",fare:790},{id:2,route:"2NGA-EA1",region:"C",vehicleType:"4WJ",distance:74,endTime:"03-03-2025 19:00",remainingTime:"4h 7m",expectedArrival:"03-03-2025 20:00",fare:1620},{id:3,route:"NMD-BPLL",region:"B",vehicleType:"4WJ",distance:29,endTime:"03-03-2025 18:30",remainingTime:"3h 37m",expectedArrival:"03-03-2025 19:30",fare:1210},{id:4,route:"TCG-CT1",region:"B",vehicleType:"4WJ",distance:17,endTime:"03-03-2025 19:10",remainingTime:"4h 17m",expectedArrival:"03-03-2025 20:10",fare:1010},{id:5,route:"NE6-NE2",region:"NE",vehicleType:"4WJ",distance:203,endTime:"03-03-2025 20:00",remainingTime:"5h 7m",expectedArrival:"03-03-2025 21:00",fare:3030}];var P={components:{Sidebar:w,Navbar:D,JobTable:N},data(){return{sidebarOpen:!0,activeTab:"grab",region:"",vehicleType:"",tableData:[...j],dialogVisible:!1,selectedRow:{},turnstileWidgetId:null,isCaptchaSolved:!1,isSearching:!1,currentPage:1,pageSize:8,allRoutes:new Set}},computed:{paginatedTableData(){const e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;return this.tableData.slice(e,t)}},created(){this.generateInitialData()},methods:{openDialog(e){this.selectedRow=e,this.dialogVisible=!0},initTurnstile(){const e=document.createElement("script");e.src="https://challenges.cloudflare.com/turnstile/v0/api.js",e.async=!0,e.defer=!0,document.head.appendChild(e),e.onload=()=>{window.turnstile&&(this.turnstileWidgetId=window.turnstile.render("#turnstile-container",{sitekey:"0x4AAAAAAA7SN9BgICU6k8R5",callback:e=>{this.isCaptchaSolved=!0}}))}},destroyTurnstile(){this.turnstileWidgetId&&window.turnstile&&(window.turnstile.remove(this.turnstileWidgetId),this.turnstileWidgetId=null,this.isCaptchaSolved=!1)},toggleSidebar(){this.sidebarOpen=!this.sidebarOpen},handleSearch(){this.isSearching=!0,this.fetchData(),setTimeout((()=>{this.isSearching=!1}),500)},handlePageChange(e){this.currentPage=e},fetchData(){console.log("ค้นหาด้วย:",this.region,this.vehicleType),setTimeout((()=>{const e=this.generateNewData();this.tableData=[...j,...e],this.showRandomNotification()}),500)},showRandomNotification(){const e=Math.floor(4e3*Math.random())+1e3;setTimeout((()=>{(0,W.Notification)({title:"อัพเดตงานแข่งขัน",message:"มีงานแข่งขันใหม่ ตรวจสอบทันที",type:"info",duration:2e3})}),e)},generateInitialData(){this.tableData=this.generateNewData(5)},generateNewData(e){const t=[],a=100-this.allRoutes.size,i=Math.min(e||5,a),n=this.tableData.length+i;let r=0;const o=1e3;for(let l=this.tableData.length+1;l<=n&&r<o;){const e=this.generateRoutePrefix(),a=this.generateRouteSuffix(l),i=`${e}-${a}`;this.allRoutes.has(i)||(this.allRoutes.add(i),t.push({id:l,route:i,region:this.getRandomRegion(),vehicleType:this.getRandomVehicleType(),distance:this.getRandomDistance(),endTime:this.getRandomEndTime(),remainingTime:this.getRandomRemainingTime(),expectedArrival:this.getRandomExpectedArrival(),fare:this.getRandomFare()}),l++),r++}return t},generateRoutePrefix(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let t="";for(let a=0;a<2;a++)t+=e[Math.floor(Math.random()*e.length)];return t},generateRouteSuffix(e){const t=e,a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let i="";for(let n=0;n<2;n++)i+=a[Math.floor(Math.random()*a.length)];return`${t}${i}`},getRandomRegion(){const e=["B","C","NE"];return e[Math.floor(Math.random()*e.length)]},getRandomVehicleType(){const e=["4W","4WJ","6W7.2"];return e[Math.floor(Math.random()*e.length)]},getRandomDistance(){return Math.floor(200*Math.random())+10},getRandomEndTime(){const e=new Date;return e.setDate(e.getDate()+Math.floor(7*Math.random())+1),e.setHours(this.getRandomHours()),e.setMinutes(this.getRandomMinutes()),e.toLocaleString("en-GB")},getRandomRemainingTime(){return`${this.getRandomHours()}h ${this.getRandomMinutes()}m`},getRandomExpectedArrival(){const e=new Date;return e.setDate(e.getDate()+7*Math.random()+1),e.setHours(this.getRandomHours()),e.setMinutes(this.getRandomMinutes()),e.toLocaleString("en-GB")},getRandomFare(){return Math.floor(2e3*Math.random())+500},getRandomHours(){return Math.floor(24*Math.random())},getRandomMinutes(){return Math.floor(60*Math.random())},goToDetails(){if(window.turnstile){const e=window.turnstile.getResponse(this.turnstileWidgetId);e?((0,W.Notification)({title:"สำเร็จ",message:`ยืนยันการแข่งขันรับงานสำเร็จ. Turnstile Token: ${e}`,type:"success"}),this.dialogVisible=!1,this.$router.push({name:"Details",params:{id:this.selectedRow.id}})):(0,W.Notification)({title:"คำเตือน",message:"กรุณาทำ turnstile ให้สำเร็จ",type:"warning"})}}}},E=P,$=(0,s.A)(E,p,h,!1,null,"72827d3a",null),B=$.exports,J=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-wrapper",class:{hideSidebar:!e.sidebarOpen}},[t("Sidebar",{attrs:{open:e.sidebarOpen},on:{"toggle-sidebar":e.toggleSidebar}}),t("div",{staticClass:"main-container"},[t("Navbar",{attrs:{"sidebar-open":e.sidebarOpen},on:{"toggle-sidebar":e.toggleSidebar}}),t("div",{staticClass:"app-main"},[t("div",{staticClass:"details"},[e.job?[t("h1",[e._v("รายละเอียดงาน: "+e._s(e.job.route))]),t("p",[e._v("ภูมิภาค: "+e._s(e.job.region))]),t("p",[e._v("ชนิดของรถ: "+e._s(e.job.vehicleType))]),t("p",[e._v("ระยะทาง: "+e._s(e.job.distance)+" KM")]),t("p",[e._v("ค่าเที่ยว: "+e._s(e.job.fare)+" บาท")])]:[t("h1",[e._v("ไม่พบข้อมูลงาน")])],t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/")}}},[e._v("กลับไปหน้าแรก")])],2)])],1)],1)},I=[],z={name:"Details",props:{id:{type:Number,required:!0},jobs:{type:Array,required:!0}},components:{Sidebar:w,Navbar:D},data(){return{sidebarOpen:!0,job:null}},created(){this.findJob()},methods:{toggleSidebar(){this.sidebarOpen=!this.sidebarOpen},findJob(){this.job=this.jobs.find((e=>e.id===this.id))}}},H=z,V=(0,s.A)(H,J,I,!1,null,"f5fe5cf6",null),L=V.exports;i["default"].use(u.Ay);var G=new u.Ay({routes:[{path:"/",component:B},{path:"/details/:id",name:"Details",component:L,props:!0},{path:"*",redirect:"/"}]});i["default"].use(k()),i["default"].use(G),new i["default"]({router:G,render:e=>e(c)}).$mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={id:i,loaded:!1,exports:{}};return e[i](r,r.exports,a),r.loaded=!0,r.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,i,n,r){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],r=e[c][2];for(var l=!0,s=0;s<i.length;s++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](i[s])}))?i.splice(s--,1):(l=!1,r<o&&(o=r));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,r,o=i[0],l=i[1],s=i[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var c=s(a)}for(t&&t(i);d<o.length;d++)r=o[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},i=self["webpackChunklogistics_app"]=self["webpackChunklogistics_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(995)}));i=a.O(i)})();
//# sourceMappingURL=app.33436da8.js.map