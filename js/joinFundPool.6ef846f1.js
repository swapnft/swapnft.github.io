(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["joinFundPool"],{"0861":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mk-navbar"},[o("img",{attrs:{src:n("c590")},on:{click:function(e){return t.$router.back(1)}}}),o("span",{domProps:{textContent:t._s(t.title)}})])},r=[],a={props:{title:{type:String,required:!0}}},i=a,s=i,u=(n("2ef3"),n("2877")),c=Object(u["a"])(s,o,r,!1,null,"e5207e16",null);e["default"]=c.exports},"133e":function(t,e,n){},1500:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"join-fund-pool"},[o("mk-navbar",{attrs:{title:"资金池"}}),o("div",{staticClass:"box"},[o("div",{staticClass:"content"},[o("div",{staticClass:"header"},[o("div",{staticClass:"countdown"},[o("van-circle",{attrs:{rate:"100","layer-color":"#3F4A91","stroke-width":80,color:{"0%":"#9FD9D0","100%":"#6154F5"}},model:{value:t.circle,callback:function(e){t.circle=e},expression:"circle"}})],1),o("img",{attrs:{src:n("7068")},on:{click:function(e){t.$router.push({path:"/tokenInfo",query:{token:JSON.stringify(t.tokenInfo)}})}}}),o("img",{attrs:{src:n("17a3")},on:{click:t.miningMessage}}),o("img",{attrs:{src:n("92f8")},on:{click:t.openSetting}})]),o("div",{staticClass:"tokens"},[o("div",{staticClass:"token"},[t._m(0),o("span",{domProps:{textContent:t._s(t.$t("joinFundPool.text2"))}}),o("span",[t._v(t._s(t.trxBalance))])]),o("div",{staticClass:"logos"},[o("img",{attrs:{src:n("90bd")}}),o("img",{attrs:{src:t.tokenInfo.tokenLogoUrl}})]),o("div",{staticClass:"token"},[o("div",{staticClass:"symbol select",on:{click:t.openSearch}},[t.tokenInfo?o("span",[t._v(t._s(t.tokenInfo.tokenSymbol))]):o("span",{staticClass:"placeholder"},[t._v(t._s(t.$t("joinFundPool.text3")))]),o("img",{attrs:{src:n("716f")}})]),o("span",{domProps:{textContent:t._s(t.$t("joinFundPool.text2"))}}),o("span",[t._v(t._s(t.tokenBalance))])])]),o("div",{staticClass:"inputs"},[o("van-field",{attrs:{type:"number",placeholder:t.$t("joinFundPool.text4")},on:{input:t.inputTRX},model:{value:t.trxAmount,callback:function(e){t.trxAmount=e},expression:"trxAmount"}}),o("span",[t._v("+")]),o("van-field",{attrs:{type:"number",placeholder:t.$t("joinFundPool.text4")},on:{input:t.inputToken},model:{value:t.tokenAmount,callback:function(e){t.tokenAmount=e},expression:"tokenAmount"}})],1),o("div",{staticClass:"rate"},[o("div",[o("span",{directives:[{name:"show",rawName:"v-show",value:!t.rateChanged,expression:"!rateChanged"}]},[t._v(t._s(t.$t("joinFundPool.text5"))+" 1TRX = "+t._s(t.rate)+t._s(t.tokenInfo.tokenSymbol))]),o("span",{directives:[{name:"show",rawName:"v-show",value:t.rateChanged,expression:"rateChanged"}]},[t._v(t._s(t.$t("joinFundPool.text5"))+" 1"+t._s(t.tokenInfo.tokenSymbol)+" = "+t._s(t.rate)+"TRX")]),o("img",{attrs:{src:n("2bc3")},on:{click:t.switchRate}})]),o("span",[t._v(t._s(t.$t("joinFundPool.text6"))+" "+t._s(t.prop))])]),o("van-button",{on:{click:t.addLiquidity}},[t._v(t._s(t.$t("joinFundPool.text7")))])],1),t._l(t.pools,(function(e){return o("div",{key:e.address,staticClass:"your-share"},[o("div",{staticClass:"tokens"},[o("div",[o("div",[o("div",[o("img",{attrs:{src:n("90bd")}}),o("img",{attrs:{src:e.logo}})]),o("span",[t._v("TRX/"+t._s(e.symbol))])]),o("span",[t._v(t._s(e.myShare)+"%")])]),o("span",[t._v("LP: "+t._s(e.lp))])]),o("div",{staticClass:"amounts"},[o("div",[o("span",[t._v("TRX: "+t._s(e.trx))]),o("span",[t._v(t._s(e.symbol)+": "+t._s(e.token))])]),o("van-button",{on:{click:function(n){t.$router.push({path:"/redemption",query:{info:JSON.stringify(e)}})}}},[t._v(t._s(t.$t("joinFundPool.text11")))])],1)])})),t.pools.length<1?o("div",{staticClass:"not-liquidity"},[o("img",{attrs:{src:n("f0b7")}}),o("span",[t._v("暂时没有发现流动池")])]):t._e()],2),o("search-tokens",{ref:"searchTokens",on:{select:t.select}}),o("fundpool-state",{attrs:{state:t.state,trxAmount:t.trxAmount,tokenInfo:{amount:t.tokenAmount,symbol:t.tokenInfo.tokenSymbol},lp:t.min_liquidity,rate:t.rate,reRate:t.reRate,prop:t.prop},on:{addLiquidity:t.addLiquidity,close:t.close}}),o("trading-setup",{ref:"tradingSetup",on:{change:t.changeDeadline}})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"symbol"},[n("span",[t._v("TRX")])])}],a=(n("99af"),n("4de4"),n("d81d"),n("0d03"),n("a9e3"),n("b680"),n("d3b7"),n("25f0"),n("4795"),n("96cf"),n("1da1")),i=n("aca7"),s=n("a981"),u={components:{"mk-navbar":function(){return Promise.resolve().then(n.bind(null,"0861"))},"search-tokens":function(){return Promise.resolve().then(n.bind(null,"bab4"))},"fundpool-state":function(){return Promise.resolve().then(n.bind(null,"e0d3"))},"trading-setup":function(){return Promise.resolve().then(n.bind(null,"0430"))}},data:function(){return{circle:0,trxAmount:"",tokenAmount:"",trxBalance:"--",tokenBalance:"--",pools:[],tokenInfo:{},contract:{},exTrxBalance:0,exTokenBalace:0,totalLiquidity:0,allowance:0,rate:"--",reRate:"",trxInputing:!1,tokenInputing:!1,prop:"--",rateChanged:!1,state:"none",min_liquidity:100.0001,slipPoint:2,deadline:600}},created:function(){if(this.$utils){var t=this.$route.query;t.token?this.select({token:JSON.parse(t.token)}):this.select({token:i["i"]}),this.init()}},methods:{miningMessage:function(){vant.Toast.fail("暂未开放！")},init:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,o,r,a,s,u,c,l,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=setInterval((function(){t.circle+=10,t.circle>=100&&(t.circle=0,t.init(),clearInterval(n))}),1e3),e.next=3,tronWeb.trx.getBalance(t.$address);case 3:return t.trxBalance=e.sent.fromSun().toFixed(2),e.next=6,Object(i["c"])(t.$address);case 6:return o=e.sent.data.liquidityList.filter((function(t){return t.jswapBalance>0})),r=o.map((function(t){return t.address})),e.next=10,t.$utils.call({contractAddress:"TCNYd8L5hBey9FwPpvgtvDaY2cHjMFVLZu",method:"getPool(address,address[])",parameter:[{type:"address",value:t.$address},{type:"address[]",value:r}]});case 10:for(a=e.sent.constant_result[0].decode(["uint256[]","uint256[]","uint256[]","uint256[]"],["_token","_trx","_uniToken","_totalsupply"]),s=a._token,u=a._trx,c=a._uniToken,l=a._totalsupply,d=[],p=0;p<r.length;p++)d.push({logo:o[p].tokenLogoUrl,symbol:o[p].tokenSymbol,token:s[p].toString().fromSun(o[p].tokenDecimal),trx:u[p].toString().fromSun(),lp:c[p].toString().fromSun(),myShare:c[p].toString().toBN().div(l[p].toString().toBN()).multipliedBy("100".toBN()).toString().toFixed(2),address:o[p].address,tokenAddress:o[p].tokenAddress,tokenDecimal:o[p].tokenDecimal});t.pools=d;case 18:case"end":return e.stop()}}),e)})))()},addLiquidity:function(){var t=this;if(this.trxBalance<Number(this.trxAmount))return vant.Toast.fail("TRX"+this.$t("joinFundPool.text13"));if(this.tokenBalance<Number(this.tokenAmount))return vant.Toast.fail("".concat(this.tokenInfo.tokenSymbol).concat(this.$t("joinFundPool.text13")));if(this.allowance<Number(this.tokenAmount))return this.approve();var e=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.trxAmount.toSun().toBN(),o=n.div(100).multipliedBy(this.slipPoint),r=n.minus(o).div(this.exTrxBalance).multipliedBy(this.totalLiquidity).toFixed(0),i=n.plus(o).multipliedBy(this.exTokenBalace).div(this.exTrxBalance).toFixed(0);this.min_liquidity=r.fromSun(),this.contract.addLiquidity(r,i,e).send({callValue:this.trxAmount.toSun()}).then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state="in",e.next=3,t.$loading(n);case 3:if(!e.sent){e.next=5;break}t.state="done";case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},approve:function(){var t=this,e=tronWeb.contract(trc20Abi,this.tokenInfo.tokenAddress);e.approve(this.tokenInfo.address,this.tokenAmount.toSun(this.tokenInfo.tokenDecimal)).send().then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state="approve",e.next=3,t.$loading(n);case 3:if(!e.sent){e.next=8;break}return e.next=6,t.$utils.call({contractAddress:t.tokenInfo.tokenAddress,method:"allowance(address,address)",parameter:[{type:"address",value:t.$address},{type:"address",value:t.tokenInfo.address}]});case 6:t.allowance=e.sent.constant_result[0].decode(["uint256"]).toString().fromSun(t.tokenInfo.tokenDecimal),t.state="approved";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},select:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var o,r,a,i,u,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.token,"TRX"!==o.tokenSymbol){n.next=3;break}return n.abrupt("return",vant.Toast.fail(e.$t("joinFundPool.text12")));case 3:return e.tokenInfo=o,e.contract=tronWeb.contract(s,o.address),n.next=7,e.$utils.call({contractAddress:o.tokenAddress,method:"balanceOf(address)",parameter:[{type:"address",value:e.$address}]});case 7:return e.tokenBalance=n.sent.constant_result[0].decode(["uint256"]).toString().fromSun(o.tokenDecimal).toFixed(2),n.next=10,e.$utils.call({contractAddress:"TCNYd8L5hBey9FwPpvgtvDaY2cHjMFVLZu",method:"getSingleInfo(address,address)",parameter:[{type:"address",value:e.$address},{type:"address",value:o.tokenAddress}]});case 10:r=n.sent.constant_result[0].decode(["address","uint256","uint256","uint256","uint256","uint256","uint256","uint256"],["_exchangeAddr","_allowance","_exTokenBalace","_exTrxBalance","_totalLiquidity","_userUniAmount","_userTrxAmount","_userTokenAmount"]),a=r._exTrxBalance,i=r._exTokenBalace,u=r._totalLiquidity,c=r._allowance,e.exTrxBalance=a.toString().toBN(),e.exTokenBalace=i.toString().toBN(),e.totalLiquidity=u.toString().toBN(),e.allowance=c.toString().fromSun(o.tokenDecimal),e.rate="1".toSun().toBN().multipliedBy(e.exTokenBalace).div(e.exTrxBalance).toString().fromSun(e.tokenInfo.tokenDecimal).toFixed(e.tokenInfo.tokenDecimal),e.reRate="1".toSun(e.tokenInfo.tokenDecimal).toBN().multipliedBy(e.exTrxBalance).div(e.exTokenBalace).toString().fromSun().toFixed(6);case 21:case"end":return n.stop()}}),n)})))()},inputTRX:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.tokenInputing){e.next=2;break}return e.abrupt("return",t.tokenInputing=!1);case 2:if(""!==t.trxAmount){e.next=6;break}return t.tokenAmount="",t.prop="--",e.abrupt("return",!1);case 6:t.trxInputing=!0,t.trxAmount.length>0&&(t.tokenAmount=t.trxAmount.toSun().toBN().multipliedBy(t.exTokenBalace).div(t.exTrxBalance).toString().fromSun(t.tokenInfo.tokenDecimal).toFixed(t.tokenInfo.tokenDecimal)),n=t.trxAmount.toSun().toBN(),t.prop="".concat(n.div(t.exTrxBalance.plus(n)).multipliedBy("100".toBN()).toString().toFixed(6),"%");case 10:case"end":return e.stop()}}),e)})))()},inputToken:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.trxInputing){e.next=2;break}return e.abrupt("return",t.trxInputing=!1);case 2:if(""!==t.tokenAmount){e.next=6;break}return t.trxAmount="",t.prop="--",e.abrupt("return",!1);case 6:t.tokenInputing=!0,t.tokenAmount.length>0&&(t.trxAmount=t.tokenAmount.toSun(t.tokenInfo.tokenDecimal).toBN().multipliedBy(t.exTrxBalance).div(t.exTokenBalace).toString().fromSun().toFixed(6)),n=t.trxAmount.toSun().toBN(),t.prop="".concat(n.div(t.exTrxBalance.plus(n)).multipliedBy("100".toBN()).toString().toFixed(6),"%");case 10:case"end":return e.stop()}}),e)})))()},switchRate:function(){if(!this.tokenInfo.address)return vant.Toast.fail(this.$t("joinFundPool.text14"));this.rateChanged=!this.rateChanged,this.rateChanged?this.rate="1".toSun(this.tokenInfo.tokenDecimal).toBN().multipliedBy(this.exTrxBalance).div(this.exTokenBalace).toString().fromSun().toFixed(6):this.rate="1".toSun().toBN().multipliedBy(this.exTokenBalace).div(this.exTrxBalance).toString().fromSun(this.tokenInfo.tokenDecimal).toFixed(this.tokenInfo.tokenDecimal)},changeDeadline:function(t){var e=t.slipPoint,n=t.deadline;this.slipPoint=e,this.deadline=n},openSetting:function(){this.$refs.tradingSetup.open()},openSearch:function(){this.$refs.searchTokens.open()},close:function(){this.state="none",this.trxAmount="",this.tokenAmount="",this.init()}}},c=u,l=c,d=(n("b238"),n("2877")),p=Object(d["a"])(l,o,r,!1,null,"26071406",null);e["default"]=p.exports},"2ef3":function(t,e,n){"use strict";n("133e")},"3ca2":function(t,e,n){},"716f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAADJklEQVRIS63TXWibVRzH8e//eZI8zULVra5zvjCmfcvQ6c2GzosJeiEigkhBLwYVWVBDlbgyWhX3ZFub0KjdbPskWlR04oooeOOFIkxERGHeTFdbO1tUxPkCvkyydOk5f3nSTXSsa6r7353D//w+nDdJ900dBN2i6MC8d/GBF/zLy1zg6uxUt7ll5hq0OoRoEtd9RNK9kxUET6GM6lNuQ2Rs2G/940LZt/iHIsk/126QqJYEuQmYB96TdN/kxyCbQV2gLJA1Gh8r5tf9+n9x39fIj5XJ6wVnRERvDPNUOeEIGUnvmFinnvO6KJuBCHBSlZwrbmk41/rzf8VTqcPRyMrEJhzZJ7BpweQ3LNkgPj4sYfDDj31+lXjRVwW2KMRATqrq0xgvCArrjy8X9/2jsZ/K7s3i8ixwQ4gCv2BtdjT+RhHftzU4rO6d01ca17wosBXwajh2v3WckVJ/+/f14t3d055JsFXEFICNqqigP1jH2VWMHXwpRMOsv+Fw8GBm6grXo4TorUAcZU7QQF1v/2j/1d8shXd1zTYk1lZvE0xOkWtrqOi3KvjBQMcrIOHOa/UvuHbs/uxlWpkbcYTbgcRpfEzM/L7hwnVfL4Z3+bMNK8qVO8RlD8iGBdTOGMiWcsnX/omeEw4nH318Zk3VVodE9E6gEWROVF5WMUOjueRXZ+OZzHfxqle+S0V9oAOwqjoNZIN8x/jZ6KJw7dj9Y81uxQwiejdwEXBKkAPWyDPBYNuXZ/BU6vCKaFPjPaBPAm01FJ1Qld3FfPub50LPC9fwnmPNTtTsFegEvUTgFCrjjuMWnhto+WJbz/FEY/TEvYLtBW1ZQO0Rq+7uUr7t7cXQJeHaa++bXm2xu0DvA1adxt+ySoCwUUR7gPWoGFQ/M9bZUyq0vnM+tC44bErtmLrUjegTjsM2oAmlCvI7orHaNYQo+onC3iDf/u5SaN1w2Jju+7RJbeNOcZz7FV0tZz6EYlT0I2O0//nB5Pv1oMuCw+YH/KOrGubcDMh20DWEKHoIKwPBYPsH9aLLhsMFD/UeWeloLI3odoUJNeSLhY4Pl4OGOX8BZ+ZVwJ5VGhkAAAAASUVORK5CYII="},"7c05":function(t,e,n){},b238:function(t,e,n){"use strict";n("7c05")},c590:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAArCAYAAACNWyPFAAADsklEQVRYR63XWcjmcxjG8c/Pvu+y5QChbAcUSSmS7UTOLDVlJ0uE7A4QMqaUfT+hzIGiJEsUOcGBKBlqJjPUNJoZQ5ax/nRN9zs95n3e932eZ97f2f9d/t/n/t33dV3308zz6b1vhSPwFI7CY20+Gb33rXEinsch9e4V8wbpvW+LU/AsDkDe/QcWzQuk974DzsEj2Lsq+A0PYeFmQ3rvu+A8PIjdCvAz7sRzrbX1E0N67/nfvPQy3IGd0bEGN2Fxay3XteHexj4F2AvX4zrsiH+xEtfgrSnARJDe+xbYF3dhAbbHP/gWV+Cj1tqfg598rEp671viwGrw6dgOf+NrXILPWmt/bXo1I0NKZJn9Z3B8AXLnn+NifDMMMPJ1lciOxAul5mjid3yMS7G8tZaKhp45KymRHYcXcRCi6l/wYfVgZWstPZnxzArpvaepJ1UFaXYA0cDbuBar5wLMel29951wGp5ExjVNX4fXcTPWttYytnOeoZX03iOy2MSiElzGdjVewr34aVTA0Ep673viAtyDWEbOKjyBR3NdrbUoe+SzsZJSccwtNnELcl152fe4D6+k4eMCNlZSgP1wA65CXDX3vRw34p2M7CSADZCyiaj4bpxfIstILsWV0UJrLZqY+AQSFT+Ms7ENYgtf4SJ8OWh0k1ICeQNnINkc1cYmLsSymWxiXFggP2LXsv24Z4zuNfw6aQ+mGWTvPZMU206zM03f4bYS3cTNHgSlkggvuri/0i2/T/ikT9k6Jhrb/0HyUDl9Fh7H7nV1P9TmEdjYApwGKVAi9NTKi4gyVpK8XlzjvW4cKxkKKVBcN8tZciO705QpvllCjSnOauvDJm+aQQ7kR0AHD9j7B7i87H3GgBoJUhUlN46uniQRI9Isa5/U8rBqHA3NGFqV6YfXMJxQdrMeX5RYV2y6lcwk0rmSMT3JlS3E1HYS21lSFS0ZxXZGyfhMWQz09qogok1PllUsfJpVdDarmRNSPcrfJeOzLV5dWZMoSNbkZ+/O5tQjQQZAyfrsWLGdpGZsKKl5K17NcAzzu5EhU9fRe48jxKUTzzHWnLW11T89zFjHhgzY0Lk1ENkJ8p6sSvkK98CmNjQRZMCGzqzlYp8CRUsv1/XFhjYsHBNDBmzo5KogE5iRz6RlN8vytyZ+t1mQAmUvPrb87tACJfzeqxFfudmQARvK1+rsy8cUKFrKQr5gXiAFylVlIQ8oTp7naOn9eYMUKO6wf2VSbCjPS+cVMiDaPUqwhyX0/gPgMEQpYSGeKAAAAABJRU5ErkJggg=="},d81d:function(t,e,n){"use strict";var o=n("23e7"),r=n("b727").map,a=n("1dde"),i=n("ae40"),s=a("map"),u=i("map");o({target:"Array",proto:!0,forced:!s||!u},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e0d3:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:"none"!==t.state,expression:"state !== 'none'"}],staticClass:"transaction-state"},[n("before",{directives:[{name:"show",rawName:"v-show",value:["approve","approved"].includes(t.state),expression:"['approve', 'approved'].includes(state)"}],attrs:{state:t.state,trxAmount:t.trxAmount,tokenInfo:t.tokenInfo},on:{addLiquidity:t.addLiquidity}}),n("in",{directives:[{name:"show",rawName:"v-show",value:"in"===t.state,expression:"state === 'in'"}],attrs:{trxAmount:t.trxAmount,tokenInfo:t.tokenInfo,lp:t.lp,rate:t.rate,reRate:t.reRate,prop:t.prop}}),n("after",{directives:[{name:"show",rawName:"v-show",value:"done"===t.state,expression:"state === 'done'"}],attrs:{trxAmount:t.trxAmount,tokenInfo:t.tokenInfo},on:{close:t.close}})],1)},r=[],a=(n("a9e3"),n("d3b7"),{components:{before:function(){return n.e("chunk-b114912e").then(n.bind(null,"6c15"))},in:function(){return n.e("chunk-6adc1400").then(n.bind(null,"7089"))},after:function(){return n.e("chunk-0e593353").then(n.bind(null,"229b"))}},props:{state:{type:String,required:!0},trxAmount:{type:[Number,String],required:!0},tokenInfo:{type:Object,required:!0},lp:{type:[Number,String],required:!0},rate:{type:[Number,String],required:!0},reRate:{type:[Number,String],required:!0},prop:{type:[Number,String],required:!0}},data:function(){return{}},methods:{addLiquidity:function(){this.$emit("addLiquidity")},close:function(){this.$emit("close")}}}),i=a,s=i,u=(n("fc5a"),n("2877")),c=Object(u["a"])(s,o,r,!1,null,"402f4639",null);e["default"]=c.exports},f0b7:function(t,e,n){t.exports=n.p+"img/not-liquidity.1fc31064.png"},fc5a:function(t,e,n){"use strict";n("3ca2")}}]);