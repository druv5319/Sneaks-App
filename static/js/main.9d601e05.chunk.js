(this["webpackJsonpsneaks-app"]=this["webpackJsonpsneaks-app"]||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/stockx.d8e1c1ba.png"},31:function(e,a,t){e.exports=t.p+"static/media/goat.00eed65c.png"},32:function(e,a,t){e.exports=t.p+"static/media/flightclub.ce23488a.png"},33:function(e,a,t){e.exports=t.p+"static/media/stadiumgoods.1add9161.png"},41:function(e,a,t){e.exports=t.p+"static/media/Sneaks_Logo.b91240ab.png"},69:function(e,a,t){e.exports=t(86)},74:function(e,a,t){},75:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(21),r=t.n(c),o=t(36),s=(t(74),t(75),t(40)),i=t(35),m=t(41),d=t.n(m),u=function(){return l.a.createElement(s.a,{expand:"lg",bg:"light",class:"navbar"},l.a.createElement(s.a.Brand,null,l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:d.a,style:{width:130,marginTop:5,marginLeft:10}}))),l.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(i.a,{className:"ml-auto",style:{marginRight:10,marginTop:8,marginBottom:8}},l.a.createElement(i.a.Link,{href:"/",style:{marginRight:10}},"Home "),l.a.createElement(i.a.Link,{href:"http://github.com/druv5319/Sneaks-API"},"About"))))},v=t(9),E=t(7),p=function(e){var a=Object(E.f)(),t=Object(n.useState)(""),c=Object(v.a)(t,2),r=c[0],o=c[1],s=function(e){e.preventDefault(),a.push("/search/"+r)};return l.a.createElement("div",{class:"search-bar"},l.a.createElement("form",{class:"test",onSubmit:s},l.a.createElement("div",{class:"inner-form"},l.a.createElement("div",{class:"basic-search"},l.a.createElement("div",{class:"input-field"},l.a.createElement("input",{value:r,onChange:function(e){o(e.target.value)},type:"text",placeholder:"Search Shoe"}),l.a.createElement("div",{class:"icon-wrap"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",onClick:s,type:"submit",value:"SEARCH"},l.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))))))))},g=t(30),h=t.n(g),f=t(31),b=t.n(f),k=t(32),w=t.n(k),y=t(33),j=t.n(y),C=function(){return l.a.createElement("div",{class:"icon-container"},l.a.createElement("div",{class:"icon-bar"},l.a.createElement("a",{class:"logo","data-swiper-autoplay":"2000"},l.a.createElement("img",{class:"",src:h.a})),l.a.createElement("a",{class:"logo","data-swiper-autoplay":"2000"},l.a.createElement("img",{class:"",src:b.a})),l.a.createElement("a",{class:"logo","data-swiper-autoplay":"2000"},l.a.createElement("img",{class:"",src:j.a})),l.a.createElement("a",{class:"logo","data-swiper-autoplay":"2000"},l.a.createElement("img",{class:"",src:w.a}))))},O=(t(54),t(65)),S=t(27),L=t(68),x=t(67),A=t(59),P=t(56),T=t(52),G=function(e){var a=e.sneaker;return l.a.createElement(T.a,null,(null===a||void 0===a?void 0:a.imageLinks.length)>0?a.imageLinks.map((function(e){return l.a.createElement(T.a.Item,null,l.a.createElement("img",{class:"goat-images",src:e}))})):(console.log(e),l.a.createElement(T.a.Item,null,l.a.createElement("img",{class:e.imageClass,src:e.image}))))},X=t(66),R=function(e){var a,t=new Set(["7","7.5","8","8.5","9","9.5","10","10.5"]),n=e.sneaker,c=e.sneaker.resellPrices;for(var r in null===c||void 0===c?void 0:c.stockX)t.add(r);for(var r in null===c||void 0===c?void 0:c.flightClub)t.add(r);for(var r in null===c||void 0===c?void 0:c.goat)t.add(r);for(var r in null===c||void 0===c?void 0:c.stadiumGoods)t.add(r);a=Array.from(t).sort((function(e,a){return e-a})),console.log(n);var o=function(e,a){var t=[(null===c||void 0===c?void 0:c.stockX)&&(null===c||void 0===c?void 0:c.stockX[a]),(null===c||void 0===c?void 0:c.flightClub)&&(null===c||void 0===c?void 0:c.flightClub[a]),(null===c||void 0===c?void 0:c.goat)&&(null===c||void 0===c?void 0:c.goat[a]),(null===c||void 0===c?void 0:c.stadiumGoods)&&(null===c||void 0===c?void 0:c.stadiumGoods[a])];if(t=t.filter((function(e){return e})),e==Math.min.apply(Math,t))return console.log("fsdklajf"),"min-price"};return l.a.createElement("div",{class:"table-card scroll-bar"},l.a.createElement(X.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"US Size"),Array.from(a).map((function(e,a){return l.a.createElement("th",{key:a}," ",e," ")})))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{onClick:function(){var e;window.open(null===(e=n.resellLinks)||void 0===e?void 0:e.stockX)}},l.a.createElement("img",{src:h.a})),Array.from(a).map((function(e,a){var t;return l.a.createElement("td",{key:a}," ",(null===c||void 0===c?void 0:c.stockX)&&(null===c||void 0===c?void 0:c.stockX[e])?l.a.createElement("a",{class:(null===c||void 0===c?void 0:c.stockX)&&o(null===c||void 0===c?void 0:c.stockX[e],e),href:null===(t=n.resellLinks)||void 0===t?void 0:t.stockX,target:"_blank"},"$",c.stockX[e]," "):"--")}))),l.a.createElement("tr",null,l.a.createElement("td",{onClick:function(){var e,a;(null===(e=n.resellLinks)||void 0===e?void 0:e.flightClub)&&window.open(null===(a=n.resellLinks)||void 0===a?void 0:a.flightClub)}},l.a.createElement("img",{src:w.a})),Array.from(a).map((function(e,a){var t;return l.a.createElement("td",{key:a},(null===c||void 0===c?void 0:c.flightClub)&&(null===c||void 0===c?void 0:c.flightClub[e])?l.a.createElement("a",{class:(null===c||void 0===c?void 0:c.flightClub)&&o(null===c||void 0===c?void 0:c.flightClub[e],e),href:null===(t=n.resellLinks)||void 0===t?void 0:t.flightClub,target:"_blank"},"$",c.flightClub[e]):"--")}))),l.a.createElement("tr",null,l.a.createElement("td",{class:"goat-row",onClick:function(){var e,a;(null===(e=n.resellLinks)||void 0===e?void 0:e.goat)&&window.open(null===(a=n.resellLinks)||void 0===a?void 0:a.goat)}},l.a.createElement("img",{src:b.a})),Array.from(a).map((function(e,a){var t;return l.a.createElement("td",{key:a}," ",(null===c||void 0===c?void 0:c.goat)&&(null===c||void 0===c?void 0:c.goat[e])?l.a.createElement("a",{class:(null===c||void 0===c?void 0:c.goat)&&o(null===c||void 0===c?void 0:c.goat[e],e),href:null===(t=n.resellLinks)||void 0===t?void 0:t.goat,target:"_blank"},"$",c.goat[e]," "):"--")}))),l.a.createElement("tr",null,l.a.createElement("td",{onClick:function(){var e,a;(null===(e=n.resellLinks)||void 0===e?void 0:e.stadiumGoods)&&window.open(null===(a=n.resellLinks)||void 0===a?void 0:a.stadiumGoods)}},l.a.createElement("img",{src:j.a})),Array.from(a).map((function(e,a){var t;return l.a.createElement("td",{key:a}," ",(null===c||void 0===c?void 0:c.stadiumGoods)&&(null===c||void 0===c?void 0:c.stadiumGoods[e])?l.a.createElement("a",{class:(null===c||void 0===c?void 0:c.stadiumGoods)&&o(null===c||void 0===c?void 0:c.stadiumGoods[e],e),href:null===(t=n.resellLinks)||void 0===t?void 0:t.stadiumGoods,target:"_blank"},"$",c.stadiumGoods[e]," "):"--")}))))))},B=t(25),H=function(e){var a=Object(n.useState)(!0),t=Object(v.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)({}),s=Object(v.a)(o,2),i=s[0],m=s[1];return Object(n.useEffect)((function(){m(e.sneaker),0!=Object.keys(i).length&&r(!1)})),l.a.createElement(L.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement("div",{class:"procard"},l.a.createElement("nav",{class:"header"},l.a.createElement("svg",{class:"arrow",version:"1.1",viewBox:"0 0 512 512",width:"512px",onClick:e.onHide,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("polygon",{points:"352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 ",stroke:"#727272"})),l.a.createElement("div",{style:{cursor:"pointer"},onClick:e.onHide}," BACK TO ALL SHOES "),l.a.createElement("svg",{class:"heart",version:"1.1",viewBox:"0 0 512 512",width:"512px",stroke:"#727272",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z",stroke:"#727272"}))),l.a.createElement("div",{class:"photo"},c?l.a.createElement("div",{class:"spinner"},l.a.createElement(B.a,{animation:"border",variant:"secondary",role:"status"})):l.a.createElement(G,{sneaker:i,imageClass:e.imageClass,image:e.image})),l.a.createElement("div",{class:"description"},l.a.createElement("h2",null,e.name),e.minPrice?l.a.createElement("div",null,l.a.createElement("div",{class:"from-text"},"From"),l.a.createElement("div",{class:"card-price"},"$",e.minPrice," ",l.a.createElement("span",{class:"on-text"}," on")," ",l.a.createElement("img",{class:"logo",src:e.logo}),l.a.createElement(P.a,{onClick:function(){window.open(e.minPriceLink,"_blank")},class:"buy-button",variant:"secondary",size:"lg"},"Visit site"))):l.a.createElement("div",null,"Not Available"),l.a.createElement(x.a,{defaultActiveKey:"description"},l.a.createElement(A.a,{class:"about",eventKey:"description",title:"About"},l.a.createElement("div",{class:"about"},e.description)),l.a.createElement(A.a,{class:"pull-right",eventKey:"details",title:"Details"},l.a.createElement("div",{class:"left-col"},l.a.createElement("ul",{class:"details"},l.a.createElement("li",null,l.a.createElement("span",{class:"tag"},"Make:")," ",i.make),l.a.createElement("li",null,l.a.createElement("span",{class:"tag"},"Colorway:")," ",i.colorway),l.a.createElement("li",null,l.a.createElement("span",{class:"tag"},"Style ID:")," ",i.styleID),l.a.createElement("li",null,l.a.createElement("span",{class:"tag"},"Release Date:")," ",i.releaseDate),l.a.createElement("li",null,l.a.createElement("span",{class:"tag"},"Retail Price:")," $",i.retailPrice,".00"))),l.a.createElement("div",{class:"right-col"})))),l.a.createElement("div",{class:"price-table"},c?l.a.createElement("div",{class:"spinner"},l.a.createElement(B.a,{animation:"border",variant:"secondary",role:"status"})):l.a.createElement(R,{sneaker:i}))))},N=t(84),I=new Headers({"Content-Type":"application/json",Accept:"application/json"}),M=function(e){var a=Object(n.useState)(!1),t=Object(v.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)({}),s=Object(v.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)(!1),E=Object(v.a)(u,2),p=E[0],g=E[1],f=e.sneaker;Object(n.useEffect)((function(){p&&fetch("http://localhost:8080/id/"+f.styleID+"/prices",{headers:I}).then((function(e){return e.json()})).then((function(e){m(e)}))}),[p]);var k,y,C=N.minBy(N.keys(f.lowestResellPrice),(function(e){return f.lowestResellPrice[e]}));if("stockX"==C?(C=h.a,k=f.lowestResellPrice.stockX,y=f.resellLinks.stockX):"stadiumGoods"==C?(C=j.a,k=f.lowestResellPrice.stadiumGoods,y=f.resellLinks.stadiumGoods):"goat"==C?(C=b.a,k=f.lowestResellPrice.goat,y=f.resellLinks.goat):"flightClub"==C&&(C=w.a,k=f.lowestResellPrice.flightClub,y=f.resellLinks.flightClub),f.thumbnail)var L="sneaker-image",x=f.thumbnail;else L="default-image",x=d.a;var A=function(){return k?l.a.createElement(S.a.Text,{class:"mini-card-text"},l.a.createElement("div",null,"From"),l.a.createElement("div",{class:"mini-card-price"},"$",k," ",l.a.createElement("span",{class:"on-text"}," on"),l.a.createElement("img",{class:"mini-logo",src:C}))):l.a.createElement(S.a.Text,{class:"mini-card-text"},l.a.createElement("div",null,"Not Available"))};return l.a.createElement("a",{onClick:function(){0==c&&(g(!0),r(!0))},style:{cursor:"pointer"},class:"card-button"},l.a.createElement(S.a,Object(O.a)({class:"mini-card",border:"light",tag:"a",style:{cursor:"pointer"}},"style",{width:"15rem",height:"17rem"}),l.a.createElement(S.a.Img,{class:L,variant:"top",src:x}),l.a.createElement(S.a.Body,{class:"mini-card-body"},l.a.createElement(S.a.Title,{class:"card-title"},f.shoeName),l.a.createElement(A,null))),p&&l.a.createElement(H,{sneaker:i,name:f.shoeName,description:f.description,imageClass:L,image:x,minPriceLink:y,minPrice:k,logo:C,show:c,onHide:function(){c&&r(!1)}}))},$=function(){var e=Object(n.useState)(!0),a=Object(v.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(v.a)(r,2),s=o[0],i=o[1],m=Object(n.useState)([]),d=Object(v.a)(m,2),u=d[0],E=d[1],p=Object(n.useState)([]),g=Object(v.a)(p,2),h=g[0],f=g[1],b=Object(n.useState)(null),k=Object(v.a)(b,2),w=k[0],y=(k[1],new Headers({"Content-Type":"application/json",Accept:"application/json"}));Object(n.useEffect)((function(){fetch("http://localhost:8080/home",{headers:y}).then((function(e){return e.json()})).then((function(e){console.log(s),E(e.slice(0,10)),f(e),c(!1)}))}),[]);return l.a.createElement("div",{class:"product-section"},l.a.createElement("h2",{class:"title"},"Trending Now ",0==s&&l.a.createElement("button",{onClick:function(){return i(!0),void setTimeout((function(){window.scrollTo({top:625,behavior:"smooth"})}),1)},class:"see-all"},l.a.createElement("div",{class:"see-all-text"}," See All "))),l.a.createElement("div",{class:"product-page"},t&&!w?l.a.createElement(B.a,{class:"spinners",animation:"border",variant:"secondary",role:"status"}):w?l.a.createElement("div",{className:"errorMessage"},w):s?h.map((function(e,a){return l.a.createElement(M,{key:"".concat(a,"-").concat(e.shoename),sneaker:e})})):u.map((function(e,a){return l.a.createElement(M,{key:"".concat(a,"-").concat(e.shoename),sneaker:e})}))))},D=function(e){var a=e.match,t=e.location,c=new Headers({"Content-Type":"application/json",Accept:"application/json"}),r=Object(n.useState)(!0),o=Object(v.a)(r,2),s=o[0],i=o[1],m=Object(n.useState)([]),d=Object(v.a)(m,2),u=d[0],E=d[1],p=Object(n.useState)(null),g=Object(v.a)(p,2),h=g[0],f=g[1],b=a.params.key;return Object(n.useEffect)((function(){f(null),i(!0),window.scrollTo({top:100,behavior:"smooth"}),fetch("http://localhost:8080/search/"+b,{headers:c}).then((function(e){return e.json()})).then((function(e){E(e),i(!1),window.scrollTo({top:625,behavior:"smooth"})})).catch((function(e){return f("No Products Found")}))}),[t]),l.a.createElement("div",{class:"product-section"},l.a.createElement("h2",{class:"product-title"}," Results for ",l.a.createElement("span",{class:"product-key"},"'",b,"'")," "),l.a.createElement("div",{class:"product-page"},s&&!h?l.a.createElement(B.a,{class:"spinners",animation:"border",variant:"secondary",role:"status"}):h?l.a.createElement("div",{className:"errorMessage"},h):u.map((function(e,a){return l.a.createElement(M,{key:"".concat(a,"-").concat(e.shoename),sneaker:e})}))))},z=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(u,null)),l.a.createElement("div",{class:"background"},l.a.createElement("div",{class:"search-title"},l.a.createElement("div",{class:"title"},"The Sneaks App"),l.a.createElement("div",{class:"subtitle"},"Search Sneakers and Compare Prices")),l.a.createElement(p,null),l.a.createElement(C,null)),l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:$}),l.a.createElement(E.a,{path:"/search/:key",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.9d601e05.chunk.js.map