(this.webpackJsonpInstrHexBinDecConvertDecoder=this.webpackJsonpInstrHexBinDecConvertDecoder||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(36),a=n.n(i),o=(n(90),n(8)),c=n(14),l=n(16),u=n(31),d=n(33),f=n(32),b=(n(91),n(5)),j=(n(92),n(56),n(1)),h=function(e){var t=e.onChange,n=e.value;return Object(j.jsx)("input",{className:"textinput hex",type:"text",value:n,onChange:t})},m=function(e){var t=e.onChange,n=e.value;return Object(j.jsx)("input",{className:"textinput dec",type:"text",value:n,onChange:t})},p=function(e){var t=e.onChange,n=e.value;return Object(j.jsx)("input",{className:"textinput bin",type:"text",value:n,onChange:t})},v=function(e){return e.split("").reverse().join("")},g=function(e,t){return[Math.floor(e/t),e%t]},O=function(e,t,n,r){for(var s="",i="",a=0;a<e.length;a+=r){var o=e.substring(a,a+r),c=g(parseInt(s+o,t),n),l=Object(b.a)(c,2),u=l[0],d=l[1];0==i.length?i+=u.toString(t):i+=u.toString(t).padStart(o.length,"0"),s=d.toString(t)}return[i,parseInt(s,t).toString(n)]},x=function(e){for(var t="",n=0;n<e.length;n+=4){var r=e.substring(e.length-n-4,e.length-n);t+=parseInt(r,2).toString(16)}return v(t)},y=function(e){for(var t="",n=0;n<e.length;n+=1){var r=e.substring(n,n+1);t+=parseInt(r,16).toString(2).padStart(4,"0"),console.log(r,t)}return t},k=function(e){for(var t="";;){var n=O(e,10,2,10),r=Object(b.a)(n,2),s=r[0];if(t+=r[1],1==(e=s).length&&0===parseInt(e,10))break}return v(t)},I=function(e){for(var t="";;){var n=O(e,10,16,10),r=Object(b.a)(n,2),s=r[0];if(t+=r[1],1==(e=s).length&&0===parseInt(e,10))break}return v(t)},N=function(e){for(var t="";;){var n=O(e,2,10,40),r=Object(b.a)(n,2),s=r[0];if(t+=r[1],1==(e=s).length&&0===parseInt(e,2))break}return v(t)},S=function(e){for(var t="";;){var n=O(e,16,10,10),r=Object(b.a)(n,2),s=r[0];if(t+=r[1],1==(e=s).length&&0===parseInt(e,16))break}return v(t)},C=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(s&&(e=v(e)),t===n)return r?e.replace(/^0+/,""):e;if(2===t)switch(n){case 10:return r?N(e).replace(/^0+/,""):N(e);case 16:return r?x(e).replace(/^0+/,""):x(e);default:return""}if(16===t)switch(n){case 2:return r?y(e).replace(/^0+/,""):y(e);case 10:return r?S(e).replace(/^0+/,""):S(e);default:return""}if(10===t)switch(n){case 2:return r?k(e).replace(/^0+/,""):k(e);case 16:return r?I(e).replace(/^0+/,""):I(e);default:return""}return parseInt(e,t).toString(n)};var w=function(e){var t=e.convInput,n=e.setConvInput,s={2:128,10:39,16:32},i={2:function(e){return/^[0-1]+$/.test(e)},10:function(e){return/^[0-9]+$/.test(e)},16:function(e){return/^[a-fA-F0-9]+$/.test(e)}},a={2:"",10:"",16:""},c=Object(r.useState)({inputBase:void 0,inputcontent:"",isValidInput:!1,errMssg:a}),l=Object(b.a)(c,2),u=l[0],d=l[1],f=function(e,n,r,s){return console.log("[debug] convertNumber",u),void 0!==r&&e?t[s]:r===s?n:""},v=function(e){return function(t){var r=function(e,t){var r=s[t],a=i[t];if("string"===typeof e){if(0===(e=e.replace(/\s+/g,"").trim()).length)return n({2:"",10:"",16:""}),["","",!1];if(e.length>r)return a(e=e.substring(0,r))&&!isNaN(parseInt(e,t))?[e,"max length ".concat(r," is reached"),!0]:(n({2:"",10:"",16:""}),[e,"Invalid input",!1]);if(console.log("[debug] parseInt",e,t,isNaN(parseInt(e,t)),a(e)),a(e)&&!isNaN(parseInt(e,t))){var o={};return o[2]=C(e,t,2),o[10]=C(e,t,10),o[16]=C(e,t,16),n(o),[e,"",!0]}return n({2:"",10:"",16:""}),[e,"Invalid input",!1]}return["","non-string input",!1]}(t.target.value,e),c=Object(o.a)({},a);c[e]=r[1],d(Object(o.a)(Object(o.a)({},u),{},{inputBase:e,inputcontent:r[0],isValidInput:r[2],errMssg:c})),console.log("[debug] InputForm.js handle change: "+u.inputcontent,e)}};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{className:"input-form",children:Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(j.jsxs)("label",{className:"input-label",children:["HEX Input",Object(j.jsx)(h,{onChange:v(16),value:f(u.isValidInput,u.inputcontent,u.inputBase,16)}),Object(j.jsx)("div",{className:"input-err",children:u.errMssg[16]})]}),Object(j.jsxs)("label",{className:"input-label",children:["DEC Input",Object(j.jsx)(m,{onChange:v(10),value:f(u.isValidInput,u.inputcontent,u.inputBase,10)}),Object(j.jsx)("div",{className:"input-err",children:u.errMssg[10]})]}),Object(j.jsxs)("label",{className:"input-label",children:["BIN Input",Object(j.jsx)(p,{onChange:v(2),value:f(u.isValidInput,u.inputcontent,u.inputBase,2)}),Object(j.jsx)("div",{className:"input-err",children:u.errMssg[2]})]})]})})})},D=(n(94),n(64));var B=function(e){var t=e.columns,n=e.data,r=Object(D.useTable)({columns:t,data:n}),s=r.getTableProps,i=r.getTableBodyProps,a=r.headerGroups,c=r.rows,l=r.prepareRow;return Object(j.jsxs)("table",Object(o.a)(Object(o.a)({},s()),{},{style:{marginBottom:"3vh",textAlign:"center"},children:[Object(j.jsx)("thead",{style:{width:"15px"},children:a.map((function(e){return Object(j.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(j.jsxs)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:[" ",e.render("Header")," "]}))}))}))}))}),Object(j.jsx)("tbody",Object(o.a)(Object(o.a)({},i()),{},{children:c.map((function(e,t){return l(e),Object(j.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){if(void 0!==e.value){var t=void 0!==e.value&&"span"in e.value?e.value.span:0;return Object(j.jsx)("td",Object(o.a)(Object(o.a)({},e.getCellProps({colSpan:t})),{},{children:e.render("Cell")}))}return null}))}))}))}))]}))};function E(e){var t=e.colIndex,n=e.isAllowChange,r=e.divCol,s=e.setDivCol;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"division-symbol",style:{color:n?1===r[t]?"red":"white":"red"},onClick:n?function(){console.log("[debug] click change color",r[t]);var e={};e[t]=0===r[t]?1:0,s((function(t){return Object(o.a)(Object(o.a)({},t),e)}))}:void 0,children:"||"})})}var R=n(135),V=n(139),F=function(e){switch(e){case"16bit":return 16;case"32bit":return 32;case"64bit":return 64;case"128bit":return 128;default:return 0}},P=function(e){var t=e.displayBitform,n=e.setDisplayBitform,r=e.setPrevDBF,s=function(e){return e===t?"grey":"#D3D3D3"};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(V.a,{exclusive:!0,"aria-label":"text alignment",onChange:function(e,t){return function(e,t){n((function(e){return r(e),t}))}(0,t)},children:[Object(j.jsx)(R.a,{value:"16bit",style:{background:s("16bit")},children:"16"}),Object(j.jsx)(R.a,{value:"32bit",style:{background:s("32bit")},children:"32"}),Object(j.jsx)(R.a,{value:"64bit",style:{background:s("64bit")},children:"64"}),Object(j.jsx)(R.a,{value:"128bit",style:{background:s("128bit")},children:"128"})]})})},M=n(61),H=Object.freeze({bitrnginfo:0,name:1,default:2,hexform:3,decform:4,bitform:5,rowlen:6}),_=16,A=function(e,t){return 0!==e&&e!==t};var T=function(e){var t=e.convInput,n=e.selItem,i=Object(r.useState)(function(e){for(var t={},n=0;n<=F(e);n++)t[n]=A(n,F(e))?0:1;return t}("128bit")),a=Object(b.a)(i,2),c=a[0],l=a[1],u=Object(r.useState)("16bit"),d=Object(b.a)(u,2),f=d[0],h=d[1],m=Object(r.useState)(""),p=Object(b.a)(m,2),g=p[0],O=p[1],x=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},s=0,i=Object.entries(e);s<i.length;s++){var a=Object(b.a)(i[s],2),o=a[0],c=a[1];r[o]=A(parseInt(o),F(f))?t?0:A(parseInt(o),F(g))?c:0:1}for(var l=0,u=Object.entries(n.fields);l<u.length;l++){var d=Object(b.a)(u[l],2),j=(d[0],d[1]),h=j.position[0],m=j.position[1];m in e&&(r[m]=1),parseInt(h)+1 in e&&(r[parseInt(h)+1]=1),console.log("sel pos",j,h,m,r,h+1 in e,m in e)}return r};Object(r.useEffect)((function(){var e=x(c);console.log("[debug] !!!updateDivCol <displayBitform>",e),l(Object(o.a)({},e))}),[f]),Object(r.useEffect)((function(){var e=x(c,!0);console.log("[debug] !!!updateDivCol <selItem>",e),l(Object(o.a)({},e))}),[n]);var y=function(e){return{Header:Object(j.jsx)(E,{colIndex:e,isAllowChange:A(e,F(f)),divCol:c,setDivCol:l}),accessor:"div"+e.toString(),Cell:function(e){return void 0!==e.cell.value?Object(j.jsx)("div",{className:"division-symbol",style:{color:"white"},children:void 0!==e.cell.value&&"strform"in e.cell.value?e.cell.value.strform:""}):null}}},k=function(e,t){for(var n=[],r=!0,s=e,i=e;s<t;){if(r){var a=y(i);n.push(a),i++,r=!1}else n.push({Header:Object(j.jsx)("div",{style:{textAlign:"center",fontSize:"medium",color:"#FEC20C",width:"35px",marginLeft:"5px",marginRight:"5px"},children:s.toString()}),accessor:"col"+s.toString(),Cell:function(e){return void 0!==e.cell.value?Object(j.jsx)("div",{style:{color:void 0!==e.cell.value&&"color"in e.cell.value?e.cell.value.color:"white",fontSize:"large"},children:void 0!==e.cell.value&&"strform"in e.cell.value?e.cell.value.strform:""}):null}}),s++,r=!0;if(s===t){var o=y(i);n.push(o)}}return n.reverse(),n},I=s.a.useMemo((function(){return function(){for(var e=function(e){return 2*e-1},r=function(e,t){return{f:t,t:e-1}},s=function(e){return parseInt(Math.max(0,(e-1)/_))},i=function(){for(var e={},t=0;t<F(f)/_;t++)e[t]=1;return e},a={},o={},l=0,u=Object.entries(n.fields);l<u.length;l++){var d=Object(b.a)(u[l],2),j=d[0],h=d[1],m=h.position[1],p=h.position[0];if(m in c&&(a[m]=j),h.default.length>0)for(var g=1,O=m;O<=p;O++)h.default.length-g>=0&&(o[O]=h.default[h.default.length-g]),g++}var x=[],y=v(t[2]);console.log("[debug] convInput[2]???",t[2],y);for(var k=0;k<H.rowlen;k++){var I={},N=void 0,S=i();I["div"+(0).toString()]={strform:"||",span:1};for(var w=0;w<=F(f);w++)switch(k){case H.bitrnginfo:case H.name:case H.hexform:case H.decform:if(1===c[w]){if(void 0!==N){var D=s(w)===s(N)?w-N:w-_*s(w),B="",E=r(w,N),R="string"===typeof y&&y.length>0?y.substring(E.f,E.t+1):"";switch(console.log("[debug] bitstrform???",R,E),k){case H.bitrnginfo:B="[".concat(E.t,":").concat(E.f,"] (").concat(1+E.t-E.f,")");break;case H.name:B=E.f in a?a[E.f]:"?";break;case H.hexform:B=R.length>0?"0x"+C(R,2,16,!0,!0):"";break;case H.decform:B=R.length>0?C(R,2,10,!0,!0):""}console.log("[debug] bitrnginfo col"+(w-1).toString(),"span",D,"prev_i",N,"adj span",e(D)),I["col"+(w-1).toString()]={strform:B,span:e(D)},I["div"+w.toString()]={strform:"||",span:1},S[s(w)]+=e(D)+1}N=w}break;case H.bitform:if(void 0!==N){var V=y.substring(w-1,w);I["col"+(w-1).toString()]={strform:V,span:1},I["div"+w.toString()]={strform:1===c[w]?"||":"",span:1},S[s(w)]+=2}1===c[w]&&(N=w);break;case H.default:if(void 0!==N){var P=w-1 in o?o[w-1]:"",M=y.substring(w-1,w);I["col"+(w-1).toString()]={strform:P.length>0?'"'+P+'"':P,span:1,color:M==P?"white":"red"},I["div"+w.toString()]={strform:1===c[w]?"||":"",span:1},S[s(w)]+=e(1)+1}1===c[w]&&(N=w)}for(var A=0;A<F(f)/_;A++)S[A]<33&&(I["div"+((A+1)*_).toString()]={strform:"...",span:33-S[A]},S[A]+=33-S[A]),S[A]>33&&console.error("err: larger than max span",A,S[A],33);console.log("[debug] rowCumSpan",S),console.log("[debug] tempData",I,c),x.push(I)}return x}()}),[c,t]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(P,{className:"display-togglebtns",displayBitform:f,setDisplayBitform:h,setPrevDBF:O})}),Object(j.jsx)(M.a,{className:"bg-table-view",style:{height:"40vh",marginTop:"3vh"},persistentScrollbar:!0,children:function(){for(var e=[],t=0;t<F(f)/_;t++)e.push(Object(j.jsx)(B,{className:"display-bgtable",columns:k(0+t*_,_+t*_),data:I},t));return e}()})]})},L=n(15),W=n(27),z=(n(112),n(10)),J=n(136),X=n(138),$=function(e){if(!("key"in e))throw"err: some instr has no key";if(!Number.isInteger(e.key))throw"err: some instr's key is not integer";if(-1===e.key)throw"err: key -1 is reserved";if(!("name"in e))throw"err: some instr has no name";if("string"!==typeof e.name)throw"err: some instr's name is not string";if(!("strformat"in e))throw"err: some instr has no strformat";if("string"!==typeof e.strformat)throw"err: some instr's strformat is not string";if(!("fields"in e))throw"err: some instr has no fields";if("object"!==typeof e.fields)throw"err: some instr's fields is not dict";for(var t=new Set,n=0,r=Object.entries(e.fields);n<r.length;n++){var s=Object(b.a)(r[n],2),i=s[0],a=s[1];if("string"!==typeof i)throw"err: some instr's field's key is not string";if(!("default"in a))throw"err: some instr's field has no default";if("string"!==typeof a.default)throw"err: some instr's field's default is not string";if(!("position"in a))throw"err: some instr's field has no position";if(!Array.isArray(a.position))throw"err: some instr's field's position is not array";if(2!==a.position.length)throw"err: some instr's field's position does not have length of 2";var o=a.position[0],c=a.position[1];if(!Number.isInteger(o))throw"err: some instr's field's position tailPos ".concat(o," is not integer");if(!Number.isInteger(c))throw"err: some instr's field's position frontPos ".concat(c," is not integer");if(o<0)throw"err: some instr's field's position tailPos ".concat(o," is negative");if(c<0)throw"err: some instr's field's position frontPos ".concat(c," is negative");if(!(o>=c))throw"err: some instr's field's position tail pos ".concat(o," is smaller than ").concat(c);if(a.default.length>0&&o-c+1!==a.default.length)throw"err: some instr's field's position length does not match default's length";if(o===c){if(t.has(o))throw"err: repeated pos found: ".concat(o);t.add(o)}else for(var l=c;l<=o;l++){if(t.has(l))throw"err: repeated pos found: ".concat(l);t.add(l)}}return!0},G=function(e){var t=[];t.push({key:-1,name:"unnamed",strformat:"",match:[],fields:{}});var n=function(e){var t=new Set;console.log(e,e.length);var n,r=Object(W.a)(e);try{for(r.s();!(n=r.n()).done;){var s=n.value;if($(s),t.has(s.key))throw"err: repeated key found in instr list";t.add(s.key)}}catch(i){r.e(i)}finally{r.f()}return!0}(e.instr_list);console.log("[debug] instr list checkRet",n);var r,s=Object(W.a)(e.instr_list);try{for(s.s();!(r=s.n()).done;){var i=r.value;t.push(i)}}catch(a){s.e(a)}finally{s.f()}return t},U=n(80),q=(n(113),function(e){var t=e.selItem,n=e.setSelItem,s=e.instrList,i=e.setInstrList,a=Object(r.useState)(0),o=Object(b.a)(a,2),c=o[0],l=o[1],u=Object(r.useState)(function(e){for(var t=[],n=0,r=Object.entries(e);n<r.length;n++){var s=Object(b.a)(r[n],2),i=s[0],a=s[1];t.push({key:i,val:a})}t=t.sort((function(e,t){return parseInt(e.val.position[1])<parseInt(t.val.position[1])?-1:parseInt(e.val.position[1])>parseInt(t.val.position[1])?1:0}));for(var o=0;o<t.length;o++)t[o].idx=o;return t}(t.fields)),d=Object(b.a)(u,2),f=d[0],h=d[1],m=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("label",{className:"edit-subinput",children:" field name "}),Object(j.jsx)("input",{type:"text",name:"field_key."+e.idx,defaultValue:e.key}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("label",{className:"edit-subinput",children:" default "}),Object(j.jsx)("input",{type:"text",name:"fields."+e.idx+".default",defaultValue:e.val.default}),Object(j.jsx)("label",{className:"edit-subinput",children:" position "}),Object(j.jsx)("input",{type:"text",name:"fields."+e.idx+".position",defaultValue:e.val.position}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}})]},e.idx)},p=function(){return Object(j.jsx)(z.a,{style:{height:1,backgroundColor:"#CED0CE"}})};return Object(j.jsx)(U.a,{trigger:Object(j.jsx)("button",{className:"instr-change-button edit",children:" edit "}),modal:!0,nested:!0,children:function(e){return Object(j.jsxs)("div",{className:"modal",children:[Object(j.jsx)("button",{className:"close",type:"button",onClick:e,children:"\xd7"}),Object(j.jsx)("div",{className:"header",children:" Edit Instr "}),Object(j.jsxs)("form",{className:"edit-form",onSubmit:function(r){(function(e,t){e.preventDefault();var r=new FormData(e.target),a={};r.forEach((function(e,t){return a[t]=e})),console.log("[debug] formDataObj",a);var o={key:-1,name:"unnamed",strformat:"",match:[],fields:{}};o.key=parseInt(t);for(var c={},l=0,u=Object.entries(a);l<u.length;l++){var d=Object(b.a)(u[l],2),f=d[0],j=d[1];f.startsWith("field_key.")&&(c[f.replace("field_key.","")]=j)}for(var h=0,m=Object.entries(a);h<m.length;h++){var p=Object(b.a)(m[h],2),v=p[0],g=p[1];if(v.startsWith("fields."))if(v.endsWith(".default")){var O=c[v.replace("fields.","").replace(".default","")];O in o.fields||(o.fields[O]={}),o.fields[O].default=g}else{var x=c[v.replace("fields.","").replace(".position","")];console.log("ckckck",x,v,g),x in o.fields||(o.fields[x]={}),o.fields[x].position=g.split(",").map((function(e){return parseInt(e)}))}else o[v]="match"===v?g.split(","):g}console.log("[debug] selItem",o);for(var y=-1,k=0;k<s.length;k++)if(s[k].key===o.key){y=k;break}try{$(o),n(o),i((function(e){return e[y]=o,e}))}catch(I){return alert(I),!1}return!0})(r,t.key)&&e()},children:[Object(j.jsx)("label",{className:"edit-input",children:"Name"}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("input",{type:"text",name:"name",defaultValue:t.name}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("label",{className:"edit-input",children:"Str Format"}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("input",{type:"text",name:"strformat",defaultValue:t.strformat}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("label",{className:"edit-input",children:"Match"}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("input",{type:"text",name:"match",defaultValue:t.match}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("label",{className:"edit-input",children:"Fields"}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"button add",onClick:function(e){return function(e){e.preventDefault(),console.log("addfield");var t,n={key:"?",val:{default:"",position:[0,0]}},r=[],s=Object(W.a)(f);try{for(s.s();!(t=s.n()).done;){var i=t.value;r.push(parseInt(i.idx))}}catch(a){s.e(a)}finally{s.f()}n.idx=Math.max.apply(Math,r)+1,console.log("newfield",n),h((function(e){return[n].concat(Object(L.a)(e))}))}(e)},children:"add"}),Object(j.jsx)("button",{className:"button del",onClick:function(e){return function(e){e.preventDefault(),console.log("delfield");var t=c;h((function(e){return e.filter((function(e){return e.idx!==t}))}))}(e)},children:"del"})]}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)(M.a,{className:"field-list-view",style:{height:"30vh"},persistentScrollbar:!0,children:Object(j.jsx)(J.a,{className:"field-list",data:f,renderItem:function(e){var t=e.item;return Object(j.jsx)(X.a,{onPress:function(e){return function(e,t){e.preventDefault(),l(t.idx)}(e,t)},style:{backgroundColor:t.idx===c?"salmon":""},children:m(t)},t.key)},numColumns:1,keyExtractor:function(e){return e.idx},ItemSeparatorComponent:p})}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("div",{className:"blank",style:{margin:"1vh"}}),Object(j.jsx)("div",{className:"actions",children:Object(j.jsx)("button",{className:"button save",type:"submit",children:"Save"})})]})]})}})});var K=function(e){var t=e.selItem,n=e.setSelItem,s=e.convInput,i=Object(r.useState)(1),a=Object(b.a)(i,2),c=a[0],l=a[1],u=Object(r.useState)(function(){var e=[];return e.push({key:-1,name:"unnamed",strformat:"",match:[],fields:{}}),e.push({key:0,name:"LDR",strformat:"LDR <Wt>, [<Xn|SP>, (<Wm>|<Xm>){, <extend> {<amount>}}]",match:["31","opc","11","10"],fields:{31:{default:"1",position:[31,31]},size:{default:"0",position:[30,30]},opc:{default:"111000011",position:[29,21]},Rm:{default:"",position:[20,16]},option:{default:"",position:[15,13]},S:{default:"",position:[12,12]},11:{default:"1",position:[11,11]},10:{default:"0",position:[10,10]},Rn:{default:"",position:[9,5]},Rt:{default:"",position:[4,0]}}}),e.push({key:1,name:"STR",strformat:"STR <Wt>, [<Xn|SP>], #<simm>",match:["31","opc","11","10"],fields:{31:{default:"1",position:[31,31]},size:{default:"0",position:[30,30]},opc:{default:"111000000",position:[29,21]},imm9:{default:"",position:[20,12]},11:{default:"0",position:[11,11]},10:{default:"1",position:[10,10]},Rn:{default:"",position:[9,5]},Rt:{default:"",position:[4,0]}}}),e}()),d=Object(b.a)(u,2),f=d[0],h=d[1],m=Object(r.useRef)(),p=Object(r.useState)(""),g=Object(b.a)(p,2),O=g[0],x=g[1],y=function(e,t){e.preventDefault(),function(e){console.log("[debug] select item",e),n(e)}(t)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{alignContent:"center",display:"block",margin:"auto",borderStyle:"dotted",color:"white",marginBottom:"3vh",padding:"5px"},children:Object(j.jsx)("input",{className:"jsfile-input",id:"input_json",type:"file",ref:m,onChange:function(e){x(e.target.files[0])}})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"jsfile-button load",onClick:function(){return function(){var e=new FileReader;e.readAsText(O,"UTF-8"),e.onload=function(e){var t=e.target.result,n=[{key:-1,name:"unnamed",strformat:"",match:[],fields:{}}];try{var r=JSON.parse(t);n=G(r)}catch(e){alert(e)}h(n)}}()},children:"load"}),Object(j.jsx)("button",{className:"jsfile-button export",onClick:function(){return function(){var e="data:text/json;chatset=utf-8,".concat(encodeURIComponent(JSON.stringify(function(e){return e.shift(),{instr_list:e}}(f),null,2))),t=document.createElement("a");t.href=e,t.download="instr_list.json",t.click()}()},children:"export"})]}),Object(j.jsx)("div",{children:Object(j.jsx)("h2",{className:"sel-instr",style:{display:"inline-block"},children:"name"in t?t.name:"unnamed"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"instr-change-button add",style:{display:"inline-block"},onClick:function(){return function(){l((function(e){return e+1}));var e,n=Object(o.a)({},t),r=[],s=Object(W.a)(f);try{for(s.s();!(e=s.n()).done;){var i=e.value;r.push(parseInt(i.key))}}catch(a){s.e(a)}finally{s.f()}n.key=Math.max.apply(Math,r)+1,n.name=n.name+"_"+c.toString(),h((function(e){return[].concat(Object(L.a)(e),[n])}))}()},children:"add"}),-1!==t.key?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(q,{text:"edit",selItem:t,setSelItem:n,instrList:f,setInstrList:h,style:{display:"inline-block"}}),Object(j.jsx)("button",{className:"instr-change-button delete",style:{display:"inline-block"},onClick:function(){return function(){var e=t.key;-1===e&&alert("err: cannot delete default unnamed instr"),h((function(t){return t.filter((function(t){return t.key!==e}))})),n({key:-1,name:"unnamed",strformat:"",match:[],fields:{}})}()},children:"delete"})]}):Object(j.jsx)("div",{})]}),Object(j.jsx)(M.a,{className:"instr-list-view",style:{height:"30vh"},persistentScrollbar:!0,children:Object(j.jsx)(J.a,{className:"instr-list",data:f,renderItem:function(e){var n=e.item;return Object(j.jsx)(X.a,{onPress:function(e){return y(e,n)},style:{backgroundColor:n.key===t.key?"salmon":""},children:Object(j.jsxs)("div",{className:"instr-item",children:["".concat(n.name)," ",Object(j.jsx)("br",{}),"".concat(n.strformat)]})},n.key)},numColumns:1,keyExtractor:function(e){return e.key},ItemSeparatorComponent:function(){return Object(j.jsx)(z.a,{style:{height:1,backgroundColor:"#CED0CE"}})}})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"auto-match-button",onClick:function(){return function(){var e,r=-1,i=Object(W.a)(f.entries());try{for(i.s();!(e=i.n()).done;){for(var a=Object(b.a)(e.value,2),o=a[0],c=a[1],l=!1,u=0,d=Object.entries(c.fields);u<d.length;u++){var j=Object(b.a)(d[u],2),h=j[0],m=j[1],p=m.default,g=m.position[0],O=m.position[1];if(console.log("ckck key",h,c.match,p.length>0&&h in c.match),p.length>0&&c.match.includes(h)){if(console.log("[debug] automatch compare",h,v(v(s[2]).substring(O,g+1)),p,v(v(s[2]).substring(O,g+1))===p,l),v(v(s[2]).substring(O,g+1))!==p){l=!1;break}l=!0}}if(!0===l){r=o;break}}}catch(x){i.e(x)}finally{i.f()}console.log("[debug] automatch selIndex",r),-1===r&&alert("warning: no match found"),n(-1===r?t:f[r])}()},children:"auto-match"}),Object(j.jsx)("button",{className:"clear-button",onClick:function(){n(f[0])},children:"clear"})]})]})},Q=n(41),Y=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).render=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App-child",children:[Object(j.jsxs)("header",{className:"App-header",children:["Instruction Hex-Bin-Dec Convert & Decoder <",Q.a.VERSION,">"]}),Object(j.jsxs)("div",{className:"info-section",children:[Object(j.jsx)("p",{style:{marginBottom:"1vh"},children:"developer's email: keneoneth18@gmail.com "}),Object(j.jsxs)("p",{style:{marginBottom:"1vh"},children:["instructions: ",Object(j.jsx)("a",{href:"https://github.com/keneoneth/InstrHexBinDecConvertDecoder-Release/wiki",style:{color:"wheat"},children:"https://github.com/keneoneth/InstrHexBinDecConvertDecoder-Release/wiki"})," "]}),Object(j.jsxs)("p",{children:["bug report: ",Object(j.jsx)("a",{href:"https://github.com/keneoneth/InstrHexBinDecConvertDecoder-Release/issues",style:{color:"wheat"},children:"https://github.com/keneoneth/InstrHexBinDecConvertDecoder-Release/issues"})," "]})]}),Object(j.jsx)(w,{className:"input-form",convInput:r.state.convInput,setConvInput:r.setConvInput}),Object(j.jsx)(T,{className:"display-board",convInput:r.state.convInput,selItem:r.state.selItem})]}),Object(j.jsx)("div",{className:"App-child",children:Object(j.jsx)(K,{className:"instr-panel",convInput:r.state.convInput,selItem:r.state.selItem,setSelItem:r.setSelItem})})]})},r.setConvInput=r.setConvInput.bind(Object(u.a)(r)),r.setSelItem=r.setSelItem.bind(Object(u.a)(r)),r.state={convInput:{2:"",10:"",16:""},selItem:{key:-1,name:"unnamed",strformat:"",match:[],fields:{}}},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),document.title="Instruction Hex-Bin-Dec Convert & Decoder"}},{key:"setConvInput",value:function(e){this.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{convInput:e})}))}},{key:"setSelItem",value:function(e){this.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{selItem:e})}))}}]),n}(s.a.Component);console.log("env.NODE_ENV ",Q.a.NODE_ENV),console.log("env.VERSION ",Q.a.VERSION),"production"===Q.a.NODE_ENV&&(console.log=function(){},console.error=function(){},console.debug=function(){}),a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))},56:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.a756eaa2.chunk.js.map