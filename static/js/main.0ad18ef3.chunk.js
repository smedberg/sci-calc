(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,r){"use strict";function n(t,e,r,a){this.message=t,this.expected=e,this.found=r,this.location=a,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,n)}!function(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}(n,Error),n.buildMessage=function(t,e){var r={literal:function(t){return'"'+a(t.text)+'"'},class:function(t){var e,r="";for(e=0;e<t.parts.length;e++)r+=t.parts[e]instanceof Array?c(t.parts[e][0])+"-"+c(t.parts[e][1]):c(t.parts[e]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function a(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function c(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}return"Expected "+function(t){var e,n,a,c=new Array(t.length);for(e=0;e<t.length;e++)c[e]=(a=t[e],r[a.type](a));if(c.sort(),c.length>0){for(e=1,n=1;e<c.length;e++)c[e-1]!==c[e]&&(c[n]=c[e],n++);c.length=n}switch(c.length){case 1:return c[0];case 2:return c[0]+" or "+c[1];default:return c.slice(0,-1).join(", ")+", or "+c[c.length-1]}}(t)+" but "+function(t){return t?'"'+a(t)+'"':"end of input"}(e)+" found."},t.exports={SyntaxError:n,parse:function(t,e){e=void 0!==e?e:{};var r,a={},c={Expression:Et},s=Et,u="+",o=At("+",!1),i="-",l=At("-",!1),h=function(t,e){return e.reduce(function(t,e){var r=t[0],n=e[3][0],a=t[1];console.log("Handling addition, assuming that type ",t[1]," matches type ",e[3][1]);var c=a;return a==xt&&(c=e[3][1]),"+"===e[1]?[r+n,c]:"-"===e[1]?[r-n,c]:void 0},t)},f="*",p=At("*",!1),d="/",A=At("/",!1),m=function(t,e){return e.reduce(function(t,e){var r=t[0],n=e[3][0],a=t[1],c=e[3][1];return"*"===e[1]?[r*n,a==xt?c:c==xt?a:a+"\u22c5("+c+")"]:"/"===e[1]?[r/n,a==xt?"1/("+c+")":c==xt?a:"("+a+")/("+c+")"]:void 0},t)},g=gt("grouped"),v="(",b=At("(",!1),C=")",y=At(")",!1),E=function(t){return t},M=gt("unary function"),O=/^[a-z]/,j=mt([["a","z"]],!1,!1),S=/^[a-z0-9]/,x=mt([["a","z"],["0","9"]],!1,!1),w=function(t,e,r){var n=t[0]+t[1].join(""),a=e[0];switch(n){case"sin":return[Math.sin(a),xt];case"cos":return[Math.cos(a),xt];case"tan":return[Math.tan(a),xt];case"abs":return[Math.abs(a),xt];case"acos":return[Math.acos(a),xt];case"acosh":return[Math.acosh(a),xt];case"asin":return[Math.asin(a),xt];case"asinh":return[Math.asinh(a),xt];case"atan":return[Math.atan(a),xt];case"atanh":return[Math.atanh(a),xt];case"cbrt":return[Math.cbrt(a),xt];case"ceil":return[Math.ceil(a),xt];case"clz32":return[Math.clz32(a),xt];case"cos":return[Math.cos(a),xt];case"cosh":return[Math.cosh(a),xt];case"exp":return[Math.exp(a),xt];case"expm1":return[Math.expm1(a),xt];case"floor":return[Math.floor(a),xt];case"fround":return[Math.fround(a),xt];case"log":return[Math.log(a),xt];case"log1p":return[Math.log1p(a),xt];case"log10":return[Math.log10(a),xt];case"log2":return[Math.log2(a),xt];case"round":return[Math.round(a),xt];case"sin":return[Math.sin(a),xt];case"sinh":return[Math.sinh(a),xt];case"sqrt":return[Math.sqrt(a),xt];case"tan":return[Math.tan(a),xt];case"tanh":return[Math.tanh(a),xt];case"trunc":return[Math.trunc(a),xt];default:dt("unrecognized unary function '"+n+"'")}},R=gt("constant"),k=/^[A-Za-z]/,N=mt([["A","Z"],["a","z"]],!1,!1),F=function(t){if(void 0==window.SCIPARSER_CONSTANTS)dt("predefined constant");else{var e=t.join("");if(window.SCIPARSER_CONSTANTS.has(e))return window.SCIPARSER_CONSTANTS.get(e);dt("predefined constant")}},T=gt("typed number"),z=/^[ \t\n\r]/,I=mt([" ","\t","\n","\r"],!1,!1),P=/^[a-zA-Z]/,J=mt([["a","z"],["A","Z"]],!1,!1),V=/^[a-zA-Z\/0-9\-\^]/,Z=mt([["a","z"],["A","Z"],"/",["0","9"],"-","^"],!1,!1),_=function(t,e){return[t,e[0]+e[1].join("")]},B=gt("untyped number"),D=function(t){return[t,xt]},L=gt("number"),q=gt("integer"),K=/^[\-+]/,G=mt(["-","+"],!1,!1),H=/^[0-9]/,U=mt([["0","9"]],!1,!1),W=function(){return parseInt(pt(),10)},Q=gt("float"),X=".",Y=At(".",!1),$=function(){return parseFloat(pt(),10)},tt=gt("scientific notation"),et="e",rt=At("e",!1),nt=function(){var t=/([-+]?[0-9]+(.[0-9]+)?)[eE]([-+]?[0-9]+)/.exec(pt());return parseFloat(t[1],10)*Math.pow(10,parseInt(t[3]))},at=gt("whitespace"),ct=/^[ \t]/,st=mt([" ","\t"],!1,!1),ut=0,ot=0,it=[{line:1,column:1}],lt=0,ht=[],ft=0;if("startRule"in e){if(!(e.startRule in c))throw new Error("Can't start parsing from rule \""+e.startRule+'".');s=c[e.startRule]}function pt(){return t.substring(ot,ut)}function dt(e,r){throw r=void 0!==r?r:bt(ot,ut),yt([gt(e)],t.substring(ot,ut),r)}function At(t,e){return{type:"literal",text:t,ignoreCase:e}}function mt(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function gt(t){return{type:"other",description:t}}function vt(e){var r,n=it[e];if(n)return n;for(r=e-1;!it[r];)r--;for(n={line:(n=it[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return it[e]=n,n}function bt(t,e){var r=vt(t),n=vt(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function Ct(t){ut<lt||(ut>lt&&(lt=ut,ht=[]),ht.push(t))}function yt(t,e,r){return new n(n.buildMessage(t,e),t,e,r)}function Et(){var e,r,n,c,s,f,p,d;if(e=ut,(r=Mt())!==a){for(n=[],c=ut,(s=St())!==a?(43===t.charCodeAt(ut)?(f=u,ut++):(f=a,0===ft&&Ct(o)),f===a&&(45===t.charCodeAt(ut)?(f=i,ut++):(f=a,0===ft&&Ct(l))),f!==a&&(p=St())!==a&&(d=Mt())!==a?c=s=[s,f,p,d]:(ut=c,c=a)):(ut=c,c=a);c!==a;)n.push(c),c=ut,(s=St())!==a?(43===t.charCodeAt(ut)?(f=u,ut++):(f=a,0===ft&&Ct(o)),f===a&&(45===t.charCodeAt(ut)?(f=i,ut++):(f=a,0===ft&&Ct(l))),f!==a&&(p=St())!==a&&(d=Mt())!==a?c=s=[s,f,p,d]:(ut=c,c=a)):(ut=c,c=a);n!==a?(ot=e,e=r=h(r,n)):(ut=e,e=a)}else ut=e,e=a;return e}function Mt(){var e,r,n,c,s,u,o,i;if(e=ut,(r=Ot())!==a){for(n=[],c=ut,(s=St())!==a?(42===t.charCodeAt(ut)?(u=f,ut++):(u=a,0===ft&&Ct(p)),u===a&&(47===t.charCodeAt(ut)?(u=d,ut++):(u=a,0===ft&&Ct(A))),u!==a&&(o=St())!==a&&(i=Ot())!==a?c=s=[s,u,o,i]:(ut=c,c=a)):(ut=c,c=a);c!==a;)n.push(c),c=ut,(s=St())!==a?(42===t.charCodeAt(ut)?(u=f,ut++):(u=a,0===ft&&Ct(p)),u===a&&(47===t.charCodeAt(ut)?(u=d,ut++):(u=a,0===ft&&Ct(A))),u!==a&&(o=St())!==a&&(i=Ot())!==a?c=s=[s,u,o,i]:(ut=c,c=a)):(ut=c,c=a);n!==a?(ot=e,e=r=m(r,n)):(ut=e,e=a)}else ut=e,e=a;return e}function Ot(){var e;return(e=function(){var e,r,n,c,s,u,o,i,l;if(ft++,e=ut,r=ut,O.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=a,0===ft&&Ct(j)),n!==a){if(c=[],S.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(x)),s!==a)for(;s!==a;)c.push(s),S.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(x));else c=a;c!==a?r=n=[n,c]:(ut=r,r=a)}else ut=r,r=a;return r!==a&&(n=St())!==a?(40===t.charCodeAt(ut)?(c=v,ut++):(c=a,0===ft&&Ct(b)),c!==a&&(s=St())!==a&&(u=Et())!==a?(o=ut,(i=St())!==a?(41===t.charCodeAt(ut)?(l=C,ut++):(l=a,0===ft&&Ct(y)),l!==a?o=i=[i,l]:(ut=o,o=a)):(ut=o,o=a),o!==a?(ot=e,r=w(r,u,o),e=r):(ut=e,e=a)):(ut=e,e=a)):(ut=e,e=a),ft--,e===a&&(r=a,0===ft&&Ct(M)),e}())===a&&(e=function(){var e,r,n,c;return ft++,e=ut,40===t.charCodeAt(ut)?(r=v,ut++):(r=a,0===ft&&Ct(b)),r!==a&&St()!==a&&(n=Et())!==a&&St()!==a?(41===t.charCodeAt(ut)?(c=C,ut++):(c=a,0===ft&&Ct(y)),c!==a?(ot=e,r=E(n),e=r):(ut=e,e=a)):(ut=e,e=a),ft--,e===a&&(r=a,0===ft&&Ct(g)),e}())===a&&(e=function(){var e,r,n,c,s,u,o;if(ft++,e=ut,(r=jt())!==a){if(n=[],z.test(t.charAt(ut))?(c=t.charAt(ut),ut++):(c=a,0===ft&&Ct(I)),c!==a)for(;c!==a;)n.push(c),z.test(t.charAt(ut))?(c=t.charAt(ut),ut++):(c=a,0===ft&&Ct(I));else n=a;if(n!==a){if(c=ut,P.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(J)),s!==a){for(u=[],V.test(t.charAt(ut))?(o=t.charAt(ut),ut++):(o=a,0===ft&&Ct(Z));o!==a;)u.push(o),V.test(t.charAt(ut))?(o=t.charAt(ut),ut++):(o=a,0===ft&&Ct(Z));u!==a?c=s=[s,u]:(ut=c,c=a)}else ut=c,c=a;c!==a?(ot=e,r=_(r,c),e=r):(ut=e,e=a)}else ut=e,e=a}else ut=e,e=a;return ft--,e===a&&(r=a,0===ft&&Ct(T)),e}())===a&&(e=function(){var t,e;return ft++,t=ut,(e=jt())!==a&&(ot=t,e=D(e)),ft--,(t=e)===a&&(e=a,0===ft&&Ct(B)),t}())===a&&(e=function(){var e,r,n,c;if(ft++,e=ut,(r=St())!==a){if(n=[],k.test(t.charAt(ut))?(c=t.charAt(ut),ut++):(c=a,0===ft&&Ct(N)),c!==a)for(;c!==a;)n.push(c),k.test(t.charAt(ut))?(c=t.charAt(ut),ut++):(c=a,0===ft&&Ct(N));else n=a;n!==a?(ot=e,r=F(n),e=r):(ut=e,e=a)}else ut=e,e=a;return ft--,e===a&&(r=a,0===ft&&Ct(R)),e}()),e}function jt(){var e;return ft++,(e=function(){var e,r,n,c,s,u,o,i,l;if(ft++,e=ut,(r=St())!==a)if(K.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=a,0===ft&&Ct(G)),n===a&&(n=null),n!==a){if(c=[],H.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(U)),s!==a)for(;s!==a;)c.push(s),H.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(U));else c=a;if(c!==a){if(s=ut,46===t.charCodeAt(ut)?(u=X,ut++):(u=a,0===ft&&Ct(Y)),u!==a){for(o=[],H.test(t.charAt(ut))?(i=t.charAt(ut),ut++):(i=a,0===ft&&Ct(U));i!==a;)o.push(i),H.test(t.charAt(ut))?(i=t.charAt(ut),ut++):(i=a,0===ft&&Ct(U));o!==a?s=u=[u,o]:(ut=s,s=a)}else ut=s,s=a;if(s===a&&(s=null),s!==a)if(101===t.charCodeAt(ut)?(u=et,ut++):(u=a,0===ft&&Ct(rt)),u!==a)if(K.test(t.charAt(ut))?(o=t.charAt(ut),ut++):(o=a,0===ft&&Ct(G)),o===a&&(o=null),o!==a){if(i=[],H.test(t.charAt(ut))?(l=t.charAt(ut),ut++):(l=a,0===ft&&Ct(U)),l!==a)for(;l!==a;)i.push(l),H.test(t.charAt(ut))?(l=t.charAt(ut),ut++):(l=a,0===ft&&Ct(U));else i=a;i!==a?(ot=e,r=nt(),e=r):(ut=e,e=a)}else ut=e,e=a;else ut=e,e=a;else ut=e,e=a}else ut=e,e=a}else ut=e,e=a;else ut=e,e=a;return ft--,e===a&&(r=a,0===ft&&Ct(tt)),e}())===a&&(e=function(){var e,r,n,c,s,u,o;if(ft++,e=ut,(r=St())!==a)if(K.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=a,0===ft&&Ct(G)),n===a&&(n=null),n!==a){if(c=[],H.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(U)),s!==a)for(;s!==a;)c.push(s),H.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(U));else c=a;if(c!==a)if(46===t.charCodeAt(ut)?(s=X,ut++):(s=a,0===ft&&Ct(Y)),s!==a){for(u=[],H.test(t.charAt(ut))?(o=t.charAt(ut),ut++):(o=a,0===ft&&Ct(U));o!==a;)u.push(o),H.test(t.charAt(ut))?(o=t.charAt(ut),ut++):(o=a,0===ft&&Ct(U));u!==a?(ot=e,r=$(),e=r):(ut=e,e=a)}else ut=e,e=a;else ut=e,e=a}else ut=e,e=a;else ut=e,e=a;return ft--,e===a&&(r=a,0===ft&&Ct(Q)),e}())===a&&(e=function(){var e,r,n,c,s;if(ft++,e=ut,(r=St())!==a)if(K.test(t.charAt(ut))?(n=t.charAt(ut),ut++):(n=a,0===ft&&Ct(G)),n===a&&(n=null),n!==a){if(c=[],H.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(U)),s!==a)for(;s!==a;)c.push(s),H.test(t.charAt(ut))?(s=t.charAt(ut),ut++):(s=a,0===ft&&Ct(U));else c=a;c!==a?(ot=e,r=W(),e=r):(ut=e,e=a)}else ut=e,e=a;else ut=e,e=a;return ft--,e===a&&(r=a,0===ft&&Ct(q)),e}()),ft--,e===a&&0===ft&&Ct(L),e}function St(){var e,r;for(ft++,e=[],ct.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=a,0===ft&&Ct(st));r!==a;)e.push(r),ct.test(t.charAt(ut))?(r=t.charAt(ut),ut++):(r=a,0===ft&&Ct(st));return ft--,e===a&&(r=a,0===ft&&Ct(at)),e}var xt="untyped";if((r=s())!==a&&ut===t.length)return r;throw r!==a&&ut<t.length&&Ct({type:"end"}),yt(ht,lt<t.length?t.charAt(lt):null,lt<t.length?bt(lt,lt+1):bt(lt,lt))}}},,,,function(t,e,r){t.exports=r(29)},,,,,,,,,function(t,e,r){},,function(t,e,r){},,function(t,e,r){},,function(t,e,r){},,function(t,e,r){},,function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),c=r(8),s=(r(19),r(1)),u=r(2),o=r(4),i=r(3),l=r(5),h=(r(21),r(23),function(t){function e(t){var r;return Object(s.a)(this,e),(r=Object(o.a)(this,Object(i.a)(e).call(this,t))).state={onChange:t.onChange},r}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("textarea",{value:this.props.formula,onChange:function(e){return t.state.onChange(e.target.value)},className:"FormulaInput",placeholder:"Enter formula here, e.g.\nmass = 3 kg\nvelocity = 0.5 * c\nmomentum = mass * velocity",rows:"10","data-testid":"formula-text-area"})}}]),e}(a.a.Component)),f=(r(25),function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.resultValue;return isNaN(t)||""===t||(t=t.toExponential()),a.a.createElement("p",{className:"Result","data-testid":"result-display-area"},t," ",this.props.units)}}]),e}(a.a.Component)),p=function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){for(var t=[],e=this.props.results,r=0;r<e.length;r++)t.push(a.a.createElement(f,{resultValue:e[r][0],units:e[r][1],key:r}));return a.a.createElement("div",{"data-testid":"results-display-area"},"Results:",t)}}]),e}(a.a.Component),d=r(9),A=(r(27),function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("tr",{className:"Constant"},a.a.createElement("td",null,this.props.symbol),a.a.createElement("td",null,"="),a.a.createElement("td",null,this.props.value),a.a.createElement("td",null,this.props.units))}}]),e}(a.a.Component)),m=function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){for(var t=[],e=this.props.constants,r=Object(d.a)(e.keys()).sort(),n=0;n<r.length;n++){var c=r[n],s=e.get(c),u=s[0],o=s[1];t.push(a.a.createElement(A,{symbol:c,value:u,units:o,key:n}))}return a.a.createElement("div",null,"Constants:",a.a.createElement("table",{"data-testid":"constants-display-area"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{colSpan:"2"},"Symbol"),a.a.createElement("th",null,"value"),a.a.createElement("th",null,"units"))),a.a.createElement("tbody",null,t)))}}]),e}(a.a.Component),g=r(6),v=new Map([["Pi",[Math.PI,"untyped"],"Pi"],["E",[Math.E,"untyped"],"Euler's Constant"],["c",[299792e3,"m/s"],"Speed of Light"],["e",[1.60218e-19,"C"],"Elementary Charge"],["Me",[9.10938e-31,"kg"],"Electron Mass"],["Mp",[1.67262e-27,"kg"],"Proton Mass"],["Mn",[1.67493e-27,"kg"],"Neutron Mass"],["h",[6.62607e-34,"Js"],"Planck's Constant"],["Na",[6.02214e23,"1/mol"],"Avogadro's Number"],["R",[8.31446,"J/Kmol"],"Gas Constant"],["kB",[1.38065e-23,"J/K"],"Boltzmann's Constant"],["a0",[5.29177e-11,"m"],"Bohr Radius"],["e0",[8.85419e-12,"C^2/Jm"],"Vacuum Permittivity"],["Rh",[13.6057,"eV"],"Rydberg Constant"],["amu",[1.66054e-27,"kg/amu"],"Atomic Mass"],["eV",[1.60218e-19,"J/eV"],"Electron Volt"],["D",[3.336e-30,"Cm"],"Debye"]]),b=/([a-zA-Z]+) *= *(.*)/,C=function(){function t(){Object(s.a)(this,t)}return Object(u.a)(t,null,[{key:"calculate",value:function(t){window.SCIPARSER_CONSTANTS=new Map(v);for(var e=[],r=t.split("\n"),n=0;n<r.length;n++){var a=r[n].trim();if(""===a||a.startsWith("//"))e.push(["(blank)",""]);else try{var c=b.exec(a),s=[];c?(s=Object(g.parse)(c[2]),window.SCIPARSER_CONSTANTS.set(c[1],s)):s=Object(g.parse)(a),e.push(s)}catch(o){var u=o.message;o.location&&o.location.start&&o.location.start.column&&(u=u+" (column "+o.location.start.column+")"),e.push([u,""])}}return[e,window.SCIPARSER_CONSTANTS]}}]),t}(),y="SciCalcFormula",E=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(o.a)(this,Object(i.a)(e).call(this))).state={formula:localStorage.getItem(y)||""},t}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=[],r=v;if(""!==this.state.formula){localStorage.setItem(y,this.state.formula);var n=C.calculate(this.state.formula);e=n[0],r=n[1]}return a.a.createElement("span",null,a.a.createElement(h,{formula:this.state.formula,onChange:function(e){t.setState({formula:e})}}),a.a.createElement(p,{results:e}),a.a.createElement(m,{constants:r}))}}]),e}(a.a.Component),M=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,30)).then(function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;r(t),n(t),a(t),c(t),s(t)})},O=document.getElementById("root");Object(c.createRoot)(O).render(a.a.createElement(E,null)),M()}],[[10,3,2]]]);
//# sourceMappingURL=main.0ad18ef3.chunk.js.map