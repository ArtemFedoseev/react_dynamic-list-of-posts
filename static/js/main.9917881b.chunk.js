(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,a,s=n(8),r=n.n(s),o=n(3),i=n.n(o),u=n(5),l=n(2),j=n(1),m=(n(15),n(16),n(17),n(0)),b=function(e){var t=e.posts,n=e.selectedPostId,c=e.setPostId;return Object(m.jsxs)("div",{className:"PostsList",children:[Object(m.jsx)("h2",{children:"Posts:"}),Object(m.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(m.jsxs)("li",{className:"PostsList__item",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("b",{children:["[User #",e.userId,"]:"]})," ",e.title]}),Object(m.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){c(e.id)},children:n===e.id?"Close":"Open"})]},e.title)}))})]})},d=n(7),h=n(4),p=(n(19),n(9));!function(e){e[e.name=0]="name",e[e.body=1]="body",e[e.email=2]="email"}(a||(a={}));var O=(c={},Object(h.a)(c,a.name,!1),Object(h.a)(c,a.body,!1),Object(h.a)(c,a.email,!1),c),f=function(e){var t=e.handleAddComment,n=Object(j.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],o=Object(j.useState)(""),i=Object(l.a)(o,2),u=i[0],b=i[1],f=Object(j.useState)(""),x=Object(l.a)(f,2),v=x[0],_=x[1],N=Object(j.useState)(O),y=Object(l.a)(N,2),w=y[0],C=y[1],P=function(e,t){var n=t.target.value;switch(e){case a.name:r(n);break;case a.email:b(n);break;case a.body:_(n)}!function(e,t){var n=!1;switch(e){case a.name:case a.body:n=""===t.replace(/ /g,"");break;case a.email:n=!p.validate(t)}C(Object(d.a)(Object(d.a)({},w),{},Object(h.a)({},e,n)))}(e,n)};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:s,email:u,body:v}),r(""),b(""),_("")},autoComplete:"off",className:"NewCommentForm",children:[Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"name",value:s,onChange:function(e){P(a.name,e)},placeholder:"Your name",className:"NewCommentForm__input"})}),w[a.name]&&Object(m.jsx)("span",{className:"NewCommentForm__warning",children:"Can't be empty"}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"email",value:u,onChange:function(e){P(a.email,e)},placeholder:"Your email",className:"NewCommentForm__input"})}),w[a.email]&&Object(m.jsx)("span",{className:"NewCommentForm__warning",children:"Must be a valid email"}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("textarea",{name:"body",value:v,onChange:function(e){P(a.body,e)},placeholder:"Type comment here",className:"NewCommentForm__input"})}),w[a.body]&&Object(m.jsx)("span",{className:"NewCommentForm__warning",children:"Can't be empty"}),Object(m.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",disabled:function(){var e=[s,u,v].some((function(e){return""===e})),t=Object.values(w).some((function(e){return e}));return e||t}(),children:"Add a comment"})]})},x="https://mate.academy/students-api";function v(){var e="".concat(x,"/posts");return fetch(e).then((function(e){return e.json()}))}var _=function(e){var t="".concat(x,"/posts?userId=").concat(e);return fetch(t).then((function(e){return e.json()}))},N=function(e){var t="".concat(x,"/posts/").concat(e);return fetch(t).then((function(e){return e.json()}))},y=function(e){var t="".concat(x,"/comments/?postId=").concat(e);return fetch(t).then((function(e){return e.json()}))},w=function(e){var t=e.postId,n=e.name,c=e.body,a=e.email,s="".concat(x,"/comments");return fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:t,name:n,body:c,email:a})}).catch((function(e){return e}))},C=function(e){var t="".concat(x,"/comments/").concat(e);return fetch(t,{method:"DELETE"}).catch((function(e){return e}))},P=(n(20),function(e){var t=e.postId,n=Object(j.useState)({}),c=Object(l.a)(n,2),a=c[0],s=c[1],r=Object(j.useState)([]),o=Object(l.a)(r,2),b=o[0],d=o[1],h=Object(j.useState)(!0),p=Object(l.a)(h,2),O=p[0],x=p[1],v=Object(j.useState)(!0),_=Object(l.a)(v,2),P=_[0],S=_[1],g=function(){var e=Object(u.a)(i.a.mark((function e(){var n,c,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,Promise.all([N(t),y(t)]);case 3:n=e.sent,c=Object(l.a)(n,2),a=c[0],r=c[1],s(a),d(r),S(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){g()}),[t]);var k=function(){var e=Object(u.a)(i.a.mark((function e(n){var c,a,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.name,a=n.body,s=n.email,e.next=3,w({postId:t,name:c,body:a,email:s});case 3:return e.next=5,y(t);case 5:r=e.sent,d(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(n);case 2:return e.next=4,y(t);case 4:c=e.sent,d(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"PostDetails",children:[Object(m.jsx)("h2",{children:"Post details:"}),P?"Loading post details...":Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{className:"PostDetails__post",children:Object(m.jsx)("p",{children:a.body})}),Object(m.jsxs)("section",{className:"PostDetails__comments",children:[Object(m.jsxs)("button",{type:"button",className:"button",onClick:function(){x(!O)},children:[O?"Hide":"Show"," ",b.length," ","comments"]}),Object(m.jsx)("ul",{className:"PostDetails__list",children:O&&b.map((function(e){return Object(m.jsxs)("li",{className:"PostDetails__list-item",children:[Object(m.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return I(e.id)},children:"X"}),Object(m.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(m.jsx)("section",{children:Object(m.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(m.jsx)(f,{handleAddComment:k})})})]})]})}),S=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(j.useState)(0),s=Object(l.a)(a,2),r=s[0],o=s[1],d=Object(j.useState)(0),h=Object(l.a)(d,2),p=h[0],O=h[1],f=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==r){e.next=7;break}return e.next=3,v();case 3:t=e.sent,c(t),e.next=10;break;case 7:return e.next=9,_(r);case 9:t=e.sent;case 10:c(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){f()}),[r]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App__header",children:Object(m.jsxs)("label",{htmlFor:"users",children:["Select a user: \xa0",Object(m.jsxs)("select",{id:"users",value:r,className:"App__user-selector",onChange:function(e){var t=+e.target.value;o(t)},children:[Object(m.jsx)("option",{value:"0",children:"All users"}),Object(m.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(m.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(m.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(m.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(m.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(m.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(m.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(m.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(m.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(m.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(m.jsxs)("main",{className:"App__main",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(b,{posts:n,selectedPostId:p,setPostId:function(e){var t=e;e===p&&(t=0),O(t)}})}),Object(m.jsx)("div",{className:"App__content",children:0!==p&&Object(m.jsx)(P,{postId:p})})]})]})};r.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.9917881b.chunk.js.map