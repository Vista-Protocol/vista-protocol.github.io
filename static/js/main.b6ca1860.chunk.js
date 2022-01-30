(this["webpackJsonpmoralis-react-blank-boilerplate"]=this["webpackJsonpmoralis-react-blank-boilerplate"]||[]).push([[0],{1007:function(e,t){},1009:function(e,t){},1025:function(e,t){},1043:function(e,t){},1045:function(e,t){},1063:function(e,t){},1064:function(e,t){},1132:function(e,t){},1138:function(e,t){},1139:function(e,t){},1465:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(160),s=n.n(i),c=n(10),o=n(22),u=n(3),l=n.n(u),p=n(1541),d=n(1529),b=n(1543),j=(n(50),n(76)),x=n(105),m=n.n(x),h=n(62),y=n(7),O=n(1548),f=n(1537),v=(n(1424),n(639)),_=n(640),g=n.n(_),w=n(106),T=n(1542),M=n(1532),k=n(1549),C=n(1477),S=n(1530),F=n(1538),P=n(1);Object(y.a)(O.a)((function(e){var t=e.theme;return Object(h.a)(Object(h.a)({},t.typography.body2),{},{padding:t.spacing(1),color:t.palette.text.primary})}));function A(e){var t=e.state,n=e.contract_avaperps,a=e.amount,r=Object(j.b)().user,i=t.perp,s=t.amm_base,o=t.amm_quote,u=(t.user_base,t.user_quote),p=(t.user_collateral,t.avax_price,t.perp_name),d=t.peg_multiplier,b=o*s,x=!r||a<=0||a*d>u;return Object(P.jsxs)(f.a,{container:!0,spacing:2,children:[Object(P.jsx)(f.a,{item:!0,xs:6,children:Object(P.jsxs)(F.a,{variant:"contained",style:{width:"100%"},disabled:x,onClick:Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.get("ethAddress"),e.next=3,n.methods.open_short(i,a*d).send({from:t});case 3:case"end":return e.stop()}}),e)}))),children:["Open Short: ",function(){var e=Number(o)-a*d,t=s-b/e;return Math.abs(t/d).toFixed(2)}()," ",p,"-PERP"]})}),Object(P.jsx)(f.a,{item:!0,xs:6,children:Object(P.jsxs)(F.a,{variant:"contained",style:{width:"100%"},disabled:x,onClick:Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.get("ethAddress"),e.next=3,n.methods.close_short(i,a*d).send({from:t});case 3:case"end":return e.stop()}}),e)}))),children:["Close Short: ",function(){var e=Number(o)+a*d,t=s-b/e;return Math.abs(t/d).toFixed(2)}()," ",p,"-PERP"]})})]})}Object(y.a)(O.a)((function(e){var t=e.theme;return Object(h.a)(Object(h.a)({},t.typography.body2),{},{padding:t.spacing(1),color:t.palette.text.primary})}));function D(e){var t=e.state,n=e.contract_avaperps,a=e.amount,r=Object(j.b)().user,i=t.amm_base,s=t.amm_quote,o=(t.user_base,t.user_quote),u=(t.user_collateral,t.avax_price,t.perp_name),p=t.peg_multiplier,d=t.perp,b=s*i,x=!r||a<=0||a*p>o;return Object(P.jsxs)(f.a,{container:!0,spacing:2,children:[Object(P.jsx)(f.a,{item:!0,xs:6,children:Object(P.jsxs)(F.a,{variant:"contained",style:{width:"100%"},disabled:x,onClick:Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.get("ethAddress"),e.next=3,n.methods.open_long(d,a*p).send({from:t});case 3:case"end":return e.stop()}}),e)}))),children:["Open Long: ",function(){var e=Number(s)+a*p,t=i-b/e;return Math.abs(t/p).toFixed(2)}()," ",u,"-PERP"]})}),Object(P.jsx)(f.a,{item:!0,xs:6,children:Object(P.jsxs)(F.a,{variant:"contained",style:{width:"100%"},disabled:x,onClick:Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.get("ethAddress"),e.next=3,n.methods.close_long(d,a*p).send({from:t});case 3:case"end":return e.stop()}}),e)}))),children:["Close Long: ",function(){var e=Number(s)-a*p,t=i-b/e;return Math.abs(t/p).toFixed(2)}()," ",u,"-PERP"]})})]})}var W=Object(y.a)(O.a)((function(e){var t=e.theme;return Object(h.a)(Object(h.a)({},t.typography.body2),{},{padding:t.spacing(1),color:t.palette.text.primary})}));function B(e){var t=e.state,n=e.contract_avaperps,r=e.value,i=e.children,s=a.useState(0),c=Object(o.a)(s,2),u=c[0],l=c[1],d=(Object(j.b)().user,t.amm_base),b=t.amm_quote,x=(t.user_base,t.user_quote),m=(t.user_collateral,t.avax_price,t.peg_multiplier),h=b/d,y=r?Object(P.jsx)(A,{amount:u,contract_avaperps:n,state:t}):Object(P.jsx)(D,{amount:u,contract_avaperps:n,state:t});return Object(P.jsxs)(f.a,{container:!0,spacing:2,children:[Object(P.jsx)(f.a,{item:!0,xs:6,children:Object(P.jsx)(S.a,{type:"number",variant:"standard",inputProps:{style:{fontSize:30}},value:u,onChange:function(e){return l(e.target.value)}})}),Object(P.jsxs)(f.a,{item:!0,xs:6,children:[Object(P.jsx)(W,{children:"USDC"}),Object(P.jsxs)(C.a,{variant:"body2",children:["Borrowing Power: ",(x/m).toFixed(2)]})]}),Object(P.jsx)(f.a,{item:!0,xs:6,children:Object(P.jsxs)(C.a,{variant:"h4",children:[(u/h).toFixed(2)," (EST.)"]})}),Object(P.jsxs)(f.a,{item:!0,xs:6,children:[Object(P.jsx)(W,{children:i}),Object(P.jsxs)(C.a,{variant:"body2",children:["Max Size: ",(x/h/m).toFixed(2)]})]}),Object(P.jsx)(p.a,{mt:2,children:y})]})}var q=["children","value","index"];function E(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function U(e){var t=e.state,n=e.contract_avaperps,r=e.children,i=Object(w.a)(),s=a.useState(0),c=Object(o.a)(s,2),u=c[0],l=c[1];function d(e){var t=e.children,n=e.value,a=e.index,r=Object(v.a)(e,q);return Object(P.jsx)("div",Object(h.a)(Object(h.a)({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},r),{},{children:n===a&&Object(P.jsx)(p.a,{sx:{p:3},children:Object(P.jsx)(C.a,{children:t})})}))}return Object(P.jsxs)(p.a,{sx:{bgcolor:"background.paper",width:500},children:[Object(P.jsx)(T.a,{position:"static",children:Object(P.jsxs)(M.a,{value:u,onChange:function(e,t){console.log(t),l(t)},textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(P.jsx)(k.a,Object(h.a)({label:"Long"},E(0))),Object(P.jsx)(k.a,Object(h.a)({label:"Short"},E(1)))]})}),Object(P.jsxs)(g.a,{axis:"rtl"===i.direction?"x-reverse":"x",index:u,onChangeIndex:function(e){console.log(e),l(e)},children:[Object(P.jsx)(d,{value:u,index:0,dir:i.direction,children:Object(P.jsx)(B,{contract_avaperps:n,state:t,value:u,children:r})}),Object(P.jsx)(d,{value:u,index:1,dir:i.direction,children:Object(P.jsx)(B,{contract_avaperps:n,state:t,value:u,children:r})})]})]})}var I=n(1526),N=n(14),R=n(15),L=n(30),z=n(31),V=function(e){Object(L.a)(n,e);var t=Object(z.a)(n);function n(e){var a;return Object(N.a)(this,n),(a=t.call(this,e)).state={time:Date.now()},a}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:Date.now()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=3600-Math.floor(this.state.time/1e3)%3600,t=e%60,n=Math.floor(e/60);return Object(P.jsxs)("span",{children:[" ",n,":",("00"+t).slice(-2)," "]})}}]),n}(a.Component),G=Object(y.a)(O.a)((function(e){var t=e.theme;return Object(h.a)(Object(h.a)({},t.typography.body1),{},{padding:t.spacing(1),textAlign:"center"})}));function J(e){var t=e.xs,n=void 0===t?2:t,a=e.children;return Object(P.jsx)(f.a,{item:!0,xs:n,children:Object(P.jsx)(G,{children:a})})}function Y(e){var t=e.state,n=t.amm_base,a=t.amm_quote,r=t.user_base,i=t.user_quote,s=(t.user_collateral,t.oracle_price),c=t.tvl,o=t.perp_name,u=t.peg_multiplier,l=a/n,d=((l*Math.abs(r)+Number(i))/5/u).toFixed(2),b=(l-s)/s/24,j=Math.pow(1+b,8760)-1,x="\n        ".concat((Math.abs(r)/u).toFixed(2),"\n        ").concat(r<0?"SHORT":"LONG","\n        ").concat(o,"-PERP\n    ");return Object(P.jsx)(p.a,{m:2,children:Object(P.jsxs)(f.a,{container:!0,spacing:2,children:[Object(P.jsxs)(f.a,{container:!0,item:!0,spacing:2,columns:11,children:[Object(P.jsx)(J,{xs:3,children:Object(P.jsx)(C.a,{variant:"h4",children:"Your Data"})}),Object(P.jsxs)(J,{children:[x,Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"Position"})]}),Object(P.jsxs)(J,{children:[(i/u/5).toFixed(2)," USDC",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"Liquid Capital"})]}),Object(P.jsxs)(J,{children:[d," USDC",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"Portfolio Value"})]}),Object(P.jsxs)(J,{children:["0 USDC",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"Liquidation Price"})]})]}),Object(P.jsxs)(f.a,{container:!0,item:!0,spacing:2,columns:11,children:[Object(P.jsx)(J,{xs:3,children:Object(P.jsx)(C.a,{variant:"h4",children:"Market Data"})}),Object(P.jsxs)(J,{children:[l.toFixed(2)," USDC",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsxs)(C.a,{variant:"subtitle2",children:[o,"-PERP Price"]})]}),Object(P.jsxs)(J,{children:[(s/u).toFixed(2)," USDC",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsxs)(C.a,{variant:"subtitle2",children:[o," Price"]})]}),Object(P.jsxs)(J,{children:[(100*b).toFixed(2),"% in ",Object(P.jsx)(V,{}),Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"Predicted Funding Rate"})]}),Object(P.jsxs)(J,{children:[j.toFixed(2),"% APY",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"24h Avg Funding"})]})]}),Object(P.jsxs)(f.a,{container:!0,item:!0,spacing:2,columns:11,children:[Object(P.jsx)(J,{xs:3,children:Object(P.jsx)(C.a,{variant:"h4",children:"vAMM Data"})}),Object(P.jsxs)(J,{children:[(c/u).toFixed(2)," USDC",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"TVL"})]}),Object(P.jsxs)(J,{children:[(n/u).toFixed(2)," ",o,"-PERP",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"Base Asset Amount"})]}),Object(P.jsxs)(J,{children:[(a/u).toFixed(2)," USDC",Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"Quote Asset Amount"})]}),Object(P.jsxs)(J,{children:[(a*n/Math.pow(u,2)).toFixed(2),Object(P.jsx)(I.a,{sx:{borderBottomWidth:2}}),Object(P.jsx)(C.a,{variant:"subtitle2",children:"k"})]})]})]})})}var H=n(1539),Q=n(1550);function X(e){var t=e.message,n=void 0!==t&&t,r=a.useState(!0),i=Object(o.a)(r,2),s=i[0],c=(i[1],n?Object(P.jsx)(C.a,{variant:"h4",children:n}):Object(P.jsx)(Q.a,{color:"inherit"}));return Object(P.jsx)("div",{children:Object(P.jsx)(H.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:s,children:c})})}var K=Object(y.a)(O.a)((function(e){var t=e.theme;return Object(h.a)(Object(h.a)({},t.typography.body2),{},{textAlign:"center",color:t.palette.text.secondary})})),Z=Math.pow(10,8);function $(e){var t=e.contract_avaperps,n=e.contract_erc20copy,r=e.net_id,i=e.address_avaperps,s=e.children,u=e.perp_name,d=e.perp,b=Object(j.b)().user,x=a.useState(),m=Object(o.a)(x,2),h=m[0],y=m[1];function O(){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(l.a.mark((function e(){var a,r,s,c,p,j,x,m,h,O,f,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,b&&(console.log("user not logged in"),a=b.get("ethAddress")),null!=t){e.next=5;break}return console.log("contract not initialized"),e.abrupt("return");case 5:return r=[t.methods.amms(d).call(),a?t.methods.user_base(d).call({from:a}):"Not logged in",a?t.methods.user_quote().call({from:a}):"Not logged in",a?t.methods.user_collateral().call({from:a}):"Not logged in",t.methods.oracle_price(d).call(),n.methods.balanceOf(i).call()],e.next=8,Promise.all(r);case 8:s=e.sent,c=Object(o.a)(s,6),p=c[0],j=c[1],x=c[2],m=c[3],h=c[4],O=c[5],f=p.base_asset_amount,v=p.quote_asset_amount,y({amm_base:f,amm_quote:v,user_base:j,user_quote:x,user_collateral:m,oracle_price:h,tvl:O,perp_name:u,peg_multiplier:Z,perp:d});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.useEffect((function(){O()}),[b,d]),43113!==r?Object(P.jsx)(X,{message:"Wrong network (".concat(r,"). Should be Avalanche (43113).")}):h?Object(P.jsxs)(p.a,{p:3,children:[Object(P.jsx)(f.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(K,{children:Object(P.jsx)(U,{state:h,contract_avaperps:t,children:s})})}),Object(P.jsx)("br",{}),Object(P.jsx)(f.a,{container:!0,justifyContent:"center",sx:{borderRadius:"16px"},children:Object(P.jsx)(K,{children:Object(P.jsx)(Y,{state:h})})})]}):(O(),Object(P.jsx)(X,{}))}var ee=n(1544),te=n(1547),ne=n(1545),ae=n(1546),re=n(1527),ie=n(1540),se=n(1551),ce=n(1528),oe="0xF1c79edE62cD228aE637464810CCD12C30ad1A65",ue=Math.pow(10,8);function le(e){var t,n=e.contract_avaperps,r=e.contract_erc20copy,i=Object(j.b)().user,s=a.useState(!1),u=Object(o.a)(s,2),d=u[0],b=u[1],x=a.useState(0),m=Object(o.a)(x,2),h=m[0],y=m[1],O=function(){b(!1)};function f(){return(f=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.methods.approve(oe,h*ue).send({from:t});case 2:return e.next=4,n.methods.deposit_collateral(h*ue).send({from:t});case 4:O();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.withdraw_collateral(h*ue).send({from:t});case 2:O();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i&&(t=i.get("ethAddress")),Object(P.jsxs)(p.a,{m:1,children:[Object(P.jsx)(F.a,{color:"inherit",onClick:function(){b(!0)},startIcon:Object(P.jsx)(ie.a,{src:"https://icons-for-free.com/iconfiles/png/512/cryptocurrency+icons+++color+usdc-1324449146826221536.png"}),disabled:!i,children:"Transfer"}),Object(P.jsxs)(ee.a,{open:d,onClose:O,children:[Object(P.jsxs)(re.a,{sx:{m:0,p:2},children:["Transfer",Object(P.jsx)(se.a,{"aria-label":"close",onClick:O,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(P.jsx)(ce.a,{})})]}),Object(P.jsxs)(ne.a,{children:[Object(P.jsx)(ae.a,{children:"Transfer USDC to and from this trading platform."}),Object(P.jsx)(S.a,{margin:"dense",label:"Amount (USDC)",fullWidth:!0,variant:"standard",type:"number",value:h,onChange:function(e){return y(e.target.value)}})]}),Object(P.jsxs)(te.a,{children:[Object(P.jsx)(F.a,{variant:"contained",onClick:function(){return f.apply(this,arguments)},children:"Deposit"}),Object(P.jsx)(F.a,{onClick:function(){return v.apply(this,arguments)},variant:"contained",color:"error",children:"Withdraw"})]})]})]})}var pe=function(e){e.setPage;var t=Object(j.b)(),n=t.authenticate,a=t.isAuthenticated,r=(t.user,t.logout);return a?Object(P.jsx)("div",{children:Object(P.jsx)(F.a,{onClick:Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)}))),color:"inherit",startIcon:Object(P.jsx)(ie.a,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"}),children:"Logout"})}):Object(P.jsx)("div",{children:Object(P.jsx)(F.a,{onClick:Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({signingMessage:"Hello World!"});case 2:case"end":return e.stop()}}),e)}))),color:"inherit",startIcon:Object(P.jsx)(ie.a,{src:"https://moralis.io/wp-content/uploads/2021/06/cropped-Moralis-Favicon-Glass.png"}),children:"Login"})})},de=n.p+"static/media/logo.1ca59fb9.svg";function be(e){var t=e.contract_avaperps,n=e.contract_erc20copy;return Object(P.jsx)(T.a,{position:"fixed",style:{color:"fireBrick",background:"transparent"},children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)(p.a,{mr:2,children:Object(P.jsx)("img",{src:de,alt:"logo",height:"55px"})}),Object(P.jsx)(C.a,{variant:"h4",noWrap:!0,component:"div",sx:{flexGrow:1},children:"Yin Finance"}),Object(P.jsx)(le,{contract_erc20copy:n,contract_avaperps:t}),Object(P.jsx)(pe,{})]})})}var je=n(1535);function xe(e){var t=e.perp,n=e.set_perp,a=e.perps.map((function(e,t){return{label:e,value:t}}));return Object(P.jsx)(p.a,{component:"form",sx:{},noValidate:!0,autoComplete:"off",children:Object(P.jsx)(S.a,{id:"outlined-select-currency",select:!0,value:t,onChange:function(e){n(e.target.value)},variant:"standard",children:a.map((function(e){return Object(P.jsx)(je.a,{value:e.value,children:e.label},e.value)}))})})}var me=n(643),he=n(644),ye="0x351Cee25E38FF6b8b9BF1044658e71847C518d1f";function Oe(){Object(j.b)().user;var e=r.a.useState(),t=Object(o.a)(e,2),n=t[0],a=t[1],i=r.a.useState(),s=Object(o.a)(i,2),u=s[0],x=s[1],h=r.a.useState(),y=Object(o.a)(h,2),O=y[0],f=y[1],v=r.a.useState(0),_=Object(o.a)(v,2),g=_[0],w=_[1],T=function(){var e=Object(c.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==m.a.givenProvider){e.next=2;break}return e.abrupt("return");case 2:return t=new m.a(m.a.givenProvider),e.next=5,t.eth.net.getId();case 5:n=e.sent,f(n),n=new t.eth.Contract(me,ye),a(n),n=new t.eth.Contract(he,"0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C"),x(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){T()}),[g]);var M="avax btc eth link".toUpperCase().split(" "),k=M[g];return Object(P.jsxs)(p.a,{sx:{display:"flex"},style:{background:"linear-gradient(black, fireBrick)",height:"100vh"},children:[Object(P.jsx)(d.a,{}),Object(P.jsx)(be,{contract_erc20copy:u,contract_avaperps:n}),Object(P.jsxs)(p.a,{component:"main",sx:{flexGrow:1,p:0,width:{sm:"calc(100% - ".concat(240,"px)")}},children:[Object(P.jsx)(b.a,{}),Object(P.jsx)($,{contract_erc20copy:u,contract_avaperps:n,net_id:O,perp_name:k,perp:g,address_avaperps:ye,children:Object(P.jsx)(xe,{perp:g,perps:M,set_perp:w})})]})]})}var fe=n(1536),ve=n(188),_e=n(645),ge=(Object(_e.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ve.a.A400}}}),Object(_e.a)({palette:{mode:"dark"}}));s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(j.a,{appId:"zWytrx6G5R9k0UdpqvrptVYFTcuLiX7XMHcue9QJ",serverUrl:"https://l0fckgbjlk4g.usemoralis.com:2053/server",children:Object(P.jsxs)(fe.a,{theme:ge,children:[Object(P.jsx)(d.a,{}),Object(P.jsx)(Oe,{})]})})}),document.getElementById("root"))},643:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"amms","outputs":[{"internalType":"address","name":"oracle","type":"address"},{"internalType":"uint256","name":"base_asset_amount","type":"uint256"},{"internalType":"uint256","name":"quote_asset_amount","type":"uint256"},{"internalType":"int256","name":"cum_funding_rate","type":"int256"},{"internalType":"int256","name":"funding_rate","type":"int256"},{"internalType":"int256","name":"periodicity","type":"int256"},{"internalType":"uint256","name":"mark_twap","type":"uint256"},{"internalType":"int256","name":"mark_twap_ts","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount_xusdc","type":"uint256"}],"name":"close_long","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount_xusdc","type":"uint256"}],"name":"close_short","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_usdc","type":"uint256"}],"name":"deposit_collateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount_xusdc","type":"uint256"}],"name":"open_long","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount_xusdc","type":"uint256"}],"name":"open_short","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"oracle_price","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"lev","type":"uint256"}],"name":"set_leverage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"user_base","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"user_collateral","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"user_quote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_usdc","type":"uint256"}],"name":"withdraw_collateral","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},644:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},956:function(e,t){},958:function(e,t){},960:function(e,t){},964:function(e,t){},965:function(e,t){},990:function(e,t){},992:function(e,t){}},[[1465,1,2]]]);
//# sourceMappingURL=main.b6ca1860.chunk.js.map