/* ================================================================
   REACT DOM v19.2.0-canary-0bdb9206-20250818
   Production Build (Minified)
   ================================================================ */

(function(global, factory) {
  // Webpack chunk registration
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[441], {
    9248: function(e, n, t) {
      // ... kode React DOM
    }
  }]);
})(window, function() {
  // ... isi
});

/* ================================================================
   1. MODULE IMPORTS & DEPENDENCIES
   ================================================================ */

var r, l = t(7358),    // React internal
    a = t(5009),       // Scheduler
    o = t(2115),       // React shared internals
    u = t(7650);       // DOM internals

/* ================================================================
   2. CORE REACT ERROR HANDLING
   ================================================================ */

/**
 * Menghasilkan pesan error minified React
 * Format: "Minified React error #XXX; visit https://react.dev/errors/XXX"
 */
function i(e) {
  var n = "https://react.dev/errors/" + e;
  if (1 < arguments.length) {
    n += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var t = 2; t < arguments.length; t++) {
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    }
  }
  return "Minified React error #" + e + "; visit " + n +
    " for the full message or use the non-minified dev environment " +
    "for full errors and additional helpful warnings.";
}

/* ================================================================
   3. FIBER NODE UTILITIES
   ================================================================ */

/**
 * Cek apakah node adalah DOM node (ELEMENT, DOCUMENT, DOCUMENT_FRAGMENT)
 */
function s(e) {
  return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType);
}

/**
 * Mendapatkan fiber root dari node
 */
function c(e) {
  var n = e,
      t = e;
  if (e.alternate) {
    for (; n.return; ) n = n.return;
  } else {
    e = n;
    do {
      if (0 != (4098 & (n = e).flags)) t = n.return;
      e = n.return;
    } while (e);
  }
  return 3 === n.tag ? t : null;
}

/**
 * Cek apakah fiber adalah Suspense (tag 13)
 */
function f(e) {
  if (13 === e.tag) {
    var n = e.memoizedState;
    if (null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n)
      return n.dehydrated;
  }
  return null;
}

/**
 * Cek apakah fiber adalah Activity (tag 31)
 */
function d(e) {
  if (31 === e.tag) {
    var n = e.memoizedState;
    if (null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n)
      return n.dehydrated;
  }
  return null;
}

/**
 * Memastikan fiber root valid
 */
function p(e) {
  if (c(e) !== e) throw Error(i(188));
}

/* ================================================================
   4. REACT SYMBOLS
   ================================================================ */

var m = Object.assign;

var h = Symbol.for("react.element"),
    g = Symbol.for("react.transitional.element"),
    y = Symbol.for("react.portal"),
    v = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    k = Symbol.for("react.profiler"),
    w = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    E = Symbol.for("react.suspense"),
    z = Symbol.for("react.suspense_list"),
    C = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    N = Symbol.for("react.activity"),
    L = Symbol.for("react.memo_cache_sentinel");

var T = Symbol.iterator;

/**
 * Mendapatkan iterator dari objek
 */
function _(e) {
  return null === e || "object" != typeof e ?
    null :
    "function" == typeof (e = T && e[T] || e["@@iterator"]) ? e : null;
}

var F = Symbol.for("react.client.reference"),
    D = Array.isArray,
    O = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

/* ================================================================
   5. CONTEXT STACK (React Current Dispatcher)
   ================================================================ */

var A = { pending: !1, data: null, method: null, action: null },
    R = [],
    I = -1;

function U(e) { return { current: e }; }

function $(e) {
  0 > I || (e.current = R[I], R[I] = null, I--);
}

function j(e, n) {
  R[++I] = e.current;
  e.current = n;
}

// Context stacks
var V = U(null),   // namespace context
    H = U(null),   // fiber context
    Q = U(null),   // root context
    B = U(null);   // state context

/* ================================================================
   6. NAMESPACE HANDLING (SVG, MathML, HTML)
   ================================================================ */

function W(e, n) {
  // Push namespace context
  j(Q, n);
  j(H, e);
  j(V, null);

  switch (n.nodeType) {
    case 9: // DOCUMENT
    case 11: // DOCUMENT_FRAGMENT
      e = (e = n.documentElement) && (e = e.namespaceURI) ? sg(e) : 0;
      break;
    default:
      e = n.tagName;
      n = n.namespaceURI;
      e = sy(n = sg(n), e);
      break;
  }

  $(V);
  j(V, e);
}

function q() {
  $(V);
  $(H);
  $(Q);
}

function K(e) {
  null !== e.memoizedState && j(B, e);
  var n = V.current,
      t = sy(n, e.type);
  n !== t && (j(H, e), j(V, t));
}

function Y(e) {
  H.current === e && ($(V), $(H));
  B.current === e && ($(B), s7._currentValue = A);
}

/* ================================================================
   7. STACK TRACE GENERATION
   ================================================================ */

// ... (kode untuk generate stack trace dari error)

/* ================================================================
   8. SCHEDULER & PRIORITY
   ================================================================ */

var en = a.unstable_scheduleCallback,
    et = a.unstable_cancelCallback,
    er = a.unstable_shouldYield,
    el = a.unstable_requestPaint,
    ea = a.unstable_now,
    eo = a.unstable_getCurrentPriorityLevel,
    eu = a.unstable_ImmediatePriority,
    ei = a.unstable_UserBlockingPriority,
    es = a.unstable_NormalPriority,
    ec = a.unstable_LowPriority,
    ef = a.unstable_IdlePriority,
    ed = a.log,
    ep = a.unstable_setDisableYieldValue,
    em = null,
    eh = null;

function eg(e) {
  if ("function" == typeof ed && ep(e),
    eh && "function" == typeof eh.setStrictMode) {
    try { eh.setStrictMode(em, e); } catch (e) {}
  }
}

/* ================================================================
   9. LANE MATH (Priority System)
   ================================================================ */

/**
 * React menggunakan "lanes" untuk priority
 * 32 lane system dengan bitmask
 */
var ey = Math.clz32 ? Math.clz32 : function(e) {
  return 0 == (e >>>= 0) ? 32 : 31 - (ev(e) / eb | 0) | 0;
};

var ev = Math.log,
    eb = Math.LN2,
    ek = 256,
    ew = 4194304;

/**
 * Mendapatkan lane tertinggi dari bitmask
 */
function eS(e) {
  var n = 42 & e;
  if (0 !== n) return n;

  switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64: return 64;
    case 128: return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194048 & e;
    case 4194304:
    case 8388608:
    case 0x1000000:
    case 0x2000000:
      return 0x3c00000 & e;
    case 0x4000000: return 0x4000000;
    case 0x8000000: return 0x8000000;
    case 0x10000000: return 0x10000000;
    case 0x20000000: return 0x20000000;
    case 0x40000000: return 0;
    default: return e;
  }
}

/* ================================================================
   10. FIBER CREATION
   ================================================================ */

/**
 * Konstruktor Fiber Node
 */
function rn(e, n, t, r) {
  this.tag = e;
  this.key = t;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = n;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = r;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}

function rt(e, n, t, r) {
  return new rn(e, n, t, r);
}

/**
 * Clone fiber (untuk reconciliation)
 */
function rl(e, n) {
  var t = e.alternate;
  if (null === t) {
    t = rt(e.tag, n, e.key, e.mode);
    t.elementType = e.elementType;
    t.type = e.type;
    t.stateNode = e.stateNode;
    t.alternate = e;
    e.alternate = t;
  } else {
    t.pendingProps = n;
    t.type = e.type;
    t.flags = 0;
    t.subtreeFlags = 0;
    t.deletions = null;
  }

  t.flags = 0x3e00000 & e.flags;
  t.childLanes = e.childLanes;
  t.lanes = e.lanes;
  t.child = e.child;
  t.memoizedProps = e.memoizedProps;
  t.memoizedState = e.memoizedState;
  t.updateQueue = e.updateQueue;

  var r = e.dependencies;
  t.dependencies = null === r ? null : {
    lanes: r.lanes,
    firstContext: r.firstContext
  };

  t.sibling = e.sibling;
  t.index = e.index;
  t.ref = e.ref;
  t.refCleanup = e.refCleanup;

  return t;
}

/* ================================================================
   11. ELEMENT CREATION (React.createElement)
   ================================================================ */

function ro(e, n, t, r, l, a) {
  var o = 0;

  if (r = e, "function" == typeof e) {
    // Class component detection
    rr(e) && (o = 1);
  } else if ("string" == typeof e) {
    // HTML element
    o = !function(e, n, t) {
      // Cek apakah ini hoistable element (meta, title, link, script, style)
      if (1 === t || null != n.itemProp) return !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if ("string" != typeof n.precedence || "string" != typeof n.href || "" === n.href) break;
          return !0;
        case "link":
          if ("string" != typeof n.rel || "string" != typeof n.href || "" === n.href || n.onLoad || n.onError)
            break;
          if ("stylesheet" === n.rel) {
            var r = n.disabled;
            return "string" == typeof n.precedence && null == r;
          }
          return !0;
        case "script":
          if (n.async && "function" != typeof n.async && "symbol" != typeof n.async &&
            !n.onLoad && !n.onError && n.src && "string" == typeof n.src) {
            return !0;
          }
          return !1;
      }
      return !1;
    }(e, t, V.current) ? "html" === e || "head" === e || "body" === e ? 27 : 5 : 26;
  } else {
    // React component types
    switch (e) {
      case N:
        return (e = rt(31, t, n, l)).elementType = N, e.lanes = a, e;
      case v:
        return ru(t.children, l, a, n);
      case b:
        o = 8, l |= 24;
        break;
      case k:
        return (e = rt(12, t, n, 2 | l)).elementType = k, e.lanes = a, e;
      case E:
        return (e = rt(13, t, n, l)).elementType = E, e.lanes = a, e;
      case z:
        return (e = rt(19, t, n, l)).elementType = z, e.lanes = a, e;
      default:
        if ("object" == typeof e && null !== e) {
          switch (e.$$typeof) {
            case S:
              o = 10;
              break;
            case w:
              o = 9;
              break;
            case x:
              o = 11;
              break;
            case C:
              o = 14;
              break;
            case P:
              o = 16, r = null;
              break;
            default:
              o = 29;
              t = Error(i(130, null === e ? "null" : typeof e, ""));
              r = null;
          }
        } else {
          o = 29;
          t = Error(i(130, null === e ? "null" : typeof e, ""));
          r = null;
        }
    }
  }

  return (n = rt(o, t, n, l)).elementType = e, n.type = r, n.lanes = a, n;
}

/* ================================================================
   12. RECONCILIATION (Diffing)
   ================================================================ */

// Ada 2 mode reconciliation:
// - lw = dengan key tracking (true)
// - lS = tanpa key tracking (false)

var lw = lk(!0),   // dengan key
    lS = lk(!1);   // tanpa key

/**
 * Fungsi reconciliation utama
 * Membandingkan fiber lama dengan elemen baru
 */
function lk(e) {
  // ... fungsi reconciliation dengan atau tanpa key
  // (di-minify jadi sulit dibaca)
}

/* ================================================================
   13. HOOKS (React Hooks Implementation)
   ================================================================ */

// Hook dispatcher untuk berbagai fase
var ot = { /* hooks untuk fase render */ },
    or = { /* hooks untuk mount */ },
    ol = { /* hooks untuk update */ },
    oa = { /* hooks untuk re-render */ };

// Hook implementations
function aw(e) { /* useState mount */ }
function ad(e) { /* useReducer update */ }
function ah(e, n, t) { /* useSyncExternalStore */ }
function aU(e, n) { /* useEffect */ }
function a$(e, n) { /* useLayoutEffect */ }
function aj(e, n) { /* useInsertionEffect */ }

/* ================================================================
   14. EVENT SYSTEM
   ================================================================ */

// Event priority levels
var ci = function(e, n, t, r) { /* high priority */ },
    cs = function(e, n, t, r) { /* low priority */ },
    cc = function(e, n, t, r) { /* default */ };

// Event registration
function i6(e, n) {
  var t = n[e$];
  void 0 === t && (t = n[e$] = new Set);
  var r = e + "__bubble";
  t.has(r) || (se(n, e, 2, !1), t.add(r));
}

// Event listener setup
function se(e, n, t, r) {
  switch (cm(n)) {
    case 2:
      var l = ci;
      break;
    case 8:
      l = cs;
      break;
    default:
      l = cc;
  }
  t = l.bind(null, n, t, e);
  l = void 0;
  nN && ("touchstart" === n || "touchmove" === n || "wheel" === n) && (l = !0);
  r ? void 0 !== l ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) :
    void 0 !== l ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}

/* ================================================================
   15. RENDERING & COMMIT
   ================================================================ */

/**
 * Render fase (work loop)
 */
function iu(e, n, t) {
  if (0 != (6 & uM)) throw Error(i(327));
  // ... rendering logic
}

/**
 * Commit fase (DOM updates)
 */
function uv(e, n) {
  // ... commit work
}

/**
 * useEffect/useLayoutEffect cleanup
 */
function o1(e, n) {
  // ... effect cleanup
}

/* ================================================================
   16. DOM INTERNALS
   ================================================================ */

// Property mapping (React prop -> DOM attribute)
var nh = new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  // ... dan seterusnya
]);

// Style properties yang tidak perlu "px"
var nf = new Set([
  "animationIterationCount", "aspectRatio", "borderImageOutset",
  "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup",
  // ... dan seterusnya
]);

/* ================================================================
   17. ROOT API (createRoot, hydrateRoot)
   ================================================================ */

/**
 * React DOM Root constructor
 */
function cO(e) {
  this._internalRoot = e;
}

cO.prototype.render = function(e) {
  var n = this._internalRoot;
  if (null === n) throw Error(i(409));
  ct(n.current, il(), e, n, null, null);
};

cO.prototype.unmount = function() {
  var e = this._internalRoot;
  if (null !== e) {
    this._internalRoot = null;
    var n = e.containerInfo;
    ct(e.current, 2, null, e, null, null);
    ic();
    n[eU] = null;
  }
};

/**
 * createRoot API
 */
n.createRoot = function(e, n) {
  if (!s(e)) throw Error(i(299));

  var t = !1,
      r = "",
      l = of,
      a = od,
      o = op;

  if (null != n) {
    !0 === n.unstable_strictMode && (t = !0);
    void 0 !== n.identifierPrefix && (r = n.identifierPrefix);
    void 0 !== n.onUncaughtError && (l = n.onUncaughtError);
    void 0 !== n.onCaughtError && (a = n.onCaughtError);
    void 0 !== n.onRecoverableError && (o = n.onRecoverableError);
  }

  n = cn(e, 1, !1, null, null, t, r, null, l, a, o, cD);
  e[eU] = n.current;
  i7(e);

  return new cO(n);
};

/**
 * hydrateRoot API
 */
n.hydrateRoot = function(e, n, t) {
  if (!s(e)) throw Error(i(299));

  var r = null,
      l = !1,
      a = "",
      o = of,
      u = od,
      c = op,
      f = null;

  if (null != t) {
    !0 === t.unstable_strictMode && (l = !0);
    void 0 !== t.identifierPrefix && (a = t.identifierPrefix);
    void 0 !== t.onUncaughtError && (o = t.onUncaughtError);
    void 0 !== t.onCaughtError && (u = t.onCaughtError);
    void 0 !== t.onRecoverableError && (c = t.onRecoverableError);
    void 0 !== t.formState && (f = t.formState);
  }

  n = cn(e, 1, !0, n, null != t ? t : null, l, a, f, o, u, c, cD);
  n.context = (r = null, re);
  t = n.current;

  var d = lC(l = eF(l = il()));
  d.callback = null;
  lP(t, d, l);
  t = l;
  n.current.lanes = t;
  eN(n, t);
  iB(n);
  e[eU] = n.current;
  i7(e);

  return new cM(n);
};

/* ================================================================
   18. EXPORTS
   ================================================================ */

n.createRoot = createRoot;
n.hydrateRoot = hydrateRoot;
n.version = "19.2.0-canary-0bdb9206-20250818";

// DevTools integration
if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var cR = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cR.isDisabled && cR.supportsFiber) {
    try {
      em = cR.inject({
        bundleType: 0,
        version: "19.2.0-canary-0bdb9206-20250818",
        rendererPackageName: "react-dom",
        currentDispatcherRef: O,
        reconcilerVersion: "19.2.0-canary-0bdb9206-20250818"
      });
      eh = cR;
    } catch (e) {}
  }
}