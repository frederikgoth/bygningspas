(this.webpackJsonpbygningspas=this.webpackJsonpbygningspas||[]).push([[0],{24:function(e,a,t){},25:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),r=t(14),i=t.n(r),c=t(2),l=t(3),d=t(6),o=t(5),h=t(4),j=(t(24),t(25),t(15)),g=[{id:0,name:"Birkevej",area:"Areal: 20 m2",imageSrc:"https://historiskehuse.dk/wp-content/uploads/2020/09/Hus-foto-test-20.06.2019-600x400-1.jpg",floors:"Etager: 2"},{id:1,name:"Vibevej",area:"Areal: 127 m2",imageSrc:"https://kfs-boligbyg.dk/wp-content/uploads/2018/03/1_artikel_flere_koeber_et_indflytningsklart_hus.jpg",floors:"Etager: 2"},{id:2,name:"Vinkelvej",area:"Areal: 800 m2",imageSrc:"https://www.nybolig.dk/-/media/estate/billeder/estate-content/016koeb-insurance-min-jpg.jpg",floors:"Etager: 7"},{id:3,name:"Engvej",area:"Areal: 2 m2",imageSrc:"https://www.huscompagniet.dk/dfsmedia/35a7daa9b85a4a16a2f4208b493b8de1/20017-50057",floors:"Etager: 1"},{id:4,name:"Vestergade",area:"Areal: 87 m2",imageSrc:"https://selvmaegler.dk/images/userimage/1593098619_01_hus_005.jpg",floors:"Etager: 1"},{id:5,name:"Kirkevej",area:"Areal: 234 m2",imageSrc:"https://bolignyheder.boligsiden.dk/wp-content/uploads/2019/05/Vedb%C3%A6k-Strandvej-328_Home-1024x683.jpg",floors:"Etager: 2"},{id:6,name:"Industrivej",area:"Areal: 174 m2",imageSrc:"https://www.tv2fyn.dk/files/styles/fixed_width_medium_2x/public/media/2020/40/billigt_hus_0.jpg?itok=o8VzFkzY",floors:"Etager: 1"},{id:7,name:"Elmevej",area:"Areal: 80 m2",imageSrc:"https://www.bernt-nielsen.dk/wp-content/uploads/2020/09/bernt-nielsen-h-hus1500x630.jpg",floors:"Etager: 1"},{id:8,name:"Stationsvej",area:"Areal: 133 m2",imageSrc:"https://finans.dk/incoming/image/11357205/iokakl/ALTERNATES/f_b-5_3/okoestjylland.jpeg",floors:"Etager: 2"},{id:9,name:"Skovvej",area:"Areal: 295 m2",imageSrc:"https://i.boliga.org/dk/max/1709/1709468.jpg",floors:"Etager: 100"}],b=t(0),u=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).handleOnSearch=function(e,a){console.log(e,a)},s.handleOnSelect=function(e){console.log(e);var a=e.name,t=e.area,n=e.imageSrc,r=e.floors;s.props.onChange(a,t,n,r,!0)},s.handleOnFocus=function(){console.log("Focused")},s.handleOnSearch=s.handleOnSearch.bind(Object(d.a)(s)),s.handleOnSelect=s.handleOnSelect.bind(Object(d.a)(s)),s.handleOnFocus=s.handleOnFocus.bind(Object(d.a)(s)),s}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"SearchBar",children:Object(b.jsxs)("header",{className:"SearchHeader",children:[Object(b.jsx)("div",{className:"SearchBar-fields",style:{width:200,margin:20},children:Object(b.jsx)(j.ReactSearchAutocomplete,{placeholder:"Adresse",items:g,onSearch:this.handleOnSearch,onSelect:this.handleOnSelect,onFocus:this.handleOnFocus,styling:{zIndex:2},autoFocus:!0})}),Object(b.jsx)("div",{className:"SearchBar-submit",children:Object(b.jsx)("a",{children:"S\xf8g"})})]})})}}]),t}(n.a.Component),m=(t(37),function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Building",children:[Object(b.jsx)("div",{className:"image-container",children:Object(b.jsx)("img",{src:this.props.building.imageSrc,alt:""})}),Object(b.jsx)("h2",{children:this.props.building.address}),Object(b.jsx)("div",{className:"adress-information",children:Object(b.jsxs)("div",{className:"Building-address",children:[Object(b.jsx)("p",{children:this.props.building.area}),Object(b.jsx)("p",{children:this.props.building.floors})]})})]})}}]),t}(n.a.Component)),O=(t(38),function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"mainMaterial",children:[Object(b.jsxs)("div",{className:"listMaterial",children:[Object(b.jsxs)("div",{className:"itemMaterial",children:[Object(b.jsx)("h2",{children:"Bygning"}),Object(b.jsx)("h4",{children:this.props.building.address})]}),Object(b.jsxs)("div",{className:"itemMaterial",children:[Object(b.jsx)("h2",{children:"Bygningsdel"}),Object(b.jsx)("h4",{children:"Tag"}),Object(b.jsx)("h4",{children:"Yderv\xe6gge"})]})]}),Object(b.jsxs)("div",{className:"divButton",children:[Object(b.jsx)("a",{className:"buttonMaterial",children:"Rediger"}),Object(b.jsx)("a",{className:"buttonMaterial",children:"Rediger avanceret"})]})]})}}]),t}(n.a.Component)),p=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).state={imageSrc:"",address:"",area:"",floors:"",selectAddress:!1},s.changeAddress=s.changeAddress.bind(Object(d.a)(s)),s}return Object(l.a)(t,[{key:"changeAddress",value:function(e,a,t,s,n){this.setState({address:e}),this.setState({area:a}),this.setState({imageSrc:t}),this.setState({floors:s}),this.setState({selectAddress:n})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Bygningspas"}),Object(b.jsx)(u,{address:this.state.address,onChange:this.changeAddress}),Object(b.jsxs)("div",{className:"Info",children:[this.state.selectAddress?Object(b.jsx)(O,{building:this.state}):Object(b.jsx)("div",{}),this.state.selectAddress?Object(b.jsx)(m,{building:this.state}):Object(b.jsx)("div",{})]})]})}}]),t}(n.a.Component);i.a.render(Object(b.jsx)(p,{}),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("/bygningspas","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[40,1,2]]]);
//# sourceMappingURL=main.37bfd756.chunk.js.map