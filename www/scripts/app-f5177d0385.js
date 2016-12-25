"use strict";Mock.mockjax=function(module){var Item,error;Item=function(){function Item(){}return Item.prototype.add=function(url){var k,reg,v,_ref;_ref=Mock._mocked;for(k in _ref)if(v=_ref[k],reg=null,reg=/^\/.*\/$/.test(k)?eval(k):new RegExp(k),reg.test(url))return Mock.mock(v.template)},Item}();try{return module.config(["$httpProvider",function(t){var e;return e=new Item,t.interceptors.push(function(){return{request:function(t){var n;return n=e.add(t.url),n&&(t.original={url:t.url,result:n,method:t.method,params:t.params,data:t.data},t.method="GET",t.url="?mockUrl="+t.url),t},response:function(t){var e;return e=t.config.original,e&&(t.data=e.result),t}}})}])}catch(_error){return error=_error,console.error('生成mock.angular失败，例：var app = angular.module("app", []); Mock.mockjax(app);',error)}};var ChargingPile=angular.module("ChargingPile",["ionic","ngCordova","ngResource","oc.lazyLoad"]);Mock.mockjax(ChargingPile),ChargingPile.run(["$ionicPlatform",function(t){window.BMap_loadScriptTime=(new Date).getTime(),t.ready(function(){}),Mock.mock("/registerRequestCaptcha",function(t){return{errorCode:Mock.mock("@natural(-3, 0)")}}),Mock.mock("/register",function(t){return{errorCode:Mock.mock("@natural(-3, 0)")}}),Mock.mock("/resetKeyRequestCaptcha",function(t){return{errorCode:Mock.mock({"array|1":["0","-1","-3"]}).array}}),Mock.mock("/resetKey",function(t){return{errorCode:Mock.mock({"array|1":["0","-1","-3"]}).array}}),Mock.mock("/loginRequesCaptcha",function(t){return{errorCode:Mock.mock({"array|1":["0","-1","-4","-5"]}).array}}),Mock.mock("/login",function(t){return{errorCode:0}}),Mock.mock("/loginOut",function(t){return{errorCode:Mock.mock("@natural(-3, 0)")}}),Mock.mock("/getUserChargeHistor",function(t){return{"return":[{rid:4555,terminalid:"453453453453",chargingPileID:"090098988985534",gunid:0,orderid:"20167899887778",orderState:0,BMSID:" LSJE12835",VIN:"LSJE12835CS110420",licensePlateNumber:"粤B67890",startChargeSOC:"",endChargeSOC:"","accumulatedChargeElectricQuantity ":34,"accumulatedChargeElectricEnergy ":34,chargeTime:Mock.mock("@integer(60, 100000)"),chargeMode:0,chargeModeParameter:4,isNormalEnd:3,chargeProcessLog:[{electricEnergy:3,time:'ISODate("2016-04-26T01:42:51.263Z")'},{electricEnergy:30,time:'ISODate("2016-04-26T01:42:51.263Z")'}],chargeStartTime:Mock.mock("@datetime()"),chargeEndTime:Mock.mock("@datetime()"),orderStartTime:Mock.mock("@datetime()"),startMeterValue:3333,endMeterValue:44444,payment:50.5,paymentRemark:"服务费：4，电费：50，车位费：10"}],errorCode:Mock.mock({"array|1":["0"]}).array}}),Mock.mock("/getUserRechargeHistory",function(t){return{"return":[{orderid:Mock.mock('@string("number", 9)'),orderidState:Mock.mock("@natural(0, 3)"),rechargeMoney:Mock.mock("@integer(100,1000)"),thirdPartyOrderID:Mock.mock('@string("number", 9)'),rechargeStartTime:Mock.mock("@datetime()"),rechargeArriveTime:Mock.mock("@datetime()")}],errorCode:Mock.mock({"array|1":["0"]}).array}}),Mock.mock("/getChargingStationsInfo",function(t){return{"return":[{rid:Mock.mock('@string("number", 5)'),longitude:Mock.mock("@float(10, 99, 6)"),latitude:Mock.mock("@float(10, 99, 6)"),distance:Mock.mock("@natural(1, 50)"),addr:Mock.mock("@ctitle()"),ownChargingPile:{fast:Mock.mock("@natural(1, 20)"),slow:Mock.mock("@natural(1, 20)")},spare:Mock.mock("@natural(1, 20)"),serviceTime:Mock.mock("@time")+"-"+Mock.mock("@time"),servicePhone:Mock.mock('@string("number", 8)'),cost:{parking:[{start:Mock.mock("@datetime()"),end:Mock.mock("@datetime()"),cost:Mock.mock('@string("number", 2)')}],service:Mock.mock("@float(1,4,2,3)"),electricity:[{start:Mock.mock("@datetime()"),end:Mock.mock("@datetime()"),cost:Mock.mock("@float(1, 2, 2)")}]},operator:Mock.mock("@ctitle()")}],errorCode:Mock.mock({"array|1":["0"]}).array}}),Mock.mock("/getChargingPileInfo",function(t){return{"return":[{rid:Mock.mock('@string("number", 5)'),terminalid:Mock.mock('@string("number", 12)'),terminalType:Mock.mock("@ctitle()"),parkingSpace:Mock.mock("@natural(1, 50)"),state:Mock.mock("@natural(0, 4)"),"interface":Mock.mock("@ctitle()")}],errorCode:Mock.mock({"array|1":["0"]}).array}}),Mock.mock("/getUserDetailInfo",function(t){return{"return":{userid:"1212121212",name:"昵称",grade:0,motorVehicle:[{VIN:"LSJE12835CS110420",licensePlateNumber:"粤B67890",carType:0,carMode:"秦",chassisNumber:"23322",engineNumber:"5566552"}],purse:{balance:100,voucher:50,coupon:50},loginKey:"1212121212",payKey:"1212121212",isEnable:!0,creatTime:Mock.mock("@datetime()"),lastLoginTime:Mock.mock("@datetime()")},errorCode:Mock.mock({"array|1":["0"]}).array}}),Mock.mock("/setUserInfo",function(t){return{errorCode:Mock.mock({"array|1":["0","-1","-3"]}).array}})}]).config(["$httpProvider","$stateProvider","$urlRouterProvider","$ionicConfigProvider",function(t,e,n,r){r.platform.ios.tabs.style("standard"),r.platform.ios.tabs.position("bottom"),r.platform.android.tabs.style("standard"),r.platform.android.tabs.position("bottom"),r.platform.ios.navBar.alignTitle("center"),r.platform.android.navBar.alignTitle("left"),r.platform.ios.backButton.previousTitleText("").icon("ion-ios-arrow-thin-left"),r.platform.android.backButton.previousTitleText("").icon("ion-android-arrow-back"),r.platform.ios.views.transition("ios"),r.platform.android.views.transition("android"),e.state("signin",{url:"/signin",cache:!0,templateUrl:"templates/views/signin.html",controller:"SigninController"}).state("regist",{url:"/regist",cache:!0,templateUrl:"templates/views/regist.html",controller:"RegistController"}).state("reset",{url:"/reset",cache:!0,templateUrl:"templates/views/reset.html",controller:"ResetKeyController"}).state("app",{url:"/app","abstract":!0,templateUrl:"templates/main.html",controller:"MainController"}).state("app.home",{url:"/home",cache:!0,views:{home:{templateUrl:"templates/views/home.html",controller:"HomeController"}}}).state("app.searchChargeStation",{url:"/searchChargeStation",cache:!0,views:{home:{templateUrl:"templates/views/searchChargeStation.html",controller:"SearchChargeStationController"}}}).state("app.chargeStationInfo",{url:"/chargeStationInfo/:id",cache:!0,views:{home:{templateUrl:"templates/views/chargeStation.html",controller:"ChargeStationController"}}}).state("app.searchChargingPile",{url:"/searchChargingPile/:id",cache:!0,views:{home:{templateUrl:"templates/views/searchChargingPile.html",controller:"SearchChargingPileController"}}}).state("app.navigation",{url:"/navigation",cache:!0,views:{home:{templateUrl:"templates/views/navigation.html",controller:"NavigationController"}}}).state("app.me",{url:"/me",cache:!0,views:{me:{templateUrl:"templates/views/me.html"}}}).state("app.reChargeHistory",{url:"/rechargeHistory",cache:!0,views:{me:{templateUrl:"templates/views/rechargeHistory.html",controller:"RechargeHistoryController"}}}).state("app.myCar",{url:"/myCar",cache:!0,views:{me:{templateUrl:"templates/views/myCar.html",controller:"MyCarPileController"}}}).state("app.addCar",{url:"/addCar",cache:!0,views:{me:{templateUrl:"templates/views/addCar.html",controller:"AddCarController"}}}).state("app.chargeHistory",{url:"/chargeHistory",cache:!0,views:{me:{templateUrl:"templates/views/chargeHistory.html",controller:"ChargeHistoryController"}}}).state("app.settings",{url:"/settings",cache:!0,views:{viewContent:{templateUrl:"templates/views/settings.html",controller:"SettingsController"}}}),n.otherwise("/app/home")}]),angular.module("ChargingPile").controller("AddCarController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){t.carInfo={VIN:"",licensePlateNumber:"",carType:0,carMode:"",chassisNumber:"",engineNumber:""};var a={userid:"13890098909",userKey:"KDNEJDANDFKAYSDFASDFKSDFASDLFI",object:{motorVehicle:[]}};t.addCar=function(){a.object.motorVehicle=[t.carInfo],i.postData.datas=a,console.log(i.postData),n.post(i.host+i.setUserInfo.url,i.postData).then(function(e){var n=Math.abs(e.data.errorCode);r.alert({template:i.setUserInfo.hint[n]});0===n&&t.$broadcast("scroll.refreshComplete")},function(t){r.alert({template:angular.toJson(t)})})}}]),angular.module("ChargingPile").controller("ChargeHistoryController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){var a={userid:13420989008};t.orderState=["用户已经预约电桩等待用户充电","充电进行中","充电中断等待恢复","正常完成充电，交易结算"],i.postData.datas=a,t.doRefresh=function(){n.post(i.host+i.getUserChargeHistory.url,i.postData).then(function(e){var n=Math.abs(e.data.errorCode);if(0===n)t.chargeHistory?t.chargeHistory=e.data["return"].concat(t.chargeHistory):t.chargeHistory=e.data["return"],t.$broadcast("scroll.refreshComplete");else{r.alert({template:i.getUserChargeHistory.hint[n]})}},function(t){r.alert({template:angular.toJson(t)})})},t.doRefresh()}]),angular.module("ChargingPile").controller("ChargeStationController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){var a={userid:13420989008};i.postData.datas=a,n.post(i.host+i.getChargingStationsInfo.url,i.postData).then(function(e){var n=Math.abs(e.data.errorCode);if(0===n)t.ChargingStationsInfo=e.data["return"][0],t.$broadcast("scroll.refreshComplete");else{r.alert({template:i.getChargingStationsInfo.hint[n]})}},function(t){r.alert({template:angular.toJson(t)})})}]),angular.module("ChargingPile").controller("HomeController",["$scope","ExampleService",function(t,e){}]),angular.module("ChargingPile").controller("MainController",["$scope",function(t){}]),angular.module("ChargingPile").controller("MyCarPileController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){var a={userid:"13890098909",userKey:"KDNEJDANDFKAYSDFASDFKSDFASDLFI"};i.postData.datas=a,n.post(i.host+i.getUserDetailInfo.url,i.postData).then(function(e){var n=Math.abs(e.data.errorCode);if(0===n)t.myCarList=e.data["return"].motorVehicle,t.$broadcast("scroll.refreshComplete");else{r.alert({template:i.getUserDetailInfo.hint[n]})}},function(t){r.alert({template:angular.toJson(t)})})}]),angular.module("ChargingPile").controller("NavigationController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN","$cordovaGeolocation",function(t,e,n,r,i,o,a){var s={timeout:1e4,enableHighAccuracy:!1};a.getCurrentPosition(s).then(function(t){console.log(t.coords.longitude,t.coords.latitude);var e=new BMap.Map("allmap");e.centerAndZoom(new BMap.Point(t.coords.longitude,t.coords.latitude),14),e.addControl(new BMap.MapTypeControl),e.setCurrentCity("深圳"),e.enableScrollWheelZoom(!0)},function(t){console.log(t)})}]),angular.module("ChargingPile").controller("RechargeHistoryController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){var a={userid:13420989008};t.orderidState=["用户申请充值","第三方充值平台处理中(微信,支付宝)","第三方充值平台处理完成,正在充值中","充值完成"],i.postData.datas=a,t.doRefresh=function(){n.post(i.host+i.getUserRechargeHistory.url,i.postData).then(function(e){var n=Math.abs(e.data.errorCode);if(0===n)t.reChargeHistory?t.reChargeHistory=e.data["return"].concat(t.reChargeHistory):t.reChargeHistory=e.data["return"],t.$broadcast("scroll.refreshComplete");else{r.alert({template:i.getUserRechargeHistory.hint[n]})}},function(t){r.alert({template:angular.toJson(t)})})},t.doRefresh()}]),angular.module("ChargingPile").controller("RegistController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){var a={userid:"",userKey:"",mobile:"",captcha:""};t.param=a,t.registerRequestCaptcha=function(){var e={userid:"",userKey:"",mobile:""};o.getQueryParam(e,t.param),i.postData.datas=e,n.post(i.host+i.registerRequestCaptcha.url,i.postData).then(function(t){var e=Math.abs(t.data.errorCode);r.alert({template:i.registerRequestCaptcha.hint[e]})},function(t){r.alert({template:angular.toJson(t)})})},t.register=function(){o.getQueryParam(a,t.param),i.postData.datas=a,n.post(i.host+i.register.url,i.postData).then(function(t){var n=Math.abs(t.data.errorCode),o=r.alert({template:i.register.hint[n]});o.then(function(t){0===n&&e.go("app.login")})},function(t){r.alert({template:angular.toJson(t)})})}}]),angular.module("ChargingPile").controller("ResetKeyController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){var a={userid:"",userKey:"",captcha:""};t.param=a,t.resetKeyRequestCaptcha=function(){var e={userid:""};o.getQueryParam(e,t.param),i.postData.datas=e,n.post(i.host+i.resetKeyRequestCaptcha.url,i.postData).then(function(t){var e=Math.abs(t.data.errorCode);r.alert({template:i.resetKeyRequestCaptcha.hint[e]})},function(t){r.alert({template:angular.toJson(t)})})},t.resetKey=function(){o.getQueryParam(a,t.param),i.postData.datas=a,n.post(i.host+i.resetKey.url,i.postData).then(function(t){var n=Math.abs(t.data.errorCode),o=r.alert({template:i.resetKey.hint[n]});o.then(function(t){0===n&&e.go("app.login")})},function(t){r.alert({template:angular.toJson(t)})})}}]),angular.module("ChargingPile").controller("SearchChargeStationController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){var a={city:"深圳",mode:"dim/place",keyword:"直流",longitude:34.343434324,latitude:45.434534534,distance:10};i.postData.datas=a,t.doRefresh=function(){n.post(i.host+i.getChargingStationsInfo.url,i.postData).then(function(e){var n=Math.abs(e.data.errorCode);if(0===n)t.chargeStationList?t.chargeStationList=e.data["return"].concat(t.chargeStationList):t.chargeStationList=e.data["return"],t.$broadcast("scroll.refreshComplete");else{r.alert({template:i.getChargingStationsInfo.hint[n]})}},function(t){r.alert({template:angular.toJson(t)})})},t.doRefresh()}]),angular.module("ChargingPile").controller("SearchChargingPileController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){t.chargeingStationId=e.params.id;var a={rid:13420989008};i.postData.datas=a,t.doRefresh=function(){n.post(i.host+i.getChargingPileInfo.url,i.postData).then(function(e){var n=Math.abs(e.data.errorCode);if(0===n)t.chargePileList?t.chargePileList=e.data["return"].concat(t.chargePileList):t.chargePileList=e.data["return"],t.$broadcast("scroll.refreshComplete");else{r.alert({template:i.getChargingPileInfo.hint[n]})}},function(t){r.alert({template:angular.toJson(t)})})},t.doRefresh()}]),angular.module("ChargingPile").controller("SettingsController",["$scope",function(t){}]),angular.module("ChargingPile").controller("SigninController",["$scope","$state","$http","$ionicPopup","API_ENDPOINT","FN",function(t,e,n,r,i,o){var a={userid:"",userKey:"",captcha:""};t.param=a,t.loginRequesCaptcha=function(){var e={userid:""};o.getQueryParam(e,t.param),i.postData.datas=e,n.post(i.host+i.loginRequesCaptcha.url,i.postData).then(function(t){var e=Math.abs(t.data.errorCode);r.alert({template:i.loginRequesCaptcha.hint[e]})},function(t){r.alert({template:angular.toJson(t)})})},t.signin=function(){o.getQueryParam(a,t.param),i.postData.datas=a,n.post(i.host+i.login.url,i.postData).then(function(t){var n=Math.abs(t.data.errorCode),o=r.alert({template:i.login.hint[n]});o.then(function(t){0===n&&e.go("app.home")})},function(t){r.alert({template:angular.toJson(t)})})},t.signout=function(){var e={userid:""};o.getQueryParam(e,t.param),i.postData.datas=e,n.post(i.host+i.signout.url,i.postData).then(function(t){var e=Math.abs(t.data.errorCode);r.alert({template:i.signout.hint[e]})},function(t){r.alert({template:angular.toJson(t)})})},t.gotoResetKey=function(){e.go("reset")},t.gotoRegister=function(){e.go("regist")}}]),angular.module("ChargingPile").factory("ApiService",["$window","$http","API_ENDPOINT",function(t,e,n){var r=n,i=r.port?r.host+":"+r.port+r.path:r.host+r.path;return r.needsAuth&&(e.defaults.headers.common.Authorization="Basic "+t.btoa(r.username+":"+r.password)),{getEndpoint:function(){return i}}}]),angular.module("ChargingPile").factory("ExampleService",["$http","$timeout","$q",function(t,e,n){var r=42,i=function(){var t=n.defer();return e(t.resolve.bind(null,r),1e3),t.promise},o=function(){return t({url:"http://hipsterjesus.com/api",params:{paras:2},method:"GET"}).success(function(t){console.log("fetched this stuff from server:",t)}).error(function(t){console.log("an error occured",t)})};return{doSomethingAsync:i,fetchSomethingFromServer:o}}]),angular.module("ChargingPile").factory("FN",function(){var t=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=function(r){n?t[r]=e[r]:""===t[r]&&(t[r]=e[r])};for(var i in t)angular.isString(e[i])&&""!==e[i]&&r(i)};return{getQueryParam:t}}),angular.module("ChargingPile").factory("_",["$window",function(t){return t._}]),angular.module("ChargingPile").constant("API_ENDPOINT",{host:"http://localhost",postData:{apikey:"",datas:{}},registerRequestCaptcha:{url:"/registerRequestCaptcha",hint:["注册成功","用户已经存在,注册请求失败.","手机号码无效,注册请求失败.","其它错误"]},register:{url:"/register",hint:["注册成功","用户已经存在,注册请求失败.","手机号码无效,注册请求失败.","其它错误"]},resetKeyRequestCaptcha:{url:"/resetKeyRequestCaptcha",hint:["申请成功","服务器错误.","","其它错误"]},resetKey:{url:"/resetKey",hint:["修改密码成功","验证码无效,注册失败.","","其它错误"]},loginRequesCaptcha:{url:"/loginRequesCaptcha",hint:["成功","服务器错误","","","不存在的用户名","其它错误"]},login:{url:"/login",hint:["登陆成功","服务器错误","密码错误","验证码错误"]},signout:{url:"/loginOut",hint:["成功","服务器错误","不存在的用户名","验证码错误"]},getUserChargeHistory:{url:"/getUserChargeHistory",hint:["申请成功","服务器错误","","其它错误"]},getUserRechargeHistory:{url:"/getUserRechargeHistory",hint:["申请成功","服务器错误","","其它错误"]},getChargingStationsInfo:{url:"/getChargingStationsInfo",hint:["申请成功","服务器错误","","其它错误"]},getChargingPileInfo:{url:"/getChargingPileInfo",hint:["申请成功","服务器错误","","其它错误"]},getUserDetailInfo:{url:"/getUserDetailInfo",hint:["申请成功","服务器错误","","其它错误"]},setUserInfo:{url:"/setUserInfo",hint:["申请成功","服务器错误","","其它错误"]}}),angular.module("ChargingPile").run(["$templateCache",function(t){t.put("templates/main.html",'  <ion-tabs class="tabs-positive tabs-icon-top">\r\n    <ion-tab title="首页" icon-on="ion-ios-home" icon-off="ion-ios-home-outline" ui-sref="app.home"><!--ng-click="tabRefresh(0)"   ui-sref="tab.discovery"-->\r\n      <ion-nav-view name="home"></ion-nav-view>\r\n    </ion-tab>\r\n    <!-- Chats Tab -->\r\n    <ion-tab title="我" icon-on="ion-ios-person" icon-off="ion-ios-person-outline" ui-sref="app.me">\r\n      <ion-nav-view name="me"></ion-nav-view>\r\n    </ion-tab>\r\n  </ion-tabs>'),t.put("templates/views/addCar.html",'<ion-view view-title="添加车辆">\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          号牌类型:\r\n          <select ng-model="carInfo.carType">\r\n            <option value="0">小型汽车</option>\r\n            <option value="1">大型汽车</option>\r\n          </select>\r\n        </ion-item>\r\n        <ion-item class="item-divider"></ion-item>\r\n        <ion-item class="item-icon-right">\r\n          车型:\r\n          <input type="text" placeholder="请选择车型" ng-model="carInfo.carMode">\r\n          <i class="icon ion-ios-arrow-right"></i>\r\n        </ion-item>\r\n        <ion-item class="item-divider"></ion-item>\r\n        <ion-item class="item-icon-right">\r\n          车牌号码:\r\n          <input type="text" ng-model="carInfo.licensePlateNumber">\r\n          <!-- <i class="icon ion-ios-arrow-right"></i> -->\r\n        </ion-item>\r\n        <ion-item class="item-divider"></ion-item>\r\n        <ion-item class="item-icon-right">\r\n          发动机号:\r\n          <input type="text" ng-model="carInfo.engineNumber">\r\n          <i class="icon ion-ios-help-outline"></i>\r\n        </ion-item>\r\n        <ion-item class="item-divider"></ion-item>\r\n        <ion-item class="item-icon-right">\r\n          车架号码:\r\n          <input type="text" ng-model="carInfo.chassisNumber">\r\n          <i class="icon ion-ios-help-outline"></i>\r\n        </ion-item>\r\n        <button class="button button-full button-positive" ng-click="addCar();">确认</button>\r\n\r\n      </ion-list>\r\n    </ion-content>\r\n\r\n\r\n</ion-view>\r\n'),t.put("templates/views/chargeHistory.html",'<ion-view view-title="充电记录">\r\n    <ion-content>\r\n        <ion-refresher pulling-text="下拉刷新..." on-refresh="doRefresh()"></ion-refresher>\r\n        <ion-list class="chargeHistory">\r\n          <ion-item ng-repeat-start="i in chargeHistory">\r\n            <div class="left flt-l">\r\n              <img src="">\r\n              <p>{{i.rid}}</p>\r\n            </div>\r\n            <div class="right">\r\n              <ion-list>\r\n                <ion-item>\r\n                  订单编号:{{i.orderid}}\r\n                </ion-item>\r\n                <ion-item>\r\n                  订单开始时间:{{i.orderStartTime}}\r\n                </ion-item>\r\n                <ion-item>\r\n                订单状态:{{orderState[i.orderState]}}\r\n                </ion-item>\r\n                <ion-item>\r\n                车牌号码:{{i.licensePlateNumber}}\r\n                </ion-item>\r\n                <ion-item>\r\n                开始时间:{{i.chargeStartTime}}\r\n                </ion-item>\r\n                <ion-item>\r\n                 结束时间:{{i.chargeEndTime}}                \r\n                </ion-item>\r\n                <ion-item>\r\n                总时长:{{i.chargeTime}} / 总花费:{{i.payment}}元\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n          </ion-item>\r\n          <ion-item ng-repeat-end class="item-divider" ng-if="!$last"></ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>'),t.put("templates/views/chargeStation.html",'<ion-view>\r\n  <ion-nav-title side="center">\r\n    <span>电站详情</span>/<span ui-sref=\'app.searchChargingPile({id:ChargingStationsInfo.rid})\'>充电终端</span>\r\n  </ion-nav-title>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item class="item-thumbnail-left">\r\n          <img src="cover.jpg">\r\n          <h2>{{ChargingStationsInfo.operator}}</h2>      \r\n        </ion-item>\r\n        <ion-item>\r\n          <h2><i>慢</i>空闲{{ChargingStationsInfo.spare}}/共{{ChargingStationsInfo.ownChargingPile.fast}}<i>快</i>空闲{{ChargingStationsInfo.spare}}/共{{ChargingStationsInfo.ownChargingPile.slow}}</h2>\r\n        </ion-item>\r\n        <ion-item class="item-divider"></ion-item>\r\n        <ion-item class="item-icon-left item-icon-right">\r\n          <h2>{{ChargingStationsInfo.addr}}</h2>\r\n          <p>距您{{ChargingStationsInfo.distance}}km</p>\r\n          <i class="icon ion-navigate" ui-sref="app.navigation"></i>\r\n        </ion-item>\r\n        <ion-item class="item-divider"></ion-item>\r\n        <ion-item>\r\n          <span>充电单价</span>\r\n          {{ChargingStationsInfo.cost.service}}元/度\r\n        </ion-item>\r\n        <ion-item>\r\n          <span>停车费</span>\r\n          {{ChargingStationsInfo.cost.parking[0].cost}}元/小时\r\n        </ion-item>\r\n        <ion-item>\r\n          <span>运营商</span>\r\n          {{ChargingStationsInfo.operator}}\r\n        </ion-item>\r\n        <ion-item>\r\n          <span>营业时间</span>\r\n          {{ChargingStationsInfo.serviceTime}}\r\n        </ion-item>\r\n        <ion-item class="item-icon-right">\r\n          <span>服务电话</span>\r\n          {{ChargingStationsInfo.servicePhone}}\r\n        <a class="icon ion-ios-telephone-outline"></a>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n'),t.put("templates/views/home.html",'<ion-view view-title="首页">\r\n\r\n        <ion-content class="content">\r\n            <div class="imgs">          \r\n            </div>\r\n            <ul class="img-nav">\r\n                <li ui-sref="app.searchChargeStation">\r\n                    <img src="">\r\n                    电站搜索\r\n                </li>\r\n                <li ui-sref="app.searchChargeStation">\r\n                    <img src="">\r\n                    我的收藏\r\n                </li>\r\n                <!-- <li ui-sref="app.chargeHistory">             \r\n                    <img src="">\r\n                    最近充电\r\n                </li> -->\r\n                <!-- <li>\r\n                    <img src="">\r\n                    充电地图\r\n                </li>\r\n                <li>\r\n                    <img src="">\r\n                    一键导航\r\n                </li> -->\r\n            </ul>\r\n        </ion-content>\r\n</ion-view>\r\n'),t.put("templates/views/me.html",' <ion-view view-title="我">\r\n <ion-content class="content">\r\n        <div class="imgs">\r\n            <div class="me-login">\r\n                登录/注册\r\n            </div>          \r\n        </div>\r\n        <ion-list>\r\n          <ion-item class="item item-icon-left">\r\n            <i class="icon ion-card"></i>\r\n            我的钱包\r\n          </ion-item>\r\n          <ion-item class="item-icon-left">\r\n               余额:\r\n               代金券:\r\n               优惠券:\r\n          </ion-item>\r\n          <ion-item class="item-divider"></ion-item>\r\n          <ion-item class="item-icon-left" ui-sref="app.chargeHistory">\r\n                <i class="icon ion-clipboard"></i>\r\n                充电历史\r\n          </ion-item>\r\n          <ion-item class="item-icon-left" ui-sref="app.reChargeHistory">\r\n                <i class="icon ion-printer"></i>\r\n                充值历史\r\n          </ion-item>\r\n          <ion-item class="item-divider"></ion-item>\r\n          <ion-item class="item-icon-left" ui-sref="app.myCar">\r\n                <i class="icon ion-model-s"></i>\r\n                我的爱车\r\n          </ion-item>\r\n          <!-- <ion-item class="item-icon-left">\r\n                <i class="icon ion-ios-star"></i>\r\n                我的收藏\r\n          </ion-item>\r\n          <ion-item class="item-icon-left">\r\n                <i class="icon ion-chatbox-working"></i>\r\n                我的评论\r\n          </ion-item>\r\n          <ion-item class="item-icon-left">\r\n                <i class="icon ion-chatboxes"></i>\r\n                我的社区\r\n          </ion-item>\r\n          <ion-item class="item-divider"></ion-item>\r\n          <ion-item class="item-icon-left">\r\n                <i class="icon ion-gear-b"></i>\r\n                设置\r\n          </ion-item> -->\r\n        </ion-list>\r\n       </ion-content>\r\n     </ion-view>'),t.put("templates/views/myCar.html",'<ion-view view-title="我的爱车">\r\n      <ion-content>\r\n        <ion-list>\r\n          <ion-item ng-repeat-start="i in myCarList">\r\n            <h2><span>VIN</span>{{i.VIN}}</h2>\r\n            <h2><span>licensePlateNumber</span>{{i.licensePlateNumber}}</h2>\r\n            <h2><span>carType</span>{{i.carType}}</h2>\r\n            <h2><span>carMode</span>{{i.carMode}}</h2>\r\n            <h2><span>chassisNumber</span>{{i.chassisNumber}}</h2>\r\n            <h2><span>engineNumber</span>{{i.engineNumber}}</h2>\r\n          </ion-item>\r\n          <ion-item ng-repeat-end class="item-divider"></ion-item>\r\n          <button class="button button-full button-positive" ui-sref="app.addCar">添加新车</button>\r\n        </ion-list>\r\n      </ion-content>\r\n\r\n\r\n</ion-view>\r\n'),t.put("templates/views/navigation.html",'\r\n<ion-view view-title="地图导航"> \r\n      <div id="allmap" style="height:100%; margin:44px 0;"></div>\r\n</ion-view>\r\n'),t.put("templates/views/rechargeHistory.html",'<ion-view view-title="充值记录">\r\n    <ion-content>\r\n        <ion-refresher pulling-text="下拉刷新..." on-refresh="doRefresh()"></ion-refresher>\r\n        <ion-list class="chargeHistory">\r\n          <ion-item ng-repeat-start="i in reChargeHistory">\r\n              <ion-list>\r\n                <ion-item>\r\n                  充值订单号:{{i.orderid}}\r\n                </ion-item>\r\n                <ion-item>\r\n                  充值订单状态:{{orderidState[i.orderidState]}}\r\n                </ion-item>\r\n                <ion-item>\r\n                  充值金额:{{i.rechargeMoney}}\r\n                </ion-item>\r\n                <ion-item>\r\n                  第三方充值平台的订单号:{{i.thirdPartyOrderID}}\r\n                </ion-item>\r\n                <ion-item>\r\n                 充值申请时间:{{i.rechargeStartTime}}                \r\n                </ion-item>\r\n                <ion-item>\r\n                  充值到账时间:{{i.rechargeArriveTime}}\r\n                </ion-item>\r\n              </ion-list>\r\n          </ion-item>\r\n          <ion-item ng-repeat-end class="item-divider" ng-if="!$last"></ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>'),t.put("templates/views/regist.html",'<ion-view view-title="注册">\r\n    <!-- <ion-header-bar align-title="center" class="bar-positive">\r\n    <button class="button button-icon icon ion-navicon" menu-toggle="left"></button>\r\n        <h1 class="title">注册</h1>\r\n    </ion-header-bar> -->\r\n\r\n    <ion-content>\r\n      <div class="list list-inset">\r\n        <label class="item item-input">\r\n          <input type="text" placeholder="用户名" ng-model="param.userid">\r\n        </label>\r\n        <label class="item item-input">\r\n          <input type="password" placeholder="密码" ng-model="param.userKey">\r\n        </label>\r\n        <label class="item item-input">\r\n          <input type="number" placeholder="电话号码" ng-model="param.mobile">\r\n        </label>\r\n        <div class="item item-input-inset">\r\n          <label class="item-input-wrapper">\r\n            <input type="number" placeholder="验证码" ng-model="param.captcha">\r\n          </label>\r\n          <button class="button button-small button-positive" ng-click="registerRequestCaptcha();">\r\n            发送验证码\r\n          </button>\r\n        </div>\r\n        <button class="button button-full button-positive" ng-click="register()">\r\n          注册\r\n        </button>\r\n      </div>\r\n\r\n    </ion-content>\r\n\r\n</ion-view>\r\n'),t.put("templates/views/reset.html",'<ion-view view-title="修改密码">\r\n    <!-- <ion-header-bar align-title="center" class="bar-positive">\r\n    <button class="button button-icon icon ion-navicon" menu-toggle="left"></button>\r\n        <h1 class="title"></h1>\r\n    </ion-header-bar> -->\r\n\r\n    <ion-content>\r\n      <div class="list list-inset">\r\n        <label class="item item-input">\r\n          <input type="text" placeholder="账号" ng-model="param.userid">\r\n        </label>\r\n        <label class="item item-input">\r\n          <input type="password" placeholder="新密码" ng-model="param.userKey">\r\n        </label>\r\n         <label class="item item-input">\r\n          <input type="password" placeholder="重复密码">\r\n        </label>\r\n        <div class="item item-input-inset">\r\n          <label class="item-input-wrapper">\r\n            <input type="number" placeholder="验证码" ng-model="param.captcha">\r\n          </label>\r\n          <button class="button button-small button-positive" ng-click="resetKeyRequestCaptcha();">\r\n            发送验证码\r\n          </button>\r\n        </div>\r\n        <button class="button button-full button-positive" ng-click="resetKey();">\r\n          确认\r\n        </button>\r\n      </div>\r\n\r\n    </ion-content>\r\n\r\n</ion-view>\r\n\r\n'),t.put("templates/views/searchChargeStation.html",'<ion-view view-title="充电站">\r\n    <ion-content>\r\n      <ion-refresher pulling-text="下拉刷新..." on-refresh="doRefresh()"></ion-refresher>\r\n      <ion-list class="charge-station-list">\r\n        <ion-item>\r\n          <select>\r\n            <option>深圳</option>\r\n          </select>\r\n          <select>\r\n            <option value="1">1km</option>\r\n            <option value="5">5km</option>\r\n            <option value="10">10km</option>\r\n            <option value="50">50km</option>\r\n          </select>\r\n        </ion-item>\r\n        <ion-item ng-repeat-start="i in chargeStationList" ui-sref="app.chargeStationInfo({id:i.rid})" class="item-thumbnail-left item-icon-right">\r\n          <img src="cover.jpg">\r\n          <h2>{{i.operator}}<i class="flt-r slow">慢</i><i class="flt-r fast">快</i></h2>\r\n          <p>{{i.cost.service}}元/度</p>\r\n          <p>距您{{i.distance}}km</p>\r\n          <h2>空闲{{i.spare}}</h2>\r\n        </ion-item>\r\n        <ion-item ng-repeat-end class="item-divider"></ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n'),t.put("templates/views/searchChargingPile.html",'<ion-view>\r\n    <ion-nav-title side="center">\r\n      <span ui-sref="app.chargeStationInfo({id:chargeingStationId})">电站详情</span>/<span>充电终端</span>\r\n    </ion-nav-title>\r\n\r\n    <ion-content>\r\n      <ion-refresher pulling-text="下拉刷新..." on-refresh="doRefresh()"></ion-refresher>\r\n      <ion-list>\r\n        <ion-item>\r\n            空闲优先|快充优先|慢充优先|筛选\r\n        </ion-item>\r\n        <ion-item ng-repeat-start="i in chargePileList" ui-sref="app.chargePileInfo({id:i.rid})" class="item-icon-left item-icon-right">\r\n          <h2><span>编号</span>{{i.terminalid}}</h2>\r\n          <h2><span>终端类型</span>{{i.terminalType}}</h2>\r\n          <h2><span>充电接口</span>{{i.interface}}</h2>\r\n          <h2><span>车位号</span>{{i.parkingSpace}}</h2>\r\n        </ion-item>\r\n        <ion-item ng-repeat-end class="item-divider"></ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n'),
t.put("templates/views/settings.html",'<ion-view>\r\n    <ion-header-bar align-title="center" class="bar-positive">\r\n    <button class="button button-icon icon ion-navicon" menu-toggle="left"></button>\r\n        <h1 class="title">Settings</h1>\r\n    </ion-header-bar>\r\n\r\n    <ion-content>\r\n        <div class="list">\r\n\r\n            <!-- connect toggles to controller using ng-model -->\r\n\r\n            <ion-toggle>\r\n                <span class="settings-item__text">\r\n                    Allow Push Notifications\r\n                </span>\r\n            </ion-toggle>\r\n\r\n            <ion-toggle>\r\n                <span class="settings-item__text">\r\n                    Allow cookies\r\n                </span>\r\n            </ion-toggle>\r\n\r\n        </div>\r\n    </ion-content>\r\n\r\n</ion-view>\r\n'),t.put("templates/views/signin.html",'    <!-- <ion-header-bar align-title="center" class="bar-positive">\r\n    <button class="button button-icon icon ion-navicon" menu-toggle="left"></button>\r\n        <h1 class="title">登录</h1>\r\n    </ion-header-bar> -->\r\n<ion-view view-title="登录">\r\n    <ion-content>\r\n      <div class="list list-inset">\r\n        <label class="item item-input">\r\n          <input type="text" placeholder="账号">\r\n        </label>\r\n        <label class="item item-input">\r\n          <input type="password" placeholder="密码">\r\n        </label>\r\n        <div class="item item-input-inset">\r\n          <label class="item-input-wrapper">\r\n            <input type="number" placeholder="验证码" ng-model="param.captcha">\r\n          </label>\r\n          <button class="button button-small button-positive" ng-click="loginRequesCaptcha();">\r\n            发送验证码\r\n          </button>\r\n        </div>\r\n        <button class="button button-full button-positive" ng-click="signin();">\r\n          登录\r\n        </button>\r\n        <button class="button button-full button-positive" ng-click="signout();">\r\n          退出\r\n        </button>\r\n        <button class="button button-full button-positive" ng-click="gotoResetKey();">\r\n          修改密码\r\n        </button>\r\n        <button class="button button-full button-positive" ng-click="gotoRegister();">\r\n          注册\r\n        </button>\r\n      </div>\r\n\r\n    </ion-content>\r\n  </ion-view>')}]);