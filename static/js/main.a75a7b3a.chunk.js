(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(54)},38:function(e,t,a){},39:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=(a(38),a(39),a(22)),i=a(55),m=a(56),u=a(57),s=a(58),d=a(59),E=a(60),p=a(61);var v=l.a.memo((function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"sidebar"},l.a.createElement(i.a,{color:"light",light:!0,expand:"md"},l.a.createElement(m.a,{href:"/",className:"mr-auto"},"Brand Icon"),l.a.createElement(u.a,{onClick:function(){return r(!a)},className:"mr-2"}),l.a.createElement(s.a,{isOpen:!a,navbar:!0},l.a.createElement(d.a,{navbar:!0},l.a.createElement(E.a,null,l.a.createElement(p.a,{href:"/"},"Home")),l.a.createElement(E.a,null,l.a.createElement(p.a,{href:"/testdata"},"TestData")),l.a.createElement(E.a,null,l.a.createElement(p.a,{href:"/performance"},"Performance"))))))}));var f=function(){return l.a.createElement("div",{className:"jobs"},[{title:"front end developer",designation:"lead developer",skills:"react,angular,nodejs,jekyll",description:"lorem param lorem param  lorem param"},{title:"UI developer",designation:"lead developer",skills:"react,angular,nodejs,jekyll,html,css",description:"lorem param lorem param  lorem param"}].map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("div",null,"Job title:",e.title),l.a.createElement("div",null,"Job designation:",e.title),l.a.createElement("div",null,"Skills required:",e.skills),l.a.createElement("div",null,"Job description:",e.description),l.a.createElement("div",null,l.a.createElement("button",null,"Apply")))})))};var h=function(){return l.a.createElement("div",{className:"learning"},[{title:"Front end development with react",subtitle:"intro to react",tags:"react into,react basics,getting started",image:"https://picsum.photos/200/300",description:"Lorem pasam"},{title:"Front end development with react plus",subtitle:"creating your first react app",tags:"react into,react basics,getting started,hello world",image:"https://picsum.photos/id/237/200/300",description:"Lorem pasam"}].map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("div",null,"title:",e.title),l.a.createElement("div",null,"subtitle:",e.subtitle),l.a.createElement("div",null,l.a.createElement("img",{src:e.image,width:"200",alt:e.title})),l.a.createElement("div",null,"tags:",e.tags),l.a.createElement("div",null,"description:",e.description),l.a.createElement("div",null,l.a.createElement("button",null,"Apply")))})))};var g=function(){return l.a.createElement("div",{className:"landingpage"},l.a.createElement(d.a,{navbar:!0},l.a.createElement(E.a,null,l.a.createElement(p.a,{href:"/"},"Home")),l.a.createElement(E.a,null,l.a.createElement(p.a,{href:"/testdata"},"Test Data Page")),l.a.createElement(E.a,null,l.a.createElement(p.a,{href:"/performance"},"Summary Page"))))};var b=function(){return l.a.createElement("div",{className:"category"})},y=a(11),j=a(12),k=a(14),O=a(13),w=a(19),N=a(7),T=function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={file:null},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then((function(e){return e.text()})).then((function(t){e.setState({file:t})}))}},{key:"render",value:function(){var e=this.state.file;return e&&this.props.children(e)}}]),a}(n.Component),S=function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={gists:null},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("method:componentdidmount called..."),fetch("https://api.github.com/gists").then((function(e){return e.json()})).then((function(t){e.setState({gists:t})}))}},{key:"render",value:function(){var e=this.state.gists;return l.a.createElement("div",{className:"Gists"},l.a.createElement("h1",null,"Gist List"),e?e.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(w.b,{to:"/gists/g/"+e.id},e.id))})):l.a.createElement("div",null,"Loading ... "),l.a.createElement(N.a,{path:"/gists/g/:gistId",render:function(t){var a=t.match;return l.a.createElement(P,{gist:e.find((function(e){return e.id===a.params.gistId}))})}}))}}]),a}(l.a.Component),P=function(e){var t=e.gist;return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to Gist"),l.a.createElement("div",null,t.description),Object.keys(t.files).map((function(e){return console.log(e),l.a.createElement("li",null,l.a.createElement("b",null,e),l.a.createElement(T,{url:t.files[e].raw_url},(function(e){return l.a.createElement("pre",null,e)})))})))},x=function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={profile:null},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("method:componentdidmount called..."),Promise.all([fetch("https://api.github.com/users/kalburgimanjunath"),fetch("https://api.github.com/users/kalburgimanjunath")]).then((function(e){return Promise.all(e.map((function(e){return console.log(e),e.json()})))})).then((function(t){e.setState({profile:t})}))}},{key:"render",value:function(){console.log("method:render() called...");var e=this.state.profile;return console.log(e),l.a.createElement("div",{className:"Profile"},l.a.createElement("h1",null,"My Profile from Github List"),l.a.createElement("div",null,e?l.a.createElement("div",null,l.a.createElement("div",null,e.name,l.a.createElement("span",null,":",e.location)),l.a.createElement("div",null,l.a.createElement("img",{src:e.avatar_url,width:"200",alt:""})),l.a.createElement("div",null,l.a.createElement("div",null,"Followers:",l.a.createElement("span",null,e.followers)),l.a.createElement("div",null,"Following:",l.a.createElement("span",null,e.following)),l.a.createElement("div",null,"Followers:",l.a.createElement("span",null,e.followers)),l.a.createElement("div",null,"Repositories:",l.a.createElement("span",null,e.public_repos)))):l.a.createElement("div",null,"load.....")))}}]),a}(l.a.Component),C=a(20),I=a.n(C),F=a(21),D=a(62);var J=l.a.memo((function(e){var t=e.recorddata;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(D.a,{hover:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"PostId"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Body")),t.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.postId),l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.body))})))):l.a.createElement("div",null,"Still loading the data..."))})),L=a(63),A=a(64),M=a(65),B=a(66),G=a(67);var W=l.a.memo((function(e){var t=e.recorddata;return l.a.createElement("div",{className:"list"},l.a.createElement("h1",null,"List View"),t.map((function(e){return l.a.createElement(L.a,{key:e.id},l.a.createElement(A.a,null,l.a.createElement(M.a,null,l.a.createElement(w.b,{to:""},e.name)),l.a.createElement(B.a,null,e.email),l.a.createElement(G.a,null,e.body)))})))})),R=a(68),_=a(75),H=a(69),U=a(70),V=a(71),q=function(e){var t=e.buttonLabel,a=e.className,r=e.modalTitle,c=Object(n.useState)(!1),i=Object(o.a)(c,2),m=i[0],u=i[1],s=function(){return u(!m)},d=JSON.parse(JSON.stringify(localStorage)),E=Object.values(d),p=[];return E.map((function(e){return p.push(JSON.parse(e)[0])})),l.a.createElement("div",null,l.a.createElement(R.a,{color:"danger",onClick:s},t),l.a.createElement(_.a,{isOpen:m,toggle:s,className:a},l.a.createElement(H.a,{toggle:s},r),l.a.createElement(U.a,null,p?p.map((function(e){return l.a.createElement("div",{key:e.profilerId},l.a.createElement("div",null,l.a.createElement("b",null,"Component:",e.profilerId)),l.a.createElement("div",null,"Mode:",e.mode),l.a.createElement("div",null,"actualTime:",e.actualTime),l.a.createElement("div",null,"baseTime:",e.baseTime),l.a.createElement("div",null,"startTime:",e.startTime),l.a.createElement("div",null,"commitTime:",e.commitTime))})):l.a.createElement("div",null,"Loading Performance data...")),l.a.createElement(V.a,null,l.a.createElement(R.a,{color:"secondary",onClick:s},"Cancel"))))},$=a(72),z=a(73),K=a(74),Q=function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this)).state={recorddata:null,analyticsdata:null},n}return Object(j.a)(a,[{key:"componentWillUnmount",value:function(){console.log("component will mount called")}},{key:"clockPerformance",value:function(e,t,a,n,l,r){var c=[];c.push({profilerId:e,mode:t,actualTime:a,baseTime:n,startTime:l,commitTime:r}),console.log({profilerId:e,mode:t,actualTime:a,baseTime:n,startTime:l,commitTime:r}),localStorage.setItem(e,JSON.stringify(c))}},{key:"loadData",value:function(){var e=Object(F.a)(I.a.mark((function e(){var t,a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/comments");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=JSON.parse(JSON.stringify(localStorage)),this.setState({recorddata:a,analyticsdata:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.recorddata,r=t.analyticsdata;return l.a.createElement(l.a.Fragment,null,l.a.createElement($.a,null,l.a.createElement(R.a,{onClick:function(){return e.loadData()}},"Start"),a?l.a.createElement(l.a.Fragment,null,l.a.createElement(q,{buttonLabel:"Check Performance",modalTitle:"Performance of Components",testdata:r}),l.a.createElement("h4",null,"Fetched Data from 2 component list and table"),l.a.createElement(z.a,null,l.a.createElement(K.a,{xs:"6",sm:"4",md:"6"},l.a.createElement(n.Profiler,{id:"Table",onRender:this.clockPerformance},l.a.createElement(J,{recorddata:a}))),l.a.createElement(K.a,{xs:"6",sm:"4",md:"6"},l.a.createElement(n.Profiler,{id:"List",onRender:this.clockPerformance},l.a.createElement(W,{recorddata:a}))))):l.a.createElement("div",null,"No Data Available click button to load data....")))}}]),a}(l.a.Component),X=function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={recorddata:null},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(F.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/comments");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({recorddata:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.recorddata;return l.a.createElement(l.a.Fragment,null,l.a.createElement($.a,null,l.a.createElement("h1",null,"Table View"),e?l.a.createElement(l.a.Fragment,null,l.a.createElement(z.a,null,l.a.createElement(K.a,{xs:"6",sm:"4",md:"4"},l.a.createElement(W,{recorddata:e})),l.a.createElement(K.a,{xs:"6",sm:"4",md:"4"},l.a.createElement(J,{recorddata:e})))):l.a.createElement("div",null,"No Data Available to load....")))}}]),a}(l.a.Component);var Y=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",null,l.a.createElement(w.a,null,l.a.createElement("aside",null,l.a.createElement(v,null)),l.a.createElement("div",null,l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/jobs"},l.a.createElement(f,null)),l.a.createElement(N.a,{path:"/learning"},l.a.createElement(h,null)),l.a.createElement(N.a,{path:"/category"},l.a.createElement(b,null)),l.a.createElement(N.a,{path:"/gists"},l.a.createElement(S,null)),l.a.createElement(N.a,{path:"/profile"},l.a.createElement(x,null)),l.a.createElement(N.a,{path:"/performance"},l.a.createElement(Q,null)),l.a.createElement(N.a,{path:"/testdata"},l.a.createElement(X,null)),l.a.createElement(N.a,{path:"/"},l.a.createElement(g,null)))))))};var Z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(53);c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.a75a7b3a.chunk.js.map