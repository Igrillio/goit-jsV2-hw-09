!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");({form:document.querySelector(".form")}).form.addEventListener("submit",(function(n){var t=function(n){var t,o,r;(t=n,o=a,r=Math.random()>.3,new Promise((function(e,n){setInterval((function(){r?e({position:t,delay:o}):n({position:t,delay:o})}),o)}))).then((function(n){var t=n.i,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(t){t.il;var o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))};n.preventDefault();for(var o=n.currentTarget.elements,r=Number(o.amount.value),a=Number(o.delay.value),u=Number(o.step.value),l=1;l<=r;l++)t(l);a+=u}))}();
//# sourceMappingURL=03-promises.3d13a969.js.map