(this["webpackJsonpthreejs-experiment-01"]=this["webpackJsonpthreejs-experiment-01"]||[]).push([[0],{35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var n=r(3),i=r(0),o=r.n(i),c=r(22),s=r.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=r(8),h=r(2),j=r(4),u=r(7);function l(e){var t=e.children,r=e.vAlign,o=void 0===r?"center":r,c=e.hAlign,s=void 0===c?"center":c,l=e.size,b=void 0===l?1:l,d=(e.color,Object(u.a)(e,["children","vAlign","hAlign","size","color"])),f=Object(a.c)(h.FontLoader,"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/fonts/ChaleParNinSix.json"),g=Object(i.useMemo)((function(){return{font:f,size:1,height:.125,curveSegments:10,bevelEnabled:!0,bevelThickness:0,bevelSize:0,bevelOffset:0,bevelSegments:0}}),[f]),m=Object(a.e)((function(e){var t=new h.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x="center"===s?-t.x/2:"right"===s?0:-t.x,e.position.y="center"===o?-t.y/2:"top"===o?0:-t.y}),[t]);return Object(n.jsx)("group",Object(j.a)(Object(j.a)({},d),{},{scale:[.1*b,.1*b,.1],children:Object(n.jsxs)("mesh",{ref:m,castShadow:!0,children:[Object(n.jsx)("textGeometry",{attach:"geometry",args:[t,g]}),Object(n.jsx)("meshStandardMaterial",{attach:"material",color:"#000066"})]})}))}function b(){var e=Object(i.useRef)();return Object(n.jsxs)("group",{ref:e,children:[Object(n.jsx)(l,{hAlign:"left",position:[.7625,1.5,-4],children:"Shigeru McPherson",size:5}),Object(n.jsx)(l,{hAlign:"left",position:[0,.8125,-4],children:"digital designer \u2022 art director",size:3})]})}var d=r(26);function f(e){var t={curveSegments:7,steps:1,depth:5,bevelEnabled:!1};"negative"===e.extrudeDir&&(t.depth=-1*t.depth);var r=.05;return Object(n.jsxs)("mesh",{id:e.id,scale:[r,-.05,r],castShadow:!0,receiveShadow:!0,children:[Object(n.jsx)("meshNormalMaterial",{attach:"material",color:"#0000ff",wireframe:!0,depthWrite:!0,transparent:!0,opacity:e.fillOpacity}),Object(n.jsx)("extrudeBufferGeometry",{attach:"geometry",args:[[e.shape],t]})]})}function g(e){var t=Object(a.c)(d.a,e.url).paths,r=Object(i.useMemo)((function(){return t.flatMap((function(t,r){return t.toShapes(!0).map((function(r){return{shape:r,color:e.fillColor,fillOpacity:e.fillOpacity,extrudeDir:e.extrudeDir,nodeID:t.userData.node.id}}))}))}),[t,e]);Object(i.useEffect)((function(){var e=(new h.Box3).setFromObject(o.current),t=new h.Vector3;e.getSize(t);var r=-.5*t.x,n=.5*t.y;o.current.children.forEach((function(e){e.position.x=r,e.position.y=n}))}),[]);var o=Object(i.useRef)();return Object(a.b)((function(){o.current.rotation.y+=.025})),Object(n.jsx)("group",{ref:o,children:r.map((function(e){return Object(n.jsx)(f,Object(j.a)({},e),e.shape.uuid)}))})}function m(){return Object(n.jsx)(g,{id:"logoSVGid",url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_stroke.svg",fillOpacity:"0.25",extrudeDir:"positive"})}function O(){function e(){return Object(n.jsxs)("mesh",{rotation:[5,0,0],position:[0,-5,0],receiveShadow:!0,children:[Object(n.jsx)("planeBufferGeometry",{attach:"geometry",args:[500,500]}),Object(n.jsx)("meshStandardMaterial",{attach:"material",color:"white",side:h.DoubleSide,metalness:.4})]})}function t(){return Object(n.jsxs)("mesh",{position:[0,-1,-5],receiveShadow:!0,children:[Object(n.jsx)("planeBufferGeometry",{attach:"geometry",args:[500,500]}),Object(n.jsx)("meshStandardMaterial",{attach:"material",color:"white",side:h.DoubleSide,metalness:.4})]})}return Object(n.jsxs)("group",{children:[Object(n.jsx)(b,{}),Object(n.jsx)(m,{}),Object(n.jsx)(t,{}),Object(n.jsx)(e,{})]})}function p(e){function t(e){var t=e.brightness,r=e.color;return Object(n.jsx)("rectAreaLight",{width:3,height:3,color:r,intensity:t,position:[-2,0,5],lookAt:[0,0,0],penumbra:1})}function r(e){var t=e.brightness,r=e.color;return Object(n.jsx)("rectAreaLight",{width:3,height:3,intensity:t,color:r,position:[2,1,4],lookAt:[0,0,0],penumbra:2})}function i(e){var t=e.brightness,r=e.color;return Object(n.jsx)("rectAreaLight",{width:2,height:2,intensity:t,color:r,position:[1,4,-2],rotation:[0,180,0]})}function o(){return Object(n.jsx)("directionalLight",{castShadow:!0,position:[2.5,0,5],intensity:.05,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-near":.1,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10})}return Object(n.jsxs)("group",{children:[Object(n.jsx)(t,{brightness:10,color:"#ccccff"}),Object(n.jsx)(r,{brightness:10,color:"#ffffff"}),Object(n.jsx)(i,{brightness:10,color:"#eeeeff"}),Object(n.jsx)(o,{})]})}function x(e){var t=Object(i.useRef)(),r=Object(a.d)().setDefaultCamera;return Object(i.useEffect)((function(){r(t.current)}),[r]),Object(n.jsx)("perspectiveCamera",Object(j.a)(Object(j.a)({},e),{},{ref:t}))}function v(){return window.scene=new h.Scene,window.THREE=h,Object(n.jsx)(a.a,{shadowMap:!0,children:Object(n.jsxs)(i.Suspense,{fallback:null,children:[Object(n.jsx)(p,{}),Object(n.jsx)(x,{position:[0,0,7.5],fov:40}),Object(n.jsx)(O,{})]})})}var w=function(){return Object(n.jsx)(v,{})};r(35);s.a.render(Object(n.jsxs)(o.a.StrictMode,{children:[Object(n.jsx)(w,{}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9201cf1e.chunk.js.map