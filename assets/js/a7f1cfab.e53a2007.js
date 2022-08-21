"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[219],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5551:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],l={},p="Zonnepanelen",s={unversionedId:"woningen/Electra/zonnepanelen",id:"woningen/Electra/zonnepanelen",title:"Zonnepanelen",description:"Alle woningen zijn uitgerust met 4 zonnepanelen van (TODO: invullen wattpiek)wattpiek.",source:"@site/docs/woningen/Electra/zonnepanelen.md",sourceDirName:"woningen/Electra",slug:"/woningen/Electra/zonnepanelen",permalink:"/docs/woningen/Electra/zonnepanelen",draft:!1,editUrl:"https://github.com/Ornias1993/witvoetenstraat/docs/woningen/Electra/zonnepanelen.md",tags:[],version:"current",frontMatter:{},sidebar:"woningenSidebar",previous:{title:"(Slechte) meterkast verdeling",permalink:"/docs/woningen/Electra/slechte-verdeling"},next:{title:"Dak Specificaties",permalink:"/docs/woningen/Gevel en Dak/dak"}},c={},u=[{value:"SEMS Portal",id:"sems-portal",level:3},{value:"Lokaal uitlezen",id:"lokaal-uitlezen",level:3},{value:"Meerpanelen?",id:"meerpanelen",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zonnepanelen"},"Zonnepanelen"),(0,a.kt)("p",null,"Alle woningen zijn uitgerust met 4 zonnepanelen van (TODO: invullen wattpiek)wattpiek.\nDeze zijn aangesloten op een omvormer van 1000 watt: GOODWE 1000-XS"),(0,a.kt)("h3",{id:"sems-portal"},"SEMS Portal"),(0,a.kt)("p",null,"Deze is zelf te configureren in de configuratietool van GoodWe, daarbij is het w\xe9l vereist dat deze, dmv. de netwerkkabel, is aangesloten op internet.\nDe configuratietool van goodwe vindt men hier:\n",(0,a.kt)("a",{parentName:"p",href:"https://www.semsportal.com/home/login"},"https://www.semsportal.com/home/login")),(0,a.kt)("p",null,'Maar er is ook een "SEMS" App van Goodwe. Deze App bevat een stuk meer installateursinstellingen, dan we website versie.'),(0,a.kt)("p",null,"Om je omvormer aan te melden op de SEMS portal, moet je het serienummer en de een speciale code opgeven.\nDeze kun je vinden aan de rechterzijkant van de omvormer. Naast alle andere type-informatie op een grote sticker."),(0,a.kt)("h3",{id:"lokaal-uitlezen"},"Lokaal uitlezen"),(0,a.kt)("p",null,"Deze omvormer is \xf3\xf3k lokaal door speciale software, uit te lezen. Bijvoorbeeld in HomeAssistant:\n",(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/goodwe/"},"https://www.home-assistant.io/integrations/goodwe/")),(0,a.kt)("h3",{id:"meerpanelen"},"Meerpanelen?"),(0,a.kt)("p",null,"Het is zeker mogelijk om m\xe9\xe9r panelen te laten plaatsen. Bij beide dakrichtingen zijn er mogelijkheden om 1 of meer panelen bij te plaatsen.\nVoor de huizen met het stijle dak aan de zuidkant, kan dit \xf3\xf3k met redelijke efficientie (15 graden op noord) aan de noordkant."),(0,a.kt)("p",null,'In principe mag de woningbouw geen medewerking weigeren, al zullen ze soms wel zeggen van wel.\nHet is de vraag of men in dat geval het liever niet, van te voren, verteld. Of riskeerd dat de woningbouw "nee" zegt, waarna vervangende toestemming aan de rechtbank moet worden gevraagd, met kosten en vertraging van dien.'))}m.isMDXComponent=!0}}]);