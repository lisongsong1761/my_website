(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mixedInspectionBindCodes-mixedInspectionBindCodes"],{"0778":function(e,n,t){(function(i){var a;t("c975"),t("ac1f"),t("466d"),t("5319"),t("1276");var o=t("9523");!function(i,o){a=function(){return o(i)}.call(n,t,n,e),void 0===a||(e.exports=a)}(window,(function(e,n){if(!e.jWeixin){var t,a,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},s=function(){var e={};for(var n in r)e[r[n]]=n;return e}(),c=e.document,d=c.title,u=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),p=!(!l.match("mac")&&!l.match("win")),f=-1!=u.indexOf("wxdebugger"),m=-1!=u.indexOf("micromessenger"),g=-1!=u.indexOf("android"),h=-1!=u.indexOf("iphone")||-1!=u.indexOf("ipad"),v=(a=u.match(/micromessenger\/(\d+\.\d+\.\d+)/)||u.match(/micromessenger\/(\d+\.\d+)/))?a[1]:"",A={initStartTime:P(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},w={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:h?1:g?2:-1,clientVersion:v,url:encodeURIComponent(location.href)},y={},k={_completes:[]},I={state:0,data:{}};N((function(){A.initEndTime=P()}));var S=!1,b=[],x=(t={config:function(n){O("config",y=n);var t=!1!==y.check;N((function(){if(t)_(r.config,{verifyJsApiList:E(y.jsApiList),verifyOpenTagList:E(y.openTagList)},function(){k._complete=function(e){A.preVerifyEndTime=P(),I.state=1,I.data=e},k.success=function(e){w.isPreVerifyOk=0},k.fail=function(e){k._fail?k._fail(e):I.state=-1};var e=k._completes;return e.push((function(){!function(){if(!(p||f||y.debug||v<"6.0.2"||w.systemType<0)){var e=new Image;w.appId=y.appId,w.initTime=A.initEndTime-A.initStartTime,w.preVerifyTime=A.preVerifyEndTime-A.preVerifyStartTime,x.getNetworkType({isInnerInvoke:!0,success:function(n){w.networkType=n.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+w.version+"&o="+w.isPreVerifyOk+"&s="+w.systemType+"&c="+w.clientVersion+"&a="+w.appId+"&n="+w.networkType+"&i="+w.initTime+"&p="+w.preVerifyTime+"&u="+w.url;e.src=t}})}}()})),k.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();k._completes=[]},k}()),A.preVerifyStartTime=P();else{I.state=1;for(var e=k._completes,n=0,i=e.length;n<i;++n)e[n]();k._completes=[]}})),x.invoke||(x.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,B(t),i)},x.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},ready:function(e){0!=I.state?e():(k._completes.push(e),!m&&y.debug&&e())},error:function(e){v<"6.0.2"||(-1==I.state?e(I.data):k._fail=e)},checkJsApi:function(e){_("checkJsApi",{jsApiList:E(e.jsApiList)},(e._complete=function(e){if(g){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=s[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){M(r.onMenuShareTimeline,{complete:function(){_("shareTimeline",{title:e.title||d,desc:e.title||d,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){M(r.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?_("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):_("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){M(r.onMenuShareQQ,{complete:function(){_("shareQQ",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){M(r.onMenuShareWeibo,{complete:function(){_("shareWeiboApp",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){M(r.onMenuShareQZone,{complete:function(){_("shareQZone",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){_("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){_("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){_("startRecord",{},e)},stopRecord:function(e){_("stopRecord",{},e)},onVoiceRecordEnd:function(e){M("onVoiceRecordEnd",e)},playVoice:function(e){_("playVoice",{localId:e.localId},e)},pauseVoice:function(e){_("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){_("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){M("onVoicePlayEnd",e)},uploadVoice:function(e){_("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){_("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){_("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){_("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(g){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){_(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){_("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){_("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===S?(S=!0,_("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(S=!1,0<b.length){var n=b.shift();wx.getLocalImgData(n)}},e))):b.push(e)},getNetworkType:function(e){_("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),a=n.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){_("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},o(t,"getLocation",(function(e){_(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),o(t,"hideOptionMenu",(function(e){_("hideOptionMenu",{},e)})),o(t,"showOptionMenu",(function(e){_("showOptionMenu",{},e)})),o(t,"closeWindow",(function(e){_("closeWindow",{},e=e||{})})),o(t,"hideMenuItems",(function(e){_("hideMenuItems",{menuList:e.menuList},e)})),o(t,"showMenuItems",(function(e){_("showMenuItems",{menuList:e.menuList},e)})),o(t,"hideAllNonBaseMenuItem",(function(e){_("hideAllNonBaseMenuItem",{},e)})),o(t,"showAllNonBaseMenuItem",(function(e){_("showAllNonBaseMenuItem",{},e)})),o(t,"scanQRCode",(function(e){_("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(h){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))})),o(t,"openAddress",(function(e){_(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),o(t,"openProductSpecificView",(function(e){_(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),o(t,"addCard",(function(e){for(var n=e.cardList,t=[],i=0,a=n.length;i<a;++i){var o=n[i],s={card_id:o.cardId,card_ext:o.cardExt};t.push(s)}_(r.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var a=n[t];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))})),o(t,"chooseCard",(function(e){_("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),o(t,"openCard",(function(e){for(var n=e.cardList,t=[],i=0,a=n.length;i<a;++i){var o=n[i],s={card_id:o.cardId,code:o.code};t.push(s)}_(r.openCard,{card_list:t},e)})),o(t,"consumeAndShareCard",(function(e){_(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),o(t,"chooseWXPay",(function(e){_(r.chooseWXPay,L(e),e)})),o(t,"openEnterpriseRedPacket",(function(e){_(r.openEnterpriseRedPacket,L(e),e)})),o(t,"startSearchBeacons",(function(e){_(r.startSearchBeacons,{ticket:e.ticket},e)})),o(t,"stopSearchBeacons",(function(e){_(r.stopSearchBeacons,{},e)})),o(t,"onSearchBeacons",(function(e){M(r.onSearchBeacons,e)})),o(t,"openEnterpriseChat",(function(e){_("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),o(t,"launchMiniProgram",(function(e){_("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)})),o(t,"openBusinessView",(function(e){_("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(g){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))})),o(t,"miniProgram",{navigateBack:function(e){e=e||{},N((function(){_("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){N((function(){_("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){N((function(){_("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){N((function(){_("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){N((function(){_("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){N((function(){_("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){N((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),t),T=1,C={};return c.addEventListener("error",(function(e){if(!g){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=T++,n["wx-id"]=a),C[a])return;C[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!g){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(C[i]=!1)}}}),!0),n&&(e.wx=e.jWeixin=x),x}function _(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,B(t),(function(e){V(n,e,i)})):O(n,i)}function M(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),V(n,e,t)})):O(n,i||t)}function B(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function L(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function V(e,n,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=s[t];i&&(t=i);var a="ok";if(n){var o=n.indexOf(":");"confirm"==(a=n.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==t&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t+":"+a}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",y.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function E(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],a=r[i];a&&(e[n]=a)}return e}}function O(e,n){if(!(!y.debug||n&&n.isInnerInvoke)){var t=s[e];t&&(e=t),n&&n._complete&&delete n._complete,i.log('"'+e+'",',n||"")}}function P(){return(new Date).getTime()}function N(n){m&&(e.WeixinJSBridge?n():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",n,!1))}}))}).call(this,t("5a52")["default"])},"09da":function(e,n,t){"use strict";var i=t("c28a"),a=t.n(i);a.a},"2a1a":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.jweixin=void 0;var i=t("0778");n.jweixin=i},"2e5c":function(e,n,t){"use strict";t.r(n);var i=t("46e5"),a=t("872c");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("09da");var r,s=t("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"970ad7f8",null,!1,i["a"],r);n["default"]=c.exports},"46e5":function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}));var a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"form-item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.toBarcode("big")}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"must"},[e._v("*")]),i("v-uni-text",[e._v("扫描大管条码")])],1),i("v-uni-view",{staticClass:"middle"},[e._v(e._s(e.bigCode))]),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{staticClass:"saoma",attrs:{src:t("e354")}})],1)],1),i("v-uni-picker",{attrs:{"range-key":"name",value:e.pickerIndex,range:e.numArr},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.selectNum.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"must"},[e._v("*")]),i("v-uni-text",[e._v("检测数量")])],1),i("v-uni-view",{staticClass:"middle"},[e.pickerIndex>=0?i("v-uni-view",{staticClass:"uni-input",domProps:{textContent:e._s(e.numArr[e.pickerIndex].name)}}):i("v-uni-view",{staticClass:"uni-input",staticStyle:{color:"#C4C6CF"}},[e._v("请选择")])],1),i("v-uni-view",{staticClass:"right",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.tapPicker.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"14rpx",height:"25rpx"},attrs:{src:t("8158")}})],1)],1)],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"must"},[e._v("*")]),i("v-uni-text",[e._v("采样地址")])],1),i("v-uni-view",{staticClass:"inputMiddle"},[i("v-uni-input",{attrs:{placeholder:"请输入","placeholder-style":"color: #C4C6CF;"},model:{value:e.address,callback:function(n){e.address=n},expression:"address"}})],1)],1),i("v-uni-view",{staticClass:"form-item",staticStyle:{"margin-bottom":"0"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.toBarcode("small")}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"must"},[e._v("*")]),i("v-uni-text",[e._v("扫描用户预约码")])],1),i("v-uni-view",{staticClass:"middle"}),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{staticClass:"saoma",attrs:{src:t("e354")}})],1)],1),i("v-uni-view",{staticStyle:{"background-color":"#fff"}},e._l(e.codes,(function(n,t){return i("v-uni-view",{key:n.code},[i("v-uni-view",{staticStyle:{"border-radius":"10px",padding:"20rpx 30rpx","background-color":"#fff",display:"flex","justify-content":"space-between","align-items":"center"}},[i("v-uni-view",[e._v(e._s(t+1)+". "+e._s(n.name)+" "+e._s(n.childBarcode))])],1)],1)})),1),i("v-uni-view",{staticStyle:{"margin-top":"30px",padding:"0 30rpx"}},[i("v-uni-button",{staticStyle:{"background-color":"#5987ed"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.toSubmit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)},o=[]},8158:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABICAMAAACz1EcFAAAAhFBMVEUAAACkpKSampqampqampqampqZmZmhoaGampqZmZmcnJydnZ2ampqbm5uampqZmZmampqampqbm5ubm5udnZ2goKCampqampqampqampqampqZmZmZmZmbm5uampqampqampqcnJydnZ2ampqZmZmZmZmZmZmampqbm5uampqampqZmZktNSAQAAAAK3RSTlMABvvu6OH3C9nTHRfLWPOsYk9LLSMTlmo5J6Sdj4J5cUQ+D8bCv7y3M7KIhe6o6AAAASJJREFUSMft1slygkAYBGAQ2XdUEEFBkxiSef/3yzKdyiGH7gOXVNnn7/h3zzhh6/mdI6Q1nxkF6JmvDBz65jsnl8HO2JRUniFfqbxAvoRMTpBPNyYryOzAZL6xMk6ZrCGjhMkmsNLfMzkXkD2TR8/K7Y7JBdJbmNxtrSyuTPa4kGBmcv8jGyaTyMpNzmQaQ1ZMHjJjQ4t0e4acmAzvkBcm3TfIdypLyJHKE+Qg7IJa4/FRYxOlao1Lh0o0jrkQRxerZ1xrxTCVWjXNBbVY8nmdgVngvOM6I3gt4Hp1qNXpV69wnbvu/jSFdU9sc6juwyqL4w5wg7iKrbqz4nKftVqaSX1dxPfqn9eyp7VE7urfpKC1RLLfWvJJiBNHSJo3rsA+ANWAWaTSoyy8AAAAAElFTkSuQmCC"},"872c":function(e,n,t){"use strict";t.r(n);var i=t("dd23"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},9523:function(e,n){function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}e.exports=t},c28a:function(e,n,t){var i=t("d906");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("5b864bb8",i,!0,{sourceMap:!1,shadowMode:!1})},d906:function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-970ad7f8]{background:#f4f5f9;padding-top:%?23?%}.container .form-item[data-v-970ad7f8]{padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;height:%?92?%;background-color:#fff;margin-bottom:%?22?%}.container .form-item .left[data-v-970ad7f8]{width:%?250?%}.container .form-item .left .must[data-v-970ad7f8]{color:red}.container .form-item .middle[data-v-970ad7f8]{width:%?280?%}.container .form-item .middle uni-input[data-v-970ad7f8]{width:100%;font-size:%?30?%}.container .form-item .inputMiddle[data-v-970ad7f8]{width:calc(100% - %?250?%)}.container .form-item .inputMiddle uni-input[data-v-970ad7f8]{width:100%;font-size:%?30?%}.container .form-item .right[data-v-970ad7f8]{width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.container .form-item .right .saoma[data-v-970ad7f8]{width:%?45?%;height:%?42?%}',""]),e.exports=n},dd23:function(e,n,t){"use strict";(function(e){var i=t("4ea4");t("ac1f"),t("1276"),t("498a"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("5530")),o=t("2a1a"),r={data:function(){return{bigCode:"",codes:[],address:"",itemType:[{code:1,name:"新冠核酸检测"},{code:3,name:"新冠核酸+双抗体检测"},{code:2,name:"双抗体检测"}],numArr:[{code:1,name:"1个"},{code:5,name:"5个"},{code:10,name:"10个"}],pickerIndex:-1,pickerIndex2:-1}},methods:{tapPicker:function(){},selectItemType:function(e){-1==e.target.value?this.pickerIndex2=0:this.pickerIndex2=e.target.value},selectNum:function(e){this.numArr[e.target.value].code<this.codes.length?uni.showToast({icon:"none",title:"选择数量不可小于已扫描数量"}):-1==e.target.value?this.pickerIndex=0:this.pickerIndex=e.target.value},resetForm:function(){this.bigCode="",this.codes=[]},toSubmit:function(){var e=this;this.bigCode?-1!==this.pickerIndex?""!==this.address.trim()?0!==this.codes.length?this.codes.length<this.numArr[this.pickerIndex].code?uni.showModal({title:"提醒",content:"当前数量与所选数量不符，仍然提交？",success:function(n){n.confirm&&e.readySubmit()}}):this.readySubmit():uni.showToast({icon:"none",title:"请扫描客户预约码"}):uni.showToast({icon:"none",title:"请输入采样地址"}):uni.showToast({icon:"none",title:"请选择检测数量"}):uni.showToast({icon:"none",title:"请扫描大管条码"})},readySubmit:function(){var n=this;uni.showLoading({title:"正在提交..."}),this.$http.post("api-sale/actuator/beans/users-anon/hybrid_check/hybrid_to_lims",this.codes).then((function(t){e.log(t),uni.hideLoading(),0==t.data.resp_code&&(uni.showToast({title:"提交成功"}),n.resetForm())})).catch((function(n){e.log(n),uni.hideLoading()}))},saveSingleInfo:function(n){var t=this,i=(0,a.default)({barcode:this.bigCode,address:this.address,xh:this.codes.length+1,childtubeCount:this.numArr[this.pickerIndex].code,operatorOpenId:uni.getStorageSync("openId")},n);i.id="",delete i.createTime,e.log(i),this.$http.post("api-sale/actuator/beans/users-anon/hybrid_check/collectInfo/save",i).then((function(n){e.log(n),0==n.data.resp_code&&t.getList()})).catch((function(n){e.log(n)}))},getUserInfo:function(n){var t=this;this.$http.get("api-sale/actuator/beans/users-anon/hybrid_check/query_reservation_info/".concat(n)).then((function(n){e.log(n),0==n.data.resp_code&&(n.data.datas?t.saveSingleInfo(n.data.datas):uni.showToast({icon:"none",title:"此预约码无法查询到用户信息"}))})).catch((function(n){e.log(n)}))},getList:function(){var n=this;this.$http.get("api-sale/actuator/beans/users-anon/listCollectInfo/findByBarcode/".concat(this.bigCode)).then((function(t){e.log(t),0==t.data.resp_code&&(n.codes=t.data.datas||[])})).catch((function(n){e.log(n)}))},toBarcode:function(n){var t=this;if("small"===n){if(!this.bigCode)return void uni.showToast({icon:"none",title:"请扫描大管条码"});if(-1===this.pickerIndex)return void uni.showToast({icon:"none",title:"请选择检测数量"});if(""===this.address.trim())return void uni.showToast({icon:"none",title:"请输入采样地址"});if(this.codes.length===this.numArr[this.pickerIndex].code)return void uni.showToast({icon:"none",title:"已达到混检数量上限，请点击提交"})}o.jweixin.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(i){e.log(i);var a=i.resultStr;"big"===n&&(t.bigCode=a.split(",")[1],t.getList()),"small"===n&&t.getUserInfo(a)}})}}};n.default=r}).call(this,t("5a52")["default"])},e354:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoEAYAAADcbmQuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA1BJREFUaN7tm19Ik1EUwM+5bmKhhCSY7kEN8iEQykQSJ2LpQxY+iIloYhqutgL/TCZkM3IZ/mlqYBM2EkMUkdKQlEDQENeDqAWCD/agSc6EQkwJcfO7PeT3DVwm+KlX8/5eBveeu53zY2z3u5yL8FcQdQ59enlTZiZEwwm4q9FAMhhpVmQkKOAZhPr6wi5hsZjNJhPiTtfrdHq90UjpbuUDLiiAmZUV6AMTto2PwwgswXOr1RJs7qzQtrf/CXJ/npS4Jl+Tr8lXKhVn/LwD8zo6YAZ8oC81ddcSOywCtyIUViG5q8v1eXltoTkjw2qz2qw2p5OI84pVP+ep0erq/RJ36NjwInnaAO9cLfpQlqBSkQtkkfRMT8N3GIAapVJauAw/8G19vevY+mVXd22t1dqQ/SR0fp51PXuFRlPYen8mKMjrIln0KjQYcBS/QERhoRQQAJfA4HQKY4K/kBIWhtqGkpDy17m5OEXT6KfmZimwB35i5dCQ5avZViHEx7MujBW62eIxY9bQEFRhO5yOixPHaTi+wnN5eYSMUCNNUKk8Vk7TWAiw21kXwJwgmMD+4eHNw6I3IrTBLfBXKDYHUAXm0IW1Ndb5s2YrD6I3spM35bjhAmXCBcqEC5QJFygTLlAmXKBMFKDFXqoeHsZZIYfMup/xqJb0CgOeG8gjB/fD4fzPeBxkarUlZx/YS0tZJ3ZQaWp6Ovk41v1b6HGIgEiv4LuqKtaJHmAmAdwC+TZGJp7fwBmagy1uwxwPzKwT4HA4uwbqOvWRZf1qNR3EVTweGytNJFAf+stut6SbxyuTju4jy3Z+CL0OYyQxMVHcvoiv4jjrAliznR++jZEJFygTLlAmXKBMuECZcIEy4QJlQkgWvIBFl2vzBLroSwz09madIGu28iB6I0I0mnBwbs5j5TxE0CS1mnUBzMlCByy529pERG/bNljSKBoCEw0NXm8UjaS7traxp2bqETocrOvaK+6lGMIf0uBg4cb6bRpjMMB7cNCkggIpYHODpTiuy9bfLD9fVwd+cJJeKyrar4QPTY+0yEbHrqXV3FLxsbhY+hNx+Swrv0WVlorN1PuW0GFBbDIXPW0gnUiLXecAAGBLS9uvaw4Hjn9dc4jxvObwGwPnkG76cpv3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAzLTA2VDE2OjQyOjI4KzA4OjAwweN1XgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMy0wNlQxNjo0MjoyOCswODowMLC+zeIAAABIdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2d5aTk3bXh5dzVxL3Nhb21hLnN2Z2qLcWAAAAAASUVORK5CYII="}}]);