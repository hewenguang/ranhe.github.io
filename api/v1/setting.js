(()=>{var e={4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=React;var t=n.n(e);const a=ReactDOM;var r=n.n(a);function o(e){var n=e.title,a=e.red,r=e.green,o=e.blue,l=e.prefix,i=e.onChange,c="#"+[a,r,o].map((function(e){return e.toString(16).padStart(2,"0")})).join("");return t().createElement("div",{className:"theme-item"},t().createElement("label",{className:"theme-item-key"},n),t().createElement("input",{autocomplete:!0,type:"color",value:c,className:"theme-item-value",onChange:function(e){var t=e.target.value.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,a){return"#"+t+t+n+n+a+a})).substring(1).match(/.{2}/g).map((function(e){return parseInt(e,16)}));i&&i({r:t[0],g:t[1],b:t[2]},l)}}))}function l(e){var n=e.title,a=e.value,r=e.onChange,o=e.options;return t().createElement("div",{className:"theme-item"},t().createElement("label",{className:"theme-item-key"},n),t().createElement("select",{className:"theme-item-value",onChange:function(e){r&&r(e.target.value)}},o.map((function(e){return t().createElement("option",{key:e.label,value:e.value,selected:a===e.value},e.label)}))))}function i(e){var n=e.title,a=e.step,r=void 0===a?"1":a,o=e.min,l=void 0===o?"0":o,i=e.max,c=void 0===i?"10":i,u=e.defaultValue,s=void 0===u?"10":u,g=e.value,p=void 0===g?"":g,m=e.onChange;return t().createElement("div",{className:"theme-item"},t().createElement("label",{className:"theme-item-key"},n),t().createElement("input",{min:l,max:c,step:r,type:"range",className:"theme-item-value",value:p?parseFloat(p):s,onChange:function(e){return m&&m(e.target.value)}}))}var c=n(4184),u=n.n(c);function s(e){var n=e.value,a=e.onChange,r={light:{attrs:{"color-red":27,"color-green":27,"color-blue":27,"linkcolor-red":65,"linkcolor-green":110,"linkcolor-blue":210,"bgcolor-red":255,"bgcolor-green":255,"bgcolor-blue":255}},green:{attrs:{"color-red":0,"color-green":31,"color-blue":4,"linkcolor-red":1,"linkcolor-green":168,"linkcolor-blue":28,"bgcolor-red":199,"bgcolor-green":237,"bgcolor-blue":204}},yellow:{attrs:{"color-red":79,"color-green":50,"color-blue":28,"linkcolor-red":209,"linkcolor-green":150,"linkcolor-blue":0,"bgcolor-red":248,"bgcolor-green":241,"bgcolor-blue":227}},gray:{attrs:{"color-red":176,"color-green":176,"color-blue":176,"linkcolor-red":90,"linkcolor-green":200,"linkcolor-blue":250,"bgcolor-red":74,"bgcolor-green":74,"bgcolor-blue":77}},dark:{attrs:{"color-red":176,"color-green":176,"color-blue":176,"linkcolor-red":90,"linkcolor-green":200,"linkcolor-blue":250,"bgcolor-red":20,"bgcolor-green":20,"bgcolor-blue":20}},custom:{attrs:{}}};return t().createElement("ul",{className:"theme-preset"},Object.keys(r).map((function(e){var o=r[e].attrs,l=o["bgcolor-red"],i=o["bgcolor-green"],c=o["bgcolor-blue"],s=l>250&&i>250&&c>250,g="rgb(".concat(l,", ").concat(i,", ").concat(c,")");return t().createElement("li",{key:e,onClick:function(){return a(e,o)},className:u()({active:n===e}),style:{border:"1px solid ".concat(s?"#ded8d8":g),color:"rgb(".concat(o["color-red"],", ").concat(o["color-green"],", ").concat(o["color-blue"],")"),background:"custom"===e?"linear-gradient(45deg, #9c27b0, #8bc34a)":g}})})))}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(){var n,a=p((0,e.useState)(Object.assign({preset:"light",custom:{"color-red":27,"color-green":27,"color-blue":27,"linkcolor-red":65,"linkcolor-green":110,"linkcolor-blue":210,"bgcolor-red":255,"bgcolor-green":255,"bgcolor-blue":255}},app._cache.theme)),2),r=a[0],c=a[1],u=function(e,t){api.send("option",{execute:"theme",name:e,value:t},(function(e){var t=e.error,n=e.data,a=void 0===n?{}:n;if(t)app.doAction("error",t);else{var o=Object.assign({},r,a);c(o),app._cache.theme=o,app.doAction("theme",o)}}))};return t().createElement("div",{className:"theme-body"},t().createElement(s,{value:r.preset,onChange:function(e,t){u({preset:e,custom:"custom"===e?r.custom:t})}}),"custom"===r.preset&&[{prefix:"bgcolor",title:api.i18n.getMessage("bg_color"),r:r.custom["bgcolor-red"],g:r.custom["bgcolor-green"],b:r.custom["bgcolor-blue"]},{prefix:"color",title:api.i18n.getMessage("text_color"),r:r.custom["color-red"],g:r.custom["color-green"],b:r.custom["color-blue"]},{prefix:"linkcolor",title:api.i18n.getMessage("link_color"),r:r.custom["linkcolor-red"],g:r.custom["linkcolor-green"],b:r.custom["linkcolor-blue"]}].map((function(e){return t().createElement(o,{red:e.r,green:e.g,blue:e.b,title:e.title,prefix:e.prefix,onChange:function(e,t){var n;u({preset:"custom",custom:Object.assign(r.custom,(n={},g(n,"".concat(t,"-red"),e.r),g(n,"".concat(t,"-green"),e.g),g(n,"".concat(t,"-blue"),e.b),n))})}})})),t().createElement("hr",null),t().createElement(l,{value:r.font,options:(n=[{label:"系统默认",value:"default"}],/macintosh|mac os x/i.test(navigator.userAgent)?n.concat([{label:api.i18n.getMessage("font_hiragino"),value:"Hiragino Sans GB"},{label:api.i18n.getMessage("font_stheiti_light"),value:"STHeiti Light"},{label:api.i18n.getMessage("font_stheiti"),value:"STHeiti"},{label:api.i18n.getMessage("font_stkaiti"),value:"STKaiti"},{label:api.i18n.getMessage("font_stsong"),value:"STSong"},{label:api.i18n.getMessage("font_stfangsong"),value:"STFangsong"}]):n.concat([{label:api.i18n.getMessage("font_simhei"),value:"SimHei"},{label:api.i18n.getMessage("font_simsun"),value:"SimSun"},{label:api.i18n.getMessage("font_nsimsun"),value:"NSimSun"},{label:api.i18n.getMessage("font_fangsong"),value:"FangSong"},{label:api.i18n.getMessage("font_kaiti"),value:"KaiTi"},{label:api.i18n.getMessage("font_microsoft_yahei"),value:"Microsoft YaHei"}])),title:api.i18n.getMessage("font"),onChange:function(e){return u("font",e)}}),t().createElement(i,{min:"14",max:"30",defaultValue:"20",value:r.size,title:api.i18n.getMessage("font_size"),onChange:function(e){return u("size","".concat(e,"px"))}}),t().createElement(i,{min:"600",step:"100",max:"2000",defaultValue:"680",value:r.width,title:api.i18n.getMessage("page_width"),onChange:function(e){return u("width","".concat(e,"px"))}}),t().createElement(i,{min:"0",max:"5",defaultValue:"0",value:r.spacing,title:api.i18n.getMessage("font_space"),onChange:function(e){return u("spacing","".concat(e,"px"))}}),t().createElement(i,{min:"1",max:"3",step:"0.1",defaultValue:"1.8",value:r.lineheight,title:api.i18n.getMessage("lineheight"),onChange:function(e){return u("lineheight",e)}}),t().createElement(i,{min:"0",step:"2",max:"50",defaultValue:"32",value:r.blockspacing,title:api.i18n.getMessage("blockspacing"),onChange:function(e){return u("blockspacing","".concat(e,"px"))}}),t().createElement(i,{min:"0",max:"10",defaultValue:"0",value:r.indent,title:api.i18n.getMessage("line_indent"),onChange:function(e){return u("indent","".concat(e,"em"))}}),t().createElement(l,{title:api.i18n.getMessage("align_style"),value:r.align,onChange:function(e){return u("align",e)},options:[{label:api.i18n.getMessage("align_left"),value:"left"},{label:api.i18n.getMessage("align_center"),value:"center"},{label:api.i18n.getMessage("align_right"),value:"right"},{label:api.i18n.getMessage("align_justify"),value:"justify"}]}))}var b=dom.create("style",{title:"cc-stylesheet",textContent:app._cache.plugins.setting.css});document.head.appendChild(b),app.addAction("setting",(function(e){utils.isBoolean(e)?b.disabled=!e:b.disabled?b.disabled=!1:b.disabled=!0})),app.addAction("hide",(function(){app.doAction("setting",!1)})),app._cache.themeRoot=dom.create("div",{"data-cc":"theme-root",style:{display:"none"}}),document.addEventListener("click",(function(e){var t=e.target;app._cache.themeRoot.contains(t)||"setting"===dom.getAttr(t,"cc-action")||app._cache.render._ready&&app.doAction("setting",!1)})),app._cache.render.root.appendChild(app._cache.themeRoot),r().render(t().createElement(d,null),app._cache.themeRoot)})()})();