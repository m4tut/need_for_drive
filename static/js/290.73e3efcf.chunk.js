"use strict";(self.webpackChunkreact_assembly=self.webpackChunkreact_assembly||[]).push([[290],{2619:function(e,a,t){t.r(a),t.d(a,{default:function(){return Pe}});var r=t(8789),n=t(8109),l=t(4416),o=t(2791),i=t(6871),d=t(2529),c=t(1520),s=t(3730),m=t(3504),_=t(4116),u=t(1694),h=t.n(u),p="AppBreadcrumbs_breadcrumbs__63Aab",f="AppBreadcrumbs_breadcrumbs__list__GrLUf",v="AppBreadcrumbs_breadcrumbs__list-item__vVC6N",b="AppBreadcrumbs_breadcrumbs__list-item--disabled__fFptW",x="AppBreadcrumbs_active__JSLI2",y=t(184),j=function(e){var a=e.className,t=e.breadcrumbs,r=(0,i.TH)();function n(e){if(r.pathname+r.search===e)return x}return(0,y.jsx)("nav",{className:h()(a,p),children:(0,y.jsx)("ul",{className:h()(f),children:t.map((function(e){return(0,y.jsx)("li",{className:h()(v,e.disabled&&b),children:e.href?(0,y.jsx)(m.OL,{to:e.href,className:h()(n(e.href)),children:(0,_.Z)(e.text)}):(0,y.jsx)("span",{children:(0,_.Z)(e.text)})},e.text)}))})})},N=t(689),g=t(885),T=t(4864),D=t(2208),O=t(7090),k=t(319),S=t(6464),C=t(1260),A=t(4679),M=t(9552),H=t(8345),Z=t(358),R={modal:"AppModal_modal__Pj0Ga"},F=t(5322),I=function(e){var a=e.className,t=e.children,r=e.isOpen,n=e.handleOpenOrClose;function l(e){"Escape"===e.key&&n(!1)}return(0,o.useEffect)((function(){return document.addEventListener("keydown",l),document.body.style.overflow=r?"hidden":"auto",function(){document.removeEventListener("keydown",l)}})),(0,y.jsx)(F.Z,{in:r,timeout:300,classNames:"fade",unmountOnExit:!0,children:(0,y.jsx)("div",{className:h()(a,R.modal),children:(0,y.jsx)("div",{className:h()(R.modal__content),children:t})})})},w=t(3496),G=t(4037);function E(e){return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}function K(e){return"number"===typeof e?E(e)+" \u20bd":"".concat(E(e[0])," - ").concat(E(e[1])," \u20bd")}var J=[{brend:"Hyundai",model:"Elantra",price:[2400,5e3],carInfo:[{color:"green",carNumber:"K 761 HA 73"},{color:"gray",carNumber:"K 762 HA 73"}],images:t.p+"static/media/elantra.3b5ead587196befaa1c8.png",type:"economy"},{brend:"Hyundai",model:"i30 N",price:[2e3,5e3],carInfo:[{color:"blue",carNumber:"K 451 HA 73"},{color:"black",carNumber:"K 362 HA 73"}],images:t.p+"static/media/i30n.3c705bab19201321c1ee.png",type:"economy"},{brend:"Hyundai",model:"\u0421reta",price:[2800,6400],carInfo:[{color:"white",carNumber:"K 481 HA 73"},{color:"red",carNumber:"K 222 HA 73"}],images:t.p+"static/media/creta.42272d966f95c1bc2fbd.png",type:"premium"},{brend:"Hyundai",model:"Sonata",price:[2800,6400],carInfo:[{color:"blue",carNumber:"K 491 HA 13"},{color:"black",carNumber:"K 112 HA 13"},{color:"white",carNumber:"K 362 HA 13"}],images:t.p+"static/media/sonata.7277239115684b400400.png",type:"premium"}],L=[{id:"allModel",text:"allModel",value:"all"},{id:"economyModel",text:"economy",value:"economy"},{id:"premiumModel",text:"premium",value:"premium"}],q="RadioOrChecbox_radio-checkbox__FxtcO",V="RadioOrChecbox_radio-checkbox__label__PEi8y",W="RadioOrChecbox_radio-checkbox__label--radio__pU1mz",P="RadioOrChecbox_radio-checkbox__label--checkbox__kIvFt",Q=function(e){var a=e.className,t=e.children,r=e.id,n=e.name,l=e.value,i=e.type,d=void 0===i?"radio":i,c=e.checked,s=void 0!==c&&c,m=e.handleChange,_=e.handleToggle,u=(0,o.useState)(s),p=(0,g.Z)(u,2),f=p[0],v=p[1];return(0,y.jsxs)("div",{className:h()(a,q),children:[(0,y.jsx)("input",{id:r,name:n,type:d,value:l,checked:"checkbox"===d?f:s,onChange:function(e){var a,t=e.target;a=t.value,"function"===typeof m&&m(a)},onClick:function(){v(!f),"function"===typeof _&&_(!f)}}),(0,y.jsx)("label",{className:h()(V,"radio"===d&&W,"checkbox"===d&&P),htmlFor:r,children:t})]})},B={"group-item":"RadioOrChecboxGroup_group-item__CbnbT"},z=function(e){var a=e.className,t=e.type,r=void 0===t?"radio":t,n=e.group,l=e.groupName,i=e.initValue,d=void 0===i?"":i,c=e.handleChange,s=(0,o.useState)(d),m=(0,g.Z)(s,2),u=m[0],p=m[1];function f(e){p(e),"function"===typeof c&&c(e)}return(0,y.jsx)("div",{className:h()(a,B.group),children:n.map((function(e){return(0,y.jsx)(Q,{className:h()(B["group-item"]),id:e.id,name:l,value:e.value,type:r,checked:u===e.value,handleChange:f,children:(0,_.Z)(e.text)},e.id)}))})},U={"model-card":"TheModelCard_model-card__El+at","model-card--active":"TheModelCard_model-card--active__-5J+t","model-card__content-model":"TheModelCard_model-card__content-model__RFkoJ","model-card__content-price":"TheModelCard_model-card__content-price__qRovR","model-card__img":"TheModelCard_model-card__img__5O4I3"},Y=function(e){var a=e.className,t=e.car,r=e.handleClick,n=e.active,l=void 0!==n&&n;return(0,y.jsxs)("div",{className:h()(a,U["model-card"],l&&U["model-card--active"]),onClick:function(){return r(t)},role:"button",children:[(0,y.jsxs)("div",{className:h()(U["model-card__content"]),children:[(0,y.jsx)("div",{className:h()(U["model-card__content-model"]),children:t.model}),(0,y.jsx)("div",{className:h()(U["model-card__content-price"]),children:K(t.price)})]}),(0,y.jsx)("div",{className:h()(U["model-card__img"]),children:(0,y.jsx)("img",{src:t.images,alt:"".concat(t.brend,", ").concat(t.model)})})]})},X={model__filter:"TheModel_model__filter__qcDhd",model__cards:"TheModel_model__cards__anCCH"},$=function(e){var a=e.className,t=(0,d.oR)(c.iA),r=(0,d.oR)(c.rM),n=(0,o.useState)("all"),l=(0,g.Z)(n,2),i=l[0],s=l[1];function m(e){(0,k.C)(e.brend),(0,S.j)(e.model),(0,D.i)(e.price),(0,O.v)("any")}return(0,y.jsxs)("div",{className:h()(a,X.model),children:[(0,y.jsx)(z,{className:h()(X.model__filter),handleChange:s,group:L,groupName:"modelFilter",initValue:"all"}),(0,y.jsx)("div",{className:h()(X.model__cards),children:("all"===i?J:J.filter((function(e){return e.type===i}))).map((function(e){return(0,y.jsx)(Y,{handleClick:m,car:e,active:r===e.model&&t===e.brend},e.brend+e.model)}))})]})};function ee(e,a){var t=J.filter((function(t){return t.brend===e&&t.model===a}));if(t.length)return t[0]}var ae=t(4680),te="TheOrder_order__hjlld",re="TheOrder_order__title__2ro1p",ne="TheOrder_order__list__sc9Yy",le="TheOrder_order__list-item__Q6tsD",oe="TheOrder_order__list-item-name__PO8kh",ie="TheOrder_order__list-item-dashed__XTDto",de="TheOrder_order__list-item-selected__VzaIX",ce="TheOrder_order__price__lMNPO",se="TheOrder_order__btn__FGa6s",me="TheOrder_order__confirmation__AOAXd",_e="TheOrder_order__confirmation-title__7aFlO",ue="TheOrder_order__confirmation-block__QSD4f",he="TheOrder_order__confirmation-block-btn__i5Syg",pe=function(e){var a=e.className,t=e.orderPoints,r=e.btnSettings,n=(0,d.oR)(T.d),l=(0,d.oR)(c.Ul),m=(0,d.oR)(c.i),u=(0,d.oR)(c.QW),p=(0,d.oR)(c.U3),f=(0,o.useState)(!1),v=(0,g.Z)(f,2),b=v[0],x=v[1],j=(0,i.s0)(),N=(0,i.TH)();return(0,o.useMemo)((function(){var e=(0,w.m)(ae.d,l.city);if(e.length){(0,M.n)(e[0].value[n]);var a=(0,w.m)(e[0].address,l.address);a.length&&(0,H.q)(a[0].value[n])}}),[n]),(0,o.useEffect)((function(){!function(){var e=ee(u.brend,u.model);if(e&&p.rentalDuration.startDate&&p.rentalDuration.endDate){var a="number"===typeof e.price?e.price:e.price.reduce((function(e,a){return e+a}))/2,t=(0,G.r)(p.rentalDuration.startDate,p.rentalDuration.endDate);if("rateDateShort"===p.rate){var r=a+1999*t.days+(t.hours||t.minutes?1999:0);(0,D.i)(r)}if("rateMinShort"===p.rate){var n=a+60*(24*t.days+t.hours)*5;(0,D.i)(n)}}}()})),(0,y.jsxs)("div",{className:h()(a,te),children:[(0,y.jsxs)("h2",{className:h()(re),children:[(0,_.Z)("yourOrder"),":"]}),(0,y.jsx)("ul",{className:h()(ne),children:Object.keys(t).map((function(e){var a=t[e];if(a.visible){var r=a.name,n=a.value;return(0,y.jsxs)("li",{className:h()(le),children:[(0,y.jsx)("span",{className:h()(oe),children:r?(0,_.Z)(r):r}),(0,y.jsx)("span",{className:h()(ie)}),(0,y.jsx)("span",{className:h()(de),children:n?(0,_.Z)(n):n})]},e)}}))}),(0,y.jsxs)("div",{className:h()(ce),children:[(0,y.jsxs)("span",{children:[(0,_.Z)("price"),":\xa0"]}),(0,y.jsx)("span",{children:K(m)})]}),(0,y.jsx)(Z.J,{className:h()(se),handleClick:function(){switch(N.search){case"?step=location":j("/order?step=model");break;case"?step=model":j("/order?step=additionally");break;case"?step=additionally":j("/order?step=total");break;case"?step=total":x(!0);break;case"?step=completed":localStorage.setItem("confirmation",JSON.stringify(!1)),(0,O.v)("any"),(0,D.i)([2200,5200]),(0,k.C)(""),(0,S.j)(""),(0,C.a)(null),(0,A.f)(null),(0,s.G)("location"),j("/order?step=location")}},variant:r.variant,disabled:r.disabled,children:(0,_.Z)(r.text)}),(0,y.jsx)(I,{isOpen:b,handleOpenOrClose:x,children:(0,y.jsxs)("div",{className:h()(me),children:[(0,y.jsx)("h3",{className:h()(_e),children:(0,_.Z)("confirmOrder")}),(0,y.jsxs)("div",{className:h()(ue),children:[(0,y.jsx)(Z.J,{className:h()(he),handleClick:function(){x(!1),localStorage.setItem("confirmation",JSON.stringify(!0)),j("/order?step=completed")},children:(0,_.Z)("confirm")}),(0,y.jsx)(Z.J,{className:h()(he),handleClick:function(){return x(!1)},variant:"red",children:(0,_.Z)("return")})]})]})})]})},fe=t(3539),ve=t(6179),be=t(5329),xe=t(9513),ye=t.n(xe);function je(e,a){return{localize:{day:function(a){return e[a]},month:function(e){return a[e]},ordinalNumber:function(){},era:function(){},quarter:function(){},dayPeriod:function(){}},formatLong:{date:function(){return"dd.mm.yyyy hh:mm"},time:function(){},dateTime:function(){}}}}var Ne={ru:["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"],en:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},ge={ru:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],en:["January","February","Martha","April","May","June","July","August","September","October","November","December"]},Te=[{id:"rateMinShort",value:"rateMinShort",text:"rateMin"},{id:"rateDateShort",value:"rateDateShort",text:"rateDate"}],De="TheAdditionally_additionally__M1k87",Oe="TheAdditionally_additionally__color__M680g",ke="TheAdditionally_additionally__calendar__q7t2I",Se="TheAdditionally_additionally__rate__aqff4",Ce="TheAdditionally_additionally__service__O6T8T",Ae="TheAdditionally_additionally__title__j44Q6",Me="TheAdditionally_additionally__color-group__rmEsf",He="TheAdditionally_additionally__calendar-block__HawLk",Ze="TheAdditionally_additionally__calendar-block-item__K-2y8",Re="TheAdditionally_additionally__rate-group__Yvcmu",Fe=function(e){var a=e.className,t=(0,fe.Z)(),r=(0,d.oR)(T.d),n=(0,d.oR)(c.QW),l=(0,d.oR)(c.U3),o=function(e){var a=[{id:"any",value:"any",text:"any"}];if(!e.model||!e.brend)return a;var t=ee(e.brend,e.model);if(!t||!t.carInfo)return a;var r=t.carInfo.map((function(e){return{id:e.color,value:e.color,text:e.color}}));return a.concat(r)}(n);return(0,y.jsxs)("div",{className:h()(a,De),children:[o.length>2&&(0,y.jsxs)("div",{className:h()(Oe),children:[(0,y.jsx)("div",{className:h()(Ae),children:(0,_.Z)("color")}),(0,y.jsx)(z,{className:h()(Me),group:o,groupName:"carColor",initValue:l.color,handleChange:O.v})]}),(0,y.jsxs)("div",{className:h()(ke),children:[(0,y.jsx)("div",{className:h()(Ae),children:(0,_.Z)("rentalDate")}),(0,y.jsxs)("div",{className:h()(He),children:[(0,y.jsxs)("div",{className:h()(Ze),children:[(0,y.jsx)("span",{children:(0,_.Z)("from")}),(0,y.jsx)(ye(),{selected:l.rentalDuration.startDate,selectsStart:!0,minDate:new Date,startDate:l.rentalDuration.startDate,endDate:l.rentalDuration.endDate,onChange:function(e){(0,A.f)(e)},calendarStartDay:1,locale:je(Ne[r],ge[r]),timeCaption:t.formatMessage({id:"time"}),placeholderText:t.formatMessage({id:"enterDateAndTime"}),showTimeSelect:!0,timeIntervals:15,timeFormat:"HH:mm",dateFormat:"dd.mm.yyyy HH:mm",isClearable:!0})]}),(0,y.jsxs)("div",{className:h()(Ze),children:[(0,y.jsx)("span",{children:(0,_.Z)("by")}),(0,y.jsx)(ye(),{selected:l.rentalDuration.endDate,onChange:function(e){return function(e){e&&l.rentalDuration.startDate&&e>l.rentalDuration.startDate?(0,C.a)(e):(0,C.a)(null)}(e)},selectsEnd:!0,startDate:l.rentalDuration.startDate,endDate:l.rentalDuration.endDate,minDate:l.rentalDuration.startDate,calendarStartDay:1,locale:je(Ne[r],ge[r]),timeCaption:t.formatMessage({id:"time"}),placeholderText:t.formatMessage({id:"enterDateAndTime"}),showTimeSelect:!0,timeIntervals:15,timeFormat:"HH:mm",dateFormat:"dd.mm.yyyy HH:mm",isClearable:!!l.rentalDuration.endDate})]})]})]}),(0,y.jsxs)("div",{className:h()(Se),children:[(0,y.jsx)("div",{className:h()(Ae),children:(0,_.Z)("rate")}),(0,y.jsx)(z,{className:h()(Re),group:Te,groupName:"rate",initValue:l.rate,handleChange:function(e){return(0,ve.F)(e)}})]}),(0,y.jsxs)("div",{className:h()(Ce),children:[(0,y.jsx)("div",{className:h()(Ae),children:(0,_.Z)("additionalServices")}),(0,y.jsx)(Q,{id:"\u0414\u0435\u0442\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e",name:"babySeat",value:"\u0414\u0435\u0442\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e",type:"checkbox",checked:l.babySeat,handleToggle:function(e){return(0,be.a)(e)},children:(0,_.Z)("childSeat")})]})]})},Ie={total:"TheTotal_total__dxpMq","total__content-complite":"TheTotal_total__content-complite__FBqA3","total__content-title":"TheTotal_total__content-title__1mM7S","total__content-number":"TheTotal_total__content-number__owVs5","total__content-text":"TheTotal_total__content-text__fADQs"},we=function(e){var a=e.className,t=(0,i.TH)(),r=(0,d.oR)(c.QW),n=ee(r.brend,r.model),l=c.IM.getState();return(0,y.jsxs)("div",{className:h()(a,Ie.total),children:[(0,y.jsxs)("div",{className:h()(Ie.total__content),children:["?step=completed"===t.search&&(0,y.jsx)("h1",{className:h()(Ie["total__content-complite"]),children:(0,_.Z)("yourOrderConfirmed")}),(0,y.jsxs)("h2",{className:h()(Ie["total__content-title"]),children:[null===n||void 0===n?void 0:n.brend,", ",null===n||void 0===n?void 0:n.model]}),(0,y.jsx)("div",{className:h()(Ie["total__content-number"]),children:"any"===c.GO.getState()?null===n||void 0===n?void 0:n.carInfo[Math.floor(Math.random()*(null===n||void 0===n?void 0:n.carInfo.length))].carNumber:null===n||void 0===n?void 0:n.carInfo.filter((function(e){return e.color===c.GO.getState()}))[0].carNumber}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{className:h()(Ie["total__content-text"]),children:[(0,_.Z)("availableFrom")," "]}),(0,y.jsxs)("span",{children:[null===l||void 0===l?void 0:l.toLocaleDateString(),"\xa0",null===l||void 0===l?void 0:l.toLocaleTimeString().slice(0,-3)]})]})]}),(0,y.jsx)("div",{children:(0,y.jsx)("img",{src:null===n||void 0===n?void 0:n.images,alt:""})})]})},Ge="OrderSettings_order-settings__Kq1KZ",Ee="OrderSettings_order-settings__breadcrumbs__tLYrz",Ke="OrderSettings_order-settings__breadcrumbs-container__fajc6",Je="OrderSettings_order-settings__content__Z-kzG",Le="OrderSettings_order-settings__content-left__m7kVw",qe="OrderSettings_order-settings__content-right__TFuba",Ve=function(e){var a=e.className,t=(0,d.oR)(c._F),r=(0,i.TH)(),l=(0,i.s0)();(0,o.useEffect)((function(){if(t.completed.total&&"?step=completed"!==r.search)l("/order?step=completed");else switch(r.search){case"?step=model":t.completed.location||l("/order?step=location");break;case"?step=additionally":t.completed.model||l("/order?step=model");break;case"?step=total":t.completed.additionally||l("/order?step=additionally");break;default:"?step=location"!==r.search&&"?step=completed"!==r.search&&l("/order?step=location")}}));return(0,y.jsxs)("div",{className:h()(a,Ge),children:[(0,y.jsx)("div",{className:h()(Ee),children:(0,y.jsx)(n.W,{className:h()(Ke),children:(0,y.jsx)(j,{breadcrumbs:t.breadcrumbs})})}),(0,y.jsxs)(n.W,{className:h()(Je),children:[(0,y.jsx)("div",{className:h()(Le),children:function(){switch(r.search){case"?step=location":return(0,s.G)("location"),(0,y.jsx)(N.H,{});case"?step=model":return(0,s.G)("model"),(0,y.jsx)($,{});case"?step=additionally":return(0,s.G)("additionally"),(0,y.jsx)(Fe,{});case"?step=total":return(0,s.G)("total"),(0,y.jsx)(we,{});case"?step=completed":return(0,s.G)("completed"),(0,y.jsx)(we,{})}}()}),(0,y.jsx)("div",{className:h()(qe),children:(0,y.jsx)(pe,{orderPoints:t.order,btnSettings:t.btnSettings})})]})]})},We="Order_order__nYT7d",Pe=function(){return(0,y.jsx)(r.g,{children:(0,y.jsxs)("div",{className:h()(We),children:[(0,y.jsx)(n.W,{children:(0,y.jsx)(l.t,{})}),(0,y.jsx)(Ve,{})]})})}}}]);
//# sourceMappingURL=290.73e3efcf.chunk.js.map