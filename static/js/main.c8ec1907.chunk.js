(this["webpackJsonpthreejs-experiment-01"]=this["webpackJsonpthreejs-experiment-01"]||[]).push([[0],{22:function(e,t,r){e.exports=r(30)},29:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(18),o=r.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=r(4),u=r(2),l=function(){function e(){return n.a.createElement("mesh",{rotation:[5,0,0],position:[0,-5,0],receiveShadow:!0},n.a.createElement("planeBufferGeometry",{attach:"geometry",args:[500,500]}),n.a.createElement("meshStandardMaterial",{attach:"material",color:"white",side:u.DoubleSide,metalness:.4}))}function t(){return n.a.createElement("mesh",{position:[0,-1,-5],receiveShadow:!0},n.a.createElement("planeBufferGeometry",{attach:"geometry",args:[500,500]}),n.a.createElement("meshStandardMaterial",{attach:"material",color:"white",side:u.DoubleSide,metalness:.4}))}return n.a.createElement(n.a.Fragment,null,n.a.createElement(t,null),n.a.createElement(e,null))},s=function(){function e(e){var t=e.brightness,r=e.color;return n.a.createElement("rectAreaLight",{width:3,height:3,color:r,intensity:t,position:[-2,0,5],lookAt:[0,0,0],penumbra:1,castShadow:!0})}function t(e){var t=e.brightness,r=e.color;return n.a.createElement("rectAreaLight",{width:3,height:3,intensity:t,color:r,position:[2,1,4],lookAt:[0,0,0],penumbra:2,castShadow:!0})}function r(e){var t=e.brightness,r=e.color;return n.a.createElement("rectAreaLight",{width:2,height:2,intensity:t,color:r,position:[1,4,-2],rotation:[0,180,0],castShadow:!0})}function a(){return n.a.createElement("directionalLight",{castShadow:!0,position:[2.5,0,5],intensity:.05,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-near":.1,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10})}return n.a.createElement("group",null,n.a.createElement(e,{brightness:10,color:"#ccccff"}),n.a.createElement(t,{brightness:10,color:"#ffffff"}),n.a.createElement(r,{brightness:10,color:"#eeeeff"}),n.a.createElement(a,null))},m=function(e){var t=Object(a.useRef)(),r=Object(i.d)().setDefaultCamera;return Object(a.useEffect)((function(){r(t.current)}),[r]),n.a.createElement("perspectiveCamera",Object.assign({ref:t},e))},h=r(3),f=r(21);function d(e){var t=Object(i.c)(f.a,e.url).paths,r=Object(a.useMemo)((function(){return t.flatMap((function(t,r){return t.toShapes(!0).map((function(r){return{shape:r,color:e.fillColor,fillOpacity:e.fillOpacity,extrudeDir:e.extrudeDir,nodeID:t.userData.node.id}}))}))}),[t,e]),c=Object(a.useState)([0,0,0]),o=Object(h.a)(c,2),l=o[0],s=o[1],m=Object(a.useRef)();return Object(a.useEffect)((function(){var e=(new u.Box3).setFromObject(m.current),t=new u.Sphere;e.getBoundingSphere(t),s([0,-t.center.y,0])}),[]),Object(i.b)((function(){m.current.rotation.y+=.025})),n.a.createElement("group",{position:l,ref:m},r.map((function(e){return n.a.createElement(p,Object.assign({key:e.shape.uuid},e))})))}function p(e){var t={curveSegments:7,steps:2,depth:25,bevelEnabled:!1};"negative"===e.extrudeDir&&(t.depth=-1*t.depth);var r=Object(a.useRef)(),c=Object(a.useState)([0,0,0]),o=Object(h.a)(c,2),i=o[0],l=o[1];Object(a.useEffect)((function(){var t=(new u.Box3).setFromObject(r.current),a=new u.Sphere;switch(t.getBoundingSphere(a),e.nodeID){case"kanji_ko01ID":l([.809716599190283*-a.center.x,0,0]);break;case"kanji_ko02ID":l([.798522414124903*-a.center.x,0,0]);break;default:l([-a.center.x,0,0])}}),[e.nodeID]);return n.a.createElement("mesh",{id:e.id,scale:[.005,-.005,.005],position:i,castShadow:!0,receiveShadow:!0,ref:r},n.a.createElement("meshStandardMaterial",{attach:"material",color:"#000022",side:u.DoubleSide,depthWrite:!0,transparent:!0,opacity:e.fillOpacity,metalness:"0.4"}),n.a.createElement("extrudeBufferGeometry",{attach:"geometry",args:[[e.shape],t]}))}function b(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg",fillOpacity:"0.5",extrudeDir:"positive"}),n.a.createElement(d,{url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg",fillOpacity:"0.5",extrudeDir:"negative"}))}var g=r(8),E=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(0),r=Object(a.useState)(!1),c=Object(h.a)(r,2),o=c[0],l=c[1],s=Object(a.useState)(!1),m=Object(h.a)(s,2),f=m[0],d=m[1],p=Object(a.useRef)(f),b=Object(a.useMemo)((function(){return[Object(g.random)(-3,3,!0),0,Object(g.random)(-3,3,!0)]}),[]),E=Object(a.useMemo)((function(){return Object(g.random)(.1,4,!0)}),[]),O=o?6710886:f?0:14540253;Object(a.useEffect)((function(){p.current=f}),[f]),Object(i.b)((function(){e.current.rotation.y+=.01*E,p.current&&(t.current+=.03,e.current.position.y=b[1]+.4*Math.sin(t.current))}));var j=Object(a.useCallback)((function(e,t){e.stopPropagation(),l(t)}),[l]),w=Object(a.useCallback)((function(e){e.stopPropagation(),d((function(e){return!e}))}),[d]);return n.a.createElement("mesh",{ref:e,position:b,onClick:function(e){return w(e)},onPointerOver:function(e){return j(e,!0)},onPointerOut:function(e){return j(e,!1)},castShadow:!0,receiveShadow:!0},n.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.005,.75,.75]}),n.a.createElement("meshStandardMaterial",{attach:"material",color:O,roughness:.6,side:u.DoubleSide,metalness:.4}))},O=function(){var e=Object(a.useRef)();Object(i.b)((function(){e.current.rotation.y+=.005}));var t=Object(g.map)(new Array(5),(function(e,t){return n.a.createElement(E,{key:t})}));return n.a.createElement("group",{ref:e},t)};function j(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{shadowMap:!0},n.a.createElement(a.Suspense,{fallback:null},n.a.createElement(b,null),n.a.createElement(O,null),n.a.createElement(s,null),n.a.createElement(m,{position:[0,0,6.25],fov:50}),n.a.createElement(l,null))))}var w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,null))};r(29);o.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c8ec1907.chunk.js.map