import{r as y}from"./index-c013ead5.js";var p={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=y,d=Symbol.for("react.element"),j=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,b=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function u(t,r,o){var e,i={},n=null,s=null;o!==void 0&&(n=""+o),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(s=r.ref);for(e in r)g.call(r,e)&&!x.hasOwnProperty(e)&&(i[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)i[e]===void 0&&(i[e]=r[e]);return{$$typeof:d,type:t,key:n,ref:s,props:i,_owner:b.current}}f.Fragment=j;f.jsx=u;f.jsxs=u;p.exports=f;var w=p.exports;function c(t){var r=t.match(/^var\((.*)\)$/);return r?r[1]:t}function O(t,r){var o=t;for(var e of r){if(!(e in o))throw new Error("Path ".concat(r.join(" -> ")," does not exist in object"));o=o[e]}return o}function l(t,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],e=t.constructor();for(var i in t){var n=t[i],s=[...o,i];typeof n=="string"||typeof n=="number"||n==null?e[i]=r(n,s):typeof n=="object"&&!Array.isArray(n)?e[i]=l(n,r,s):console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(n)?"Array":typeof n,'"'))}return e}function E(t,r){var o={};if(typeof r=="object"){var e=t;l(r,(s,a)=>{var m=O(e,a);o[c(m)]=String(s)})}else{var i=t;for(var n in i)o[c(n)]=i[n]}return Object.defineProperty(o,"toString",{value:function(){return Object.keys(this).map(a=>"".concat(a,":").concat(this[a])).join(";")},writable:!1}),o}export{E as a,w as j};
//# sourceMappingURL=vanilla-extract-dynamic.esm-f1ae3083.js.map
