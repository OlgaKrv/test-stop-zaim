(function(){"use strict";var t={895:function(t,e,a){var n=a(144),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper",attrs:{id:"app"}},[e("header",[e("div",{staticClass:"navbar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar_content"},[e("div",{staticClass:"logo"},[t._v("Вывод оплат")]),e("ul",{staticClass:"navbar_list"},t._l(t.links,(function(a){return e("li",{key:a.title,staticClass:"navbar_item"},[e("router-link",{staticClass:"navbar_link",attrs:{title:a.title,to:a.url}},[t._v(t._s(a.title))])],1)})),0)])])])]),e("router-view")],1)},s=[],r={data(){return{links:[{title:"Меню",url:"/"}]}}},o=r,l=a(1),c=(0,l.Z)(o,i,s,!1,null,null,null),u=c.exports,_=a(345),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper_content wrapper-content--fixed"},[e("transition",{attrs:{name:"popup_animated"}},[t.isPopupAddingVisible?e("popupAddingPayment",{on:{closePopup:t.closePopupAdding}}):t._e()],1),e("section",[e("div",{staticClass:"container"},[e("p",{staticClass:"title_text"},[t._v("Список платежей")]),e("button",{staticClass:"my-4 px-14 bg-blue-500 text-white",on:{click:t.showPopupAdding}},[t._v(" Добавить платеж ")]),e("div",{staticClass:"payment_filtering my-4"},[e("div",{staticClass:"payment_filtering_by_data"},[e("p",{staticClass:"mr-4"},[t._v("Дата платежа")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filteredDate,expression:"filteredDate"}],staticClass:"input_field",attrs:{type:"date"},domProps:{value:t.filteredDate},on:{input:function(e){e.target.composing||(t.filteredDate=e.target.value)}}})]),e("div",{staticClass:"payment_filtering_by_source ml-3"},[e("p",{staticClass:"mr-4"},[t._v("Источник платежа:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filteredSourse,expression:"filteredSourse"}],staticClass:"input_field",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filteredSourse=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"0"}},[t._v("все источники")]),t._l(t.SOURCE_ID_TYPE,(function(a){return e("option",{key:a.id,domProps:{value:a.id,textContent:t._s(a.title)}})}))],2)])]),e("table",[e("thead",[e("tr",[e("th",[t._v(" Клиент "),e("i",{staticClass:"material-icons",on:{click:function(e){return t.sortByName("client")}}},[t._v(" unfold_more ")])]),e("th",[t._v(" Договор "),e("i",{staticClass:"material-icons",on:{click:function(e){return t.sortByName("contract")}}},[t._v(" unfold_more ")])]),e("th",[t._v(" Тип платежа "),e("i",{staticClass:"material-icons",on:{click:function(e){return t.sortByTypeId("type_id")}}},[t._v(" unfold_more ")])]),e("th",[t._v(" Дата "),e("i",{staticClass:"material-icons",on:{click:function(e){return t.sortByName("date")}}},[t._v(" unfold_more ")])]),e("th",[t._v(" Сумма (руб) "),e("i",{staticClass:"material-icons",on:{click:function(e){return t.sortByName("summ")}}},[t._v(" unfold_more ")])]),e("th",[t._v(" Источник платежа "),e("i",{staticClass:"material-icons",on:{click:function(e){return t.sortByTypeId("source_id")}}},[t._v(" unfold_more ")])]),e("th",[t._v(" Статус "),e("i",{staticClass:"material-icons",on:{click:function(e){return t.sortByTypeId("status_id")}}},[t._v(" unfold_more ")])])])]),e("tbody",t._l(t.filterableDataTable,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.client))]),e("td",[t._v(t._s(a.contract))]),e("td",[t._v(" "+t._s(t.DATA_ID_TYPE.types.find((t=>t.id===a.type_id)).title)+" ")]),e("td",[t._v(t._s(a.date))]),e("td",[t._v(t._s(a.summ))]),e("td",[t._v(" "+t._s(t.SOURCE_ID_TYPE.find((t=>t.id===a.source_id)).title)+" ")]),e("td",[e("span",{staticClass:"px-2 rounded-md text-white",class:t.statusColor.find((t=>t.id===a.status_id)).color},[t._v(" "+t._s(t.DATA_ID_TYPE.statuses.find((t=>t.id===a.status_id)).title)+" ")])])])})),0)])])])],1)},d=[],m=a(629),v=function(){var t=this,e=t._self._c;return e("div",{ref:"popup_wrapper",staticClass:"popup_wrapper"},[e("div",{staticClass:"popup"},[e("div",{staticClass:"popup_header"},[e("span",{staticClass:"title_text"},[t._v("Добавление нового платежа")]),e("span",[e("i",{staticClass:"material-icons cursor-pointer",on:{click:t.closePopup}},[t._v("close")])])]),e("hr"),e("div",{staticClass:"popup_content"},[e("div",{staticClass:"input_category"},[e("label",{staticClass:"mr-4"},[t._v("Клиент:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPayment.client,expression:"newPayment.client"}],staticClass:"input_field",class:t.changeInputСolor("client"),attrs:{type:"text"},domProps:{value:t.newPayment.client},on:{input:function(e){e.target.composing||t.$set(t.newPayment,"client",e.target.value)}}})]),e("div",{staticClass:"input_category"},[e("label",{staticClass:"mr-4"},[t._v("Договор:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPayment.contract,expression:"newPayment.contract"}],staticClass:"input_field",class:t.changeInputСolor("contract"),attrs:{type:"text"},domProps:{value:t.newPayment.contract},on:{input:function(e){e.target.composing||t.$set(t.newPayment,"contract",e.target.value)}}})]),e("div",{staticClass:"input_category"},[e("label",{staticClass:"mr-4"},[t._v("Тип оплаты:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.newPayment.type_id,expression:"newPayment.type_id"}],staticClass:"input_field",class:t.changeInputСolor("type_id"),on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newPayment,"type_id",e.target.multiple?a:a[0])}}},t._l(t.DATA_ID_TYPE.types,(function(a){return e("option",{key:a.id,domProps:{value:a.id,textContent:t._s(a.title)}})})),0)]),e("div",{staticClass:"input_category"},[e("label",{staticClass:"mr-4"},[t._v("Дата оплаты:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPayment.date,expression:"newPayment.date"}],staticClass:"input_field",class:t.changeInputСolor("date"),attrs:{type:"date"},domProps:{value:t.newPayment.date},on:{input:function(e){e.target.composing||t.$set(t.newPayment,"date",e.target.value)}}})]),e("div",{staticClass:"input_category"},[e("label",{staticClass:"mr-4"},[t._v("Сумма оплаты:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPayment.summ,expression:"newPayment.summ"}],staticClass:"input_field",class:t.changeInputСolor("summ"),attrs:{type:"text"},domProps:{value:t.newPayment.summ},on:{input:function(e){e.target.composing||t.$set(t.newPayment,"summ",e.target.value)}}})]),e("div",{staticClass:"input_category"},[e("label",{staticClass:"mr-4"},[t._v("Статус:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.newPayment.status_id,expression:"newPayment.status_id"}],staticClass:"input_field",class:t.changeInputСolor("status_id"),on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newPayment,"status_id",e.target.multiple?a:a[0])}}},t._l(t.DATA_ID_TYPE.statuses,(function(a){return e("option",{key:a.id,domProps:{value:a.id,textContent:t._s(a.title)}})})),0)])]),e("hr"),e("div",{staticClass:"popup_footer"},[e("button",{staticClass:"px-4 bg-slate-200 text-black",on:{click:t.closePopup}},[t._v(" Отменить ")]),e("button",{staticClass:"px-4 bg-blue-500 text-white",on:{click:t.addPopup}},[t._v(" Добавить оплату ")])])])])},T=[],y=a(433),f={data(){return{newPayment:{id:null,client:"",contract:"",type_id:null,date:"",summ:"",source_id:null,status_id:null},isValidNewPayment:!0}},computed:{...(0,m.Se)(["TABLE_DATA","DATA_ID_TYPE"])},methods:{...(0,m.nv)(["GET_TABLE_DATA_FROM_API","GET_DATA_ID_TYPE_FROM_API"]),"changeInputСolor"(t){return this.isValidNewPayment||this.newPayment[t]?"":"bg-red-200 border-red-600"},closePopup(){this.newPayment.client="",this.newPayment.contract="",this.newPayment.date="",this.newPayment.summ="",this.newPayment.status_id=0,this.newPayment.type_id=0,this.$emit("closePopup")},checkValidityPayment(){this.newPayment.client&&this.newPayment.contract&&this.newPayment.type_id&&this.newPayment.date&&this.newPayment.summ&&this.newPayment.status_id?this.isValidNewPayment=!0:this.isValidNewPayment=!1},addPopup(){this.checkValidityPayment(),this.isValidNewPayment&&y.Z.post("https://payments-test.stop-zaim.ru/public_html/payments",{client:this.newPayment.client,contract:this.newPayment.contract,type_id:this.newPayment.type_id,date:this.newPayment.date,summ:this.newPayment.summ,source_id:2,status_id:this.newPayment.status_id}).then((t=>t.data)),this.GET_TABLE_DATA_FROM_API()}},mounted(){this.GET_DATA_ID_TYPE_FROM_API(),document.addEventListener("click",(t=>{t.target===this.$refs.popup_wrapper&&this.closePopup()}))}},h=f,P=(0,l.Z)(h,v,T,!1,null,null,null),A=P.exports,w={components:{popupAddingPayment:A},data(){return{isPopupAddingVisible:!1,filterableDataTable:[],isTableFiltered:!1,filteredDate:"",filteredSourse:0,statusColor:[{id:1,color:"bg-slate-500"},{id:2,color:"bg-orange-500"},{id:3,color:"bg-green-500"}]}},computed:{...(0,m.Se)(["TABLE_DATA","SOURCE_ID_TYPE","DATA_ID_TYPE"])},methods:{...(0,m.nv)(["GET_TABLE_DATA_FROM_API","GET_SOURCE_ID_TYPE_FROM_API","GET_DATA_ID_TYPE_FROM_API"]),showPopupAdding(){this.isPopupAddingVisible=!0},closePopupAdding(){this.isPopupAddingVisible=!1},sortByName(t){this.filterableDataTable.sort(((e,a)=>e[t].localeCompare(a[t])))},sortByTypeId(t){this.filterableDataTable.sort(((e,a)=>e[t]-a[t]))}},watch:{TABLE_DATA(){this.filterableDataTable=this.TABLE_DATA},filteredSourse(){"0"===this.filteredSourse?this.filterableDataTable=this.TABLE_DATA:this.filterableDataTable=this.TABLE_DATA.filter((t=>t.source_id===this.filteredSourse))},filteredDate(){this.filterableDataTable=this.TABLE_DATA.filter((t=>t.date===this.filteredDate))}},mounted(){this.GET_TABLE_DATA_FROM_API(),this.GET_SOURCE_ID_TYPE_FROM_API(),this.GET_DATA_ID_TYPE_FROM_API()}},E=w,C=(0,l.Z)(E,p,d,!1,null,null,null),D=C.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper_content wrapper-content--fixed"},[e("section",[e("div",{staticClass:"container"},[e("h1",{staticClass:"title m-0"},[t._v("СТРАНИЦА НЕ НАЙДЕНА!")]),e("p",[t._v(" Перейти на "),e("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("главную страницу")]),t._v("? ")],1)])])])},g=[],I={},O=(0,l.Z)(I,b,g,!1,null,"3aca00cc",null),S=O.exports;n.ZP.use(_.Z);var x=new _.Z({mode:"history",routes:[{path:"/",name:"main",component:D},{path:"*",name:"NotFound",component:S}]});n.ZP.use(m.ZP);var k=new m.ZP.Store({state:{tableData:[],sourceIdType:[],dataIdType:[]},mutations:{SET_TABLE_DATA_TO_STATE:(t,e)=>{t.tableData=e},SET_SOURCE_ID_TYPE_TO_STATE:(t,e)=>{t.sourceIdType=e},SET_DATA_ID_TYPE_TO_STATE:(t,e)=>{t.dataIdType=e}},actions:{GET_TABLE_DATA_FROM_API({commit:t}){return(0,y.Z)("https://payments-test.stop-zaim.ru/public_html/payments",{method:"GET"}).then((e=>(t("SET_TABLE_DATA_TO_STATE",e.data),e))).catch((t=>(alert(t),t)))},POST_TABLE_DATA_FROM_API({commit:t}){return(0,y.Z)("https://payments-test.stop-zaim.ru/public_html/payments",{method:"POST"}).then((e=>(t("SET_TABLE_DATA_TO_STATE",e.data),e))).catch((t=>(alert(t),t)))},GET_SOURCE_ID_TYPE_FROM_API({commit:t}){return(0,y.Z)("https://payments-test.stop-zaim.ru/public_html/sources",{method:"GET"}).then((e=>(t("SET_SOURCE_ID_TYPE_TO_STATE",e.data),e))).catch((t=>(alert(t),t)))},GET_DATA_ID_TYPE_FROM_API({commit:t}){return(0,y.Z)("https://payments-test.stop-zaim.ru/public_html/form_tss",{method:"GET"}).then((e=>(t("SET_DATA_ID_TYPE_TO_STATE",e.data),e))).catch((t=>(alert(t),t)))}},getters:{TABLE_DATA(t){return t.tableData},SOURCE_ID_TYPE(t){return t.sourceIdType},DATA_ID_TYPE(t){return t.dataIdType}}});n.ZP.config.productionTip=!1,new n.ZP({router:x,store:k,render:t=>t(u)}).$mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,s){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],s=t[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(o=!1,s<r&&(r=s));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,i,s]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,r=n[0],o=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var u=l(a)}for(e&&e(n);c<r.length;c++)s=r[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},n=self["webpackChunktest_stop_zaim"]=self["webpackChunktest_stop_zaim"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(895)}));n=a.O(n)})();
//# sourceMappingURL=app.a6ba7aa1.js.map