(this["webpackJsonpthreejs-experiment-01"]=this["webpackJsonpthreejs-experiment-01"]||[]).push([[0],{22:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(5),u=n(7),i=n(3),s=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(0),n=Object(r.useState)(!1),o=Object(i.a)(n,2),c=o[0],s=o[1],m=Object(r.useState)(!1),f=Object(i.a)(m,2),h=f[0],p=f[1],g=Object(r.useRef)(h),b=Object(r.useMemo)((function(){return[Object(u.random)(-1.5,1.5,!0),Object(u.random)(-1.5,1.5,!0),Object(u.random)(-1.5,1.5,!0)]}),[]),E=Object(r.useMemo)((function(){return Object(u.random)(.1,4,!0)}),[]),O=c?6710886:h?0:14540253;Object(r.useEffect)((function(){g.current=h}),[h]),Object(l.b)((function(){e.current.rotation.y+=.01*E,g.current&&(t.current+=.03,e.current.position.y=b[1]+.4*Math.sin(t.current))}));var j=Object(r.useCallback)((function(e,t){e.stopPropagation(),s(t)}),[s]),y=Object(r.useCallback)((function(e){e.stopPropagation(),p((function(e){return!e}))}),[p]);return a.a.createElement("mesh",{ref:e,position:b,onClick:function(e){return y(e)},onPointerOver:function(e){return j(e,!0)},onPointerOut:function(e){return j(e,!1)}},a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.005,.75,1]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:O,roughness:.6,metalness:.1}))},m=function(){var e=Object(r.useRef)();Object(l.b)((function(){e.current.rotation.y+=.005}));var t=Object(u.map)(new Array(5),(function(e,t){return a.a.createElement(s,{key:t})}));return a.a.createElement("group",{ref:e},t)},f=function(){var e=function(){return a.a.createElement("mesh",null,a.a.createElement("sphereBufferGeometry",{args:[10,30,30],attach:"geometry"}),a.a.createElement("meshBasicMaterial",{color:10066329,attach:"material"}))};return a.a.createElement("group",null,a.a.createElement(e,null),a.a.createElement("ambientLight",{intensity:.9}),a.a.createElement("pointLight",{intensity:1.12,position:[0,0,0]}))},h=n(2),p=function(){return a.a.createElement("mesh",null,a.a.createElement("sphereBufferGeometry",{args:[5,10,10],attach:"geometry"}),a.a.createElement("meshStandardMaterial",{color:16777215,attach:"material",side:h.BackSide,metalness:.4}))},g=n(21);function b(e){var t,n=e.color,r=e.shape,o=e.fillOpacity;return 1!==n?(console.log(""),console.log("color === 1 "+n),console.log(n),t=0):(console.log(""),console.log("color !== 1 "+n),console.log(n),t=0),a.a.createElement("mesh",{scale:[.005,-.005,.005],position:[-2.5,0,t]},a.a.createElement("meshPhongMaterial",{attach:"material",color:n,side:h.DoubleSide,opacity:o,depthWrite:!0}),a.a.createElement("extrudeBufferGeometry",{attach:"geometry",args:[[r],{curveSegments:5,steps:2,depth:50}]}))}function E(e){var t=e.url,n=Object(l.c)(g.a,t).paths,o=Object(r.useMemo)((function(){return n.flatMap((function(e,t){return e.toShapes(!0).map((function(t){return{shape:t,color:e.color,fillOpacity:e.userData.style.fillOpacity}}))}))}),[n]),c=Object(r.useRef)();return Object(l.b)((function(){c.current.rotation.y+=.025})),a.a.createElement("group",{position:[0,2.5,0],ref:c},o.map((function(e){return a.a.createElement(b,Object.assign({key:e.shape.uuid},e))})))}function O(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_transparent.svg"}))}function j(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(O,null),a.a.createElement(m,null),a.a.createElement(f,null),a.a.createElement(p,null))))}var y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null))};n(29);c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3ff634a5.chunk.js.map