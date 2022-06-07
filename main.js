/*! For license information please see main.js.LICENSE.txt */
(() => {
  var t = {
      949: () => {
        !(function (t) {
          var e = {};
          function a(n) {
            if (e[n]) return e[n].exports;
            var i = (e[n] = { exports: {}, id: n, loaded: !1 });
            return (
              t[n].call(i.exports, i, i.exports, a), (i.loaded = !0), i.exports
            );
          }
          (a.m = t), (a.c = e), (a.p = ""), a(0);
        })([
          function (t, e, a) {
            a(20).init();
          },
          function (t, e, a) {
            var n = "wdc_approved_origins",
              i = a(9);
            function r() {
              var t = i.get(n);
              return t && 0 !== t.length ? t.split(",") : [];
            }
            (t.exports.addApprovedOrigin = function (t) {
              if (t) {
                var e = r();
                e.push(t),
                  (a = e.join(",")),
                  console.log("Saving approved origins '" + a + "'"),
                  i.set(n, a);
              }
              var a;
            }),
              (t.exports.getApprovedOrigins = r);
          },
          function (t, e) {
            var a = {
              phaseEnum: {
                interactivePhase: "interactive",
                authPhase: "auth",
                gatherDataPhase: "gatherData",
              },
              authPurposeEnum: { ephemeral: "ephemeral", enduring: "enduring" },
              authTypeEnum: { none: "none", basic: "basic", custom: "custom" },
              dataTypeEnum: {
                bool: "bool",
                date: "date",
                datetime: "datetime",
                float: "float",
                int: "int",
                string: "string",
              },
              columnRoleEnum: { dimension: "dimension", measure: "measure" },
              columnTypeEnum: {
                continuous: "continuous",
                discrete: "discrete",
              },
              aggTypeEnum: {
                sum: "sum",
                avg: "avg",
                median: "median",
                count: "count",
                countd: "count_dist",
              },
              geographicRoleEnum: {
                area_code: "area_code",
                cbsa_msa: "cbsa_msa",
                city: "city",
                congressional_district: "congressional_district",
                country_region: "country_region",
                county: "county",
                state_province: "state_province",
                zip_code_postcode: "zip_code_postcode",
                latitude: "latitude",
                longitude: "longitude",
              },
              unitsFormatEnum: {
                thousands: "thousands",
                millions: "millions",
                billions_english: "billions_english",
                billions_standard: "billions_standard",
              },
              numberFormatEnum: {
                number: "number",
                currency: "currency",
                scientific: "scientific",
                percentage: "percentage",
              },
              localeEnum: {
                america: "en-us",
                brazil: "pt-br",
                china: "zh-cn",
                france: "fr-fr",
                germany: "de-de",
                japan: "ja-jp",
                korea: "ko-kr",
                spain: "es-es",
              },
              joinEnum: { inner: "inner", left: "left" },
            };
            t.exports.apply = function (t) {
              for (var e in a) t[e] = a[e];
            };
          },
          function (t, e) {
            function a(t) {
              (this.nativeApiRootObj = t),
                this._initPublicInterface(),
                this._initPrivateInterface();
            }
            (a.prototype._initPublicInterface = function () {
              console.log("Initializing public interface for NativeDispatcher"),
                (this._submitCalled = !1);
              var t = {};
              (t.abortForAuth = this._abortForAuth.bind(this)),
                (t.abortWithError = this._abortWithError.bind(this)),
                (t.addCrossOriginException =
                  this._addCrossOriginException.bind(this)),
                (t.log = this._log.bind(this)),
                (t.submit = this._submit.bind(this)),
                (t.reportProgress = this._reportProgress.bind(this)),
                (this.publicInterface = t);
            }),
              (a.prototype._abortForAuth = function (t) {
                this.nativeApiRootObj.WDCBridge_Api_abortForAuth.api(t);
              }),
              (a.prototype._abortWithError = function (t) {
                this.nativeApiRootObj.WDCBridge_Api_abortWithError.api(t);
              }),
              (a.prototype._addCrossOriginException = function (t) {
                this.nativeApiRootObj.WDCBridge_Api_addCrossOriginException.api(
                  t
                );
              }),
              (a.prototype._log = function (t) {
                this.nativeApiRootObj.WDCBridge_Api_log.api(t);
              }),
              (a.prototype._submit = function () {
                this._submitCalled
                  ? console.log("submit called more than once")
                  : ((this._submitCalled = !0),
                    this.nativeApiRootObj.WDCBridge_Api_submit.api());
              }),
              (a.prototype._initPrivateInterface = function () {
                console.log(
                  "Initializing private interface for NativeDispatcher"
                ),
                  (this._initCallbackCalled = !1),
                  (this._shutdownCallbackCalled = !1);
                var t = {};
                (t._initCallback = this._initCallback.bind(this)),
                  (t._shutdownCallback = this._shutdownCallback.bind(this)),
                  (t._schemaCallback = this._schemaCallback.bind(this)),
                  (t._tableDataCallback = this._tableDataCallback.bind(this)),
                  (t._dataDoneCallback = this._dataDoneCallback.bind(this)),
                  (this.privateInterface = t);
              }),
              (a.prototype._initCallback = function () {
                this._initCallbackCalled
                  ? console.log("initCallback called more than once")
                  : ((this._initCallbackCalled = !0),
                    this.nativeApiRootObj.WDCBridge_Api_initCallback.api());
              }),
              (a.prototype._shutdownCallback = function () {
                this._shutdownCallbackCalled
                  ? console.log("shutdownCallback called more than once")
                  : ((this._shutdownCallbackCalled = !0),
                    this.nativeApiRootObj.WDCBridge_Api_shutdownCallback.api());
              }),
              (a.prototype._schemaCallback = function (t, e) {
                this.nativeApiRootObj.WDCBridge_Api_schemaCallbackEx
                  ? this.nativeApiRootObj.WDCBridge_Api_schemaCallbackEx.api(
                      t,
                      e || []
                    )
                  : this.nativeApiRootObj.WDCBridge_Api_schemaCallback.api(t);
              }),
              (a.prototype._tableDataCallback = function (t, e) {
                this.nativeApiRootObj.WDCBridge_Api_tableDataCallback.api(t, e);
              }),
              (a.prototype._reportProgress = function (t) {
                this.nativeApiRootObj.WDCBridge_Api_reportProgress
                  ? this.nativeApiRootObj.WDCBridge_Api_reportProgress.api(t)
                  : console.log(
                      "reportProgress not available from this Tableau version"
                    );
              }),
              (a.prototype._dataDoneCallback = function () {
                this.nativeApiRootObj.WDCBridge_Api_dataDoneCallback.api();
              }),
              (t.exports = a);
          },
          function (t, e, a) {
            var n = a(6),
              i = a(2);
            function r(t, e, a) {
              (this.privateApiObj = e),
                (this.globalObj = a),
                (this._hasAlreadyThrownErrorSoDontThrowAgain = !1),
                this.changeTableauApiObj(t);
            }
            (r.prototype.init = function () {
              console.log("Initializing shared WDC"),
                (this.globalObj.onerror = this._errorHandler.bind(this)),
                this._initTriggerFunctions(),
                this._initDeprecatedFunctions();
            }),
              (r.prototype.changeTableauApiObj = function (t) {
                (this.tableauApiObj = t),
                  (this.tableauApiObj.makeConnector =
                    this._makeConnector.bind(this)),
                  (this.tableauApiObj.registerConnector =
                    this._registerConnector.bind(this)),
                  i.apply(this.tableauApiObj);
              }),
              (r.prototype._errorHandler = function (t, e, a, n, i) {
                if (
                  (console.error(i),
                  this._hasAlreadyThrownErrorSoDontThrowAgain)
                )
                  return !0;
                var r = t;
                if (
                  (i
                    ? (r += "   stack:" + i.stack)
                    : ((r += "   file: " + e), (r += "   line: " + a)),
                  !this.tableauApiObj || !this.tableauApiObj.abortWithError)
                )
                  throw r;
                return (
                  this.tableauApiObj.abortWithError(r),
                  (this._hasAlreadyThrownErrorSoDontThrowAgain = !0),
                  !0
                );
              }),
              (r.prototype._makeConnector = function () {
                return {
                  init: function (t) {
                    t();
                  },
                  shutdown: function (t) {
                    t();
                  },
                };
              }),
              (r.prototype._registerConnector = function (t) {
                for (
                  var e = ["init", "shutdown", "getSchema", "getData"],
                    a = e.length - 1;
                  a >= 0;
                  a--
                )
                  if ("function" != typeof t[e[a]])
                    throw (
                      "The connector did not define the required function: " +
                      e[a]
                    );
                console.log("Connector registered"),
                  (this.globalObj._wdc = t),
                  (this._wdc = t);
              }),
              (r.prototype._initTriggerFunctions = function () {
                (this.privateApiObj.triggerInitialization =
                  this._triggerInitialization.bind(this)),
                  (this.privateApiObj.triggerSchemaGathering =
                    this._triggerSchemaGathering.bind(this)),
                  (this.privateApiObj.triggerDataGathering =
                    this._triggerDataGathering.bind(this)),
                  (this.privateApiObj.triggerShutdown =
                    this._triggerShutdown.bind(this));
              }),
              (r.prototype._triggerInitialization = function () {
                this._wdc.init(this.privateApiObj._initCallback);
              }),
              (r.prototype._triggerSchemaGathering = function () {
                this._wdc.getSchema(this.privateApiObj._schemaCallback);
              }),
              (r.prototype._triggerDataGathering = function (t) {
                if (1 != t.length)
                  throw (
                    "Unexpected number of tables specified. Expected 1, actual " +
                    t.length.toString()
                  );
                var e = t[0],
                  a = !!e.filterColumnId,
                  i = new n(
                    e.tableInfo,
                    e.incrementValue,
                    a,
                    e.filterColumnId || "",
                    e.filterValues || [],
                    this.privateApiObj._tableDataCallback
                  );
                this._wdc.getData(i, this.privateApiObj._dataDoneCallback);
              }),
              (r.prototype._triggerShutdown = function () {
                this._wdc.shutdown(this.privateApiObj._shutdownCallback);
              }),
              (r.prototype._initDeprecatedFunctions = function () {
                (this.tableauApiObj.initCallback =
                  this._initCallback.bind(this)),
                  (this.tableauApiObj.headersCallback =
                    this._headersCallback.bind(this)),
                  (this.tableauApiObj.dataCallback =
                    this._dataCallback.bind(this)),
                  (this.tableauApiObj.shutdownCallback =
                    this._shutdownCallback.bind(this));
              }),
              (r.prototype._initCallback = function () {
                this.tableauApiObj.abortWithError(
                  "tableau.initCallback has been deprecated in version 2.0.0. Please use the callback function passed to init"
                );
              }),
              (r.prototype._headersCallback = function (t, e) {
                this.tableauApiObj.abortWithError(
                  "tableau.headersCallback has been deprecated in version 2.0.0"
                );
              }),
              (r.prototype._dataCallback = function (t, e, a) {
                this.tableauApiObj.abortWithError(
                  "tableau.dataCallback has been deprecated in version 2.0.0"
                );
              }),
              (r.prototype._shutdownCallback = function () {
                this.tableauApiObj.abortWithError(
                  "tableau.shutdownCallback has been deprecated in version 2.0.0. Please use the callback function passed to shutdown"
                );
              }),
              (t.exports = r);
          },
          function (t, e, a) {
            var n = a(1);
            function i(t) {
              (this.globalObj = t),
                this._initMessageHandling(),
                this._initPublicInterface(),
                this._initPrivateInterface();
            }
            a(8),
              (i.prototype._initMessageHandling = function () {
                console.log("Initializing message handling"),
                  this.globalObj.addEventListener(
                    "message",
                    this._receiveMessage.bind(this),
                    !1
                  ),
                  this.globalObj.document.addEventListener(
                    "DOMContentLoaded",
                    this._onDomContentLoaded.bind(this)
                  );
              }),
              (i.prototype._onDomContentLoaded = function () {
                if (
                  (this.globalObj.parent !== window &&
                    this.globalObj.parent.postMessage(
                      this._buildMessagePayload("loaded"),
                      "*"
                    ),
                  this.globalObj.opener)
                )
                  try {
                    this.globalObj.opener.postMessage(
                      this._buildMessagePayload("loaded"),
                      "*"
                    );
                  } catch (t) {
                    console.warn(
                      "Some versions of IE may not accurately simulate the Web Data Connector. Please retry on a Webkit based browser"
                    );
                  }
              }),
              (i.prototype._packagePropertyValues = function () {
                return {
                  connectionName: this.globalObj.tableau.connectionName,
                  connectionData: this.globalObj.tableau.connectionData,
                  password: this.globalObj.tableau.password,
                  username: this.globalObj.tableau.username,
                  usernameAlias: this.globalObj.tableau.usernameAlias,
                  incrementalExtractColumn:
                    this.globalObj.tableau.incrementalExtractColumn,
                  versionNumber: this.globalObj.tableau.versionNumber,
                  locale: this.globalObj.tableau.locale,
                  authPurpose: this.globalObj.tableau.authPurpose,
                  platformOS: this.globalObj.tableau.platformOS,
                  platformVersion: this.globalObj.tableau.platformVersion,
                  platformEdition: this.globalObj.tableau.platformEdition,
                  platformBuildNumber:
                    this.globalObj.tableau.platformBuildNumber,
                };
              }),
              (i.prototype._applyPropertyValues = function (t) {
                t &&
                  ((this.globalObj.tableau.connectionName = t.connectionName),
                  (this.globalObj.tableau.connectionData = t.connectionData),
                  (this.globalObj.tableau.password = t.password),
                  (this.globalObj.tableau.username = t.username),
                  (this.globalObj.tableau.usernameAlias = t.usernameAlias),
                  (this.globalObj.tableau.incrementalExtractColumn =
                    t.incrementalExtractColumn),
                  (this.globalObj.tableau.locale = t.locale),
                  (this.globalObj.tableau.language = t.locale),
                  (this.globalObj.tableau.authPurpose = t.authPurpose),
                  (this.globalObj.tableau.platformOS = t.platformOS),
                  (this.globalObj.tableau.platformVersion = t.platformVersion),
                  (this.globalObj.tableau.platformEdition = t.platformEdition),
                  (this.globalObj.tableau.platformBuildNumber =
                    t.platformBuildNumber));
              }),
              (i.prototype._buildMessagePayload = function (t, e, a) {
                var n = { msgName: t, msgData: e, props: a, version: "2.2.2" };
                return JSON.stringify(n);
              }),
              (i.prototype._sendMessage = function (t, e) {
                var a = this._buildMessagePayload(
                  t,
                  e,
                  this._packagePropertyValues()
                );
                if (
                  void 0 !== this.globalObj.webkit &&
                  void 0 !== this.globalObj.webkit.messageHandlers &&
                  void 0 !== this.globalObj.webkit.messageHandlers.wdcHandler
                )
                  this.globalObj.webkit.messageHandlers.wdcHandler.postMessage(
                    a
                  );
                else {
                  if (!this._sourceWindow)
                    throw "Looks like the WDC is calling a tableau function before tableau.init() has been called.";
                  this._sourceWindow.postMessage(a, this._sourceOrigin);
                }
              }),
              (i.prototype._getPayloadObj = function (t) {
                var e = null;
                try {
                  e = JSON.parse(t);
                } catch (t) {
                  return null;
                }
                return e;
              }),
              (i.prototype._getWebSecurityWarningConfirm = function () {
                var t = this._sourceOrigin,
                  e = new (a(18))(t).host();
                if (["localhost", "tableau.github.io"].indexOf(e) >= 0)
                  return !0;
                if (e && e.endsWith("online.tableau.com")) return !0;
                if (n.getApprovedOrigins().indexOf(t) >= 0)
                  return (
                    console.log(
                      "Already approved the origin'" + t + "', not asking again"
                    ),
                    !0
                  );
                var i = this._getLocalizedString("webSecurityWarning"),
                  r = confirm(i + "\n\n" + e + "\n");
                return r && n.addApprovedOrigin(t), r;
              }),
              (i.prototype._getCurrentLocale = function () {
                var t = navigator.language || navigator.userLanguage,
                  e = t ? t.substring(0, 2) : "en";
                return (
                  ["de", "en", "es", "fr", "ja", "ko", "pt", "zh"].indexOf(e) <
                    0 && (e = "en"),
                  e
                );
              }),
              (i.prototype._getLocalizedString = function (t) {
                var e = this._getCurrentLocale(),
                  n = a(10),
                  i = a(11),
                  r = a(12),
                  o = a(14);
                return {
                  de: n,
                  en: i,
                  es: r,
                  fr: a(13),
                  ja: o,
                  ko: a(15),
                  pt: a(16),
                  zh: a(17),
                }[e][t];
              }),
              (i.prototype._receiveMessage = function (t) {
                if ((console.log("Received message!"), !this.globalObj._wdc))
                  throw "No WDC registered. Did you forget to call tableau.registerConnector?";
                var e = this._getPayloadObj(t.data);
                if (e) {
                  this._sourceWindow ||
                    ((this._sourceWindow = t.source),
                    (this._sourceOrigin = t.origin));
                  var a = e.msgData;
                  switch ((this._applyPropertyValues(e.props), e.msgName)) {
                    case "init":
                      this._getWebSecurityWarningConfirm()
                        ? ((this.globalObj.tableau.phase = a.phase),
                          this.globalObj._tableau.triggerInitialization())
                        : window.close();
                      break;
                    case "shutdown":
                      this.globalObj._tableau.triggerShutdown();
                      break;
                    case "getSchema":
                      this.globalObj._tableau.triggerSchemaGathering();
                      break;
                    case "getData":
                      this.globalObj._tableau.triggerDataGathering(
                        a.tablesAndIncrementValues
                      );
                  }
                }
              }),
              (i.prototype._initPublicInterface = function () {
                console.log("Initializing public interface"),
                  (this._submitCalled = !1);
                var t = {};
                (t.abortForAuth = this._abortForAuth.bind(this)),
                  (t.abortWithError = this._abortWithError.bind(this)),
                  (t.addCrossOriginException =
                    this._addCrossOriginException.bind(this)),
                  (t.log = this._log.bind(this)),
                  (t.reportProgress = this._reportProgress.bind(this)),
                  (t.submit = this._submit.bind(this)),
                  (this.publicInterface = t);
              }),
              (i.prototype._abortForAuth = function (t) {
                this._sendMessage("abortForAuth", { msg: t });
              }),
              (i.prototype._abortWithError = function (t) {
                this._sendMessage("abortWithError", { errorMsg: t });
              }),
              (i.prototype._addCrossOriginException = function (t) {
                console.log(
                  "Cross Origin Exception requested in the simulator. Pretending to work."
                ),
                  setTimeout(
                    function () {
                      this.globalObj._wdc.addCrossOriginExceptionCompleted(t);
                    }.bind(this),
                    0
                  );
              }),
              (i.prototype._log = function (t) {
                this._sendMessage("log", { logMsg: t });
              }),
              (i.prototype._reportProgress = function (t) {
                this._sendMessage("reportProgress", { progressMsg: t });
              }),
              (i.prototype._submit = function () {
                this._sendMessage("submit");
              }),
              (i.prototype._initPrivateInterface = function () {
                console.log("Initializing private interface");
                var t = {};
                (t._initCallback = this._initCallback.bind(this)),
                  (t._shutdownCallback = this._shutdownCallback.bind(this)),
                  (t._schemaCallback = this._schemaCallback.bind(this)),
                  (t._tableDataCallback = this._tableDataCallback.bind(this)),
                  (t._dataDoneCallback = this._dataDoneCallback.bind(this)),
                  (this.privateInterface = t);
              }),
              (i.prototype._initCallback = function () {
                this._sendMessage("initCallback");
              }),
              (i.prototype._shutdownCallback = function () {
                this._sendMessage("shutdownCallback");
              }),
              (i.prototype._schemaCallback = function (t, e) {
                this._sendMessage("_schemaCallback", {
                  schema: t,
                  standardConnections: e || [],
                });
              }),
              (i.prototype._tableDataCallback = function (t, e) {
                this._sendMessage("_tableDataCallback", {
                  tableName: t,
                  data: e,
                });
              }),
              (i.prototype._dataDoneCallback = function () {
                this._sendMessage("_dataDoneCallback");
              }),
              (t.exports = i);
          },
          function (t, e) {
            function a(t, e, a, n, i, r) {
              (this.tableInfo = t),
                (this.incrementValue = e || ""),
                (this.isJoinFiltered = a),
                (this.filterColumnId = n),
                (this.filterValues = i),
                (this._dataCallbackFn = r),
                (this.appendRows = this._appendRows.bind(this));
            }
            (a.prototype._appendRows = function (t) {
              t
                ? Array.isArray(t)
                  ? this._dataCallbackFn(this.tableInfo.id, t)
                  : console.warn(
                      "Table.appendRows must take an array of arrays or array of objects"
                    )
                : console.warn("rows data is null or undefined");
            }),
              (t.exports = a);
          },
          function (t, e) {
            (t.exports.copyFunctions = function (t, e) {
              for (var a in t) "function" == typeof t[a] && (e[a] = t[a]);
            }),
              (t.exports.linkObjectProperties = function (t, e, a) {
                a.forEach(function (a) {
                  Object.defineProperty(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      return t[a];
                    },
                    set: function (e) {
                      return (t[a] = e);
                    },
                  });
                });
              }),
              (t.exports.tableauProperties = [
                "authPurpose",
                "authType",
                "connectionData",
                "connectionName",
                "language",
                "locale",
                "logLevel",
                "password",
                "phase",
                "platformBuildNumber",
                "platformEdition",
                "platformOs",
                "platformVersion",
                "propertiesReady",
                "scriptVersion",
                "username",
                "usernameAlias",
                "APIVersion",
              ]);
          },
          function (t, e) {
            String.prototype.endsWith ||
              (function () {
                "use strict";
                var t = (function () {
                    try {
                      var t = {},
                        e = Object.defineProperty,
                        a = e(t, t, t) && e;
                    } catch (t) {}
                    return a;
                  })(),
                  e = {}.toString,
                  a = function (t) {
                    if (null == this) throw TypeError();
                    var a = String(this);
                    if (t && "[object RegExp]" == e.call(t)) throw TypeError();
                    var n = a.length,
                      i = String(t),
                      r = i.length,
                      o = n;
                    if (arguments.length > 1) {
                      var s = arguments[1];
                      void 0 !== s && (o = s ? Number(s) : 0) != o && (o = 0);
                    }
                    var l = Math.min(Math.max(o, 0), n),
                      c = l - r;
                    if (c < 0) return !1;
                    for (var u = -1; ++u < r; )
                      if (a.charCodeAt(c + u) != i.charCodeAt(u)) return !1;
                    return !0;
                  };
                t
                  ? t(String.prototype, "endsWith", {
                      value: a,
                      configurable: !0,
                      writable: !0,
                    })
                  : (String.prototype.endsWith = a);
              })();
          },
          function (t, e, a) {
            var n;
            !(function (i, r) {
              "use strict";
              var o = function (t) {
                  if ("object" != typeof t.document)
                    throw new Error(
                      "Cookies.js requires a `window` with a `document` object"
                    );
                  var e = function (t, a, n) {
                    return 1 === arguments.length ? e.get(t) : e.set(t, a, n);
                  };
                  return (
                    (e._document = t.document),
                    (e._cacheKeyPrefix = "cookey."),
                    (e._maxExpireDate = new Date(
                      "Fri, 31 Dec 9999 23:59:59 UTC"
                    )),
                    (e.defaults = { path: "/", secure: !1 }),
                    (e.get = function (t) {
                      e._cachedDocumentCookie !== e._document.cookie &&
                        e._renewCache();
                      var a = e._cache[e._cacheKeyPrefix + t];
                      return a === r ? r : decodeURIComponent(a);
                    }),
                    (e.set = function (t, a, n) {
                      return (
                        ((n = e._getExtendedOptions(n)).expires =
                          e._getExpiresDate(a === r ? -1 : n.expires)),
                        (e._document.cookie = e._generateCookieString(t, a, n)),
                        e
                      );
                    }),
                    (e.expire = function (t, a) {
                      return e.set(t, r, a);
                    }),
                    (e._getExtendedOptions = function (t) {
                      return {
                        path: (t && t.path) || e.defaults.path,
                        domain: (t && t.domain) || e.defaults.domain,
                        expires: (t && t.expires) || e.defaults.expires,
                        secure:
                          t && t.secure !== r ? t.secure : e.defaults.secure,
                      };
                    }),
                    (e._isValidDate = function (t) {
                      return (
                        "[object Date]" === Object.prototype.toString.call(t) &&
                        !isNaN(t.getTime())
                      );
                    }),
                    (e._getExpiresDate = function (t, a) {
                      if (
                        ((a = a || new Date()),
                        "number" == typeof t
                          ? (t =
                              t === 1 / 0
                                ? e._maxExpireDate
                                : new Date(a.getTime() + 1e3 * t))
                          : "string" == typeof t && (t = new Date(t)),
                        t && !e._isValidDate(t))
                      )
                        throw new Error(
                          "`expires` parameter cannot be converted to a valid Date instance"
                        );
                      return t;
                    }),
                    (e._generateCookieString = function (t, e, a) {
                      var n =
                        (t = (t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent))
                          .replace(/\(/g, "%28")
                          .replace(/\)/g, "%29")) +
                        "=" +
                        (e = (e + "").replace(
                          /[^!#$&-+\--:<-\[\]-~]/g,
                          encodeURIComponent
                        ));
                      return (
                        (n += (a = a || {}).path ? ";path=" + a.path : ""),
                        (n += a.domain ? ";domain=" + a.domain : ""),
                        (n += a.expires
                          ? ";expires=" + a.expires.toUTCString()
                          : "") + (a.secure ? ";secure" : "")
                      );
                    }),
                    (e._getCacheFromString = function (t) {
                      for (
                        var a = {}, n = t ? t.split("; ") : [], i = 0;
                        i < n.length;
                        i++
                      ) {
                        var o = e._getKeyValuePairFromCookieString(n[i]);
                        a[e._cacheKeyPrefix + o.key] === r &&
                          (a[e._cacheKeyPrefix + o.key] = o.value);
                      }
                      return a;
                    }),
                    (e._getKeyValuePairFromCookieString = function (t) {
                      var e = t.indexOf("=");
                      e = e < 0 ? t.length : e;
                      var a,
                        n = t.substr(0, e);
                      try {
                        a = decodeURIComponent(n);
                      } catch (t) {
                        console &&
                          "function" == typeof console.error &&
                          console.error(
                            'Could not decode cookie with key "' + n + '"',
                            t
                          );
                      }
                      return { key: a, value: t.substr(e + 1) };
                    }),
                    (e._renewCache = function () {
                      (e._cache = e._getCacheFromString(e._document.cookie)),
                        (e._cachedDocumentCookie = e._document.cookie);
                    }),
                    (e._areEnabled = function () {
                      var t = "cookies.js",
                        a = "1" === e.set(t, 1).get(t);
                      return e.expire(t), a;
                    }),
                    (e.enabled = e._areEnabled()),
                    e
                  );
                },
                s = i && "object" == typeof i.document ? o(i) : o;
              (n = function () {
                return s;
              }.call(e, a, e, t)) === r || (t.exports = n);
            })("undefined" == typeof window ? this : window);
          },
          function (t, e) {
            t.exports = {
              webSecurityWarning:
                "To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:",
            };
          },
          function (t, e) {
            t.exports = {
              webSecurityWarning:
                "To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:",
            };
          },
          function (t, e) {
            t.exports = {
              webSecurityWarning:
                "To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:",
            };
          },
          function (t, e) {
            t.exports = {
              webSecurityWarning:
                "To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:",
            };
          },
          function (t, e) {
            t.exports = {
              webSecurityWarning:
                "To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:",
            };
          },
          function (t, e) {
            t.exports = {
              webSecurityWarning:
                "To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:",
            };
          },
          function (t, e) {
            t.exports = {
              webSecurityWarning:
                "To help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:",
            };
          },
          function (t, e) {
            t.exports = {
              webSecurityWarning:
                "wwTo help prevent malicious sites from getting access to your confidential data, confirm that you trust the following site:",
            };
          },
          function (t, e, a) {
            var n;
            !(function (i) {
              var r = {
                starts_with_slashes: /^\/+/,
                ends_with_slashes: /\/+$/,
                pluses: /\+/g,
                query_separator: /[&;]/,
                uri_parser:
                  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@]*))?)?@)?(\[[0-9a-fA-F:.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?(:)?)((((?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
              };
              function o(t) {
                return (
                  t &&
                    ((t = t.toString().replace(r.pluses, "%20")),
                    (t = decodeURIComponent(t))),
                  t
                );
              }
              function s(t) {
                var e,
                  a,
                  n,
                  i,
                  s,
                  l,
                  c,
                  u = [];
                if (null == t || "" === t) return u;
                for (
                  0 === t.indexOf("?") && (t = t.substring(1)),
                    e = 0,
                    c = (a = t.toString().split(r.query_separator)).length;
                  e < c;
                  e++
                )
                  0 !== (i = (n = a[e]).indexOf("=")) &&
                    ((s = o(n.substring(0, i))),
                    (l = o(n.substring(i + 1))),
                    u.push(-1 === i ? [n, null] : [s, l]));
                return u;
              }
              function l(t) {
                (this.uriParts = (function (t) {
                  var e = r.uri_parser.exec(t || ""),
                    a = {};
                  return (
                    [
                      "source",
                      "protocol",
                      "authority",
                      "userInfo",
                      "user",
                      "password",
                      "host",
                      "port",
                      "isColonUri",
                      "relative",
                      "path",
                      "directory",
                      "file",
                      "query",
                      "anchor",
                    ].forEach(function (t, n) {
                      a[t] = e[n] || "";
                    }),
                    a
                  );
                })(t)),
                  (this.queryPairs = s(this.uriParts.query)),
                  (this.hasAuthorityPrefixUserPref = null);
              }
              Array.prototype.forEach ||
                (Array.prototype.forEach = function (t, e) {
                  var a, n;
                  if (null == this)
                    throw new TypeError(" this is null or not defined");
                  var i = Object(this),
                    r = i.length >>> 0;
                  if ("function" != typeof t)
                    throw new TypeError(t + " is not a function");
                  for (arguments.length > 1 && (a = e), n = 0; n < r; ) {
                    var o;
                    n in i && ((o = i[n]), t.call(a, o, n, i)), n++;
                  }
                }),
                [
                  "protocol",
                  "userInfo",
                  "host",
                  "port",
                  "path",
                  "anchor",
                ].forEach(function (t) {
                  l.prototype[t] = function (e) {
                    return (
                      void 0 !== e && (this.uriParts[t] = e), this.uriParts[t]
                    );
                  };
                }),
                (l.prototype.hasAuthorityPrefix = function (t) {
                  return (
                    void 0 !== t && (this.hasAuthorityPrefixUserPref = t),
                    null === this.hasAuthorityPrefixUserPref
                      ? -1 !== this.uriParts.source.indexOf("//")
                      : this.hasAuthorityPrefixUserPref
                  );
                }),
                (l.prototype.isColonUri = function (t) {
                  if (void 0 === t) return !!this.uriParts.isColonUri;
                  this.uriParts.isColonUri = !!t;
                }),
                (l.prototype.query = function (t) {
                  var e,
                    a,
                    n,
                    i = "";
                  for (
                    void 0 !== t && (this.queryPairs = s(t)),
                      e = 0,
                      n = this.queryPairs.length;
                    e < n;
                    e++
                  )
                    (a = this.queryPairs[e]),
                      i.length > 0 && (i += "&"),
                      null === a[1]
                        ? (i += a[0])
                        : ((i += a[0]),
                          (i += "="),
                          void 0 !== a[1] && (i += encodeURIComponent(a[1])));
                  return i.length > 0 ? "?" + i : i;
                }),
                (l.prototype.getQueryParamValue = function (t) {
                  var e, a, n;
                  for (a = 0, n = this.queryPairs.length; a < n; a++)
                    if (t === (e = this.queryPairs[a])[0]) return e[1];
                }),
                (l.prototype.getQueryParamValues = function (t) {
                  var e,
                    a,
                    n,
                    i = [];
                  for (e = 0, n = this.queryPairs.length; e < n; e++)
                    t === (a = this.queryPairs[e])[0] && i.push(a[1]);
                  return i;
                }),
                (l.prototype.deleteQueryParam = function (t, e) {
                  var a,
                    n,
                    i,
                    r,
                    s,
                    l = [];
                  for (a = 0, s = this.queryPairs.length; a < s; a++)
                    (i = o((n = this.queryPairs[a])[0]) === o(t)),
                      (r = n[1] === e),
                      ((1 !== arguments.length || i) &&
                        (2 !== arguments.length || (i && r))) ||
                        l.push(n);
                  return (this.queryPairs = l), this;
                }),
                (l.prototype.addQueryParam = function (t, e, a) {
                  return (
                    3 === arguments.length && -1 !== a
                      ? ((a = Math.min(a, this.queryPairs.length)),
                        this.queryPairs.splice(a, 0, [t, e]))
                      : arguments.length > 0 && this.queryPairs.push([t, e]),
                    this
                  );
                }),
                (l.prototype.hasQueryParam = function (t) {
                  var e,
                    a = this.queryPairs.length;
                  for (e = 0; e < a; e++)
                    if (this.queryPairs[e][0] == t) return !0;
                  return !1;
                }),
                (l.prototype.replaceQueryParam = function (t, e, a) {
                  var n,
                    i,
                    r = -1,
                    s = this.queryPairs.length;
                  if (3 === arguments.length) {
                    for (n = 0; n < s; n++)
                      if (
                        o((i = this.queryPairs[n])[0]) === o(t) &&
                        decodeURIComponent(i[1]) === o(a)
                      ) {
                        r = n;
                        break;
                      }
                    r >= 0 &&
                      this.deleteQueryParam(t, o(a)).addQueryParam(t, e, r);
                  } else {
                    for (n = 0; n < s; n++)
                      if (o((i = this.queryPairs[n])[0]) === o(t)) {
                        r = n;
                        break;
                      }
                    this.deleteQueryParam(t), this.addQueryParam(t, e, r);
                  }
                  return this;
                }),
                [
                  "protocol",
                  "hasAuthorityPrefix",
                  "isColonUri",
                  "userInfo",
                  "host",
                  "port",
                  "path",
                  "query",
                  "anchor",
                ].forEach(function (t) {
                  var e = "set" + t.charAt(0).toUpperCase() + t.slice(1);
                  l.prototype[e] = function (e) {
                    return this[t](e), this;
                  };
                }),
                (l.prototype.scheme = function () {
                  var t = "";
                  return (
                    this.protocol()
                      ? ((t += this.protocol()),
                        this.protocol().indexOf(":") !==
                          this.protocol().length - 1 && (t += ":"),
                        (t += "//"))
                      : this.hasAuthorityPrefix() && this.host() && (t += "//"),
                    t
                  );
                }),
                (l.prototype.origin = function () {
                  var t = this.scheme();
                  return (
                    this.userInfo() &&
                      this.host() &&
                      ((t += this.userInfo()),
                      this.userInfo().indexOf("@") !==
                        this.userInfo().length - 1 && (t += "@")),
                    this.host() &&
                      ((t += this.host()),
                      (this.port() ||
                        (this.path() &&
                          this.path().substr(0, 1).match(/[0-9]/))) &&
                        (t += ":" + this.port())),
                    t
                  );
                }),
                (l.prototype.addTrailingSlash = function () {
                  var t = this.path() || "";
                  return "/" !== t.substr(-1) && this.path(t + "/"), this;
                }),
                (l.prototype.toString = function () {
                  var t,
                    e = this.origin();
                  return (
                    this.isColonUri()
                      ? this.path() && (e += ":" + this.path())
                      : this.path()
                      ? ((t = this.path()),
                        r.ends_with_slashes.test(e) ||
                        r.starts_with_slashes.test(t)
                          ? (e && e.replace(r.ends_with_slashes, "/"),
                            (t = t.replace(r.starts_with_slashes, "/")))
                          : (e += "/"),
                        (e += t))
                      : this.host() &&
                        (this.query().toString() || this.anchor()) &&
                        (e += "/"),
                    this.query().toString() && (e += this.query().toString()),
                    this.anchor() &&
                      (0 !== this.anchor().indexOf("#") && (e += "#"),
                      (e += this.anchor())),
                    e
                  );
                }),
                (l.prototype.clone = function () {
                  return new l(this.toString());
                }),
                void 0 ===
                  (n = function () {
                    return l;
                  }.call(e, a, e, t)) || (t.exports = n);
            })();
          },
          function (t, e, a) {
            "use strict";
            function n(t, e, a) {
              (this.__id__ = t),
                (a.objects[t] = this),
                (this.__objectSignals__ = {}),
                (this.__propertyCache__ = {});
              var i = this;
              function r(t, e) {
                var n = t[0],
                  r = t[1];
                i[n] = {
                  connect: function (t) {
                    "function" == typeof t
                      ? ((i.__objectSignals__[r] =
                          i.__objectSignals__[r] || []),
                        i.__objectSignals__[r].push(t),
                        e ||
                          "destroyed" === n ||
                          a.exec({ type: 7, object: i.__id__, signal: r }))
                      : console.error(
                          "Bad callback given to connect to signal " + n
                        );
                  },
                  disconnect: function (t) {
                    if ("function" == typeof t) {
                      i.__objectSignals__[r] = i.__objectSignals__[r] || [];
                      var o = i.__objectSignals__[r].indexOf(t);
                      -1 !== o
                        ? (i.__objectSignals__[r].splice(o, 1),
                          e ||
                            0 !== i.__objectSignals__[r].length ||
                            a.exec({ type: 8, object: i.__id__, signal: r }))
                        : console.error(
                            "Cannot find connection of signal " +
                              n +
                              " to " +
                              t.name
                          );
                    } else
                      console.error(
                        "Bad callback given to disconnect from signal " + n
                      );
                  },
                };
              }
              function o(t, e) {
                var a = i.__objectSignals__[t];
                a &&
                  a.forEach(function (t) {
                    t.apply(t, e);
                  });
              }
              for (var t in ((this.unwrapQObject = function (t) {
                if (t instanceof Array) {
                  for (var e = new Array(t.length), r = 0; r < t.length; ++r)
                    e[r] = i.unwrapQObject(t[r]);
                  return e;
                }
                if (!t || !t["__QObject*__"] || void 0 === t.id) return t;
                var o = t.id;
                if (a.objects[o]) return a.objects[o];
                if (t.data) {
                  var s = new n(o, t.data, a);
                  return (
                    s.destroyed.connect(function () {
                      if (a.objects[o] === s) {
                        delete a.objects[o];
                        var t = [];
                        for (var e in s) t.push(e);
                        for (var n in t) delete s[t[n]];
                      }
                    }),
                    s.unwrapProperties(),
                    s
                  );
                }
                console.error(
                  "Cannot unwrap unknown QObject " + o + " without data."
                );
              }),
              (this.unwrapProperties = function () {
                for (var t in i.__propertyCache__)
                  i.__propertyCache__[t] = i.unwrapQObject(
                    i.__propertyCache__[t]
                  );
              }),
              (this.propertyUpdate = function (t, e) {
                for (var a in e) {
                  var n = e[a];
                  i.__propertyCache__[a] = n;
                }
                for (var r in t) o(r, t[r]);
              }),
              (this.signalEmitted = function (t, e) {
                o(t, this.unwrapQObject(e));
              }),
              e.methods.forEach(function (t) {
                var e = t[0],
                  r = t[1];
                i[e] = function () {
                  for (var t, e = [], o = 0; o < arguments.length; ++o) {
                    var s = arguments[o];
                    "function" == typeof s
                      ? (t = s)
                      : s instanceof n && void 0 !== a.objects[s.__id__]
                      ? e.push({ id: s.__id__ })
                      : e.push(s);
                  }
                  a.exec(
                    { type: 6, object: i.__id__, method: r, args: e },
                    function (e) {
                      if (void 0 !== e) {
                        var a = i.unwrapQObject(e);
                        t && t(a);
                      }
                    }
                  );
                };
              }),
              e.properties.forEach(function (t) {
                var e = t[0],
                  o = t[1],
                  s = t[2];
                (i.__propertyCache__[e] = t[3]),
                  s && (1 === s[0] && (s[0] = o + "Changed"), r(s, !0)),
                  Object.defineProperty(i, o, {
                    configurable: !0,
                    get: function () {
                      var t = i.__propertyCache__[e];
                      return (
                        void 0 === t &&
                          console.warn(
                            'Undefined value in property cache for property "' +
                              o +
                              '" in object ' +
                              i.__id__
                          ),
                        t
                      );
                    },
                    set: function (t) {
                      if (void 0 !== t) {
                        i.__propertyCache__[e] = t;
                        var r = t;
                        r instanceof n &&
                          void 0 !== a.objects[r.__id__] &&
                          (r = { id: r.__id__ }),
                          a.exec({
                            type: 9,
                            object: i.__id__,
                            property: e,
                            value: r,
                          });
                      } else
                        console.warn(
                          "Property setter for " +
                            o +
                            " called with undefined value!"
                        );
                    },
                  });
              }),
              e.signals.forEach(function (t) {
                r(t, !1);
              }),
              e.enums))
                i[t] = e.enums[t];
            }
            t.exports = {
              QWebChannel: function (t, e) {
                if ("object" == typeof t && "function" == typeof t.send) {
                  var a = this;
                  (this.transport = t),
                    (this.send = function (t) {
                      "string" != typeof t && (t = JSON.stringify(t)),
                        a.transport.send(t);
                    }),
                    (this.transport.onmessage = function (t) {
                      var e = t.data;
                      switch (
                        ("string" == typeof e && (e = JSON.parse(e)), e.type)
                      ) {
                        case 1:
                          a.handleSignal(e);
                          break;
                        case 10:
                          a.handleResponse(e);
                          break;
                        case 2:
                          a.handlePropertyUpdate(e);
                          break;
                        default:
                          console.error("invalid message received:", t.data);
                      }
                    }),
                    (this.execCallbacks = {}),
                    (this.execId = 0),
                    (this.exec = function (t, e) {
                      e
                        ? (a.execId === Number.MAX_VALUE &&
                            (a.execId = Number.MIN_VALUE),
                          t.hasOwnProperty("id")
                            ? console.error(
                                "Cannot exec message with property id: " +
                                  JSON.stringify(t)
                              )
                            : ((t.id = a.execId++),
                              (a.execCallbacks[t.id] = e),
                              a.send(t)))
                        : a.send(t);
                    }),
                    (this.objects = {}),
                    (this.handleSignal = function (t) {
                      var e = a.objects[t.object];
                      e
                        ? e.signalEmitted(t.signal, t.args)
                        : console.warn(
                            "Unhandled signal: " + t.object + "::" + t.signal
                          );
                    }),
                    (this.handleResponse = function (t) {
                      t.hasOwnProperty("id")
                        ? (a.execCallbacks[t.id](t.data),
                          delete a.execCallbacks[t.id])
                        : console.error(
                            "Invalid response message received: ",
                            JSON.stringify(t)
                          );
                    }),
                    (this.handlePropertyUpdate = function (t) {
                      for (var e in t.data) {
                        var n = t.data[e],
                          i = a.objects[n.object];
                        i
                          ? i.propertyUpdate(n.signals, n.properties)
                          : console.warn(
                              "Unhandled property update: " +
                                n.object +
                                "::" +
                                n.signal
                            );
                      }
                      a.exec({ type: 4 });
                    }),
                    (this.debug = function (t) {
                      a.send({ type: 5, data: t });
                    }),
                    a.exec({ type: 3 }, function (t) {
                      for (var i in t) new n(i, t[i], a);
                      for (var i in a.objects) a.objects[i].unwrapProperties();
                      e && e(a), a.exec({ type: 4 });
                    });
                } else
                  console.error(
                    "The QWebChannel expects a transport object with a send function and onmessage callback property. Given is: transport: " +
                      typeof t +
                      ", transport.send: " +
                      typeof t.send
                  );
              },
            };
          },
          function (t, e, a) {
            "use strict";
            var n = a(7),
              i = a(4),
              r = a(3),
              o = a(5),
              s = a(19);
            function l(t, e) {
              n.copyFunctions(t.publicInterface, window.tableau),
                n.copyFunctions(t.privateInterface, window._tableau),
                e.init();
            }
            t.exports.init = function () {
              var t = null,
                e = null;
              (window._tableau = {}),
                window.tableauVersionBootstrap
                  ? (console.log(
                      "Initializing NativeDispatcher, Reporting version number"
                    ),
                    window.tableauVersionBootstrap.ReportVersionNumber("2.2.2"),
                    (t = new r(window)))
                  : window.qt && window.qt.webChannelTransport
                  ? (console.log(
                      "Initializing NativeDispatcher for qwebchannel"
                    ),
                    (window.tableau = {}),
                    (window.channel = new s.QWebChannel(
                      qt.webChannelTransport,
                      function (a) {
                        console.log("QWebChannel created successfully"),
                          (window._tableau._nativeSetupCompleted = function () {
                            (t = new r(a.objects)),
                              n.linkObjectProperties(
                                a.objects.tableau,
                                window.tableau,
                                n.tableauProperties
                              ),
                              e.changeTableauApiObj(window.tableau),
                              l(t, e);
                          }),
                          a.objects.tableauVersionBootstrap.ReportVersionNumber(
                            "2.2.2"
                          );
                      }
                    )))
                  : (console.log(
                      "Version Bootstrap is not defined, Initializing SimulatorDispatcher"
                    ),
                    (window.tableau = {}),
                    (t = new o(window))),
                (e = new i(window.tableau, window._tableau, window)),
                t && l(t, e);
            };
          },
        ]);
      },
      426: (t, e, a) => {
        "use strict";
        a.d(e, { Z: () => s });
        var n = a(81),
          i = a.n(n),
          r = a(645),
          o = a.n(r)()(i());
        o.push([
          t.id,
          "html {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody{\r\n  margin: 0;\r\n}\r\n\r\n.navigation nav{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  background-color: #22cbff;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.navigation nav a {\r\n  text-align: center;\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n  transition: 0.3s;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.project-selector{\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.project-selector select{\r\n  padding: 0.5rem 0.75rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  font-size: 1rem;\r\n}\r\n\r\nh1 {\r\n  margin: 0.25rem 0;\r\n}\r\n\r\n.form-control,\r\n.btn {\r\n  display: block;\r\n  padding: 0.5rem 0.75rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-control {\r\n  width: 100%;\r\n  border: 1px solid gray;\r\n  resize: vertical;\r\n}\r\n\r\n.btn {\r\n  color: white;\r\n  border: 0;\r\n  cursor: pointer;\r\n  padding-right: 4rem;\r\n  padding-left: 4rem;\r\n  transition: 0.3s;\r\n  margin: auto;\r\n  font-size: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.btn-success {\r\n  background-color: #22cbff;\r\n}\r\n\r\n.btn:hover, .navigation nav a:hover {\r\n  transform: scale(1.025);\r\n}\r\n\r\n.card {\r\n  display: none;\r\n  height: 0;\r\n  justify-content: space-between;\r\n  border: 1px solid gray;\r\n  padding: 1.5rem;\r\n  margin: 1rem 0 2rem 0;\r\n  transition: 0.3s;\r\n}\r\n\r\n.card-50 {\r\n  flex-basis: calc(50% - 1rem);\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n  height: auto;\r\n}",
          "",
        ]);
        const s = o;
      },
      645: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var a = "",
                  n = void 0 !== e[5];
                return (
                  e[4] && (a += "@supports (".concat(e[4], ") {")),
                  e[2] && (a += "@media ".concat(e[2], " {")),
                  n &&
                    (a += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (a += t(e)),
                  n && (a += "}"),
                  e[2] && (a += "}"),
                  e[4] && (a += "}"),
                  a
                );
              }).join("");
            }),
            (e.i = function (t, a, n, i, r) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var o = {};
              if (n)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (o[l] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var u = [].concat(t[c]);
                (n && o[u[0]]) ||
                  (void 0 !== r &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = r)),
                  a &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = a))
                      : (u[2] = a)),
                  i &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = i))
                      : (u[4] = "".concat(i))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        "use strict";
        var e = [];
        function a(t) {
          for (var a = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              a = n;
              break;
            }
          return a;
        }
        function n(t, n) {
          for (var r = {}, o = [], s = 0; s < t.length; s++) {
            var l = t[s],
              c = n.base ? l[0] + n.base : l[0],
              u = r[c] || 0,
              p = "".concat(c, " ").concat(u);
            r[c] = u + 1;
            var h = a(p),
              d = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(d);
            else {
              var b = i(d, n);
              (n.byIndex = s),
                e.splice(s, 0, { identifier: p, updater: b, references: 1 });
            }
            o.push(p);
          }
          return o;
        }
        function i(t, e) {
          var a = e.domAPI(e);
          return (
            a.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                a.update((t = e));
              } else a.remove();
            }
          );
        }
        t.exports = function (t, i) {
          var r = n((t = t || []), (i = i || {}));
          return function (t) {
            t = t || [];
            for (var o = 0; o < r.length; o++) {
              var s = a(r[o]);
              e[s].references--;
            }
            for (var l = n(t, i), c = 0; c < r.length; c++) {
              var u = a(r[c]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            r = l;
          };
        };
      },
      569: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, a) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var a = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                a instanceof window.HTMLIFrameElement
              )
                try {
                  a = a.contentDocument.head;
                } catch (t) {
                  a = null;
                }
              e[t] = a;
            }
            return e[t];
          })(t);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(a);
        };
      },
      216: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, a) => {
        "use strict";
        t.exports = function (t) {
          var e = a.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (a) {
              !(function (t, e, a) {
                var n = "";
                a.supports && (n += "@supports (".concat(a.supports, ") {")),
                  a.media && (n += "@media ".concat(a.media, " {"));
                var i = void 0 !== a.layer;
                i &&
                  (n += "@layer".concat(
                    a.layer.length > 0 ? " ".concat(a.layer) : "",
                    " {"
                  )),
                  (n += a.css),
                  i && (n += "}"),
                  a.media && (n += "}"),
                  a.supports && (n += "}");
                var r = a.sourceMap;
                r &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      " */"
                    )),
                  e.styleTagTransform(n, t, e.options);
              })(e, t, a);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function a(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var r = (e[n] = { id: n, exports: {} });
    return t[n](r, r.exports, a), r.exports;
  }
  (a.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return a.d(e, { a: e }), e;
  }),
    (a.d = (t, e) => {
      for (var n in e)
        a.o(e, n) &&
          !a.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      a(949);
      const t = async () => (
          await ((t) => {
            const e = tableau.makeConnector();
            function a(t, e) {
              let a = 0;
              for (; a < e.length; )
                t.appendRows(e.slice(a, 100 + a)),
                  (a += 100),
                  tableau.reportProgress("Getting row: " + a);
            }
            (e.getSchema = (t) => {
              let e,
                a = JSON.parse(tableau.connectionData);
              "funnels" === a.connectionType
                ? (e = [
                    {
                      id: "date",
                      alias: "Date",
                      dataType: tableau.dataTypeEnum.date,
                    },
                    {
                      id: "step",
                      alias: "Step",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "count",
                      alias: "Count",
                      dataType: tableau.dataTypeEnum.int,
                    },
                    {
                      id: "avg_time",
                      alias: "Avg Time",
                      dataType: tableau.dataTypeEnum.int,
                    },
                    {
                      id: "avg_time_from_start",
                      alias: "Avg Time From Start",
                      dataType: tableau.dataTypeEnum.int,
                    },
                    {
                      id: "event",
                      alias: "Event",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "overall_conv_ratio",
                      alias: "Overall Ratio",
                      dataType: tableau.dataTypeEnum.float,
                    },
                    {
                      id: "step_conv_ratio",
                      alias: "Step Ratio",
                      dataType: tableau.dataTypeEnum.float,
                    },
                  ])
                : "insights" === a.connectionType
                ? (e = [
                    {
                      id: "event",
                      alias: "Event",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "segment",
                      alias: "Segment",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "property",
                      alias: "Property",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "subproperty",
                      alias: "Sub Property",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "subsegment",
                      alias: "Sub Segment",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "date",
                      alias: "Date",
                      dataType: tableau.dataTypeEnum.date,
                    },
                    {
                      id: "value",
                      alias: "Value",
                      dataType: tableau.dataTypeEnum.float,
                    },
                  ])
                : "jql" === a.connectionType &&
                  (e = [
                    {
                      id: "result",
                      alias: "Result",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "source",
                      alias: "Source",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "event",
                      alias: "event",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "contract",
                      alias: "contract",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "count_events",
                      alias: "Count events",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "month",
                      alias: "Month",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "id",
                      alias: "id",
                      dataType: tableau.dataTypeEnum.string,
                    },
                    {
                      id: "msisdn",
                      alias: "msisdn",
                      dataType: tableau.dataTypeEnum.string,
                    },
                  ]),
                t([{ id: "Mixpanel_Connector", columns: e }]);
            }),
              (e.getData = (t, e) => {
                let n = JSON.parse(tableau.connectionData),
                  i = n.projectData
                    ? n.projectData.apiKey
                    : "5c6d6a400892cfd05c69821c78bb9be6";
                $.ajaxSetup({
                  beforeSend: (t) => {
                    t.setRequestHeader("Authorization", `Basic ${btoa(i)}:`),
                      t.setRequestHeader("Accept", "application/json");
                  },
                });
                let r,
                  o = n.projectData ? n.projectData.id : 1503585,
                  s = [];
                if ("funnels" === n.connectionType) {
                  let i = new Date(),
                    l = i.getMonth() + 1,
                    c = l - 2,
                    u = i.getFullYear(),
                    p = `from_date=${
                      n.startDate ? n.startDate : `${u}-${c}-01`
                    }&to_date=${
                      n.endDate ? n.endDate : `${u}-${l}-${i.getDate()}`
                    }`;
                  (r = `https://mixpanel.com/api/2.0/funnels?project_id=${o}&funnel_id=${n.queryType}&${p}&unit=month`),
                    $.getJSON(r, (n) => {
                      const i = n.data;
                      for (const t in i)
                        for (const e in i[t])
                          try {
                            i[t][e] &&
                              i[t][e].forEach((a) => {
                                s.push({
                                  date: t,
                                  step: e,
                                  count: a.count,
                                  avg_time: a.avg_time,
                                  avg_time_from_start: a.avg_time_from_start,
                                  event: a.event,
                                  overall_conv_ratio: a.overall_conv_ratio,
                                  step_conv_ratio: a.step_conv_ratio,
                                });
                              });
                          } catch (t) {
                            console.error("error: ", t);
                          }
                      a(t, s), e();
                    });
                } else if ("insights" === n.connectionType) {
                  r = `https://mixpanel.com/api/2.0/insights?project_id=${o}&bookmark_id=${n.queryType}`;
                  const i = [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ];
                  let l = (t, e) => {
                      let a = { value: t, key: e };
                      if (/[A-Z]/g.test(t))
                        if (i.includes(t)) a.key = "date";
                        else {
                          let e = new Date(t);
                          e.getTime() &&
                            ((a.value = e.toLocaleDateString()),
                            (a.key = "date"));
                        }
                      return a;
                    },
                    c = (t) => {
                      for (let e in t)
                        for (let a in t[e])
                          s.push({ event: e, value: t[e][a] });
                    },
                    u = (t) => {
                      for (let e in t)
                        for (let a in t[e])
                          if ("$overall" != a)
                            for (let n in t[e][a]) {
                              let i = l(a, "segment");
                              s.push({
                                event: e,
                                [i.key]: i.value,
                                value: t[e][a][n],
                              });
                            }
                    },
                    p = (t) => {
                      for (let e in t)
                        for (let a in t[e])
                          for (let n in t[e][a])
                            if ("$overall" != n)
                              for (let i in t[e][a][n]) {
                                let r = l(a, "segment"),
                                  o = l(n, "property");
                                s.push({
                                  event: e,
                                  [r.key]: r.value,
                                  [o.key]: o.value,
                                  value: t[e][a][n][i],
                                });
                              }
                    },
                    h = (t) => {
                      for (let e in t)
                        for (let a in t[e])
                          for (let n in t[e][a])
                            for (let i in t[e][a][n])
                              if ("$overall" != i)
                                for (let r in t[e][a][n][i]) {
                                  let o = l(a, "segment"),
                                    c = l(n, "property"),
                                    u = l(i, "subproperty");
                                  s.push({
                                    event: e,
                                    [o.key]: o.value,
                                    [c.key]: c.value,
                                    [u.key]: u.value,
                                    value: t[e][a][n][i][r],
                                  });
                                }
                    },
                    d = (t) => {
                      for (let e in t)
                        for (let a in t[e])
                          for (let n in t[e][a])
                            for (let i in t[e][a][n])
                              for (let r in t[e][a][n][i])
                                if ("$overall" != r)
                                  for (let o in t[e][a][n][i][r]) {
                                    let c = l(a, "segment"),
                                      u = l(n, "property"),
                                      p = l(i, "subproperty"),
                                      h = l(r, "subsegment");
                                    s.push({
                                      event: e,
                                      [c.key]: c.value,
                                      [u.key]: u.value,
                                      [p.key]: p.value,
                                      [h.key]: h.value,
                                      value: t[e][a][n][i][r][o],
                                    });
                                  }
                    };
                  $.getJSON(r, (n) => {
                    let i = n.series,
                      r = (t) => {
                        if (!t || 0 === t.length || "object" != typeof t)
                          return 0;
                        const e = Object.keys(t);
                        let a = 0;
                        return (
                          e.forEach((e) => {
                            let n = r(t[e]);
                            n > a && (a = n);
                          }),
                          a + 1
                        );
                      };
                    switch (r(i)) {
                      case 2:
                        c(i);
                        break;
                      case 3:
                        u(i);
                        break;
                      case 4:
                        p(i);
                        break;
                      case 5:
                        h(i);
                        break;
                      case 6:
                        d(i);
                        break;
                      default:
                        console.log("Algo ha salido mal.");
                    }
                    a(t, s), e();
                  });
                } else if ("jql" === n.connectionType) {
                  r = `https://mixpanel.com/api/2.0/jql?project_id=${o}`;
                  try {
                    $.post(r, { script: n.queryType }, (a) => {
                      console.log(a), t.appendRows(a), e();
                    });
                  } catch (t) {
                    console.error(t);
                  }
                }
              }),
              tableau.registerConnector(e),
              $(document).ready(() => {
                $("#submitButton").click(() => {
                  let e;
                  if (
                    ("funnels" === t
                      ? (e = {
                          queryType: $("#query_id").val().trim(),
                          startDate: $("#initial_date").val().trim(),
                          endDate: $("#final_date").val().trim(),
                        })
                      : ("insights" !== t && "jql" !== t) ||
                        (e = { queryType: $("#query_id").val().trim() }),
                    e.queryType)
                  ) {
                    let a;
                    switch (
                      ((e.connectionType = t),
                      $("#mixpanel_project").val().trim())
                    ) {
                      case "gateway":
                        a = {
                          id: 1495597,
                          apiKey: "8aabd740ab8454ea0c6de851e88ba0f4",
                        };
                        break;
                      case "mitigo":
                        a = {
                          id: 1495617,
                          apiKey: "aaa9a6846a332431ea6fcbb404852883",
                        };
                        break;
                      default:
                        a = {
                          id: 1503585,
                          apiKey: "5c6d6a400892cfd05c69821c78bb9be6",
                        };
                    }
                    (e.projectData = a),
                      (tableau.connectionData = JSON.stringify(e)),
                      (tableau.connectionName = "Mixpanel_Connector"),
                      tableau.submit();
                  } else $("#errorMsg").html("ID is required");
                });
              });
          })("insights"),
          '\n    <h1>Get Mixpanel Data for an Insight ID</h1>\n    <div>\n        <label for="query_id" class="form-label">Insight ID</label>\n        <input type="text" class="form-control" id="query_id" />\n        <div id="errorMsg" class="text-danger"></div>\n    </div>\n    '
        ),
        e = { "/index.html": t };
      var n = a(379),
        i = a.n(n),
        r = a(795),
        o = a.n(r),
        s = a(569),
        l = a.n(s),
        c = a(565),
        u = a.n(c),
        p = a(216),
        h = a.n(p),
        d = a(589),
        b = a.n(d),
        f = a(426),
        g = {};
      (g.styleTagTransform = b()),
        (g.setAttributes = u()),
        (g.insert = l().bind(null, "head")),
        (g.domAPI = o()),
        (g.insertStyleElement = h()),
        i()(f.Z, g),
        f.Z && f.Z.locals && f.Z.locals,
        window.addEventListener("load", async () => {
          const a = document.getElementById("connector");
          let n = await ("/" +
            (location.pathname.split("/").pop().toLowerCase() || ""));
          setTimeout(async () => {
            try {
              let t = JSON.parse(tableau.connectionData),
                n = e[`/${t.connectionType}`];
              a.innerHTML = await n();
            } catch (i) {
              let r = e[n] ? e[n] : t;
              a.innerHTML = await r();
            }
          }, 100);
        });
    })();
})();
