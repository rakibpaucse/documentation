(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[46],{221:function(a,e,t){"use strict";t.r(e);t(8);var s=t(97),c=t(91),r=t(93),n=t(92),l=t(24);e.default=function(a){var e=a.match;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a,{children:Object(l.jsxs)(r.a,{xxs:"12",children:[Object(l.jsx)(n.a,{heading:"menu.blank-page",match:e}),Object(l.jsx)(r.b,{className:"mb-5"})]})}),Object(l.jsx)(s.a,{children:Object(l.jsx)(r.a,{xxs:"12",className:"mb-4",children:Object(l.jsx)("p",{children:Object(l.jsx)(c.a,{id:"menu.blank-page"})})})})]})}},92:function(a,e,t){"use strict";var s=t(8),c=t.n(s),r=t(14),n=t(18),l=t(41),i=t.n(l),o=t(87),b=t.n(o),u=t(88),m={tag:u.l,listTag:u.l,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},d=function(a){var e=a.className,t=a.listClassName,s=a.cssModule,l=a.children,i=a.tag,o=a.listTag,m=a["aria-label"],d=Object(n.a)(a,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(u.i)(b()(e),s),h=Object(u.i)(b()("breadcrumb",t),s);return c.a.createElement(i,Object(r.a)({},d,{className:j,"aria-label":m}),c.a.createElement(o,{className:h},l))};d.propTypes=m,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var j=d,h={tag:u.l,active:i.a.bool,className:i.a.string,cssModule:i.a.object},g=function(a){var e=a.className,t=a.cssModule,s=a.active,l=a.tag,i=Object(n.a)(a,["className","cssModule","active","tag"]),o=Object(u.i)(b()(e,!!s&&"active","breadcrumb-item"),t);return c.a.createElement(l,Object(r.a)({},i,{className:o,"aria-current":s?"page":void 0}))};g.propTypes=h,g.defaultProps={tag:"li"};var p=g,O=t(90),x=t(91),f=t(10),v=t(24),N=function(a){return"/".concat(a)===f.a?Object(v.jsx)(x.a,{id:"menu.home"}):Object(v.jsx)(x.a,{id:"".concat(a)})},w=function(a,e){return a.split(e)[0]+e},M=function(a){var e=a.match,t=e.path?e.path.substr(1):e.match.path.substr(1),s=t.split("/");return s[s.length-1].indexOf(":")>-1&&(s=s.filter((function(a){return-1===a.indexOf(":")}))),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(j,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:s.map((function(a,e){return Object(v.jsx)(p,{active:s.length===e+1,children:s.length!==e+1?Object(v.jsx)(O.b,{to:"/".concat(w(t,a)),children:N(a)}):N(a)},e)}))})})};e.a=function(a){var e=a.heading,t=a.match;return Object(v.jsxs)(v.Fragment,{children:[e&&Object(v.jsx)("h1",{children:Object(v.jsx)(x.a,{id:e.charAt(0).toUpperCase()+e.slice(1)})}),Object(v.jsx)(M,{match:t})]})}},97:function(a,e,t){"use strict";var s=t(14),c=t(18),r=t(8),n=t.n(r),l=t(41),i=t.n(l),o=t(87),b=t.n(o),u=t(88),m=i.a.oneOfType([i.a.number,i.a.string]),d={tag:u.l,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},j={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(a){var e=a.className,t=a.cssModule,r=a.noGutters,l=a.tag,i=a.form,o=a.widths,m=Object(c.a)(a,["className","cssModule","noGutters","tag","form","widths"]),d=[];o.forEach((function(e,t){var s=a[e];if(delete m[e],s){var c=!t;d.push(c?"row-cols-"+s:"row-cols-"+e+"-"+s)}}));var j=Object(u.i)(b()(e,r?"no-gutters":null,i?"form-row":"row",d),t);return n.a.createElement(l,Object(s.a)({},m,{className:j}))};h.propTypes=d,h.defaultProps=j,e.a=h}}]);
//# sourceMappingURL=46.e83acd94.chunk.js.map