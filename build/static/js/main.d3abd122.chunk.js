(this["webpackJsonpthreejs-experiment-01"]=this["webpackJsonpthreejs-experiment-01"]||[]).push([[0],{37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var n=r(3),c=r(0),o=r.n(c),i=r(21),s=r.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=r(6),u=r(8),h=r(2),j=r(4),l=r(7);function b(e){var t=e.children,r=e.vAlign,o=void 0===r?"center":r,i=e.hAlign,s=void 0===i?"center":i,a=e.size,b=void 0===a?1:a,d=(e.color,Object(l.a)(e,["children","vAlign","hAlign","size","color"])),f=Object(u.c)(h.FontLoader,"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/fonts/ChaleParNinSix.json"),O=Object(c.useMemo)((function(){return{font:f,size:1,height:.125,curveSegments:10,bevelEnabled:!0,bevelThickness:0,bevelSize:0,bevelOffset:0,bevelSegments:0}}),[f]),g=Object(u.e)((function(e){var t=new h.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x="center"===s?-t.x/2:"right"===s?0:-t.x,e.position.y="center"===o?-t.y/2:"top"===o?0:-t.y}),[t]);return Object(n.jsx)("group",Object(j.a)(Object(j.a)({},d),{},{scale:[.1*b,.1*b,.1],children:Object(n.jsxs)("mesh",{ref:g,castShadow:!0,children:[Object(n.jsx)("textGeometry",{attach:"geometry",args:[t,O]}),Object(n.jsx)("meshStandardMaterial",{attach:"material",color:"#000066"})]})}))}function d(){var e=Object(c.useRef)();return Object(n.jsxs)("group",{ref:e,children:[Object(n.jsx)(b,{hAlign:"left",position:[.7625,1.5,-4],children:"Shigeru McPherson",size:5}),Object(n.jsx)(b,{hAlign:"left",position:[0,.8125,-4],children:"digital designer \u2022 art director",size:3})]})}var f=r(25);function O(e){var t=Object(c.useRef)(),r=Object(c.useState)([0,0,0]),o=Object(a.a)(r,2),i=o[0],s=o[1],u={curveSegments:7,steps:1,depth:5,bevelEnabled:!1};"negative"===e.extrudeDir&&(u.depth=-1*u.depth),Object(c.useEffect)((function(){var r=(new h.Box3).setFromObject(t.current),n=new h.Sphere;switch(r.setFromObject(t.current),r.getBoundingSphere(n),e.nodeID){case"kanji_ko01ID":s([.809716599190283*-n.center.x,0,-n.center.z]);break;case"kanji_ko02ID":s([.798522414124903*-n.center.x,0,-n.center.z]);break;default:s([-n.center.x,0,-n.center.z])}}),[e.nodeID]);var j=.05;return Object(n.jsxs)("mesh",{id:e.id,scale:[j,-.05,j],position:i,castShadow:!0,receiveShadow:!0,ref:t,children:[Object(n.jsx)("meshNormalMaterial",{attach:"material",color:"#0000ff",wireframe:!0,depthWrite:!0,transparent:!0,opacity:e.fillOpacity}),Object(n.jsx)("extrudeBufferGeometry",{attach:"geometry",args:[[e.shape],u]})]})}function g(e){var t=Object(u.c)(f.a,e.url).paths,r=Object(c.useMemo)((function(){return t.flatMap((function(t,r){return t.toShapes(!0).map((function(r){return{shape:r,color:e.fillColor,fillOpacity:e.fillOpacity,extrudeDir:e.extrudeDir,nodeID:t.userData.node.id}}))}))}),[t,e]),o=Object(c.useState)([0,0,0]),i=Object(a.a)(o,2),s=i[0],l=i[1],b=Object(c.useRef)();return Object(c.useEffect)((function(){var e=(new h.Box3).setFromObject(b.current),t=new h.Sphere;e.getBoundingSphere(t),l([0,-t.center.y,0])}),[b]),Object(u.b)((function(){b.current.rotation.y+=.025})),Object(n.jsx)("group",{position:s,ref:b,children:r.map((function(e){return Object(n.jsx)(O,Object(j.a)({},e),e.shape.uuid)}))})}function m(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(g,{id:"logoSVGid",url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean_sm.svg",fillOpacity:"0.25",extrudeDir:"positive"})})}function p(){function e(){return Object(n.jsxs)("mesh",{rotation:[5,0,0],position:[0,-5,0],receiveShadow:!0,children:[Object(n.jsx)("planeBufferGeometry",{attach:"geometry",args:[500,500]}),Object(n.jsx)("meshStandardMaterial",{attach:"material",color:"white",side:h.DoubleSide,metalness:.4})]})}function t(){return Object(n.jsxs)("mesh",{position:[0,-1,-5],receiveShadow:!0,children:[Object(n.jsx)("planeBufferGeometry",{attach:"geometry",args:[500,500]}),Object(n.jsx)("meshStandardMaterial",{attach:"material",color:"white",side:h.DoubleSide,metalness:.4})]})}return Object(n.jsxs)("group",{children:[Object(n.jsx)(d,{}),Object(n.jsx)(m,{}),Object(n.jsx)(t,{}),Object(n.jsx)(e,{})]})}function x(e){function t(e){var t=e.brightness,r=e.color;return Object(n.jsx)("rectAreaLight",{width:3,height:3,color:r,intensity:t,position:[-2,0,5],lookAt:[0,0,0],penumbra:1})}function r(e){var t=e.brightness,r=e.color;return Object(n.jsx)("rectAreaLight",{width:3,height:3,intensity:t,color:r,position:[2,1,4],lookAt:[0,0,0],penumbra:2})}function c(e){var t=e.brightness,r=e.color;return Object(n.jsx)("rectAreaLight",{width:2,height:2,intensity:t,color:r,position:[1,4,-2],rotation:[0,180,0]})}function o(){return Object(n.jsx)("directionalLight",{castShadow:!0,position:[2.5,0,5],intensity:.05,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-near":.1,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10})}return Object(n.jsxs)("group",{children:[Object(n.jsx)(t,{brightness:10,color:"#ccccff"}),Object(n.jsx)(r,{brightness:10,color:"#ffffff"}),Object(n.jsx)(c,{brightness:10,color:"#eeeeff"}),Object(n.jsx)(o,{})]})}function w(e){var t=Object(c.useRef)(),r=Object(u.d)().setDefaultCamera;return Object(c.useEffect)((function(){r(t.current)}),[r]),Object(n.jsx)("perspectiveCamera",Object(j.a)(Object(j.a)({},e),{},{ref:t}))}var v=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};function S(){window.scene=new h.Scene,window.THREE=h;var e=Object(c.useRef)(),t=Object(c.useState)(v()),r=Object(a.a)(t,2),o=r[0],i=r[1];return console.log("windowWidth = "+o),Object(c.useEffect)((function(){var t=null,r=function(){var r;console.log("useEffect: WINDOW RESIZE - resizeListener triggered!"),console.log(e.current),clearTimeout(t),t=setTimeout((function(){return i(v())}),150),r=e.current,console.log(""),console.log("==================== FUNCTION: centerObject(thisObject) ===================="),console.log("thisObject = "),console.log(r)};return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),Object(n.jsx)(u.a,{shadowMap:!0,children:Object(n.jsxs)(c.Suspense,{fallback:null,children:[Object(n.jsx)(x,{}),Object(n.jsx)(w,{position:[0,0,7.5],fov:40}),Object(n.jsx)(p,{})]})})}var y=function(){return Object(n.jsx)(S,{})};r(37);s.a.render(Object(n.jsxs)(o.a.StrictMode,{children:[Object(n.jsx)(y,{}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.d3abd122.chunk.js.map