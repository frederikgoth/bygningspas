(this.webpackJsonpbygningspas=this.webpackJsonpbygningspas||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(8),r=n.n(i),c=n(2),o=n(3),h=n(5),l=n(4),u=(n(13),n(14),n(15),n(0)),d=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Business",children:[Object(u.jsx)("div",{className:"image-container",children:Object(u.jsx)("img",{src:this.props.business.imageSrc,alt:""})}),Object(u.jsx)("h2",{children:this.props.business.name}),Object(u.jsxs)("div",{className:"Business-information",children:[Object(u.jsxs)("div",{className:"Business-address",children:[Object(u.jsx)("p",{children:this.props.business.address}),Object(u.jsx)("p",{children:this.props.business.city}),Object(u.jsx)("p",{children:"".concat(this.props.business.state," ").concat(this.props.business.zipCode)})]}),Object(u.jsxs)("div",{className:"Business-reviews",children:[Object(u.jsx)("h3",{children:this.props.business.category.toUpperCase()}),Object(u.jsx)("h3",{className:"rating",children:"".concat(this.props.business.rating," stars")}),Object(u.jsx)("p",{children:"".concat(this.props.business.reviewCount," reviews")})]})]})]})}}]),n}(a.a.Component),j=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"BusinessList",children:this.props.businesses.map((function(e){return Object(u.jsx)(d,{business:e})}))})}}]),n}(a.a.Component),p=n(6),b=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},s.handleTermChange=s.handleTermChange.bind(Object(p.a)(s)),s.handleLocationChange=s.handleLocationChange.bind(Object(p.a)(s)),s.handleSearch=s.handleSearch.bind(Object(p.a)(s)),s.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},s}return Object(o.a)(n,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var n=e.sortByOptions[t];return Object(u.jsx)("li",{className:e.getSortByClass(n),onClick:e.handleSortByChange.bind(e,n),children:t},n)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"SearchBar",children:[Object(u.jsx)("div",{className:"SearchBar-sort-options",children:Object(u.jsx)("ul",{children:this.renderSortByOptions()})}),Object(u.jsxs)("div",{className:"SearchBar-fields",children:[Object(u.jsx)("input",{placeholder:"Vejnavn",onChange:this.handleTermChange}),Object(u.jsx)("input",{placeholder:"Nummer",onChange:this.handleLocationChange}),Object(u.jsx)("input",{placeholder:"Postnummer",onChange:this.handleLocationChange})]}),Object(u.jsx)("div",{className:"SearchBar-submit",children:Object(u.jsx)("a",{onClick:this.handleSearch,children:"S\xf8g"})})]})}}]),n}(a.a.Component)),g=[{imageSrc:"https://plantationhomes.com.au/cms_uploads/images/15861_six-stages-of-building-a-home.jpg",name:"MarginOtto Pizzeria",address:"1010 Paddington Way",city:"Bordertown",state:"NY",zipCode:"10101",category:"Italian",rating:4.5,reviewCount:90}],O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"searchYelp",value:function(e,t,n){console.log("Searching Yelp with ".concat(e,", ").concat(t,", ").concat(n))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Bygningspas"}),Object(u.jsx)(b,{searchYelp:this.searchYelp}),Object(u.jsx)(j,{businesses:g})]})}}]),n}(a.a.Component);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("/bygningspas","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}],[[18,1,2]]]);
//# sourceMappingURL=main.f8b2ffe9.chunk.js.map