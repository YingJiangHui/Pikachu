parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function n(e,n,l){return n&&t(e.prototype,n),l&&t(e,l),e}var l=function(){function t(n,l){e(this,t),this.ball=l,this.eye=n,this.ballCenterX=l.offsetWidth/2,this.ballCenterY=l.offsetHeight/2,this.ballX=l.getBoundingClientRect().left+this.ballCenterX,this.ballY=l.getBoundingClientRect().top+this.ballCenterY,this.maxMove=this.eye.clientWidth/2-this.ballCenterX,this.timer=null}return n(t,[{key:"init",value:function(){console.log(1),this.events()}},{key:"events",value:function(){var e=this;window.addEventListener("mousemove",function(t){return e.mouseMove(t,e)})}},{key:"mouseMove",value:function(e,t){var n=this;null===t.timer&&(t.timer=setTimeout(function(){var l=e.clientX-t.ballX,i=e.clientY-t.ballY,o=Math.atan2(l,i),a=Math.floor(t.radius({x:l-n.ballCenterX,y:i-n.ballCenterY})),r=t.pos_xy(Math.min(t.maxMove,a/5),o);t.setPos(Math.floor(r.x+t.maxMove),Math.floor(r.y+t.maxMove)),t.timer=null},200))}},{key:"setPos",value:function(e,t){this.ball.style.top="".concat(t,"px"),this.ball.style.left="".concat(e,"px")}},{key:"pos_xy",value:function(e,t){return{x:Math.sin(t)*e,y:Math.cos(t)*e}}},{key:"radius",value:function(e){return Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))}}]),t}(),i=new l(document.querySelector(".left.eye"),document.querySelector(".left>.ball")),o=new l(document.querySelector(".right.eye"),document.querySelector(".right>.ball"));i.init(),o.init();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.977b3367.js.map