(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,r){},20:function(t,e,r){},22:function(t,e,r){},24:function(t,e,r){},26:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),c=r(7),o=(r(18),r(1)),u=r(2),s=r(4),i=r(3),l=r(5),f=(r(20),r(22),function(t){function e(t){var r;return Object(o.a)(this,e),(r=Object(s.a)(this,Object(i.a)(e).call(this,t))).state={onChange:t.onChange},r}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("textarea",{value:this.state.body,onChange:function(e){return t.state.onChange(e.target.value)},className:"FormulaInput",placeholder:"Enter formula here, e.g. '4 kg * 3 m/s'",rows:"10","data-testid":"formula-text-area"})}}]),e}(a.a.Component)),h=(r(24),function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("p",{className:"Result","data-testid":"result-display-area"},this.props.resultText," ",this.props.units)}}]),e}(a.a.Component)),p=r(8);window.SCIPARSER_CONSTANTS=new Map([["Pi",[3.14159,"untyped"],"Pi"],["c",[299792e3,"m/s"],"Speed of Light"],["e",[1.60218e-19,"C"],"Elementary Charge"],["Me",[9.10938e-31,"kg"],"Electron Mass"],["Mp",[1.67262e-27,"kg"],"Proton Mass"],["Mn",[1.67493e-27,"kg"],"Neutron Mass"],["h",[6.62607e-34,"Js"],"Planck's Constant"],["Na",[6.02214e23,"1/mol"],"Avogadro's Number"],["R",[8.31446,"J/Kmol"],"Gas Constant"],["kB",[1.38065e-23,"J/K"],"Boltzmann's Constant"],["a0",[5.29177e-11,"m"],"Bohr Radius"],["e0",[8.85419e-12,"C^2/Jm"],"Vacuum Permittivity"],["Rh",[13.6057,"eV"],"Rydberg Constant"],["amu",[1.66054e-27,"kg"],"Atomic Mass"],["eV",[1.60218e-19,"J"],"Electron Volt"],["D",[3.336e-30,"Cm"],"Debye"]]);var A=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"calculate",value:function(t){for(var e=[],r=t.split("\n"),n=0;n<r.length;n++)try{e.push(Object(p.parse)(r[n]))}catch(a){e.push([a.message,""])}return e}}]),t}(),g=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(i.a)(e).call(this))).state={formula:""},t}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=[];if(""!=this.state.formula)for(var r=A.calculate(this.state.formula),n=0;n<r.length;n++)e.push(a.a.createElement(h,{resultText:r[n][0],units:r[n][1]}));return a.a.createElement("span",null,a.a.createElement(f,{onChange:function(e){t.setState({formula:e})}}),e)}}]),e}(a.a.Component),d=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,27)).then(function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;r(t),n(t),a(t),c(t),o(t)})},m=document.getElementById("root");Object(c.createRoot)(m).render(a.a.createElement(g,null)),d()},8:function(t,e,r){"use strict";function n(t,e,r,a){this.message=t,this.expected=e,this.found=r,this.location=a,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,n)}!function(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}(n,Error),n.buildMessage=function(t,e){var r={literal:function(t){return'"'+a(t.text)+'"'},class:function(t){var e,r="";for(e=0;e<t.parts.length;e++)r+=t.parts[e]instanceof Array?c(t.parts[e][0])+"-"+c(t.parts[e][1]):c(t.parts[e]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function a(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function c(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}return"Expected "+function(t){var e,n,a,c=new Array(t.length);for(e=0;e<t.length;e++)c[e]=(a=t[e],r[a.type](a));if(c.sort(),c.length>0){for(e=1,n=1;e<c.length;e++)c[e-1]!==c[e]&&(c[n]=c[e],n++);c.length=n}switch(c.length){case 1:return c[0];case 2:return c[0]+" or "+c[1];default:return c.slice(0,-1).join(", ")+", or "+c[c.length-1]}}(t)+" but "+function(t){return t?'"'+a(t)+'"':"end of input"}(e)+" found."},t.exports={SyntaxError:n,parse:function(t,e){e=void 0!==e?e:{};var r,a={},c={Expression:it},o=it,u="+",s=rt("+",!1),i="-",l=rt("-",!1),f=function(t,e){return e.reduce(function(t,e){var r=t[0],n=e[3][0],a=t[1];console.log("Handling addition, assuming that type ",t[1]," matches type ",e[3][1]);var c=a;return a==At&&(c=e[3][1]),"+"===e[1]?[r+n,c]:"-"===e[1]?[r-n,c]:void 0},t)},h="*",p=rt("*",!1),A="/",g=rt("/",!1),d=function(t,e){return e.reduce(function(t,e){var r=t[0],n=e[3][0],a=t[1],c=e[3][1];return"*"===e[1]?[r*n,a==At?c:c==At?a:a+"\u22c5("+c+")"]:"/"===e[1]?[r/n,a==At?"1/("+c+")":c==At?a:"("+a+")/("+c+")"]:void 0},t)},m="(",v=rt("(",!1),C=")",y=rt(")",!1),b=function(t){return t},x=at("constant"),w=/^[A-Za-z]/,E=nt([["A","Z"],["a","z"]],!1,!1),S=function(t){if(void 0==window.SCIPARSER_CONSTANTS)et("predefined constant");else{var e=t.join("");if(window.SCIPARSER_CONSTANTS.has(e)){var r=window.SCIPARSER_CONSTANTS.get(e);return console.log("In Constant, found value: ",r),r}et("predefined constant")}},O=/^[ \t\n\r]/,j=nt([" ","\t","\n","\r"],!1,!1),R=/^[a-zA-Z]/,k=nt([["a","z"],["A","Z"]],!1,!1),F=/^[a-zA-Z\/0-9\-\^]/,T=nt([["a","z"],["A","Z"],"/",["0","9"],"-","^"],!1,!1),N=function(t,e){var r=e[0]+e[1].join("");return console.log("In TypedNumber, number: ",t,", units: ",r),[t,r]},I=function(t){return[t,At]},M=at("integer"),P=/^[0-9]/,z=nt([["0","9"]],!1,!1),J=function(t){return parseInt(t,10)},Z=at("float"),B=/^[\-+]/,L=nt(["-","+"],!1,!1),V={type:"any"},_=function(){return parseFloat(tt(),10)},D=at("scientific notation"),K="e",G=rt("e",!0),H=function(){var t=/([-+]?[0-9]+(.[0-9]+)?)[eE]([-+]?[0-9]+)/.exec(tt());return parseFloat(t[1],10)*Math.pow(10,parseInt(t[3]))},U=at("whitespace"),q=0,Q=0,W=[{line:1,column:1}],X=0,Y=[],$=0;if("startRule"in e){if(!(e.startRule in c))throw new Error("Can't start parsing from rule \""+e.startRule+'".');o=c[e.startRule]}function tt(){return t.substring(Q,q)}function et(e,r){throw r=void 0!==r?r:ot(Q,q),st([at(e)],t.substring(Q,q),r)}function rt(t,e){return{type:"literal",text:t,ignoreCase:e}}function nt(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function at(t){return{type:"other",description:t}}function ct(e){var r,n=W[e];if(n)return n;for(r=e-1;!W[r];)r--;for(n={line:(n=W[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return W[e]=n,n}function ot(t,e){var r=ct(t),n=ct(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function ut(t){q<X||(q>X&&(X=q,Y=[]),Y.push(t))}function st(t,e,r){return new n(n.buildMessage(t,e),t,e,r)}function it(){var e,r,n,c,o,h,p,A;if(e=q,(r=lt())!==a){for(n=[],c=q,(o=pt())!==a?(43===t.charCodeAt(q)?(h=u,q++):(h=a,0===$&&ut(s)),h===a&&(45===t.charCodeAt(q)?(h=i,q++):(h=a,0===$&&ut(l))),h!==a&&(p=pt())!==a&&(A=lt())!==a?c=o=[o,h,p,A]:(q=c,c=a)):(q=c,c=a);c!==a;)n.push(c),c=q,(o=pt())!==a?(43===t.charCodeAt(q)?(h=u,q++):(h=a,0===$&&ut(s)),h===a&&(45===t.charCodeAt(q)?(h=i,q++):(h=a,0===$&&ut(l))),h!==a&&(p=pt())!==a&&(A=lt())!==a?c=o=[o,h,p,A]:(q=c,c=a)):(q=c,c=a);n!==a?(Q=e,e=r=f(r,n)):(q=e,e=a)}else q=e,e=a;return e}function lt(){var e,r,n,c,o,u,s,i;if(e=q,(r=ft())!==a){for(n=[],c=q,(o=pt())!==a?(42===t.charCodeAt(q)?(u=h,q++):(u=a,0===$&&ut(p)),u===a&&(47===t.charCodeAt(q)?(u=A,q++):(u=a,0===$&&ut(g))),u!==a&&(s=pt())!==a&&(i=ft())!==a?c=o=[o,u,s,i]:(q=c,c=a)):(q=c,c=a);c!==a;)n.push(c),c=q,(o=pt())!==a?(42===t.charCodeAt(q)?(u=h,q++):(u=a,0===$&&ut(p)),u===a&&(47===t.charCodeAt(q)?(u=A,q++):(u=a,0===$&&ut(g))),u!==a&&(s=pt())!==a&&(i=ft())!==a?c=o=[o,u,s,i]:(q=c,c=a)):(q=c,c=a);n!==a?(Q=e,e=r=d(r,n)):(q=e,e=a)}else q=e,e=a;return e}function ft(){var e,r,n,c;return e=q,40===t.charCodeAt(q)?(r=m,q++):(r=a,0===$&&ut(v)),r!==a&&pt()!==a&&(n=it())!==a&&pt()!==a?(41===t.charCodeAt(q)?(c=C,q++):(c=a,0===$&&ut(y)),c!==a?(Q=e,e=r=b(n)):(q=e,e=a)):(q=e,e=a),e===a&&(e=function(){var e,r,n,c,o,u,s;if(e=q,(r=ht())!==a){for(n=[],O.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(j));c!==a;)n.push(c),O.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(j));if(n!==a){if(c=q,R.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(k)),o!==a){for(u=[],F.test(t.charAt(q))?(s=t.charAt(q),q++):(s=a,0===$&&ut(T));s!==a;)u.push(s),F.test(t.charAt(q))?(s=t.charAt(q),q++):(s=a,0===$&&ut(T));u!==a?c=o=[o,u]:(q=c,c=a)}else q=c,c=a;c!==a?(Q=e,r=N(r,c),e=r):(q=e,e=a)}else q=e,e=a}else q=e,e=a;return e}())===a&&(e=function(){var t,e;return t=q,(e=ht())!==a&&(Q=t,e=I(e)),t=e}())===a&&(e=function(){var e,r,n,c;if($++,e=q,(r=pt())!==a){if(n=[],w.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(E)),c!==a)for(;c!==a;)n.push(c),w.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(E));else n=a;n!==a?(Q=e,r=S(n),e=r):(q=e,e=a)}else q=e,e=a;return $--,e===a&&(r=a,0===$&&ut(x)),e}()),e}function ht(){var e;return(e=function(){var e,r,n,c,o,u,s,i,l;if($++,e=q,(r=pt())!==a)if(B.test(t.charAt(q))?(n=t.charAt(q),q++):(n=a,0===$&&ut(L)),n===a&&(n=null),n!==a){if(c=[],P.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(z)),o!==a)for(;o!==a;)c.push(o),P.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(z));else c=a;if(c!==a){if(o=q,t.length>q?(u=t.charAt(q),q++):(u=a,0===$&&ut(V)),u!==a){if(s=[],P.test(t.charAt(q))?(i=t.charAt(q),q++):(i=a,0===$&&ut(z)),i!==a)for(;i!==a;)s.push(i),P.test(t.charAt(q))?(i=t.charAt(q),q++):(i=a,0===$&&ut(z));else s=a;s!==a?o=u=[u,s]:(q=o,o=a)}else q=o,o=a;if(o===a&&(o=null),o!==a)if(t.substr(q,1).toLowerCase()===K?(u=t.charAt(q),q++):(u=a,0===$&&ut(G)),u!==a)if(B.test(t.charAt(q))?(s=t.charAt(q),q++):(s=a,0===$&&ut(L)),s===a&&(s=null),s!==a){if(i=[],P.test(t.charAt(q))?(l=t.charAt(q),q++):(l=a,0===$&&ut(z)),l!==a)for(;l!==a;)i.push(l),P.test(t.charAt(q))?(l=t.charAt(q),q++):(l=a,0===$&&ut(z));else i=a;i!==a?(Q=e,r=H(),e=r):(q=e,e=a)}else q=e,e=a;else q=e,e=a;else q=e,e=a}else q=e,e=a}else q=e,e=a;else q=e,e=a;return $--,e===a&&(r=a,0===$&&ut(D)),e}())===a&&(e=function(){var e,r,n,c,o,u,s,i;if($++,e=q,(r=pt())!==a)if(B.test(t.charAt(q))?(n=t.charAt(q),q++):(n=a,0===$&&ut(L)),n===a&&(n=null),n!==a){if(c=[],P.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(z)),o!==a)for(;o!==a;)c.push(o),P.test(t.charAt(q))?(o=t.charAt(q),q++):(o=a,0===$&&ut(z));else c=a;if(c!==a){if(o=q,t.length>q?(u=t.charAt(q),q++):(u=a,0===$&&ut(V)),u!==a){for(s=[],P.test(t.charAt(q))?(i=t.charAt(q),q++):(i=a,0===$&&ut(z));i!==a;)s.push(i),P.test(t.charAt(q))?(i=t.charAt(q),q++):(i=a,0===$&&ut(z));s!==a?o=u=[u,s]:(q=o,o=a)}else q=o,o=a;o!==a?(Q=e,r=_(),e=r):(q=e,e=a)}else q=e,e=a}else q=e,e=a;else q=e,e=a;return $--,e===a&&(r=a,0===$&&ut(Z)),e}())===a&&(e=function(){var e,r,n,c;if($++,e=q,(r=pt())!==a){if(n=[],P.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(z)),c!==a)for(;c!==a;)n.push(c),P.test(t.charAt(q))?(c=t.charAt(q),q++):(c=a,0===$&&ut(z));else n=a;n!==a?(Q=e,r=J(n),e=r):(q=e,e=a)}else q=e,e=a;return $--,e===a&&(r=a,0===$&&ut(M)),e}()),e}function pt(){var e,r;for($++,e=[],O.test(t.charAt(q))?(r=t.charAt(q),q++):(r=a,0===$&&ut(j));r!==a;)e.push(r),O.test(t.charAt(q))?(r=t.charAt(q),q++):(r=a,0===$&&ut(j));return $--,e===a&&(r=a,0===$&&ut(U)),e}var At="untyped";if((r=o())!==a&&q===t.length)return r;throw r!==a&&q<t.length&&ut({type:"end"}),st(Y,X<t.length?t.charAt(X):null,X<t.length?ot(X,X+1):ot(X,X))}}},9:function(t,e,r){t.exports=r(26)}},[[9,3,2]]]);
//# sourceMappingURL=main.ac452121.chunk.js.map