(this["webpackJsonpthreejs-experiment-01"]=this["webpackJsonpthreejs-experiment-01"]||[]).push([[0],{22:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(4),u=n(2),s=function(){function e(){return a.a.createElement("mesh",{rotation:[5,0,0],position:[0,-5,0],receiveShadow:!0},a.a.createElement("planeBufferGeometry",{attach:"geometry",args:[500,500]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"white",side:u.DoubleSide,metalness:.4}))}function t(){}return a.a.createElement(a.a.Fragment,null,a.a.createElement(t,null),a.a.createElement(e,null))},l=function(){function e(e){var t=e.brightness,n=e.color;return a.a.createElement("rectAreaLight",{width:3,height:3,color:n,intensity:t,position:[-2,0,5],lookAt:[0,0,0],penumbra:1,castShadow:!0})}function t(e){var t=e.brightness,n=e.color;return a.a.createElement("rectAreaLight",{width:3,height:3,intensity:t,color:n,position:[2,1,4],lookAt:[0,0,0],penumbra:2,castShadow:!0})}function n(e){var t=e.brightness,n=e.color;return a.a.createElement("rectAreaLight",{width:2,height:2,intensity:t,color:n,position:[1,4,-2],rotation:[0,180,0],castShadow:!0})}function r(){return a.a.createElement("directionalLight",{castShadow:!0,position:[2.5,0,5],intensity:.05,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-near":.1,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10})}return a.a.createElement("group",null,a.a.createElement(e,{brightness:10,color:"#ccccff"}),a.a.createElement(t,{brightness:10,color:"#ffffff"}),a.a.createElement(n,{brightness:10,color:"#eeeeff"}),a.a.createElement(r,null))},m=function(e){var t=Object(r.useRef)(),n=Object(i.d)().setDefaultCamera;return Object(r.useEffect)((function(){n(t.current)}),[n]),a.a.createElement("perspectiveCamera",Object.assign({ref:t},e))},h=n(3),f=n(21);function d(e){var t=Object(i.c)(f.a,e.url).paths,n=Object(r.useMemo)((function(){return t.flatMap((function(t,n){return t.toShapes(!0).map((function(n){return{shape:n,color:e.fillColor,fillOpacity:e.fillOpacity,extrudeDir:e.extrudeDir,nodeID:t.userData.node.id}}))}))}),[t,e]),c=Object(r.useState)([0,0,0]),o=Object(h.a)(c,2),s=o[0],l=o[1],m=Object(r.useRef)();return Object(r.useEffect)((function(){var e=(new u.Box3).setFromObject(m.current),t=new u.Sphere;e.getBoundingSphere(t),l([0,-t.center.y,0])}),[]),Object(i.b)((function(){m.current.rotation.y+=.025})),a.a.createElement("group",{position:s,ref:m},n.map((function(e){return a.a.createElement(p,Object.assign({key:e.shape.uuid},e))})))}function p(e){var t={curveSegments:7,steps:2,depth:25,bevelEnabled:!1};"negative"===e.extrudeDir&&(t.depth=-1*t.depth);var n=Object(r.useRef)(),c=Object(r.useState)([0,0,0]),o=Object(h.a)(c,2),i=o[0],s=o[1];Object(r.useEffect)((function(){var t=(new u.Box3).setFromObject(n.current),r=new u.Sphere;switch(t.getBoundingSphere(r),e.nodeID){case"kanji_ko01ID":s([.809716599190283*-r.center.x,0,0]);break;case"kanji_ko02ID":s([.798522414124903*-r.center.x,0,0]);break;default:s([-r.center.x,0,0])}}),[e.nodeID]);return a.a.createElement("mesh",{id:e.id,scale:[.005,-.005,.005],position:i,castShadow:!0,receiveShadow:!0,ref:n},a.a.createElement("meshStandardMaterial",{attach:"material",color:"#000022",side:u.DoubleSide,depthWrite:!0,transparent:!0,opacity:e.fillOpacity,metalness:"0.4"}),a.a.createElement("extrudeBufferGeometry",{attach:"geometry",args:[[e.shape],t]}))}function b(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,{url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg",fillOpacity:"0.5",extrudeDir:"positive"}),a.a.createElement(d,{url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg",fillOpacity:"0.5",extrudeDir:"negative"}))}var g=n(8),E=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(0),n=Object(r.useState)(!1),c=Object(h.a)(n,2),o=c[0],s=c[1],l=Object(r.useState)(!1),m=Object(h.a)(l,2),f=m[0],d=m[1],p=Object(r.useRef)(f),b=Object(r.useMemo)((function(){return[Object(g.random)(-3,3,!0),0,Object(g.random)(-3,3,!0)]}),[]),E=Object(r.useMemo)((function(){return Object(g.random)(.1,4,!0)}),[]),O=o?6710886:f?0:14540253;Object(r.useEffect)((function(){p.current=f}),[f]),Object(i.b)((function(){e.current.rotation.y+=.01*E,p.current&&(t.current+=.03,e.current.position.y=b[1]+.4*Math.sin(t.current))}));var j=Object(r.useCallback)((function(e,t){e.stopPropagation(),s(t)}),[s]),w=Object(r.useCallback)((function(e){e.stopPropagation(),d((function(e){return!e}))}),[d]);return a.a.createElement("mesh",{ref:e,position:b,onClick:function(e){return w(e)},onPointerOver:function(e){return j(e,!0)},onPointerOut:function(e){return j(e,!1)},castShadow:!0,receiveShadow:!0},a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.005,.75,.75]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:O,roughness:.6,side:u.DoubleSide,metalness:.4}))},O=function(){var e=Object(r.useRef)();Object(i.b)((function(){e.current.rotation.y+=.005}));var t=Object(g.map)(new Array(5),(function(e,t){return a.a.createElement(E,{key:t})}));return a.a.createElement("group",{ref:e},t)};function j(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{shadowMap:!0},a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(b,null),a.a.createElement(O,null),a.a.createElement(l,null),a.a.createElement(m,{position:[0,0,6.25],fov:50}),a.a.createElement(s,null))))}var w=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null))};n(29);o.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.313e85db.chunk.js.map