(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n.p+"static/media/close.506c8461.svg"},31:function(t,e,n){t.exports=n.p+"static/media/hamburger.efabf306.svg"},33:function(t){t.exports={terms:["barley","brewer\u2019s yeast","durum","emmer","farina","farro","graham","malt","rye","semolina","spelt","triticale","wheat","wheatberries"]}},34:function(t,e,n){t.exports=n.p+"static/media/logo.238f9059.png"},35:function(t,e,n){t.exports=n.p+"static/media/label-gluten-1.66f26d62.png"},36:function(t,e,n){t.exports=n.p+"static/media/label-gluten-2.b3b2f176.png"},37:function(t,e,n){t.exports=n.p+"static/media/label-gluten-free-1.0a8c7d62.jpg"},38:function(t,e,n){t.exports=n.p+"static/media/label-gluten-free-2.863a2528.jpg"},42:function(t,e,n){t.exports=n(59)},56:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),i=n(5),u=n(6),l=n(10),s=n(9),f=n(11),m=n(62),d=n(64),p=n(61),h=n(65),v=n(2),b=n(3),g=n(39);function O(){var t=Object(v.a)(["\n\tposition: fixed;\n\tleft: calc(50% - 2.5rem);\n\tbottom: 2rem;\n\tbackground-color: rgba(254, 254, 254, 0.6);\n\theight: 5rem;\n\twidth: 5rem;\n\tborder: 0.25rem solid lightgray;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tcursor: pointer;\n\tz-index: var(--z-index-capture-button);\n"]);return O=function(){return t},t}var j=b.a.button(O());function y(){var t=Object(v.a)(["\n\theight: 100vh;\n\twidth: 100vw;\n"]);return y=function(){return t},t}var w=b.a.div(y()),E=Object.freeze({HOME:"/",RESULTS:"/results",TEST:"/test-data"});function k(){var t=Object(v.a)(["\n    display: none;\n    height: 100vh;\n    width: 100vw;\n"]);return k=function(){return t},t}function x(){var t=Object(v.a)(["\n    height: 100vh;\n    width: 100vw;\n    object-fit: cover;\n"]);return x=function(){return t},t}var S=b.a.video(x()),C=b.a.canvas(k()),T=function(t){function e(){var t,n;Object(i.a)(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).canvasRef=a.a.createRef(),n.videoRef=a.a.createRef(),n.setupCamera=function(){navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}}}).then(function(t){return n.stream=t}).then(function(){n.videoRef.current.srcObject=n.stream,n.videoRef.current.play()}).catch(function(t){return console.error(t)})},n.takedownCamera=function(){if(n.stream){var t=n.stream.getTracks();Object(g.a)(t,1)[0].stop()}},n.takePhoto=function(){var t=n.props.history.push,e=n.videoRef.current,r=e.videoHeight,a=e.videoWidth,o=n.canvasRef.current.getContext("2d");n.canvasRef.current.width=a,n.canvasRef.current.height=r,o.drawImage(n.videoRef.current,0,0,a,r);var c={image:n.canvasRef.current.toDataURL("image/png")};t(E.RESULTS,c)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.setupCamera()}},{key:"componentWillUnmount",value:function(){this.takedownCamera()}},{key:"render",value:function(){return a.a.createElement(w,null,a.a.createElement(j,{onClick:this.takePhoto},"Take Photo"),a.a.createElement(S,{ref:this.videoRef}),a.a.createElement(C,{ref:this.canvasRef}))}}]),e}(r.Component),R=Object(h.a)(T),P=n(1),D=n.n(P),M=n(29),z=n(60),F=n(30),H=n.n(F);function U(){var t=Object(v.a)(["\n    display: flex;\n    align-items: center;\n    height: 3rem;\n    cursor: pointer;\n"]);return U=function(){return t},t}function L(){var t=Object(v.a)(["\n    height: 2rem;\n    width: 2rem;\n"]);return L=function(){return t},t}function J(){var t=Object(v.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);return J=function(){return t},t}function A(){var t=Object(v.a)(["\n    display: ",";\n    flex-flow: column nowrap;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--color-white);\n    padding: 1rem;\n    height: 100%;\n    width: 60%;\n    z-index: var(--z-index-menu);\n"]);return A=function(){return t},t}var _=b.a.div(A(),function(t){return t.visible?"flex":"none"});_.propTypes={visible:D.a.bool},_.defaultProps={visible:!1};var B=b.a.div(J());B.CloseButton=b.a.img(L());var G=Object(b.a)(z.a)(U()),W=function(t){function e(){var t,n;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).handleClickOutside=function(t){return n.props.closeFn()},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.closeFn,n=t.open;return a.a.createElement(_,{visible:n},a.a.createElement(B,null,a.a.createElement(B.CloseButton,{src:H.a,alt:"Close",onClick:e})),a.a.createElement(G,{to:E.TEST},"Test Data"))}}]),e}(r.Component);W.defaultProps={closeFn:function(){},open:!1};var I=Object(M.a)(W),q=n(31),$=n.n(q);function K(){var t=Object(v.a)(["\n    color: var(--color-white);\n    position: fixed;\n    top: 1rem;\n    right: 1rem;\n    z-index: var(--z-index-menu-button);\n    cursor: pointer;\n"]);return K=function(){return t},t}var N=b.a.img(K()),Q=function(t){function e(){var t,n;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={menuOpen:!1},n.openMenu=function(){return n.setState({menuOpen:!0})},n.closeMenu=function(){return n.setState({menuOpen:!1})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state.menuOpen;return a.a.createElement(w,null,a.a.createElement(R,null),!t&&a.a.createElement(N,{src:$.a,alt:"Menu",onClick:this.openMenu}),a.a.createElement(I,{open:t,closeFn:this.closeMenu}))}}]),e}(r.Component);function V(){var t=Object(v.a)(["\n\t0% { \n\t\ttransform: rotate(0deg); \n\t}\n\n\t100% { \n\t\ttransform: rotate(360deg); \n\t}\n"]);return V=function(){return t},t}function X(){var t=Object(v.a)(["\n\t0% { \n\t\topacity: 0;\n\t\ttransform: scale(10);\n\t}\n\n\t20% {\n\t\topacity: 1;\n\t}\n\n\t90% {\n\t\ttransform: scale(1);\n\t}\n\n\t95% {\n\t\ttransform: scale(1.25);\n\t}\n\n\t100% { \n\t\ttransform: scale(1);\n\t}\n"]);return X=function(){return t},t}function Y(){var t=Object(v.a)(["\n\t89% {\n\t\ttransform: rotate(0);\n\t}\n\n\t90% {\n\t\ttransform: rotate(-2deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(0);\n\t}\n"]);return Y=function(){return t},t}var Z=Object(b.b)(Y()),tt=Object(b.b)(X()),et=Object(b.b)(V());function nt(){var t=Object(v.a)(["\n\tborder: 0.75rem solid #E0E0E0; \n\tborder-top: 0.75rem solid var(--color-sea-buckthorn);\n\tborder-radius: 50%;\n\twidth: 3rem;\n\theight: 3rem;\n\tanimation: "," 2s linear infinite;\n"]);return nt=function(){return t},t}var rt=b.a.div(nt(),et),at=n(32),ot=n.n(at),ct=n(33),it=new(function(){function t(){var e=this;Object(i.a)(this,t),this._configureLibrary=function(){var t=e._getConfig();e._tesseract=ot.a.create(t)},this._getConfig=function(){var t="".concat(window.location.origin).concat("/glut-in");return{workerPath:"".concat(t,"/tesseract/worker.js"),langPath:"".concat(t,"/tesseract/lang/"),corePath:"".concat(t,"/tesseract/core.js")}},this._configureLibrary()}return Object(u.a)(t,[{key:"startDetection",value:function(t){return this._tesseract.recognize(t)}},{key:"detect",value:function(t){var e=t.toLowerCase(),n=ct.terms,r=function(t){return e.includes(t)};return new Promise(function(t,e){return n.some(r)?t():e()})}}]),t}());function ut(){var t=Object(v.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    color: blue;\n"]);return ut=function(){return t},t}function lt(){var t=Object(v.a)(["\n    background-image: ",";\n    background-position: center center;\n\tbackground-size: cover;\n\tfilter: grayscale(100%);\n"]);return lt=function(){return t},t}function st(){var t=Object(v.a)(["\n    position: fixed;\n    top: 1rem;\n    left: 1rem;\n"]);return st=function(){return t},t}var ft=Object(b.a)(rt)(st()),mt=Object(b.a)(w)(lt(),function(t){var e=t.background;return"url(".concat(e,")")}),dt=b.a.h1(ut());mt.propTypes={background:D.a.string.isRequired};var pt=function(t){function e(){var t,n;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={inProgress:!1,completed:!1,detected:null},n.onProgressUpdate=function(t){n.setState(function(t){return t.inProgress?null:{inProgress:!0}})},n.onJobComplete=function(t){n.setState({inProgress:!1}),it.detect(t.text).then(n.detectedHandler,n.notDetectedHandler)},n.detectedHandler=function(){n.setState({completed:!0,detected:!0})},n.notDetectedHandler=function(){n.setState({completed:!0,detected:!1})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.startDetection()}},{key:"startDetection",value:function(){var t=this.props.location.state.image;this.recognitionJob=it.startDetection(t),this.recognitionJob.progress(this.onProgressUpdate),this.recognitionJob.then(this.onJobComplete)}},{key:"render",value:function(){var t=this.props.location.state.image,e=this.state,n=e.inProgress,o=e.completed,c=e.detected;return a.a.createElement(r.Fragment,null,a.a.createElement(mt,{background:t}),n&&a.a.createElement(ft,null),o&&a.a.createElement(dt,null,c?"Contains Gluten":"Gluten-Free"))}}]),e}(r.Component),ht=Object(h.a)(pt),vt=n(34),bt=n.n(vt);function gt(){var t=Object(v.a)(["\n\tanimation: "," 1s linear;\n"]);return gt=function(){return t},t}function Ot(){var t=Object(v.a)(["\n\tdisplay: inline-block;\n\tcolor: var(--color-alabaster);\n\tfont-size: 4rem;\n\tfont-family: var(--font-family-title);\n\ttext-shadow: 1px 2px 0.5rem #414141;\n\tanimation: "," 1s linear;\n"]);return Ot=function(){return t},t}function jt(){var t=Object(v.a)([""]);return jt=function(){return t},t}function yt(){var t=Object(v.a)(["\n\theight: 12rem;\n\twidth: 12rem;\n\tborder-radius: 50%;\n\tbox-shadow: 0 5px 2rem var(--color-mine-shaft);\n"]);return yt=function(){return t},t}function wt(){var t=Object(v.a)(["\n\tdisplay: flex;\n\tflex-flow: column nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--color-sea-buckthorn);\n"]);return wt=function(){return t},t}var Et=Object(b.a)(w)(wt()),kt=b.a.img(yt()),xt=b.a.div(jt()),St=b.a.h1(Ot(),Z),Ct=Object(b.a)(St)(gt(),tt),Tt=function(){return a.a.createElement(Et,null,a.a.createElement(kt,{src:bt.a}),a.a.createElement(xt,null,a.a.createElement(St,null,"Glut-in"),a.a.createElement(Ct,null,"?")))},Rt=n(35),Pt=n.n(Rt),Dt=n(36),Mt=n.n(Dt),zt=n(37),Ft=n.n(zt),Ht=n(38),Ut=n.n(Ht),Lt=[Pt.a,Mt.a],Jt=[Ft.a,Ut.a];function At(){var t=Object(v.a)(["\n    width: 100%;\n    max-height: 5rem;\n    object-fit: cover;\n    cursor: pointer;\n"]);return At=function(){return t},t}function _t(){var t=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: 1fr;\n    grid-column-gap: 1rem;\n    grid-row-gap: 1rem;\n    align-items: stretch;\n"]);return _t=function(){return t},t}function Bt(){var t=Object(v.a)([""]);return Bt=function(){return t},t}function Gt(){var t=Object(v.a)(["\n    padding: 1rem;\n"]);return Gt=function(){return t},t}var Wt=b.a.div(Gt()),It=b.a.h1(Bt()),qt=b.a.div(_t()),$t=b.a.img(At()),Kt=function(t){function e(){var t,n;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).sendDataForTest=function(t){var e={image:t};(0,n.props.history.push)(E.RESULTS,e)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement(Wt,null,a.a.createElement(It,null,"Gluten"),a.a.createElement(qt,null,Lt.map(function(e,n){return a.a.createElement($t,{key:n,src:e,onClick:function(){return t.sendDataForTest(e)}})})),a.a.createElement(It,null,"Gluten-Free"),a.a.createElement(qt,null,Jt.map(function(e,n){return a.a.createElement($t,{key:n,src:e,onClick:function(){return t.sendDataForTest(e)}})})))}}]),e}(r.Component),Nt=Object(h.a)(Kt),Qt=n(63),Vt=function(){return a.a.createElement(Qt.a,{from:"*",to:E.HOME})},Xt=n(40),Yt=function(t){var e=t.component,n=Object(Xt.a)(t,["component"]);return a.a.createElement(p.a,Object.assign({},n,{render:function(t){return function(t){var e=t.location,n=(e=void 0===e?{}:e).state,r=(n=void 0===n?{}:n).image;return Boolean(r)}(t)?a.a.createElement(e,t):a.a.createElement(Vt,null)}}))},Zt=function(t){function e(){var t,n;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={showSplashScreen:!0},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.setSplashScreenTimeout()}},{key:"setSplashScreenTimeout",value:function(){var t=this,e=this.props.history.push;setTimeout(function(){t.setState({showSplashScreen:!1}),e(E.HOME)},3e3)}},{key:"render",value:function(){return this.state.showSplashScreen?a.a.createElement(Tt,null):a.a.createElement(d.a,null,a.a.createElement(p.a,{exact:!0,path:E.HOME,component:Q}),a.a.createElement(Yt,{path:E.RESULTS,component:ht}),a.a.createElement(p.a,{path:E.TEST,component:Nt}),a.a.createElement(Vt,null))}}]),e}(r.Component),te=Object(h.a)(Zt),ee=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(m.a,{basename:"/glut-in"},a.a.createElement(te,null))}}]),e}(r.Component);n(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=document.getElementById("root");c.a.render(a.a.createElement(ee,null),ne),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.936562fb.chunk.js.map