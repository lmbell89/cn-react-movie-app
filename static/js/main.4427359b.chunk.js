(this["webpackJsonpcn-react-movie-app"]=this["webpackJsonpcn-react-movie-app"]||[]).push([[0],{15:function(e,t,a){e.exports={container:"movie_container__3t294",backButton:"movie_backButton__3ROKN",title:"movie_title__2n2dh",voteAvg:"movie_voteAvg__1fFOG",overview:"movie_overview__3l_37",similarFilms:"movie_similarFilms__2qg1b"}},25:function(e,t,a){e.exports={tile:"tile_tile__1BbVi",image:"tile_image__1GBio",title:"tile_title__1ezmR",subText:"tile_subText__3e4JP",rating:"tile_rating__11GmW"}},28:function(e,t,a){e.exports={container:"searchResults_container__Vq7C_",tileContainer:"searchResults_tileContainer__3I7XO",spinner:"searchResults_spinner__3hYP-",noResults:"searchResults_noResults__JhpmU"}},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),i=a(16),o=a(6),u=a(19),l=a(29),v=a(50),p=a(49),d=a(32),j=a(23),m=a(2),b=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(o.f)();return Object(m.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:[Object(m.jsx)(l.a.Brand,{href:"/",children:"Movies App"}),Object(m.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(l.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsx)(v.a,{className:"mr-auto"}),Object(m.jsxs)(p.a,{inline:!0,onSubmit:function(e){c.push({pathname:"/search",state:{title:a}}),e.preventDefault()},children:[Object(m.jsx)(d.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){r(e.target.value)},value:a}),Object(m.jsx)(j.a,{variant:"outline-primary",children:"Search"})]})]})]})},h=a(47),A=a(48),f=a(9),x=a.n(f),g=a(13),O=a(46),y=a(45),_=function(){var e=Object(g.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.poster_path){e.next=6;break}return e.next=3,R(t.poster_path);case 3:a=e.sent,e.next=7;break;case 6:a="data:image/png;base64,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";case 7:return n={title:t.title,imgSrc:a,voteAvg:t.vote_average.toFixed(1),releaseDate:t.release_date,overview:t.overview,movieId:t.id},e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()}));case 2:if((a=e.sent).results){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,Promise.all(a.results.map((function(e){return _(e)})));case 7:return n=e.sent,e.abrupt("return",{results:n,pageCount:a.total_pages,pageItems:a.results.length,totalItems:a.total_results});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(g.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(F,"/w200/").concat(t)).then((function(e){return e.blob()})).then((function(e){return URL.createObjectURL(e)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=["api_key=".concat(S.KEY)];if(e.title){var a=e.title.split(" ").filter((function(e){return e})).join("+");t.push("query=".concat(a))}return e.sort&&t.push("sort_by=".concat({title:"original_title.asc",rating:"vote_average.desc",date:"primary_release_date.desc",popularity:"popularity.desc"}[e.sort])),e.adult&&t.push("include_adult=true"),e.page&&t.push("page=".concat(e.page)),e.minRating&&t.push("vote_average.gte=".concat(e.minRating)),e.minVotes&&t.push("vote_count.gte=".concat(e.minVotes)),e.year&&t.push("year=".concat(e.year)),t.join("&")},W="https://api.themoviedb.org/3",F="https://image.tmdb.org/t/p",S=function e(){Object(y.a)(this,e)};S.KEY="0f0a1bd520946ddd18204d0ae65f52ed",S.getMovieById=function(){var e=Object(g.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(W,"/movie/").concat(t,"?api_key=").concat(S.KEY),e.abrupt("return",fetch(a).then((function(e){return e.json()})).then((function(e){return _(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S.getMovieByTitle=function(){var e=Object(g.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k(t),n="".concat(W,"/search/movie?").concat(a),e.next=4,N(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S.getSearchResults=function(){var e=Object(g.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k(t),n="".concat(W,"/discover/movie?").concat(a),e.next=4,N(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S.getSimilarMovies=function(){var e=Object(g.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(W,"/movie/").concat(t,"/similar?api_key=").concat(S.KEY,"&page=").concat(a),e.next=3,N(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var w=a(25),T=a.n(w),X=function(e){var t;return Object(m.jsxs)(i.b,{className:T.a.tile,to:{pathname:"/movie/".concat(e.movieId),state:{title:e.title,imgSrc:e.imgSrc,voteAvg:e.voteAvg,releaseDate:e.releaseDate,overview:e.overview}},children:[Object(m.jsx)("img",{src:e.imgSrc,alt:"".concat(e.title," poster")}),Object(m.jsxs)("div",{className:T.a.info,children:[Object(m.jsx)("div",{className:T.a.title,children:e.title}),Object(m.jsxs)("div",{className:T.a.subText,children:[Object(m.jsx)("span",{className:T.a.rating,children:e.voteAvg}),Object(m.jsx)("span",{children:null===(t=e.releaseDate)||void 0===t?void 0:t.substr(0,4)})]})]})]})},q=a(30),K=function(e){for(var t=Math.max(1,e.currentPage-2),a=Math.min(e.pageCount,t+4),n=[Object(m.jsx)(q.a.Prev,{onClick:function(){return e.onClick(e.currentPage-1)},children:"Previous"})],r=function(t){n.push(Object(m.jsx)(q.a.Item,{onClick:function(){return e.onClick(t)},active:e.currentPage===t,children:t}))},c=t;c<a+1;c++)r(c);return n.push(Object(m.jsx)(q.a.Next,{onClick:function(){return e.onClick(e.currentPage+1)},children:"Next"})),Object(m.jsx)(q.a,{className:"justify-content-center",children:n})},V=a(28),D=a.n(V),C=function(e){var t=Object(n.useState)(1),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(null),i=Object(u.a)(s,2),o=i[0],l=i[1];Object(n.useEffect)((function(){v(r)}),[e.searchParams]);var v=function(){var t=Object(g.a)(x.a.mark((function t(a){var n,s,i,o,u;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((s=e.searchParams).page=a,"detailed"!==e.searchType){t.next=8;break}return t.next=5,S.getSearchResults(s);case 5:n=t.sent,t.next=17;break;case 8:if("basic"!==e.searchType){t.next=14;break}return t.next=11,S.getMovieByTitle(s);case 11:n=t.sent,t.next=17;break;case 14:return t.next=16,S.getSimilarMovies(s.movieId,s.page);case 16:n=t.sent;case 17:n&&n.totalItems?(i=n.results.map((function(e){return Object(m.jsx)(X,{movieId:e.movieId,title:e.title,imgSrc:e.imgSrc,voteAvg:e.voteAvg,releaseDate:e.releaseDate,overview:e.overview},e.movieId)})),o=function(e){l(null),c(e),v(e)},u=Object(m.jsx)(K,{pageCount:n.pageCount,currentPage:r,onClick:o}),l(Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:D.a.tileContainer,children:i}),u]}))):l(Object(m.jsx)("div",{className:D.a.noResults,children:"No results found"}));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=Object(m.jsx)(O.a,{className:D.a.spinner,animation:"border",variant:"info",children:Object(m.jsx)("span",{className:"sr-only",children:"Loading..."})});return Object(m.jsx)("div",{className:D.a.container,children:o||p})},B=function(){var e=Object(n.useState)("popularity"),t=Object(u.a)(e,2),a=t[0],r=t[1],c={sort:a,minRating:7.5,minVotes:200};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.a,{toggle:!0,className:"mt-3",children:[{name:"Most Popular",value:"popularity"},{name:"New Releases",value:"date"},{name:"Highest Rated",value:"rating"}].map((function(e,t){return Object(m.jsx)(A.a,{type:"radio",variant:"primary",name:"radio",value:e.value,checked:a===e.value,onChange:function(e){return r(e.currentTarget.value)},children:e.name},t)}))}),Object(m.jsx)(C,{searchParams:c,searchType:"detailed"})]})},G=function(e){var t,a={title:null===(t=Object(o.g)().state)||void 0===t?void 0:t.title}||{title:""};return Object(m.jsx)(C,{searchParams:a,searchType:"basic"})},U=a(15),Z=a.n(U),E=function(){var e=Object(o.g)(),t=Object(o.f)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:Z.a.container,children:[Object(m.jsx)(j.a,{onClick:function(){return t.goBack()},variant:"outline-dark",className:Z.a.backButton,children:"Back"}),Object(m.jsx)("img",{className:Z.a.image,src:e.state.imgSrc,alt:"".concat(e.state.title," poster")}),Object(m.jsx)("div",{className:Z.a.title,children:e.state.title}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:["Averate Rating:",Object(m.jsx)("span",{className:Z.a.voteAvg,children:e.state.voteAvg})]}),Object(m.jsxs)("div",{className:Z.a.releaseDate,children:["Release Date: ",e.state.releaseDate]})]}),Object(m.jsx)("div",{className:Z.a.overview,children:e.state.overview})]}),Object(m.jsx)("h2",{className:Z.a.similarFilms,children:"Similar Films"}),Object(m.jsx)(C,{searchParams:{movieId:e.state.movieId},searchType:"detailed"})]})};a(65),a(66);var P=function(){return Object(m.jsxs)("div",{className:"App bg-secondary",children:[Object(m.jsx)(b,{}),Object(m.jsx)("div",{className:"pageContent",children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(B,{page:1})}),Object(m.jsx)(o.a,{exact:!0,path:"/cn-react-movie-app",children:Object(m.jsx)(B,{page:1})}),Object(m.jsx)(o.a,{path:"/search",children:Object(m.jsx)(G,{})}),Object(m.jsx)(o.a,{path:"/movie/:id",children:Object(m.jsx)(E,{})})]})})]})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(P,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.4427359b.chunk.js.map