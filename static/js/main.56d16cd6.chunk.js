(this.webpackJsonpavaperps=this.webpackJsonpavaperps||[]).push([[0],{1021:function(e,t){},1023:function(e,t){},1025:function(e,t){},1029:function(e,t){},1030:function(e,t){},1055:function(e,t){},1057:function(e,t){},1072:function(e,t){},1074:function(e,t){},1090:function(e,t){},1108:function(e,t){},1110:function(e,t){},1128:function(e,t){},1129:function(e,t){},1197:function(e,t){},1203:function(e,t){},1204:function(e,t){},1533:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(177),s=n.n(i),c=n(14),o=n(9),u=n(4),p=n.n(u),l=n(1550),d=n(1604),b=(n(55),n(69)),j=n(115),m=n.n(j),y=n(54),x=n(5),h=n(707),O=n(1610),f=(n(1489),n(328)),v=n(691),g=n.n(v),_=n(96),w=n(1615),T=n(1606),k=n(1624),M=n(1551),C=n(281),S=n(211),A=n(1);Object(x.a)(h.a)((function(e){var t=e.theme;return Object(y.a)(Object(y.a)({},t.typography.body2),{},{padding:t.spacing(1),color:t.palette.text.primary})}));function D(e){var t=e.state,n=e.contract_avaperps,a=e.amount,r=Object(b.b)().user,i=t.perp,s=t.amm_base,o=t.amm_quote,u=(t.user_base,t.user_quote),l=(t.user_collateral,t.avax_price,t.perp_name),d=t.peg_multiplier,j=o*s,m=!r||a<=0||a*d>u;return Object(A.jsxs)(O.a,{container:!0,spacing:2,children:[Object(A.jsx)(O.a,{item:!0,xs:6,children:Object(A.jsxs)(S.a,{variant:"contained",style:{width:"100%"},disabled:m,onClick:Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.get("ethAddress"),e.next=3,n.methods.open_short(i,a*d).send({from:t});case 3:case"end":return e.stop()}}),e)}))),children:["Open Short: ",function(){var e=Number(o)-a*d,t=s-j/e;return Math.abs(t/d).toFixed(2)}()," ",l,"-PERP"]})}),Object(A.jsx)(O.a,{item:!0,xs:6,children:Object(A.jsxs)(S.a,{variant:"contained",style:{width:"100%"},disabled:m,onClick:Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.get("ethAddress"),e.next=3,n.methods.close_short(i,a*d).send({from:t});case 3:case"end":return e.stop()}}),e)}))),children:["Close Short: ",function(){var e=Number(o)+a*d,t=s-j/e;return Math.abs(t/d).toFixed(2)}()," ",l,"-PERP"]})})]})}Object(x.a)(h.a)((function(e){var t=e.theme;return Object(y.a)(Object(y.a)({},t.typography.body2),{},{padding:t.spacing(1),color:t.palette.text.primary})}));function F(e){var t=e.state,n=e.contract_avaperps,a=e.amount,r=Object(b.b)().user,i=t.amm_base,s=t.amm_quote,o=(t.user_base,t.user_quote),u=(t.user_collateral,t.avax_price,t.perp_name),l=t.peg_multiplier,d=t.perp,j=s*i,m=!r||a<=0||a*l>o;return Object(A.jsxs)(O.a,{container:!0,spacing:2,children:[Object(A.jsx)(O.a,{item:!0,xs:6,children:Object(A.jsxs)(S.a,{variant:"contained",style:{width:"100%"},disabled:m,onClick:Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.get("ethAddress"),e.next=3,n.methods.open_long(d,a*l).send({from:t});case 3:case"end":return e.stop()}}),e)}))),children:["Open Long: ",function(){var e=Number(s)+a*l,t=i-j/e;return Math.abs(t/l).toFixed(2)}()," ",u,"-PERP"]})}),Object(A.jsx)(O.a,{item:!0,xs:6,children:Object(A.jsxs)(S.a,{variant:"contained",style:{width:"100%"},disabled:m,onClick:Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.get("ethAddress"),e.next=3,n.methods.close_long(d,a*l).send({from:t});case 3:case"end":return e.stop()}}),e)}))),children:["Close Long: ",function(){var e=Number(s)-a*l,t=i-j/e;return Math.abs(t/l).toFixed(2)}()," ",u,"-PERP"]})})]})}var P=n(1621),E=n(1600),N=n(1622),U=n(1623),I=n(181),q=n(697),W=n.n(q),B=n(1601),R=n(29),L=n(694),z=Math.pow(10,8),V=[{field:"token"},{field:"amount",type:"number"},{field:"price",type:"number"}];function X(e){var t=e.composition,n=Object(R.a)(Array(10).keys()).map((function(e,n){return{id:n,token:t[0][n].toUpperCase(),amount:t[1][n],price:"$"+(t[2][n]/z).toFixed(2)}}));return Object(A.jsx)("div",{style:{width:"100%"},children:Object(A.jsx)(L.a,{rows:n,columns:V,pageSize:5,autoHeight:!0})})}var H=["children","onClose"],J=Object(x.a)(P.a)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),G=function(e){var t=e.children,n=e.onClose,a=Object(f.a)(e,H);return Object(A.jsxs)(E.a,Object(y.a)(Object(y.a)({sx:{m:0,p:2}},a),{},{children:[t,n?Object(A.jsx)(I.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(A.jsx)(W.a,{})}):null]}))};function Y(e){var t=e.composition,n=a.useState(!1),r=Object(o.a)(n,2),i=r[0],s=r[1],c=function(){s(!1)};return Object(A.jsxs)("div",{children:[Object(A.jsx)(I.a,{variant:"outlined",onClick:function(){s(!0)},children:Object(A.jsx)(B.a,{})}),Object(A.jsxs)(J,{onClose:c,"aria-labelledby":"customized-dialog-title",open:i,children:[Object(A.jsx)(G,{id:"customized-dialog-title",onClose:c,children:"Avalanche INDEX Description"}),Object(A.jsxs)(N.a,{dividers:!0,children:[Object(A.jsx)(M.a,{gutterBottom:!0,style:{whiteSpace:"pre-wrap"},children:"The INDEX token derives its price from the Avalanche network's top 10 projects by market cap, excluding stablecoins. INDEX was established on 2022-01-19T07:50:00.000Z at 1 USDC per token, containing LINK, REN, AMPL, ORN, AVAX, ALEPH, SWAP, ANY, SUSHI, and REEF. If one of INDEX's component tokens drops out of the top 10, a 'replace_token' function can be called by a DAO vote. INDEX's price is updated every 5 minutes, with automatic rebalancing if a single component exceeds 20% weight."}),Object(A.jsx)(X,{composition:t})]}),Object(A.jsx)(U.a,{children:Object(A.jsx)(S.a,{autoFocus:!0,onClick:c,children:"Save changes"})})]})]})}var Q=Object(x.a)(h.a)((function(e){var t=e.theme;return Object(y.a)(Object(y.a)({},t.typography.body2),{},{padding:t.spacing(1),color:t.palette.text.primary})}));function K(e){var t=e.state,n=e.contract_avaperps,r=e.value,i=e.children,s=a.useState(0),u=Object(o.a)(s,2),d=u[0],j=u[1],m=(Object(b.b)().user,t.amm_base),y=t.amm_quote,x=(t.user_base,t.user_quote),h=(t.user_collateral,t.avax_price,t.peg_multiplier),f=t.perp,v=a.useState(),g=Object(o.a)(v,2),_=g[0],w=g[1],T=function(){var e=Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.composition().call();case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null==_&&T(),console.log(_);var k=f?Object(A.jsx)("div",{}):Object(A.jsx)(Y,{composition:_}),S=y/m,P=r?Object(A.jsx)(D,{amount:d,contract_avaperps:n,state:t}):Object(A.jsx)(F,{amount:d,contract_avaperps:n,state:t});return Object(A.jsxs)(O.a,{container:!0,spacing:2,children:[Object(A.jsx)(O.a,{item:!0,xs:6,children:Object(A.jsx)(C.a,{type:"number",variant:"standard",inputProps:{style:{fontSize:30}},value:d,onChange:function(e){j(e.target.value)}})}),Object(A.jsxs)(O.a,{item:!0,xs:6,children:[Object(A.jsx)(Q,{children:"USDC"}),Object(A.jsxs)(M.a,{variant:"body2",children:["Borrowing Power: ",(x/h).toFixed(2)]})]}),Object(A.jsx)(O.a,{item:!0,xs:6,children:Object(A.jsxs)(M.a,{variant:"h4",children:[(d/S).toFixed(2)," (EST.)"]})}),Object(A.jsxs)(O.a,{item:!0,xs:6,children:[Object(A.jsx)(Q,{children:i}),Object(A.jsxs)(M.a,{variant:"body2",children:["Max Size: ",(x/S/h).toFixed(2),k]})]}),Object(A.jsx)(l.a,{mt:2,children:P})]})}var Z=["children","value","index"];function $(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function ee(e){var t=e.state,n=e.contract_avaperps,r=e.children,i=Object(_.a)(),s=a.useState(0),c=Object(o.a)(s,2),u=c[0],p=c[1];function d(e){var t=e.children,n=e.value,a=e.index,r=Object(f.a)(e,Z);return Object(A.jsx)("div",Object(y.a)(Object(y.a)({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},r),{},{children:n===a&&Object(A.jsx)(l.a,{sx:{p:3},children:Object(A.jsx)(M.a,{children:t})})}))}return Object(A.jsxs)(l.a,{sx:{bgcolor:"background.paper",width:500},children:[Object(A.jsx)(w.a,{position:"static",children:Object(A.jsxs)(T.a,{value:u,onChange:function(e,t){console.log(t),p(t)},textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(A.jsx)(k.a,Object(y.a)({label:"Long"},$(0))),Object(A.jsx)(k.a,Object(y.a)({label:"Short"},$(1)))]})}),Object(A.jsxs)(g.a,{axis:"rtl"===i.direction?"x-reverse":"x",index:u,onChangeIndex:function(e){console.log(e),p(e)},children:[Object(A.jsx)(d,{value:u,index:0,dir:i.direction,children:Object(A.jsx)(K,{contract_avaperps:n,state:t,value:u,children:r})}),Object(A.jsx)(d,{value:u,index:1,dir:i.direction,children:Object(A.jsx)(K,{contract_avaperps:n,state:t,value:u,children:r})})]})]})}var te=n(1602),ne=n(16),ae=n(17),re=n(32),ie=n(33),se=function(e){Object(re.a)(n,e);var t=Object(ie.a)(n);function n(e){var a;return Object(ne.a)(this,n),(a=t.call(this,e)).state={time:Date.now()},a}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:Date.now()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=3600-Math.floor(this.state.time/1e3)%3600,t=e%60,n=Math.floor(e/60);return Object(A.jsxs)("span",{children:[" ",n,":",("00"+t).slice(-2)," "]})}}]),n}(a.Component),ce=Object(x.a)(h.a)((function(e){var t=e.theme;return Object(y.a)(Object(y.a)({},t.typography.body1),{},{padding:t.spacing(1),textAlign:"center"})}));function oe(e){var t=e.children;return Object(A.jsx)(O.a,{item:!0,xs:3,children:Object(A.jsx)(ce,{children:t})})}function ue(e){var t=e.state,n=t.amm_base,a=t.amm_quote,r=t.user_base,i=t.user_quote,s=(t.user_collateral,t.oracle_price),c=t.tvl,o=t.perp_name,u=t.peg_multiplier,p=(t.perp,a/n),d=(((p*Math.abs(r)+Number(i))/5/u).toFixed(2),(p*u-s)/s/24),b=(Math.pow(1+d,8760),"\n        ".concat((Math.abs(r)/u).toFixed(2),"\n        ").concat(r<0?"SHORT":"LONG","\n        ").concat(o,"-PERP\n    "));return Object(A.jsx)(l.a,{m:2,children:Object(A.jsxs)(O.a,{container:!0,spacing:2,children:[Object(A.jsxs)(O.a,{container:!0,item:!0,spacing:2,children:[Object(A.jsx)(oe,{xs:3,children:Object(A.jsx)(M.a,{variant:"h4",children:"Your Data"})}),Object(A.jsxs)(oe,{children:[b,Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsx)(M.a,{variant:"subtitle2",children:"Position"})]}),Object(A.jsxs)(oe,{children:[(Math.abs(r)*p/u).toFixed(2)," USDC",Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsx)(M.a,{variant:"subtitle2",children:"Position Notional Value"})]}),Object(A.jsxs)(oe,{children:[(i/u/5).toFixed(2)," USDC",Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsx)(M.a,{variant:"subtitle2",children:"Liquid Capital"})]})]}),Object(A.jsxs)(O.a,{container:!0,item:!0,spacing:2,children:[Object(A.jsx)(oe,{xs:3,children:Object(A.jsx)(M.a,{variant:"h4",children:"Market Data"})}),Object(A.jsxs)(oe,{children:[p.toFixed(2)," USDC",Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsxs)(M.a,{variant:"subtitle2",children:[o,"-PERP Price"]})]}),Object(A.jsxs)(oe,{children:[(s/u).toFixed(2)," USDC",Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsxs)(M.a,{variant:"subtitle2",children:[o," Price"]})]}),Object(A.jsxs)(oe,{children:[(100*d).toFixed(2),"% in ",Object(A.jsx)(se,{}),Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsx)(M.a,{variant:"subtitle2",children:"Predicted Funding Rate"})]})]}),Object(A.jsxs)(O.a,{container:!0,item:!0,spacing:2,children:[Object(A.jsx)(oe,{xs:3,children:Object(A.jsx)(M.a,{variant:"h4",children:"vAMM Data"})}),Object(A.jsxs)(oe,{children:[(c/u).toFixed(2)," USDC",Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsx)(M.a,{variant:"subtitle2",children:"TVL"})]}),Object(A.jsxs)(oe,{children:[(n/u).toFixed(2)," ",o,"-PERP",Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsx)(M.a,{variant:"subtitle2",children:"Base Asset Amount"})]}),Object(A.jsxs)(oe,{children:[(a/u).toFixed(2)," USDC",Object(A.jsx)(te.a,{sx:{borderBottomWidth:2}}),Object(A.jsx)(M.a,{variant:"subtitle2",children:"Quote Asset Amount"})]})]})]})})}var pe=n(1612),le=n(1553);function de(e){var t=e.message,n=void 0!==t&&t,r=a.useState(!0),i=Object(o.a)(r,2),s=i[0],c=(i[1],n?Object(A.jsx)(M.a,{variant:"h4",children:"Wrong network. Select Avalanche Fuji Testnet (Network ID 43113) and refresh."}):Object(A.jsx)(le.a,{color:"inherit"}));return Object(A.jsx)("div",{children:Object(A.jsx)(pe.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:s,children:c})})}var be=Object(x.a)(h.a)((function(e){var t=e.theme;return Object(y.a)(Object(y.a)({},t.typography.body2),{},{textAlign:"center",color:t.palette.text.secondary})})),je=Math.pow(10,8);function me(e){var t=e.contract_avaperps,n=e.contract_erc20copy,r=e.net_id,i=e.address_avaperps,s=e.children,u=e.perp_name,d=e.perp,j=Object(b.b)().user,m=a.useState(),y=Object(o.a)(m,2),x=y[0],h=y[1];function f(){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(p.a.mark((function e(){var a,r,s,c,l,b,m,y,x,O,f,v;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,j&&(console.log("user not logged in"),a=j.get("ethAddress")),null!=t){e.next=5;break}return console.log("contract not initialized"),e.abrupt("return");case 5:return r=[t.methods.amms(d).call(),a?t.methods.user_base(d).call({from:a}):"Not logged in",a?t.methods.user_quote().call({from:a}):"Not logged in",a?t.methods.user_collateral().call({from:a}):"Not logged in",t.methods.oracle_price(d).call(),n.methods.balanceOf(i).call()],e.next=8,Promise.all(r);case 8:s=e.sent,c=Object(o.a)(s,6),l=c[0],b=c[1],m=c[2],y=c[3],x=c[4],O=c[5],f=l.base_asset_amount,v=l.quote_asset_amount,h({amm_base:f,amm_quote:v,user_base:b,user_quote:m,user_collateral:y,oracle_price:x,tvl:O,perp_name:u,peg_multiplier:je,perp:d});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.useEffect((function(){f()}),[j,d]),43113!==r?Object(A.jsx)(de,{message:!0}):x?Object(A.jsxs)(l.a,{p:3,children:[Object(A.jsx)(O.a,{container:!0,justifyContent:"center",children:Object(A.jsx)(be,{children:Object(A.jsx)(ee,{state:x,contract_avaperps:t,children:s})})}),Object(A.jsx)("br",{}),Object(A.jsx)(O.a,{container:!0,justifyContent:"center",sx:{borderRadius:"16px"},children:Object(A.jsx)(be,{children:Object(A.jsx)(ue,{state:x})})})]}):(f(),Object(A.jsx)(de,{}))}n(1616),n(1618),n(1617),n(1607);function ye(){}var xe=n(1614),he=n(1625),Oe=n(1613),fe=n(1603),ve=Math.pow(10,8);function ge(e){var t,n=e.contract_avaperps,r=e.contract_erc20copy,i=e.available,s=e.address_avaperps,u=(e.address_erc20copy,Object(b.b)().user),d=a.useState(!1),j=Object(o.a)(d,2),m=j[0],y=j[1],x=a.useState(),h=Object(o.a)(x,2),O=h[0],f=h[1];u&&(t=u.get("ethAddress"));var v=!u||O<=0||O>i,g=function(){y(!1)};function _(){return(_=Object(c.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.methods.approve(s,O*ve).send({from:t});case 2:return e.next=4,n.methods.deposit_collateral(O*ve).send({from:t});case 4:g();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(c.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.withdraw_collateral(O*ve).send({from:t});case 2:g();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(A.jsxs)(l.a,{m:1,children:[Object(A.jsx)(S.a,{color:"inherit",onClick:function(){y(!0)},startIcon:Object(A.jsx)(Oe.a,{src:"https://icons-for-free.com/iconfiles/png/512/cryptocurrency+icons+++color+usdc-1324449146826221536.png"}),disabled:!u||i<0,children:"Transfer"}),Object(A.jsxs)(P.a,{open:m,onClose:g,children:[Object(A.jsxs)(E.a,{sx:{m:0,p:2},children:["Transfer",Object(A.jsx)(I.a,{"aria-label":"close",onClick:g,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(A.jsx)(fe.a,{})})]}),Object(A.jsxs)(N.a,{children:[Object(A.jsx)(he.a,{children:"Transfer USDC to and from this trading platform."}),Object(A.jsx)(C.a,{margin:"dense",label:"Amount (USDC)",variant:"standard",type:"number",helperText:i.toFixed(2)+" USDC available for deposit",value:O,onChange:function(e){f(e.target.value)}})]}),Object(A.jsxs)(U.a,{children:[Object(A.jsx)(S.a,{variant:"contained",onClick:function(){return _.apply(this,arguments)},disabled:v,children:"Deposit"}),Object(A.jsx)(S.a,{onClick:function(){return w.apply(this,arguments)},variant:"contained",color:"error",disabled:v,children:"Withdraw"})]})]})]})}Math.pow(10,8);function _e(e){e.contract_avaperps;var t,n=e.contract_erc20copy,r=e.address_avaperps,i=Object(b.b)().user,s=a.useState(!1),u=Object(o.a)(s,2),d=u[0],j=u[1],m=a.useState(!1),y=Object(o.a)(m,2),x=y[0],h=y[1],O=a.useState(0),f=Object(o.a)(O,2),v=(f[0],f[1],function(){j(!0)});function g(){return(g=Object(c.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,n.methods.mint(Math.pow(10,11)).send({from:t});case 3:return e.next=5,n.methods.increaseAllowance(r,Math.pow(10,11)).send({from:t});case 5:window.location.reload();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i&&(t=i.get("ethAddress")),Object(A.jsxs)(l.a,{m:1,children:[Object(A.jsx)(S.a,{color:"inherit",onClick:v,startIcon:Object(A.jsx)(Oe.a,{src:"https://cdn-icons-png.flaticon.com/512/590/590415.png"}),disabled:!i,children:"Use Faucet"}),Object(A.jsxs)(P.a,{open:d,children:[Object(A.jsxs)(E.a,{sx:{m:0,p:2},children:["Use Faucet",Object(A.jsx)(I.a,{"aria-label":"close",onClick:x?v:function(){j(!1)},sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(A.jsx)(fe.a,{})})]}),Object(A.jsx)(N.a,{children:Object(A.jsx)(he.a,{children:"USDC Faucet on Avalanche Fuji Testnet. Entails two transactions: minting test USDC and enabling you to deposit it."})}),Object(A.jsx)(U.a,{children:Object(A.jsx)(S.a,{variant:"contained",onClick:function(){return g.apply(this,arguments)},children:"Request 1000 USDC"})})]})]})}var we=function(e){e.setPage;var t=Object(b.b)(),n=t.authenticate,a=t.isAuthenticated,r=(t.user,t.logout);return a?Object(A.jsx)("div",{children:Object(A.jsx)(S.a,{onClick:Object(c.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)}))),color:"inherit",startIcon:Object(A.jsx)(Oe.a,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"}),children:"Logout"})}):Object(A.jsx)("div",{children:Object(A.jsx)(S.a,{onClick:Object(c.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({signingMessage:"Hello World!"});case 2:case"end":return e.stop()}}),e)}))),color:"inherit",startIcon:Object(A.jsx)(Oe.a,{src:"https://moralis.io/wp-content/uploads/2021/06/cropped-Moralis-Favicon-Glass.png"}),children:"Login"})})},Te=n.p+"static/media/VistaRedLogo.e2ae08a8.png",ke=Math.pow(10,8);function Me(e){var t,n=e.contract_avaperps,a=e.contract_erc20copy,i=e.address_avaperps,s=e.address_erc20copy,u=Object(b.b)().user,d=r.a.useState(-1),j=Object(o.a)(d,2),m=j[0],y=j[1];u&&(t=u.get("ethAddress"));var x=function(){var e=Object(c.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.methods.allowance(t,i).call();case 2:n=e.sent,y(n/ke);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){x()}),[]),m<0&&x(),console.log(m),Object(A.jsx)(w.a,{position:"fixed",style:{color:"fireBrick",background:"transparent"},children:Object(A.jsxs)(xe.a,{children:[Object(A.jsx)(l.a,{m:2,children:Object(A.jsx)("img",{src:Te,alt:"logo",height:"55px"})}),Object(A.jsx)(M.a,{variant:"h4",noWrap:!0,component:"div",sx:{flexGrow:1},children:"Vista Protocol"}),Object(A.jsx)(_e,{contract_erc20copy:a,contract_avaperps:n,address_avaperps:i}),Object(A.jsx)(ge,{contract_erc20copy:a,contract_avaperps:n,available:m,address_avaperps:i,address_erc20copy:s}),Object(A.jsx)(we,{})]})})}var Ce=n(98);function Se(e){var t=e.perp,n=e.set_perp,a=e.perps.map((function(e,t){return{label:e,value:t}}));return Object(A.jsx)(l.a,{component:"form",sx:{},noValidate:!0,autoComplete:"off",children:Object(A.jsx)(C.a,{id:"outlined-select-currency",select:!0,value:t,onChange:function(e){n(e.target.value)},variant:"standard",children:a.map((function(e){return Object(A.jsx)(Ce.a,{value:e.value,children:e.label},e.value)}))})})}var Ae=n(698),De=n(699),Fe=n(208);function Pe(){Object(b.b)().user;var e=r.a.useState(),t=Object(o.a)(e,2),n=t[0],a=t[1],i=r.a.useState(),s=Object(o.a)(i,2),u=s[0],j=s[1],y=r.a.useState(),x=Object(o.a)(y,2),h=x[0],O=x[1],f=r.a.useState(1),v=Object(o.a)(f,2),g=v[0],_=v[1],w=r.a.useState("faucet"),T=Object(o.a)(w,2),k=(T[0],T[1]),M=function(){var e=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==m.a.givenProvider){e.next=2;break}return e.abrupt("return");case 2:return t=new m.a(m.a.givenProvider),e.next=5,t.eth.net.getId();case 5:n=e.sent,O(n),n=new t.eth.Contract(Ae,Fe.a),a(n),n=new t.eth.Contract(De,Fe.b),j(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){M()}),[]),null==n&&M();var C="index avax btc eth link".toUpperCase().split(" "),S=C[g],D={trade:Object(A.jsx)(me,{contract_erc20copy:u,contract_avaperps:n,net_id:h,perp_name:S,perp:g,address_avaperps:Fe.a,children:Object(A.jsx)(Se,{perp:g,perps:C,set_perp:_})}),faucet:Object(A.jsx)(ye,{contract_erc20copy:u})};return Object(A.jsxs)(l.a,{sx:{display:"flex"},style:{background:"linear-gradient(black, firebrick)",height:"100vh"},children:[Object(A.jsx)(d.a,{}),Object(A.jsx)(Me,{contract_erc20copy:u,contract_avaperps:n,address_avaperps:Fe.a,address_erc20copy:Fe.b,pages:D,set_page:k}),Object(A.jsx)(l.a,{m:9,children:Object(A.jsx)(me,{contract_erc20copy:u,contract_avaperps:n,net_id:h,perp_name:S,perp:g,address_avaperps:Fe.a,children:Object(A.jsx)(Se,{perp:g,perps:C,set_perp:_})})})]})}var Ee=n(1609),Ne=n(207),Ue=n(700),Ie=(Object(Ue.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:Ne.a.A400}}}),Object(Ue.a)({palette:{mode:"dark"}}));s.a.render(Object(A.jsx)(b.a,{appId:"zWytrx6G5R9k0UdpqvrptVYFTcuLiX7XMHcue9QJ",serverUrl:"https://l0fckgbjlk4g.usemoralis.com:2053/server",children:Object(A.jsxs)(Ee.a,{theme:Ie,children:[Object(A.jsx)(d.a,{}),Object(A.jsx)(Pe,{})]})}),document.getElementById("root"))},208:function(e){e.exports=JSON.parse('{"a":"0xFB58f2844BD7C2702Fb39671691bb151d39DdfA8","b":"0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C"}')},698:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"amms","outputs":[{"internalType":"address","name":"oracle","type":"address"},{"internalType":"uint256","name":"base_asset_amount","type":"uint256"},{"internalType":"uint256","name":"quote_asset_amount","type":"uint256"},{"internalType":"int256","name":"cum_funding_rate","type":"int256"},{"internalType":"int256","name":"funding_rate","type":"int256"},{"internalType":"int256","name":"periodicity","type":"int256"},{"internalType":"uint256","name":"mark_twap","type":"uint256"},{"internalType":"int256","name":"mark_twap_ts","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount_xusdc","type":"uint256"}],"name":"close_long","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount_xusdc","type":"uint256"}],"name":"close_short","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"composition","outputs":[{"internalType":"string[10]","name":"","type":"string[10]"},{"internalType":"uint256[10]","name":"","type":"uint256[10]"},{"internalType":"uint256[10]","name":"","type":"uint256[10]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_usdc","type":"uint256"}],"name":"deposit_collateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount_xusdc","type":"uint256"}],"name":"open_long","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount_xusdc","type":"uint256"}],"name":"open_short","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"oracle_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"string","name":"token","type":"string"}],"name":"replace_token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[10]","name":"amounts_","type":"uint256[10]"}],"name":"set_amounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"set_index_price","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lev","type":"uint256"}],"name":"set_leverage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[10]","name":"prices_","type":"uint256[10]"}],"name":"set_prices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"user_base","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"user_collateral","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"user_quote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_usdc","type":"uint256"}],"name":"withdraw_collateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},699:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}},[[1533,1,2]]]);
//# sourceMappingURL=main.56d16cd6.chunk.js.map