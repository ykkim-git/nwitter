(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(32),i=n.n(s),u=n(9),o=n(22),l=n(12),j=n(23),b=n(19),d=function(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(l.a,{icon:j.c,color:"#04AAFF",size:"2x"})}),Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(l.a,{icon:b.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},p=n(6),O=n(10),f=n.n(O),h=n(17),m=n(24);n(48),n(52),n(53);m.a.initializeApp({apiKey:"AIzaSyC27xeDpoD52OVd6Llgc50CSOoP6qUqrB4",authDomain:"nwitter-42769.firebaseapp.com",projectId:"nwitter-42769",storageBucket:"nwitter-42769.appspot.com",messagingSenderId:"245751875169",appId:"1:245751875169:web:068425adf723a03de54c20"});var x=m.a,v=m.a.auth(),g=m.a.firestore(),y=m.a.storage(),w=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(!0),b=Object(u.a)(j,2),d=b[0],p=b[1],O=Object(c.useState)(""),m=Object(u.a)(O,2),x=m[0],g=m[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},w=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,v.createUserWithEmailAndPassword(n,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,v.signInWithEmailAndPassword(n,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:w,className:"container",children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(a.jsx)("input",{type:"submit",className:"authInput authSubmit",value:d?"Create Account":"Log In"}),x&&Object(a.jsx)("span",{className:"authError",children:x})]}),Object(a.jsx)("span",{onClick:function(){return p((function(e){return!e}))},className:"authSwitch",children:d?"Sign in":"Create Account"})]})},N=function(){var e=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new x.auth.GoogleAuthProvider:"github"===n&&(a=new x.auth.GithubAuthProvider),e.next=4,v.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(l.a,{icon:j.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(w,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(a.jsx)(l.a,{icon:j.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(a.jsx)(l.a,{icon:j.a})]})]})]})},S=n(34),k=n(54),C=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),j=Object(u.a)(o,2),d=j[0],p=j[1],O=function(){var e=Object(h.a)(f.a.mark((function e(n){var a,c,r,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===d){e.next=12;break}return c=y.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(d,"data_url");case 8:return r=e.sent,e.next=11,r.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,g.collection("nweets").add(u);case 15:i(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"Add photos"}),Object(a.jsx)(l.a,{icon:b.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),Object(a.jsx)("input",{type:"submit",value:"Nweet"}),d&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{src:d,style:{backgroundImage:d}}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(l.a,{icon:b.c})]})]})]})},I=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(t.text),d=Object(u.a)(j,2),p=d[0],O=d[1],m=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure want to delete this nweet?")){e.next=6;break}return e.next=4,g.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,y.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return o((function(e){return!e}))},v=function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,g.doc("nweets/".concat(t.id)).update({text:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"nweet",children:i?Object(a.jsx)(a.Fragment,{children:n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(a.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:p,onChange:function(e){var t=e.target.value;O(t)},autoFocus:!0,required:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(a.jsx)("img",{src:t.attachmentUrl}),n&&Object(a.jsxs)("div",{className:"nweet__actions",children:[Object(a.jsx)("span",{onClick:m,children:Object(a.jsx)(l.a,{icon:b.d})}),Object(a.jsx)("span",{onClick:x,children:Object(a.jsx)(l.a,{icon:b.a})})]})]})})},F=function(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(u.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){g.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(C,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(a.jsx)(I,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.refreshUser,n=e.userObj,r=Object(p.f)(),s=Object(c.useState)(n.displayName),i=Object(u.a)(s,2),o=i[0],l=i[1],j=function(){var e=Object(h.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o,photoURL:""});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:j,className:"profileForm",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:o,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){v.signOut(),r.push("/")},children:"Log Out"})]})},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(a.jsxs)(o.a,{children:[n&&Object(a.jsx)(d,{userObj:c}),Object(a.jsx)(p.c,{children:n?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(p.a,{exact:!0,path:"/",children:Object(a.jsx)(F,{userObj:c})}),Object(a.jsx)(p.a,{exact:!0,path:"/profile",children:Object(a.jsx)(A,{userObj:c,refreshUser:t})})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(p.a,{exact:!0,path:"/",children:Object(a.jsx)(N,{})})})})]})},P=n.p+"static/media/loader.a2f56b88.gif";var _=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){v.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(U,{refreshUser:function(){var e=v.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):Object(a.jsx)("img",{src:P,alt:"loader",style:{position:"absolute",top:"50%",left:"50%"}})})};n(50);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.0939acdb.chunk.js.map