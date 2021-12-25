(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[42],{226:function(e,t,a){"use strict";a.r(t);a(8);var s=a(92),c=a(97),n=a(93),i=a(24);t.default=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{children:Object(i.jsxs)(n.a,{xxs:"12",children:[Object(i.jsx)(s.a,{heading:e.location.pathname.substr(1).split("/")[1],match:e}),Object(i.jsx)(n.b,{className:"mb-5"})]})}),Object(i.jsx)(c.a,{children:Object(i.jsx)(n.a,{xxs:"12",className:"mb-4",children:Object(i.jsxs)("div",{style:{width:"70%",margin:"0 auto"},children:[Object(i.jsx)("h1",{children:"Folder Structure"}),Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"node_modules: It contains all the npm packages that is used on this projects."}),Object(i.jsx)("li",{children:"components: Here are the React component which could be reused in multiple pages or are complex enough to move them to another file and test them individually. Each file should have a default export with a single component, inside the file there could be multiple components though."}),Object(i.jsx)("li",{children:"pages: Here are the pages (also known as views) of the application, each file will automatically match a route as described in Next.js documentation."}),Object(i.jsx)("li",{children:"static: Any static file required by the application (images, audios, etc.) could be placed here."}),Object(i.jsx)("li",{children:"scss: The stylesheet is compiled to css. Next.js will automatically add the css file to the HTML."}),Object(i.jsx)("li",{children:"store: Used to manage the state via redux"}),Object(i.jsx)("li",{children:"package.json: This file contains dependencies and scripts required for the project."}),Object(i.jsx)("li",{children:"next.config.js: contain extended next configurations like css module support, font import, image import and optimization and env variables."}),Object(i.jsx)("li",{children:"package-lock.json contain exact dependency tree to be installed in /node_modules. It helps while a team is working on private apps to ensure that they are working on the same version of dependencies and sub-dependencies. It also maintains a history of changes done in package.json so, that at any point of time, when required previous changes can be looked back in the package-lock.json file."})]})})]})})})]})}},92:function(e,t,a){"use strict";var s=a(8),c=a.n(s),n=a(14),i=a(18),l=a(41),r=a.n(l),o=a(87),d=a.n(o),h=a(88),u={tag:h.l,listTag:h.l,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},m=function(e){var t=e.className,a=e.listClassName,s=e.cssModule,l=e.children,r=e.tag,o=e.listTag,u=e["aria-label"],m=Object(i.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(h.i)(d()(t),s),b=Object(h.i)(d()("breadcrumb",a),s);return c.a.createElement(r,Object(n.a)({},m,{className:j,"aria-label":u}),c.a.createElement(o,{className:b},l))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var j=m,b={tag:h.l,active:r.a.bool,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.active,l=e.tag,r=Object(i.a)(e,["className","cssModule","active","tag"]),o=Object(h.i)(d()(t,!!s&&"active","breadcrumb-item"),a);return c.a.createElement(l,Object(n.a)({},r,{className:o,"aria-current":s?"page":void 0}))};p.propTypes=b,p.defaultProps={tag:"li"};var g=p,x=a(90),f=a(91),O=a(10),v=a(24),N=function(e){return"/".concat(e)===O.a?Object(v.jsx)(f.a,{id:"menu.home"}):Object(v.jsx)(f.a,{id:"".concat(e)})},w=function(e,t){return e.split(t)[0]+t},k=function(e){var t=e.match,a=t.path?t.path.substr(1):t.match.path.substr(1),s=a.split("/");return s[s.length-1].indexOf(":")>-1&&(s=s.filter((function(e){return-1===e.indexOf(":")}))),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(j,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:s.map((function(e,t){return Object(v.jsx)(g,{active:s.length===t+1,children:s.length!==t+1?Object(v.jsx)(x.b,{to:"/".concat(w(a,e)),children:N(e)}):N(e)},t)}))})})};t.a=function(e){var t=e.heading,a=e.match;return Object(v.jsxs)(v.Fragment,{children:[t&&Object(v.jsx)("h1",{children:Object(v.jsx)(f.a,{id:t.charAt(0).toUpperCase()+t.slice(1)})}),Object(v.jsx)(k,{match:a})]})}},97:function(e,t,a){"use strict";var s=a(14),c=a(18),n=a(8),i=a.n(n),l=a(41),r=a.n(l),o=a(87),d=a.n(o),h=a(88),u=r.a.oneOfType([r.a.number,r.a.string]),m={tag:h.l,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},j={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,l=e.tag,r=e.form,o=e.widths,u=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];o.forEach((function(t,a){var s=e[t];if(delete u[t],s){var c=!a;m.push(c?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var j=Object(h.i)(d()(t,n?"no-gutters":null,r?"form-row":"row",m),a);return i.a.createElement(l,Object(s.a)({},u,{className:j}))};b.propTypes=m,b.defaultProps=j,t.a=b}}]);
//# sourceMappingURL=42.6d10b9b9.chunk.js.map