!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o;n.r(t),function(e){e[e.Left=37]="Left",e[e.Up=38]="Up",e[e.Right=39]="Right",e[e.Down=40]="Down"}(o||(o={}));var s=o,i=function(e){var t=this;this.focusIn=function(e){t.selectedNode=e.target,t.radios.forEach((function(t){t!==e.target&&(t.tabIndex=-1,t.setAttribute("aria-checked","false"))})),t.selectedNode.tabIndex=0,t.selectedNode.setAttribute("aria-checked","true"),t.selectedNode.focus()},this.handleKeyboardPress=function(e){console.log(e);var t=e.target;switch(e.keyCode){case s.Left:case s.Up:if(t.previousElementSibling&&"radio"===t.previousElementSibling.getAttribute("role"))t.previousElementSibling.focus();else{var n=t.parentNode.querySelectorAll('[role="radio"]');n[n.length-1].focus()}break;case s.Right:case s.Down:t.nextElementSibling?t.nextElementSibling.focus():t.parentNode.querySelector('[role="radio"]').focus()}},this.radios=[],this.node=e;for(var n=0,o=this.node.querySelectorAll('[role="radio"]');n<o.length;n++){var i=o[n];i.tabIndex=-1,i.addEventListener("focusin",this.focusIn),i.addEventListener("keydown",this.handleKeyboardPress),this.radios.push(i)}this.radios.length>0&&(this.radios[0].tabIndex=0)},a=function(){this.a11yRadioGroups=[];for(var e=0,t=document.querySelectorAll('[role="radiogroup"]');e<t.length;e++){var n=t[e];this.a11yRadioGroups.push(new i(n))}},r=a;window.addEventListener("DOMContentLoaded",(function(){window.a11yRadioUtil=window.a11yRadioUtil||new a}));var d=function(e,t){var n=this;this.modalNode=e,this.dismissNode=this.modalNode.querySelector("."+t.options.dismissClass),this.dismissNode.addEventListener("click",(function(){t.close(n)}))},l=function(e,t,n){this.modalLayerClass="a11y-modal-layer",this.hiddenClass="a11y-hidden",this.dismissClass="a11y-modal-dismiss"},c=function(e){var t=this;this.instances=[],this.configure=function(e){var n=new d(document.querySelector("#"+e),t),o=n.modalNode.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');return n.firstFocusableElement=o[0],n.lastFocusableElement=o[o.length-1],t.instances.push(n),n},this.open=function(e){var n=t.instances.filter((function(t){return t.modalNode.id===e}))[0];n||(n=t.configure(e)),t.injectFocusTraps(n),n.modalNode.parentNode.classList.remove(t.options.hiddenClass),t.modalLayer.classList.contains(t.options.hiddenClass)&&t.modalLayer.classList.remove(t.options.hiddenClass),n.firstFocusableElement.focus()},this.close=function(e){var n=t.instances.indexOf(e,0);if(-1===n)throw"Modal instance does not exist in modal layer.";t.removeFocusTraps(e),e.modalNode.parentNode.classList.add(t.options.hiddenClass),t.instances.splice(n,1)[0],n>0&&t.instances[n-1].firstFocusableElement.focus()},this.injectFocusTraps=function(e){e.firstFocusTrapElement=document.createElement("div"),e.firstFocusTrapElement.tabIndex=0,e.firstFocusTrapElement.addEventListener("focus",(function(t){e.lastFocusableElement.focus()})),e.lastFocusTrapElement=document.createElement("div"),e.lastFocusTrapElement.tabIndex=0,e.lastFocusTrapElement.addEventListener("focus",(function(t){e.firstFocusableElement.focus()})),e.modalNode.parentNode.insertBefore(e.firstFocusTrapElement,e.modalNode),e.modalNode.parentNode.insertBefore(e.lastFocusTrapElement,e.modalNode.nextSibling)},this.removeFocusTraps=function(e){e.modalNode.parentNode.removeChild(e.firstFocusTrapElement),e.modalNode.parentNode.removeChild(e.lastFocusTrapElement)},this.handleKeyboardEvent=function(e){"escape"===e.key.toLowerCase()&&t.instances.length>0&&t.close(t.instances[t.instances.length-1])},this.options=e||new l;var n=new l;this.options.modalLayerClass=this.options.modalLayerClass||n.modalLayerClass,this.options.hiddenClass=this.options.hiddenClass||n.hiddenClass,this.options.dismissClass=this.options.dismissClass||n.dismissClass,this.instances=[],this.modalLayer=document.querySelector("."+this.options.modalLayerClass),document.addEventListener("keyup",this.handleKeyboardEvent)},u=c;window.addEventListener("DOMContentLoaded",(function(){window.a11yModalUtil=window.a11yModalUtil||new c}));var f=function(){this.a11yRadioUtil=new r,this.a11yModalManager=new u};t.default=f;window.addEventListener("DOMContentLoaded",(function(){window.a11yCore||(window.a11yCore=new f)}))}]);