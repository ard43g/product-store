(this.webpackJsonprtredux=this.webpackJsonprtredux||[]).push([[0],{109:function(e,t,c){},173:function(e,t,c){},175:function(e,t,c){},178:function(e,t,c){},179:function(e,t,c){},180:function(e,t,c){},181:function(e,t,c){},182:function(e,t,c){},183:function(e,t,c){},184:function(e,t,c){},185:function(e,t,c){},186:function(e,t,c){},187:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},228:function(e,t,c){},229:function(e,t,c){},230:function(e,t,c){},231:function(e,t,c){},232:function(e,t,c){},233:function(e,t,c){"use strict";c.r(t);var r,n,a=c(1),i=c(49),s=c.n(i),o=(c(109),c(10)),d=c(11),l=c(9),j=c(98),u=c(17),b=c(4),O={initialized:!1,loading:!0,errorApp:!1,serviceError:!1,serviceErrorMessage:null,showModal:!1,clearForm:!1,products:[],categoriesList:[],activeCategories:[],productInCart:[],orders:[],totalPrice:0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_APP":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0,loading:!1});case"LOADING":return Object(b.a)(Object(b.a)({},e),{},{loading:t.loading});case"SHOW_MODAL":return Object(b.a)(Object(b.a)({},e),{},{showModal:t.show});case"PRODUCTS_LOADED":return Object(b.a)(Object(b.a)({},e),{},{products:t.payload,loading:!1});case"SERVICE_ERROR":return Object(b.a)(Object(b.a)({},e),{},{serviceError:!0,loading:!1,serviceErrorMessage:t.errorMessage});case"APP_ERROR":return Object(b.a)(Object(b.a)({},e),{},{errorApp:!0});case"CLOSE_ERROR":return Object(b.a)(Object(b.a)({},e),{},{serviceError:!1,serviceErrorMessage:null});case"SET_CATEGORIES_LIST":var c=Object(u.a)(new Set(e.products.map((function(e){return e.categories}))));return Object(b.a)(Object(b.a)({},e),{},{categoriesList:c});case"SET_ACTIVE_CATEGORIES":return Object(b.a)(Object(b.a)({},e),{},{activeCategories:t.categories});case"PRODUCT_ADD_TO_CART":var r=t.id,n=e.productInCart.findIndex((function(e){return e.id===r}));if(n>=0){var a=e.productInCart.find((function(e){return e.id===r})),i=Object(b.a)(Object(b.a)({},a),{},{quantity:++a.quantity});return Object(b.a)(Object(b.a)({},e),{},{productInCart:[].concat(Object(u.a)(e.productInCart.slice(0,n)),[i],Object(u.a)(e.productInCart.slice(n+1))),totalPrice:+(+e.totalPrice.toFixed(2)+ +i.price.toFixed(2)).toFixed(2)})}var s=e.products.find((function(e){return e.id===r})),o={categories:s.categories,title:s.title,price:+(+s.price).toFixed(2),url:s.url,id:s.id,quantity:1};return Object(b.a)(Object(b.a)({},e),{},{productInCart:[].concat(Object(u.a)(e.productInCart),[o]),totalPrice:+(+e.totalPrice.toFixed(2)+ +o.price.toFixed(2)).toFixed(2)});case"REMOVE_FROM_CART":var d=t.id,l=e.productInCart.findIndex((function(e){return e.id===d})),j=+e.productInCart[l].price.toFixed(2)*e.productInCart[l].quantity;return Object(b.a)(Object(b.a)({},e),{},{productInCart:[].concat(Object(u.a)(e.productInCart.slice(0,l)),Object(u.a)(e.productInCart.slice(l+1))),totalPrice:+(+e.totalPrice.toFixed(2)-+j.toFixed(2)).toFixed(2)});case"PRODUCT_CART_PLUS":var p=t.id,m=e.productInCart.findIndex((function(e){return e.id===p})),x=e.productInCart.find((function(e){return e.id===p})),h=Object(b.a)(Object(b.a)({},x),{},{quantity:++x.quantity});return Object(b.a)(Object(b.a)({},e),{},{productInCart:[].concat(Object(u.a)(e.productInCart.slice(0,m)),[h],Object(u.a)(e.productInCart.slice(m+1))),totalPrice:+(+e.totalPrice.toFixed(2)+ +h.price.toFixed(2)).toFixed(2)});case"PRODUCT_CART_MINUS":var v=t.id,f=e.productInCart.findIndex((function(e){return e.id===v})),_=e.productInCart.find((function(e){return e.id===v})),g=Object(b.a)(Object(b.a)({},_),{},{quantity:--_.quantity});return Object(b.a)(Object(b.a)({},e),{},{productInCart:[].concat(Object(u.a)(e.productInCart.slice(0,f)),[g],Object(u.a)(e.productInCart.slice(f+1))),totalPrice:+(+e.totalPrice.toFixed(2)-+g.price.toFixed(2)).toFixed(2)});case"NEW_ORDER":return Object(b.a)(Object(b.a)({},e),{},{orders:[].concat(Object(u.a)(e.orders),[t.newOrder])});case"CLEAR__CART":return Object(b.a)(Object(b.a)({},e),{},{productInCart:[],totalPrice:0});case"CLEAR__FORM__ORDER":return Object(b.a)(Object(b.a)({},e),{},{clearForm:t.clear});default:return e}},m=c(236),x=Object(l.c)({main:p,form:m.a}),h=Object(l.d)(x,Object(l.a)(j.a)),v=c(21),f=(c(173),c(22)),_=c.n(f),g=c(33),C="https://my-json-server.typicode.com/ard43g/storage/",N={getResource:function(){return Object(g.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"product/"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},sendNewOrder:function(e){return fetch("".concat(C,"orders"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)})}},y=function(e){return{type:"LOADING",loading:e}},w=function(e){return{type:"PRODUCTS_LOADED",payload:e}},I=function(e,t){return{type:"SERVICE_ERROR",errorMessage:{status:e,statusText:t}}},E=function(e){return{type:"SET_ACTIVE_CATEGORIES",categories:e}},A=function(e){return{type:"NEW_ORDER",newOrder:e}},R=function(e){return{type:"SHOW_MODAL",show:e}},S=function(e){return{type:"CLEAR__FORM__ORDER",clear:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t){t(E(e))}},P=function(e){return function(t){t(function(e){return{type:"PRODUCT_ADD_TO_CART",id:e}}(e))}},M=c(71),D=function(e){return e.main.initialized},k=function(e){return e.main.errorApp},z=function(e){return e.main.serviceError},F=function(e){return e.main.serviceErrorMessage},L=function(e){return e.main.loading},q=Object(M.a)((function(e){return e.main.products}),(function(e){return e})),B=Object(M.a)((function(e){return e.main.categoriesList}),(function(e){return e})),U=function(e){return e.main.activeCategories},H=function(e){return e.main.totalPrice},V=function(e){return e.main.productInCart},G=function(e){return e.main.showModal},$=function(e){return e.main.clearForm},W=c(23),Z=(c(175),c(0)),J=function(e){var t=Object(a.useState)(!1),c=Object(W.a)(t,2),r=c[0],n=c[1];return r?null:Object(Z.jsx)("div",{className:"page__wrapper",children:Object(Z.jsxs)("div",{className:"start__page",children:[Object(Z.jsx)("button",{className:"start__page_button",onClick:function(){n((function(){return!0}))},children:Object(Z.jsx)(d.b,{to:"/product",children:Object(Z.jsx)("span",{children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432\xa0\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})})," "]})})},X=(c(178),c(179),c(180),c(6)),Q=(c(181),function(e){var t=e.categories,c=Object(Z.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fill:"#3836BD",children:Object(Z.jsx)("path",{d:"M11.63 15.214h.625l.004-3.197h-.626l-.003 3.197zm-1.161-1.894h.626l.01-1.738h-.627l-.009 1.738zm2.36-.013h.627l-.01-1.725h-.626l.009 1.725zm-1.916-9.135c0 .57.461 1.031 1.031 1.031.57 0 1.031-.461 1.032-1.031-.001-.569-.462-1.03-1.032-1.031-.57 0-1.031.462-1.031 1.031zm1.546 2.577c0-.285-.23-.515-.515-.515-.285 0-.515.23-.515.515 0 .285.23.515.515.516.285-.001.515-.231.515-.516zm-4.86 5.268c-.332-2.929 1.206-4.092 1.837-4.711l-.002-.009c-.129-.85-.692-4.502 2.503-7.297 3.249 2.807 2.723 6.416 2.594 7.306.631.619 2.174 1.782 1.842 4.711-.5-1.113-1.458-1.832-2.561-2.074-.088.216-.297.707-.393.907l-2.805.009c-.1-.203-.343-.707-.436-.93-1.025.191-1.912.682-2.579 2.088zm4.881 5.939v6.044l6.266-3.343v-2.464l-4.042 2.116-2.224-2.353zm-7.26.19v2.511l6.26 3.34v-5.998l-2.171 2.385-4.089-2.238zm1.617-5.01c-.607-1.281-.386-2.963-.031-4.001l-3.84 1.984 2.254 2.121-2.254 2.482 6.133 3.407 2.381-2.615v-.041l-5.45-2.892.807-.445zm11.909.104l2.254 2.591-6.089 3.24-2.431-2.57v-.004l5.457-2.916-.826-.455c.661-1.263.411-2.937.021-3.983l3.868 2.018-2.277 2.066.023.013z"})}),r=Object(Z.jsx)("svg",{enableBackground:"new 0 0 197.097 240.563",height:"240.563px",id:"Layer_1",version:"1.1",viewBox:"0 0 197.097 240.563",width:"197.097px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(Z.jsxs)("g",{children:[Object(Z.jsx)("path",{fill:"#3836BD",d:"M197.097,107.427c-0.006-22.327-18.131-40.409-40.484-40.412c-10.746-0.002-20.533,4.201-27.78,11.032   c-2.942-3.31-6.42-6.13-10.298-8.333c4.204,0.279,8.896,0.554,13.899,0.785c1.039,0.046,2.006-0.562,2.415-1.52   c0.408-0.958,0.175-2.079-0.582-2.792c-1.159-1.097-2.19-2.102-3.086-2.989c5.291-0.418,13.649-1.414,22.049-3.791   c0.86-0.245,1.521-0.921,1.741-1.788c0.219-0.863-0.031-1.773-0.67-2.4c-3.218-2.91-7.671-4.093-10.923-4.748   c8.77-5.921,18.168-17.834,18.407-17.929l0.003-0.002l0.006-0.009c0.438-0.531,0.617-1.188,0.558-1.822   c0.182-0.354,0.292-0.75,0.286-1.174c-0.021-1.382-1.158-2.485-2.536-2.465c-0.285,0.239-17.725-0.102-27.972,4.294   c0.606-1.976,1.318-4.517,1.362-7.262c0.003-1.227-0.155-2.522-0.553-3.829c-0.259-0.854-0.958-1.508-1.83-1.707   c-0.87-0.201-1.785,0.078-2.393,0.734c-6.247,6.722-11.156,11.911-13.805,14.697c-0.745-1.398-1.763-3.573-3.027-6.887   c-0.381-0.996-1.359-1.644-2.425-1.606c-1.062,0.034-1.995,0.751-2.303,1.768c-2.829,9.282-5.615,18.655-7.678,25.652   C98.54,36.33,94.782,12.124,77.154,0.734c-2.354-1.439-5.432-0.696-6.871,1.658c-1.442,2.358-0.7,5.436,1.658,6.875   c5.765,3.234,9.788,9.746,12.54,17.339c-1.912-0.834-3.98-1.48-6.112-1.93c-1.997-2.572-4.753-5.16-8.38-7.717   c-6.782-4.796-13.075-6.92-18.654-6.923c-13.032,0.04-20.609,11.48-20.63,22.538c-0.018,6.909,2.931,14.048,9.432,18.49   c1.14,0.78,2.694,0.486,3.475-0.65c0.779-1.141,0.489-2.698-0.651-3.475c-4.974-3.409-7.24-8.8-7.254-14.365   c0.071-9.051,5.947-17.521,15.629-17.538c4.283-0.003,9.589,1.641,15.77,6.005c1.415,1.002,2.645,1.982,3.726,2.938   c-7.407,0.474-14.767,4.93-14.783,15.023c0.012,7.214,5.254,11.083,10.574,11.095c7.266-0.055,15.692-5.646,15.874-14.768   c-0.005-1.435-0.236-2.897-0.705-4.379c1.882,0.793,3.555,1.741,4.836,2.709c2.573,10.207,3.32,21.108,3.172,28.247   c0,1.319-0.019,2.489-0.045,3.502c-7.846,1.736-14.832,5.741-20.237,11.295c-7.348-7.554-17.655-12.264-29.031-12.264   C18.131,64.442,0.003,82.523,0,104.854c0.002,15.721,8.996,29.327,22.117,36.009c-2.271,5.053-3.538,10.66-3.536,16.538   c0.003,21.153,16.271,38.482,36.987,40.255c-0.05,0.826-0.085,1.655-0.085,2.492c0.005,22.33,18.13,40.412,40.484,40.415   c22.354-0.003,40.479-18.085,40.484-40.415c0-0.927-0.039-1.844-0.102-2.756c19.588-2.825,34.645-19.64,34.647-39.991   c0.002-4.021-0.603-7.914-1.704-11.593C185.435,140.495,197.092,125.332,197.097,107.427z M77.494,35.329   c-0.012,5.464-5.982,9.759-10.873,9.768c-3.374-0.259-5.349-1.203-5.573-6.094c0.19-7.787,4.528-9.777,11.069-10.07   c1.082-0.033,2.193,0.053,3.306,0.214C76.938,31.496,77.503,33.588,77.494,35.329z M109.953,35.284   c1.619,3.286,2.581,4.253,2.95,4.599c1.005,0.879,2.524,0.813,3.448-0.152c0.005-0.005,4.587-4.779,11.693-12.379   c-0.612,2.417-1.647,4.891-1.767,7.538c0,0.711,0.106,1.488,0.435,2.257c0.334,0.786,1.039,1.339,1.88,1.482   c0.838,0.144,1.687-0.146,2.263-0.777c1.58-2.044,9.29-4.105,16.156-4.83c3.114-0.385,6.084-0.614,8.417-0.751   c-1.455,1.647-3.435,3.818-5.651,6.059c-4.479,4.618-10.297,9.448-13.254,10.156c-0.814,0.225-1.462,0.846-1.719,1.65   c-0.256,0.803-0.089,1.687,0.447,2.34c2.776,2.531,6.723,2.908,10.14,3.694c-10.617,2.184-19.862,2.308-19.879,2.331   c-0.987,0.015-1.872,0.604-2.261,1.515c-0.391,0.907-0.213,1.955,0.458,2.68c0.017,0.018,0.869,0.943,2.375,2.473   c-9.88-0.554-17.992-1.224-22.591-1.638c3.549-3.274,14.479-12.708,29.472-19.622c0.504-0.23,0.723-0.823,0.489-1.324   c-0.23-0.504-0.823-0.723-1.327-0.49c-15.515,7.159-26.725,16.938-30.17,20.136C103.485,57.003,106.566,46.515,109.953,35.284z    M93.479,74.874c0.221,0.048,0.439,0.103,0.671,0.122c0.91,0.072,1.773-0.123,2.542-0.491c0.613-0.038,1.23-0.063,1.854-0.064   c16.844,0.028,30.455,13.625,30.483,30.414c-0.028,16.786-13.64,30.383-30.483,30.411c-16.841-0.028-30.452-13.625-30.483-30.411   C68.092,89.787,79.059,77.299,93.479,74.874z M9.998,104.854c0.031-16.789,13.643-30.386,30.486-30.414   c9.15,0,17.314,4.009,22.916,10.371c-3.388,5.908-5.334,12.745-5.335,20.043c0.001,7.295,1.946,14.131,5.332,20.037   c-5.593,6.361-13.764,10.375-22.913,10.375C23.641,135.237,10.029,121.64,9.998,104.854z M28.582,157.401   c0-4.719,1.084-9.155,2.995-13.129c2.867,0.643,5.846,0.994,8.907,0.994c11.379,0,21.676-4.711,29.029-12.266   c4.542,4.668,10.2,8.243,16.549,10.297c2.22,4.218,3.483,8.994,3.486,14.104c-0.031,16.789-13.643,30.383-30.483,30.415   C42.225,187.784,28.61,174.19,28.582,157.401z M95.968,230.562c-16.841-0.032-30.455-13.625-30.483-30.414   c0-0.97,0.049-1.925,0.136-2.868c12.655-2.059,23.339-9.968,29.17-20.865c6.195,11.576,17.863,19.788,31.556,21.188   c0.069,0.838,0.105,1.687,0.105,2.545C126.419,216.937,112.809,230.53,95.968,230.562z M161,157.401   c-0.031,16.789-13.643,30.383-30.483,30.415c-16.844-0.032-30.454-13.625-30.486-30.415c0.002-4.41,0.942-8.572,2.623-12.341   c9.128-0.919,17.354-4.871,23.67-10.822c7.412,8.339,18.247,13.605,30.289,13.605c0.947,0,1.885-0.044,2.815-0.108   C160.446,150.768,160.998,154.012,161,157.401z M156.612,137.842c-9.653,0-18.228-4.461-23.823-11.44   c3.947-6.237,6.241-13.622,6.242-21.548c-0.001-6.64-1.614-12.898-4.455-18.424c5.56-5.802,13.354-9.414,22.036-9.414   c16.841,0.029,30.454,13.625,30.483,30.411C187.066,124.216,173.453,137.81,156.612,137.842z"}),Object(Z.jsx)("path",{fill:"#3836BD",d:"M98.547,130c8.498,0,16.015-4.244,20.528-10.724c0.313-0.455,0.204-1.077-0.25-1.394   c-0.452-0.316-1.077-0.204-1.391,0.248c-4.16,5.968-11.063,9.869-18.888,9.869c-0.553,0-0.999,0.449-0.999,1.002   S97.994,130,98.547,130z"}),Object(Z.jsx)("path",{d:"M121.091,113.321c0.523,0.167,1.088-0.121,1.258-0.648c0.777-2.418,1.2-4.998,1.2-7.672   c0-0.553-0.449-1.001-1.002-1.001s-0.999,0.449-0.999,1.001c0,2.465-0.388,4.837-1.104,7.059   C120.276,112.586,120.563,113.151,121.091,113.321z",fill:"#3836BD"})]})}),n=Object(Z.jsx)("svg",{"data-name":"Layer 1",id:"Layer_1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(Z.jsx)("path",{fill:"#3836BD",d:"M18,4V2H14.22l-1,4H12a4,4,0,1,0-4,4h.21l.86,12h9.86L20.07,6H15.28l.5-2Zm-.07,4-.29,4H10.36l-.29-4Z"})}),a=Object(Z.jsxs)("svg",{id:"Icons",version:"1.1",viewBox:"0 0 32 32",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(Z.jsx)("path",{fill:"#3836BD",className:"st0",d:"M22.1,11.4c0.6-1,0.9-2.2,0.9-3.4c0-3.9-3.1-7-7-7S9,4.1,9,8c0,1.2,0.3,2.4,0.9,3.4C8.7,12.1,8,13,8,14  c0,2.2,3.6,3,8,3s8-0.8,8-3C24,13,23.3,12.1,22.1,11.4z"}),Object(Z.jsx)("polyline",{className:"st0",points:"10,17 16,31 22,17 ",fill:"#3836BD"}),Object(Z.jsx)("path",{className:"st0",d:"M10,11.2c1.5,0.6,3.6,0.8,6,0.8",fill:"#3836BD"})]}),i=function(){switch(t){case"lemonade":return n;case"icecream":return a;case"fruits":return r;default:return c}};return Object(Z.jsx)("div",{className:"product__icon",children:Object(Z.jsx)(i,{})})}),K=Object(X.g)((function(e){var t=e.productItem,c=e.onAddToCart,r=e.onSetActiveCategories,n=e.itemPage;"boolean"===typeof t.price&&(t.price=0);var a=t.id,i=t.title||"\u0422\u043e\u0432\u0430\u0440 \u0431\u0435\u0437 \u0438\u043c\u0435\u043d\u0438",s=+t.price||"\u0422\u043e\u0432\u0430\u0440 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f",o=t.url,l=t.categories||"\u0422\u043e\u0432\u0430\u0440 \u0431\u0435\u0437 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438";return Object(Z.jsx)("div",{className:"product__item ".concat(n?"item__page":""),children:Object(Z.jsxs)("div",{className:"".concat(n?"item__page_wrapper":""),children:[Object(Z.jsxs)(d.b,{to:"/product/".concat(l,"/").concat(a),children:[Object(Z.jsx)("div",{className:"product__title",children:i}),Object(Z.jsx)("div",{className:"product__image",children:Object(Z.jsx)("img",{className:"product__img",src:o,alt:i})})]}),n&&Object(Z.jsx)(d.b,{to:"/product",className:"item__page_close",children:Object(Z.jsx)("div",{className:"cart__close",children:Object(Z.jsx)("span",{children:"\xd7"})})}),Object(Z.jsxs)("div",{className:"product__descr",children:[Object(Z.jsxs)("div",{className:"product__category",children:["Category:",Object(Z.jsx)("button",{className:"product__btn product__btn_small",onClick:function(){return r(l)},children:l}),Object(Z.jsx)(Q,{categories:l})]}),Object(Z.jsxs)("div",{className:"product__price",children:["Price:",Object(Z.jsx)("span",{children:Number(s)?"".concat(+s.toFixed(2)," $"):s})]}),Object(Z.jsx)("button",{onClick:function(){return c(a)},disabled:!s||isNaN(s),className:"product__btn",children:"Add to cart"})]})]})})})),Y={onAddToCart:P,onSetActiveCategories:T},ee=Object(o.b)((function(e){return{productItems:q(e),activeCategories:U(e),loading:L(e)}}),Y)(Object(X.g)((function(e){var t=e.productItems,c=e.activeCategories,r=(e.loading,e.onAddToCart),n=e.onSetActiveCategories,i=Object(v.a)(e,["productItems","activeCategories","loading","onAddToCart","onSetActiveCategories"]),s=Object(a.useState)(c),o=Object(W.a)(s,2),d=o[0],l=o[1];Object(a.useEffect)((function(){d!==c&&l(c)}),[c]),Object(a.useEffect)((function(){i.match.params.category&&i.match.params.category!==c&&l(i.match.params.category)}),[i.match.params.category]);var j=(d&&d.length>0?t.filter((function(e){return e.categories===d})):t).map((function(e){return Object(Z.jsx)(K,{productItem:e,onAddToCart:r,onSetActiveCategories:n},e.id)}));return Object(Z.jsx)("div",{className:"product__list",children:j})}))),te=(c(182),function(e){return e.categoriesList.map((function(e,t){return Object(Z.jsx)("option",{value:e,children:e},t)}))}),ce={onSetActiveCategories:T},re=Object(o.b)((function(e){return{categoriesList:B(e),activeCategories:U(e)}}),ce)(Object(X.g)((function(e){var t=Object(a.useState)(e.activeCategories),c=Object(W.a)(t,2),r=c[0],n=c[1];return Object(a.useEffect)((function(){e.match.params.category!==e.activeCategories&&n(e.activeCategories)}),[e.activeCategories]),Object(a.useEffect)((function(){e.match.params.category&&(e.onSetActiveCategories(e.match.params.category),n(e.match.params.category))}),[e.match.params.category]),Object(Z.jsx)("div",{className:"categories",children:Object(Z.jsxs)("div",{className:"categories__wrapper",children:[Object(Z.jsx)("label",{className:"categories__label",children:" \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e : "}),Object(Z.jsx)("div",{className:"categories__block",children:Object(Z.jsxs)("select",{className:"categories__select",value:r.length>0?r:"all",onChange:function(t){return function(t){"all"===t.target.value?e.onSetActiveCategories():(e.onSetActiveCategories(t.target.value),n(t.target.value))}(t)},children:[Object(Z.jsx)("option",{value:"all",children:" \u0412\u0441\u0435"}),Object(Z.jsx)(te,{categoriesList:e.categoriesList})]})})]})})}))),ne=function(){return Object(Z.jsxs)("div",{className:"product__page",children:[Object(Z.jsx)(re,{}),Object(Z.jsx)(ee,{})]})},ae=(c(183),{removeFromCart:function(e){return{type:"REMOVE_FROM_CART",id:e}},changeQuantityInCart:function(e,t){return function(c){switch(t){case"plus":return c(function(e){return{type:"PRODUCT_CART_PLUS",id:e}}(e));case"minus":return c(function(e){return{type:"PRODUCT_CART_MINUS",id:e}}(e));default:return t}}}}),ie=Object(o.b)((function(e){return{products:V(e)}}),ae)((function(e){var t=e.products,c=e.removeFromCart,r=e.changeQuantityInCart;return 0===t.length?Object(Z.jsxs)("div",{className:"cart__wrapper",children:[Object(Z.jsx)("div",{className:"cart__title",children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(Z.jsx)("div",{className:"cart__back",children:Object(Z.jsx)(d.b,{to:"/product",className:"cart__back_btn",children:Object(Z.jsx)("span",{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c"})})})]}):Object(Z.jsxs)("div",{className:"cart",children:[Object(Z.jsx)("div",{className:"cart__title",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"}),Object(Z.jsx)("button",{className:"cart__btn-wrapper cart__btn-buy",children:Object(Z.jsx)(d.b,{to:"/order",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(Z.jsx)("div",{className:"cart__list",children:t.map((function(e){var t=e.title,n=e.price,a=e.url,i=e.id,s=e.quantity,o=e.categories;return Object(Z.jsxs)("div",{className:"cart__item",children:[Object(Z.jsx)("div",{className:"cart__image",children:Object(Z.jsx)(d.b,{to:"/product/".concat(o,"/").concat(i),children:Object(Z.jsx)("img",{src:a,className:"cart__item-img",alt:"{title}"})})}),Object(Z.jsx)("div",{className:"cart__item-title",children:Object(Z.jsx)(d.b,{to:"/product/".concat(o,"/").concat(i),children:t})}),Object(Z.jsxs)("div",{className:"cart__btn-wrapper",children:[Object(Z.jsx)("button",{onClick:function(){return r(i,"plus")},className:"cart__btn-quantity",children:Object(Z.jsx)("span",{children:"+"})}),Object(Z.jsx)("button",{disabled:s<=1,onClick:function(){return r(i,"minus")},className:"cart__btn-quantity",children:Object(Z.jsx)("span",{children:"-"})})]}),Object(Z.jsx)("div",{className:"cart__item-price",children:Object(Z.jsxs)("span",{children:[n,"$ * ",s," \u0448\u0442.",Object(Z.jsx)("br",{})," \u043d\u0430 \u0441\u0443\u043c\u043c\u0443 ",Object(Z.jsx)("br",{})," ",(n*s).toFixed(2),"$"]})}),Object(Z.jsx)("div",{onClick:function(){return c(i)},className:"cart__close",children:Object(Z.jsx)("span",{children:"\xd7"})})]},i)}))}),Object(Z.jsx)("button",{className:"cart__btn-wrapper cart__btn-main",children:Object(Z.jsx)(d.b,{to:"/order",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})})]})})),se=function(){return Object(Z.jsx)(ie,{})},oe=(c(184),{onAddToCart:P,onSetActiveCategories:T}),de=Object(o.b)((function(e){return{productsItems:q(e),loading:L(e)}}),oe)(Object(X.g)((function(e){var t=Object(a.useState)(!1),c=Object(W.a)(t,2),r=c[0],n=c[1],i=Object(a.useState)(e.match.params.id),s=Object(W.a)(i,2),o=s[0],d=s[1],l=e.match.params.category,j=+e.match.params.id;(isNaN(e.match.params.id)||e.match.params.id>e.productsItems.length)&&(j=e.productsItems.length);var u=e.productsItems.find((function(e){return+e.id===+j}));return u.id===o&&u.categories===l&&r&&n((function(){return!1})),Object(a.useEffect)((function(){if(e.match.params.id!==u.id&&e.match.params.category!==u.categories){var t=e.productsItems.find((function(t){return t.categories===e.match.params.category}));n((function(){return!0})),d((function(){return+t.id}))}}),[o]),r?Object(Z.jsx)(X.a,{to:"/product/".concat(l,"/").concat(o)}):Object(Z.jsx)(K,{productItem:u,onAddToCart:e.onAddToCart,onSetActiveCategories:e.onSetActiveCategories,itemPage:!0},u.id)}))),le=(c(185),c(186),c(187),c(235)),je=c(234),ue=function(e){return e?void 0:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430"},be=function(e){return/^\D/gi.test(e)?void 0:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0431\u0443\u043a\u0432\u043e\u0439"},Oe=function(e){return e&&isNaN(Number(e))?"\u0422\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b \u0431\u0435\u0437 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432":void 0},pe=(c(188),function(e){var t=e.input,c=e.label,r=e.type,n=e.meta,a=n.touched,i=n.error,s=e.placeholder,o=Object(v.a)(e,["input","label","type","meta","placeholder"]),d=a&&i,l=r;return Object(Z.jsxs)("div",{className:"form__field form__field_".concat(l),children:[Object(Z.jsx)("input",Object(b.a)(Object(b.a)({},t),{},{type:r,placeholder:s,className:"form__input form__input_".concat(l," ").concat(d?"_error":""," ")})),c&&Object(Z.jsx)("label",{className:"order__label",htmlFor:o.name,children:"\u041f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043c\u043d\u0435"}),"checkbox"!==r&&Object(Z.jsxs)("div",{className:"form__field_error",children:[" ",d?i:""]})]})}),me=(c(189),function(e){var t=e.size,c=Object(Z.jsx)("div",{className:"loadingio-spinner-spin-lleuc40854p",children:Object(Z.jsxs)("div",{className:"ldio-scbgiavrndk",children:[Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})})]})}),r=Object(Z.jsx)("div",{className:"loadingio-spinner-spin-dqfcwt8bn1",children:Object(Z.jsxs)("div",{className:"ldio-yfe021g5ij",children:[Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{})})]})}),n=t?function(e){switch(e){case"large":return c;case"small":return r;default:return e}}(t):"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...";return Object(Z.jsx)("div",{className:"spinner spinner__wrapper_".concat(t||""),children:Object(Z.jsx)("div",{className:"spinner__block",children:Object(Z.jsx)("div",{className:"spinner__initialize",children:n})})})}),xe=(r=11,function(e){return e&&e.length>r?"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 : ".concat(r):void 0}),he=(n=11,function(e){return e&&e.length<n?"\u041c\u0438\u043c\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 : ".concat(n):void 0}),ve=Object(je.a)({form:"order"})((function(e){var t=e.handleSubmit,c=e.reset,r=e.submitting,n=e.valid,i=e.clearForm;return Object(a.useEffect)((function(){i&&c()}),[i]),Object(Z.jsxs)("form",{className:"order__form",onSubmit:t,children:[Object(Z.jsx)("div",{className:"order__field-wrapper",children:Object(Z.jsx)(le.a,{className:"order__field",name:"firstName",component:pe,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f",validate:[ue,be]})}),Object(Z.jsx)("div",{className:"order__field-wrapper",children:Object(Z.jsx)(le.a,{name:"tel",component:pe,type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",validate:[ue,Oe,xe,he]})}),Object(Z.jsx)("div",{className:"order__field-wrapper",children:Object(Z.jsx)(le.a,{name:"call",id:"call",component:pe,type:"checkbox",label:"\u041f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043c\u043d\u0435"})}),Object(Z.jsxs)("div",{className:"order__submit ",children:[Object(Z.jsx)("button",{className:"order__submit-btn product__btn",disabled:!n||r,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),r&&Object(Z.jsx)(me,{size:"small"})]})]})})),fe=(c(228),function(e){return e.productInCart.map((function(e){var t=e.title,c=e.url,r=e.id,n=e.quantity;return Object(Z.jsxs)("div",{className:"order__product",children:[Object(Z.jsx)("div",{className:"order__product-image",children:Object(Z.jsx)("img",{src:c,alt:"title"})}),Object(Z.jsx)("div",{className:"order__product-title",children:t}),Object(Z.jsxs)("div",{className:"order__product-quantity",children:["x ",Object(Z.jsx)("span",{children:n})]})]},r)}))}),_e=(c(229),function(e){var t=e.type,c=e.isClose,r=e.onCloseServiceError,n=e.message,a=Object(Z.jsx)("div",{className:"error error__service",children:Object(Z.jsxs)("div",{className:"error__service_block ",children:[c&&Object(Z.jsx)("div",{className:"cart__close",onClick:r,children:Object(Z.jsx)("span",{children:"X"})}),Object(Z.jsxs)("div",{className:"modal__message",children:[n," "]})]})});return"done"===t?Object(Z.jsx)("div",{className:"modal__wrapper",children:Object(Z.jsx)("div",{className:"modal__block ",children:Object(Z.jsxs)("div",{className:"modal__message",children:[" ",n," "]})})}):a}),ge={setNewOrder:function(e){return function(){var t=Object(g.a)(_.a.mark((function t(c){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(y(!0)),t.next=3,N.sendNewOrder(e).then((function(t){if(t.ok)c(A(e)),c(R(!0));else{var r=t.status,n=t.statusText;c(I(r,n))}})).catch((function(){c({type:"APP_ERROR"})})).finally(setTimeout((function(){c(y(!1)),c(R(!1)),c(S(!0)),c(S(!1)),c({type:"CLEAR__CART"})}),5e3));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},Ce=Object(o.b)((function(e){return{productInCart:V(e),totalPrice:H(e),loading:L(e),showModal:G(e),errorService:z(e),clearForm:$(e)}}),ge)((function(e){var t=e.productInCart,c=e.totalPrice,r=e.loading,n=e.setNewOrder,a=e.clearForm,i=Object(v.a)(e,["productInCart","totalPrice","loading","setNewOrder","clearForm"]);return 0===t.length?Object(Z.jsx)(X.a,{to:"/product"}):Object(Z.jsx)("div",{className:"order",children:Object(Z.jsxs)("div",{className:"order__wrapper",children:[Object(Z.jsx)(d.b,{to:"/cart",className:"cart__close",children:Object(Z.jsx)("span",{children:"\xd7"})}),Object(Z.jsx)(ve,{onSubmit:function(e){var r=t.map((function(e){return{id:e.id,title:e.title,quantity:e.quantity}})),a=Object(b.a)(Object(b.a)({},e),{},{totalPrice:c}),i=Object(b.a)(Object(b.a)({},r),{},{contacts:a});return n(i)},clearForm:a,loading:r}),Object(Z.jsxs)("div",{className:"order__products-wrapper",children:[Object(Z.jsxs)("div",{className:"order__total-price",children:["\u0417\u0430\u043a\u0430\u0437 \u043d\u0430 \u0441\u0443\u043c\u043c\u0443 : ",Object(Z.jsxs)("span",{children:[c," $"]})]}),Object(Z.jsx)(fe,{productInCart:t})]}),i.showModal&&!i.errorService&&Object(Z.jsx)(_e,{type:"done",message:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437!"})]})})})),Ne=function(e){return Object(Z.jsx)(Ce,{})},ye=(c(230),c(231),c.p+"static/media/cart.e780304c.svg"),we=c.p+"static/media/cart-full.38806c0a.svg",Ie={onSetActiveCategories:T},Ee=Object(o.b)((function(e){return{totalPrice:H(e)}}),Ie)(Object(X.g)((function(e){var t=e.totalPrice,c=Object(v.a)(e,["totalPrice"]),r=t>0?we:ye;return Object(Z.jsxs)("header",{className:"header",children:[Object(Z.jsx)(d.b,{to:"/product",className:"header__link",onClick:function(){c.onSetActiveCategories()},children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),Object(Z.jsxs)(d.b,{to:"/cart",className:"header__link",children:[Object(Z.jsx)("img",{className:"header__cart",src:r,alt:"cart"}),"Total: ",t," $"]})]})}))),Ae=Object(X.g)((function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(Ee,{}),Object(Z.jsxs)(X.d,{children:[Object(Z.jsx)(X.b,{path:"/product/:category/:id",render:function(){return Object(Z.jsx)(de,{})}}),Object(Z.jsx)(X.b,{path:"/product/:category?",render:function(){return Object(Z.jsx)(ne,{})}}),Object(Z.jsx)(X.b,{path:"/order",render:function(){return Object(Z.jsx)(Ne,{})}}),Object(Z.jsx)(X.b,{path:"/cart",render:function(){return Object(Z.jsx)(se,{})}}),Object(Z.jsx)(X.b,{path:"/",render:function(){return Object(Z.jsx)(J,{})},exact:!0})]})]})})),Re=(c(232),function(e){var t=e.status,c=e.text,r=e.onCloseServiceError;if(e.critical)return Object(Z.jsx)("div",{className:"error error__app",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"});var n="\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043a\u043e\u0434 ".concat(t," : ").concat(c);return Object(Z.jsx)(_e,{type:"error",isClose:!0,onCloseServiceError:r,message:n})}),Se={onInitializedApp:function(){return function(){var e=Object(g.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getResource().then(function(){var e=Object(g.a)(_.a.mark((function e(c){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.ok||t(I(c.status,c.statusText)),e.next=3,c.json();case 3:r=e.sent,t(w(r)),t({type:"SET_CATEGORIES_LIST"}),t({type:"INITIALIZED_APP"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){t({type:"APP_ERROR"}),console.log("CATCH")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},onCloseServiceError:function(){return function(e){e({type:"CLOSE_ERROR"})}}},Te=Object(o.b)((function(e){return{initialized:D(e),serviceError:z(e),serviceErrorMessage:F(e),errorApp:k(e)}}),Se)((function(e){var t=e.serviceError,c=e.initialized,r=e.errorApp,n=Object(v.a)(e,["serviceError","initialized","errorApp"]);return Object(a.useEffect)((function(){n.onInitializedApp()}),[c]),r?Object(Z.jsx)(Re,{critical:!0}):Object(Z.jsxs)("div",{className:"app",children:[t&&Object(Z.jsx)(Re,{status:n.serviceErrorMessage.status,text:n.serviceErrorMessage.statusText,onCloseServiceError:n.onCloseServiceError}),!t&&!c&&Object(Z.jsx)(me,{size:"large"}),c&&Object(Z.jsx)(Ae,{})]})})),Pe=c(100),Me=c(101),De=c(103),ke=c(102),ze=function(e){Object(De.a)(c,e);var t=Object(ke.a)(c);function c(){var e;Object(Pe.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(Me.a)(c,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(Z.jsx)(Re,{critical:!0}):this.props.children}}]),c}(a.Component);s.a.render(Object(Z.jsx)(o.a,{store:h,children:Object(Z.jsx)(ze,{children:Object(Z.jsx)(d.a,{basename:"/",children:Object(Z.jsx)(Te,{})})})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.7a6455a9.chunk.js.map