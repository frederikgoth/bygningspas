(this.webpackJsonpbygningspas=this.webpackJsonpbygningspas||[]).push([[0],{101:function(e,a,t){},140:function(e,a,t){},143:function(e,a,t){},238:function(e,a,t){},239:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),s=t(46),l=t.n(s),r=t(6),c=t(7),o=t(10),d=t(9),b=t(8),h=(t(86),t(87),t(88),t(76)),j=[{id:0,name:"Birkevej",area:"20",imageSrc:"https://historiskehuse.dk/wp-content/uploads/2020/09/Hus-foto-test-20.06.2019-600x400-1.jpg",floors:"2",built:"1978",location:[55.6099889,12.3687678,-160,0]},{id:1,name:"Vibevej",area:"127",imageSrc:"https://kfs-boligbyg.dk/wp-content/uploads/2018/03/1_artikel_flere_koeber_et_indflytningsklart_hus.jpg",floors:"2",built:"1999",location:[57.0294762,9.9319315,-65,0]},{id:2,name:"Vinkelvej",area:"800",imageSrc:"https://www.nybolig.dk/-/media/estate/billeder/estate-content/016koeb-insurance-min-jpg.jpg",floors:"7",built:"1878",location:[55.8129262,12.3656645,-65,0]},{id:3,name:"Engvej",area:"2",imageSrc:"https://www.huscompagniet.dk/dfsmedia/35a7daa9b85a4a16a2f4208b493b8de1/20017-50057",floors:"1",built:"1958",location:[55.6533113,12.6313282,-95,10]},{id:4,name:"Vestergade",area:"87",imageSrc:"https://selvmaegler.dk/images/userimage/1593098619_01_hus_005.jpg",floors:"1",built:"1923",location:[56.1570189,10.1983838,-195,20]},{id:5,name:"Kirkevej",area:"234",imageSrc:"https://bolignyheder.boligsiden.dk/wp-content/uploads/2019/05/Vedb%C3%A6k-Strandvej-328_Home-1024x683.jpg",floors:"2",built:"1995",location:[55.9750104,12.3457449,-180,0]},{id:6,name:"Industrivej",area:"174",imageSrc:"https://www.tv2fyn.dk/files/styles/fixed_width_medium_2x/public/media/2020/40/billigt_hus_0.jpg?itok=o8VzFkzY",floors:"1",built:"1964",location:[55.6441577,12.118778,-20,15]},{id:7,name:"Elmevej",area:"80",imageSrc:"https://www.bernt-nielsen.dk/wp-content/uploads/2020/09/bernt-nielsen-h-hus1500x630.jpg",floors:"1",built:"1939",location:[56.4471287,10.0455847,-115,15]},{id:8,name:"Stationsvej",area:"133",imageSrc:"https://finans.dk/incoming/image/11357205/iokakl/ALTERNATES/f_b-5_3/okoestjylland.jpeg",floors:"2",built:"1911",location:[55.8177239,12.4723253,160,0]},{id:9,name:"Skovvej",area:"295",imageSrc:"https://i.boliga.org/dk/max/1709/1709468.jpg",floors:"100",built:"1926",location:[55.7650745,12.5476359,-90,0]}],u=t(79),p=t.n(u),g=t(0),O=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){return Object(r.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){var e={position:{lat:this.props.building.location[0],lng:this.props.building.location[1]},pov:{heading:this.props.building.location[2],pitch:this.props.building.location[3]},zoom:1};return Object(g.jsx)("div",{style:{width:"550px",height:"550px",backgroundColor:"#eeeeee"},children:Object(g.jsx)(p.a,{apiKey:"AIzaSyCwIG4lbTXNcDjbNAetvu3XMiiUYJm78Tc",streetViewPanoramaOptions:e})})}}]),t}(i.a.Component),m=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).handleOnSearch=function(e,a){console.log(e,a)},n.handleOnSelect=function(e){console.log(e);var a=e.name,t=e.area,i=e.imageSrc,s=e.floors,l=e.built,r=e.location;n.props.onChange(a,t,i,s,l,!0,r,!1)},n.handleOnFocus=function(){console.log("Focused")},n.handleOnSearch=n.handleOnSearch.bind(Object(o.a)(n)),n.handleOnSelect=n.handleOnSelect.bind(Object(o.a)(n)),n.handleOnFocus=n.handleOnFocus.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"render",value:function(){return!0===this.props.building.goBack?Object(g.jsx)("div",{className:"SearchPage",children:Object(g.jsx)("div",{className:"SearchBar",children:Object(g.jsx)("header",{className:"SearchHeader",children:Object(g.jsx)("div",{className:"SearchBar-fields",style:{width:200,margin:20},children:Object(g.jsx)(h.ReactSearchAutocomplete,{placeholder:"Adresse",items:j,onSearch:this.handleOnSearch,onSelect:this.handleOnSelect,onFocus:this.handleOnFocus,styling:{zIndex:2},autoFocus:!0})})})})}):Object(g.jsx)("div",{})}}]),t}(i.a.Component),f=(t(101),t(241),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){return Object(r.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.building.area,a=this.props.building.floors,t=e*a,n=Math.floor(4*Math.sqrt(e)),i=n*(2.5*a),s=Math.floor(1.1*e),l=Math.floor(.15*i),r=this.props.building.built,c=2021-r;return!0===this.props.building.selectAddress&&""===this.props.building.selectEdit?Object(g.jsxs)("div",{className:"Building",children:[Object(g.jsx)("div",{className:"image-container",children:Object(g.jsx)(O,{building:this.props.building})}),Object(g.jsx)("h2",{className:"address-title",children:this.props.building.address}),Object(g.jsxs)("div",{className:"information-container",children:[Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"Etageareal"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:e})})]}),Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"Etager"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:a})})]}),Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"Samlet areal"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:t})})]})]}),Object(g.jsxs)("div",{className:"information-container",id:"i2",children:[Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"Omkreds"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:n})})]}),Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"V\xe6gareal"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:i})})]}),Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"Tagareal"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:s})})]})]}),Object(g.jsxs)("div",{className:"information-container",id:"i3",children:[Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"Vinduesareal"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:l})})]}),Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"Opf\xf8rt"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:r})})]}),Object(g.jsxs)("div",{className:"paravar",children:[Object(g.jsx)("p",{className:"parameter",children:Object(g.jsx)("span",{children:"Alder"})}),Object(g.jsx)("p",{className:"variable",children:Object(g.jsx)("span",{children:c})})]})]})]}):Object(g.jsx)("div",{})}}]),t}(i.a.Component)),v=(t(140),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).handleSimpleClick=n.handleSimpleClick.bind(Object(o.a)(n)),n.handleAdvancedClick=n.handleAdvancedClick.bind(Object(o.a)(n)),n.handleBackClick=n.handleBackClick.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"handleSimpleClick",value:function(){this.props.onChange1("simple")}},{key:"handleAdvancedClick",value:function(){this.props.onChange1("advanced")}},{key:"handleBackClick",value:function(){this.props.onChange2(!0,!1)}},{key:"render",value:function(){return!0===this.props.building.selectAddress&&""===this.props.building.selectEdit?Object(g.jsx)("div",{className:"mainMaterial",children:Object(g.jsxs)("div",{className:"buttonDiv",children:[Object(g.jsx)("a",{className:"buttonMaterial",onClick:this.handleBackClick,children:"Tilbage"}),Object(g.jsx)("a",{className:"buttonMaterial",onClick:this.handleSimpleClick,children:"Rediger"}),Object(g.jsx)("a",{className:"buttonMaterial",onClick:this.handleAdvancedClick,children:"Rediger avanceret"})]})}):Object(g.jsx)("div",{})}}]),t}(i.a.Component)),x=t(23),k=t.n(x);t(142),t(143);var S=t(20),C=["Beton","Tr\xe6","Mursten"],N=["Skifer","Beton","Tagpap","Tegl"],M=["Beton","Tr\xe6"],y=["Beton","Tr\xe6"],w=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={wallMaterial:[],roofMaterial:[],floorMaterial:[],foundationMaterial:[]},n.handleWallSelect=n.handleWallSelect.bind(Object(o.a)(n)),n.handleRoofSelect=n.handleRoofSelect.bind(Object(o.a)(n)),n.handleFloorSelect=n.handleFloorSelect.bind(Object(o.a)(n)),n.handleFoundationSelect=n.handleFoundationSelect.bind(Object(o.a)(n)),n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"handleWallSelect",value:function(e){this.setState({wallMaterial:e.value})}},{key:"handleRoofSelect",value:function(e){this.setState({roofMaterial:e.value})}},{key:"handleFloorSelect",value:function(e){this.setState({floorMaterial:e.value})}},{key:"handleFoundationSelect",value:function(e){this.setState({foundationMaterial:e.value})}},{key:"handleClick",value:function(){this.props.onChange("")}},{key:"render",value:function(){var e=this.props.building.area,a=this.props.building.floors,t=e*a,n=Math.floor(4*Math.sqrt(e))*(2.5*a),i=Math.floor(1.1*e),s=(Math.floor(.15*n),function(e){if("Beton"===e)return[.3,.5,.2,0,0];if("Mursten"===e)return[0,.5,.2,.3,0];if("Tr\xe6"===e)return[0,.8,.1,0,.1];return[]}(this.state.wallMaterial)),l=function(e){if("Beton"===e)return[.8,.1,.1,0,0,0];if("Skifer"===e)return[0,.1,.1,.8,0,0];if("Tagpap"===e)return[0,.5,.1,0,.2,0];if("Tegl"===e)return[0,.1,.1,0,0,.8];return[]}(this.state.roofMaterial),r=function(e){if("Beton"===e)return[.3,.5,.2,0];if("Tr\xe6"===e)return[0,.8,.1,.1];return[]}(this.state.floorMaterial),c=function(e){if("Beton"===e)return[.3,.5,.2,0];if("Tr\xe6"===e)return[0,.8,.1,.1];return[]}(this.state.foundationMaterial),o=s.map((function(e){return Math.floor(e*n*.5)})),d=r.map((function(e){return Math.floor(e*t*.3)})),b=l.map((function(e){return Math.floor(e*i*.2)})),h=c.map((function(a){return Math.floor(a*e*.5)})),j={labels:["Beton","Isolering","Tr\xe6","Mursten","Metal"],datasets:[{label:"# of Votes",data:o,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]},u={labels:["Beton","Tr\xe6","Metal","Skifer","Tagpap","Tegl"],datasets:[{label:"# of Votes",data:b,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(100, 152, 255, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(100, 152, 255, 0.2)"],borderWidth:1}]},p={labels:["Beton","Isolering","Tr\xe6","Metal"],datasets:[{label:"# of Votes",data:d,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)"],borderWidth:1}]},O={labels:["Beton","Isolering","Tr\xe6","Metal"],datasets:[{label:"# of Votes",data:h,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)"],borderWidth:1}]},m={labels:["1","2","3","4","5","6"],datasets:[{label:"V\xe6g",data:o,backgroundColor:"rgb(255, 99, 132)"},{label:"Tag",data:b,backgroundColor:"rgb(54, 162, 235)"},{label:"Gulv",data:d,backgroundColor:"rgb(75, 192, 192)"},{label:"Fundament",data:h,backgroundColor:"rgb(75, 192, 192)"}]};return!0===this.props.building.selectAddress&&"simple"===this.props.building.selectEdit?Object(g.jsxs)("div",{className:"simpleMain",children:[Object(g.jsx)("h2",{children:"REDIGER SIMPEL"}),Object(g.jsx)("h3",{className:"simpleInfo",children:this.props.building.address}),Object(g.jsxs)("div",{className:"dropdownContainer",children:[Object(g.jsxs)("div",{className:"dropdownMenu",children:[Object(g.jsx)("p",{className:"dropdownTitle",children:"Yderv\xe6gge"}),Object(g.jsx)(k.a,{options:C,onChange:this.handleWallSelect,placeholder:"V\xe6lg et materiale"}),Object(g.jsx)(S.Pie,{data:j,className:"pieChart",style:"height: 140px"})]}),Object(g.jsxs)("div",{className:"dropdownMenu",children:[Object(g.jsx)("p",{className:"dropdownTitle",children:"Tag"}),Object(g.jsx)(k.a,{options:N,onChange:this.handleRoofSelect,placeholder:"V\xe6lg et materiale"}),Object(g.jsx)(S.Pie,{data:u,className:"pieChart"})]}),Object(g.jsxs)("div",{className:"dropdownMenu",children:[Object(g.jsx)("p",{className:"dropdownTitle",children:"Terr\xe6nd\xe6k"}),Object(g.jsx)(k.a,{options:M,onChange:this.handleFloorSelect,placeholder:"V\xe6lg et materiale"}),Object(g.jsx)(S.Pie,{data:p,className:"pieChart"})]}),Object(g.jsxs)("div",{className:"dropdownMenu",children:[Object(g.jsx)("p",{className:"dropdownTitle",children:"Fundament"}),Object(g.jsx)(k.a,{options:y,onChange:this.handleFoundationSelect,placeholder:"V\xe6lg et materiale"}),Object(g.jsx)(S.Pie,{data:O,className:"pieChart"})]})]}),Object(g.jsx)("div",{className:"barContainer",children:Object(g.jsx)(S.Bar,{data:m,options:{scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0}]}},width:300,height:400})}),Object(g.jsx)("div",{className:"simpleButtonContainer",children:Object(g.jsx)("a",{className:"simpleButton",onClick:this.handleClick,children:"Tilbage"})})]}):Object(g.jsx)("div",{})}}]),t}(i.a.Component),B=(t(238),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"handleClick",value:function(){this.props.onChange("")}},{key:"render",value:function(){return!0===this.props.building.selectAddress&&"advanced"===this.props.building.selectEdit?Object(g.jsxs)("div",{className:"advancedMain",children:[Object(g.jsx)("h2",{children:"REDIGER AVANCERET"}),Object(g.jsx)("h3",{children:this.props.building.address}),Object(g.jsx)("div",{className:"advancedButtonContainer",children:Object(g.jsx)("a",{className:"advancedButton",onClick:this.handleClick,children:"Tilbage"})})]}):Object(g.jsx)("div",{})}}]),t}(i.a.Component)),T=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={imageSrc:"",address:"",area:"",floors:"",built:"",selectAddress:!1,selectEdit:"",location:[],goBack:!0},n.changeAddress=n.changeAddress.bind(Object(o.a)(n)),n.changeEdit=n.changeEdit.bind(Object(o.a)(n)),n.changeBack=n.changeBack.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"changeAddress",value:function(e,a,t,n,i,s,l,r){this.setState({address:e}),this.setState({area:a}),this.setState({imageSrc:t}),this.setState({floors:n}),this.setState({built:i}),this.setState({selectAddress:s}),this.setState({location:l}),this.setState({goBack:r})}},{key:"changeEdit",value:function(e){this.setState({selectEdit:e})}},{key:"changeBack",value:function(e,a){this.setState({goBack:e}),this.setState({selectAddress:a})}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("div",{className:"pageTitle",children:Object(g.jsx)("h1",{children:"Bygningspas"})}),Object(g.jsx)(m,{building:this.state,onChange:this.changeAddress}),Object(g.jsxs)("div",{className:"Info",children:[Object(g.jsx)(f,{building:this.state}),Object(g.jsx)(v,{building:this.state,onChange1:this.changeEdit,onChange2:this.changeBack}),Object(g.jsx)(w,{building:this.state,onChange:this.changeEdit}),Object(g.jsx)(B,{building:this.state,onChange:this.changeEdit})]})]})}}]),t}(i.a.Component);l.a.render(Object(g.jsx)(T,{}),document.getElementById("root"))},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){}},[[239,1,2]]]);
//# sourceMappingURL=main.932297b1.chunk.js.map