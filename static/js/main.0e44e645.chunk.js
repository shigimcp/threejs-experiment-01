(this["webpackJsonpthreejs-experiment-01"]=this["webpackJsonpthreejs-experiment-01"]||[]).push([[0],{23:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(4),l=n(2),s=n(22);function u(e){var t=e.children,n=e.vAlign,o=void 0===n?"center":n,c=e.hAlign,u=void 0===c?"center":c,m=e.size,h=void 0===m?1:m,f=(e.color,Object(s.a)(e,["children","vAlign","hAlign","size","color"])),d=Object(i.c)(l.FontLoader,"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/fonts/ChaleParNinSix.json"),g=Object(r.useMemo)((function(){return{font:d,size:1,height:.125,curveSegments:10,bevelEnabled:!0,bevelThickness:0,bevelSize:0,bevelOffset:0,bevelSegments:0}}),[d]),b=Object(i.e)((function(e){var t=new l.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x="center"===u?-t.x/2:"right"===u?0:-t.x,e.position.y="center"===o?-t.y/2:"top"===o?0:-t.y}),[t]);return a.a.createElement("group",Object.assign({},f,{scale:[.1*h,.1*h,.1]}),a.a.createElement("mesh",{ref:b,castShadow:!0},a.a.createElement("textGeometry",{attach:"geometry",args:[t,g]}),a.a.createElement("meshPhongMaterial",{attach:"material",color:"#0000ff"})))}function m(){var e=Object(r.useRef)();return a.a.createElement("group",{ref:e},a.a.createElement(u,{hAlign:"left",position:[.7625,1.5,-4],children:"Shigeru McPherson",size:5}),a.a.createElement(u,{hAlign:"left",position:[0,.8125,-4],children:"digital designer \u2022 art director",size:3}))}var h=n(3),f=n(21);function d(e){var t=Object(i.c)(f.a,e.url).paths,n=Object(r.useMemo)((function(){return t.flatMap((function(t,n){return t.toShapes(!0).map((function(n){return{shape:n,color:e.fillColor,fillOpacity:e.fillOpacity,extrudeDir:e.extrudeDir,nodeID:t.userData.node.id}}))}))}),[t,e]),o=Object(r.useState)([0,0,0]),c=Object(h.a)(o,2),s=c[0],u=c[1],m=Object(r.useRef)();return Object(r.useEffect)((function(){var e=(new l.Box3).setFromObject(m.current),t=new l.Sphere;e.getBoundingSphere(t),u([0,-t.center.y,0])}),[]),Object(i.b)((function(){m.current.rotation.y+=.025})),a.a.createElement("group",{position:s,ref:m},n.map((function(e){return a.a.createElement(g,Object.assign({key:e.shape.uuid},e))})))}function g(e){console.log("==================== LOGOMESH ===================="),console.log(e);var t={curveSegments:7,steps:2,depth:25,bevelEnabled:!1};"negative"===e.extrudeDir&&(t.depth=-1*t.depth);var n,o=Object(r.useRef)(),c=Object(r.useState)([0,0,0]),i=Object(h.a)(c,2),s=i[0],u=i[1];Object(r.useEffect)((function(){var t=(new l.Box3).setFromObject(o.current),n=new l.Sphere;switch(t.getBoundingSphere(n),e.nodeID){case"kanji_ko01ID":u([.809716599190283*-n.center.x,0,0]);break;case"kanji_ko02ID":u([.798522414124903*-n.center.x,0,0]);break;default:u([-n.center.x,0,0])}}),[e.nodeID]);switch(!0){case window.innerWidth>=1441:case window.innerWidth>=992&&window.innerWidth<=1440:case window.innerWidth>=768&&window.innerWidth<=991:n=.005;break;case window.innerWidth>=375&&window.innerWidth<=767:n=.00225;break;default:n=.005}return a.a.createElement("mesh",{id:e.id,scale:[n,-n,n],position:s,castShadow:!0,receiveShadow:!0,ref:o},a.a.createElement("meshStandardMaterial",{attach:"material",color:"#000022",side:l.DoubleSide,depthWrite:!0,transparent:!0,opacity:e.fillOpacity,metalness:"0.4"}),a.a.createElement("extrudeBufferGeometry",{attach:"geometry",args:[[e.shape],t]}))}function b(){return a.a.createElement("group",null,a.a.createElement(d,{url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg",fillOpacity:"0.25",extrudeDir:"positive"}),a.a.createElement(d,{url:"https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/logo/shigeru_logo_extrude_clean.svg",fillOpacity:"0.25",extrudeDir:"negative"}))}var p=n(8);function E(){var e=Object(r.useRef)(),t=Object(r.useRef)(0),n=Object(r.useState)(!1),o=Object(h.a)(n,2),c=o[0],s=o[1],u=Object(r.useState)(!1),m=Object(h.a)(u,2),f=m[0],d=m[1],g=Object(r.useRef)(f),b=Object(r.useMemo)((function(){return[Object(p.random)(-3,3,!0),0,Object(p.random)(-3,3,!0)]}),[]),E=Object(r.useMemo)((function(){return Object(p.random)(.1,4,!0)}),[]),w=c?6710886:f?0:14540253;Object(r.useEffect)((function(){g.current=f}),[f]),Object(i.b)((function(){e.current.rotation.y+=.01*E,g.current&&(t.current+=.03,e.current.position.y=b[1]+.4*Math.sin(t.current))}));var O=Object(r.useCallback)((function(e,t){e.stopPropagation(),s(t)}),[s]),j=Object(r.useCallback)((function(e){e.stopPropagation(),d((function(e){return!e}))}),[d]);return a.a.createElement("mesh",{ref:e,position:b,onClick:function(e){return j(e)},onPointerOver:function(e){return O(e,!0)},onPointerOut:function(e){return O(e,!1)},castShadow:!0,receiveShadow:!0},a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.005,.75,.75]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:w,roughness:.6,side:l.DoubleSide,metalness:.4}))}function w(e){var t=Object(r.useRef)();Object(i.b)((function(){t.current.rotation.y+=.005}));var n=Object(p.map)(new Array(5),(function(e,t){return a.a.createElement(E,{key:t})}));return a.a.createElement("group",{ref:t},n)}function O(){function e(){return a.a.createElement("mesh",{rotation:[5,0,0],position:[0,-5,0],receiveShadow:!0},a.a.createElement("planeBufferGeometry",{attach:"geometry",args:[500,500]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"white",side:l.DoubleSide,metalness:.4}))}function t(){return a.a.createElement("mesh",{position:[0,-1,-5],receiveShadow:!0},a.a.createElement("planeBufferGeometry",{attach:"geometry",args:[500,500]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"white",side:l.DoubleSide,metalness:.4}))}return a.a.createElement("group",null,a.a.createElement(m,null),a.a.createElement(b,null),a.a.createElement(w,null),a.a.createElement(t,null),a.a.createElement(e,null))}function j(e){function t(e){var t=e.brightness,n=e.color;return a.a.createElement("rectAreaLight",{width:3,height:3,color:n,intensity:t,position:[-2,0,5],lookAt:[0,0,0],penumbra:1})}function n(e){var t=e.brightness,n=e.color;return a.a.createElement("rectAreaLight",{width:3,height:3,intensity:t,color:n,position:[2,1,4],lookAt:[0,0,0],penumbra:2})}function r(e){var t=e.brightness,n=e.color;return a.a.createElement("rectAreaLight",{width:2,height:2,intensity:t,color:n,position:[1,4,-2],rotation:[0,180,0]})}function o(){return a.a.createElement("directionalLight",{castShadow:!0,position:[2.5,0,5],intensity:.05,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-near":.1,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10})}return a.a.createElement("group",null,a.a.createElement(t,{brightness:10,color:"#ccccff"}),a.a.createElement(n,{brightness:10,color:"#ffffff"}),a.a.createElement(r,{brightness:10,color:"#eeeeff"}),a.a.createElement(o,null))}function v(e){var t=Object(r.useRef)(),n=Object(i.d)().setDefaultCamera;return Object(r.useEffect)((function(){n(t.current)}),[n]),a.a.createElement("perspectiveCamera",Object.assign({ref:t},e))}function S(){return a.a.createElement(v,{position:[0,0,7.5],fov:40})}function y(){return a.a.createElement(i.a,{shadowMap:!0},a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(j,null),a.a.createElement(S,null),a.a.createElement(O,null)))}var x=function(){return a.a.createElement(y,null)};n(30);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.0e44e645.chunk.js.map