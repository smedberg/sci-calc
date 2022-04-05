(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(8),o=(n(18),n(1)),u=n(2),s=n(4),i=n(3),l=n(5),f=(n(20),n(22),function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(s.a)(this,Object(i.a)(e).call(this,t))).state={onChange:t.onChange},n}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("textarea",{value:this.state.body,onChange:function(e){return t.state.onChange(e.target.value)},className:"FormulaInput",placeholder:"Enter formula here, e.g.\nmomentum = 4 kg * 3 m/s\n3 * momentum",rows:"10","data-testid":"formula-text-area"})}}]),e}(a.a.Component)),h=(n(24),function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.resultValue;return isNaN(t)||(t=t.toExponential()),a.a.createElement("p",{className:"Result","data-testid":"result-display-area"},t," ",this.props.units)}}]),e}(a.a.Component)),p=n(6),A=new Map([["Pi",[3.14159,"untyped"],"Pi"],["c",[299792e3,"m/s"],"Speed of Light"],["e",[1.60218e-19,"C"],"Elementary Charge"],["Me",[9.10938e-31,"kg"],"Electron Mass"],["Mp",[1.67262e-27,"kg"],"Proton Mass"],["Mn",[1.67493e-27,"kg"],"Neutron Mass"],["h",[6.62607e-34,"Js"],"Planck's Constant"],["Na",[6.02214e23,"1/mol"],"Avogadro's Number"],["R",[8.31446,"J/Kmol"],"Gas Constant"],["kB",[1.38065e-23,"J/K"],"Boltzmann's Constant"],["a0",[5.29177e-11,"m"],"Bohr Radius"],["e0",[8.85419e-12,"C^2/Jm"],"Vacuum Permittivity"],["Rh",[13.6057,"eV"],"Rydberg Constant"],["amu",[1.66054e-27,"kg"],"Atomic Mass"],["eV",[1.60218e-19,"J"],"Electron Volt"],["D",[3.336e-30,"Cm"],"Debye"]]),g=/([a-zA-Z]+) *= *(.*)/,d=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"calculate",value:function(t){window.SCIPARSER_CONSTANTS=new Map(A);for(var e=[],n=t.split("\n"),r=0;r<n.length;r++)try{var a=n[r],c=g.exec(a),o=[];c?(o=Object(p.parse)(c[2]),window.SCIPARSER_CONSTANTS.set(c[1],o)):o=Object(p.parse)(a),e.push(o)}catch(u){e.push([u.message,""])}return e}}]),t}(),m=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(i.a)(e).call(this))).state={formula:""},t}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=[];if(""!==this.state.formula)for(var n=d.calculate(this.state.formula),r=0;r<n.length;r++)e.push(a.a.createElement(h,{resultValue:n[r][0],units:n[r][1]}));return a.a.createElement("span",null,a.a.createElement(f,{onChange:function(e){t.setState({formula:e})}}),e)}}]),e}(a.a.Component),v=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,27)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)})},C=document.getElementById("root");Object(c.createRoot)(C).render(a.a.createElement(m,null)),v()},6:function(t,e,n){"use strict";function r(t,e,n,a){this.message=t,this.expected=e,this.found=n,this.location=a,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}!function(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}(r,Error),r.buildMessage=function(t,e){var n={literal:function(t){return'"'+a(t.text)+'"'},class:function(t){var e,n="";for(e=0;e<t.parts.length;e++)n+=t.parts[e]instanceof Array?c(t.parts[e][0])+"-"+c(t.parts[e][1]):c(t.parts[e]);return"["+(t.inverted?"^":"")+n+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function a(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+r(t)})}function c(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+r(t)})}return"Expected "+function(t){var e,r,a,c=new Array(t.length);for(e=0;e<t.length;e++)c[e]=(a=t[e],n[a.type](a));if(c.sort(),c.length>0){for(e=1,r=1;e<c.length;e++)c[e-1]!==c[e]&&(c[r]=c[e],r++);c.length=r}switch(c.length){case 1:return c[0];case 2:return c[0]+" or "+c[1];default:return c.slice(0,-1).join(", ")+", or "+c[c.length-1]}}(t)+" but "+function(t){return t?'"'+a(t)+'"':"end of input"}(e)+" found."},t.exports={SyntaxError:r,parse:function(t,e){e=void 0!==e?e:{};var n,a={},c={Expression:it},o=it,u="+",s=nt("+",!1),i="-",l=nt("-",!1),f=function(t,e){return e.reduce(function(t,e){var n=t[0],r=e[3][0],a=t[1];console.log("Handling addition, assuming that type ",t[1]," matches type ",e[3][1]);var c=a;return a==At&&(c=e[3][1]),"+"===e[1]?[n+r,c]:"-"===e[1]?[n-r,c]:void 0},t)},h="*",p=nt("*",!1),A="/",g=nt("/",!1),d=function(t,e){return e.reduce(function(t,e){var n=t[0],r=e[3][0],a=t[1],c=e[3][1];return"*"===e[1]?[n*r,a==At?c:c==At?a:a+"\u22c5("+c+")"]:"/"===e[1]?[n/r,a==At?"1/("+c+")":c==At?a:"("+a+")/("+c+")"]:void 0},t)},m="(",v=nt("(",!1),C=")",b=nt(")",!1),y=function(t){return t},w=at("constant"),x=/^[A-Za-z]/,S=rt([["A","Z"],["a","z"]],!1,!1),E=function(t){if(void 0==window.SCIPARSER_CONSTANTS)et("predefined constant");else{var e=t.join("");if(window.SCIPARSER_CONSTANTS.has(e)){var n=window.SCIPARSER_CONSTANTS.get(e);return console.log("In Constant, found value: ",n),n}et("predefined constant")}},O=/^[ \t\n\r]/,j=rt([" ","\t","\n","\r"],!1,!1),R=/^[a-zA-Z]/,N=rt([["a","z"],["A","Z"]],!1,!1),k=/^[a-zA-Z\/0-9\-\^]/,F=rt([["a","z"],["A","Z"],"/",["0","9"],"-","^"],!1,!1),T=function(t,e){var n=e[0]+e[1].join("");return console.log("In TypedNumber, number: ",t,", units: ",n),[t,n]},I=function(t){return[t,At]},M=at("integer"),P=/^[0-9]/,z=rt([["0","9"]],!1,!1),J=function(t){return parseInt(t,10)},Z=at("float"),V=/^[\-+]/,B=rt(["-","+"],!1,!1),_={type:"any"},L=function(){return parseFloat(tt(),10)},D=at("scientific notation"),K="e",G=nt("e",!0),H=function(){var t=/([-+]?[0-9]+(.[0-9]+)?)[eE]([-+]?[0-9]+)/.exec(tt());return parseFloat(t[1],10)*Math.pow(10,parseInt(t[3]))},U=at("whitespace"),q=0,Q=0,W=[{line:1,column:1}],X=0,Y=[],$=0;if("startRule"in e){if(!(e.startRule in c))throw new Error("Can't start parsing from rule \""+e.startRule+'".');o=c[e.startRule]}function tt(){return t.substring(Q,q)}function et(e,n){throw n=void 0!==n?n:ot(Q,q),st([at(e)],t.substring(Q,q),n)}function nt(t,e){return{type:"literal",text:t,ignoreCase:e}}function rt(t,e,n){return{type:"class",parts:t,inverted:e,ignoreCase:n}}function at(t){return{type:"other",description:t}}function ct(e){var n,r=W[e];if(r)return r;for(n=e-1;!W[n];)n--;for(r={line:(r=W[n]).line,column:r.column};n<e;)10===t.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++;return W[e]=r,r}function ot(t,e){var n=ct(t),r=ct(e);return{start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:r.line,column:r.column}}}function ut(t){q<X||(q>X&&(X=q,Y=[]),Y.push(t))}function st(t,e,n){return new r(r.buildMessage(t,e),t,e,n)}function it(){var e,n,r,c,o,h,p,A;if(e=q,(n=lt())!==a){for(r=[],c=q,(o=pt())!==a?(43===t.charCodeAt(q)?(h=u,q++):(h=a,0===$&&ut(s)),h===a&&(45===t.charCodeAt(q)?(h=i,q++):(h=a,0===$&&ut(l))),h!==a&&(p=pt())!==a&&(A=lt())!==a?c=o=[o,h,p,A]:(q=c,c=a)):(q=c,c=a);c!==a;)r.push(c),c=q,(o=pt())!==a?(43===t.charCodeAt(q)?(h=u,q++):(h=a,0===$&&ut(s)),h===a&&(45===t.charCodeAt(q)?(h=i,q++):(h=a,0===$&&ut(l))),h!==a&&(p=pt())!==a&&(A=lt())!==a?c=o=[o,h,p,A]:(q=c,c=a)):(q=c,c=a);r!==a?(Q=e,e=n=f(n,r)):(q=e,e=a)}else q=e,e=a;return e}function lt(){var e,n,r,c,o,u,s,i;if(e=q,(n=ft())!==a){for(r=[],c=q,(o=pt())!==a?(42===t.charCodeAt(q)?(u=h,q++):(u=a,0===$&&ut(p)),u===a&&(47===t.charCodeAt(q)?(u=A,q++):(u=a,0===$&&ut(g))),u!==a&&(s=pt())!==a&&(i=ft())!==a?c=o=[o,u,s,i]:(q=c,c=a)):(q=c,c=a);c!==a;)r.push(c),c=q,(o=pt())!==a?(42===t.charCodeAt(q)?(u=h,q++):(u=a,0===$&&ut(p)),u===a&&(47===t.charCodeAt(q)?(u=A,q++):(u=a,0===$&&ut(g))),u!==a&&(s=pt())!==a&&(i=ft())!==a?c=o=[o,u,s,i]:(q=c,c=a)):(q=c,c=a);r!==a?(Q=e,e=n=d(n,r)):(q=e,e=a)}else q=e,e=a;return e}function ft(){var e,n,r,c;return e=q,40===t.charCodeAt(q)?(n=m,q++):(n=a,0===$&&ut(v)),n!==a&&pt()!==a&&(r=it())!==a&&pt()!==a?(41===t.charCodeAt(q)?(c=C,q++):(c=a,0===$&&ut(b)),c!==a?(Q=e,e=n=y(r)):(q=e,e=a)):(q=e,e=a),e===a&&(e=function(){var e,n,r,c,o,u,s;if(e=q,(n=ht())!==a){for(r=[],O.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(j));c!==a;)r.push(c),O.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(j));if(r!==a){if(c=q,R.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(N)),o!==a){for(u=[],k.test(t.charAt(q))?(s=t.charAt(q),q++):(s=a,0===$&&ut(F));s!==a;)u.push(s),k.test(t.charAt(q))?(s=t.charAt(q),q++):(s=a,0===$&&ut(F));u!==a?c=o=[o,u]:(q=c,c=a)}else q=c,c=a;c!==a?(Q=e,n=T(n,c),e=n):(q=e,e=a)}else q=e,e=a}else q=e,e=a;return e}())===a&&(e=function(){var t,e;return t=q,(e=ht())!==a&&(Q=t,e=I(e)),t=e}())===a&&(e=function(){var e,n,r,c;if($++,e=q,(n=pt())!==a){if(r=[],x.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(S)),c!==a)for(;c!==a;)r.push(c),x.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(S));else r=a;r!==a?(Q=e,n=E(r),e=n):(q=e,e=a)}else q=e,e=a;return $--,e===a&&(n=a,0===$&&ut(w)),e}()),e}function ht(){var e;return(e=function(){var e,n,r,c,o,u,s,i,l;if($++,e=q,(n=pt())!==a)if(V.test(t.charAt(q))?(r=t.charAt(q),q++):(r=a,0===$&&ut(B)),r===a&&(r=null),r!==a){if(c=[],P.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(z)),o!==a)for(;o!==a;)c.push(o),P.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(z));else c=a;if(c!==a){if(o=q,t.length>q?(u=t.charAt(q),q++):(u=a,0===$&&ut(_)),u!==a){if(s=[],P.test(t.charAt(q))?(i=t.charAt(q),q++):(i=a,0===$&&ut(z)),i!==a)for(;i!==a;)s.push(i),P.test(t.charAt(q))?(i=t.charAt(q),q++):(i=a,0===$&&ut(z));else s=a;s!==a?o=u=[u,s]:(q=o,o=a)}else q=o,o=a;if(o===a&&(o=null),o!==a)if(t.substr(q,1).toLowerCase()===K?(u=t.charAt(q),q++):(u=a,0===$&&ut(G)),u!==a)if(V.test(t.charAt(q))?(s=t.charAt(q),q++):(s=a,0===$&&ut(B)),s===a&&(s=null),s!==a){if(i=[],P.test(t.charAt(q))?(l=t.charAt(q),q++):(l=a,0===$&&ut(z)),l!==a)for(;l!==a;)i.push(l),P.test(t.charAt(q))?(l=t.charAt(q),q++):(l=a,0===$&&ut(z));else i=a;i!==a?(Q=e,n=H(),e=n):(q=e,e=a)}else q=e,e=a;else q=e,e=a;else q=e,e=a}else q=e,e=a}else q=e,e=a;else q=e,e=a;return $--,e===a&&(n=a,0===$&&ut(D)),e}())===a&&(e=function(){var e,n,r,c,o,u,s,i;if($++,e=q,(n=pt())!==a)if(V.test(t.charAt(q))?(r=t.charAt(q),q++):(r=a,0===$&&ut(B)),r===a&&(r=null),r!==a){if(c=[],P.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(z)),o!==a)for(;o!==a;)c.push(o),P.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(z));else c=a;if(c!==a){if(o=q,t.length>q?(u=t.charAt(q),q++):(u=a,0===$&&ut(_)),u!==a){for(s=[],P.test(t.charAt(q))?(i=t.charAt(q),q++):(i=a,0===$&&ut(z));i!==a;)s.push(i),P.test(t.charAt(q))?(i=t.charAt(q),q++):(i=a,0===$&&ut(z));s!==a?o=u=[u,s]:(q=o,o=a)}else q=o,o=a;o!==a?(Q=e,n=L(),e=n):(q=e,e=a)}else q=e,e=a}else q=e,e=a;else q=e,e=a;return $--,e===a&&(n=a,0===$&&ut(Z)),e}())===a&&(e=function(){var e,n,r,c;if($++,e=q,(n=pt())!==a){if(r=[],P.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(z)),c!==a)for(;c!==a;)r.push(c),P.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(z));else r=a;r!==a?(Q=e,n=J(r),e=n):(q=e,e=a)}else q=e,e=a;return $--,e===a&&(n=a,0===$&&ut(M)),e}()),e}function pt(){var e,n;for($++,e=[],O.test(t.charAt(q))?(n=t.charAt(q),q++):(n=a,0===$&&ut(j));n!==a;)e.push(n),O.test(t.charAt(q))?(n=t.charAt(q),q++):(n=a,0===$&&ut(j));return $--,e===a&&(n=a,0===$&&ut(U)),e}var At="untyped";if((n=o())!==a&&q===t.length)return n;throw n!==a&&q<t.length&&ut({type:"end"}),st(Y,X<t.length?t.charAt(X):null,X<t.length?ot(X,X+1):ot(X,X))}}},9:function(t,e,n){t.exports=n(26)}},[[9,3,2]]]);
//# sourceMappingURL=main.c4de9a73.chunk.js.map