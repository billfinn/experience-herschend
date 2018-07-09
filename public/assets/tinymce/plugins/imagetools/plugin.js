!function(){"use strict";var r=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return r(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),Y=tinymce.util.Tools.resolve("tinymce.util.Tools");function n(t,e){return i(document.createElement("canvas"),t,e)}function o(t){return t.getContext("2d")}function i(t,e,n){return t.width=e,t.height=n,t}var a,u,c,l,h={create:n,clone:function(t){var e;return o(e=n(t.width,t.height)).drawImage(t,0,0),e},resize:i,get2dContext:o,get3dContext:function(t){var e=null;try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(n){}return e||(e=null),e}},p={getWidth:function(t){return t.naturalWidth||t.width},getHeight:function(t){return t.naturalHeight||t.height}},g=window.Promise?window.Promise:function(){var t=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(t,r(o,this),r(a,this))},e=t.immediateFn||"function"==typeof setImmediate&&setImmediate||function(t){setTimeout(t,1)};function r(t,e){return function(){t.apply(e,arguments)}}var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(r){var o=this;null!==this._state?e(function(){var t=o._state?r.onFulfilled:r.onRejected;if(null!==t){var e;try{e=t(o._value)}catch(n){return void r.reject(n)}r.resolve(e)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function o(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void l(r(e,t),r(o,this),r(a,this))}this._state=!0,this._value=t,u.call(this)}catch(n){a.call(this,n)}}function a(t){this._state=!1,this._value=t,u.call(this)}function u(){for(var t=0,e=this._deferreds.length;t<e;t++)i.call(this,this._deferreds[t]);this._deferreds=null}function c(t,e,n,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=r}function l(t,e,n){var r=!1;try{t(function(t){r||(r=!0,e(t))},function(t){r||(r=!0,n(t))})}catch(o){if(r)return;r=!0,n(o)}}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype.then=function(n,r){var o=this;return new t(function(t,e){i.call(o,new c(n,r,t,e))})},t.all=function(){var c=Array.prototype.slice.call(1===arguments.length&&n(arguments[0])?arguments[0]:arguments);return new t(function(o,i){if(0===c.length)return o([]);var a=c.length;function u(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){u(e,t)},i)}c[e]=t,0==--a&&o(c)}catch(r){i(r)}}for(var t=0;t<c.length;t++)u(t,c[t])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(n){return new t(function(t,e){e(n)})},t.race=function(o){return new t(function(t,e){for(var n=0,r=o.length;n<r;n++)o[n].then(t,e)})},t}(),s=function(t){return function(){return t}},f=s(!1),d=s(!0),m={noop:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},noarg:function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n()}},compose:function(n,r){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n(r.apply(null,arguments))}},constant:s,identity:function(t){return t},tripleEquals:function(t,e){return t===e},curry:function(i){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var a=new Array(arguments.length-1),n=1;n<arguments.length;n++)a[n-1]=arguments[n];return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];var o=a.concat(n);return i.apply(null,o)}},not:function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return!n.apply(null,arguments)}},die:function(t){return function(){throw new Error(t)}},apply:function(t){return t()},call:function(t){t()},never:f,always:d},v=m.never,y=m.always,b=function(){return w},w=(l={fold:function(t,e){return t()},is:v,isSome:v,isNone:y,getOr:c=function(t){return t},getOrThunk:u=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},or:c,orThunk:u,map:b,ap:b,each:function(){},bind:b,flatten:b,exists:v,forall:y,filter:b,equals:a=function(t){return t.isNone()},equals_:a,toArray:function(){return[]},toString:m.constant("none()")},Object.freeze&&Object.freeze(l),l),x=function(n){var t=function(){return n},e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:y,isNone:v,getOr:t,getOrThunk:t,getOrDie:t,or:e,orThunk:e,map:function(t){return x(t(n))},ap:function(t){return t.fold(b,function(t){return x(t(n))})},each:function(t){t(n)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(n)?o:w},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(v,function(t){return e(n,t)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},R={some:x,none:b,from:function(t){return null===t||t===undefined?w:x(t)}},I="undefined"!=typeof window?window:Function("return this;")(),T=function(t,e){for(var n=e!==undefined&&null!==e?e:I,r=0;r<t.length&&n!==undefined&&null!==n;++r)n=n[t[r]];return n},k=function(t,e){var n=t.split(".");return T(n,e)},C={getOrDie:function(t,e){var n=k(t,e);if(n===undefined||null===n)throw t+" not available on this browser";return n}};function B(){return new(C.getOrDie("FileReader"))}var j={atob:function(t){return C.getOrDie("atob")(t)},requestAnimationFrame:function(t){C.getOrDie("requestAnimationFrame")(t)}};function A(u){return new g(function(t,e){var n=URL.createObjectURL(u),r=new Image,o=function(){r.removeEventListener("load",i),r.removeEventListener("error",a)};function i(){o(),t(r)}function a(){o(),e("Unable to load data of type "+u.type+": "+n)}r.addEventListener("load",i),r.addEventListener("error",a),r.src=n,r.complete&&i()})}function U(r){return new g(function(t,n){var e=new XMLHttpRequest;e.open("GET",r,!0),e.responseType="blob",e.onload=function(){200==this.status&&t(this.response)},e.onerror=function(){var t,e=this;n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+e.status+" downloading image"))},e.send()})}function M(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0]);if(!n)return R.none();for(var r,o,i,a=n[1],u=e[1],c=j.atob(u),l=c.length,s=Math.ceil(l/1024),f=new Array(s),d=0;d<s;++d){for(var h=1024*d,p=Math.min(h+1024,l),g=new Array(p-h),m=h,v=0;m<p;++v,++m)g[v]=c[m].charCodeAt(0);f[d]=(r=g,new(C.getOrDie("Uint8Array"))(r))}return R.some((o=f,i={type:a},new(C.getOrDie("Blob"))(o,i)))}function O(n){return new g(function(t,e){M(n).fold(function(){e("uri is not base64: "+n)},t)})}function z(n){return new g(function(t){var e=new B;e.onloadend=function(){t(e.result)},e.readAsDataURL(n)})}var D={blobToImage:A,imageToBlob:function(t){var e=t.src;return 0===e.indexOf("data:")?O(e):U(e)},blobToArrayBuffer:function(n){return new g(function(t){var e=new B;e.onloadend=function(){t(e.result)},e.readAsArrayBuffer(n)})},blobToDataUri:z,blobToBase64:function(t){return z(t).then(function(t){return t.split(",")[1]})},dataUriToBlobSync:M,canvasToBlob:function(t,n,r){return n=n||"image/png",HTMLCanvasElement.prototype.toBlob?new g(function(e){t.toBlob(function(t){e(t)},n,r)}):O(t.toDataURL(n,r))},canvasToDataURL:function(t,e,n){return e=e||"image/png",t.then(function(t){return t.toDataURL(e,n)})},blobToCanvas:function(t){return A(t).then(function(t){var e,n;return e=t,URL.revokeObjectURL(e.src),n=h.create(p.getWidth(t),p.getHeight(t)),h.get2dContext(n).drawImage(t,0,0),n})},uriToBlob:function(t){return 0===t.indexOf("blob:")?U(t):0===t.indexOf("data:")?O(t):null}},S=function(t){return D.blobToImage(t)},E=function(t){return D.imageToBlob(t)};function _(t,e,n){var r=e.type;function o(e,n){return t.then(function(t){return D.canvasToDataURL(t,e,n)})}return{getType:m.constant(r),toBlob:function(){return g.resolve(e)},toDataURL:function(){return n},toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(e,n){return t.then(function(t){return D.canvasToBlob(t,e,n)})},toAdjustedDataURL:o,toAdjustedBase64:function(t,e){return o(t,e).then(function(t){return t.split(",")[1]})},toCanvas:function(){return t.then(h.clone)}}}function L(e){return D.blobToDataUri(e).then(function(t){return _(D.blobToCanvas(e),e,t)})}var H={fromBlob:L,fromCanvas:function(e,t){return D.canvasToBlob(e,t).then(function(t){return _(g.resolve(e),t,e.toDataURL())})},fromImage:function(t){return D.imageToBlob(t).then(function(t){return L(t)})},fromBlobAndUrlSync:function(t,e){return _(D.blobToCanvas(t),t,e)}};function F(t,e,n){return n<(t=parseFloat(t))?t=n:t<e&&(t=e),t}var P=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10];function W(t,e){var n,r,o,i,a=[],u=new Array(10);for(n=0;n<5;n++){for(r=0;r<5;r++)a[r]=e[r+5*n];for(r=0;r<5;r++){for(o=i=0;o<5;o++)i+=t[r+5*o]*a[o];u[r+5*n]=i}}return u}function V(t,n){return n=F(n,0,1),t.map(function(t,e){return e%6==0?t=1-(1-t)*n:t*=n,F(t,0,1)})}var N={identity:function(){return[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]},adjust:V,multiply:W,adjustContrast:function(t,e){var n;return e=F(e,-1,1),W(t,[(n=(e*=100)<0?127+e/100*127:127*(n=0==(n=e%1)?P[e]:P[Math.floor(e)]*(1-n)+P[Math.floor(e)+1]*n)+127)/127,0,0,0,.5*(127-n),0,n/127,0,0,.5*(127-n),0,0,n/127,0,.5*(127-n),0,0,0,1,0,0,0,0,0,1])},adjustBrightness:function(t,e){return W(t,[1,0,0,0,e=F(255*e,-255,255),0,1,0,0,e,0,0,1,0,e,0,0,0,1,0,0,0,0,0,1])},adjustSaturation:function(t,e){var n;return W(t,[.3086*(1-(n=1+(0<(e=F(e,-1,1))?3*e:e)))+n,.6094*(1-n),.082*(1-n),0,0,.3086*(1-n),.6094*(1-n)+n,.082*(1-n),0,0,.3086*(1-n),.6094*(1-n),.082*(1-n)+n,0,0,0,0,0,1,0,0,0,0,0,1])},adjustHue:function(t,e){var n,r,o,i,a;return e=F(e,-180,180)/180*Math.PI,W(t,[(o=.213)+.787*(n=Math.cos(e))+(r=Math.sin(e))*-o,(i=.715)+n*-i+r*-i,(a=.072)+n*-a+.928*r,0,0,o+n*-o+.143*r,i+n*(1-i)+.14*r,a+n*-a+-.283*r,0,0,o+n*-o+-.787*r,i+n*-i+r*i,a+.928*n+r*a,0,0,0,0,0,1,0,0,0,0,0,1])},adjustColors:function(t,e,n,r){return W(t,[e=F(e,0,2),0,0,0,0,0,n=F(n,0,2),0,0,0,0,0,r=F(r,0,2),0,0,0,0,0,1,0,0,0,0,0,1])},adjustSepia:function(t,e){return W(t,V([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],e=F(e,0,1)))},adjustGrayscale:function(t,e){return W(t,V([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],e=F(e,0,1)))}};function q(a,u){return a.toCanvas().then(function(t){return e=t,n=a.getType(),r=u,i=h.get2dContext(e),o=function(t,e){var n,r,o,i,a,u=t.data,c=e[0],l=e[1],s=e[2],f=e[3],d=e[4],h=e[5],p=e[6],g=e[7],m=e[8],v=e[9],y=e[10],b=e[11],w=e[12],x=e[13],R=e[14],I=e[15],T=e[16],k=e[17],C=e[18],B=e[19];for(a=0;a<u.length;a+=4)n=u[a],r=u[a+1],o=u[a+2],i=u[a+3],u[a]=n*c+r*l+o*s+i*f+d,u[a+1]=n*h+r*p+o*g+i*m+v,u[a+2]=n*y+r*b+o*w+i*x+R,u[a+3]=n*I+r*T+o*k+i*C+B;return t}(i.getImageData(0,0,e.width,e.height),r),i.putImageData(o,0,0),H.fromCanvas(e,n);var e,n,r,o,i})}function $(u,c){return u.toCanvas().then(function(t){return e=t,n=u.getType(),r=c,a=h.get2dContext(e),o=a.getImageData(0,0,e.width,e.height),i=a.getImageData(0,0,e.width,e.height),i=function(t,e,n){var r,o,i,a,u,c,l,s,f,d,h,p,g,m,v,y,b;function w(t,e,n){return n<t?t=n:t<e&&(t=e),t}for(i=Math.round(Math.sqrt(n.length)),a=Math.floor(i/2),r=t.data,o=e.data,y=t.width,b=t.height,c=0;c<b;c++)for(u=0;u<y;u++){for(l=s=f=0,h=0;h<i;h++)for(d=0;d<i;d++)p=w(u+d-a,0,y-1),g=w(c+h-a,0,b-1),m=4*(g*y+p),v=n[h*i+d],l+=r[m]*v,s+=r[m+1]*v,f+=r[m+2]*v;o[m=4*(c*y+u)]=w(l,0,255),o[m+1]=w(s,0,255),o[m+2]=w(f,0,255)}return e}(o,i,r),a.putImageData(i,0,0),H.fromCanvas(e,n);var e,n,r,o,i,a})}function X(u){return function(e,n){return e.toCanvas().then(function(t){return function(t,e,n){var r,o,i=h.get2dContext(t),a=new Array(256);for(o=0;o<a.length;o++)a[o]=u(o,n);return r=function(t,e){var n,r=t.data;for(n=0;n<r.length;n+=4)r[n]=e[r[n]],r[n+1]=e[r[n+1]],r[n+2]=e[r[n+2]];return t}(i.getImageData(0,0,t.width,t.height),a),i.putImageData(r,0,0),H.fromCanvas(t,e)}(t,e.getType(),n)})}}function G(n){return function(t,e){return q(t,n(N.identity(),e))}}function K(e){return function(t){return $(t,e)}}var J,Z={invert:(J=[-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0],function(t){return q(t,J)}),brightness:G(N.adjustBrightness),hue:G(N.adjustHue),saturate:G(N.adjustSaturation),contrast:G(N.adjustContrast),grayscale:G(N.adjustGrayscale),sepia:G(N.adjustSepia),colorize:function(t,e,n,r){return q(t,N.adjustColors(N.identity(),e,n,r))},sharpen:K([0,-1,0,-1,5,-1,0,-1,0]),emboss:K([-2,-1,0,-1,1,1,0,1,2]),gamma:X(function(t,e){return 255*Math.pow(t/255,1-e)}),exposure:X(function(t,e){return 255*(1-Math.exp(-t/255*e))}),colorFilter:q,convoluteFilter:$},Q={scale:function e(t,n,r){var o=p.getWidth(t),i=p.getHeight(t),a=n/o,u=r/i,c=!1;(a<.5||2<a)&&(a=a<.5?.5:2,c=!0),(u<.5||2<u)&&(u=u<.5?.5:2,c=!0);var l,s,f,d=(l=t,s=a,f=u,new g(function(t){var e=p.getWidth(l),n=p.getHeight(l),r=Math.floor(e*s),o=Math.floor(n*f),i=h.create(r,o),a=h.get2dContext(i);a.drawImage(l,0,0,e,n,0,0,r,o),t(i)}));return c?d.then(function(t){return e(t,n,r)}):d}},tt={rotate:function(c,l){return c.toCanvas().then(function(t){return e=t,n=c.getType(),r=l,o=h.create(e.width,e.height),i=h.get2dContext(o),90!=(r=r<(u=a=0)?360+r:r)&&270!=r||h.resize(o,o.height,o.width),90!=r&&180!=r||(a=o.width),270!=r&&180!=r||(u=o.height),i.translate(a,u),i.rotate(r*Math.PI/180),i.drawImage(e,0,0),H.fromCanvas(o,n);var e,n,r,o,i,a,u})},flip:function(a,u){return a.toCanvas().then(function(t){return e=t,n=a.getType(),r=u,o=h.create(e.width,e.height),i=h.get2dContext(o),"v"==r?(i.scale(1,-1),i.drawImage(e,0,-o.height)):(i.scale(-1,1),i.drawImage(e,-o.width,0)),H.fromCanvas(o,n);var e,n,r,o,i})},crop:function(c,l,s,f,d){return c.toCanvas().then(function(t){return e=t,n=c.getType(),r=l,o=s,i=f,a=d,u=h.create(i,a),h.get2dContext(u).drawImage(e,-r,-o),H.fromCanvas(u,n);var e,n,r,o,i,a,u})},resize:function(e,n,r){return e.toCanvas().then(function(t){return Q.scale(t,n,r).then(function(t){return H.fromCanvas(t,e.getType())})})}},et={invert:function(t){return Z.invert(t)},sharpen:function(t){return Z.sharpen(t)},emboss:function(t){return Z.emboss(t)},brightness:function(t,e){return Z.brightness(t,e)},hue:function(t,e){return Z.hue(t,e)},saturate:function(t,e){return Z.saturate(t,e)},contrast:function(t,e){return Z.contrast(t,e)},grayscale:function(t,e){return Z.grayscale(t,e)},sepia:function(t,e){return Z.sepia(t,e)},colorize:function(t,e,n,r){return Z.colorize(t,e,n,r)},gamma:function(t,e){return Z.gamma(t,e)},exposure:function(t,e){return Z.exposure(t,e)},flip:function(t,e){return tt.flip(t,e)},crop:function(t,e,n,r,o){return tt.crop(t,e,n,r,o)},resize:function(t,e,n){return tt.resize(t,e,n)},rotate:function(t,e){return tt.rotate(t,e)}},nt=function(t){return t.toBlob()},rt={blobToImageResult:function(t){return H.fromBlob(t)},fromBlobAndUrlSync:function(t,e){return H.fromBlobAndUrlSync(t,e)},imageToImageResult:function(t){return H.fromImage(t)},imageResultToBlob:function(t,e,n){return e===undefined&&n===undefined?nt(t):t.toAdjustedBlob(e,n)},imageResultToOriginalBlob:nt,imageResultToDataURL:function(t){return t.toDataURL()}},ot=function(){return C.getOrDie("URL")},it={createObjectURL:function(t){return ot().createObjectURL(t)},revokeObjectURL:function(t){ot().revokeObjectURL(t)}},at=tinymce.util.Tools.resolve("tinymce.util.Delay"),ut=tinymce.util.Tools.resolve("tinymce.util.Promise"),ct=tinymce.util.Tools.resolve("tinymce.util.URI"),lt=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),st=tinymce.util.Tools.resolve("tinymce.ui.Factory"),ft=tinymce.util.Tools.resolve("tinymce.geom.Rect"),dt=function(n){return new ut(function(t){var e=function(){n.removeEventListener("load",e),t(n)};n.complete?t(n):n.addEventListener("load",e)})},ht=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),pt=tinymce.util.Tools.resolve("tinymce.util.Observable"),gt=tinymce.util.Tools.resolve("tinymce.util.VK"),mt=0,vt={create:function(t){return new(st.get("Control").extend({Defaults:{classes:"imagepanel"},selection:function(t){return arguments.length?(this.state.set("rect",t),this):this.state.get("rect")},imageSize:function(){var t=this.state.get("viewRect");return{w:t.w,h:t.h}},toggleCropRect:function(t){this.state.set("cropEnabled",t)},imageSrc:function(t){var o=this,i=new Image;i.src=t,dt(i).then(function(){var t,e,n=o.state.get("viewRect");if((e=o.$el.find("img"))[0])e.replaceWith(i);else{var r=document.createElement("div");r.className="mce-imagepanel-bg",o.getEl().appendChild(r),o.getEl().appendChild(i)}t={x:0,y:0,w:i.naturalWidth,h:i.naturalHeight},o.state.set("viewRect",t),o.state.set("rect",ft.inflate(t,-20,-20)),n&&n.w===t.w&&n.h===t.h||o.zoomFit(),o.repaintImage(),o.fire("load")})},zoom:function(t){return arguments.length?(this.state.set("zoom",t),this):this.state.get("zoom")},postRender:function(){return this.imageSrc(this.settings.imageSrc),this._super()},zoomFit:function(){var t,e,n,r,o,i;t=this.$el.find("img"),e=this.getEl().clientWidth,n=this.getEl().clientHeight,r=t[0].naturalWidth,o=t[0].naturalHeight,1<=(i=Math.min((e-10)/r,(n-10)/o))&&(i=1),this.zoom(i)},repaintImage:function(){var t,e,n,r,o,i,a,u,c,l,s;s=this.getEl(),c=this.zoom(),l=this.state.get("rect"),a=this.$el.find("img"),u=this.$el.find(".mce-imagepanel-bg"),o=s.offsetWidth,i=s.offsetHeight,n=a[0].naturalWidth*c,r=a[0].naturalHeight*c,t=Math.max(0,o/2-n/2),e=Math.max(0,i/2-r/2),a.css({left:t,top:e,width:n,height:r}),u.css({left:t,top:e,width:n,height:r}),this.cropRect&&(this.cropRect.setRect({x:l.x*c+t,y:l.y*c+e,w:l.w*c,h:l.h*c}),this.cropRect.setClampRect({x:t,y:e,w:n,h:r}),this.cropRect.setViewPortRect({x:0,y:0,w:o,h:i}))},bindStates:function(){var r=this;function n(t){r.cropRect=function(l,n,s,r,o){var f,a,t,i,e="mce-",u=e+"crid-"+mt++;function d(t,e){return{x:e.x-t.x,y:e.y-t.y,w:e.w,h:e.h}}function c(t,e,n,r){var o,i,a,u,c;o=e.x,i=e.y,a=e.w,u=e.h,o+=n*t.deltaX,i+=r*t.deltaY,(a+=n*t.deltaW)<20&&(a=20),(u+=r*t.deltaH)<20&&(u=20),c=l=ft.clamp({x:o,y:i,w:a,h:u},s,"move"===t.name),c=d(s,c),f.fire("updateRect",{rect:c}),g(c)}function h(e){function t(t,e){e.h<0&&(e.h=0),e.w<0&&(e.w=0),ht("#"+u+"-"+t,r).css({left:e.x,top:e.y,width:e.w,height:e.h})}Y.each(a,function(t){ht("#"+u+"-"+t.name,r).css({left:e.w*t.xMul+e.x,top:e.h*t.yMul+e.y})}),t("top",{x:n.x,y:n.y,w:n.w,h:e.y-n.y}),t("right",{x:e.x+e.w,y:e.y,w:n.w-e.x-e.w+n.x,h:e.h}),t("bottom",{x:n.x,y:e.y+e.h,w:n.w,h:n.h-e.y-e.h+n.y}),t("left",{x:n.x,y:e.y,w:e.x-n.x,h:e.h}),t("move",e)}function p(t){h(l=t)}function g(t){var e,n;p((e=s,{x:(n=t).x+e.x,y:n.y+e.y,w:n.w,h:n.h}))}return a=[{name:"move",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:0,deltaH:0,label:"Crop Mask"},{name:"nw",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:-1,deltaH:-1,label:"Top Left Crop Handle"},{name:"ne",xMul:1,yMul:0,deltaX:0,deltaY:1,deltaW:1,deltaH:-1,label:"Top Right Crop Handle"},{name:"sw",xMul:0,yMul:1,deltaX:1,deltaY:0,deltaW:-1,deltaH:1,label:"Bottom Left Crop Handle"},{name:"se",xMul:1,yMul:1,deltaX:0,deltaY:0,deltaW:1,deltaH:1,label:"Bottom Right Crop Handle"}],i=["top","right","bottom","left"],ht('<div id="'+u+'" class="'+e+'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(r),Y.each(i,function(t){ht("#"+u,r).append('<div id="'+u+"-"+t+'"class="'+e+'croprect-block" style="display: none" data-mce-bogus="all">')}),Y.each(a,function(t){ht("#"+u,r).append('<div id="'+u+"-"+t.name+'" class="'+e+"croprect-handle "+e+"croprect-handle-"+t.name+'"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="'+t.label+'" aria-grabbed="false">')}),t=Y.map(a,function(e){var n;return new(st.get("DragHelper"))(u,{document:r.ownerDocument,handle:u+"-"+e.name,start:function(){n=l},drag:function(t){c(e,n,t.deltaX,t.deltaY)}})}),h(l),ht(r).on("focusin focusout",function(t){ht(t.target).attr("aria-grabbed","focus"===t.type)}),ht(r).on("keydown",function(e){var i;function t(t,e,n,r,o){t.stopPropagation(),t.preventDefault(),c(i,n,r,o)}switch(Y.each(a,function(t){if(e.target.id===u+"-"+t.name)return i=t,!1}),e.keyCode){case gt.LEFT:t(e,0,l,-10,0);break;case gt.RIGHT:t(e,0,l,10,0);break;case gt.UP:t(e,0,l,0,-10);break;case gt.DOWN:t(e,0,l,0,10);break;case gt.ENTER:case gt.SPACEBAR:e.preventDefault(),o()}}),f=Y.extend({toggleVisibility:function(t){var e;e=Y.map(a,function(t){return"#"+u+"-"+t.name}).concat(Y.map(i,function(t){return"#"+u+"-"+t})).join(","),t?ht(e,r).show():ht(e,r).hide()},setClampRect:function(t){s=t,h(l)},setRect:p,getInnerRect:function(){return d(s,l)},setInnerRect:g,setViewPortRect:function(t){n=t,h(l)},destroy:function(){Y.each(t,function(t){t.destroy()}),t=[]}},pt)}(t,r.state.get("viewRect"),r.state.get("viewRect"),r.getEl(),function(){r.fire("crop")}),r.cropRect.on("updateRect",function(t){var e=t.rect,n=r.zoom();e={x:Math.round(e.x/n),y:Math.round(e.y/n),w:Math.round(e.w/n),h:Math.round(e.h/n)},r.state.set("rect",e)}),r.on("remove",r.cropRect.destroy)}r.state.on("change:cropEnabled",function(t){r.cropRect.toggleVisibility(t.value),r.repaintImage()}),r.state.on("change:zoom",function(){r.repaintImage()}),r.state.on("change:rect",function(t){var e=t.value;r.cropRect||n(e),r.cropRect.setRect(e)})}}))(t)}};function yt(t){return{blob:t,url:it.createObjectURL(t)}}function bt(t){t&&it.revokeObjectURL(t.url)}function wt(t){Y.each(t,bt)}function xt(i,a,t,e){var u,n,r,c,o,l,s,f,d,h,p,g,m,v,y,b,w,x,R,I,T,k,C,B,j,A,U,M=function(){var n=[],r=-1;function t(){return 0<r}function e(){return-1!==r&&r<n.length-1}return{data:n,add:function(t){var e;return e=n.splice(++r),n.push(t),{state:t,removed:e}},undo:function(){if(t())return n[--r]},redo:function(){if(e())return n[++r]},canUndo:t,canRedo:e}}(),O=function(t){return i.rtl?t.reverse():t};function z(t){var e,n,r,o;e=u.find("#w")[0],n=u.find("#h")[0],r=parseInt(e.value(),10),o=parseInt(n.value(),10),u.find("#constrain")[0].checked()&&B&&j&&r&&o&&("w"===t.control.settings.name?(o=Math.round(r*A),n.value(o)):(r=Math.round(o*U),e.value(r))),B=r,j=o}function D(t){return Math.round(100*t)+"%"}function S(){u.find("#undo").disabled(!M.canUndo()),u.find("#redo").disabled(!M.canRedo()),u.statusbar.find("#save").disabled(!M.canUndo())}function E(){u.find("#undo").disabled(!0),u.find("#redo").disabled(!0)}function _(t){t&&f.imageSrc(t.url)}function L(e){return function(){var t=Y.grep(C,function(t){return t.settings.name!==e});Y.each(t,function(t){t.hide()}),e.show(),e.focus()}}function H(t){_(c=yt(t))}function F(t){_(a=yt(t)),wt(M.add(a).removed),S()}function P(){var e=f.selection();rt.blobToImageResult(a.blob).then(function(t){et.crop(t,e.x,e.y,e.w,e.h).then($).then(function(t){F(t),V()})})}var W=function(e){var n=[].slice.call(arguments,1);return function(){var t=c||a;rt.blobToImageResult(t.blob).then(function(t){e.apply(this,[t].concat(n)).then($).then(H)})}};function V(){_(a),bt(c),L(n)(),S()}function N(){c?(F(c.blob),V()):function t(e,n){c?n():setTimeout(function(){0<e--?t(e,n):i.windowManager.alert("Error: failed to apply image operation.")},10)}(100,N)}function q(t){return st.create("Form",{layout:"flex",direction:"row",labelGap:5,border:"0 0 1 0",align:"center",pack:"center",padding:"0 10 0 10",spacing:5,flex:0,minHeight:60,defaults:{classes:"imagetool",type:"button"},items:t})}var $=function(t){return t.toBlob()};function X(t,e){return q(O([{text:"Back",onclick:V},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:N}])).hide().on("show",function(){E(),rt.blobToImageResult(a.blob).then(function(t){return e(t)}).then($).then(function(t){var e=yt(t);_(e),bt(c),c=e})})}function G(t,n,e,r,o){return q(O([{text:"Back",onclick:V},{type:"spacer",flex:1},{type:"slider",flex:1,ondragend:function(t){var e;e=t.value,rt.blobToImageResult(a.blob).then(function(t){return n(t,e)}).then($).then(function(t){var e=yt(t);_(e),bt(c),c=e})},minValue:i.rtl?o:r,maxValue:i.rtl?r:o,value:e,previewFilter:D},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:N}])).hide().on("show",function(){this.find("slider").value(e),E()})}o=q(O([{text:"Back",onclick:V},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:P}])).hide().on("show hide",function(t){f.toggleCropRect("show"===t.type)}).on("show",E),l=q(O([{text:"Back",onclick:V},{type:"spacer",flex:1},{type:"textbox",name:"w",label:"Width",size:4,onkeyup:z},{type:"textbox",name:"h",label:"Height",size:4,onkeyup:z},{type:"checkbox",name:"constrain",text:"Constrain proportions",checked:!0,onchange:function(t){!0===t.control.value()&&(A=j/B,U=B/j)}},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:"submit"}])).hide().on("submit",function(t){var e=parseInt(u.find("#w").value(),10),n=parseInt(u.find("#h").value(),10);t.preventDefault(),function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=[].slice.call(arguments,1);return function(){rt.blobToImageResult(a.blob).then(function(t){e.apply(this,[t].concat(r)).then($).then(F)})}}(et.resize,e,n)(),V()}).on("show",E),s=q(O([{text:"Back",onclick:V},{type:"spacer",flex:1},{icon:"fliph",tooltip:"Flip horizontally",onclick:W(et.flip,"h")},{icon:"flipv",tooltip:"Flip vertically",onclick:W(et.flip,"v")},{icon:"rotateleft",tooltip:"Rotate counterclockwise",onclick:W(et.rotate,-90)},{icon:"rotateright",tooltip:"Rotate clockwise",onclick:W(et.rotate,90)},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:N}])).hide().on("show",E),p=X(0,et.invert),R=X(0,et.sharpen),I=X(0,et.emboss),g=G(0,et.brightness,0,-1,1),m=G(0,et.hue,180,0,360),v=G(0,et.saturate,0,-1,1),y=G(0,et.contrast,0,-1,1),b=G(0,et.grayscale,0,0,1),w=G(0,et.sepia,0,0,1),x=function(t,o){function e(){var e,n,r;e=u.find("#r")[0].value(),n=u.find("#g")[0].value(),r=u.find("#b")[0].value(),rt.blobToImageResult(a.blob).then(function(t){return o(t,e,n,r)}).then($).then(function(t){var e=yt(t);_(e),bt(c),c=e})}var n=i.rtl?2:0,r=i.rtl?0:2;return q(O([{text:"Back",onclick:V},{type:"spacer",flex:1},{type:"slider",label:"R",name:"r",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:D},{type:"slider",label:"G",name:"g",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:D},{type:"slider",label:"B",name:"b",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:D},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:N}])).hide().on("show",function(){u.find("#r,#g,#b").value(1),E()})}(0,et.colorize),T=G(0,et.gamma,0,-1,1),k=G(0,et.exposure,1,0,2),r=q(O([{text:"Back",onclick:V},{type:"spacer",flex:1},{text:"hue",icon:"hue",onclick:L(m)},{text:"saturate",icon:"saturate",onclick:L(v)},{text:"sepia",icon:"sepia",onclick:L(w)},{text:"emboss",icon:"emboss",onclick:L(I)},{text:"exposure",icon:"exposure",onclick:L(k)},{type:"spacer",flex:1}])).hide(),n=q(O([{tooltip:"Crop",icon:"crop",onclick:L(o)},{tooltip:"Resize",icon:"resize2",onclick:L(l)},{tooltip:"Orientation",icon:"orientation",onclick:L(s)},{tooltip:"Brightness",icon:"sun",onclick:L(g)},{tooltip:"Sharpen",icon:"sharpen",onclick:L(R)},{tooltip:"Contrast",icon:"contrast",onclick:L(y)},{tooltip:"Color levels",icon:"drop",onclick:L(x)},{tooltip:"Gamma",icon:"gamma",onclick:L(T)},{tooltip:"Invert",icon:"invert",onclick:L(p)}])),f=vt.create({flex:1,imageSrc:a.url}),d=st.create("Container",{layout:"flex",direction:"column",pack:"start",border:"0 1 0 0",padding:5,spacing:5,items:[{type:"button",icon:"undo",tooltip:"Undo",name:"undo",onclick:function(){_(a=M.undo()),S()}},{type:"button",icon:"redo",tooltip:"Redo",name:"redo",onclick:function(){_(a=M.redo()),S()}},{type:"button",icon:"zoomin",tooltip:"Zoom in",onclick:function(){var t=f.zoom();t<2&&(t+=.1),f.zoom(t)}},{type:"button",icon:"zoomout",tooltip:"Zoom out",onclick:function(){var t=f.zoom();.1<t&&(t-=.1),f.zoom(t)}}]}),h=st.create("Container",{type:"container",layout:"flex",direction:"row",align:"stretch",flex:1,items:O([d,f])}),C=[n,o,l,s,r,p,g,m,v,y,b,w,x,R,I,T,k],(u=i.windowManager.open({layout:"flex",direction:"column",align:"stretch",minWidth:Math.min(lt.DOM.getViewPort().w,800),minHeight:Math.min(lt.DOM.getViewPort().h,650),title:"Edit image",items:C.concat([h]),buttons:O([{text:"Save",name:"save",subtype:"primary",onclick:function(){t(a.blob),u.close()}},{text:"Cancel",onclick:"close"}])})).on("close",function(){e(),wt(M.data),c=M=null}),M.add(a),S(),f.on("load",function(){B=f.imageSize().w,j=f.imageSize().h,A=j/B,U=B/j,u.find("#w").value(B),u.find("#h").value(j)}),f.on("crop",P)}var Rt={edit:function(r,t){return new ut(function(e,n){return t.toBlob().then(function(t){xt(r,yt(t),e,n)})})}},It={getImageSize:function(t){var e,n;function r(t){return/^[0-9\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?r(e)&&r(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)},setImageSize:function(t,e){var n,r;e&&(n=t.style.width,r=t.style.height,(n||r)&&(t.style.width=e.w+"px",t.style.height=e.h+"px",t.removeAttribute("data-mce-style")),n=t.width,r=t.height,(n||r)&&(t.setAttribute("width",e.w),t.setAttribute("height",e.h)))},getNaturalImageSize:function(t){return{w:t.naturalWidth,h:t.naturalHeight}}},Tt=function(e){return function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"===e&&Array.prototype.isPrototypeOf(t)?"array":"object"===e&&String.prototype.isPrototypeOf(t)?"string":e}(t)===e}},kt={isString:Tt("string"),isObject:Tt("object"),isArray:Tt("array"),isNull:Tt("null"),isBoolean:Tt("boolean"),isUndefined:Tt("undefined"),isFunction:Tt("function"),isNumber:Tt("number")},Ct=(Array.prototype.indexOf,undefined,Array.prototype.push,Array.prototype.slice,kt.isFunction(Array.from)&&Array.from,function(t,e){for(var n=0,r=t.length;n<r;n++){var o=t[n];if(e(o,n,t))return R.some(o)}return R.none()});function Bt(){return new(C.getOrDie("XMLHttpRequest"))}var jt=function(t){return null!==t&&t!==undefined},At=function(t,e){var n;return n=e.reduce(function(t,e){return jt(t)?t[e]:undefined},t),jt(n)?n:null},Ut=function(e){return new ut(function(n){var t=new B;t.onload=function(t){var e=t.target;n(e.result)},t.readAsText(e)})},Mt=function(e,r,o){return new ut(function(t){var n;(n=new Bt).onreadystatechange=function(){4===n.readyState&&t({status:n.status,blob:this.response})},n.open("GET",e,!0),n.withCredentials=o,Y.each(r,function(t,e){n.setRequestHeader(e,t)}),n.responseType="blob",n.send()})},Ot=function(t){var e;try{e=JSON.parse(t)}catch(n){}return e},zt=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],Dt=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],St=function(e){return"ImageProxy HTTP error: "+Ct(zt,function(t){return e===t.code}).fold(m.constant("Unknown ImageProxy error"),function(t){return t.message})},Et=function(t){var e=St(t);return ut.reject(e)},_t=function(e){return Ct(Dt,function(t){return t.type===e}).fold(m.constant("Unknown service error"),function(t){return t.message})},Lt=function(t,e){return Ut(e).then(function(t){var e,n,r=(e=Ot(t),"ImageProxy Service error: "+((n=At(e,["error","type"]))?_t(n):"Invalid JSON in service error message"));return ut.reject(r)})},Ht=function(t,e){return 400===(n=t)||403===n||500===n?Lt(0,e):Et(t);var n},Ft=Et,Pt=function(t,e){var n,r,o,i={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e};return Mt((n=t,r=e,o=-1===n.indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)||!r?n:n+o+"apiKey="+encodeURIComponent(r)),i,!1).then(function(t){return t.status<200||300<=t.status?Ht(t.status,t.blob):ut.resolve(t.blob)})},Wt=function(t,e,n){return e?Pt(t,e):Mt(t,{},n).then(function(t){return t.status<200||300<=t.status?Ft(t.status):ut.resolve(t.blob)})},Vt=0,Nt=function(t,e){t.notificationManager.open({text:e,type:"error"})},qt=function(t){return t.selection.getNode()},$t=function(t,e){var n=e.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new ct(n).host===t.documentBaseURI.host},Xt=function(t,e){return-1!==Y.inArray(t.getParam("imagetools_cors_hosts",[],"string[]"),new ct(e.src).host)},Gt=function(t,e){var n,r,o,i,a=e.src;return Xt(t,e)?Wt(e.src,null,(r=t,o=e,-1!==Y.inArray(r.getParam("imagetools_credentials_hosts",[],"string[]"),new ct(o.src).host))):$t(t,e)?E(e):(a=t.getParam("imagetools_proxy"),a+=(-1===a.indexOf("?")?"?":"&")+"url="+encodeURIComponent(e.src),n=(i=t).getParam("api_key",i.getParam("imagetools_api_key","","string"),"string"),Wt(a,n,!1))},Yt=function(t){var e;return(e=t.editorUpload.blobCache.getByUri(qt(t).src))?ut.resolve(e.blob()):Gt(t,qt(t))},Kt=function(t){clearTimeout(t.get())},Jt=function(c,l,s,f,d){return l.toBlob().then(function(t){var e,n,r,o,i,a,u;return r=c.editorUpload.blobCache,e=(i=qt(c)).src,c.getParam("images_reuse_filename",!1,"boolean")&&((o=r.getByUri(e))?(e=o.uri(),n=o.name()):(a=c,n=(u=e.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?a.dom.encode(u[1]):null)),o=r.create({id:"imagetools"+Vt++,blob:t,base64:l.toBase64(),uri:e,name:n}),r.add(o),c.undoManager.transact(function(){c.$(i).on("load",function t(){var e,n,r;c.$(i).off("load",t),c.nodeChanged(),s?c.editorUpload.uploadImagesAuto():(Kt(f),e=c,n=f,r=at.setEditorTimeout(e,function(){e.editorUpload.uploadImagesAuto()},e.getParam("images_upload_timeout",3e4,"number")),n.set(r))}),d&&c.$(i).attr({width:d.w,height:d.h}),c.$(i).attr({src:o.blobUri()}).removeAttr("data-mce-src")}),o})},Zt=function(e,n,t,r){return function(){return e._scanForImages().then(m.curry(Yt,e)).then(rt.blobToImageResult).then(t).then(function(t){return Jt(e,t,!1,n,r)},function(t){Nt(e,t)})}},Qt=function(n,r,o){return function(){var t=It.getImageSize(qt(n)),e=t?{w:t.h,h:t.w}:null;return Zt(n,r,function(t){return et.rotate(t,o)},e)()}},te=function(t,e,n){return function(){return Zt(t,e,function(t){return et.flip(t,n)})()}},ee=function(e,r){return function(){var o=qt(e),i=It.getNaturalImageSize(o),n=function(r){return new ut(function(n){S(r).then(function(t){var e=It.getNaturalImageSize(t);i.w===e.w&&i.h===e.h||It.getImageSize(o)&&It.setImageSize(o,e),it.revokeObjectURL(t.src),n(r)})})};Yt(e).then(rt.blobToImageResult).then(m.curry(function(e,t){return Rt.edit(e,t).then(n).then(rt.blobToImageResult).then(function(t){return Jt(e,t,!0,r)},function(){})},e),function(t){Nt(e,t)})}},ne=function(t,e){return t.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")&&($t(t,e)||Xt(t,e)||t.settings.imagetools_proxy)},re=Kt,oe=function(n,t){Y.each({mceImageRotateLeft:Qt(n,t,-90),mceImageRotateRight:Qt(n,t,90),mceImageFlipVertical:te(n,t,"v"),mceImageFlipHorizontal:te(n,t,"h"),mceEditImage:ee(n,t)},function(t,e){n.addCommand(e,t)})},ie=function(n,r,o){n.on("NodeChange",function(t){var e=o.get();e&&e.src!==t.element.src&&(re(r),n.editorUpload.uploadImagesAuto(),o.set(null)),ne(n,t.element)&&o.set(t.element)})},ae=function(t){t.addButton("rotateleft",{title:"Rotate counterclockwise",cmd:"mceImageRotateLeft"}),t.addButton("rotateright",{title:"Rotate clockwise",cmd:"mceImageRotateRight"}),t.addButton("flipv",{title:"Flip vertically",cmd:"mceImageFlipVertical"}),t.addButton("fliph",{title:"Flip horizontally",cmd:"mceImageFlipHorizontal"}),t.addButton("editimage",{title:"Edit image",cmd:"mceEditImage"}),t.addButton("imageoptions",{title:"Image options",icon:"options",cmd:"mceImage"})},ue=function(t){t.addContextToolbar(m.curry(ne,t),t.getParam("imagetools_toolbar","rotateleft rotateright | flipv fliph | crop editimage imageoptions"))};t.add("imagetools",function(t){var e=r(0),n=r(null);oe(t,e),ae(t),ue(t),ie(t,e,n)})}();