/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={949:()=>{!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,a.c=e,a.p="",a(0)}([function(t,e,a){a(20).init()},function(t,e,a){var i="wdc_approved_origins",n=a(9);function o(){var t=n.get(i);return t&&0!==t.length?t.split(","):[]}t.exports.addApprovedOrigin=function(t){if(t){var e=o();e.push(t),a=e.join(","),console.log("Saving approved origins '"+a+"'"),n.set(i,a)}var a},t.exports.getApprovedOrigins=o},function(t,e){var a={phaseEnum:{interactivePhase:"interactive",authPhase:"auth",gatherDataPhase:"gatherData"},authPurposeEnum:{ephemeral:"ephemeral",enduring:"enduring"},authTypeEnum:{none:"none",basic:"basic",custom:"custom"},dataTypeEnum:{bool:"bool",date:"date",datetime:"datetime",float:"float",int:"int",string:"string"},columnRoleEnum:{dimension:"dimension",measure:"measure"},columnTypeEnum:{continuous:"continuous",discrete:"discrete"},aggTypeEnum:{sum:"sum",avg:"avg",median:"median",count:"count",countd:"count_dist"},geographicRoleEnum:{area_code:"area_code",cbsa_msa:"cbsa_msa",city:"city",congressional_district:"congressional_district",country_region:"country_region",county:"county",state_province:"state_province",zip_code_postcode:"zip_code_postcode",latitude:"latitude",longitude:"longitude"},unitsFormatEnum:{thousands:"thousands",millions:"millions",billions_english:"billions_english",billions_standard:"billions_standard"},numberFormatEnum:{number:"number",currency:"currency",scientific:"scientific",percentage:"percentage"},localeEnum:{america:"en-us",brazil:"pt-br",china:"zh-cn",france:"fr-fr",germany:"de-de",japan:"ja-jp",korea:"ko-kr",spain:"es-es"},joinEnum:{inner:"inner",left:"left"}};t.exports.apply=function(t){for(var e in a)t[e]=a[e]}},function(t,e){function a(t){this.nativeApiRootObj=t,this._initPublicInterface(),this._initPrivateInterface()}a.prototype._initPublicInterface=function(){console.log("Initializing public interface for NativeDispatcher"),this._submitCalled=!1;var t={};t.abortForAuth=this._abortForAuth.bind(this),t.abortWithError=this._abortWithError.bind(this),t.addCrossOriginException=this._addCrossOriginException.bind(this),t.log=this._log.bind(this),t.submit=this._submit.bind(this),t.reportProgress=this._reportProgress.bind(this),this.publicInterface=t},a.prototype._abortForAuth=function(t){this.nativeApiRootObj.WDCBridge_Api_abortForAuth.api(t)},a.prototype._abortWithError=function(t){this.nativeApiRootObj.WDCBridge_Api_abortWithError.api(t)},a.prototype._addCrossOriginException=function(t){this.nativeApiRootObj.WDCBridge_Api_addCrossOriginException.api(t)},a.prototype._log=function(t){this.nativeApiRootObj.WDCBridge_Api_log.api(t)},a.prototype._submit=function(){this._submitCalled?console.log("submit called more than once"):(this._submitCalled=!0,this.nativeApiRootObj.WDCBridge_Api_submit.api())},a.prototype._initPrivateInterface=function(){console.log("Initializing private interface for NativeDispatcher"),this._initCallbackCalled=!1,this._shutdownCallbackCalled=!1;var t={};t._initCallback=this._initCallback.bind(this),t._shutdownCallback=this._shutdownCallback.bind(this),t._schemaCallback=this._schemaCallback.bind(this),t._tableDataCallback=this._tableDataCallback.bind(this),t._dataDoneCallback=this._dataDoneCallback.bind(this),this.privateInterface=t},a.prototype._initCallback=function(){this._initCallbackCalled?console.log("initCallback called more than once"):(this._initCallbackCalled=!0,this.nativeApiRootObj.WDCBridge_Api_initCallback.api())},a.prototype._shutdownCallback=function(){this._shutdownCallbackCalled?console.log("shutdownCallback called more than once"):(this._shutdownCallbackCalled=!0,this.nativeApiRootObj.WDCBridge_Api_shutdownCallback.api())},a.prototype._schemaCallback=function(t,e){this.nativeApiRootObj.WDCBridge_Api_schemaCallbackEx?this.nativeApiRootObj.WDCBridge_Api_schemaCallbackEx.api(t,e||[]):this.nativeApiRootObj.WDCBridge_Api_schemaCallback.api(t)},a.prototype._tableDataCallback=function(t,e){this.nativeApiRootObj.WDCBridge_Api_tableDataCallback.api(t,e)},a.prototype._reportProgress=function(t){this.nativeApiRootObj.WDCBridge_Api_reportProgress?this.nativeApiRootObj.WDCBridge_Api_reportProgress.api(t):console.log("reportProgress not available from this Tableau version")},a.prototype._dataDoneCallback=function(){this.nativeApiRootObj.WDCBridge_Api_dataDoneCallback.api()},t.exports=a},function(t,e,a){var i=a(6),n=a(2);function o(t,e,a){this.privateApiObj=e,this.globalObj=a,this._hasAlreadyThrownErrorSoDontThrowAgain=!1,this.changeTableauApiObj(t)}o.prototype.init=function(){console.log("Initializing shared WDC"),this.globalObj.onerror=this._errorHandler.bind(this),this._initTriggerFunctions(),this._initDeprecatedFunctions()},o.prototype.changeTableauApiObj=function(t){this.tableauApiObj=t,this.tableauApiObj.makeConnector=this._makeConnector.bind(this),this.tableauApiObj.registerConnector=this._registerConnector.bind(this),n.apply(this.tableauApiObj)},o.prototype._errorHandler=function(t,e,a,i,n){if(console.error(n),this._hasAlreadyThrownErrorSoDontThrowAgain)return!0;var o=t;if(n?o+="   stack:"+n.stack:(o+="   file: "+e,o+="   line: "+a),!this.tableauApiObj||!this.tableauApiObj.abortWithError)throw o;return this.tableauApiObj.abortWithError(o),this._hasAlreadyThrownErrorSoDontThrowAgain=!0,!0},o.prototype._makeConnector=function(){return{init:function(t){t()},shutdown:function(t){t()}}},o.prototype._registerConnector=function(t){for(var e=["init","shutdown","getSchema","getData"],a=e.length-1;a>=0;a--)if("function"!=typeof t[e[a]])throw"The connector did not define the required function: "+e[a];console.log("Connector registered"),this.globalObj._wdc=t,this._wdc=t},o.prototype._initTriggerFunctions=function(){this.privateApiObj.triggerInitialization=this._triggerInitialization.bind(this),this.privateApiObj.triggerSchemaGathering=this._triggerSchemaGathering.bind(this),this.privateApiObj.triggerDataGathering=this._triggerDataGathering.bind(this),this.privateApiObj.triggerShutdown=this._triggerShutdown.bind(this)},o.prototype._triggerInitialization=function(){this._wdc.init(this.privateApiObj._initCallback)},o.prototype._triggerSchemaGathering=function(){this._wdc.getSchema(this.privateApiObj._schemaCallback)},o.prototype._triggerDataGathering=function(t){if(1!=t.length)throw"Unexpected number of tables specified. Expected 1, actual "+t.length.toString();var e=t[0],a=!!e.filterColumnId,n=new i(e.tableInfo,e.incrementValue,a,e.filterColumnId||"",e.filterValues||[],this.privateApiObj._tableDataCallback);this._wdc.getData(n,this.privateApiObj._dataDoneCallback)},o.prototype._triggerShutdown=function(){this._wdc.shutdown(this.privateApiObj._shutdownCallback)},o.prototype._initDeprecatedFunctions=function(){this.tableauApiObj.initCallback=this._initCallback.bind(this),this.tableauApiObj.headersCallback=this._headersCallback.bind(this),this.tableauApiObj.dataCallback=this._dataCallback.bind(this),this.tableauApiObj.shutdownCallback=this._shutdownCallback.bind(this)},o.prototype._initCallback=function(){this.tableauApiObj.abortWithError("tableau.initCallback has been deprecated in version 2.0.0. Please use the callback function passed to init")},o.prototype._headersCallback=function(t,e){this.tableauApiObj.abortWithError("tableau.headersCallback has been deprecated in version 2.0.0")},o.prototype._dataCallback=function(t,e,a){this.tableauApiObj.abortWithError("tableau.dataCallback has been deprecated in version 2.0.0")},o.prototype._shutdownCallback=function(){this.tableauApiObj.abortWithError("tableau.shutdownCallback has been deprecated in version 2.0.0. Please use the callback function passed to shutdown")},t.exports=o},function(t,e,a){var i=a(1);function n(t){this.globalObj=t,this._initMessageHandling(),this._initPublicInterface(),this._initPrivateInterface()}a(8),n.prototype._initMessageHandling=function(){console.log("Initializing message handling"),this.globalObj.addEventListener("message",this._receiveMessage.bind(this),!1),this.globalObj.document.addEventListener("DOMContentLoaded",this._onDomContentLoaded.bind(this))},n.prototype._onDomContentLoaded=function(){if(this.globalObj.parent!==window&&this.globalObj.parent.postMessage(this._buildMessagePayload("loaded"),"*"),this.globalObj.opener)try{this.globalObj.opener.postMessage(this._buildMessagePayload("loaded"),"*")}catch(t){console.warn("Some versions of IE may not accurately simulate the Web Data Connector. Please retry on a Webkit based browser")}},n.prototype._packagePropertyValues=function(){return{connectionName:this.globalObj.tableau.connectionName,connectionData:this.globalObj.tableau.connectionData,password:this.globalObj.tableau.password,username:this.globalObj.tableau.username,usernameAlias:this.globalObj.tableau.usernameAlias,incrementalExtractColumn:this.globalObj.tableau.incrementalExtractColumn,versionNumber:this.globalObj.tableau.versionNumber,locale:this.globalObj.tableau.locale,authPurpose:this.globalObj.tableau.authPurpose,platformOS:this.globalObj.tableau.platformOS,platformVersion:this.globalObj.tableau.platformVersion,platformEdition:this.globalObj.tableau.platformEdition,platformBuildNumber:this.globalObj.tableau.platformBuildNumber}},n.prototype._applyPropertyValues=function(t){t&&(this.globalObj.tableau.connectionName=t.connectionName,this.globalObj.tableau.connectionData=t.connectionData,this.globalObj.tableau.password=t.password,this.globalObj.tableau.username=t.username,this.globalObj.tableau.usernameAlias=t.usernameAlias,this.globalObj.tableau.incrementalExtractColumn=t.incrementalExtractColumn,this.globalObj.tableau.locale=t.locale,this.globalObj.tableau.language=t.locale,this.globalObj.tableau.authPurpose=t.authPurpose,this.globalObj.tableau.platformOS=t.platformOS,this.globalObj.tableau.platformVersion=t.platformVersion,this.globalObj.tableau.platformEdition=t.platformEdition,this.globalObj.tableau.platformBuildNumber=t.platformBuildNumber)},n.prototype._buildMessagePayload=function(t,e,a){var i={msgName:t,msgData:e,props:a,version:"2.2.2"};return JSON.stringify(i)},n.prototype._sendMessage=function(t,e){var a=this._buildMessagePayload(t,e,this._packagePropertyValues());if(void 0!==this.globalObj.webkit&&void 0!==this.globalObj.webkit.messageHandlers&&void 0!==this.globalObj.webkit.messageHandlers.wdcHandler)this.globalObj.webkit.messageHandlers.wdcHandler.postMessage(a);else{if(!this._sourceWindow)throw"Looks like the WDC is calling a tableau function before tableau.init() has been called.";this._sourceWindow.postMessage(a,this._sourceOrigin)}},n.prototype._getPayloadObj=function(t){var e=null;try{e=JSON.parse(t)}catch(t){return null}return e},n.prototype._getWebSecurityWarningConfirm=function(){var t=this._sourceOrigin,e=new(a(18))(t).host();if(["localhost","tableau.github.io"].indexOf(e)>=0)return!0;if(e&&e.endsWith("online.tableau.com"))return!0;if(i.getApprovedOrigins().indexOf(t)>=0)return console.log("Already approved the origin'"+t+"', not asking again"),!0;var n=this._getLocalizedString("webSecurityWarning"),o=confirm(n+"\n\n"+e+"\n");return o&&i.addApprovedOrigin(t),o},n.prototype._getCurrentLocale=function(){var t=navigator.language||navigator.userLanguage,e=t?t.substring(0,2):"en";return["de","en","es","fr","ja","ko","pt","zh"].indexOf(e)<0&&(e="en"),e},n.prototype._getLocalizedString=function(t){var e=this._getCurrentLocale(),i=a(10),n=a(11),o=a(12),r=a(14);return{de:i,en:n,es:o,fr:a(13),ja:r,ko:a(15),pt:a(16),zh:a(17)}[e][t]},n.prototype._receiveMessage=function(t){if(console.log("Received message!"),!this.globalObj._wdc)throw"No WDC registered. Did you forget to call tableau.registerConnector?";var e=this._getPayloadObj(t.data);if(e){this._sourceWindow||(this._sourceWindow=t.source,this._sourceOrigin=t.origin);var a=e.msgData;switch(this._applyPropertyValues(e.props),e.msgName){case"init":this._getWebSecurityWarningConfirm()?(this.globalObj.tableau.phase=a.phase,this.globalObj._tableau.triggerInitialization()):window.close();break;case"shutdown":this.globalObj._tableau.triggerShutdown();break;case"getSchema":this.globalObj._tableau.triggerSchemaGathering();break;case"getData":this.globalObj._tableau.triggerDataGathering(a.tablesAndIncrementValues)}}},n.prototype._initPublicInterface=function(){console.log("Initializing public interface"),this._submitCalled=!1;var t={};t.abortForAuth=this._abortForAuth.bind(this),t.abortWithError=this._abortWithError.bind(this),t.addCrossOriginException=this._addCrossOriginException.bind(this),t.log=this._log.bind(this),t.reportProgress=this._reportProgress.bind(this),t.submit=this._submit.bind(this),this.publicInterface=t},n.prototype._abortForAuth=function(t){this._sendMessage("abortForAuth",{msg:t})},n.prototype._abortWithError=function(t){this._sendMessage("abortWithError",{errorMsg:t})},n.prototype._addCrossOriginException=function(t){console.log("Cross Origin Exception requested in the simulator. Pretending to work."),setTimeout(function(){this.globalObj._wdc.addCrossOriginExceptionCompleted(t)}.bind(this),0)},n.prototype._log=function(t){this._sendMessage("log",{logMsg:t})},n.prototype._reportProgress=function(t){this._sendMessage("reportProgress",{progressMsg:t})},n.prototype._submit=function(){this._sendMessage("submit")},n.prototype._initPrivateInterface=function(){console.log("Initializing private interface");var t={};t._initCallback=this._initCallback.bind(this),t._shutdownCallback=this._shutdownCallback.bind(this),t._schemaCallback=this._schemaCallback.bind(this),t._tableDataCallback=this._tableDataCallback.bind(this),t._dataDoneCallback=this._dataDoneCallback.bind(this),this.privateInterface=t},n.prototype._initCallback=function(){this._sendMessage("initCallback")},n.prototype._shutdownCallback=function(){this._sendMessage("shutdownCallback")},n.prototype._schemaCallback=function(t,e){this._sendMessage("_schemaCallback",{schema:t,standardConnections:e||[]})},n.prototype._tableDataCallback=function(t,e){this._sendMessage("_tableDataCallback",{tableName:t,data:e})},n.prototype._dataDoneCallback=function(){this._sendMessage("_dataDoneCallback")},t.exports=n},function(t,e){function a(t,e,a,i,n,o){this.tableInfo=t,this.incrementValue=e||"",this.isJoinFiltered=a,this.filterColumnId=i,this.filterValues=n,this._dataCallbackFn=o,this.appendRows=this._appendRows.bind(this)}a.prototype._appendRows=function(t){t?Array.isArray(t)?this._dataCallbackFn(this.tableInfo.id,t):console.warn("Table.appendRows must take an array of arrays or array of objects"):console.warn("rows data is null or undefined")},t.exports=a},function(t,e){t.exports.copyFunctions=function(t,e){for(var a in t)"function"==typeof t[a]&&(e[a]=t[a])},t.exports.linkObjectProperties=function(t,e,a){a.forEach((function(a){Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:function(){return t[a]},set:function(e){return t[a]=e}})}))},t.exports.tableauProperties=["authPurpose","authType","connectionData","connectionName","language","locale","logLevel","password","phase","platformBuildNumber","platformEdition","platformOs","platformVersion","propertiesReady","scriptVersion","username","usernameAlias","APIVersion"]},function(t,e){String.prototype.endsWith||function(){"use strict";var t=function(){try{var t={},e=Object.defineProperty,a=e(t,t,t)&&e}catch(t){}return a}(),e={}.toString,a=function(t){if(null==this)throw TypeError();var a=String(this);if(t&&"[object RegExp]"==e.call(t))throw TypeError();var i=a.length,n=String(t),o=n.length,r=i;if(arguments.length>1){var s=arguments[1];void 0!==s&&(r=s?Number(s):0)!=r&&(r=0)}var l=Math.min(Math.max(r,0),i),c=l-o;if(c<0)return!1;for(var u=-1;++u<o;)if(a.charCodeAt(c+u)!=n.charCodeAt(u))return!1;return!0};t?t(String.prototype,"endsWith",{value:a,configurable:!0,writable:!0}):String.prototype.endsWith=a}()},function(t,e,a){var i;!function(n,o){"use strict";var r=function(t){if("object"!=typeof t.document)throw new Error("Cookies.js requires a `window` with a `document` object");var e=function(t,a,i){return 1===arguments.length?e.get(t):e.set(t,a,i)};return e._document=t.document,e._cacheKeyPrefix="cookey.",e._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),e.defaults={path:"/",secure:!1},e.get=function(t){e._cachedDocumentCookie!==e._document.cookie&&e._renewCache();var a=e._cache[e._cacheKeyPrefix+t];return a===o?o:decodeURIComponent(a)},e.set=function(t,a,i){return(i=e._getExtendedOptions(i)).expires=e._getExpiresDate(a===o?-1:i.expires),e._document.cookie=e._generateCookieString(t,a,i),e},e.expire=function(t,a){return e.set(t,o,a)},e._getExtendedOptions=function(t){return{path:t&&t.path||e.defaults.path,domain:t&&t.domain||e.defaults.domain,expires:t&&t.expires||e.defaults.expires,secure:t&&t.secure!==o?t.secure:e.defaults.secure}},e._isValidDate=function(t){return"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t.getTime())},e._getExpiresDate=function(t,a){if(a=a||new Date,"number"==typeof t?t=t===1/0?e._maxExpireDate:new Date(a.getTime()+1e3*t):"string"==typeof t&&(t=new Date(t)),t&&!e._isValidDate(t))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return t},e._generateCookieString=function(t,e,a){var i=(t=(t=t.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"))+"="+(e=(e+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent));return i+=(a=a||{}).path?";path="+a.path:"",i+=a.domain?";domain="+a.domain:"",(i+=a.expires?";expires="+a.expires.toUTCString():"")+(a.secure?";secure":"")},e._getCacheFromString=function(t){for(var a={},i=t?t.split("; "):[],n=0;n<i.length;n++){var r=e._getKeyValuePairFromCookieString(i[n]);a[e._cacheKeyPrefix+r.key]===o&&(a[e._cacheKeyPrefix+r.key]=r.value)}return a},e._getKeyValuePairFromCookieString=function(t){var e=t.indexOf("=");e=e<0?t.length:e;var a,i=t.substr(0,e);try{a=decodeURIComponent(i)}catch(t){console&&"function"==typeof console.error&&console.error('Could not decode cookie with key "'+i+'"',t)}return{key:a,value:t.substr(e+1)}},e._renewCache=function(){e._cache=e._getCacheFromString(e._document.cookie),e._cachedDocumentCookie=e._document.cookie},e._areEnabled=function(){var t="cookies.js",a="1"===e.set(t,1).get(t);return e.expire(t),a},e.enabled=e._areEnabled(),e},s=n&&"object"==typeof n.document?r(n):r;(i=function(){return s}.call(e,a,e,t))===o||(t.exports=i)}("undefined"==typeof window?this:window)},function(t,e){t.exports={webSecurityWarning:"To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:"}},function(t,e){t.exports={webSecurityWarning:"To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:"}},function(t,e){t.exports={webSecurityWarning:"To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:"}},function(t,e){t.exports={webSecurityWarning:"To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:"}},function(t,e){t.exports={webSecurityWarning:"To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:"}},function(t,e){t.exports={webSecurityWarning:"To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:"}},function(t,e){t.exports={webSecurityWarning:"To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:"}},function(t,e){t.exports={webSecurityWarning:"wwTo help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:"}},function(t,e,a){var i;!function(n){var o={starts_with_slashes:/^\/+/,ends_with_slashes:/\/+$/,pluses:/\+/g,query_separator:/[&;]/,uri_parser:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@]*))?)?@)?(\[[0-9a-fA-F:.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?(:)?)((((?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};function r(t){return t&&(t=t.toString().replace(o.pluses,"%20"),t=decodeURIComponent(t)),t}function s(t){var e,a,i,n,s,l,c,u=[];if(null==t||""===t)return u;for(0===t.indexOf("?")&&(t=t.substring(1)),e=0,c=(a=t.toString().split(o.query_separator)).length;e<c;e++)0!==(n=(i=a[e]).indexOf("="))&&(s=r(i.substring(0,n)),l=r(i.substring(n+1)),u.push(-1===n?[i,null]:[s,l]));return u}function l(t){this.uriParts=function(t){var e=o.uri_parser.exec(t||""),a={};return["source","protocol","authority","userInfo","user","password","host","port","isColonUri","relative","path","directory","file","query","anchor"].forEach((function(t,i){a[t]=e[i]||""})),a}(t),this.queryPairs=s(this.uriParts.query),this.hasAuthorityPrefixUserPref=null}Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var a,i;if(null==this)throw new TypeError(" this is null or not defined");var n=Object(this),o=n.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(a=e),i=0;i<o;){var r;i in n&&(r=n[i],t.call(a,r,i,n)),i++}}),["protocol","userInfo","host","port","path","anchor"].forEach((function(t){l.prototype[t]=function(e){return void 0!==e&&(this.uriParts[t]=e),this.uriParts[t]}})),l.prototype.hasAuthorityPrefix=function(t){return void 0!==t&&(this.hasAuthorityPrefixUserPref=t),null===this.hasAuthorityPrefixUserPref?-1!==this.uriParts.source.indexOf("//"):this.hasAuthorityPrefixUserPref},l.prototype.isColonUri=function(t){if(void 0===t)return!!this.uriParts.isColonUri;this.uriParts.isColonUri=!!t},l.prototype.query=function(t){var e,a,i,n="";for(void 0!==t&&(this.queryPairs=s(t)),e=0,i=this.queryPairs.length;e<i;e++)a=this.queryPairs[e],n.length>0&&(n+="&"),null===a[1]?n+=a[0]:(n+=a[0],n+="=",void 0!==a[1]&&(n+=encodeURIComponent(a[1])));return n.length>0?"?"+n:n},l.prototype.getQueryParamValue=function(t){var e,a,i;for(a=0,i=this.queryPairs.length;a<i;a++)if(t===(e=this.queryPairs[a])[0])return e[1]},l.prototype.getQueryParamValues=function(t){var e,a,i,n=[];for(e=0,i=this.queryPairs.length;e<i;e++)t===(a=this.queryPairs[e])[0]&&n.push(a[1]);return n},l.prototype.deleteQueryParam=function(t,e){var a,i,n,o,s,l=[];for(a=0,s=this.queryPairs.length;a<s;a++)n=r((i=this.queryPairs[a])[0])===r(t),o=i[1]===e,(1!==arguments.length||n)&&(2!==arguments.length||n&&o)||l.push(i);return this.queryPairs=l,this},l.prototype.addQueryParam=function(t,e,a){return 3===arguments.length&&-1!==a?(a=Math.min(a,this.queryPairs.length),this.queryPairs.splice(a,0,[t,e])):arguments.length>0&&this.queryPairs.push([t,e]),this},l.prototype.hasQueryParam=function(t){var e,a=this.queryPairs.length;for(e=0;e<a;e++)if(this.queryPairs[e][0]==t)return!0;return!1},l.prototype.replaceQueryParam=function(t,e,a){var i,n,o=-1,s=this.queryPairs.length;if(3===arguments.length){for(i=0;i<s;i++)if(r((n=this.queryPairs[i])[0])===r(t)&&decodeURIComponent(n[1])===r(a)){o=i;break}o>=0&&this.deleteQueryParam(t,r(a)).addQueryParam(t,e,o)}else{for(i=0;i<s;i++)if(r((n=this.queryPairs[i])[0])===r(t)){o=i;break}this.deleteQueryParam(t),this.addQueryParam(t,e,o)}return this},["protocol","hasAuthorityPrefix","isColonUri","userInfo","host","port","path","query","anchor"].forEach((function(t){var e="set"+t.charAt(0).toUpperCase()+t.slice(1);l.prototype[e]=function(e){return this[t](e),this}})),l.prototype.scheme=function(){var t="";return this.protocol()?(t+=this.protocol(),this.protocol().indexOf(":")!==this.protocol().length-1&&(t+=":"),t+="//"):this.hasAuthorityPrefix()&&this.host()&&(t+="//"),t},l.prototype.origin=function(){var t=this.scheme();return this.userInfo()&&this.host()&&(t+=this.userInfo(),this.userInfo().indexOf("@")!==this.userInfo().length-1&&(t+="@")),this.host()&&(t+=this.host(),(this.port()||this.path()&&this.path().substr(0,1).match(/[0-9]/))&&(t+=":"+this.port())),t},l.prototype.addTrailingSlash=function(){var t=this.path()||"";return"/"!==t.substr(-1)&&this.path(t+"/"),this},l.prototype.toString=function(){var t,e=this.origin();return this.isColonUri()?this.path()&&(e+=":"+this.path()):this.path()?(t=this.path(),o.ends_with_slashes.test(e)||o.starts_with_slashes.test(t)?(e&&e.replace(o.ends_with_slashes,"/"),t=t.replace(o.starts_with_slashes,"/")):e+="/",e+=t):this.host()&&(this.query().toString()||this.anchor())&&(e+="/"),this.query().toString()&&(e+=this.query().toString()),this.anchor()&&(0!==this.anchor().indexOf("#")&&(e+="#"),e+=this.anchor()),e},l.prototype.clone=function(){return new l(this.toString())},void 0===(i=function(){return l}.call(e,a,e,t))||(t.exports=i)}()},function(t,e,a){"use strict";function i(t,e,a){this.__id__=t,a.objects[t]=this,this.__objectSignals__={},this.__propertyCache__={};var n=this;function o(t,e){var i=t[0],o=t[1];n[i]={connect:function(t){"function"==typeof t?(n.__objectSignals__[o]=n.__objectSignals__[o]||[],n.__objectSignals__[o].push(t),e||"destroyed"===i||a.exec({type:7,object:n.__id__,signal:o})):console.error("Bad callback given to connect to signal "+i)},disconnect:function(t){if("function"==typeof t){n.__objectSignals__[o]=n.__objectSignals__[o]||[];var r=n.__objectSignals__[o].indexOf(t);-1!==r?(n.__objectSignals__[o].splice(r,1),e||0!==n.__objectSignals__[o].length||a.exec({type:8,object:n.__id__,signal:o})):console.error("Cannot find connection of signal "+i+" to "+t.name)}else console.error("Bad callback given to disconnect from signal "+i)}}}function r(t,e){var a=n.__objectSignals__[t];a&&a.forEach((function(t){t.apply(t,e)}))}for(var t in this.unwrapQObject=function(t){if(t instanceof Array){for(var e=new Array(t.length),o=0;o<t.length;++o)e[o]=n.unwrapQObject(t[o]);return e}if(!t||!t["__QObject*__"]||void 0===t.id)return t;var r=t.id;if(a.objects[r])return a.objects[r];if(t.data){var s=new i(r,t.data,a);return s.destroyed.connect((function(){if(a.objects[r]===s){delete a.objects[r];var t=[];for(var e in s)t.push(e);for(var i in t)delete s[t[i]]}})),s.unwrapProperties(),s}console.error("Cannot unwrap unknown QObject "+r+" without data.")},this.unwrapProperties=function(){for(var t in n.__propertyCache__)n.__propertyCache__[t]=n.unwrapQObject(n.__propertyCache__[t])},this.propertyUpdate=function(t,e){for(var a in e){var i=e[a];n.__propertyCache__[a]=i}for(var o in t)r(o,t[o])},this.signalEmitted=function(t,e){r(t,this.unwrapQObject(e))},e.methods.forEach((function(t){var e=t[0],o=t[1];n[e]=function(){for(var t,e=[],r=0;r<arguments.length;++r){var s=arguments[r];"function"==typeof s?t=s:s instanceof i&&void 0!==a.objects[s.__id__]?e.push({id:s.__id__}):e.push(s)}a.exec({type:6,object:n.__id__,method:o,args:e},(function(e){if(void 0!==e){var a=n.unwrapQObject(e);t&&t(a)}}))}})),e.properties.forEach((function(t){var e=t[0],r=t[1],s=t[2];n.__propertyCache__[e]=t[3],s&&(1===s[0]&&(s[0]=r+"Changed"),o(s,!0)),Object.defineProperty(n,r,{configurable:!0,get:function(){var t=n.__propertyCache__[e];return void 0===t&&console.warn('Undefined value in property cache for property "'+r+'" in object '+n.__id__),t},set:function(t){if(void 0!==t){n.__propertyCache__[e]=t;var o=t;o instanceof i&&void 0!==a.objects[o.__id__]&&(o={id:o.__id__}),a.exec({type:9,object:n.__id__,property:e,value:o})}else console.warn("Property setter for "+r+" called with undefined value!")}})})),e.signals.forEach((function(t){o(t,!1)})),e.enums)n[t]=e.enums[t]}t.exports={QWebChannel:function(t,e){if("object"==typeof t&&"function"==typeof t.send){var a=this;this.transport=t,this.send=function(t){"string"!=typeof t&&(t=JSON.stringify(t)),a.transport.send(t)},this.transport.onmessage=function(t){var e=t.data;switch("string"==typeof e&&(e=JSON.parse(e)),e.type){case 1:a.handleSignal(e);break;case 10:a.handleResponse(e);break;case 2:a.handlePropertyUpdate(e);break;default:console.error("invalid message received:",t.data)}},this.execCallbacks={},this.execId=0,this.exec=function(t,e){e?(a.execId===Number.MAX_VALUE&&(a.execId=Number.MIN_VALUE),t.hasOwnProperty("id")?console.error("Cannot exec message with property id: "+JSON.stringify(t)):(t.id=a.execId++,a.execCallbacks[t.id]=e,a.send(t))):a.send(t)},this.objects={},this.handleSignal=function(t){var e=a.objects[t.object];e?e.signalEmitted(t.signal,t.args):console.warn("Unhandled signal: "+t.object+"::"+t.signal)},this.handleResponse=function(t){t.hasOwnProperty("id")?(a.execCallbacks[t.id](t.data),delete a.execCallbacks[t.id]):console.error("Invalid response message received: ",JSON.stringify(t))},this.handlePropertyUpdate=function(t){for(var e in t.data){var i=t.data[e],n=a.objects[i.object];n?n.propertyUpdate(i.signals,i.properties):console.warn("Unhandled property update: "+i.object+"::"+i.signal)}a.exec({type:4})},this.debug=function(t){a.send({type:5,data:t})},a.exec({type:3},(function(t){for(var n in t)new i(n,t[n],a);for(var n in a.objects)a.objects[n].unwrapProperties();e&&e(a),a.exec({type:4})}))}else console.error("The QWebChannel expects a transport object with a send function and onmessage callback property. Given is: transport: "+typeof t+", transport.send: "+typeof t.send)}}},function(t,e,a){"use strict";var i=a(7),n=a(4),o=a(3),r=a(5),s=a(19);function l(t,e){i.copyFunctions(t.publicInterface,window.tableau),i.copyFunctions(t.privateInterface,window._tableau),e.init()}t.exports.init=function(){var t=null,e=null;window._tableau={},window.tableauVersionBootstrap?(console.log("Initializing NativeDispatcher, Reporting version number"),window.tableauVersionBootstrap.ReportVersionNumber("2.2.2"),t=new o(window)):window.qt&&window.qt.webChannelTransport?(console.log("Initializing NativeDispatcher for qwebchannel"),window.tableau={},window.channel=new s.QWebChannel(qt.webChannelTransport,(function(a){console.log("QWebChannel created successfully"),window._tableau._nativeSetupCompleted=function(){t=new o(a.objects),i.linkObjectProperties(a.objects.tableau,window.tableau,i.tableauProperties),e.changeTableauApiObj(window.tableau),l(t,e)},a.objects.tableauVersionBootstrap.ReportVersionNumber("2.2.2")}))):(console.log("Version Bootstrap is not defined, Initializing SimulatorDispatcher"),window.tableau={},t=new r(window)),e=new n(window.tableau,window._tableau,window),t&&l(t,e)}}])}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,a),o.exports}(()=>{"use strict";a(949);const t=async()=>(await(t=>{const e=tableau.makeConnector();function a(t,e){let a=0;for(;a<e.length;)t.appendRows(e.slice(a,100+a)),a+=100,tableau.reportProgress("Getting row: "+a)}e.getSchema=t=>{let e,a=JSON.parse(tableau.connectionData);"funnels"===a.connectionType?e=[{id:"date",alias:"Date",dataType:tableau.dataTypeEnum.date},{id:"step",alias:"Step",dataType:tableau.dataTypeEnum.string},{id:"count",alias:"Count",dataType:tableau.dataTypeEnum.int},{id:"avg_time",alias:"Avg Time",dataType:tableau.dataTypeEnum.int},{id:"avg_time_from_start",alias:"Avg Time From Start",dataType:tableau.dataTypeEnum.int},{id:"event",alias:"Event",dataType:tableau.dataTypeEnum.string},{id:"overall_conv_ratio",alias:"Overall Ratio",dataType:tableau.dataTypeEnum.float},{id:"step_conv_ratio",alias:"Step Ratio",dataType:tableau.dataTypeEnum.float}]:"insights"===a.connectionType?e=[{id:"event",alias:"Event",dataType:tableau.dataTypeEnum.string},{id:"segment",alias:"Segment",dataType:tableau.dataTypeEnum.string},{id:"property",alias:"Property",dataType:tableau.dataTypeEnum.string},{id:"subproperty",alias:"Sub Property",dataType:tableau.dataTypeEnum.string},{id:"subsegment",alias:"Sub Segment",dataType:tableau.dataTypeEnum.string},{id:"date",alias:"Date",dataType:tableau.dataTypeEnum.date},{id:"value",alias:"Value",dataType:tableau.dataTypeEnum.float}]:"jql"===a.connectionType&&(e=[{id:"result",alias:"Result",dataType:tableau.dataTypeEnum.string},{id:"source",alias:"Source",dataType:tableau.dataTypeEnum.string},{id:"event",alias:"event",dataType:tableau.dataTypeEnum.string},{id:"contract",alias:"contract",dataType:tableau.dataTypeEnum.string},{id:"count_events",alias:"Count events",dataType:tableau.dataTypeEnum.string},{id:"month",alias:"Month",dataType:tableau.dataTypeEnum.string},{id:"id",alias:"id",dataType:tableau.dataTypeEnum.string},{id:"msisdn",alias:"msisdn",dataType:tableau.dataTypeEnum.string}]),t([{id:"Mixpanel_Connector",columns:e}])},e.getData=(t,e)=>{let i=JSON.parse(tableau.connectionData),n=i.projectData?i.projectData.apiKey:"5c6d6a400892cfd05c69821c78bb9be6";$.ajaxSetup({beforeSend:t=>{t.setRequestHeader("Authorization",`Basic ${btoa(n)}:`),t.setRequestHeader("Accept","application/json")}});let o,r=i.projectData?i.projectData.id:1503585,s=[];if("funnels"===i.connectionType){let n=new Date,l=n.getMonth()+1,c=l-2,u=n.getFullYear(),p=`from_date=${i.startDate?i.startDate:`${u}-${c}-01`}&to_date=${i.endDate?i.endDate:`${u}-${l}-${n.getDate()}`}`;o=`https://mixpanel.com/api/2.0/funnels?project_id=${r}&funnel_id=${i.queryType}&${p}&unit=month`,$.getJSON(o,(i=>{const n=i.data;for(const t in n)for(const e in n[t])try{n[t][e]&&n[t][e].forEach((a=>{s.push({date:t,step:e,count:a.count,avg_time:a.avg_time,avg_time_from_start:a.avg_time_from_start,event:a.event,overall_conv_ratio:a.overall_conv_ratio,step_conv_ratio:a.step_conv_ratio})}))}catch(t){console.error("error: ",t)}a(t,s),e()}))}else if("insights"===i.connectionType){o=`https://mixpanel.com/api/2.0/insights?project_id=${r}&bookmark_id=${i.queryType}`;const n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];let l=(t,e)=>{let a={value:t,key:e};if(/[A-Z]/g.test(t))if(n.includes(t))a.key="date";else{let e=new Date(t);e.getTime()&&(a.value=e.toLocaleDateString(),a.key="date")}return a},c=t=>{for(let e in t)for(let a in t[e])s.push({event:e,value:t[e][a]})},u=t=>{for(let e in t)for(let a in t[e])if("$overall"!=a)for(let i in t[e][a]){let n=l(a,"segment");s.push({event:e,[n.key]:n.value,value:t[e][a][i]})}},p=t=>{for(let e in t)for(let a in t[e])for(let i in t[e][a])if("$overall"!=i)for(let n in t[e][a][i]){let o=l(a,"segment"),r=l(i,"property");s.push({event:e,[o.key]:o.value,[r.key]:r.value,value:t[e][a][i][n]})}},h=t=>{for(let e in t)for(let a in t[e])for(let i in t[e][a])for(let n in t[e][a][i])if("$overall"!=n)for(let o in t[e][a][i][n]){let r=l(a,"segment"),c=l(i,"property"),u=l(n,"subproperty");s.push({event:e,[r.key]:r.value,[c.key]:c.value,[u.key]:u.value,value:t[e][a][i][n][o]})}},d=t=>{for(let e in t)for(let a in t[e])for(let i in t[e][a])for(let n in t[e][a][i])for(let o in t[e][a][i][n])if("$overall"!=o)for(let r in t[e][a][i][n][o]){let c=l(a,"segment"),u=l(i,"property"),p=l(n,"subproperty"),h=l(o,"subsegment");s.push({event:e,[c.key]:c.value,[u.key]:u.value,[p.key]:p.value,[h.key]:h.value,value:t[e][a][i][n][o][r]})}};$.getJSON(o,(i=>{let n=i.series,o=t=>{if(!t||0===t.length||"object"!=typeof t)return 0;const e=Object.keys(t);let a=0;return e.forEach((e=>{let i=o(t[e]);i>a&&(a=i)})),a+1};switch(o(n)){case 2:c(n);break;case 3:u(n);break;case 4:p(n);break;case 5:h(n);break;case 6:d(n);break;default:console.log("Algo ha salido mal.")}a(t,s),e()}))}else if("jql"===i.connectionType){o=`https://mixpanel.com/api/2.0/jql?project_id=${r}`;try{$.post(o,{script:i.queryType},(a=>{console.log(a),t.appendRows(a),e()}))}catch(t){console.error(t)}}},tableau.registerConnector(e),$(document).ready((()=>{$("#submitButton").click((()=>{let e;if("funnels"===t?e={queryType:$("#query_id").val().trim(),startDate:$("#initial_date").val().trim(),endDate:$("#final_date").val().trim()}:"insights"!==t&&"jql"!==t||(e={queryType:$("#query_id").val().trim()}),e.queryType){let a;switch(e.connectionType=t,$("#mixpanel_project").val().trim()){case"gateway":a={id:1495597,apiKey:"8aabd740ab8454ea0c6de851e88ba0f4"};break;case"mitigo":a={id:1495617,apiKey:"aaa9a6846a332431ea6fcbb404852883"};break;default:a={id:1503585,apiKey:"5c6d6a400892cfd05c69821c78bb9be6"}}e.projectData=a,tableau.connectionData=JSON.stringify(e),tableau.connectionName="Mixpanel_Connector",tableau.submit()}else $("#errorMsg").html("ID is required")}))}))})("insights"),'\n    <h1>Get Mixpanel Data for an Insight ID</h1>\n    <div>\n        <label for="query_id" class="form-label">Insight ID</label>\n        <input type="text" class="form-control" id="query_id" />\n        <div id="errorMsg" class="text-danger"></div>\n    </div>\n    '),e={"/index.html":t};window.addEventListener("load",(async()=>{const a=document.getElementById("connector");let i=await("/"+(location.pathname.split("/").pop().toLowerCase()||""));setTimeout((async()=>{try{let t=JSON.parse(tableau.connectionData),i=e[`/${t.connectionType}`];a.innerHTML=await i()}catch(n){let o=e[i]?e[i]:t;a.innerHTML=await o()}}),100)}))})()})();