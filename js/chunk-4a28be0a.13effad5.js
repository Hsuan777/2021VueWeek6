(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a28be0a"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?a(t):o(n(t))}},"0fd0":function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var n=r("7a23"),o={class:"container mt-5"},c={class:"row justify-content-around"},i={class:"col-lg-4"},a={class:"col-lg-6"},u={class:"text-primary"},s={class:"text-end mb-3"},f={class:"d-flex justify-content-between"},d={class:"input-group w-50"},l=Object(n["i"])("template",null,null,-1),p={key:0,class:"spinner-border text-danger ms-auto",role:"status"},b=Object(n["i"])("span",{class:"visually-hidden"},"Loading...",-1);function h(t,e,r,h,v,y){var g=Object(n["B"])("loading");return Object(n["u"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(g,{active:v.isLoading.status},null,8,["active"]),Object(n["i"])("section",o,[Object(n["i"])("div",c,[Object(n["i"])("div",i,[Object(n["i"])("h1",null,Object(n["E"])(v.product.title),1),Object(n["i"])("img",{src:v.product.imageUrl,alt:"",class:"img-fluid rounded"},null,8,["src"])]),Object(n["i"])("div",a,[Object(n["i"])("h2",u,Object(n["E"])(v.product.category),1),Object(n["i"])("p",null,Object(n["E"])(v.product.description),1),Object(n["i"])("p",null,Object(n["E"])(v.product.content),1),Object(n["i"])("h4",s,"售價："+Object(n["E"])(v.product.price),1),Object(n["i"])("div",f,[Object(n["i"])("div",d,[Object(n["i"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=function(t){return v.cartsOfProduct[0].qty-=1}),disabled:v.cartsOfProduct[0].qty-1===0}," - ",8,["disabled"]),Object(n["M"])(Object(n["i"])("input",{type:"text",class:"form-control text-center text-danger bg-white","onUpdate:modelValue":e[2]||(e[2]=function(t){return v.cartsOfProduct[0].qty=t}),disabled:""},null,512),[[n["H"],v.cartsOfProduct[0].qty]]),Object(n["i"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[3]||(e[3]=function(t){return v.cartsOfProduct[0].qty+=1})}," + ")]),l,v.isLoading.itemID?(Object(n["u"])(),Object(n["e"])("div",p,[b])):(Object(n["u"])(),Object(n["e"])(n["a"],{key:1},[v.cartsOfProduct[0].id?(Object(n["u"])(),Object(n["e"])("input",{key:0,type:"button",value:"更新購物車",class:"btn btn-primary text-white",onClick:e[4]||(e[4]=function(t){return y.putCart(v.cartsOfProduct[0])})})):(Object(n["u"])(),Object(n["e"])("input",{key:1,type:"button",value:"加入購物車",class:"btn btn-primary text-white",onClick:e[5]||(e[5]=function(t){return y.addCart(v.product.id,v.cartsOfProduct[0].qty)})}))],64))])])])])],64)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function y(t){if(Array.isArray(t))return v(t)}r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function g(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function m(t,e){if(t){if("string"===typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}function O(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(t){return y(t)||g(t)||m(t)||O()}r("99af"),r("4de4");var j=r("81c7"),x={data:function(){return{isLoading:{itemID:"",status:!1},product:{},productUrl:"",cartsOfProduct:[{qty:1}]}},emits:["update"],props:["cartsUpdate"],methods:{getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("vs","/product/").concat(this.$route.params.id);this.isLoading.status=!0,this.axios.get(e).then((function(e){t.isLoading.status=!1,e.data.success?t.product=e.data.product:t.swal(e.data.message)})).catch((function(){t.swal("無法取得產品資料喔～！")}))},checkCartsList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("vs","/cart");this.axios.get(e).then((function(e){if(e.data.success){var r=e.data.data,n=[];t.cartsOfProduct=[{qty:1}],n=r.carts.filter((function(e){return e.product.id===t.$route.params.id})),n[0]&&(t.cartsOfProduct=w(n))}else t.swal(e.data.message)})).catch((function(e){console.log(e),t.swal("無法取得購物車資料喔～！")}))},addCart:function(t,e){var r=this;this.isLoading.itemID=t;var n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("vs","/cart"),o={data:{product_id:t,qty:e}};this.axios.post(n,o).then((function(t){t.data.success?(r.isLoading.itemID="",r.$emit("update"),r.swal(t.data.message),r.checkCartsList()):r.swal(t.data.message)})).catch((function(){r.swal("無法加入購物車喔～！")}))},putCart:function(t){var e=this,r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("vs","/cart/").concat(t.id),n={data:{product_id:t.product_id,qty:t.qty}};this.axios.put(r,n).then((function(t){t.data.success?(e.$emit("update"),e.swal(t.data.message)):e.swal("".concat(t.data.message,"，請重新整理頁面。"))})).catch((function(){e.swal("無法更新資料喔～快去看什麼問題吧！")}))},swal:function(t){this.$swal.fire({position:"center",title:t,width:"auto",showConfirmButton:!1,timer:2e3})},test:function(t){console.log(t),console.log("Y")}},created:function(){this.getProduct(),this.checkCartsList(),j["a"].on("update",(function(t){console.log(t)}))},watch:{$route:function(t){this.product.id!==t.params.id&&"Product"===t.name&&(this.getProduct(),this.checkCartsList())},cartsUpdate:function(t){t&&this.checkCartsList()}}};x.render=h;e["default"]=x},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),c=r("2d00"),i=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,c=r("1dde"),i=c("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),c=r("9bdd"),i=r("e95a"),a=r("50c4"),u=r("8418"),s=r("35a1");t.exports=function(t){var e,r,f,d,l,p,b=o(t),h="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,g=void 0!==y,m=s(b),O=0;if(g&&(y=n(y,v>2?arguments[2]:void 0,2)),void 0==m||h==Array&&i(m))for(e=a(b.length),r=new h(e);e>O;O++)p=g?y(b[O],O):b[O],u(r,O,p);else for(d=m.call(b),l=d.next,r=new h;!(f=l.call(d)).done;O++)p=g?c(d,y,[f.value,O],!0):f.value,u(r,O,p);return r.length=O,r}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),c=r("b622"),i=c("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),c=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},"81c7":function(t,e,r){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,r){var n=t.get(e);n&&n.push(r)||t.set(e,[r])},off:function(e,r){var n=t.get(e);n&&n.splice(n.indexOf(r)>>>0,1)},emit:function(e,r){(t.get(e)||[]).slice().map((function(t){t(r)})),(t.get("*")||[]).slice().map((function(t){t(e,r)}))}}};e["a"]=n()},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,c(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),c=r("e8b5"),i=r("861d"),a=r("7b0b"),u=r("50c4"),s=r("8418"),f=r("65f0"),d=r("1dde"),l=r("b622"),p=r("2d00"),b=l("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",y=p>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),g=d("concat"),m=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:c(t)},O=!y||!g;n({target:"Array",proto:!0,forced:O},{concat:function(t){var e,r,n,o,c,i=a(this),d=f(i,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?i:arguments[e],m(c)){if(o=u(c.length),l+o>h)throw TypeError(v);for(r=0;r<o;r++,l++)r in c&&s(d,l,c[r])}else{if(l>=h)throw TypeError(v);s(d,l++,c)}return d.length=l,d}})},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,c){try{return c?e(n(r)[0],r[1]):e(r)}catch(i){throw o(t),i}}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d066"),i=r("c430"),a=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),d=r("5135"),l=r("e8b5"),p=r("861d"),b=r("825a"),h=r("7b0b"),v=r("fc6a"),y=r("c04e"),g=r("5c6c"),m=r("7c73"),O=r("df75"),w=r("241c"),j=r("057f"),x=r("7418"),S=r("06cf"),P=r("9bf2"),A=r("d1e7"),k=r("9112"),C=r("6eeb"),E=r("5692"),L=r("f772"),q=r("d012"),I=r("90e3"),$=r("b622"),U=r("e538"),D=r("746f"),M=r("d44e"),N=r("69f3"),T=r("b727").forEach,J=L("hidden"),B="Symbol",F="prototype",_=$("toPrimitive"),H=N.set,Q=N.getterFor(B),V=Object[F],W=o.Symbol,Y=c("JSON","stringify"),z=S.f,G=P.f,K=j.f,R=A.f,X=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),rt=E("wks"),nt=o.QObject,ot=!nt||!nt[F]||!nt[F].findChild,ct=a&&f((function(){return 7!=m(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(V,e);n&&delete V[e],G(t,e,r),n&&t!==V&&G(V,e,n)}:G,it=function(t,e){var r=X[t]=m(W[F]);return H(r,{type:B,tag:t,description:e}),a||(r.description=e),r},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ut=function(t,e,r){t===V&&ut(Z,e,r),b(t);var n=y(e,!0);return b(r),d(X,n)?(r.enumerable?(d(t,J)&&t[J][n]&&(t[J][n]=!1),r=m(r,{enumerable:g(0,!1)})):(d(t,J)||G(t,J,g(1,{})),t[J][n]=!0),ct(t,n,r)):G(t,n,r)},st=function(t,e){b(t);var r=v(e),n=O(r).concat(bt(r));return T(n,(function(e){a&&!dt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},dt=function(t){var e=y(t,!0),r=R.call(this,e);return!(this===V&&d(X,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(X,e)||d(this,J)&&this[J][e])||r)},lt=function(t,e){var r=v(t),n=y(e,!0);if(r!==V||!d(X,n)||d(Z,n)){var o=z(r,n);return!o||!d(X,n)||d(r,J)&&r[J][n]||(o.enumerable=!0),o}},pt=function(t){var e=K(v(t)),r=[];return T(e,(function(t){d(X,t)||d(q,t)||r.push(t)})),r},bt=function(t){var e=t===V,r=K(e?Z:v(t)),n=[];return T(r,(function(t){!d(X,t)||e&&!d(V,t)||n.push(X[t])})),n};if(u||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===V&&r.call(Z,t),d(this,J)&&d(this[J],e)&&(this[J][e]=!1),ct(this,e,g(1,t))};return a&&ot&&ct(V,e,{configurable:!0,set:r}),it(e,t)},C(W[F],"toString",(function(){return Q(this).tag})),C(W,"withoutSetter",(function(t){return it(I(t),t)})),A.f=dt,P.f=ut,S.f=lt,w.f=j.f=pt,x.f=bt,U.f=function(t){return it($(t),t)},a&&(G(W[F],"description",{configurable:!0,get:function(){return Q(this).description}}),i||C(V,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:W}),T(O(rt),(function(t){D(t)})),n({target:B,stat:!0,forced:!u},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(h(t))}}),Y){var ht=!u||f((function(){var t=W();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(n=e,(p(e)||void 0!==t)&&!at(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,Y.apply(null,o)}})}W[F][_]||k(W[F],_,W[F].valueOf),M(W,B),q[J]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),c=r("1c7e"),i=!c((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,c=Function.prototype,i=c.toString,a=/^\s*function ([^ (]*)/,u="name";n&&!(u in c)&&o(c,u,{configurable:!0,get:function(){try{return i.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),c=r("7b0b"),i=r("50c4"),a=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,d=6==t,l=7==t,p=5==t||d;return function(b,h,v,y){for(var g,m,O=c(b),w=o(O),j=n(h,v,3),x=i(w.length),S=0,P=y||a,A=e?P(b,x):r||l?P(b,0):void 0;x>S;S++)if((p||S in w)&&(g=w[S],m=j(g,S,O),t))if(e)A[S]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:u.call(A,g)}else switch(t){case 4:return!1;case 7:u.call(A,g)}return d?-1:s||f?f:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),c=r("da84"),i=r("5135"),a=r("861d"),u=r("9bf2").f,s=r("e893"),f=c.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var d={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new f(t):void 0===t?f():f(t);return""===t&&(d[e]=!0),e};s(l,f);var p=l.prototype=f.prototype;p.constructor=l;var b=p.toString,h="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=b.call(t);if(i(d,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:l})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),c=r("e8b5"),i=r("23cb"),a=r("50c4"),u=r("fc6a"),s=r("8418"),f=r("b622"),d=r("1dde"),l=d("slice"),p=f("species"),b=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!l},{slice:function(t,e){var r,n,f,d=u(this),l=a(d.length),v=i(t,l),y=i(void 0===e?l:e,l);if(c(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?o(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(d,v,y);for(n=new(void 0===r?Array:r)(h(y-v,0)),f=0;v<y;v++,f++)v in d&&s(n,f,d[v]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-4a28be0a.13effad5.js.map