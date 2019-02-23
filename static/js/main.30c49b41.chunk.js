(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/camera-button.bae7d1a0.png"},22:function(e){e.exports={camera:{NotAllowedError:"You must grant camera access to use this application",OverconstrainedError:"Your device does not meet the requirements or camera permission has not been given",TypeError:"App has been misconfigured"}}},24:function(e,t,n){e.exports=n.p+"static/media/close.506c8461.svg"},25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA+QCxACk6SYUYAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wIWEjYNu7kCeQAAADdJREFUWMPt1LENACAMA7CA+v/FlWDiBRiwp26NMiSB341zdPe6+biqRpLM1w0IAHZAALADAgAbC8kMFhny4BwAAAAASUVORK5CYII="},26:function(e){e.exports={terms:["barley","brewer\u2019s yeast","durum","emmer","farina","farro","graham","malt","rye","semolina","spelt","triticale","wheat","wheatberries"]}},27:function(e,t,n){e.exports=n.p+"static/media/detected-logo.44cfcd7b.png"},28:function(e,t,n){e.exports=n.p+"static/media/not-detected-logo.c59074f5.png"},29:function(e,t,n){e.exports=n.p+"static/media/logo.ee870420.png"},30:function(e,t,n){e.exports=n.p+"static/media/label-gluten-1.66f26d62.png"},31:function(e,t,n){e.exports=n.p+"static/media/label-gluten-2.b3b2f176.png"},32:function(e,t,n){e.exports=n.p+"static/media/label-gluten-free-1.0a8c7d62.jpg"},33:function(e,t,n){e.exports=n.p+"static/media/label-gluten-free-2.863a2528.jpg"},37:function(e,t,n){e.exports=n(50)},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),i=n(35),u=n(3),s=n(4),l=n(6),f=n(5),d=n(7),m=n(1),v=n(2),p=n(34);function h(){var e=Object(m.a)(["\n\tposition: fixed;\n\tleft: calc(50% - 2.5rem);\n\tbottom: 2rem;\n\tcolor: var(--color-alabaster);\n\tbackground-color: var(--color-sea-buckthorn);\n\tfont-weight: bold;\n\theight: 5rem;\n\twidth: 5rem;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tcursor: pointer;\n\tz-index: var(--z-index-capture-button);\n\ttext-shadow: 1px 2px 0.5rem var(--color-tundora);\n"]);return h=function(){return e},e}var b=v.a.img(h());function g(){var e=Object(m.a)(["\n\theight: 100vh;\n\twidth: 100vw;\n"]);return g=function(){return e},e}var w=v.a.div(g());function O(){var e=Object(m.a)(["\n\tfont-size: 1.2rem;\n\ttext-align: center;\n\tpadding: 0 1rem;\n"]);return O=function(){return e},e}function j(){var e=Object(m.a)(["\n    font-size: 3rem;\n    font-family: var(--font-family-title);\n    margin-bottom: 0;\n"]);return j=function(){return e},e}function y(){var e=Object(m.a)(["\n    position: fixed;\n    top: 0;\n    color: var(--color-alabaster);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    padding-top: 10rem;\n"]);return y=function(){return e},e}var x=Object(v.a)(w)(y()),A=v.a.h1(j()),E=v.a.p(O()),k=function(e){var t=e.error,n=e.title;return a.a.createElement(x,null,a.a.createElement(A,null,n),a.a.createElement(E,null,t))};k.defaultProps={error:"An error occurred",title:"Uh Oh!"};var S=k,C=n(21),T=n.n(C),R=Object.freeze({HOME:"/",RESULTS:"/results",SPLASH:"/splash",TEST:"/test-data"}),D=Object.freeze({imageData:null,screen:R.SPLASH,setImageData:function(){},setScreen:function(){}}),P=Object.freeze({DEV:"development",PROD:"production"}),U=a.a.createContext(D),M=n(22);function z(){var e=Object(m.a)(["\n    display: none;\n    height: 100vh;\n    width: 100vw;\n"]);return z=function(){return e},e}function L(){var e=Object(m.a)(["\n    color: var(--color-alabaster);\n    background-color: var(--color-tundora);\n    height: 100vh;\n    width: 100vw;\n    object-fit: cover;\n"]);return L=function(){return e},e}var H=v.a.video(L()),W=v.a.canvas(z()),B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).canvasRef=a.a.createRef(),n.videoRef=a.a.createRef(),n.state={cameraSet:!1,error:null},n.setupCamera=function(){navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}}}).then(function(e){return n.stream=e}).then(function(){n.videoRef.current.srcObject=n.stream,n.videoRef.current.play()}).catch(n.errorHandler).finally(function(){return n.setState({cameraSet:!0})})},n.errorHandler=function(e){var t=e.name,r=M.camera;n.setState({error:r[t]}),n.takedownCamera()},n.takedownCamera=function(){if(n.stream){var e=n.stream.getTracks();Object(p.a)(e,1)[0].stop()}},n.takePhoto=function(){var e=n.context,t=e.setImageData,r=e.setScreen,a=n.videoRef.current,o=a.videoHeight,c=a.videoWidth,i=n.canvasRef.current.getContext("2d");n.canvasRef.current.width=c,n.canvasRef.current.height=o,i.drawImage(n.videoRef.current,0,0,c,o),t(n.canvasRef.current.toDataURL("image/png")),r(R.RESULTS)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setupCamera()}},{key:"componentWillUnmount",value:function(){this.takedownCamera()}},{key:"render",value:function(){var e=this.state,t=e.cameraSet,n=e.error,r=Boolean(this.stream),o=t&&!Boolean(this.stream);return a.a.createElement(w,null,r&&a.a.createElement(b,{src:T.a,alt:"Take Photo",onClick:this.takePhoto}),a.a.createElement(H,{ref:this.videoRef}),a.a.createElement(W,{ref:this.canvasRef}),o&&a.a.createElement(S,{error:n}))}}]),t}(r.Component);B.contextType=U;var F=B,I=n(9),J=n.n(I),N=n(23),Y=n(24),G=n.n(Y);function _(){var e=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    padding: 0 1rem;\n    height: 3rem;\n    cursor: pointer;\n"]);return _=function(){return e},e}function q(){var e=Object(m.a)(["\n    height: 2rem;\n    width: 2rem;\n"]);return q=function(){return e},e}function V(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 0 1rem;\n"]);return V=function(){return e},e}function K(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: var(--color-alabaster);\n    padding: 1rem 0;\n    height: 100%;\n    width: ",";\n    visibility: ",";\n    overflow-x: hidden;\n    transition: 0.5s;\n    z-index: var(--z-index-menu);\n    white-space: nowrap;\n    box-shadow: 0 0 5rem 0.5rem var(--color-mine-shaft);\n"]);return K=function(){return e},e}var Q=v.a.div(K(),function(e){return e.visible?"60%":"0"},function(e){return e.visible?"visible":"hidden"});Q.propTypes={visible:J.a.bool},Q.defaultProps={visible:!1};var X=v.a.div(V());X.CloseButton=v.a.img(q());var Z=v.a.p(_()),$=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).handleClickOutside=function(){return n.props.closeFn()},n.navigateToTestPage=function(){return n.context.setScreen(R.TEST)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.closeFn,n=e.open;return a.a.createElement(Q,{visible:n},a.a.createElement(X,null,a.a.createElement(X.CloseButton,{src:G.a,alt:"Close",onClick:t})),a.a.createElement(Z,{onClick:this.navigateToTestPage},"Test Data"))}}]),t}(r.Component);$.contextType=U,$.defaultProps={closeFn:function(){},open:!1};var ee=Object(N.a)($),te=n(25),ne=n.n(te);function re(){var e=Object(m.a)(["\n    color: var(--color-white);\n    position: fixed;\n    top: 1rem;\n    right: 1rem;\n    z-index: var(--z-index-menu-button);\n    cursor: pointer;\n"]);return re=function(){return e},e}var ae=v.a.img(re()),oe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={menuOpen:!1},n.openMenu=function(){return n.setState({menuOpen:!0})},n.closeMenu=function(){return n.setState({menuOpen:!1})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.menuOpen;return a.a.createElement(w,null,a.a.createElement(F,null),!e&&a.a.createElement(ae,{src:ne.a,alt:"Menu",onClick:this.openMenu}),a.a.createElement(ee,{open:e,closeFn:this.closeMenu}))}}]),t}(r.Component);function ce(){var e=Object(m.a)(["\n\t0% { \n\t\ttransform: rotate(0deg); \n\t}\n\n\t100% { \n\t\ttransform: rotate(360deg); \n\t}\n"]);return ce=function(){return e},e}function ie(){var e=Object(m.a)(["\n\t0% { \n\t\topacity: 0;\n\t\ttransform: scale(10);\n\t}\n\n\t20% {\n\t\topacity: 1;\n\t}\n\n\t90% {\n\t\ttransform: scale(1);\n\t}\n\n\t95% {\n\t\ttransform: scale(1.25);\n\t}\n\n\t100% { \n\t\ttransform: scale(1);\n\t}\n"]);return ie=function(){return e},e}function ue(){var e=Object(m.a)(["\n\t89% {\n\t\ttransform: rotate(0);\n\t}\n\n\t90% {\n\t\ttransform: rotate(-2deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(0);\n\t}\n"]);return ue=function(){return e},e}var se=Object(v.b)(ue()),le=Object(v.b)(ie()),fe=Object(v.b)(ce());function de(){var e=Object(m.a)(["\n\tborder: 0.75rem solid #E0E0E0; \n\tborder-top: 0.75rem solid var(--color-sea-buckthorn);\n\tborder-radius: 50%;\n\twidth: 3rem;\n\theight: 3rem;\n\tanimation: "," 2s linear infinite;\n"]);return de=function(){return e},e}var me=v.a.div(de(),fe),ve=n(13),pe=n.n(ve),he=n(26),be=new(function(){function e(){var t=this;Object(u.a)(this,e),this._configureLibrary=function(){t._tesseract=pe.a},this._getConfig=function(){var e="".concat(window.location.origin).concat(".");return{workerPath:"".concat(e,"/tesseract/worker.js"),langPath:"".concat(e,"/tesseract/lang/"),corePath:"".concat(e,"/tesseract/core.js")}},this._configureLibrary()}return Object(s.a)(e,[{key:"startDetection",value:function(e){return this._tesseract.recognize(e)}},{key:"detect",value:function(e){var t=e.toLowerCase(),n=he.terms,r=function(e){return t.includes(e)};return new Promise(function(e,t){return n.some(r)?e():t()})}}]),e}()),ge=n(27),we=n.n(ge),Oe=n(28),je=n.n(Oe);function ye(){var e=Object(m.a)(["\n    color: var(--color-alabaster);\n    font-size: 2.5rem;\n    font-family: var(--font-family-title);\n    font-weight: lighter;\n    text-shadow: ",";\n"]);return ye=function(){return e},e}function xe(){var e=Object(m.a)(["\n    height: 30vh;\n    width: 30vh;\n    border-radius: 50%;\n    box-shadow: 0 5px 2rem var(--color-alabaster);\n"]);return xe=function(){return e},e}function Ae(){var e=Object(m.a)(["\n    position: fixed;\n    top: 0;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n"]);return Ae=function(){return e},e}function Ee(){var e=Object(m.a)(["\n    background-image: ",";\n    background-position: center center;\n\tbackground-size: cover;\n\tfilter: grayscale(100%);\n"]);return Ee=function(){return e},e}function ke(){var e=Object(m.a)(["\n    position: fixed;\n    top: 1rem;\n    left: 1rem;\n"]);return ke=function(){return e},e}var Se=Object(v.a)(me)(ke()),Ce=Object(v.a)(w)(Ee(),function(e){var t=e.background;return"url(".concat(t,")")});Ce.propTypes={background:J.a.string.isRequired};var Te=v.a.div(Ae());Te.Icon=v.a.img(xe()),Te.Text=v.a.h1(ye(),function(e){return e.detected?"5px 5px 0.25rem var(--color-bright-red)":"5px 5px 0.25rem var(--color-olive-drab)"}),Te.Text.propTypes={detected:J.a.bool.isRequired};var Re=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={inProgress:!1,completed:!1,detected:null},n.onProgressUpdate=function(e){n.setState(function(e){return e.inProgress?null:{inProgress:!0}})},n.onJobComplete=function(e){n.setState({inProgress:!1}),be.detect(e.text).then(n.detectedHandler,n.notDetectedHandler)},n.detectedHandler=function(){n.setState({completed:!0,detected:!0})},n.notDetectedHandler=function(){n.setState({completed:!0,detected:!1})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.startDetection()}},{key:"startDetection",value:function(){var e=this.context.imageData;this.recognitionJob=be.startDetection(e),this.recognitionJob.progress(this.onProgressUpdate),this.recognitionJob.then(this.onJobComplete)}},{key:"render",value:function(){var e=this.context.imageData,t=this.state,n=t.inProgress,o=t.completed,c=t.detected;return a.a.createElement(r.Fragment,null,a.a.createElement(Ce,{background:e}),n&&a.a.createElement(Se,null),o&&a.a.createElement(Te,null,a.a.createElement(Te.Icon,{src:c?we.a:je.a}),a.a.createElement(Te.Text,{detected:c},c?"Contains Gluten":"Gluten-Free")))}}]),t}(r.Component);Re.contextType=U;var De=Re,Pe=n(29),Ue=n.n(Pe);function Me(){var e=Object(m.a)(["\n\tanimation: "," 1s linear;\n"]);return Me=function(){return e},e}function ze(){var e=Object(m.a)(["\n\tdisplay: inline-block;\n\tcolor: var(--color-alabaster);\n\tfont-size: 4rem;\n\tfont-family: var(--font-family-title);\n\ttext-shadow: 1px 2px 0.5rem var(--color-tundora);\n\tanimation: "," 1s linear;\n"]);return ze=function(){return e},e}function Le(){var e=Object(m.a)([""]);return Le=function(){return e},e}function He(){var e=Object(m.a)(["\n\theight: 12rem;\n\twidth: 12rem;\n\tborder-radius: 50%;\n\tbox-shadow: 0 5px 2rem var(--color-mine-shaft);\n"]);return He=function(){return e},e}function We(){var e=Object(m.a)(["\n\tdisplay: flex;\n\tflex-flow: column nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: var(--color-sea-buckthorn);\n"]);return We=function(){return e},e}var Be=Object(v.a)(w)(We()),Fe=v.a.img(He()),Ie=v.a.div(Le()),Je=v.a.h1(ze(),se),Ne=Object(v.a)(Je)(Me(),le),Ye=function(){return a.a.createElement(Be,null,a.a.createElement(Fe,{src:Ue.a}),a.a.createElement(Ie,null,a.a.createElement(Je,null,"Glut-in"),a.a.createElement(Ne,null,"?")))},Ge=n(30),_e=n.n(Ge),qe=n(31),Ve=n.n(qe),Ke=n(32),Qe=n.n(Ke),Xe=n(33),Ze=n.n(Xe),$e=[_e.a,Ve.a],et=[Qe.a,Ze.a];function tt(){var e=Object(m.a)(["\n    width: 100%;\n    max-height: 5rem;\n    object-fit: cover;\n    cursor: pointer;\n"]);return tt=function(){return e},e}function nt(){var e=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: 1fr;\n    grid-column-gap: 1rem;\n    grid-row-gap: 1rem;\n    align-items: stretch;\n"]);return nt=function(){return e},e}function rt(){var e=Object(m.a)([""]);return rt=function(){return e},e}function at(){var e=Object(m.a)(["\n    padding: 1rem;\n"]);return at=function(){return e},e}var ot=v.a.div(at()),ct=v.a.h1(rt()),it=v.a.div(nt()),ut=v.a.img(tt()),st=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).sendDataForTest=function(e){var t=n.context,r=t.setImageData,a=t.setScreen;r(e),a(R.RESULTS)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(ot,null,a.a.createElement(ct,null,"Gluten"),a.a.createElement(it,null,$e.map(function(t,n){return a.a.createElement(ut,{key:n,src:t,onClick:function(){return e.sendDataForTest(t)}})})),a.a.createElement(ct,null,"Gluten-Free"),a.a.createElement(it,null,et.map(function(t,n){return a.a.createElement(ut,{key:n,src:t,onClick:function(){return e.sendDataForTest(t)}})})))}}]),t}(r.Component);st.contextType=U;var lt=st,ft=function(e){switch(e.screen){case R.HOME:return a.a.createElement(oe,null);case R.RESULTS:return a.a.createElement(De,null);case R.SPLASH:return a.a.createElement(Ye,null);case R.TEST:return a.a.createElement(lt,null);default:return null}},dt=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state=Object(i.a)({},D,{setImageData:function(e){return n.setState({imageData:e})},setScreen:function(e){return n.setState({screen:e})}}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setSplashScreenTimeout()}},{key:"setSplashScreenTimeout",value:function(){var e=this;setTimeout(function(){return e.setState({screen:R.HOME})},3e3)}},{key:"render",value:function(){var e=this.state.screen;return a.a.createElement(U.Provider,{value:this.state},a.a.createElement(ft,{screen:e}))}}]),t}(r.Component),mt=(n(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function vt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var pt=document.getElementById("root");switch(c.a.render(a.a.createElement(dt,null),pt),"production"){case P.PROD:!function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");mt?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):vt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):vt(t,e)})}}();break;case P.DEV:default:"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}}},[[37,1,2]]]);
//# sourceMappingURL=main.30c49b41.chunk.js.map