"use strict";(self.webpackChunkstevenlozano_blog=self.webpackChunkstevenlozano_blog||[]).push([[843],{2838:function(n,e,t){t.d(e,{Aq:function(){return a},sv:function(){return d},x$:function(){return c},$_:function(){return u},h4:function(){return i},y4:function(){return l}});t(2791);var r=t(3504),s=t(8185),o=t(184),i=function(n){var e=n.userLogin,t=n.userImage,i=n.userName,a=n.onSignIn,c=n.onSignOut;return(0,o.jsxs)("header",{className:"header",children:[(0,o.jsx)("img",{className:"header-logo",src:"https://static.wixstatic.com/media/8d71f3_9d56ad82a0c84cccbf8f246deb6f3876~mv2.png/v1/fill/w_396,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Pet%20Shop-02.png",alt:"Logo App"}),(0,o.jsxs)("nav",{className:"header-nav",children:[(0,o.jsx)(r.rU,{to:"/posts",children:"Blog"}),!!e&&(0,o.jsx)(r.rU,{to:"/myPosts",children:"Mis Posts"}),!e&&(0,o.jsx)("button",{onClick:a,children:"Iniciar Sesi\xf3n"}),!!e&&(0,o.jsxs)("div",{className:"header-nav__user",children:[(0,o.jsx)("img",{src:t,alt:"User logged in"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Bienvenido"}),(0,o.jsx)("p",{children:i})]})]}),!!e&&(0,o.jsx)(s._Jl,{size:22,color:"rgba(255 84 114 / 100%)",cursor:"pointer",onClick:c})]})]})},a=function(){return(0,o.jsxs)("section",{className:"background",children:[(0,o.jsx)("div",{className:"background-image",children:(0,o.jsx)("div",{className:"background-image--opacity"})}),(0,o.jsxs)("div",{className:"background-content",children:[(0,o.jsx)("h1",{children:"T\xda NO TIENES UNA MASCOTA, LA MASCOTA TE TIENE A TI"}),(0,o.jsx)("p",{children:'"No importa lo que hagas o como le trates, el amor de las mascotas es infinito, su cari\xf1o es inmenso y su fidelidad es incondicional"'}),(0,o.jsx)("a",{href:"#content-main",children:"Conoce Nuestras Mascotas"})]})]})},c=function(n){var e=n.tags,t=n.onClick,r=void 0===t?function(){return null}:t,i=(n.onChange,n.onClickTag),a=void 0===i?function(){return null}:i;return(0,o.jsxs)("section",{className:"content-filters",children:[(0,o.jsxs)("div",{className:"content-filters__display",children:[(0,o.jsx)(s.k0,{size:22,color:"rgba(255 84 114 / 100%)",cursor:"pointer",onClick:function(){return r("grid")}}),(0,o.jsx)(s.K9B,{size:24,color:"rgba(255 84 114 / 100%)",cursor:"pointer",onClick:function(){return r("list")}})]}),(0,o.jsx)("div",{className:"content-filters__tags",children:null===e||void 0===e?void 0:e.map((function(n,e){return(0,o.jsx)("button",{onClick:function(){return a(n)},children:n},e.toString())}))})]})},l=function(n){var e=n.display,t=n.data,r=n.index,s=n.onClick,i=r>19?r-19:r+1;return(0,o.jsxs)("div",{className:"content-posts__item ".concat("grid"===e&&"post--".concat(i)),children:[(0,o.jsx)("img",{className:"content-posts__item-img",src:t.image,alt:t.text}),(0,o.jsxs)("div",{className:"content-posts__item-info",children:[(0,o.jsx)("p",{children:t.text}),(0,o.jsx)("button",{onClick:function(){return s(t.id)},children:"Leer Post"})]})]},i.toString())},u=function(){return(0,o.jsx)("footer",{className:"footer",children:(0,o.jsxs)("p",{children:["2022 - Blog Realizado Por ",(0,o.jsx)("span",{children:"Bryan Steven Lozano Torres"})]})})},d=function(n){var e=n.owner,t=n.title,r=n.text;return(0,o.jsxs)("div",{className:"post-comment",children:[(0,o.jsx)("img",{className:"post-comment__owner",src:e,alt:"Comment Owner"}),(0,o.jsxs)("div",{className:"post-comment__content",children:[(0,o.jsx)("p",{className:"post-comment__content-title",children:t}),(0,o.jsx)("p",{className:"post-comment__content-text",children:r})]})]})}},1442:function(n,e,t){t.d(e,{l0:function(){return v},p_:function(){return a},YB:function(){return l}});var r=t(9439),s=t(2791),o=t(2838),i=t(184),a=function(n){var e=n.display,t=n.tags,a=n.posts,c=n.filters,l=n.onClickDisplay,u=n.onClickShowMore,d=n.onClickTag,m=n.onClickPost,f=(0,s.useState)([]),v=(0,r.Z)(f,2),p=v[0],g=v[1];(0,s.useEffect)((function(){g(a)}),[a]);return(0,i.jsxs)("main",{id:"content-main",className:"content",children:[!!c&&(0,i.jsx)(o.x$,{tags:t,onClick:l,onChange:function(n){},onClickTag:d}),p.map((function(n,t){var r;return(0,i.jsx)("section",{className:"content-posts \n              ".concat("grid"===e&&"display-grid","\n              ").concat("list"===e&&"display-list","\n            "),children:null===(r=n.data)||void 0===r?void 0:r.map((function(n,t){return(0,i.jsx)(o.y4,{display:e,data:n,index:t,onClick:function(n){return m(n)}},t.toString())}))},t.toString())})),!!c&&(0,i.jsx)("button",{className:"btn-show-more",onClick:u,children:"Mostrar M\xe1s"})]})},c=function(n){var e=n.image,t=n.title,r=n.text;return(0,i.jsxs)("div",{className:"user-info",children:[(0,i.jsx)("img",{className:"user-info__img",src:e,alt:"User logged in"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"user-info__title",children:t}),(0,i.jsx)("p",{className:"user-info__text",children:r})]})]})},l=function(n){var e,t,r,s=n.data,a=n.comments;return(0,i.jsx)("main",{className:"content",children:(0,i.jsxs)("div",{className:"content-post",children:[(0,i.jsx)("img",{className:"content-post__img",src:null===s||void 0===s?void 0:s.image,alt:null===s||void 0===s?void 0:s.text}),(0,i.jsx)("div",{className:"content-post__owner",children:(0,i.jsx)(c,{image:null===s||void 0===s||null===(e=s.owner)||void 0===e?void 0:e.picture,title:"".concat(null===s||void 0===s||null===(t=s.owner)||void 0===t?void 0:t.firstName," ").concat(null===s||void 0===s||null===(r=s.owner)||void 0===r?void 0:r.lastName),text:null===s||void 0===s?void 0:s.publishDate})}),(0,i.jsx)("p",{className:"content-post__text",children:null===s||void 0===s?void 0:s.text}),(0,i.jsx)("div",{className:"content-post__comments",children:null===a||void 0===a?void 0:a.map((function(n){return(0,i.jsx)(o.sv,{owner:n.owner.picture,title:"".concat(n.owner.firstName," ").concat(n.owner.lastName),text:n.message},n.id)}))})]})})},u=t(4164),d=t(8185),m=document.querySelector("#modal"),f=function(n){var e=n.children,t=n.isOpened,r=n.onClose;return t?u.createPortal((0,i.jsx)("div",{className:"modal",children:(0,i.jsxs)("div",{className:"modal-container",children:[(0,i.jsx)("div",{className:"modal-container__close",children:(0,i.jsx)(d.C7Q,{size:16,cursor:"pointer",onClick:r})}),e]})}),m):null},v=function(n){var e=n.type,t=n.isOpened,r=n.data,s=n.onChange,o=n.onSubmit,a=n.onClose;return(0,i.jsxs)(f,{isOpened:t,onClose:a,children:[(0,i.jsx)("img",{className:"form-logo",src:"https://static.wixstatic.com/media/8d71f3_9d56ad82a0c84cccbf8f246deb6f3876~mv2.png/v1/fill/w_396,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Pet%20Shop-02.png",alt:""}),(0,i.jsxs)("form",{className:"form-data",onSubmit:o,children:[r.map((function(n,e){return(0,i.jsxs)("div",{className:"form-field",children:[(0,i.jsx)("input",{type:n.type,placeholder:n.placeholder,name:n.name,value:n.value,onChange:s,required:!0,autoComplete:"off"}),!!n.errorMessage&&(0,i.jsx)("p",{children:n.errorMessage})]},e.toString())})),(0,i.jsx)("button",{type:"submit",className:"form-btn",children:"login"===e?"Iniciar sesion":"Registrar"})]})]})}},8230:function(n,e,t){t.d(e,{Z:function(){return o}});t(2791);var r=t(2838),s=t(184),o=function(n){var e=n.user,t=n.isLogin,o=n.children,i=n.onSignIn,a=n.onSignOut;return(0,s.jsxs)("div",{className:"wrapper",children:[(0,s.jsx)(r.h4,{userLogin:t,userName:"".concat(null===e||void 0===e?void 0:e.firstName," ").concat(null===e||void 0===e?void 0:e.lastName),userImage:null===e||void 0===e?void 0:e.picture,onSignIn:i,onSignOut:a}),o,(0,s.jsx)(r.$_,{})]})}},6843:function(n,e,t){t.r(e);var r=t(3433),s=t(4165),o=t(1413),i=t(5861),a=t(2791),c=t(2838),l=t(1442),u=t(6871),d=t(9434),m=t(1892),f=t(9051),v=t(2098),p=t(9638),g=t(713),x=t(7591),h=t(8230),j=t(184);e.default=function(){var n=(0,u.s0)(),e=(0,d.I0)(),t=(0,d.v9)((function(n){return n.users.allUsers})),_=(0,d.v9)((function(n){return n.users.userLogin})),N=(0,d.v9)((function(n){return n.forms.loginForm})),C=(0,d.v9)((function(n){return n.forms.typeForm})),k=(0,d.v9)((function(n){return n.forms.showForm})),w=(0,d.v9)((function(n){return n.posts.display})),S=(0,d.v9)((function(n){return n.posts.allPosts})),b=(0,d.v9)((function(n){return n.posts.tags})),y=(0,d.v9)((function(n){return n.posts.tagSelected})),Z=(0,d.v9)((function(n){return n.posts.page}));(0,a.useEffect)((function(){e((0,x.wn)()),e((0,m.h3)(Z,y))}),[]),(0,a.useEffect)((function(){(0,i.Z)((0,s.Z)().mark((function n(){var r,i,a,c,l;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!p.I.currentUser){n.next=8;break}return a=String(null===(r=p.I.currentUser)||void 0===r?void 0:r.email),n.next=4,null===(i=p.I.currentUser)||void 0===i?void 0:i.getIdToken();case 4:c=n.sent,l=t.find((function(n){return n.email===a})),localStorage.setItem(a,JSON.stringify((0,o.Z)((0,o.Z)({},l),{},{tokenSesion:c}))),e((0,x.UM)(String(c),l));case 8:case"end":return n.stop()}}),n)})))()}),[t]);var I=function(){var n=(0,i.Z)((0,s.Z)().mark((function n(t){var r,i,a,c,l,u,d;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),a=0,c=(null===(r=N.find((function(n){return"email"===n.name})))||void 0===r?void 0:r.value)||"",l=(null===(i=N.find((function(n){return"password"===n.name})))||void 0===i?void 0:i.value)||"",u=N.map((function(n){var e="";return n.required&&!n.value?(e="Este campo es obligatorio",a++):"email"!==n.name||g.qK.test(n.value)?"password"===n.name&&n.value.length<4&&(e="La contrase\xf1a debe tener m\xednimo 4 caracteres",a++):(e="Correo electr\xf3nico no valido",a++),(0,o.Z)((0,o.Z)({},n),{},{errorMessage:e})})),a){n.next=11;break}return n.next=8,M(c,l,u);case 8:d=n.sent,a=d.errors,u=d.data;case 11:e((0,v.Ft)(u)),a||(e((0,v.ap)()),e((0,v.Ro)(!1)));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),M=function(){var n=(0,i.Z)((0,s.Z)().mark((function n(i,a,c){var l,u,d,m,f,v,g;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=0,u="",d=(0,r.Z)(c),n.prev=3,n.next=6,p.I.signInWithEmailAndPassword(i,a);case 6:return f=n.sent,n.next=9,null===(m=f.user)||void 0===m?void 0:m.getIdToken();case 9:v=n.sent,g=t.find((function(n){return n.email===i})),e((0,x.UM)(String(v),g)),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(3),"auth/user-not-found"===n.t0.code?(u="El usuario no se encuentra registrado",d=c.map((function(n){return"email"===n.name?(0,o.Z)((0,o.Z)({},n),{},{errorMessage:u}):n})),l++):"auth/wrong-password"===n.t0.code?(u="La contrase\xf1a no es v\xe1lida",d=c.map((function(n){return"password"===n.name?(0,o.Z)((0,o.Z)({},n),{},{errorMessage:u}):n})),l++):"auth/email-already-in-use"===n.t0.code&&(u="El correo ya se encuentra registrado",d=c.map((function(n){return"email"===n.name?(0,o.Z)((0,o.Z)({},n),{},{errorMessage:u}):n})),l++);case 17:return n.abrupt("return",{data:d,errors:l});case 18:case"end":return n.stop()}}),n,null,[[3,14]])})));return function(e,t,r){return n.apply(this,arguments)}}();return(0,j.jsxs)(h.Z,{isLogin:!!p.I.currentUser,user:_,onSignIn:function(){return e((0,v.Ro)(!0))},onSignOut:function(){return p.I.signOut().then((function(){return n(f.yy.BASE)}))},children:[(0,j.jsx)(c.Aq,{}),(0,j.jsx)(l.p_,{filters:!0,display:w,tags:b,posts:S,onClickDisplay:function(n){return e((0,m.fL)(n))},onClickShowMore:function(){e((0,m.h3)(Z+1,y)),e((0,m.Cu)(Z+1))},onClickTag:function(n){e((0,m.h3)(0,n)),e((0,m.co)(n))},onClickPost:function(t){e((0,m.co)("")),e((0,m.Cu)(0)),n("/post/".concat(t))}}),(0,j.jsx)(l.l0,{type:C,isOpened:k,data:N,onSubmit:I,onChange:function(n){var t=n.target,r=t.name,s=t.value,i=N.map((function(n){return n.name===r?(0,o.Z)((0,o.Z)({},n),{},{value:s,errorMessage:""}):n}));e((0,v.Ft)(i))},onClose:function(){return e((0,v.Ro)(!1))}})]})}}}]);
//# sourceMappingURL=843.4d542fc2.chunk.js.map