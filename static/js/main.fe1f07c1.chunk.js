(this["webpackJsonpcn-react-movie-app"]=this["webpackJsonpcn-react-movie-app"]||[]).push([[0],{20:function(e,t,a){e.exports={container:"movie_container__3t294",hidden:"movie_hidden__Mhl3X",backButton:"movie_backButton__3ROKN",title:"movie_title__2n2dh",genres:"movie_genres__eWWcb",voteAvg:"movie_voteAvg__1fFOG",overview:"movie_overview__3l_37",similarFilms:"movie_similarFilms__2qg1b"}},30:function(e,t,a){e.exports={tile:"tile_tile__1BbVi",image:"tile_image__1GBio",title:"tile_title__1ezmR",subText:"tile_subText__3e4JP",rating:"tile_rating__11GmW"}},31:function(e,t,a){e.exports={container:"searchResults_container__Vq7C_",tileContainer:"searchResults_tileContainer__3I7XO",spinner:"searchResults_spinner__3hYP-",hidden:"searchResults_hidden__5QN5p",noResults:"searchResults_noResults__JhpmU"}},57:function(e,t,a){e.exports={logo:"siteNav_logo__1DNJP"}},63:function(e,t,a){e.exports={hidden:"search_hidden__35wgM"}},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),s=a.n(c),i=a(14),o=a(7),l=a(9),u=(a(68),a(39)),d=a(35),j=a(6),b=a(45),h=a(18),p=a.p+"static/media/logo.84a4ce06.svg",v=a(57),m=a.n(v),g=a(1),x=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(l.f)(),v=function(){e.handleParams({searchType:"detailed",sort:"popularity",minRating:7.5,minVotes:200})};return Object(g.jsxs)(u.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark",fixed:"top",children:[Object(g.jsxs)(u.a.Brand,{as:i.b,to:"/",onClick:v,children:[Object(g.jsx)("img",{src:p,alt:"logo",className:m.a.logo}),"Movies App"]}),Object(g.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(u.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(d.a,{className:"mr-auto",children:[Object(g.jsx)(d.a.Item,{children:Object(g.jsx)(d.a.Link,{as:i.b,to:"/",onClick:v,children:"Home"})}),Object(g.jsx)(d.a.Item,{children:Object(g.jsx)(d.a.Link,{as:i.b,to:"/search",children:"Find Movies"})})]}),Object(g.jsxs)(j.a,{inline:!0,onSubmit:function(t){e.handleParams({title:r,searchType:"basic"}),t.preventDefault(),s.push("/search")},children:[Object(g.jsx)(b.a,{type:"text",placeholder:"Search",className:"mr-sm-2 mb-2 mb-md-0",onChange:function(e){c(e.target.value)},value:r}),Object(g.jsx)(h.a,{type:"submit",variant:"outline-primary",children:"Search"})]})]})]})},O=a(61),f=a(62),A=a(8),y=a.n(A),_=a(16),N=a(60),P=a(38),k=a(21),C=a(59),S=function(){var e=Object(_.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.poster_path){e.next=6;break}return e.next=3,T(t.poster_path);case 3:a=e.sent,e.next=7;break;case 6:a="data:image/png;base64,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";case 7:return n={title:t.title,imgSrc:a,voteAvg:t.vote_average.toFixed(1),releaseDate:t.release_date,overview:t.overview,movieId:t.id,genres:t.genres},e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(_.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()}));case 2:if((a=e.sent).results){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,Promise.all(a.results.map((function(e){return S(e)})));case 7:return n=e.sent,e.abrupt("return",{results:n,pageCount:a.total_pages,pageItems:a.results.length,totalItems:a.total_results});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(_.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(W,"/w200/").concat(t)).then((function(e){return e.blob()})).then((function(e){return URL.createObjectURL(e)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=["api_key=".concat(D.KEY)];if(e.title){var a=e.title.split(" ").filter((function(e){return e})).join("+");t.push("query=".concat(a))}return e.sort&&t.push("sort_by=".concat({title:"original_title.asc",rating:"vote_average.desc",date:"primary_release_date.desc",popularity:"popularity.desc"}[e.sort])),e.adult&&t.push("include_adult=true"),e.page&&t.push("page=".concat(e.page)),e.minRating&&t.push("vote_average.gte=".concat(e.minRating)),e.minVotes&&t.push("vote_count.gte=".concat(e.minVotes)),e.genre&&t.push("with_genres=".concat(e.genre)),e.year&&t.push("year=".concat(e.year)),e.latestDate&&t.push("release_date.lte=".concat(e.latestDate)),e.earliestDate&&t.push("release_date.gte=".concat(e.earliestDate)),e.year&&t.push("primary_release_year=".concat(e.year)),e.englishOnly&&t.push("with_original_language=en"),t.join("&")},F="https://api.themoviedb.org/3",W="https://image.tmdb.org/t/p",D=function e(){Object(C.a)(this,e)};D.KEY="0f0a1bd520946ddd18204d0ae65f52ed",D.getMovieById=function(){var e=Object(_.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(F,"/movie/").concat(t,"?api_key=").concat(D.KEY),e.abrupt("return",fetch(a).then((function(e){return e.json()})).then((function(e){return S(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D.getMovieByTitle=function(){var e=Object(_.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w(t),n="".concat(F,"/search/movie?").concat(a),e.next=4,R(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D.getSearchResults=function(){var e=Object(_.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w(t),n="".concat(F,"/discover/movie?").concat(a),e.next=4,R(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D.getSimilarMovies=function(){var e=Object(_.a)(y.a.mark((function e(t,a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(F,"/movie/").concat(t,"/similar?api_key=").concat(D.KEY,"&page=").concat(a),e.next=3,R(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),D.getGenres=Object(_.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(F,"/genre/movie/list?api_key=").concat(D.KEY),e.next=3,fetch(t).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));var G=a(30),V=a.n(G),X=function(e){var t;return Object(g.jsxs)(i.b,{className:V.a.tile,to:{pathname:"/movie/".concat(e.movieId),state:{title:e.title,imgSrc:e.imgSrc,voteAvg:e.voteAvg,releaseDate:e.releaseDate,overview:e.overview}},children:[Object(g.jsx)("img",{className:V.a.image,src:e.imgSrc,alt:"".concat(e.title," poster")}),Object(g.jsxs)("div",{className:V.a.info,children:[Object(g.jsx)("div",{className:V.a.title,children:e.title}),Object(g.jsxs)("div",{className:V.a.subText,children:[Object(g.jsx)("span",{className:V.a.rating,children:e.voteAvg}),Object(g.jsx)("span",{children:null===(t=e.releaseDate)||void 0===t?void 0:t.substr(0,4)})]})]})]})},K=a(40),B=function(e){for(var t=Math.max(1,e.currentPage-2),a=Math.min(e.pageCount,t+4),n=[Object(g.jsx)(K.a.Prev,{onClick:function(){return e.onClick(e.currentPage-1)},className:"d-none d-sm-inline-block",children:"Previous"},0)],r=function(t){n.push(Object(g.jsx)(K.a.Item,{onClick:function(){return e.onClick(t)},active:e.currentPage===t,children:t},t))},c=t;c<a+1;c++)r(c);return n.push(Object(g.jsx)(K.a.Next,{onClick:function(){return e.onClick(e.currentPage+1)},className:"d-none d-sm-inline-block",children:"Next"},a+1)),Object(g.jsx)(K.a,{className:"justify-content-center",children:n})},q=a(31),I=a.n(q),L=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(n.useState)(!1),j=Object(o.a)(d,2),b=j[0],h=j[1],p=Object(n.useState)(!1),v=Object(o.a)(p,2),m=v[0],x=v[1];Object(n.useEffect)((function(){O(e.currentPage)}),[e.searchParams]);var O=function(){var t=Object(_.a)(y.a.mark((function t(a){var n,r,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.searchParams){t.next=2;break}return t.abrupt("return");case 2:if(h(!0),(r=e.searchParams).page=a,"detailed"!==e.searchParams.searchType){t.next=11;break}return t.next=8,D.getSearchResults(r);case 8:n=t.sent,t.next=21;break;case 11:if("basic"!==e.searchParams.searchType){t.next=17;break}return t.next=14,D.getMovieByTitle(r);case 14:n=t.sent,t.next=21;break;case 17:if("similar"!==e.searchParams.searchType){t.next=21;break}return t.next=20,D.getSimilarMovies(r.movieId,r.page);case 20:n=t.sent;case 21:n&&n.totalItems?(u(n.pageCount),x(!1),s=n.results.map((function(e){return Object(g.jsx)(X,{movieId:e.movieId,title:e.title,imgSrc:e.imgSrc,voteAvg:e.voteAvg,releaseDate:e.releaseDate,overview:e.overview},e.movieId)})),c(s)):x(!0),h(!1);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=Object(g.jsx)(k.a,{className:"mx-auto",xs:12,sm:10,md:8,lg:6,children:Object(g.jsx)(P.a,{variant:"dark",className:"mx-auto",children:"No results found."})});return Object(g.jsxs)("div",{className:I.a.container,children:[m&&!b?f:null,Object(g.jsx)("div",{className:b||m?I.a.hidden:I.a.tileContainer,children:r}),Object(g.jsx)("div",{className:b||!r?I.a.hidden:null,children:Object(g.jsx)(B,{pageCount:l,currentPage:e.currentPage,onClick:function(t){c(null),e.setCurrentPage(t),O(t)}})}),Object(g.jsx)(N.a,{className:b?I.a.spinner:I.a.hidden,animation:"border",variant:"info",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})]})},Y=function(e){var t=Object(n.useState)("popularity"),a=Object(o.a)(t,2),r=a[0],c=a[1],s=function(t){var a={searchType:"detailed",sort:t.currentTarget.value,minRating:7.5,minVotes:200};c(t.currentTarget.value),e.handleParams(a)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a,{toggle:!0,className:"mt-3",children:[{name:"Most Popular",value:"popularity"},{name:"New Releases",value:"date"},{name:"Highest Rated",value:"rating"}].map((function(e,t){return Object(g.jsx)(f.a,{type:"radio",variant:"primary",name:"radio",value:e.value,checked:r===e.value,onChange:s,children:e.name},t)}))}),Object(g.jsx)(L,{searchParams:e.searchParams,searchType:"detailed",currentPage:e.currentPage,setCurrentPage:e.setCurrentPage})]})},E=a(48),U=a(49),Z=function(e){var t=Object(n.useState)(7.5),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(2010),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(n.useState)("after"),b=Object(o.a)(d,2),p=b[0],v=b[1],m=Object(n.useState)("any"),x=Object(o.a)(m,2),O=x[0],f=x[1],A=Object(n.useState)("false"),y=Object(o.a)(A,2),_=y[0],N=y[1],P=Object(n.useState)("false"),C=Object(o.a)(P,2),S=C[0],R=C[1],T=Object(n.useState)("popularity"),w=Object(o.a)(T,2),F=w[0],W=w[1],D=Object(n.useState)(!0),G=Object(o.a)(D,2),V=G[0],X=G[1],K=e.genres.map((function(e){return Object(g.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(g.jsx)(k.a,{className:"mx-auto",xs:12,sm:10,md:8,lg:6,children:Object(g.jsxs)(j.a,{noValidate:!0,validated:V,onSubmit:function(t){if(t.preventDefault(),t.stopPropagation(),!1!==t.currentTarget.checkValidity()){e.toggleAccordion();var a={searchType:"detailed",sort:F,adult:"true"===S,minRating:r,englishOnly:"true"!==_};"before"===p?a.latestDate="".concat(l-1,"-12-31"):"after"===p?a.earliestDate="".concat(+l+1,"-01-01"):"during"===p&&(a.year=l),"any"!==O&&(a.genre=O),X(!0),e.handleParams(a)}},children:[Object(g.jsxs)(j.a.Group,{controlId:"rating",children:[Object(g.jsx)(j.a.Label,{children:"Minimum Rating"}),Object(g.jsx)(j.a.Control,{type:"range",min:0,max:10,step:"0.5",value:r,onChange:function(e){return c(e.target.value)}}),Object(g.jsx)(j.a.Control,{type:"number",min:0,max:10,step:"0.1",value:r,onChange:function(e){return c(e.target.value)}}),Object(g.jsx)(j.a.Control.Feedback,{type:"invalid",children:"Value must be between 0 and 10."})]}),Object(g.jsxs)(j.a.Row,{children:[Object(g.jsxs)(j.a.Group,{as:k.a,controlId:"releaseYear",children:[Object(g.jsx)(j.a.Label,{children:"Release Year"}),Object(g.jsx)(j.a.Control,{type:"number",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(g.jsxs)(j.a.Group,{as:k.a,controlId:"yearFilterType",children:[Object(g.jsx)(j.a.Label,{children:"Filter Type"}),Object(g.jsxs)(j.a.Control,{as:"select",value:p,onChange:function(e){return v(e.target.value)},children:[Object(g.jsx)("option",{value:"before",children:"Earlier Than"}),Object(g.jsx)("option",{value:"during",children:"During"}),Object(g.jsx)("option",{value:"after",children:"Later Than"})]})]})]}),Object(g.jsxs)(j.a.Group,{controlId:"genre",children:[Object(g.jsx)(j.a.Label,{children:"Genre"}),Object(g.jsxs)(j.a.Control,{as:"select",value:O,onChange:function(e){return f(e.target.value)},children:[Object(g.jsx)("option",{value:"any",children:"Any"}),K]})]}),Object(g.jsxs)(j.a.Group,{controlId:"sortBy",children:[Object(g.jsx)(j.a.Label,{children:"Include Foreign Language Films"}),Object(g.jsxs)(j.a.Control,{as:"select",value:_,onChange:function(e){return N(e.target.value)},children:[Object(g.jsx)("option",{value:"false",children:"No"}),Object(g.jsx)("option",{value:"true",children:"Yes"})]})]}),Object(g.jsxs)(j.a.Group,{controlId:"sortBy",children:[Object(g.jsx)(j.a.Label,{children:"Include Adult Films"}),Object(g.jsxs)(j.a.Control,{as:"select",value:S,onChange:function(e){return R(e.target.value)},children:[Object(g.jsx)("option",{value:"false",children:"No"}),Object(g.jsx)("option",{value:"true",children:"Yes"})]})]}),Object(g.jsxs)(j.a.Group,{controlId:"sortBy",children:[Object(g.jsx)(j.a.Label,{children:"Sort By"}),Object(g.jsxs)(j.a.Control,{as:"select",value:F,onChange:function(e){return W(e.target.value)},children:[Object(g.jsx)("option",{value:"popularity",children:"Popularity"}),Object(g.jsx)("option",{value:"date",children:"Release Date"}),Object(g.jsx)("option",{value:"rating",children:"Average Vote"})]})]}),Object(g.jsx)(h.a,{variant:"primary",type:"submit",children:"Submit"})]})})},J=a(63),M=a.n(J),H=function(e){var t="POP"!==Object(l.f)().action&&"basic"!==e.searchParams.searchType,a=Object(n.useRef)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(E.a,{defaultActiveKey:t?"0":null,children:Object(g.jsxs)(U.a,{bg:"secondary",children:[Object(g.jsx)(U.a.Header,{children:Object(g.jsx)(E.a.Toggle,{as:h.a,variant:"primary",eventKey:"0",ref:a,children:"Advanced Search"})}),Object(g.jsx)(E.a.Collapse,{eventKey:"0",children:Object(g.jsx)(U.a.Body,{children:Object(g.jsx)(Z,{genres:e.genres,toggleAccordion:function(){return a.current.click()},handleParams:e.handleParams})})})]})}),Object(g.jsx)("div",{className:t?M.a.hidden:null,children:Object(g.jsx)(L,{searchParams:e.searchParams,currentPage:e.currentPage,setCurrentPage:e.setCurrentPage})})]})},z=a(20),Q=a.n(z),$=function(){var e,t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(1),i=Object(o.a)(s,2),u=i[0],d=i[1],j=Object(l.g)().id,b=Object(l.f)();return Object(n.useEffect)((function(){Object(_.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,D.getMovieById(j);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[j]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:r?Q.a.container:Q.a.hidden,children:[Object(g.jsx)(h.a,{onClick:function(){return b.goBack()},variant:"dark",className:Q.a.backButton,children:"Back"}),Object(g.jsx)("img",{className:Q.a.image,src:null===r||void 0===r?void 0:r.imgSrc,alt:"".concat(null===r||void 0===r?void 0:r.title," poster")}),Object(g.jsx)("div",{className:Q.a.title,children:null===r||void 0===r?void 0:r.title}),Object(g.jsxs)("div",{children:["Genres:",Object(g.jsx)("span",{className:Q.a.genres,children:null===r||void 0===r||null===(e=r.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(", ")})]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:["Averate Rating:",Object(g.jsx)("span",{className:Q.a.voteAvg,children:null===r||void 0===r?void 0:r.voteAvg})]}),Object(g.jsxs)("div",{className:Q.a.releaseDate,children:["Release Date: ",null===r||void 0===r?void 0:r.releaseDate]})]}),Object(g.jsx)("div",{className:Q.a.overview,children:null===r||void 0===r?void 0:r.overview})]}),Object(g.jsx)("h2",{className:Q.a.similarFilms,children:"Similar Films"}),Object(g.jsx)(L,{searchParams:{movieId:j,searchType:"similar"},currentPage:u,setCurrentPage:d})]})},ee=function(){return Object(g.jsx)(k.a,{className:"mx-auto",xs:12,sm:10,md:8,lg:6,children:Object(g.jsxs)(P.a,{variant:"warning",className:"mt-4",children:[Object(g.jsx)(P.a.Heading,{children:"Page not found"}),Object(g.jsx)("p",{children:"The page you're looking for doesn't exist. Check the address or head back to the home page."}),Object(g.jsx)("hr",{}),Object(g.jsx)("p",{className:"mb-0",children:Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)(h.a,{children:"Go to Homepage"})})})]})})};a(79);var te=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),s=Object(o.a)(c,2),i=s[0],u=s[1],d=Object(n.useState)({searchType:"detailed",sort:"popularity",minRating:7.5,minVotes:200}),j=Object(o.a)(d,2),b=j[0],h=j[1];Object(n.useEffect)((function(){D.getGenres().then((function(e){return r(e.genres)}))}),[]);var p=function(e){h(e),u(1)};return Object(g.jsxs)("div",{className:"App bg-secondary",children:[Object(g.jsx)(x,{handleParams:p}),Object(g.jsx)("div",{className:"pageContent",children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/search",children:Object(g.jsx)(H,{genres:a,currentPage:i,setCurrentPage:u,searchParams:b,handleParams:p})}),Object(g.jsx)(l.a,{path:"/movie/:id",children:Object(g.jsx)($,{})}),Object(g.jsx)(l.a,{exact:!0,path:["/","/cn-react-movie-app"],children:Object(g.jsx)(Y,{currentPage:i,setCurrentPage:u,searchParams:b,handleParams:p})}),Object(g.jsx)(l.a,{path:"*",children:Object(g.jsx)(ee,{})})]})})]})};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(te,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.fe1f07c1.chunk.js.map