(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/close.506c8461.svg"},31:function(e,t,n){e.exports=n.p+"static/media/hamburger.efabf306.svg"},33:function(e){e.exports={terms:["barley","brewer\u2019s yeast","durum","emmer","farina","farro","graham","malt","rye","semolina","spelt","triticale","wheat","wheatberries"]}},34:function(e,t,n){e.exports=n.p+"static/media/label-gluten-1.66f26d62.png"},35:function(e,t,n){e.exports=n.p+"static/media/label-gluten-2.b3b2f176.png"},36:function(e,t,n){e.exports=n.p+"static/media/label-gluten-free-1.0a8c7d62.jpg"},37:function(e,t,n){e.exports=n.p+"static/media/label-gluten-free-2.863a2528.jpg"},41:function(e,t,n){e.exports=n(57)},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),i=n(5),u=n(6),l=n(10),s=n(9),f=n(11),d=n(60),m=n(62),p=n(59),h=n(63),v=n(2),b=n(3),g=n(38);function O(){var e=Object(v.a)(["\n\tposition: fixed;\n\tleft: calc(50% - 2.5rem);\n\tbottom: 2rem;\n\tbackground-color: rgba(254, 254, 254, 0.6);\n\theight: 5rem;\n\twidth: 5rem;\n\tborder: 0.25rem solid lightgray;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tcursor: pointer;\n\tz-index: var(--z-index-capture-button);\n"]);return O=function(){return e},e}var j=b.a.button(O());function w(){var e=Object(v.a)(["\n\theight: 100vh;\n\twidth: 100vw;\n"]);return w=function(){return e},e}var E=b.a.div(w()),y=Object.freeze({HOME:"/",RESULTS:"/results",TEST:"/test-data"});function k(){var e=Object(v.a)(["\n    display: none;\n    height: 100vh;\n    width: 100vw;\n"]);return k=function(){return e},e}function x(){var e=Object(v.a)(["\n    height: 100vh;\n    width: 100vw;\n    object-fit: cover;\n"]);return x=function(){return e},e}var C=b.a.video(x()),R=b.a.canvas(k()),T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).canvasRef=a.a.createRef(),n.videoRef=a.a.createRef(),n.setupCamera=function(){navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}}}).then(function(e){return n.stream=e}).then(function(){n.videoRef.current.srcObject=n.stream,n.videoRef.current.play()}).catch(function(e){return console.error(e)})},n.takedownCamera=function(){if(n.stream){var e=n.stream.getTracks();Object(g.a)(e,1)[0].stop()}},n.takePhoto=function(){var e=n.props.history.push,t=n.videoRef.current,r=t.videoHeight,a=t.videoWidth,o=n.canvasRef.current.getContext("2d");n.canvasRef.current.width=a,n.canvasRef.current.height=r,o.drawImage(n.videoRef.current,0,0,a,r);var c={image:n.canvasRef.current.toDataURL("image/png")};e(y.RESULTS,c)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setupCamera()}},{key:"componentWillUnmount",value:function(){this.takedownCamera()}},{key:"render",value:function(){return a.a.createElement(E,null,a.a.createElement(j,{onClick:this.takePhoto},"Take Photo"),a.a.createElement(C,{ref:this.videoRef}),a.a.createElement(R,{ref:this.canvasRef}))}}]),t}(r.Component),P=Object(h.a)(T),S=n(1),D=n.n(S),M=n(29),U=n(58),F=n(30),L=n.n(F);function z(){var e=Object(v.a)(["\n    display: flex;\n    align-items: center;\n    height: 3rem;\n    cursor: pointer;\n"]);return z=function(){return e},e}function H(){var e=Object(v.a)(["\n    height: 2rem;\n    width: 2rem;\n"]);return H=function(){return e},e}function _(){var e=Object(v.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);return _=function(){return e},e}function J(){var e=Object(v.a)(["\n    display: ",";\n    flex-flow: column nowrap;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--color-white);\n    padding: 1rem;\n    height: 100%;\n    width: 60%;\n    z-index: var(--z-index-menu);\n"]);return J=function(){return e},e}var B=b.a.div(J(),function(e){return e.visible?"flex":"none"});B.propTypes={visible:D.a.bool},B.defaultProps={visible:!1};var A=b.a.div(_());A.CloseButton=b.a.img(H());var G=Object(b.a)(U.a)(z()),W=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).handleClickOutside=function(e){return n.props.closeFn()},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.closeFn,n=e.open;return a.a.createElement(B,{visible:n},a.a.createElement(A,null,a.a.createElement(A.CloseButton,{src:L.a,alt:"Close",onClick:t})),a.a.createElement(G,{to:y.TEST},"Test Data"))}}]),t}(r.Component);W.defaultProps={closeFn:function(){},open:!1};var I=Object(M.a)(W),N=n(31),q=n.n(N);function V(){var e=Object(v.a)(["\n    color: var(--color-white);\n    position: fixed;\n    top: 1rem;\n    right: 1rem;\n    z-index: var(--z-index-menu-button);\n    cursor: pointer;\n"]);return V=function(){return e},e}var $=b.a.img(V()),K=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={menuOpen:!1},n.openMenu=function(){return n.setState({menuOpen:!0})},n.closeMenu=function(){return n.setState({menuOpen:!1})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.menuOpen;return a.a.createElement(E,null,a.a.createElement(P,null),!e&&a.a.createElement($,{src:q.a,alt:"Menu",onClick:this.openMenu}),a.a.createElement(I,{open:e,closeFn:this.closeMenu}))}}]),t}(r.Component);function Q(){var e=Object(v.a)(["\n\tborder: 0.75rem solid #E0E0E0; \n\tborder-top: 0.75rem solid var(--color-sea-buckthorn);\n\tborder-radius: 50%;\n\twidth: 3rem;\n\theight: 3rem;\n\tanimation: "," 2s linear infinite;\n"]);return Q=function(){return e},e}function X(){var e=Object(v.a)(["\n\t0% { \n\t\ttransform: rotate(0deg); \n\t}\n\n\t100% { \n\t\ttransform: rotate(360deg); \n\t}\n"]);return X=function(){return e},e}var Y=Object(b.b)(X()),Z=b.a.div(Q(),Y),ee=n(32),te=n.n(ee),ne=n(33),re=new(function(){function e(){var t=this;Object(i.a)(this,e),this._configureLibrary=function(){var e=t._getConfig();t._tesseract=te.a.create(e)},this._getConfig=function(){return console.log(window.location,Object({NODE_ENV:"production",PUBLIC_URL:"/glut-in"})),{workerPath:"".concat(window.location.origin,"/tesseract/worker.js"),langPath:"".concat(window.location.origin,"/tesseract/lang/"),corePath:"".concat(window.location.origin,"/tesseract/core.js")}},this._configureLibrary()}return Object(u.a)(e,[{key:"startDetection",value:function(e){return this._tesseract.recognize(e)}},{key:"detect",value:function(e){var t=e.toLowerCase(),n=ne.terms;console.debug({text:t,terms:n});var r=function(e){return t.includes(e)};return new Promise(function(e,t){return n.some(r)?e():t()})}}]),e}());function ae(){var e=Object(v.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    color: blue;\n"]);return ae=function(){return e},e}function oe(){var e=Object(v.a)(["\n    background-image: ",";\n    background-position: center center;\n\tbackground-size: cover;\n\tfilter: grayscale(100%);\n"]);return oe=function(){return e},e}function ce(){var e=Object(v.a)(["\n    position: fixed;\n    top: 1rem;\n    left: 1rem;\n"]);return ce=function(){return e},e}var ie=Object(b.a)(Z)(ce()),ue=Object(b.a)(E)(oe(),function(e){var t=e.background;return"url(".concat(t,")")}),le=b.a.h1(ae());ue.propTypes={background:D.a.string.isRequired};var se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={inProgress:!1,completed:!1,detected:null},n.onProgressUpdate=function(e){n.setState(function(e){return e.inProgress?null:{inProgress:!0}})},n.onJobComplete=function(e){n.setState({inProgress:!1}),console.log({result:e}),re.detect(e.text).then(n.detectedHandler,n.notDetectedHandler)},n.detectedHandler=function(){n.setState({completed:!0,detected:!0})},n.notDetectedHandler=function(){n.setState({completed:!0,detected:!1})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.startDetection()}},{key:"startDetection",value:function(){var e=this.props.location.state.image;this.recognitionJob=re.startDetection(e),this.recognitionJob.progress(this.onProgressUpdate),this.recognitionJob.then(this.onJobComplete)}},{key:"render",value:function(){var e=this.props.location.state.image,t=this.state,n=t.inProgress,o=t.completed,c=t.detected;return a.a.createElement(r.Fragment,null,a.a.createElement(ue,{background:e}),n&&a.a.createElement(ie,null),o&&a.a.createElement(le,null,c?"Contains Gluten":"Gluten-Free"))}}]),t}(r.Component),fe=Object(h.a)(se),de=n(34),me=n.n(de),pe=n(35),he=n.n(pe),ve=n(36),be=n.n(ve),ge=n(37),Oe=n.n(ge),je=[me.a,he.a],we=[be.a,Oe.a];function Ee(){var e=Object(v.a)(["\n    width: 100%;\n    max-height: 5rem;\n    object-fit: cover;\n    cursor: pointer;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: 1fr;\n    grid-column-gap: 1rem;\n    grid-row-gap: 1rem;\n    align-items: stretch;\n"]);return ye=function(){return e},e}function ke(){var e=Object(v.a)([""]);return ke=function(){return e},e}function xe(){var e=Object(v.a)(["\n    padding: 1rem;\n"]);return xe=function(){return e},e}var Ce=b.a.div(xe()),Re=b.a.h1(ke()),Te=b.a.div(ye()),Pe=b.a.img(Ee()),Se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).sendDataForTest=function(e){var t={image:e};(0,n.props.history.push)(y.RESULTS,t)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(Ce,null,a.a.createElement(Re,null,"Gluten"),a.a.createElement(Te,null,je.map(function(t,n){return a.a.createElement(Pe,{key:n,src:t,onClick:function(){return e.sendDataForTest(t)}})})),a.a.createElement(Re,null,"Gluten-Free"),a.a.createElement(Te,null,we.map(function(t,n){return a.a.createElement(Pe,{key:n,src:t,onClick:function(){return e.sendDataForTest(t)}})})))}}]),t}(r.Component),De=Object(h.a)(Se),Me=n(61),Ue=function(){return a.a.createElement(Me.a,{from:"*",to:y.HOME})},Fe=n(39),Le=function(e){var t=e.component,n=Object(Fe.a)(e,["component"]);return a.a.createElement(p.a,Object.assign({},n,{render:function(e){return function(e){var t=e.location,n=(t=void 0===t?{}:t).state,r=(n=void 0===n?{}:n).image;return Boolean(r)}(e)?a.a.createElement(t,e):a.a.createElement(Ue,null)}}))},ze=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement(p.a,{exact:!0,path:y.HOME,component:K}),a.a.createElement(Le,{path:y.RESULTS,component:fe}),a.a.createElement(p.a,{path:y.TEST,component:De}),a.a.createElement(Ue,null))}}]),t}(r.Component),He=Object(h.a)(ze),_e=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,{basename:"/glut-in"},a.a.createElement(He,null))}}]),t}(r.Component);n(55),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=document.getElementById("root");c.a.render(a.a.createElement(_e,null),Je),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.e2b6eb00.chunk.js.map