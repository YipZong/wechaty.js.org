"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9469],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(a),h=o,d=f["".concat(l,".").concat(h)]||f[h]||s[h]||i;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),o=a(79443);var i=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(86010),c="tabItem_1uMI",l="tabItemActive_2DSg";var p=function(e){var t,a=e.lazy,o=e.block,p=e.defaultValue,u=e.values,s=e.groupId,f=e.className,h=n.Children.toArray(e.children),d=null!=u?u:h.map((function(e){return{value:e.props.value,label:e.props.label}})),m=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,g=i(),y=g.tabGroupChoices,w=g.setTabGroupChoices,v=(0,n.useState)(m),k=v[0],b=v[1],N=[];if(null!=s){var T=y[s];null!=T&&T!==k&&d.some((function(e){return e.value===T}))&&b(T)}var O=function(e){var t=e.currentTarget,a=N.indexOf(t),n=d[a].value;b(n),null!=s&&(w(s,n),setTimeout((function(){var e,a,n,o,i,r,c,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,i=e.right,r=window,c=r.innerHeight,p=r.innerWidth,a>=0&&i<=p&&o<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.target)-1;a=N[o]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},f)},d.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.Z)("tabs__item",c,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=a?a:t)}))),a?(0,n.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},87423:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return f},default:function(){return d}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(55064),c=a(58215),l=["components"],p={title:"Puppet Provider: Official Account",sidebar_label:"Official Account"},u=void 0,s={unversionedId:"puppet-providers/official-account",id:"puppet-providers/official-account",isDocsHomePage:!1,title:"Puppet Provider: Official Account",description:"Wechaty Puppet Official Account",source:"@site/docs/puppet-providers/official-account.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/official-account",permalink:"/docs/puppet-providers/official-account",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-providers/official-account.md",tags:[],version:"current",lastUpdatedBy:"Soumi7",lastUpdatedAt:1629352708,formattedLastUpdatedAt:"8/19/2021",frontMatter:{title:"Puppet Provider: Official Account",sidebar_label:"Official Account"},sidebar:"docs",previous:{title:"Whatsapp",permalink:"/docs/puppet-providers/whatsapp"},next:{title:"Gitter",permalink:"/docs/puppet-providers/gitter"}},f=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"History",id:"history",children:[]},{value:"Quick Start",id:"quick-start",children:[{value:"Introduction",id:"introduction",children:[]}]},{value:"Contributing",id:"contributing",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],h={toc:f};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"official-account"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Official%20Account-blueviolet",alt:"Wechaty Puppet Official Account"}))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-official-account/HEAD/docs/images/wechaty-puppet-official-account.png",alt:"Wechaty Puppet Official Account"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-official-account"},(0,i.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-official-account.svg",alt:"NPM Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-official-account?activeTab=versions"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-official-account/next.svg",alt:"npm (tag)"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Repo: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account"},"https://github.com/wechaty/wechaty-puppet-official-account")),(0,i.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account/issues"},"https://github.com/wechaty/wechaty-puppet-official-account/issues"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Send & receive messages")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Run wechaty-puppet-official-account :"),(0,i.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-official-account\nexport WECHATY_PUPPET=wechaty-puppet-official-account\nnpm start\n"))),(0,i.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-official-account\nexport WECHATY_PUPPET=wechaty-puppet-official-account\nnpm start\n"))),(0,i.kt)(c.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-official-account\nset WECHATY_PUPPET=wechaty-puppet-official-account\nnpm start\n")))),(0,i.kt)("h2",{id:"history"},"History"),(0,i.kt)("p",null,"Developing a customized WeChat official account is a complex process, which required reading a lot of documents. Developing a robot with a custom reply function based on WeChat official account was a challenge."),(0,i.kt)("p",null,"Wechaty-pure-official-account does not encapsulate all the functions in WeChat public account, but extracts the custom customer service dialogue module and encapsulates it as the underlying puppet. In this way, Wechaty was used to develop the customer service dialogue management."),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Using wechaty to develop different platform chatbot is almost no difference at the code level, the underlying puppet has encapsulated all the logic, \u2018wechaty\u2019 provides a unified upper interface, so you only need to know how to use wechaty, you can develop powerful multi-platform chatbot."),(0,i.kt)("p",null,"The development of WeChat Official Account is compared with other platforms, the only difference is that you need to provide WeChat Official Account configuration information, such as\u2019 appId \u2018, \u2018appSecret\u2019, \u2018token\u2019 and so on."),(0,i.kt)("p",null,"Using wechaty to develop a dialogue chatbot on any platform can be divided into the following three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Initialize dialogue platform puppet"),(0,i.kt)("li",{parentName:"ol"},"Configure puppet to wechaty"),(0,i.kt)("li",{parentName:"ol"},"Using wechaty upper interface to develop chatbot")),(0,i.kt)("p",null,"In the first step, because the different details of the underlying packages are different, initialization operations are different, such as WeChat official account platform, which requires appId, appSecret and other information separately."),(0,i.kt)("p",null,"In the second step, when initializing the wechaty instance, it is necessary to configure the puppet as a parameter, so that when wechaty performs dialog operation, it actually calls the underlying logic of the puppet."),(0,i.kt)("p",null,"In the third step, the upper layer interface of wechaty is used to develop the chatbot. The operation mode is the same for all platforms, so the developer\u2019s attention will be focused on this. The above two steps only need simple configuration."),(0,i.kt)("p",null,"There are some details about the development of WeChat official account using wechaty. Next we will see how to quickly get the official account chatbot with a few lines of code :"),(0,i.kt)("h4",{id:"configure-internet-address"},"Configure Internet address"),(0,i.kt)("p",null,"The official account of WeChat requires the address of the service provider to be external network address, supporting HTTP and HTTPS, and the ports supported respectively are: 80, 443. Therefore, it is very important to have an external IP address in the development phase. Here, we recommend several intranet penetration tools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Localtunel : Temporary Internet address can be created, which will be invalid after a certain period of time, but this is in line with the requirements of development stage. The steps are also very simple:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g localtunnel lt \u2013port 80\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ngrok"},"ngrok")," : It can create permanent external network addresses, free address numbers and limited bandwidth, but this is enough for WeChats official account development with very small dialogue.")),(0,i.kt)("h4",{id:"initialization-of-wechat-official-account-chatbot"},"Initialization of WeChat official account chatbot"),(0,i.kt)("p",null,"Using wechaty to develop corresponding platform's chatbot, we need to use the corresponding platform puppet, and the WeChat official account corresponds to puppet: ",(0,i.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-official-account"),". The installation tutorial is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-official-account\n")),(0,i.kt)("p",null,"Next is initialization, and WeChat official account requires configuration information such as appId, appSecret, token, etc. The sample code is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { PuppetOA } from \'wechaty-puppet-official-account\'\n\nconst puppet = new PuppetOA({\n  appId: "wxbd801c28fbe1bbbd",\n  appSecret: "6959408a3ba1c82db1a11d941df65764",\n  token: "token",\n  port: 8080\n})\n')),(0,i.kt)("p",null,"Next, you need to configure it to wechaty. The example code is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const bot = new Wechaty({\n  puppet: puppet\n})\n")),(0,i.kt)("p",null,"The initialization of wechaty has been completed. The next step is to develop the dialogue logic code of wechaty core."),(0,i.kt)("h4",{id:"chatbot-core-logic"},"Chatbot Core Logic"),(0,i.kt)("p",null,"In this part, we see the simple message reply function, which is enough to show developers how to develop customized chat robots. The following is the overall sample code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Contact,\n  Message,\n  Wechaty,\n  log,\n} from 'wechaty'\nimport { MessageType } from 'wechaty-puppet'\n\nasync function onMessage(msg: Message) {\n  log.info('StarterBot', msg.toString())\n\n  if (msg.text() === 'ding') {\n    await msg.say(`Welcome to wechaty Official Account\\n refer to  \uff1a http://www.wechaty.js.org \ud83d\ude04\ud83d\ude04\ud83d\ude04`)\n  }\n  if (msg.type() == MessageType.Image) {\n    const fileBox = await msg.toFileBox()\n    // send message to talker\n    await msg.say(fileBox)\n  } else {\n    // I am a repeater ~_~~\n    await msg.say(msg.text())\n  }\n}\n\nconst bot = new Wechaty({\n  name: 'ding-dong-bot',\n  puppet: new PuppetOA({\n    appId: \"wxbd801c28fbe1bbbd\",\n    appSecret: \"6959408a3ba1c82db1a11d941df65764\",\n    token: \"token\",\n    port: 80\n  })\n})\n\nbot.on('message', onMessage).start()\n  .then(() => log.info('StarterBot', 'Starter Bot Started.'))\n  .catch(e => log.error('StarterBot', e))\n")),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Using wechaty to develop WeChat official account chatbot is very simple. It is very friendly to new developers. If you want to see the detailed usage, you can go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account"},"github")," Check the latest documentation. You are welcome to mention issues and create PRs."),(0,i.kt)("h2",{id:"blogs"},"Blogs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/11/06/wechaty-puppet-oa-released-en/"},"Official-Account Puppet Released, Jing, Nov 6, 2020")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/05/wechaty-puppet-maker/"},"Wechaty Workshop for Puppet Makers: How to make a Puppet for Wechaty, Hao, Aug 5, 2020"))),(0,i.kt)("h2",{id:"maintainers"},"Maintainers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/wj-mcat"},"@wj-Mcat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/qhduan"},"@qhduan"))))}d.isMDXComponent=!0}}]);