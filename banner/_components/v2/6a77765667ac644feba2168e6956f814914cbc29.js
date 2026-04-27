const Uu = () => Promise.resolve().then(() => ju),
  { Fragment: Nr, jsx: m, jsxs: g } = globalThis.__GLOBALS__.ReactJSXRuntime;
'use' in globalThis.__GLOBALS__.React ||
  (globalThis.__GLOBALS__.React.use = () => {
    throw new Error(
      '`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.',
    );
  });
function zs(t) {
  const e = t?.props?._fgT,
    n =
      typeof e == 'function' ||
      typeof e == 'string' ||
      (typeof e == 'object' && e !== null && '$$typeof' in e);
  return globalThis.__GLOBALS__.React.isValidElement(t) && n;
}
function Vt(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.type === 'fg-txt';
}
function Xs(t) {
  const { _fgT: e, _fgS: n, _fgB: s, _fgD: i, ...a } = t.props;
  return globalThis.__GLOBALS__.React.createElement(
    e,
    {
      ...a,
      key: t.key,
    },
    a.children,
  );
}
function Gt(t) {
  return zs(t) ? Xs(t) : Vt(t) ? t.props.children : t;
}
const Dt = globalThis.__GLOBALS__.React.Children,
  Ir = {
    map(t, e, n) {
      return Dt.map(t, (s, i) => {
        const a = Gt(s);
        return Vt(s) ? null : e.call(n, a, i);
      });
    },
    forEach(t, e, n) {
      Dt.forEach(t, (s, i) => {
        if (Vt(s)) return;
        const a = Gt(s);
        e.call(n, a, i);
      });
    },
    count(t) {
      let e = 0;
      return (
        Dt.forEach(t, (n) => {
          Vt(n) || e++;
        }),
        e
      );
    },
    toArray(t) {
      const e = [];
      return (
        Dt.forEach(t, (n) => {
          Vt(n) || e.push(Gt(n));
        }),
        e
      );
    },
    only(t) {
      const e = Dt.only(t);
      return Gt(e);
    },
  },
  ce = ['_fgT', '_fgS', '_fgB', '_fgD'];
function Br(t) {
  if (t == null || typeof t != 'object') return t;
  const e = Object.keys(t);
  let n = !1;
  for (let i = 0; i < ce.length; i++)
    if (ce[i] in t) {
      n = !0;
      break;
    }
  if (!n) return t;
  const s = {};
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    ce.indexOf(a) === -1 && (s[a] = t[a]);
  }
  return s;
}
const kn = globalThis.__GLOBALS__.React.cloneElement,
  Fr = (t, ...e) => {
    if (zs(t)) {
      const n = Xs(t),
        s = e[0];
      return (
        s != null && typeof s == 'object' && (e = [Br(s), ...e.slice(1)]),
        kn(n, ...e)
      );
    }
    return kn(t, ...e);
  };
({
  ...globalThis.__GLOBALS__.React,
});
const {
    Component: Ys,
    createContext: Tt,
    createElement: Or,
    createFactory: Wu,
    createRef: Ku,
    forwardRef: jr,
    Fragment: qs,
    isValidElement: _r,
    lazy: $u,
    memo: Gu,
    Profiler: Hu,
    PureComponent: zu,
    startTransition: Xu,
    StrictMode: Yu,
    Suspense: qu,
    use: Zu,
    useCallback: ze,
    useContext: B,
    useDebugValue: Ju,
    useDeferredValue: Qu,
    useEffect: _t,
    useId: Xe,
    useImperativeHandle: th,
    useInsertionEffect: Zs,
    useLayoutEffect: Ur,
    useMemo: ht,
    useReducer: eh,
    useRef: tt,
    useState: Y,
    useSyncExternalStore: nh,
    useTransition: sh,
    version: ih,
  } = globalThis.__GLOBALS__.React,
  Ye = Tt({});
function qe(t) {
  const e = tt(null);
  return (e.current === null && (e.current = t()), e.current);
}
const Ze = typeof window < 'u',
  Js = Ze ? Ur : _t,
  re = /* @__PURE__ */ Tt(null);
function Je(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Qe(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const q = (t, e, n) => (n > e ? e : n < t ? t : n);
let tn = () => {};
const Z = {},
  Qs = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function ti(t) {
  return typeof t == 'object' && t !== null;
}
const ei = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function en(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const G = /* @__NO_SIDE_EFFECTS__ */ (t) => t,
  Wr = (t, e) => (n) => e(t(n)),
  Ut = (...t) => t.reduce(Wr),
  Nt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  };
class nn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (Je(this.subscriptions, e), () => Qe(this.subscriptions, e));
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let a = 0; a < i; a++) {
          const r = this.subscriptions[a];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const z = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3,
  $ = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function ni(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const si = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  Kr = 1e-7,
  $r = 12;
function Gr(t, e, n, s, i) {
  let a,
    r,
    o = 0;
  do ((r = e + (n - e) / 2), (a = si(r, s, i) - t), a > 0 ? (n = r) : (e = r));
  while (Math.abs(a) > Kr && ++o < $r);
  return r;
}
function Wt(t, e, n, s) {
  if (t === e && n === s) return G;
  const i = (a) => Gr(a, 0, 1, t, n);
  return (a) => (a === 0 || a === 1 ? a : si(i(a), e, s));
}
const ii = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  ri = (t) => (e) => 1 - t(1 - e),
  ai = /* @__PURE__ */ Wt(0.33, 1.53, 0.69, 0.99),
  sn = /* @__PURE__ */ ri(ai),
  oi = /* @__PURE__ */ ii(sn),
  li = (t) =>
    (t *= 2) < 1 ? 0.5 * sn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  rn = (t) => 1 - Math.sin(Math.acos(t)),
  ci = ri(rn),
  ui = ii(rn),
  Hr = /* @__PURE__ */ Wt(0.42, 0, 1, 1),
  zr = /* @__PURE__ */ Wt(0, 0, 0.58, 1),
  hi = /* @__PURE__ */ Wt(0.42, 0, 0.58, 1),
  Xr = (t) => Array.isArray(t) && typeof t[0] != 'number',
  di = (t) => Array.isArray(t) && typeof t[0] == 'number',
  Yr = {
    linear: G,
    easeIn: Hr,
    easeInOut: hi,
    easeOut: zr,
    circIn: rn,
    circInOut: ui,
    circOut: ci,
    backIn: sn,
    backInOut: oi,
    backOut: ai,
    anticipate: li,
  },
  qr = (t) => typeof t == 'string',
  Nn = (t) => {
    if (di(t)) {
      tn(t.length === 4);
      const [e, n, s, i] = t;
      return Wt(e, n, s, i);
    } else if (qr(t)) return Yr[t];
    return t;
  },
  Ht = [
    'setup',
    // Compute
    'read',
    // Read
    'resolveKeyframes',
    // Write/Read/Write/Read
    'preUpdate',
    // Compute
    'update',
    // Compute
    'preRender',
    // Compute
    'render',
    // Write
    'postRender',
    // Compute
  ];
function Zr(t, e) {
  let n = /* @__PURE__ */ new Set(),
    s = /* @__PURE__ */ new Set(),
    i = !1,
    a = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1,
  };
  function l(c) {
    (r.has(c) && (u.schedule(c), t()), c(o));
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, d = !1) => {
      const p = d && i ? n : s;
      return (h && r.add(c), p.has(c) || p.add(c), c);
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      (s.delete(c), r.delete(c));
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (((o = c), i)) {
        a = !0;
        return;
      }
      ((i = !0),
        ([n, s] = [s, n]),
        n.forEach(l),
        n.clear(),
        (i = !1),
        a && ((a = !1), u.process(c)));
    },
  };
  return u;
}
const Jr = 40;
function fi(t, e) {
  let n = !1,
    s = !0;
  const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1,
    },
    a = () => (n = !0),
    r = Ht.reduce((x, D) => ((x[D] = Zr(a)), x), {}),
    {
      setup: o,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: h,
      preRender: d,
      render: f,
      postRender: p,
    } = r,
    v = () => {
      const x = Z.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        Z.useManualTiming ||
          (i.delta = s ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, Jr), 1)),
        (i.timestamp = x),
        (i.isProcessing = !0),
        o.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        h.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(v)));
    },
    b = () => {
      ((n = !0), (s = !0), i.isProcessing || t(v));
    };
  return {
    schedule: Ht.reduce((x, D) => {
      const w = r[D];
      return (
        (x[D] = (A, V = !1, S = !1) => (n || b(), w.schedule(A, V, S))),
        x
      );
    }, {}),
    cancel: (x) => {
      for (let D = 0; D < Ht.length; D++) r[Ht[D]].cancel(x);
    },
    state: i,
    steps: r,
  };
}
const {
  schedule: E,
  cancel: et,
  state: I,
  steps: ue,
} = /* @__PURE__ */ fi(
  typeof requestAnimationFrame < 'u' ? requestAnimationFrame : G,
  !0,
);
let qt;
function Qr() {
  qt = void 0;
}
const _ = {
    now: () => (
      qt === void 0 &&
        _.set(
          I.isProcessing || Z.useManualTiming ? I.timestamp : performance.now(),
        ),
      qt
    ),
    set: (t) => {
      ((qt = t), queueMicrotask(Qr));
    },
  },
  mi = (t) => (e) => typeof e == 'string' && e.startsWith(t),
  an = /* @__PURE__ */ mi('--'),
  ta = /* @__PURE__ */ mi('var(--'),
  on = (t) => (ta(t) ? ea.test(t.split('/*')[0].trim()) : !1),
  ea =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  wt = {
    test: (t) => typeof t == 'number',
    parse: parseFloat,
    transform: (t) => t,
  },
  It = {
    ...wt,
    transform: (t) => q(0, 1, t),
  },
  zt = {
    ...wt,
    default: 1,
  },
  Mt = (t) => Math.round(t * 1e5) / 1e5,
  ln = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function na(t) {
  return t == null;
}
const sa =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  cn = (t, e) => (n) =>
    !!(
      (typeof n == 'string' && sa.test(n) && n.startsWith(t)) ||
      (e && !na(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  pi = (t, e, n) => (s) => {
    if (typeof s != 'string') return s;
    const [i, a, r, o] = s.match(ln);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(a),
      [n]: parseFloat(r),
      alpha: o !== void 0 ? parseFloat(o) : 1,
    };
  },
  ia = (t) => q(0, 255, t),
  he = {
    ...wt,
    transform: (t) => Math.round(ia(t)),
  },
  ot = {
    test: /* @__PURE__ */ cn('rgb', 'red'),
    parse: /* @__PURE__ */ pi('red', 'green', 'blue'),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      'rgba(' +
      he.transform(t) +
      ', ' +
      he.transform(e) +
      ', ' +
      he.transform(n) +
      ', ' +
      Mt(It.transform(s)) +
      ')',
  };
function ra(t) {
  let e = '',
    n = '',
    s = '',
    i = '';
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const De = {
    test: /* @__PURE__ */ cn('#'),
    parse: ra,
    transform: ot.transform,
  },
  Kt = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
    test: (e) =>
      typeof e == 'string' && e.endsWith(t) && e.split(' ').length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  Q = /* @__PURE__ */ Kt('deg'),
  X = /* @__PURE__ */ Kt('%'),
  P = /* @__PURE__ */ Kt('px'),
  aa = /* @__PURE__ */ Kt('vh'),
  oa = /* @__PURE__ */ Kt('vw'),
  In = {
    ...X,
    parse: (t) => X.parse(t) / 100,
    transform: (t) => X.transform(t * 100),
  },
  ft = {
    test: /* @__PURE__ */ cn('hsl', 'hue'),
    parse: /* @__PURE__ */ pi('hue', 'saturation', 'lightness'),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      'hsla(' +
      Math.round(t) +
      ', ' +
      X.transform(Mt(e)) +
      ', ' +
      X.transform(Mt(n)) +
      ', ' +
      Mt(It.transform(s)) +
      ')',
  },
  L = {
    test: (t) => ot.test(t) || De.test(t) || ft.test(t),
    parse: (t) =>
      ot.test(t) ? ot.parse(t) : ft.test(t) ? ft.parse(t) : De.parse(t),
    transform: (t) =>
      typeof t == 'string'
        ? t
        : t.hasOwnProperty('red')
          ? ot.transform(t)
          : ft.transform(t),
    getAnimatableNone: (t) => {
      const e = L.parse(t);
      return ((e.alpha = 0), L.transform(e));
    },
  },
  la =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ca(t) {
  return (
    isNaN(t) &&
    typeof t == 'string' &&
    (t.match(ln)?.length || 0) + (t.match(la)?.length || 0) > 0
  );
}
const gi = 'number',
  yi = 'color',
  ua = 'var',
  ha = 'var(',
  Bn = '${}',
  da =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Bt(t) {
  const e = t.toString(),
    n = [],
    s = {
      color: [],
      number: [],
      var: [],
    },
    i = [];
  let a = 0;
  const o = e
    .replace(
      da,
      (l) => (
        L.test(l)
          ? (s.color.push(a), i.push(yi), n.push(L.parse(l)))
          : l.startsWith(ha)
            ? (s.var.push(a), i.push(ua), n.push(l))
            : (s.number.push(a), i.push(gi), n.push(parseFloat(l))),
        ++a,
        Bn
      ),
    )
    .split(Bn);
  return { values: n, split: o, indexes: s, types: i };
}
function vi(t) {
  return Bt(t).values;
}
function xi(t) {
  const { split: e, types: n } = Bt(t),
    s = e.length;
  return (i) => {
    let a = '';
    for (let r = 0; r < s; r++)
      if (((a += e[r]), i[r] !== void 0)) {
        const o = n[r];
        o === gi
          ? (a += Mt(i[r]))
          : o === yi
            ? (a += L.transform(i[r]))
            : (a += i[r]);
      }
    return a;
  };
}
const fa = (t) =>
  typeof t == 'number' ? 0 : L.test(t) ? L.getAnimatableNone(t) : t;
function ma(t) {
  const e = vi(t);
  return xi(t)(e.map(fa));
}
const nt = {
  test: ca,
  parse: vi,
  createTransformer: xi,
  getAnimatableNone: ma,
};
function de(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function pa({ hue: t, saturation: e, lightness: n, alpha: s }) {
  ((t /= 360), (e /= 100), (n /= 100));
  let i = 0,
    a = 0,
    r = 0;
  if (!e) i = a = r = n;
  else {
    const o = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - o;
    ((i = de(l, o, t + 1 / 3)), (a = de(l, o, t)), (r = de(l, o, t - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
function te(t, e) {
  return (n) => (n > 0 ? e : t);
}
const M = (t, e, n) => t + (e - t) * n,
  fe = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  ga = [De, ot, ft],
  ya = (t) => ga.find((e) => e.test(t));
function Fn(t) {
  const e = ya(t);
  if (!e) return !1;
  let n = e.parse(t);
  return (e === ft && (n = pa(n)), n);
}
const On = (t, e) => {
    const n = Fn(t),
      s = Fn(e);
    if (!n || !s) return te(t, e);
    const i = { ...n };
    return (a) => (
      (i.red = fe(n.red, s.red, a)),
      (i.green = fe(n.green, s.green, a)),
      (i.blue = fe(n.blue, s.blue, a)),
      (i.alpha = M(n.alpha, s.alpha, a)),
      ot.transform(i)
    );
  },
  Ae = /* @__PURE__ */ new Set(['none', 'hidden']);
function va(t, e) {
  return Ae.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function xa(t, e) {
  return (n) => M(t, e, n);
}
function un(t) {
  return typeof t == 'number'
    ? xa
    : typeof t == 'string'
      ? on(t)
        ? te
        : L.test(t)
          ? On
          : wa
      : Array.isArray(t)
        ? bi
        : typeof t == 'object'
          ? L.test(t)
            ? On
            : ba
          : te;
}
function bi(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((a, r) => un(a)(a, e[r]));
  return (a) => {
    for (let r = 0; r < s; r++) n[r] = i[r](a);
    return n;
  };
}
function ba(t, e) {
  const n = { ...t, ...e },
    s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = un(t[i])(t[i], e[i]));
  return (i) => {
    for (const a in s) n[a] = s[a](i);
    return n;
  };
}
function Ta(t, e) {
  const n = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const a = e.types[i],
      r = t.indexes[a][s[a]],
      o = t.values[r] ?? 0;
    ((n[i] = o), s[a]++);
  }
  return n;
}
const wa = (t, e) => {
  const n = nt.createTransformer(e),
    s = Bt(t),
    i = Bt(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (Ae.has(t) && !i.values.length) || (Ae.has(e) && !s.values.length)
      ? va(t, e)
      : Ut(bi(Ta(s, i), i.values), n)
    : te(t, e);
};
function Ti(t, e, n) {
  return typeof t == 'number' && typeof e == 'number' && typeof n == 'number'
    ? M(t, e, n)
    : un(t)(t, e);
}
const Pa = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = !0) => E.update(e, n),
      stop: () => et(e),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => (I.isProcessing ? I.timestamp : _.now()),
    };
  },
  wi = (t, e, n = 10) => {
    let s = '';
    const i = Math.max(Math.round(e / n), 2);
    for (let a = 0; a < i; a++)
      s += Math.round(t(a / (i - 1)) * 1e4) / 1e4 + ', ';
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  ee = 2e4;
function hn(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < ee; ) ((e += n), (s = t.next(e)));
  return e >= ee ? 1 / 0 : e;
}
function Sa(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }),
    i = Math.min(hn(s), ee);
  return {
    type: 'keyframes',
    ease: (a) => s.next(i * a).value / e,
    duration: /* @__PURE__ */ $(i),
  };
}
const Da = 5;
function Pi(t, e, n) {
  const s = Math.max(e - Da, 0);
  return ni(n - t(s), e - s);
}
const C = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    // Default duration/bounce-based options
    duration: 800,
    // in ms
    bounce: 0.3,
    visualDuration: 0.3,
    // in seconds
    // Rest thresholds
    restSpeed: {
      granular: 0.01,
      default: 2,
    },
    restDelta: {
      granular: 5e-3,
      default: 0.5,
    },
    // Limits
    minDuration: 0.01,
    // in seconds
    maxDuration: 10,
    // in seconds
    minDamping: 0.05,
    maxDamping: 1,
  },
  me = 1e-3;
function Aa({
  duration: t = C.duration,
  bounce: e = C.bounce,
  velocity: n = C.velocity,
  mass: s = C.mass,
}) {
  let i,
    a,
    r = 1 - e;
  ((r = q(C.minDamping, C.maxDamping, r)),
    (t = q(C.minDuration, C.maxDuration, /* @__PURE__ */ $(t))),
    r < 1
      ? ((i = (u) => {
          const c = u * r,
            h = c * t,
            d = c - n,
            f = Ve(u, r),
            p = Math.exp(-h);
          return me - (d / f) * p;
        }),
        (a = (u) => {
          const h = u * r * t,
            d = h * n + n,
            f = Math.pow(r, 2) * Math.pow(u, 2) * t,
            p = Math.exp(-h),
            v = Ve(Math.pow(u, 2), r);
          return ((-i(u) + me > 0 ? -1 : 1) * ((d - f) * p)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * t),
            h = (u - n) * t + 1;
          return -me + c * h;
        }),
        (a = (u) => {
          const c = Math.exp(-u * t),
            h = (n - u) * (t * t);
          return c * h;
        })));
  const o = 5 / t,
    l = Ea(i, a, o);
  if (((t = /* @__PURE__ */ z(t)), isNaN(l)))
    return {
      stiffness: C.stiffness,
      damping: C.damping,
      duration: t,
    };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(s * u),
      duration: t,
    };
  }
}
const Va = 12;
function Ea(t, e, n) {
  let s = n;
  for (let i = 1; i < Va; i++) s = s - t(s) / e(s);
  return s;
}
function Ve(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Ma = ['duration', 'bounce'],
  Ca = ['stiffness', 'damping', 'mass'];
function jn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ra(t) {
  let e = {
    velocity: C.velocity,
    stiffness: C.stiffness,
    damping: C.damping,
    mass: C.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!jn(t, Ca) && jn(t, Ma))
    if (t.visualDuration) {
      const n = t.visualDuration,
        s = (2 * Math.PI) / (n * 1.2),
        i = s * s,
        a = 2 * q(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: C.mass,
        stiffness: i,
        damping: a,
      };
    } else {
      const n = Aa(t);
      ((e = {
        ...e,
        ...n,
        mass: C.mass,
      }),
        (e.isResolvedFromDuration = !0));
    }
  return e;
}
function ne(t = C.visualDuration, e = C.bounce) {
  const n =
    typeof t != 'object'
      ? {
          visualDuration: t,
          keyframes: [0, 1],
          bounce: e,
        }
      : t;
  let { restSpeed: s, restDelta: i } = n;
  const a = n.keyframes[0],
    r = n.keyframes[n.keyframes.length - 1],
    o = { done: !1, value: a },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: h,
      velocity: d,
      isResolvedFromDuration: f,
    } = Ra({
      ...n,
      velocity: -(/* @__PURE__ */ $(n.velocity || 0)),
    }),
    p = d || 0,
    v = u / (2 * Math.sqrt(l * c)),
    b = r - a,
    y = /* @__PURE__ */ $(Math.sqrt(l / c)),
    T = Math.abs(b) < 5;
  (s || (s = T ? C.restSpeed.granular : C.restSpeed.default),
    i || (i = T ? C.restDelta.granular : C.restDelta.default));
  let x;
  if (v < 1) {
    const w = Ve(y, v);
    x = (A) => {
      const V = Math.exp(-v * y * A);
      return (
        r - V * (((p + v * y * b) / w) * Math.sin(w * A) + b * Math.cos(w * A))
      );
    };
  } else if (v === 1) x = (w) => r - Math.exp(-y * w) * (b + (p + y * b) * w);
  else {
    const w = y * Math.sqrt(v * v - 1);
    x = (A) => {
      const V = Math.exp(-v * y * A),
        S = Math.min(w * A, 300);
      return (
        r - (V * ((p + v * y * b) * Math.sinh(S) + w * b * Math.cosh(S))) / w
      );
    };
  }
  const D = {
    calculatedDuration: (f && h) || null,
    next: (w) => {
      const A = x(w);
      if (f) o.done = w >= h;
      else {
        let V = w === 0 ? p : 0;
        v < 1 && (V = w === 0 ? /* @__PURE__ */ z(p) : Pi(x, w, A));
        const S = Math.abs(V) <= s,
          k = Math.abs(r - A) <= i;
        o.done = S && k;
      }
      return ((o.value = o.done ? r : A), o);
    },
    toString: () => {
      const w = Math.min(hn(D), ee),
        A = wi((V) => D.next(w * V).value, w, 30);
      return w + 'ms ' + A;
    },
    toTransition: () => {},
  };
  return D;
}
ne.applyToOptions = (t) => {
  const e = Sa(t, 100, ne);
  return (
    (t.ease = e.ease),
    (t.duration = /* @__PURE__ */ z(e.duration)),
    (t.type = 'keyframes'),
    t
  );
};
function Ee({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: r,
  min: o,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const h = t[0],
    d = {
      done: !1,
      value: h,
    },
    f = (S) => (o !== void 0 && S < o) || (l !== void 0 && S > l),
    p = (S) =>
      o === void 0
        ? l
        : l === void 0 || Math.abs(o - S) < Math.abs(l - S)
          ? o
          : l;
  let v = n * e;
  const b = h + v,
    y = r === void 0 ? b : r(b);
  y !== b && (v = y - h);
  const T = (S) => -v * Math.exp(-S / s),
    x = (S) => y + T(S),
    D = (S) => {
      const k = T(S),
        O = x(S);
      ((d.done = Math.abs(k) <= u), (d.value = d.done ? y : O));
    };
  let w, A;
  const V = (S) => {
    f(d.value) &&
      ((w = S),
      (A = ne({
        keyframes: [d.value, p(d.value)],
        velocity: Pi(x, S, d.value),
        // TODO: This should be passing * 1000
        damping: i,
        stiffness: a,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    V(0),
    {
      calculatedDuration: null,
      next: (S) => {
        let k = !1;
        return (
          !A && w === void 0 && ((k = !0), D(S), V(S)),
          w !== void 0 && S >= w ? A.next(S - w) : (!k && D(S), d)
        );
      },
    }
  );
}
function La(t, e, n) {
  const s = [],
    i = n || Z.mix || Ti,
    a = t.length - 1;
  for (let r = 0; r < a; r++) {
    let o = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || G : e;
      o = Ut(l, o);
    }
    s.push(o);
  }
  return s;
}
function ka(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const a = t.length;
  if ((tn(a === e.length), a === 1)) return () => e[0];
  if (a === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[a - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const o = La(e, s, i),
    l = o.length,
    u = (c) => {
      if (r && c < t[0]) return e[0];
      let h = 0;
      if (l > 1) for (; h < t.length - 2 && !(c < t[h + 1]); h++);
      const d = /* @__PURE__ */ Nt(t[h], t[h + 1], c);
      return o[h](d);
    };
  return n ? (c) => u(q(t[0], t[a - 1], c)) : u;
}
function Na(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = /* @__PURE__ */ Nt(0, e, s);
    t.push(M(n, 1, i));
  }
}
function Ia(t) {
  const e = [0];
  return (Na(e, t.length - 1), e);
}
function Ba(t, e) {
  return t.map((n) => n * e);
}
function Fa(t, e) {
  return t.map(() => e || hi).splice(0, t.length - 1);
}
function Ct({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = 'easeInOut',
}) {
  const i = Xr(s) ? s.map(Nn) : Nn(s),
    a = {
      done: !1,
      value: e[0],
    },
    r = Ba(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === e.length ? n : Ia(e),
      t,
    ),
    o = ka(r, e, {
      ease: Array.isArray(i) ? i : Fa(e, i),
    });
  return {
    calculatedDuration: t,
    next: (l) => ((a.value = o(l)), (a.done = l >= t), a),
  };
}
const Oa = (t) => t !== null;
function dn(t, { repeat: e, repeatType: n = 'loop' }, s, i = 1) {
  const a = t.filter(Oa),
    o = i < 0 || (e && n !== 'loop' && e % 2 === 1) ? 0 : a.length - 1;
  return !o || s === void 0 ? a[o] : s;
}
const ja = {
  decay: Ee,
  inertia: Ee,
  tween: Ct,
  keyframes: Ct,
  spring: ne,
};
function Si(t) {
  typeof t.type == 'string' && (t.type = ja[t.type]);
}
class fn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const _a = (t) => t / 100;
class mn extends fn {
  constructor(e) {
    (super(),
      (this.state = 'idle'),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== _.now() && this.tick(_.now()),
          (this.isStopped = !0),
          this.state !== 'idle' && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      e.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: e } = this;
    Si(e);
    const {
      type: n = Ct,
      repeat: s = 0,
      repeatDelay: i = 0,
      repeatType: a,
      velocity: r = 0,
    } = e;
    let { keyframes: o } = e;
    const l = n || Ct;
    l !== Ct &&
      typeof o[0] != 'number' &&
      ((this.mixKeyframes = Ut(_a, Ti(o[0], o[1]))), (o = [0, 100]));
    const u = l({ ...e, keyframes: o });
    (a === 'mirror' &&
      (this.mirroredGenerator = l({
        ...e,
        keyframes: [...o].reverse(),
        velocity: -r,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = hn(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (s + 1) - i),
      (this.generator = u));
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(e, n = !1) {
    const {
      generator: s,
      totalDuration: i,
      mixKeyframes: a,
      mirroredGenerator: r,
      resolvedDuration: o,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: h,
      repeatType: d,
      repeatDelay: f,
      type: p,
      onUpdate: v,
      finalKeyframe: b,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      n ? (this.currentTime = e) : this.updateTime(e));
    const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      T = this.playbackSpeed >= 0 ? y < 0 : y > i;
    ((this.currentTime = Math.max(y, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = i));
    let x = this.currentTime,
      D = s;
    if (h) {
      const S = Math.min(this.currentTime, i) / o;
      let k = Math.floor(S),
        O = S % 1;
      (!O && S >= 1 && (O = 1),
        O === 1 && k--,
        (k = Math.min(k, h + 1)),
        !!(k % 2) &&
          (d === 'reverse'
            ? ((O = 1 - O), f && (O -= f / o))
            : d === 'mirror' && (D = r)),
        (x = q(0, 1, O) * o));
    }
    const w = T ? { done: !1, value: c[0] } : D.next(x);
    a && (w.value = a(w.value));
    let { done: A } = w;
    !T &&
      l !== null &&
      (A =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const V =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && A));
    return (
      V && p !== Ee && (w.value = dn(c, this.options, b, this.speed)),
      v && v(w.value),
      V && this.finish(),
      w
    );
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ $(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ $(e);
  }
  get time() {
    return /* @__PURE__ */ $(this.currentTime);
  }
  set time(e) {
    ((e = /* @__PURE__ */ z(e)),
      (this.currentTime = e),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = e)
        : this.driver &&
          (this.startTime = this.driver.now() - e / this.playbackSpeed),
      this.driver?.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(_.now());
    const n = this.playbackSpeed !== e;
    ((this.playbackSpeed = e),
      n && (this.time = /* @__PURE__ */ $(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: e = Pa, startTime: n } = this.options;
    (this.driver || (this.driver = e((i) => this.tick(i))),
      this.options.onPlay?.());
    const s = this.driver.now();
    (this.state === 'finished'
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = n ?? s),
      this.state === 'finished' &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start());
  }
  pause() {
    ((this.state = 'paused'),
      this.updateTime(_.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== 'running' && this.play(),
      (this.state = 'finished'),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = 'finished'),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = 'idle'),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return ((this.startTime = 0), this.tick(e, !0));
  }
  attachTimeline(e) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = 'keyframes'),
        (this.options.ease = 'linear'),
        this.initAnimation()),
      this.driver?.stop(),
      e.observe(this)
    );
  }
}
function Ua(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const lt = (t) => (t * 180) / Math.PI,
  Me = (t) => {
    const e = lt(Math.atan2(t[1], t[0]));
    return Ce(e);
  },
  Wa = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Me,
    rotateZ: Me,
    skewX: (t) => lt(Math.atan(t[1])),
    skewY: (t) => lt(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  Ce = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  _n = Me,
  Un = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  Wn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  Ka = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Un,
    scaleY: Wn,
    scale: (t) => (Un(t) + Wn(t)) / 2,
    rotateX: (t) => Ce(lt(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Ce(lt(Math.atan2(-t[2], t[0]))),
    rotateZ: _n,
    rotate: _n,
    skewX: (t) => lt(Math.atan(t[4])),
    skewY: (t) => lt(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function Re(t) {
  return t.includes('scale') ? 1 : 0;
}
function Le(t, e) {
  if (!t || t === 'none') return Re(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) ((s = Ka), (i = n));
  else {
    const o = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((s = Wa), (i = o));
  }
  if (!i) return Re(e);
  const a = s[e],
    r = i[1].split(',').map(Ga);
  return typeof a == 'function' ? a(r) : r[a];
}
const $a = (t, e) => {
  const { transform: n = 'none' } = getComputedStyle(t);
  return Le(n, e);
};
function Ga(t) {
  return parseFloat(t.trim());
}
const Pt = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  St = new Set(Pt),
  Kn = (t) => t === wt || t === P,
  Ha = /* @__PURE__ */ new Set(['x', 'y', 'z']),
  za = Pt.filter((t) => !Ha.has(t));
function Xa(t) {
  const e = [];
  return (
    za.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith('scale') ? 1 : 0));
    }),
    e
  );
}
const ct = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = '0', paddingRight: n = '0' }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = '0', paddingBottom: n = '0' }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Le(e, 'x'),
  y: (t, { transform: e }) => Le(e, 'y'),
};
ct.translateX = ct.x;
ct.translateY = ct.y;
const ut = /* @__PURE__ */ new Set();
let ke = !1,
  Ne = !1,
  Ie = !1;
function Di() {
  if (Ne) {
    const t = Array.from(ut).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = /* @__PURE__ */ new Map();
    (e.forEach((s) => {
      const i = Xa(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([a, r]) => {
            s.getValue(a)?.set(r);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      }));
  }
  ((Ne = !1), (ke = !1), ut.forEach((t) => t.complete(Ie)), ut.clear());
}
function Ai() {
  ut.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (Ne = !0));
  });
}
function Ya() {
  ((Ie = !0), Ai(), Di(), (Ie = !1));
}
class pn {
  constructor(e, n, s, i, a, r = !1) {
    ((this.state = 'pending'),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = a),
      (this.isAsync = r));
  }
  scheduleResolve() {
    ((this.state = 'scheduled'),
      this.isAsync
        ? (ut.add(this), ke || ((ke = !0), E.read(Ai), E.resolveKeyframes(Di)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: s,
      motionValue: i,
    } = this;
    if (e[0] === null) {
      const a = i?.get(),
        r = e[e.length - 1];
      if (a !== void 0) e[0] = a;
      else if (s && n) {
        const o = s.readValue(n, r);
        o != null && (e[0] = o);
      }
      (e[0] === void 0 && (e[0] = r), i && a === void 0 && i.set(e[0]));
    }
    Ua(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    ((this.state = 'complete'),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      ut.delete(this));
  }
  cancel() {
    this.state === 'scheduled' && (ut.delete(this), (this.state = 'pending'));
  }
  resume() {
    this.state === 'pending' && this.scheduleResolve();
  }
}
const qa = (t) => t.startsWith('--');
function Za(t, e, n) {
  qa(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const Ja = /* @__PURE__ */ en(() => window.ScrollTimeline !== void 0),
  Qa = {};
function to(t, e) {
  const n = /* @__PURE__ */ en(t);
  return () => Qa[e] ?? n();
}
const Vi = /* @__PURE__ */ to(() => {
    try {
      document
        .createElement('div')
        .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
    } catch {
      return !1;
    }
    return !0;
  }, 'linearEasing'),
  Et = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  $n = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: /* @__PURE__ */ Et([0, 0.65, 0.55, 1]),
    circOut: /* @__PURE__ */ Et([0.55, 0, 1, 0.45]),
    backIn: /* @__PURE__ */ Et([0.31, 0.01, 0.66, -0.59]),
    backOut: /* @__PURE__ */ Et([0.33, 1.53, 0.69, 0.99]),
  };
function Ei(t, e) {
  if (t)
    return typeof t == 'function'
      ? Vi()
        ? wi(t, e)
        : 'ease-out'
      : di(t)
        ? Et(t)
        : Array.isArray(t)
          ? t.map((n) => Ei(n, e) || $n.easeOut)
          : $n[t];
}
function eo(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: r = 'loop',
    ease: o = 'easeOut',
    times: l,
  } = {},
  u = void 0,
) {
  const c = {
    [e]: n,
  };
  l && (c.offset = l);
  const h = Ei(o, i);
  Array.isArray(h) && (c.easing = h);
  const d = {
    delay: s,
    duration: i,
    easing: Array.isArray(h) ? 'linear' : h,
    fill: 'both',
    iterations: a + 1,
    direction: r === 'reverse' ? 'alternate' : 'normal',
  };
  return (u && (d.pseudoElement = u), t.animate(c, d));
}
function Mi(t) {
  return typeof t == 'function' && 'applyToOptions' in t;
}
function no({ type: t, ...e }) {
  return Mi(t) && Vi()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = 'easeOut'), e);
}
class so extends fn {
  constructor(e) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !e))
      return;
    const {
      element: n,
      name: s,
      keyframes: i,
      pseudoElement: a,
      allowFlatten: r = !1,
      finalKeyframe: o,
      onComplete: l,
    } = e;
    ((this.isPseudoElement = !!a),
      (this.allowFlatten = r),
      (this.options = e),
      tn(typeof e.type != 'string'));
    const u = no(e);
    ((this.animation = eo(n, s, i, u, a)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !a)) {
          const c = dn(i, this.options, o, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(c) : Za(n, s, c),
            this.animation.cancel());
        }
        (l?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === 'finished' && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === 'idle' ||
      e === 'finished' ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ $(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ $(e);
  }
  get time() {
    return /* @__PURE__ */ $(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    ((this.finishedTime = null),
      (this.animation.currentTime = /* @__PURE__ */ z(e)));
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? 'finished' : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: 'linear' }),
      (this.animation.onfinish = null),
      e && Ja() ? ((this.animation.timeline = e), G) : n(this)
    );
  }
}
const Ci = {
  anticipate: li,
  backInOut: oi,
  circInOut: ui,
};
function io(t) {
  return t in Ci;
}
function ro(t) {
  typeof t.ease == 'string' && io(t.ease) && (t.ease = Ci[t.ease]);
}
const Gn = 10;
class ao extends so {
  constructor(e) {
    (ro(e),
      Si(e),
      super(e),
      e.startTime && (this.startTime = e.startTime),
      (this.options = e));
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const {
      motionValue: n,
      onUpdate: s,
      onComplete: i,
      element: a,
      ...r
    } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const o = new mn({
        ...r,
        autoplay: !1,
      }),
      l = /* @__PURE__ */ z(this.finishedTime ?? this.time);
    (n.setWithVelocity(o.sample(l - Gn).value, o.sample(l).value, Gn),
      o.stop());
  }
}
const Hn = (t, e) =>
  e === 'zIndex'
    ? !1
    : !!(
        typeof t == 'number' ||
        Array.isArray(t) ||
        (typeof t == 'string' && // It's animatable if we have a string
          (nt.test(t) || t === '0') && // And it contains numbers and/or colors
          !t.startsWith('url('))
      );
function oo(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function lo(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === 'display' || e === 'visibility') return !0;
  const a = t[t.length - 1],
    r = Hn(i, e),
    o = Hn(a, e);
  return !r || !o ? !1 : oo(t) || ((n === 'spring' || Mi(n)) && s);
}
function Be(t) {
  ((t.duration = 0), (t.type = 'keyframes'));
}
const co = /* @__PURE__ */ new Set([
    'opacity',
    'clipPath',
    'filter',
    'transform',
    // TODO: Could be re-enabled now we have support for linear() easing
    // "background-color"
  ]),
  uo = /* @__PURE__ */ en(() =>
    Object.hasOwnProperty.call(Element.prototype, 'animate'),
  );
function ho(t) {
  const {
    motionValue: e,
    name: n,
    repeatDelay: s,
    repeatType: i,
    damping: a,
    type: r,
  } = t;
  if (!(e?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return (
    uo() &&
    n &&
    co.has(n) &&
    (n !== 'transform' || !u) /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */ &&
    !l &&
    !s &&
    i !== 'mirror' &&
    a !== 0 &&
    r !== 'inertia'
  );
}
const fo = 40;
class mo extends fn {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = 'keyframes',
    repeat: i = 0,
    repeatDelay: a = 0,
    repeatType: r = 'loop',
    keyframes: o,
    name: l,
    motionValue: u,
    element: c,
    ...h
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = _.now()));
    const d = {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: a,
        repeatType: r,
        name: l,
        motionValue: u,
        element: c,
        ...h,
      },
      f = c?.KeyframeResolver || pn;
    ((this.keyframeResolver = new f(
      o,
      (p, v, b) => this.onKeyframesResolved(p, v, d, !b),
      l,
      u,
      c,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const {
      name: a,
      type: r,
      velocity: o,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = s;
    ((this.resolvedAt = _.now()),
      lo(e, a, r, o) ||
        ((Z.instantAnimations || !l) && c?.(dn(e, s, n)),
        (e[0] = e[e.length - 1]),
        Be(s),
        (s.repeat = 0)));
    const d = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > fo
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...s,
        keyframes: e,
      },
      f =
        !u && ho(d)
          ? new ao({
              ...d,
              element: d.motionValue.owner.current,
            })
          : new mn(d);
    (f.finished.then(() => this.notifyFinished()).catch(G),
      this.pendingTimeline &&
        ((this.stopTimeline = f.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = f));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), Ya()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
const po =
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function go(t) {
  const e = po.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function Ri(t, e, n = 1) {
  const [s, i] = go(t);
  if (!s) return;
  const a = window.getComputedStyle(e).getPropertyValue(s);
  if (a) {
    const r = a.trim();
    return Qs(r) ? parseFloat(r) : r;
  }
  return on(i) ? Ri(i, e, n + 1) : i;
}
function gn(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const Li = /* @__PURE__ */ new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    ...Pt,
  ]),
  yo = {
    test: (t) => t === 'auto',
    parse: (t) => t,
  },
  ki = (t) => (e) => e.test(t),
  Ni = [wt, P, X, Q, oa, aa, yo],
  zn = (t) => Ni.find(ki(t));
function vo(t) {
  return typeof t == 'number'
    ? t === 0
    : t !== null
      ? t === 'none' || t === '0' || ei(t)
      : !0;
}
const xo = /* @__PURE__ */ new Set([
  'brightness',
  'contrast',
  'saturate',
  'opacity',
]);
function bo(t) {
  const [e, n] = t.slice(0, -1).split('(');
  if (e === 'drop-shadow') return t;
  const [s] = n.match(ln) || [];
  if (!s) return t;
  const i = n.replace(s, '');
  let a = xo.has(e) ? 1 : 0;
  return (s !== n && (a *= 100), e + '(' + a + i + ')');
}
const To = /\b([a-z-]*)\(.*?\)/gu,
  Fe = {
    ...nt,
    getAnimatableNone: (t) => {
      const e = t.match(To);
      return e ? e.map(bo).join(' ') : t;
    },
  },
  Xn = {
    ...wt,
    transform: Math.round,
  },
  wo = {
    rotate: Q,
    rotateX: Q,
    rotateY: Q,
    rotateZ: Q,
    scale: zt,
    scaleX: zt,
    scaleY: zt,
    scaleZ: zt,
    skew: Q,
    skewX: Q,
    skewY: Q,
    distance: P,
    translateX: P,
    translateY: P,
    translateZ: P,
    x: P,
    y: P,
    z: P,
    perspective: P,
    transformPerspective: P,
    opacity: It,
    originX: In,
    originY: In,
    originZ: P,
  },
  yn = {
    // Border props
    borderWidth: P,
    borderTopWidth: P,
    borderRightWidth: P,
    borderBottomWidth: P,
    borderLeftWidth: P,
    borderRadius: P,
    radius: P,
    borderTopLeftRadius: P,
    borderTopRightRadius: P,
    borderBottomRightRadius: P,
    borderBottomLeftRadius: P,
    // Positioning props
    width: P,
    maxWidth: P,
    height: P,
    maxHeight: P,
    top: P,
    right: P,
    bottom: P,
    left: P,
    // Spacing props
    padding: P,
    paddingTop: P,
    paddingRight: P,
    paddingBottom: P,
    paddingLeft: P,
    margin: P,
    marginTop: P,
    marginRight: P,
    marginBottom: P,
    marginLeft: P,
    // Misc
    backgroundPositionX: P,
    backgroundPositionY: P,
    ...wo,
    zIndex: Xn,
    // SVG
    fillOpacity: It,
    strokeOpacity: It,
    numOctaves: Xn,
  },
  Po = {
    ...yn,
    // Color props
    color: L,
    backgroundColor: L,
    outlineColor: L,
    fill: L,
    stroke: L,
    // Border props
    borderColor: L,
    borderTopColor: L,
    borderRightColor: L,
    borderBottomColor: L,
    borderLeftColor: L,
    filter: Fe,
    WebkitFilter: Fe,
  },
  Ii = (t) => Po[t];
function Bi(t, e) {
  let n = Ii(t);
  return (
    n !== Fe && (n = nt),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const So = /* @__PURE__ */ new Set(['auto', 'none', '0']);
function Do(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i; ) {
    const a = t[s];
    (typeof a == 'string' && !So.has(a) && Bt(a).values.length && (i = t[s]),
      s++);
  }
  if (i && n) for (const a of e) t[a] = Bi(n, i);
}
class Ao extends pn {
  constructor(e, n, s, i, a) {
    super(e, n, s, i, a, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == 'string' && ((u = u.trim()), on(u))) {
        const c = Ri(u, n.current);
        (c !== void 0 && (e[l] = c),
          l === e.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !Li.has(s) || e.length !== 2)) return;
    const [i, a] = e,
      r = zn(i),
      o = zn(a);
    if (r !== o)
      if (Kn(r) && Kn(o))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == 'string' && (e[l] = parseFloat(u));
        }
      else ct[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || vo(e[i])) && s.push(i);
    s.length && Do(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    (s === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ct[s](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const a = s.length - 1,
      r = s[a];
    ((s[a] = ct[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([o, l]) => {
          e.getValue(o).set(l);
        }),
      this.resolveNoneKeyframes());
  }
}
function Vo(t, e, n) {
  if (t instanceof EventTarget) return [t];
  if (typeof t == 'string') {
    let s = document;
    const i = n?.[t] ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
const Fi = (t, e) => (e && typeof t == 'number' ? e.transform(t) : t);
function Oi(t) {
  return ti(t) && 'offsetHeight' in t;
}
const Yn = 30,
  Eo = (t) => !isNaN(parseFloat(t));
class Mo {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        const i = _.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const a of this.dependents) a.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner));
  }
  setCurrent(e) {
    ((this.current = e),
      (this.updatedAt = _.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = Eo(this.current)));
  }
  setPrevFrameValue(e = this.current) {
    ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on('change', e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new nn());
    const s = this.events[e].add(n);
    return e === 'change'
      ? () => {
          (s(),
            E.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    ((this.passiveEffect = e), (this.stopPassiveEffect = n));
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect
      ? this.passiveEffect(e, this.updateAndNotify)
      : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s));
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    (this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    (this.dependents || (this.dependents = /* @__PURE__ */ new Set()),
      this.dependents.add(e));
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = _.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > Yn
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Yn);
    return ni(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function xt(t, e) {
  return new Mo(t, e);
}
const { schedule: vn } = /* @__PURE__ */ fi(queueMicrotask, !1),
  H = {
    x: !1,
    y: !1,
  };
function ji() {
  return H.x || H.y;
}
function Co(t) {
  return t === 'x' || t === 'y'
    ? H[t]
      ? null
      : ((H[t] = !0),
        () => {
          H[t] = !1;
        })
    : H.x || H.y
      ? null
      : ((H.x = H.y = !0),
        () => {
          H.x = H.y = !1;
        });
}
function _i(t, e) {
  const n = Vo(t),
    s = new AbortController(),
    i = {
      passive: !0,
      ...e,
      signal: s.signal,
    };
  return [n, i, () => s.abort()];
}
function qn(t) {
  return !(t.pointerType === 'touch' || ji());
}
function Ro(t, e, n = {}) {
  const [s, i, a] = _i(t, n),
    r = (o) => {
      if (!qn(o)) return;
      const { target: l } = o,
        u = e(l, o);
      if (typeof u != 'function' || !l) return;
      const c = (h) => {
        qn(h) && (u(h), l.removeEventListener('pointerleave', c));
      };
      l.addEventListener('pointerleave', c, i);
    };
  return (
    s.forEach((o) => {
      o.addEventListener('pointerenter', r, i);
    }),
    a
  );
}
const Ui = (t, e) => (e ? (t === e ? !0 : Ui(t, e.parentElement)) : !1),
  xn = (t) =>
    t.pointerType === 'mouse'
      ? typeof t.button != 'number' || t.button <= 0
      : t.isPrimary !== !1,
  Lo = /* @__PURE__ */ new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function ko(t) {
  return Lo.has(t.tagName) || t.tabIndex !== -1;
}
const Zt = /* @__PURE__ */ new WeakSet();
function Zn(t) {
  return (e) => {
    e.key === 'Enter' && t(e);
  };
}
function pe(t, e) {
  t.dispatchEvent(
    new PointerEvent('pointer' + e, { isPrimary: !0, bubbles: !0 }),
  );
}
const No = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = Zn(() => {
    if (Zt.has(n)) return;
    pe(n, 'down');
    const i = Zn(() => {
        pe(n, 'up');
      }),
      a = () => pe(n, 'cancel');
    (n.addEventListener('keyup', i, e), n.addEventListener('blur', a, e));
  });
  (n.addEventListener('keydown', s, e),
    n.addEventListener('blur', () => n.removeEventListener('keydown', s), e));
};
function Jn(t) {
  return xn(t) && !ji();
}
function Io(t, e, n = {}) {
  const [s, i, a] = _i(t, n),
    r = (o) => {
      const l = o.currentTarget;
      if (!Jn(o)) return;
      Zt.add(l);
      const u = e(l, o),
        c = (f, p) => {
          (window.removeEventListener('pointerup', h),
            window.removeEventListener('pointercancel', d),
            Zt.has(l) && Zt.delete(l),
            Jn(f) && typeof u == 'function' && u(f, { success: p }));
        },
        h = (f) => {
          c(
            f,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              Ui(l, f.target),
          );
        },
        d = (f) => {
          c(f, !1);
        };
      (window.addEventListener('pointerup', h, i),
        window.addEventListener('pointercancel', d, i));
    };
  return (
    s.forEach((o) => {
      ((n.useGlobalTarget ? window : o).addEventListener('pointerdown', r, i),
        Oi(o) &&
          (o.addEventListener('focus', (u) => No(u, i)),
          !ko(o) && !o.hasAttribute('tabindex') && (o.tabIndex = 0)));
    }),
    a
  );
}
function Wi(t) {
  return ti(t) && 'ownerSVGElement' in t;
}
function Bo(t) {
  return Wi(t) && t.tagName === 'svg';
}
const F = (t) => !!(t && t.getVelocity),
  Fo = [...Ni, L, nt],
  Oo = (t) => Fo.find(ki(t)),
  bn = Tt({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: 'never',
  });
function Qn(t, e) {
  if (typeof t == 'function') return t(e);
  t != null && (t.current = e);
}
function jo(...t) {
  return (e) => {
    let n = !1;
    const s = t.map((i) => {
      const a = Qn(i, e);
      return (!n && typeof a == 'function' && (n = !0), a);
    });
    if (n)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == 'function' ? a() : Qn(t[i], null);
        }
      };
  };
}
function _o(...t) {
  return ze(jo(...t), t);
}
class Uo extends Ys {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = n.offsetParent,
        i = (Oi(s) && s.offsetWidth) || 0,
        a = this.props.sizeRef.current;
      ((a.height = n.offsetHeight || 0),
        (a.width = n.offsetWidth || 0),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = i - a.width - a.left));
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Wo({ children: t, isPresent: e, anchorX: n, root: s }) {
  const i = Xe(),
    a = tt(null),
    r = tt({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
    }),
    { nonce: o } = B(bn),
    l = _o(a, t?.ref);
  return (
    Zs(() => {
      const { width: u, height: c, top: h, left: d, right: f } = r.current;
      if (e || !a.current || !u || !c) return;
      const p = n === 'left' ? `left: ${d}` : `right: ${f}`;
      a.current.dataset.motionPopId = i;
      const v = document.createElement('style');
      o && (v.nonce = o);
      const b = s ?? document.head;
      return (
        b.appendChild(v),
        v.sheet &&
          v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${p}px !important;
            top: ${h}px !important;
          }
        `),
        () => {
          b.contains(v) && b.removeChild(v);
        }
      );
    }, [e]),
    m(Uo, {
      isPresent: e,
      childRef: a,
      sizeRef: r,
      children: Fr(t, { ref: l }),
    })
  );
}
const Ko = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: a,
  mode: r,
  anchorX: o,
  root: l,
}) => {
  const u = qe($o),
    c = Xe();
  let h = !0,
    d = ht(
      () => (
        (h = !1),
        {
          id: c,
          initial: e,
          isPresent: n,
          custom: i,
          onExitComplete: (f) => {
            u.set(f, !0);
            for (const p of u.values()) if (!p) return;
            s && s();
          },
          register: (f) => (u.set(f, !1), () => u.delete(f)),
        }
      ),
      [n, u, s],
    );
  return (
    a && h && (d = { ...d }),
    ht(() => {
      u.forEach((f, p) => u.set(p, !1));
    }, [n]),
    _t(() => {
      !n && !u.size && s && s();
    }, [n]),
    r === 'popLayout' &&
      (t = m(Wo, { isPresent: n, anchorX: o, root: l, children: t })),
    m(re.Provider, { value: d, children: t })
  );
};
function $o() {
  return /* @__PURE__ */ new Map();
}
function Ki(t = !0) {
  const e = B(re);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e,
    a = Xe();
  _t(() => {
    if (t) return i(a);
  }, [t]);
  const r = ze(() => t && s && s(a), [a, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const Xt = (t) => t.key || '';
function ts(t) {
  const e = [];
  return (
    Ir.forEach(t, (n) => {
      _r(n) && e.push(n);
    }),
    e
  );
}
const $i = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: s,
    presenceAffectsLayout: i = !0,
    mode: a = 'sync',
    propagate: r = !1,
    anchorX: o = 'left',
    root: l,
  }) => {
    const [u, c] = Ki(r),
      h = ht(() => ts(t), [t]),
      d = r && !u ? [] : h.map(Xt),
      f = tt(!0),
      p = tt(h),
      v = qe(() => /* @__PURE__ */ new Map()),
      [b, y] = Y(h),
      [T, x] = Y(h);
    Js(() => {
      ((f.current = !1), (p.current = h));
      for (let A = 0; A < T.length; A++) {
        const V = Xt(T[A]);
        d.includes(V) ? v.delete(V) : v.get(V) !== !0 && v.set(V, !1);
      }
    }, [T, d.length, d.join('-')]);
    const D = [];
    if (h !== b) {
      let A = [...h];
      for (let V = 0; V < T.length; V++) {
        const S = T[V],
          k = Xt(S);
        d.includes(k) || (A.splice(V, 0, S), D.push(S));
      }
      return (a === 'wait' && D.length && (A = D), x(ts(A)), y(h), null);
    }
    const { forceRender: w } = B(Ye);
    return m(Nr, {
      children: T.map((A) => {
        const V = Xt(A),
          S = r && !u ? !1 : h === T || d.includes(V),
          k = () => {
            if (v.has(V)) v.set(V, !0);
            else return;
            let O = !0;
            (v.forEach((J) => {
              J || (O = !1);
            }),
              O && (w?.(), x(p.current), r && c?.(), s && s()));
          };
        return m(
          Ko,
          {
            isPresent: S,
            initial: !f.current || n ? void 0 : !1,
            custom: e,
            presenceAffectsLayout: i,
            mode: a,
            root: l,
            onExitComplete: S ? void 0 : k,
            anchorX: o,
            children: A,
          },
          V,
        );
      }),
    });
  },
  Gi = Tt({ strict: !1 }),
  es = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  bt = {};
for (const t in es)
  bt[t] = {
    isEnabled: (e) => es[t].some((n) => !!e[n]),
  };
function Go(t) {
  for (const e in t)
    bt[e] = {
      ...bt[e],
      ...t[e],
    };
}
const Ho = /* @__PURE__ */ new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function se(t) {
  return (
    t.startsWith('while') ||
    (t.startsWith('drag') && t !== 'draggable') ||
    t.startsWith('layout') ||
    t.startsWith('onTap') ||
    t.startsWith('onPan') ||
    t.startsWith('onLayout') ||
    Ho.has(t)
  );
}
let Hi = (t) => !se(t);
function zo(t) {
  typeof t == 'function' && (Hi = (e) => (e.startsWith('on') ? !se(e) : t(e)));
}
try {
  zo(require('@emotion/is-prop-valid').default);
} catch {}
function Xo(t, e, n) {
  const s = {};
  for (const i in t)
    (i === 'values' && typeof t.values == 'object') ||
      ((Hi(i) ||
        (n === !0 && se(i)) ||
        (!e && !se(i)) || // If trying to use native HTML drag events, forward drag listeners
        (t.draggable && i.startsWith('onDrag'))) &&
        (s[i] = t[i]));
  return s;
}
const ae = /* @__PURE__ */ Tt({});
function oe(t) {
  return t !== null && typeof t == 'object' && typeof t.start == 'function';
}
function Ft(t) {
  return typeof t == 'string' || Array.isArray(t);
}
const Tn = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  wn = ['initial', ...Tn];
function le(t) {
  return oe(t.animate) || wn.some((e) => Ft(t[e]));
}
function zi(t) {
  return !!(le(t) || t.variants);
}
function Yo(t, e) {
  if (le(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Ft(n) ? n : void 0,
      animate: Ft(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function qo(t) {
  const { initial: e, animate: n } = Yo(t, B(ae));
  return ht(() => ({ initial: e, animate: n }), [ns(e), ns(n)]);
}
function ns(t) {
  return Array.isArray(t) ? t.join(' ') : t;
}
const Ot = {};
function Zo(t) {
  for (const e in t) ((Ot[e] = t[e]), an(e) && (Ot[e].isCSSVariable = !0));
}
function Xi(t, { layout: e, layoutId: n }) {
  return (
    St.has(t) ||
    t.startsWith('origin') ||
    ((e || n !== void 0) && (!!Ot[t] || t === 'opacity'))
  );
}
const Jo = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  Qo = Pt.length;
function tl(t, e, n) {
  let s = '',
    i = !0;
  for (let a = 0; a < Qo; a++) {
    const r = Pt[a],
      o = t[r];
    if (o === void 0) continue;
    let l = !0;
    if (
      (typeof o == 'number'
        ? (l = o === (r.startsWith('scale') ? 1 : 0))
        : (l = parseFloat(o) === 0),
      !l || n)
    ) {
      const u = Fi(o, yn[r]);
      if (!l) {
        i = !1;
        const c = Jo[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return ((s = s.trim()), n ? (s = n(e, i ? '' : s)) : i && (s = 'none'), s);
}
function Pn(t, e, n) {
  const { style: s, vars: i, transformOrigin: a } = t;
  let r = !1,
    o = !1;
  for (const l in e) {
    const u = e[l];
    if (St.has(l)) {
      r = !0;
      continue;
    } else if (an(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Fi(u, yn[l]);
      l.startsWith('origin') ? ((o = !0), (a[l] = c)) : (s[l] = c);
    }
  }
  if (
    (e.transform ||
      (r || n
        ? (s.transform = tl(e, t.transform, n))
        : s.transform && (s.transform = 'none')),
    o)
  ) {
    const { originX: l = '50%', originY: u = '50%', originZ: c = 0 } = a;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Sn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {},
});
function Yi(t, e, n) {
  for (const s in e) !F(e[s]) && !Xi(s, n) && (t[s] = e[s]);
}
function el({ transformTemplate: t }, e) {
  return ht(() => {
    const n = Sn();
    return (Pn(n, e, t), Object.assign({}, n.vars, n.style));
  }, [e]);
}
function nl(t, e) {
  const n = t.style || {},
    s = {};
  return (Yi(s, n, t), Object.assign(s, el(t, e)), s);
}
function sl(t, e) {
  const n = {},
    s = nl(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
      (s.touchAction =
        t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const il = {
    offset: 'stroke-dashoffset',
    array: 'stroke-dasharray',
  },
  rl = {
    offset: 'strokeDashoffset',
    array: 'strokeDasharray',
  };
function al(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const a = i ? il : rl;
  t[a.offset] = P.transform(-s);
  const r = P.transform(e),
    o = P.transform(n);
  t[a.array] = `${r} ${o}`;
}
function qi(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: r = 0,
    // This is object creation, which we try to avoid per-frame.
    ...o
  },
  l,
  u,
  c,
) {
  if ((Pn(t, o, u), l)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: h, style: d } = t;
  (h.transform && ((d.transform = h.transform), delete h.transform),
    (d.transform || h.transformOrigin) &&
      ((d.transformOrigin = h.transformOrigin ?? '50% 50%'),
      delete h.transformOrigin),
    d.transform &&
      ((d.transformBox = c?.transformBox ?? 'fill-box'), delete h.transformBox),
    e !== void 0 && (h.x = e),
    n !== void 0 && (h.y = n),
    s !== void 0 && (h.scale = s),
    i !== void 0 && al(h, i, a, r, !1));
}
const Zi = () => ({
    ...Sn(),
    attrs: {},
  }),
  Ji = (t) => typeof t == 'string' && t.toLowerCase() === 'svg';
function ol(t, e, n, s) {
  const i = ht(() => {
    const a = Zi();
    return (
      qi(a, e, Ji(s), t.transformTemplate, t.style),
      {
        ...a.attrs,
        style: { ...a.style },
      }
    );
  }, [e]);
  if (t.style) {
    const a = {};
    (Yi(a, t.style, t), (i.style = { ...a, ...i.style }));
  }
  return i;
}
const ll = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function Dn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != 'string' /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */ || t.includes('-')
      ? !1
      : /**
         * If it's in our list of lowercase SVG tags, it's an SVG component
         */
        !!(
          ll.indexOf(t) > -1 /**
           * If it contains a capital letter, it's an SVG component
           */ || /[A-Z]/u.test(t)
        )
  );
}
function cl(t, e, n, { latestValues: s }, i, a = !1) {
  const o = (Dn(t) ? ol : sl)(e, s, i, t),
    l = Xo(e, typeof t == 'string', a),
    u = t !== qs ? { ...l, ...o, ref: n } : {},
    { children: c } = e,
    h = ht(() => (F(c) ? c.get() : c), [c]);
  return Or(t, {
    ...u,
    children: h,
  });
}
function ss(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, s) => {
      ((e[0][s] = n.get()), (e[1][s] = n.getVelocity()));
    }),
    e
  );
}
function An(t, e, n, s) {
  if (typeof e == 'function') {
    const [i, a] = ss(s);
    e = e(n !== void 0 ? n : t.custom, i, a);
  }
  if (
    (typeof e == 'string' && (e = t.variants && t.variants[e]),
    typeof e == 'function')
  ) {
    const [i, a] = ss(s);
    e = e(n !== void 0 ? n : t.custom, i, a);
  }
  return e;
}
function Jt(t) {
  return F(t) ? t.get() : t;
}
function ul({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return {
    latestValues: hl(n, s, i, t),
    renderState: e(),
  };
}
function hl(t, e, n, s) {
  const i = {},
    a = s(t, {});
  for (const d in a) i[d] = Jt(a[d]);
  let { initial: r, animate: o } = t;
  const l = le(t),
    u = zi(t);
  e &&
    u &&
    !l &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), o === void 0 && (o = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? o : r;
  if (h && typeof h != 'boolean' && !oe(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const p = An(t, d[f]);
      if (p) {
        const { transitionEnd: v, transition: b, ...y } = p;
        for (const T in y) {
          let x = y[T];
          if (Array.isArray(x)) {
            const D = c ? x.length - 1 : 0;
            x = x[D];
          }
          x !== null && (i[T] = x);
        }
        for (const T in v) i[T] = v[T];
      }
    }
  }
  return i;
}
const Qi = (t) => (e, n) => {
  const s = B(ae),
    i = B(re),
    a = () => ul(t, e, s, i);
  return n ? a() : qe(a);
};
function Vn(t, e, n) {
  const { style: s } = t,
    i = {};
  for (const a in s)
    (F(s[a]) ||
      (e.style && F(e.style[a])) ||
      Xi(a, t) ||
      n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = s[a]);
  return i;
}
const dl = /* @__PURE__ */ Qi({
  scrapeMotionValuesFromProps: Vn,
  createRenderState: Sn,
});
function tr(t, e, n) {
  const s = Vn(t, e, n);
  for (const i in t)
    if (F(t[i]) || F(e[i])) {
      const a =
        Pt.indexOf(i) !== -1
          ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      s[a] = t[i];
    }
  return s;
}
const fl = /* @__PURE__ */ Qi({
    scrapeMotionValuesFromProps: tr,
    createRenderState: Zi,
  }),
  ml = Symbol.for('motionComponentSymbol');
function mt(t) {
  return (
    t &&
    typeof t == 'object' &&
    Object.prototype.hasOwnProperty.call(t, 'current')
  );
}
function pl(t, e, n) {
  return ze(
    (s) => {
      (s && t.onMount && t.onMount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == 'function' ? n(s) : mt(n) && (n.current = s)));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e],
  );
}
const En = (t) => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  gl = 'framerAppearId',
  er = 'data-' + En(gl),
  nr = Tt({});
function yl(t, e, n, s, i) {
  const { visualElement: a } = B(ae),
    r = B(Gi),
    o = B(re),
    l = B(bn).reducedMotion,
    u = tt(null);
  ((s = s || r.renderer),
    !u.current &&
      s &&
      (u.current = s(t, {
        visualState: e,
        parent: a,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: l,
      })));
  const c = u.current,
    h = B(nr);
  c &&
    !c.projection &&
    i &&
    (c.type === 'html' || c.type === 'svg') &&
    vl(u.current, n, i, h);
  const d = tt(!1);
  Zs(() => {
    c && d.current && c.update(n, o);
  });
  const f = n[er],
    p = tt(
      !!f &&
        !window.MotionHandoffIsComplete?.(f) &&
        window.MotionHasOptimisedAnimation?.(f),
    );
  return (
    Js(() => {
      c &&
        ((d.current = !0),
        (window.MotionIsMounted = !0),
        c.updateFeatures(),
        c.scheduleRenderMicrotask(),
        p.current && c.animationState && c.animationState.animateChanges());
    }),
    _t(() => {
      c &&
        (!p.current && c.animationState && c.animationState.animateChanges(),
        p.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(f);
          }),
          (p.current = !1)),
        (c.enteringChildren = void 0));
    }),
    c
  );
}
function vl(t, e, n, s) {
  const {
    layoutId: i,
    layout: a,
    drag: r,
    dragConstraints: o,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = e;
  ((t.projection = new n(
    t.latestValues,
    e['data-framer-portal-id'] ? void 0 : sr(t.parent),
  )),
    t.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!r || (o && mt(o)),
      visualElement: t,
      /**
       * TODO: Update options in an effect. This could be tricky as it'll be too late
       * to update by the time layout animations run.
       * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
       * ensuring it gets called if there's no potential layout animations.
       *
       */
      animationType: typeof a == 'string' ? a : 'both',
      initialPromotionConfig: s,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function sr(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : sr(t.parent);
}
function ge(t, { forwardMotionProps: e = !1 } = {}, n, s) {
  n && Go(n);
  const i = Dn(t) ? fl : dl;
  function a(o, l) {
    let u;
    const c = {
        ...B(bn),
        ...o,
        layoutId: xl(o),
      },
      { isStatic: h } = c,
      d = qo(o),
      f = i(o, h);
    if (!h && Ze) {
      bl();
      const p = Tl(c);
      ((u = p.MeasureLayout),
        (d.visualElement = yl(t, f, c, s, p.ProjectionNode)));
    }
    return g(ae.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? m(u, { visualElement: d.visualElement, ...c })
          : null,
        cl(t, o, pl(f, d.visualElement, l), f, h, e),
      ],
    });
  }
  a.displayName = `motion.${typeof t == 'string' ? t : `create(${t.displayName ?? t.name ?? ''})`}`;
  const r = jr(a);
  return ((r[ml] = t), r);
}
function xl({ layoutId: t }) {
  const e = B(Ye).id;
  return e && t !== void 0 ? e + '-' + t : t;
}
function bl(t, e) {
  B(Gi).strict;
}
function Tl(t) {
  const { drag: e, layout: n } = bt;
  if (!e && !n) return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout:
      e?.isEnabled(t) || n?.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function wl(t, e) {
  if (typeof Proxy > 'u') return ge;
  const n = /* @__PURE__ */ new Map(),
    s = (a, r) => ge(a, r, t, e),
    i = (a, r) => s(a, r);
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (a, r) =>
      r === 'create'
        ? s
        : (n.has(r) || n.set(r, ge(r, void 0, t, e)), n.get(r)),
  });
}
function ir({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s },
  };
}
function Pl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Sl(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x,
  };
}
function ye(t) {
  return t === void 0 || t === 1;
}
function Oe({ scale: t, scaleX: e, scaleY: n }) {
  return !ye(t) || !ye(e) || !ye(n);
}
function at(t) {
  return (
    Oe(t) ||
    rr(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function rr(t) {
  return is(t.x) || is(t.y);
}
function is(t) {
  return t && t !== '0%';
}
function ie(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function rs(t, e, n, s, i) {
  return (i !== void 0 && (t = ie(t, i, s)), ie(t, n, s) + e);
}
function je(t, e = 0, n = 1, s, i) {
  ((t.min = rs(t.min, e, n, s, i)), (t.max = rs(t.max, e, n, s, i)));
}
function ar(t, { x: e, y: n }) {
  (je(t.x, e.translate, e.scale, e.originPoint),
    je(t.y, n.translate, n.scale, n.originPoint));
}
const as = 0.999999999999,
  os = 1.0000000000001;
function Dl(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let a, r;
  for (let o = 0; o < i; o++) {
    ((a = n[o]), (r = a.projectionDelta));
    const { visualElement: l } = a.options;
    (l && l.props.style && l.props.style.display === 'contents') ||
      (s &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        gt(t, {
          x: -a.scroll.offset.x,
          y: -a.scroll.offset.y,
        }),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), ar(t, r)),
      s && at(a.latestValues) && gt(t, a.latestValues));
  }
  (e.x < os && e.x > as && (e.x = 1), e.y < os && e.y > as && (e.y = 1));
}
function pt(t, e) {
  ((t.min = t.min + e), (t.max = t.max + e));
}
function ls(t, e, n, s, i = 0.5) {
  const a = M(t.min, t.max, i);
  je(t, e, n, a, s);
}
function gt(t, e) {
  (ls(t.x, e.x, e.scaleX, e.scale, e.originX),
    ls(t.y, e.y, e.scaleY, e.scale, e.originY));
}
function or(t, e) {
  return ir(Sl(t.getBoundingClientRect(), e));
}
function Al(t, e, n) {
  const s = or(t, n),
    { scroll: i } = e;
  return (i && (pt(s.x, i.offset.x), pt(s.y, i.offset.y)), s);
}
const cs = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
  }),
  yt = () => ({
    x: cs(),
    y: cs(),
  }),
  us = () => ({ min: 0, max: 0 }),
  R = () => ({
    x: us(),
    y: us(),
  }),
  _e = { current: null },
  lr = { current: !1 };
function Vl() {
  if (((lr.current = !0), !!Ze))
    if (window.matchMedia) {
      const t = window.matchMedia('(prefers-reduced-motion)'),
        e = () => (_e.current = t.matches);
      (t.addEventListener('change', e), e());
    } else _e.current = !1;
}
const El = /* @__PURE__ */ new WeakMap();
function Ml(t, e, n) {
  for (const s in e) {
    const i = e[s],
      a = n[s];
    if (F(i)) t.addValue(s, i);
    else if (F(a)) t.addValue(s, xt(i, { owner: t }));
    else if (a !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, xt(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const hs = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
];
class Cl {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      blockInitialAnimation: a,
      visualState: r,
    },
    o = {},
  ) {
    ((this.current = null),
      (this.children = /* @__PURE__ */ new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = /* @__PURE__ */ new Map()),
      (this.KeyframeResolver = pn),
      (this.features = {}),
      (this.valueSubscriptions = /* @__PURE__ */ new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = _.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), E.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u } = r;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = o),
      (this.blockInitialAnimation = !!a),
      (this.isControllingVariants = le(n)),
      (this.isVariantNode = zi(n)),
      this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const d in h) {
      const f = h[d];
      l[d] !== void 0 && F(f) && f.set(l[d]);
    }
  }
  mount(e) {
    ((this.current = e),
      El.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      lr.current || Vl(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : _e.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      et(this.notifyUpdate),
      et(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    (this.children.add(e),
      this.enteringChildren ??
        (this.enteringChildren = /* @__PURE__ */ new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e),
      this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = St.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on('change', (r) => {
      ((this.latestValues[e] = r),
        this.props.onUpdate && E.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let a;
    (window.MotionCheckAppearSync &&
      (a = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        (i(), a && a(), n.owner && n.stop());
      }));
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = 'animation';
    for (e in bt) {
      const n = bt[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] &&
          i &&
          s(this.props) &&
          (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const a = this.features[e];
        a.isMounted ? a.update() : (a.mount(), (a.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : R();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    ((e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let s = 0; s < hs.length; s++) {
      const i = hs[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const a = 'on' + i,
        r = e[a];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    ((this.prevMotionValues = Ml(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    (n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = xt(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, s)),
      s
    );
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let s =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      s != null &&
        (typeof s == 'string' && (Qs(s) || ei(s))
          ? (s = parseFloat(s))
          : !Oo(s) && nt.test(n) && (s = Bi(e, n)),
        this.setBaseTarget(e, F(s) ? s.get() : s)),
      F(s) ? s.get() : s
    );
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == 'string' || typeof n == 'object') {
      const a = An(this.props, n, this.presenceContext?.custom);
      a && (s = a[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !F(i)
      ? i
      : this.initialValues[e] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return (
      this.events[e] || (this.events[e] = new nn()),
      this.events[e].add(n)
    );
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    vn.render(this.render);
  }
}
class cr extends Cl {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Ao));
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    (delete n[e], delete s[e]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    F(e) &&
      (this.childSubscription = e.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function ur(t, { style: e, vars: n }, s, i) {
  const a = t.style;
  let r;
  for (r in e) a[r] = e[r];
  i?.applyProjectionStyles(a, s);
  for (r in n) a.setProperty(r, n[r]);
}
function Rl(t) {
  return window.getComputedStyle(t);
}
class Ll extends cr {
  constructor() {
    (super(...arguments), (this.type = 'html'), (this.renderInstance = ur));
  }
  readValueFromInstance(e, n) {
    if (St.has(n)) return this.projection?.isProjecting ? Re(n) : $a(e, n);
    {
      const s = Rl(e),
        i = (an(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == 'string' ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return or(e, n);
  }
  build(e, n, s) {
    Pn(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Vn(e, n, s);
  }
}
const hr = /* @__PURE__ */ new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function kl(t, e, n, s) {
  ur(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(hr.has(i) ? i : En(i), e.attrs[i]);
}
class Nl extends cr {
  constructor() {
    (super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = R));
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (St.has(n)) {
      const s = Ii(n);
      return (s && s.default) || 0;
    }
    return ((n = hr.has(n) ? n : En(n)), e.getAttribute(n));
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return tr(e, n, s);
  }
  build(e, n, s) {
    qi(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    kl(e, n, s, i);
  }
  mount(e) {
    ((this.isSVGTag = Ji(e.tagName)), super.mount(e));
  }
}
const Il = (t, e) =>
  Dn(t)
    ? new Nl(e)
    : new Ll(e, {
        allowProjection: t !== qs,
      });
function vt(t, e, n) {
  const s = t.getProps();
  return An(s, e, n !== void 0 ? n : s.custom, t);
}
const Ue = (t) => Array.isArray(t);
function Bl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, xt(n));
}
function Fl(t) {
  return Ue(t) ? t[t.length - 1] || 0 : t;
}
function Ol(t, e) {
  const n = vt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...a } = n || {};
  a = { ...a, ...s };
  for (const r in a) {
    const o = Fl(a[r]);
    Bl(t, r, o);
  }
}
function jl(t) {
  return !!(F(t) && t.add);
}
function We(t, e) {
  const n = t.getValue('willChange');
  if (jl(n)) return n.add(e);
  if (!n && Z.WillChange) {
    const s = new Z.WillChange('auto');
    (t.addValue('willChange', s), s.add(e));
  }
}
function dr(t) {
  return t.props[er];
}
const _l = (t) => t !== null;
function Ul(t, { repeat: e, repeatType: n = 'loop' }, s) {
  const i = t.filter(_l),
    a = e && n !== 'loop' && e % 2 === 1 ? 0 : i.length - 1;
  return i[a];
}
const Wl = {
    type: 'spring',
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
  },
  Kl = (t) => ({
    type: 'spring',
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  $l = {
    type: 'keyframes',
    duration: 0.8,
  },
  Gl = {
    type: 'keyframes',
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
  },
  Hl = (t, { keyframes: e }) =>
    e.length > 2
      ? $l
      : St.has(t)
        ? t.startsWith('scale')
          ? Kl(e[1])
          : Wl
        : Gl;
function zl({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: a,
  repeatType: r,
  repeatDelay: o,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Mn =
  (t, e, n, s = {}, i, a) =>
  (r) => {
    const o = gn(s, t) || {},
      l = o.delay || s.delay || 0;
    let { elapsed: u = 0 } = s;
    u = u - /* @__PURE__ */ z(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: 'easeOut',
      velocity: e.getVelocity(),
      ...o,
      delay: -u,
      onUpdate: (d) => {
        (e.set(d), o.onUpdate && o.onUpdate(d));
      },
      onComplete: () => {
        (r(), o.onComplete && o.onComplete());
      },
      name: t,
      motionValue: e,
      element: a ? void 0 : i,
    };
    (zl(o) || Object.assign(c, Hl(t, c)),
      c.duration && (c.duration = /* @__PURE__ */ z(c.duration)),
      c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ z(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let h = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Be(c), c.delay === 0 && (h = !0)),
      (Z.instantAnimations || Z.skipAnimations) &&
        ((h = !0), Be(c), (c.delay = 0)),
      (c.allowFlatten = !o.type && !o.ease),
      h && !a && e.get() !== void 0)
    ) {
      const d = Ul(c.keyframes, o);
      if (d !== void 0) {
        E.update(() => {
          (c.onUpdate(d), c.onComplete());
        });
        return;
      }
    }
    return o.isSync ? new mn(c) : new mo(c);
  };
function Xl({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return ((e[n] = !1), s);
}
function fr(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: a = t.getDefaultTransition(), transitionEnd: r, ...o } = e;
  s && (a = s);
  const l = [],
    u = i && t.animationState && t.animationState.getState()[i];
  for (const c in o) {
    const h = t.getValue(c, t.latestValues[c] ?? null),
      d = o[c];
    if (d === void 0 || (u && Xl(u, c))) continue;
    const f = {
        delay: n,
        ...gn(a || {}, c),
      },
      p = h.get();
    if (
      p !== void 0 &&
      !h.isAnimating &&
      !Array.isArray(d) &&
      d === p &&
      !f.velocity
    )
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const y = dr(t);
      if (y) {
        const T = window.MotionHandoffAnimation(y, c, E);
        T !== null && ((f.startTime = T), (v = !0));
      }
    }
    (We(t, c),
      h.start(
        Mn(c, h, d, t.shouldReduceMotion && Li.has(c) ? { type: !1 } : f, t, v),
      ));
    const b = h.animation;
    b && l.push(b);
  }
  return (
    r &&
      Promise.all(l).then(() => {
        E.update(() => {
          r && Ol(t, r);
        });
      }),
    l
  );
}
function mr(t, e, n, s = 0, i = 1) {
  const a = Array.from(t)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(e),
    r = t.size,
    o = (r - 1) * s;
  return typeof n == 'function' ? n(a, r) : i === 1 ? a * s : o - a * s;
}
function Ke(t, e, n = {}) {
  const s = vt(t, e, n.type === 'exit' ? t.presenceContext?.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const a = s ? () => Promise.all(fr(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: h,
            } = i;
            return Yl(t, e, l, u, c, h, n);
          }
        : () => Promise.resolve(),
    { when: o } = i;
  if (o) {
    const [l, u] = o === 'beforeChildren' ? [a, r] : [r, a];
    return l().then(() => u());
  } else return Promise.all([a(), r(n.delay)]);
}
function Yl(t, e, n = 0, s = 0, i = 0, a = 1, r) {
  const o = [];
  for (const l of t.variantChildren)
    (l.notify('AnimationStart', e),
      o.push(
        Ke(l, e, {
          ...r,
          delay:
            n +
            (typeof s == 'function' ? 0 : s) +
            mr(t.variantChildren, l, s, i, a),
        }).then(() => l.notify('AnimationComplete', e)),
      ));
  return Promise.all(o);
}
function ql(t, e, n = {}) {
  t.notify('AnimationStart', e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((a) => Ke(t, a, n));
    s = Promise.all(i);
  } else if (typeof e == 'string') s = Ke(t, e, n);
  else {
    const i = typeof e == 'function' ? vt(t, e, n.custom) : e;
    s = Promise.all(fr(t, i, n));
  }
  return s.then(() => {
    t.notify('AnimationComplete', e);
  });
}
function pr(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
const Zl = wn.length;
function gr(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? gr(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (n.initial = t.props.initial), n);
  }
  const e = {};
  for (let n = 0; n < Zl; n++) {
    const s = wn[n],
      i = t.props[s];
    (Ft(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const Jl = [...Tn].reverse(),
  Ql = Tn.length;
function tc(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => ql(t, n, s)));
}
function ec(t) {
  let e = tc(t),
    n = ds(),
    s = !0;
  const i = (l) => (u, c) => {
    const h = vt(t, c, l === 'exit' ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: d, transitionEnd: f, ...p } = h;
      u = { ...u, ...p, ...f };
    }
    return u;
  };
  function a(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t,
      c = gr(t.parent) || {},
      h = [],
      d = /* @__PURE__ */ new Set();
    let f = {},
      p = 1 / 0;
    for (let b = 0; b < Ql; b++) {
      const y = Jl[b],
        T = n[y],
        x = u[y] !== void 0 ? u[y] : c[y],
        D = Ft(x),
        w = y === l ? T.isActive : null;
      w === !1 && (p = b);
      let A = x === c[y] && x !== u[y] && D;
      if (
        (A && s && t.manuallyAnimateOnMount && (A = !1),
        (T.protectedKeys = { ...f }), // If it isn't active and hasn't *just* been set as inactive
        (!T.isActive && w === null) || // If we didn't and don't have any defined prop for this animation type
          (!x && !T.prevProp) || // Or if the prop doesn't define an animation
          oe(x) ||
          typeof x == 'boolean')
      )
        continue;
      const V = nc(T.prevProp, x);
      let S =
          V || // If we're making this variant active, we want to always make it active
          (y === l && T.isActive && !A && D) || // If we removed a higher-priority variant (i is in reverse order)
          (b > p && D),
        k = !1;
      const O = Array.isArray(x) ? x : [x];
      let J = O.reduce(i(y), {});
      w === !1 && (J = {});
      const { prevResolvedValues: Cn = {} } = T,
        Lr = {
          ...Cn,
          ...J,
        },
        Rn = (N) => {
          ((S = !0),
            d.has(N) && ((k = !0), d.delete(N)),
            (T.needsAnimating[N] = !0));
          const U = t.getValue(N);
          U && (U.liveStyle = !1);
        };
      for (const N in Lr) {
        const U = J[N],
          it = Cn[N];
        if (f.hasOwnProperty(N)) continue;
        let dt = !1;
        (Ue(U) && Ue(it) ? (dt = !pr(U, it)) : (dt = U !== it),
          dt
            ? U != null
              ? Rn(N)
              : d.add(N)
            : U !== void 0 && d.has(N)
              ? Rn(N)
              : (T.protectedKeys[N] = !0));
      }
      ((T.prevProp = x),
        (T.prevResolvedValues = J),
        T.isActive && (f = { ...f, ...J }),
        s && t.blockInitialAnimation && (S = !1));
      const Ln = A && V;
      S &&
        (!Ln || k) &&
        h.push(
          ...O.map((N) => {
            const U = { type: y };
            if (
              typeof N == 'string' &&
              s &&
              !Ln &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: it } = t,
                dt = vt(it, N);
              if (it.enteringChildren && dt) {
                const { delayChildren: kr } = dt.transition || {};
                U.delay = mr(it.enteringChildren, t, kr);
              }
            }
            return {
              animation: N,
              options: U,
            };
          }),
        );
    }
    if (d.size) {
      const b = {};
      if (typeof u.initial != 'boolean') {
        const y = vt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        y && y.transition && (b.transition = y.transition);
      }
      (d.forEach((y) => {
        const T = t.getBaseTarget(y),
          x = t.getValue(y);
        (x && (x.liveStyle = !0), (b[y] = T ?? null));
      }),
        h.push({ animation: b }));
    }
    let v = !!h.length;
    return (
      s &&
        (u.initial === !1 || u.initial === u.animate) &&
        !t.manuallyAnimateOnMount &&
        (v = !1),
      (s = !1),
      v ? e(h) : Promise.resolve()
    );
  }
  function o(l, u) {
    if (n[l].isActive === u) return Promise.resolve();
    (t.variantChildren?.forEach((h) => h.animationState?.setActive(l, u)),
      (n[l].isActive = u));
    const c = r(l);
    for (const h in n) n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: r,
    setActive: o,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      n = ds();
    },
  };
}
function nc(t, e) {
  return typeof e == 'string' ? e !== t : Array.isArray(e) ? !pr(e, t) : !1;
}
function rt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ds() {
  return {
    animate: rt(!0),
    whileInView: rt(),
    whileHover: rt(),
    whileTap: rt(),
    whileDrag: rt(),
    whileFocus: rt(),
    exit: rt(),
  };
}
class st {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
}
class sc extends st {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    (super(e), e.animationState || (e.animationState = ec(e)));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    oe(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let ic = 0;
class rc extends st {
  constructor() {
    (super(...arguments), (this.id = ic++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const i = this.node.animationState.setActive('exit', !e);
    n &&
      !e &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), e && (this.unmount = e(this.id)));
  }
  unmount() {}
}
const ac = {
  animation: {
    Feature: sc,
  },
  exit: {
    Feature: rc,
  },
};
function jt(t, e, n, s = { passive: !0 }) {
  return (t.addEventListener(e, n, s), () => t.removeEventListener(e, n));
}
function $t(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY,
    },
  };
}
const oc = (t) => (e) => xn(e) && t(e, $t(e));
function Rt(t, e, n, s) {
  return jt(t, e, oc(n), s);
}
const yr = 1e-4,
  lc = 1 - yr,
  cc = 1 + yr,
  vr = 0.01,
  uc = 0 - vr,
  hc = 0 + vr;
function j(t) {
  return t.max - t.min;
}
function dc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function fs(t, e, n, s = 0.5) {
  ((t.origin = s),
    (t.originPoint = M(e.min, e.max, t.origin)),
    (t.scale = j(n) / j(e)),
    (t.translate = M(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= lc && t.scale <= cc) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= uc && t.translate <= hc) || isNaN(t.translate)) &&
      (t.translate = 0));
}
function Lt(t, e, n, s) {
  (fs(t.x, e.x, n.x, s ? s.originX : void 0),
    fs(t.y, e.y, n.y, s ? s.originY : void 0));
}
function ms(t, e, n) {
  ((t.min = n.min + e.min), (t.max = t.min + j(e)));
}
function fc(t, e, n) {
  (ms(t.x, e.x, n.x), ms(t.y, e.y, n.y));
}
function ps(t, e, n) {
  ((t.min = e.min - n.min), (t.max = t.min + j(e)));
}
function kt(t, e, n) {
  (ps(t.x, e.x, n.x), ps(t.y, e.y, n.y));
}
function K(t) {
  return [t('x'), t('y')];
}
const xr = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  gs = (t, e) => Math.abs(t - e);
function mc(t, e) {
  const n = gs(t.x, e.x),
    s = gs(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class br {
  constructor(
    e,
    n,
    {
      transformPagePoint: s,
      contextWindow: i = window,
      dragSnapToOrigin: a = !1,
      distanceThreshold: r = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = xe(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          p = mc(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!f && !p) return;
        const { point: v } = d,
          { timestamp: b } = I;
        this.history.push({ ...v, timestamp: b });
        const { onStart: y, onMove: T } = this.handlers;
        (f ||
          (y && y(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          T && T(this.lastMoveEvent, d));
      }),
      (this.handlePointerMove = (d, f) => {
        ((this.lastMoveEvent = d),
          (this.lastMoveEventInfo = ve(f, this.transformPagePoint)),
          E.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: p, onSessionEnd: v, resumeAnimation: b } = this.handlers;
        if (
          (this.dragSnapToOrigin && b && b(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const y = xe(
          d.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : ve(f, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && p && p(d, y), v && v(d, y));
      }),
      !xn(e))
    )
      return;
    ((this.dragSnapToOrigin = a),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.distanceThreshold = r),
      (this.contextWindow = i || window));
    const o = $t(e),
      l = ve(o, this.transformPagePoint),
      { point: u } = l,
      { timestamp: c } = I;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    (h && h(e, xe(l, this.history)),
      (this.removeListeners = Ut(
        Rt(this.contextWindow, 'pointermove', this.handlePointerMove),
        Rt(this.contextWindow, 'pointerup', this.handlePointerUp),
        Rt(this.contextWindow, 'pointercancel', this.handlePointerUp),
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), et(this.updatePoint));
  }
}
function ve(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ys(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function xe({ point: t }, e) {
  return {
    point: t,
    delta: ys(t, Tr(e)),
    offset: ys(t, pc(e)),
    velocity: gc(e, 0.1),
  };
}
function pc(t) {
  return t[0];
}
function Tr(t) {
  return t[t.length - 1];
}
function gc(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = Tr(t);
  for (
    ;
    n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > /* @__PURE__ */ z(e)));
  )
    n--;
  if (!s) return { x: 0, y: 0 };
  const a = /* @__PURE__ */ $(i.timestamp - s.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / a,
    y: (i.y - s.y) / a,
  };
  return (r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r);
}
function yc(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? M(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? M(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function vs(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function vc(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: vs(t.x, n, i),
    y: vs(t.y, e, s),
  };
}
function xs(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return (
    e.max - e.min < t.max - t.min && ([n, s] = [s, n]),
    { min: n, max: s }
  );
}
function xc(t, e) {
  return {
    x: xs(t.x, e.x),
    y: xs(t.y, e.y),
  };
}
function bc(t, e) {
  let n = 0.5;
  const s = j(t),
    i = j(e);
  return (
    i > s
      ? (n = /* @__PURE__ */ Nt(e.min, e.max - s, t.min))
      : s > i && (n = /* @__PURE__ */ Nt(t.min, t.max - i, e.min)),
    q(0, 1, n)
  );
}
function Tc(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const $e = 0.35;
function wc(t = $e) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = $e),
    {
      x: bs(t, 'left', 'right'),
      y: bs(t, 'top', 'bottom'),
    }
  );
}
function bs(t, e, n) {
  return {
    min: Ts(t, e),
    max: Ts(t, n),
  };
}
function Ts(t, e) {
  return typeof t == 'number' ? t : t[e] || 0;
}
const Pc = /* @__PURE__ */ new WeakMap();
class Sc {
  constructor(e) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = R()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e));
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const a = (h) => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor($t(h).point));
      },
      r = (h, d) => {
        const { drag: f, dragPropagation: p, onDragStart: v } = this.getProps();
        if (
          f &&
          !p &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Co(f)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = h),
          (this.latestPanInfo = d),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          K((y) => {
            let T = this.getAxisMotionValue(y).get() || 0;
            if (X.test(T)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const D = x.layout.layoutBox[y];
                D && (T = j(D) * (parseFloat(T) / 100));
              }
            }
            this.originPoint[y] = T;
          }),
          v && E.postRender(() => v(h, d)),
          We(this.visualElement, 'transform'));
        const { animationState: b } = this.visualElement;
        b && b.setActive('whileDrag', !0);
      },
      o = (h, d) => {
        ((this.latestPointerEvent = h), (this.latestPanInfo = d));
        const {
          dragPropagation: f,
          dragDirectionLock: p,
          onDirectionLock: v,
          onDrag: b,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: y } = d;
        if (p && this.currentDirection === null) {
          ((this.currentDirection = Dc(y)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis('x', d.point, y),
          this.updateAxis('y', d.point, y),
          this.visualElement.render(),
          b && b(h, d));
      },
      l = (h, d) => {
        ((this.latestPointerEvent = h),
          (this.latestPanInfo = d),
          this.stop(h, d),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () =>
        K(
          (h) =>
            this.getAnimationState(h) === 'paused' &&
            this.getAxisMotionValue(h).animation?.play(),
        ),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new br(
      e,
      {
        onSessionStart: a,
        onStart: r,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: s,
        contextWindow: xr(this.visualElement),
      },
    );
  }
  /**
   * @internal
   */
  stop(e, n) {
    const s = e || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      a = this.isDragging;
    if ((this.cancel(), !a || !i || !s)) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: o } = this.getProps();
    o && E.postRender(() => o(s, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    (e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: s } = this.getProps();
    (!s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive('whileDrag', !1));
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Yt(e, i, this.currentDirection)) return;
    const a = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    (this.constraints &&
      this.constraints[e] &&
      (r = yc(r, this.constraints[e], this.elastic[e])),
      a.set(r));
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      i = this.constraints;
    (e && mt(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
        ? (this.constraints = vc(s.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = wc(n)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        K((a) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(a) &&
            (this.constraints[a] = Tc(s.layoutBox[a], this.constraints[a]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !mt(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const a = Al(s, i.root, this.visualElement.getTransformPagePoint());
    let r = xc(i.layout.layoutBox, a);
    if (n) {
      const o = n(Pl(r));
      ((this.hasMutatedConstraints = !!o), o && (r = ir(o)));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: a,
        dragSnapToOrigin: r,
        onDragTransitionEnd: o,
      } = this.getProps(),
      l = this.constraints || {},
      u = K((c) => {
        if (!Yt(c, n, this.currentDirection)) return;
        let h = (l && l[c]) || {};
        r && (h = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          f = i ? 40 : 1e7,
          p = {
            type: 'inertia',
            velocity: s ? e[c] : 0,
            bounceStiffness: d,
            bounceDamping: f,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...a,
            ...h,
          };
        return this.startAxisValueAnimation(c, p);
      });
    return Promise.all(u).then(o);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (
      We(this.visualElement, e),
      s.start(Mn(e, s, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    K((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    K((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    K((n) => {
      const { drag: s } = this.getProps();
      if (!Yt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        a = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: o } = i.layout.layoutBox[n];
        a.set(e[n] - M(r, o, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!mt(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    K((r) => {
      const o = this.getAxisMotionValue(r);
      if (o && this.constraints !== !1) {
        const l = o.get();
        i[r] = bc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = a ? a({}, '') : 'none'),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      K((r) => {
        if (!Yt(r, e, null)) return;
        const o = this.getAxisMotionValue(r),
          { min: l, max: u } = this.constraints[r];
        o.set(M(l, u, i[r]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Pc.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Rt(e, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      s = () => {
        const { dragConstraints: l } = this.getProps();
        mt(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      a = i.addEventListener('measure', s);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      E.read(s));
    const r = jt(window, 'resize', () => this.scalePositionWithinConstraints()),
      o = i.addEventListener(
        'didUpdate',
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (K((c) => {
              const h = this.getAxisMotionValue(c);
              h &&
                ((this.originPoint[c] += l[c].translate),
                h.set(h.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (r(), n(), a(), o && o());
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: a = !1,
        dragElastic: r = $e,
        dragMomentum: o = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: a,
      dragElastic: r,
      dragMomentum: o,
    };
  }
}
function Yt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Dc(t, e = 10) {
  let n = null;
  return (Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n);
}
class Ac extends st {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = G),
      (this.removeListeners = G),
      (this.controls = new Sc(e)));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || G));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const ws = (t) => (e, n) => {
  t && E.postRender(() => t(e, n));
};
class Vc extends st {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = G));
  }
  onPointerDown(e) {
    this.session = new br(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xr(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: ws(e),
      onStart: ws(n),
      onMove: s,
      onEnd: (a, r) => {
        (delete this.session, i && E.postRender(() => i(a, r)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Rt(this.node.current, 'pointerdown', (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const Qt = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1,
};
function Ps(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const At = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == 'string')
        if (P.test(t)) t = parseFloat(t);
        else return t;
      const n = Ps(t, e.target.x),
        s = Ps(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  Ec = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = nt.parse(t);
      if (i.length > 5) return s;
      const a = nt.createTransformer(t),
        r = typeof i[0] != 'number' ? 1 : 0,
        o = n.x.scale * e.x,
        l = n.y.scale * e.y;
      ((i[0 + r] /= o), (i[1 + r] /= l));
      const u = M(o, l, 0.5);
      return (
        typeof i[2 + r] == 'number' && (i[2 + r] /= u),
        typeof i[3 + r] == 'number' && (i[3 + r] /= u),
        a(i)
      );
    },
  };
let be = !1;
class Mc extends Ys {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
        layoutId: i,
      } = this.props,
      { projection: a } = e;
    (Zo(Cc),
      a &&
        (n.group && n.group.add(a),
        s && s.register && i && s.register(a),
        be && a.root.didUpdate(),
        a.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        a.setOptions({
          ...a.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Qt.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: s,
        drag: i,
        isPresent: a,
      } = this.props,
      { projection: r } = s;
    return (
      r &&
        ((r.isPresent = a),
        (be = !0),
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== a
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== a &&
          (a
            ? r.promote()
            : r.relegate() ||
              E.postRender(() => {
                const o = r.getStack();
                (!o || !o.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      vn.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
      } = this.props,
      { projection: i } = e;
    ((be = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function wr(t) {
  const [e, n] = Ki(),
    s = B(Ye);
  return m(Mc, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: B(nr),
    isPresent: e,
    safeToRemove: n,
  });
}
const Cc = {
  borderRadius: {
    ...At,
    applyTo: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
  borderTopLeftRadius: At,
  borderTopRightRadius: At,
  borderBottomLeftRadius: At,
  borderBottomRightRadius: At,
  boxShadow: Ec,
};
function Rc(t, e, n) {
  const s = F(t) ? t : xt(t);
  return (s.start(Mn('', s, e, n)), s.animation);
}
const Lc = (t, e) => t.depth - e.depth;
class kc {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (Je(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (Qe(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(Lc),
      (this.isDirty = !1),
      this.children.forEach(e));
  }
}
function Nc(t, e) {
  const n = _.now(),
    s = ({ timestamp: i }) => {
      const a = i - n;
      a >= e && (et(s), t(a - e));
    };
  return (E.setup(s, !0), () => et(s));
}
const Pr = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Ic = Pr.length,
  Ss = (t) => (typeof t == 'string' ? parseFloat(t) : t),
  Ds = (t) => typeof t == 'number' || P.test(t);
function Bc(t, e, n, s, i, a) {
  i
    ? ((t.opacity = M(0, n.opacity ?? 1, Fc(s))),
      (t.opacityExit = M(e.opacity ?? 1, 0, Oc(s))))
    : a && (t.opacity = M(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < Ic; r++) {
    const o = `border${Pr[r]}Radius`;
    let l = As(e, o),
      u = As(n, o);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Ds(l) === Ds(u)
        ? ((t[o] = Math.max(M(Ss(l), Ss(u), s), 0)),
          (X.test(u) || X.test(l)) && (t[o] += '%'))
        : (t[o] = u));
  }
  (e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, s));
}
function As(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Fc = /* @__PURE__ */ Sr(0, 0.5, ci),
  Oc = /* @__PURE__ */ Sr(0.5, 0.95, G);
function Sr(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(/* @__PURE__ */ Nt(t, e, s)));
}
function Vs(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function W(t, e) {
  (Vs(t.x, e.x), Vs(t.y, e.y));
}
function Es(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
function Ms(t, e, n, s, i) {
  return (
    (t -= e),
    (t = ie(t, 1 / n, s)),
    i !== void 0 && (t = ie(t, 1 / i, s)),
    t
  );
}
function jc(t, e = 0, n = 1, s = 0.5, i, a = t, r = t) {
  if (
    (X.test(e) && ((e = parseFloat(e)), (e = M(r.min, r.max, e / 100) - r.min)),
    typeof e != 'number')
  )
    return;
  let o = M(a.min, a.max, s);
  (t === a && (o -= e),
    (t.min = Ms(t.min, e, n, o, i)),
    (t.max = Ms(t.max, e, n, o, i)));
}
function Cs(t, e, [n, s, i], a, r) {
  jc(t, e[n], e[s], e[i], e.scale, a, r);
}
const _c = ['x', 'scaleX', 'originX'],
  Uc = ['y', 'scaleY', 'originY'];
function Rs(t, e, n, s) {
  (Cs(t.x, e, _c, n ? n.x : void 0, s ? s.x : void 0),
    Cs(t.y, e, Uc, n ? n.y : void 0, s ? s.y : void 0));
}
function Ls(t) {
  return t.translate === 0 && t.scale === 1;
}
function Dr(t) {
  return Ls(t.x) && Ls(t.y);
}
function ks(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Wc(t, e) {
  return ks(t.x, e.x) && ks(t.y, e.y);
}
function Ns(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function Ar(t, e) {
  return Ns(t.x, e.x) && Ns(t.y, e.y);
}
function Is(t) {
  return j(t.x) / j(t.y);
}
function Bs(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class Kc {
  constructor() {
    this.members = [];
  }
  add(e) {
    (Je(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (Qe(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const a = this.members[i];
      if (a.isPresent !== !1) {
        s = a;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      (s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      (n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function $c(t, e, n) {
  let s = '';
  const i = t.x.translate / e.x,
    a = t.y.translate / e.y,
    r = n?.z || 0;
  if (
    ((i || a || r) && (s = `translate3d(${i}px, ${a}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: h,
      rotateY: d,
      skewX: f,
      skewY: p,
    } = n;
    (u && (s = `perspective(${u}px) ${s}`),
      c && (s += `rotate(${c}deg) `),
      h && (s += `rotateX(${h}deg) `),
      d && (s += `rotateY(${d}deg) `),
      f && (s += `skewX(${f}deg) `),
      p && (s += `skewY(${p}deg) `));
  }
  const o = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return ((o !== 1 || l !== 1) && (s += `scale(${o}, ${l})`), s || 'none');
}
const Te = ['', 'X', 'Y', 'Z'],
  Gc = 1e3;
let Hc = 0;
function we(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Vr(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = dr(e);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: a } = t.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', E, !(i || a));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Vr(s);
}
function Er({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, o = e?.()) {
      ((this.id = Hc++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = /* @__PURE__ */ new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = /* @__PURE__ */ new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Yc),
            this.nodes.forEach(Qc),
            this.nodes.forEach(tu),
            this.nodes.forEach(qc));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = /* @__PURE__ */ new Map()),
        (this.latestValues = r),
        (this.root = o ? o.root || o : this),
        (this.path = o ? [...o.path, o] : []),
        (this.parent = o),
        (this.depth = o ? o.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new kc());
    }
    addEventListener(r, o) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new nn()),
        this.eventHandlers.get(r).add(o)
      );
    }
    notifyListeners(r, ...o) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...o);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance) return;
      ((this.isSVG = Wi(r) && !Bo(r)), (this.instance = r));
      const { layoutId: o, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || o) && (this.isLayoutDirty = !0),
        t)
      ) {
        let c,
          h = 0;
        const d = () => (this.root.updateBlockedByResize = !1);
        (E.read(() => {
          h = window.innerWidth;
        }),
          t(r, () => {
            const f = window.innerWidth;
            f !== h &&
              ((h = f),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = Nc(d, 250)),
              Qt.hasAnimatedSinceResize &&
                ((Qt.hasAnimatedSinceResize = !1), this.nodes.forEach(js)));
          }));
      }
      (o && this.root.registerSharedNode(o, this),
        this.options.animate !== !1 &&
          u &&
          (o || l) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: c,
              hasLayoutChanged: h,
              hasRelativeLayoutChanged: d,
              layout: f,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const p =
                  this.options.transition || u.getDefaultTransition() || ru,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: b } =
                  u.getProps(),
                y = !this.targetLayout || !Ar(this.targetLayout, f),
                T = !h && d;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                T ||
                (h && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const x = {
                  ...gn(p, 'layout'),
                  onPlay: v,
                  onComplete: b,
                };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x),
                  this.setAnimationOrigin(c, T));
              } else
                (h || js(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = f;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const r = this.getStack();
      (r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        et(this.updateProjection));
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(eu),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Vr(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        ((h.shouldResetTransform = !0),
          h.updateScroll('snapshot'),
          h.options.layoutRoot && h.willUpdate(!1));
      }
      const { layoutId: o, layout: l } = this.options;
      if (o === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, '')
        : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners('willUpdate'));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Fs));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Os);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Jc),
            this.nodes.forEach(zc),
            this.nodes.forEach(Xc))
          : this.nodes.forEach(Os),
        this.clearAllSnapshots());
      const o = _.now();
      ((I.delta = q(0, 1e3 / 60, o - I.timestamp)),
        (I.timestamp = o),
        (I.isProcessing = !0),
        ue.update.process(I),
        ue.preRender.process(I),
        ue.render.process(I),
        (I.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), vn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Zc), this.sharedNodes.forEach(nu));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        E.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      E.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !j(this.snapshot.measuredBox.x) &&
          !j(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = R()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox));
      const { visualElement: o } = this.options;
      o &&
        o.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          r ? r.layoutBox : void 0,
        );
    }
    updateScroll(r = 'measure') {
      let o = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === r &&
          (o = !1),
        o && this.instance)
      ) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const r =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        o = this.projectionDelta && !Dr(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      r &&
        this.instance &&
        (o || at(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(r = !0) {
      const o = this.measurePageBox();
      let l = this.removeElementScroll(o);
      return (
        r && (l = this.removeTransform(l)),
        au(l),
        {
          animationId: this.root.animationId,
          measuredBox: o,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r) return R();
      const o = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ou))) {
        const { scroll: u } = this.root;
        u && (pt(o.x, u.offset.x), pt(o.y, u.offset.y));
      }
      return o;
    }
    removeElementScroll(r) {
      const o = R();
      if ((W(o, r), this.scroll?.wasRoot)) return o;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: h } = u;
        u !== this.root &&
          c &&
          h.layoutScroll &&
          (c.wasRoot && W(o, r), pt(o.x, c.offset.x), pt(o.y, c.offset.y));
      }
      return o;
    }
    applyTransform(r, o = !1) {
      const l = R();
      W(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!o &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          gt(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y,
          }),
          at(c.latestValues) && gt(l, c.latestValues));
      }
      return (at(this.latestValues) && gt(l, this.latestValues), l);
    }
    removeTransform(r) {
      const o = R();
      W(o, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !at(u.latestValues)) continue;
        Oe(u.latestValues) && u.updateSnapshot();
        const c = R(),
          h = u.measurePageBox();
        (W(c, h),
          Rs(o, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (at(this.latestValues) && Rs(o, this.latestValues), o);
    }
    setTargetDelta(r) {
      ((this.targetDelta = r),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== I.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const o = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = o.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== o;
      if (
        !(
          r ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (
          ((this.resolvedRelativeTargetAt = I.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = R()),
              (this.relativeTargetOrigin = R()),
              kt(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                d.layout.layoutBox,
              ),
              W(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = R()), (this.targetWithTransforms = R())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              fc(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : W(this.target, this.layout.layoutBox),
                ar(this.target, this.targetDelta))
              : W(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d &&
          !!d.resumingFrom == !!this.resumingFrom &&
          !d.options.layoutScroll &&
          d.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = R()),
              (this.relativeTargetOrigin = R()),
              kt(this.relativeTargetOrigin, this.target, d.target),
              W(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Oe(this.parent.latestValues) ||
          rr(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      const r = this.getLead(),
        o = !!this.resumingFrom || this !== r;
      let l = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1),
        o &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === I.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      W(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        d = this.treeScale.y;
      (Dl(this.layoutCorrected, this.treeScale, this.path, o),
        r.layout &&
          !r.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((r.target = r.layout.layoutBox), (r.targetWithTransforms = R())));
      const { target: f } = r;
      if (!f) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Es(this.prevProjectionDelta.x, this.projectionDelta.x),
          Es(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Lt(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== d ||
          !Bs(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Bs(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', f)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if ((this.options.visualElement?.scheduleRender(), r)) {
        const o = this.getStack();
        o && o.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = yt()),
        (this.projectionDelta = yt()),
        (this.projectionDeltaWithTransform = yt()));
    }
    setAnimationOrigin(r, o = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        h = yt();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !o));
      const d = R(),
        f = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        v = f !== p,
        b = this.getStack(),
        y = !b || b.members.length <= 1,
        T = !!(v && !y && this.options.crossfade === !0 && !this.path.some(iu));
      this.animationProgress = 0;
      let x;
      ((this.mixTargetDelta = (D) => {
        const w = D / 1e3;
        (_s(h.x, r.x, w),
          _s(h.y, r.y, w),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (kt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            su(this.relativeTarget, this.relativeTargetOrigin, d, w),
            x && Wc(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = R()),
            W(x, this.relativeTarget)),
          v &&
            ((this.animationValues = c), Bc(c, u, this.latestValues, w, T, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(r) {
      (this.notifyListeners('animationStart'),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (et(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = E.update(() => {
          ((Qt.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = xt(0)),
            (this.currentAnimation = Rc(this.motionValue, [0, 1e3], {
              ...r,
              velocity: 0,
              isSync: !0,
              onUpdate: (o) => {
                (this.mixTargetDelta(o), r.onUpdate && r.onUpdate(o));
              },
              onStop: () => {},
              onComplete: () => {
                (r.onComplete && r.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      (r && r.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete'));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Gc),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let {
        targetWithTransforms: o,
        target: l,
        layout: u,
        latestValues: c,
      } = r;
      if (!(!o || !l || !u)) {
        if (
          this !== r &&
          this.layout &&
          u &&
          Mr(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || R();
          const h = j(this.layout.layoutBox.x);
          ((l.x.min = r.target.x.min), (l.x.max = l.x.min + h));
          const d = j(this.layout.layoutBox.y);
          ((l.y.min = r.target.y.min), (l.y.max = l.y.min + d));
        }
        (W(o, l),
          gt(o, c),
          Lt(this.projectionDeltaWithTransform, this.layoutCorrected, o, c));
      }
    }
    registerSharedNode(r, o) {
      (this.sharedNodes.has(r) || this.sharedNodes.set(r, new Kc()),
        this.sharedNodes.get(r).add(o));
      const u = o.options.initialPromotionConfig;
      o.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(o)
            : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: o, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        o && this.setOptions({ transition: o }));
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let o = !1;
      const { latestValues: l } = r;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (o = !0),
        !o)
      )
        return;
      const u = {};
      l.z && we('z', r, u, this.animationValues);
      for (let c = 0; c < Te.length; c++)
        (we(`rotate${Te[c]}`, r, u, this.animationValues),
          we(`skew${Te[c]}`, r, u, this.animationValues));
      r.render();
      for (const c in u)
        (r.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      r.scheduleRender();
    }
    applyProjectionStyles(r, o) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = 'hidden';
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (r.visibility = ''),
          (r.opacity = ''),
          (r.pointerEvents = Jt(o?.pointerEvents) || ''),
          (r.transform = l ? l(this.latestValues, '') : 'none'));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((r.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (r.pointerEvents = Jt(o?.pointerEvents) || '')),
          this.hasProjected &&
            !at(this.latestValues) &&
            ((r.transform = l ? l({}, '') : 'none'), (this.hasProjected = !1)));
        return;
      }
      r.visibility = '';
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = $c(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (h = l(c, h)), (r.transform = h));
      const { x: d, y: f } = this.projectionDelta;
      ((r.transformOrigin = `${d.origin * 100}% ${f.origin * 100}% 0`),
        u.animationValues
          ? (r.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (r.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ''
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const p in Ot) {
        if (c[p] === void 0) continue;
        const { correct: v, applyTo: b, isCSSVariable: y } = Ot[p],
          T = h === 'none' ? c[p] : v(c[p], u);
        if (b) {
          const x = b.length;
          for (let D = 0; D < x; D++) r[b[D]] = T;
        } else
          y ? (this.options.visualElement.renderState.vars[p] = T) : (r[p] = T);
      }
      this.options.layoutId &&
        (r.pointerEvents = u === this ? Jt(o?.pointerEvents) || '' : 'none');
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      (this.root.nodes.forEach((r) => r.currentAnimation?.stop()),
        this.root.nodes.forEach(Fs),
        this.root.sharedNodes.clear());
    }
  };
}
function zc(t) {
  t.updateLayout();
}
function Xc(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: s } = t.layout,
      { animationType: i } = t.options,
      a = e.source !== t.layout.source;
    i === 'size'
      ? K((c) => {
          const h = a ? e.measuredBox[c] : e.layoutBox[c],
            d = j(h);
          ((h.min = n[c].min), (h.max = h.min + d));
        })
      : Mr(i, e.layoutBox, n) &&
        K((c) => {
          const h = a ? e.measuredBox[c] : e.layoutBox[c],
            d = j(n[c]);
          ((h.max = h.min + d),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[c].max = t.relativeTarget[c].min + d)));
        });
    const r = yt();
    Lt(r, n, e.layoutBox);
    const o = yt();
    a ? Lt(o, t.applyTransform(s, !0), e.measuredBox) : Lt(o, n, e.layoutBox);
    const l = !Dr(r);
    let u = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: d } = c;
        if (h && d) {
          const f = R();
          kt(f, e.layoutBox, h.layoutBox);
          const p = R();
          (kt(p, n, d.layoutBox),
            Ar(f, p) || (u = !0),
            c.options.layoutRoot &&
              ((t.relativeTarget = p),
              (t.relativeTargetOrigin = f),
              (t.relativeParent = c)));
        }
      }
    }
    t.notifyListeners('didUpdate', {
      layout: n,
      snapshot: e,
      delta: o,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Yc(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function qc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Zc(t) {
  t.clearSnapshot();
}
function Fs(t) {
  t.clearMeasurements();
}
function Os(t) {
  t.isLayoutDirty = !1;
}
function Jc(t) {
  const { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'),
    t.resetTransform());
}
function js(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function Qc(t) {
  t.resolveTargetDelta();
}
function tu(t) {
  t.calcProjection();
}
function eu(t) {
  t.resetSkewAndRotation();
}
function nu(t) {
  t.removeLeadSnapshot();
}
function _s(t, e, n) {
  ((t.translate = M(e.translate, 0, n)),
    (t.scale = M(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function Us(t, e, n, s) {
  ((t.min = M(e.min, n.min, s)), (t.max = M(e.max, n.max, s)));
}
function su(t, e, n, s) {
  (Us(t.x, e.x, n.x, s), Us(t.y, e.y, n.y, s));
}
function iu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const ru = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
  },
  Ws = (t) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  Ks = Ws('applewebkit/') && !Ws('chrome/') ? Math.round : G;
function $s(t) {
  ((t.min = Ks(t.min)), (t.max = Ks(t.max)));
}
function au(t) {
  ($s(t.x), $s(t.y));
}
function Mr(t, e, n) {
  return (
    t === 'position' || (t === 'preserve-aspect' && !dc(Is(e), Is(n), 0.2))
  );
}
function ou(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const lu = Er({
    attachResizeListener: (t, e) => jt(t, 'resize', e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Pe = {
    current: void 0,
  },
  Cr = Er({
    measureScroll: (t) => ({
      x: t.scrollLeft,
      y: t.scrollTop,
    }),
    defaultParent: () => {
      if (!Pe.current) {
        const t = new lu({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (Pe.current = t));
      }
      return Pe.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : 'none';
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed',
  }),
  cu = {
    pan: {
      Feature: Vc,
    },
    drag: {
      Feature: Ac,
      ProjectionNode: Cr,
      MeasureLayout: wr,
    },
  };
function Gs(t, e, n) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive('whileHover', n === 'Start');
  const i = 'onHover' + n,
    a = s[i];
  a && E.postRender(() => a(e, $t(e)));
}
class uu extends st {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Ro(
        e,
        (n, s) => (Gs(this.node, s, 'Start'), (i) => Gs(this.node, i, 'End')),
      ));
  }
  unmount() {}
}
class hu extends st {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(':focus-visible');
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ut(
      jt(this.node.current, 'focus', () => this.onFocus()),
      jt(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
function Hs(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    s.whileTap &&
    t.animationState.setActive('whileTap', n === 'Start');
  const i = 'onTap' + (n === 'End' ? '' : n),
    a = s[i];
  a && E.postRender(() => a(e, $t(e)));
}
class du extends st {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Io(
        e,
        (n, s) => (
          Hs(this.node, s, 'Start'),
          (i, { success: a }) => Hs(this.node, i, a ? 'End' : 'Cancel')
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Ge = /* @__PURE__ */ new WeakMap(),
  Se = /* @__PURE__ */ new WeakMap(),
  fu = (t) => {
    const e = Ge.get(t.target);
    e && e(t);
  },
  mu = (t) => {
    t.forEach(fu);
  };
function pu({ root: t, ...e }) {
  const n = t || document;
  Se.has(n) || Se.set(n, {});
  const s = Se.get(n),
    i = JSON.stringify(e);
  return (
    s[i] || (s[i] = new IntersectionObserver(mu, { root: t, ...e })),
    s[i]
  );
}
function gu(t, e, n) {
  const s = pu(e);
  return (
    Ge.set(t, n),
    s.observe(t),
    () => {
      (Ge.delete(t), s.unobserve(t));
    }
  );
}
const yu = {
  some: 0,
  all: 1,
};
class vu extends st {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = 'some', once: a } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == 'number' ? i : yu[i],
      },
      o = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), a && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u));
        const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(),
          d = u ? c : h;
        d && d(l);
      };
    return gu(this.node.current, r, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: e, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(xu(e, n)) && this.startObserver();
  }
  unmount() {}
}
function xu({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const bu = {
    inView: {
      Feature: vu,
    },
    tap: {
      Feature: du,
    },
    focus: {
      Feature: hu,
    },
    hover: {
      Feature: uu,
    },
  },
  Tu = {
    layout: {
      ProjectionNode: Cr,
      MeasureLayout: wr,
    },
  },
  wu = {
    ...ac,
    ...bu,
    ...cu,
    ...Tu,
  },
  Rr = /* @__PURE__ */ wl(wu, Il),
  Pu = globalThis.__GLOBALS__.getAssetURL(
    '13a87ebe8d52252380a917437a7ba97c4d34355e.avif',
  ),
  Su = globalThis.__GLOBALS__.getAssetURL(
    '9927ef591e6aeb63891cf432076b3467dfbd4777.webp',
  ),
  Du = globalThis.__GLOBALS__.getAssetURL(
    '16a9fde8a5bc0a83aedd938e24d56d8e72f2ae4b.webp',
  ),
  Au = globalThis.__GLOBALS__.getAssetURL(
    'd03a307bb2b6acb25a22f23a9520f7d71f4670fb.webp',
  ),
  Vu = globalThis.__GLOBALS__.getAssetURL(
    '030f2c4523c631db4da1a11e8a2f8fd7d2f25b52.webp',
  ),
  Eu =
    'data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20102%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22Mask%22%20d%3D%22M0%200H90C96.6274%200%20102%205.37258%20102%2012V80H0V0Z%22%20fill%3D%22var(--fill-0%2C%20%23D9D9D9)%22%2F%3E%0A%3C%2Fsvg%3E%0A',
  He = [
    {
      text: `20 000 бонусов
для юрлиц и ИП`,
      image: Vu,
      color: '#424242',
      imageStyle: 'h-[98.36%] left-[0.98%] top-[1.34%] w-[98.04%]',
    },
    {
      text: `Переагрузка
реферальной программы`,
      image: Au,
      color: '#424242',
      imageStyle: 'h-[115.39%] left-[-6.87%] top-[-7.05%] w-[115.71%]',
    },
    {
      text: `Новые возможности
для бизнеса`,
      image: Du,
      color: '#424242',
      imageStyle: 'h-[114.94%] left-[-3.82%] top-[-4.17%] w-[108.35%]',
    },
    {
      text: `Специаьные условия
для партнеров`,
      image: Su,
      color: '#424242',
      imageStyle: 'h-[98.92%] left-[1.39%] top-[-0.09%] w-[97.22%]',
    },
    {
      text: `Бонусы до конца
марта 2026`,
      image: Pu,
      color: '#424242',
      imageStyle: 'h-[133.12%] left-[-2.29%] top-[-17.7%] w-[103.66%]',
    },
  ];
function Mu({
  src: t,
  isVisible: e,
  direction: n = 'default',
  imageStyle: s,
  config: i,
}) {
  const a = i.imageMovementDistance,
    r = n === 'default' ? -i.imageMovementDistance : i.imageMovementDistance;
  return /* @__PURE__ */ m('div', {
    className: 'absolute h-[72px] left-[183px] top-0 w-[102px]',
    'data-name': 'Image',
    children: /* @__PURE__ */ m('div', {
      className:
        'absolute h-[104px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_24px] mask-size-[102px_80px] top-[-24px] w-[134px]',
      'data-name': 'Image',
      style: { maskImage: `url('${Eu}')` },
      children: /* @__PURE__ */ m('div', {
        className: 'absolute inset-0 overflow-hidden pointer-events-none',
        children: /* @__PURE__ */ m($i, {
          mode: 'wait',
          children:
            e &&
            /* @__PURE__ */ m(
              Rr.img,
              {
                alt: '',
                className: `absolute ${s}`,
                src: t,
                initial: { opacity: 0, x: a },
                exit: {
                  opacity: 0,
                  x: r,
                  transition: {
                    duration: i.imageExitDuration / 1e3,
                    ease: i.imageExitEase,
                    opacity: { duration: (i.imageExitDuration / 1e3) * 0.6 },
                    x: { duration: (i.imageExitDuration / 1e3) * 0.6 },
                  },
                },
                animate: { opacity: 1, x: 0 },
                transition: {
                  duration: i.imageEntranceDuration / 1e3,
                  ease: i.imageEntranceEase,
                  opacity: { duration: (i.imageEntranceDuration / 1e3) * 0.6 },
                  x: { duration: (i.imageEntranceDuration / 1e3) * 0.6 },
                },
              },
              t,
            ),
        }),
      }),
    }),
  });
}
function Cu({ text: t, isVisible: e, direction: n = 'default', config: s }) {
  const i = t.split(`
`),
    a = n === 'default' ? s.textMovementDistance : -s.textMovementDistance,
    r = -s.textMovementDistance;
  return /* @__PURE__ */ m('div', {
    className: 'absolute left-[12px] top-[16px] w-[171px] overflow-hidden',
    children: /* @__PURE__ */ m($i, {
      mode: 'wait',
      children:
        e &&
        /* @__PURE__ */ m(
          Rr.div,
          {
            className: 'content-stretch flex flex-col items-start w-full',
            'data-name': 'Text',
            initial: { opacity: 0, x: a },
            exit: {
              opacity: 0,
              x: r,
              transition: {
                duration: s.textExitDuration / 1e3,
                ease: s.textExitEase,
                opacity: { duration: (s.textExitDuration / 1e3) * 0.6 },
                x: { duration: (s.textExitDuration / 1e3) * 0.6 },
              },
            },
            animate: { opacity: 1, x: 0 },
            transition: {
              duration: s.textEntranceDuration / 1e3,
              ease: s.textEntranceEase,
              opacity: { duration: (s.textEntranceDuration / 1e3) * 0.6 },
              x: { duration: (s.textEntranceDuration / 1e3) * 0.6 },
            },
            children: /* @__PURE__ */ m('p', {
              className:
                "font-['SB_Sans_Interface:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e6e8ef] text-[14px] w-full",
              children: i.map((o, l) =>
                /* @__PURE__ */ g(
                  'span',
                  {
                    children: [
                      o,
                      l < i.length - 1 &&
                        /* @__PURE__ */ m('br', { 'aria-hidden': 'true' }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          },
          t,
        ),
    }),
  });
}
function Ru({
  data: t,
  textVisible: e,
  imageVisible: n,
  direction: s = 'default',
  config: i,
}) {
  const a = s === 'mixed' ? 'reverse' : s,
    r = s === 'mixed' ? 'default' : s;
  return /* @__PURE__ */ g('div', {
    className: 'h-[72px] relative rounded-[12px] shrink-0 w-full',
    'data-name': 'BannerContent',
    style: { backgroundColor: t.color },
    children: [
      /* @__PURE__ */ m(Mu, {
        src: t.image,
        isVisible: n,
        direction: a,
        imageStyle: t.imageStyle,
        config: i,
      }),
      /* @__PURE__ */ m(Cu, {
        text: t.text,
        isVisible: e,
        direction: r,
        config: i,
      }),
    ],
  });
}
function Lu({
  data: t,
  textVisible: e,
  imageVisible: n,
  direction: s = 'default',
  config: i,
}) {
  return /* @__PURE__ */ m('div', {
    className:
      'content-stretch flex flex-col items-start relative shrink-0 w-[285px]',
    'data-name': 'BannerBlock',
    children: /* @__PURE__ */ m(Ru, {
      data: t,
      textVisible: e,
      imageVisible: n,
      direction: s,
      config: i,
    }),
  });
}
function ku({ currentIndex: t }) {
  return /* @__PURE__ */ m('div', {
    className:
      'content-stretch flex flex-col items-center relative shrink-0 w-full',
    'data-name': 'Timeline Layout',
    children: /* @__PURE__ */ m('div', {
      className:
        'content-stretch flex gap-[6px] h-[4px] items-start relative shrink-0',
      'data-name': 'TimeLine Pager',
      children: He.map((e, n) =>
        /* @__PURE__ */ m(
          'div',
          {
            className:
              'rounded-[4px] shrink-0 size-[4px] transition-colors duration-300',
            'data-name': 'Step',
            style: {
              backgroundColor: n === t ? '#389f74' : '#dde0ea',
            },
          },
          n,
        ),
      ),
    }),
  });
}
function Nu({ direction: t = 'default', config: e }) {
  const [n, s] = Y(2),
    [i, a] = Y(!0),
    [r, o] = Y(!0),
    [l, u] = Y(!1);
  return (
    _t(() => {
      if (!Ze) return;
      const c = setInterval(() => {
        l ||
          (u(!0),
          a(!1),
          setTimeout(() => {
            (o(!1),
              setTimeout(() => {
                (s((h) => (h + 1) % He.length),
                  a(!0),
                  setTimeout(() => {
                    (o(!0), u(!1));
                  }, e.imageDelay));
              }, 500));
          }, e.imageDelay));
      }, e.cycleDelay);
      return () => clearInterval(c);
    }, [l, e]),
    /* @__PURE__ */ g('div', {
      className:
        'content-stretch flex flex-col gap-[4px] items-start relative w-[285px]',
      'data-name': 'Widget/PromoBanners',
      children: [
        /* @__PURE__ */ m(Lu, {
          data: He[n],
          textVisible: i,
          imageVisible: r,
          direction: t,
          config: e,
        }),
        /* @__PURE__ */ m(ku, { currentIndex: n }),
      ],
    })
  );
}
function Iu({ config: t, onConfigChange: e, onSave: n }) {
  const [s, i] = Y(''),
    a = [
      { value: 'linear', label: 'Linear' },
      { value: 'easeIn', label: 'Ease In' },
      { value: 'easeOut', label: 'Ease Out' },
      { value: 'easeInOut', label: 'Ease In Out' },
      { value: 'circIn', label: 'Circ In' },
      { value: 'circOut', label: 'Circ Out' },
      { value: 'circInOut', label: 'Circ In Out' },
      { value: 'backIn', label: 'Back In' },
      { value: 'backOut', label: 'Back Out' },
      { value: 'backInOut', label: 'Back In Out' },
    ];
  return /* @__PURE__ */ g('div', {
    className: 'w-full bg-white rounded-lg shadow-md p-6',
    children: [
      /* @__PURE__ */ g('div', {
        className: 'flex items-center justify-between mb-6',
        children: [
          /* @__PURE__ */ m('h2', {
            className: 'text-xl font-semibold text-gray-800',
            children: 'Конфигуратор анимации',
          }),
          /* @__PURE__ */ g('div', {
            className: 'flex items-center gap-2',
            children: [
              /* @__PURE__ */ m('input', {
                type: 'text',
                value: s,
                onChange: (o) => i(o.target.value),
                placeholder: 'Название конфигурации',
                className:
                  'px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
              }),
              /* @__PURE__ */ m('button', {
                onClick: () => {
                  s.trim() && (n(s.trim()), i(''));
                },
                disabled: !s.trim(),
                className:
                  'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors',
                children: 'Сохранить',
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ g('div', {
        className: 'grid grid-cols-3 gap-6',
        children: [
          /* @__PURE__ */ g('div', {
            className: 'space-y-6',
            children: [
              /* @__PURE__ */ m('h3', {
                className: 'text-lg font-semibold text-gray-800 border-b pb-2',
                children: 'Текст',
              }),
              /* @__PURE__ */ g('div', {
                className: 'space-y-4',
                children: [
                  /* @__PURE__ */ m('h4', {
                    className: 'text-md font-medium text-gray-700',
                    children: 'Появление',
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Длительность (мс)',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ m('input', {
                            type: 'range',
                            min: '100',
                            max: '2000',
                            step: '50',
                            value: t.textEntranceDuration,
                            onChange: (o) =>
                              e({
                                ...t,
                                textEntranceDuration: parseInt(o.target.value),
                              }),
                            className:
                              'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
                          }),
                          /* @__PURE__ */ m('input', {
                            type: 'number',
                            value: t.textEntranceDuration,
                            onChange: (o) => {
                              const l = parseInt(o.target.value) || 100;
                              e({
                                ...t,
                                textEntranceDuration: Math.max(
                                  100,
                                  Math.min(2e3, l),
                                ),
                              });
                            },
                            className:
                              'w-20 px-2 py-1 border border-gray-300 rounded text-sm',
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Кривая',
                      }),
                      /* @__PURE__ */ m('select', {
                        value: t.textEntranceEase,
                        onChange: (o) =>
                          e({ ...t, textEntranceEase: o.target.value }),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm',
                        children: a.map((o) =>
                          /* @__PURE__ */ m(
                            'option',
                            { value: o.value, children: o.label },
                            o.value,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ g('div', {
                className: 'space-y-4 pt-4 border-t',
                children: [
                  /* @__PURE__ */ m('h4', {
                    className: 'text-md font-medium text-gray-700',
                    children: 'Исчезновение',
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Длительность (мс)',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ m('input', {
                            type: 'range',
                            min: '100',
                            max: '2000',
                            step: '50',
                            value: t.textExitDuration,
                            onChange: (o) =>
                              e({
                                ...t,
                                textExitDuration: parseInt(o.target.value),
                              }),
                            className:
                              'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
                          }),
                          /* @__PURE__ */ m('input', {
                            type: 'number',
                            value: t.textExitDuration,
                            onChange: (o) => {
                              const l = parseInt(o.target.value) || 100;
                              e({
                                ...t,
                                textExitDuration: Math.max(
                                  100,
                                  Math.min(2e3, l),
                                ),
                              });
                            },
                            className:
                              'w-20 px-2 py-1 border border-gray-300 rounded text-sm',
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Кривая',
                      }),
                      /* @__PURE__ */ m('select', {
                        value: t.textExitEase,
                        onChange: (o) =>
                          e({ ...t, textExitEase: o.target.value }),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm',
                        children: a.map((o) =>
                          /* @__PURE__ */ m(
                            'option',
                            { value: o.value, children: o.label },
                            o.value,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ g('div', {
                className: 'space-y-4 pt-4 border-t',
                children: [
                  /* @__PURE__ */ m('h4', {
                    className: 'text-md font-medium text-gray-700',
                    children: 'Расстояние движения',
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Дистанция (px)',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ m('input', {
                            type: 'range',
                            min: '0',
                            max: '200',
                            step: '5',
                            value: t.textMovementDistance,
                            onChange: (o) =>
                              e({
                                ...t,
                                textMovementDistance: parseInt(o.target.value),
                              }),
                            className:
                              'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
                          }),
                          /* @__PURE__ */ m('input', {
                            type: 'number',
                            value: t.textMovementDistance,
                            onChange: (o) => {
                              const l = parseInt(o.target.value) || 0;
                              e({
                                ...t,
                                textMovementDistance: Math.max(
                                  0,
                                  Math.min(200, l),
                                ),
                              });
                            },
                            className:
                              'w-20 px-2 py-1 border border-gray-300 rounded text-sm',
                          }),
                        ],
                      }),
                      /* @__PURE__ */ m('p', {
                        className: 'text-xs text-gray-500 mt-1',
                        children: 'Расстояние появления и исчезновения текста',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ g('div', {
            className: 'space-y-6',
            children: [
              /* @__PURE__ */ m('h3', {
                className: 'text-lg font-semibold text-gray-800 border-b pb-2',
                children: 'Картинка',
              }),
              /* @__PURE__ */ g('div', {
                className: 'space-y-4',
                children: [
                  /* @__PURE__ */ m('h4', {
                    className: 'text-md font-medium text-gray-700',
                    children: 'Появление',
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Длительность (мс)',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ m('input', {
                            type: 'range',
                            min: '100',
                            max: '2000',
                            step: '50',
                            value: t.imageEntranceDuration,
                            onChange: (o) =>
                              e({
                                ...t,
                                imageEntranceDuration: parseInt(o.target.value),
                              }),
                            className:
                              'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
                          }),
                          /* @__PURE__ */ m('input', {
                            type: 'number',
                            value: t.imageEntranceDuration,
                            onChange: (o) => {
                              const l = parseInt(o.target.value) || 100;
                              e({
                                ...t,
                                imageEntranceDuration: Math.max(
                                  100,
                                  Math.min(2e3, l),
                                ),
                              });
                            },
                            className:
                              'w-20 px-2 py-1 border border-gray-300 rounded text-sm',
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Кривая',
                      }),
                      /* @__PURE__ */ m('select', {
                        value: t.imageEntranceEase,
                        onChange: (o) =>
                          e({ ...t, imageEntranceEase: o.target.value }),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm',
                        children: a.map((o) =>
                          /* @__PURE__ */ m(
                            'option',
                            { value: o.value, children: o.label },
                            o.value,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ g('div', {
                className: 'space-y-4 pt-4 border-t',
                children: [
                  /* @__PURE__ */ m('h4', {
                    className: 'text-md font-medium text-gray-700',
                    children: 'Исчезновение',
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Длительность (мс)',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ m('input', {
                            type: 'range',
                            min: '100',
                            max: '2000',
                            step: '50',
                            value: t.imageExitDuration,
                            onChange: (o) =>
                              e({
                                ...t,
                                imageExitDuration: parseInt(o.target.value),
                              }),
                            className:
                              'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
                          }),
                          /* @__PURE__ */ m('input', {
                            type: 'number',
                            value: t.imageExitDuration,
                            onChange: (o) => {
                              const l = parseInt(o.target.value) || 100;
                              e({
                                ...t,
                                imageExitDuration: Math.max(
                                  100,
                                  Math.min(2e3, l),
                                ),
                              });
                            },
                            className:
                              'w-20 px-2 py-1 border border-gray-300 rounded text-sm',
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Кривая',
                      }),
                      /* @__PURE__ */ m('select', {
                        value: t.imageExitEase,
                        onChange: (o) =>
                          e({ ...t, imageExitEase: o.target.value }),
                        className:
                          'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm',
                        children: a.map((o) =>
                          /* @__PURE__ */ m(
                            'option',
                            { value: o.value, children: o.label },
                            o.value,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ g('div', {
                className: 'space-y-4 pt-4 border-t',
                children: [
                  /* @__PURE__ */ m('h4', {
                    className: 'text-md font-medium text-gray-700',
                    children: 'Расстояние движения',
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Дистанция (px)',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ m('input', {
                            type: 'range',
                            min: '0',
                            max: '200',
                            step: '5',
                            value: t.imageMovementDistance,
                            onChange: (o) =>
                              e({
                                ...t,
                                imageMovementDistance: parseInt(o.target.value),
                              }),
                            className:
                              'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
                          }),
                          /* @__PURE__ */ m('input', {
                            type: 'number',
                            value: t.imageMovementDistance,
                            onChange: (o) => {
                              const l = parseInt(o.target.value) || 0;
                              e({
                                ...t,
                                imageMovementDistance: Math.max(
                                  0,
                                  Math.min(200, l),
                                ),
                              });
                            },
                            className:
                              'w-20 px-2 py-1 border border-gray-300 rounded text-sm',
                          }),
                        ],
                      }),
                      /* @__PURE__ */ m('p', {
                        className: 'text-xs text-gray-500 mt-1',
                        children:
                          'Расстояние появления и исчезновения картинки',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ g('div', {
            className: 'space-y-6',
            children: [
              /* @__PURE__ */ m('h3', {
                className: 'text-lg font-semibold text-gray-800 border-b pb-2',
                children: 'Тайминг',
              }),
              /* @__PURE__ */ g('div', {
                className: 'space-y-6',
                children: [
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Задержка картинки (мс)',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ m('input', {
                            type: 'range',
                            min: '0',
                            max: '1000',
                            step: '50',
                            value: t.imageDelay,
                            onChange: (o) =>
                              e({ ...t, imageDelay: parseInt(o.target.value) }),
                            className:
                              'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
                          }),
                          /* @__PURE__ */ m('input', {
                            type: 'number',
                            value: t.imageDelay,
                            onChange: (o) => {
                              const l = parseInt(o.target.value) || 0;
                              e({
                                ...t,
                                imageDelay: Math.max(0, Math.min(1e3, l)),
                              });
                            },
                            className:
                              'w-20 px-2 py-1 border border-gray-300 rounded text-sm',
                          }),
                        ],
                      }),
                      /* @__PURE__ */ m('p', {
                        className: 'text-xs text-gray-500 mt-1',
                        children: 'Отсчитывается от начала появления текста',
                      }),
                    ],
                  }),
                  /* @__PURE__ */ g('div', {
                    children: [
                      /* @__PURE__ */ m('label', {
                        className:
                          'block text-sm font-medium text-gray-700 mb-2',
                        children: 'Время показа слайда (мс)',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          /* @__PURE__ */ m('input', {
                            type: 'range',
                            min: '1000',
                            max: '10000',
                            step: '500',
                            value: t.cycleDelay,
                            onChange: (o) =>
                              e({ ...t, cycleDelay: parseInt(o.target.value) }),
                            className:
                              'flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
                          }),
                          /* @__PURE__ */ m('input', {
                            type: 'number',
                            value: t.cycleDelay,
                            onChange: (o) => {
                              const l = parseInt(o.target.value) || 1e3;
                              e({
                                ...t,
                                cycleDelay: Math.max(1e3, Math.min(1e4, l)),
                              });
                            },
                            className:
                              'w-20 px-2 py-1 border border-gray-300 rounded text-sm',
                          }),
                        ],
                      }),
                      /* @__PURE__ */ m('p', {
                        className: 'text-xs text-gray-500 mt-1',
                        children: 'Интервал между циклами анимации',
                      }),
                    ],
                  }),
                  /* @__PURE__ */ g('div', {
                    className: 'pt-4 border-t',
                    children: [
                      /* @__PURE__ */ m('h4', {
                        className: 'text-md font-medium text-gray-700 mb-3',
                        children: 'Сводка',
                      }),
                      /* @__PURE__ */ g('div', {
                        className: 'space-y-2 text-xs text-gray-600',
                        children: [
                          /* @__PURE__ */ g('div', {
                            className: 'flex justify-between',
                            children: [
                              /* @__PURE__ */ m('span', {
                                children: 'Текст появление:',
                              }),
                              /* @__PURE__ */ g('span', {
                                className: 'font-medium',
                                children: [t.textEntranceDuration, 'мс'],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ g('div', {
                            className: 'flex justify-between',
                            children: [
                              /* @__PURE__ */ m('span', {
                                children: 'Текст исчезновение:',
                              }),
                              /* @__PURE__ */ g('span', {
                                className: 'font-medium',
                                children: [t.textExitDuration, 'мс'],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ g('div', {
                            className: 'flex justify-between',
                            children: [
                              /* @__PURE__ */ m('span', {
                                children: 'Текст движение:',
                              }),
                              /* @__PURE__ */ g('span', {
                                className: 'font-medium',
                                children: [t.textMovementDistance, 'px'],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ g('div', {
                            className: 'flex justify-between',
                            children: [
                              /* @__PURE__ */ m('span', {
                                children: 'Картинка появление:',
                              }),
                              /* @__PURE__ */ g('span', {
                                className: 'font-medium',
                                children: [t.imageEntranceDuration, 'мс'],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ g('div', {
                            className: 'flex justify-between',
                            children: [
                              /* @__PURE__ */ m('span', {
                                children: 'Картинка исчезновение:',
                              }),
                              /* @__PURE__ */ g('span', {
                                className: 'font-medium',
                                children: [t.imageExitDuration, 'мс'],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ g('div', {
                            className: 'flex justify-between',
                            children: [
                              /* @__PURE__ */ m('span', {
                                children: 'Картинка движение:',
                              }),
                              /* @__PURE__ */ g('span', {
                                className: 'font-medium',
                                children: [t.imageMovementDistance, 'px'],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ g('div', {
                            className: 'flex justify-between pt-2 border-t',
                            children: [
                              /* @__PURE__ */ m('span', {
                                children: 'Задержка картинки:',
                              }),
                              /* @__PURE__ */ g('span', {
                                className: 'font-medium',
                                children: [t.imageDelay, 'мс'],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ g('div', {
                            className: 'flex justify-between',
                            children: [
                              /* @__PURE__ */ m('span', { children: 'Цикл:' }),
                              /* @__PURE__ */ g('span', {
                                className: 'font-medium',
                                children: [t.cycleDelay, 'мс'],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Bu({ savedConfigs: t, onApply: e, onDelete: n }) {
  return t.length === 0
    ? /* @__PURE__ */ g('div', {
        className: 'w-full bg-white rounded-lg shadow-md p-6',
        children: [
          /* @__PURE__ */ m('h3', {
            className: 'text-lg font-semibold text-gray-800 mb-4',
            children: 'Сохраненные конфигурации',
          }),
          /* @__PURE__ */ m('p', {
            className: 'text-gray-500 text-sm',
            children: 'Пока нет сохраненных конфигураций',
          }),
        ],
      })
    : /* @__PURE__ */ g('div', {
        className: 'w-full bg-white rounded-lg shadow-md p-6',
        children: [
          /* @__PURE__ */ g('h3', {
            className: 'text-lg font-semibold text-gray-800 mb-4',
            children: ['Сохраненные конфигурации (', t.length, ')'],
          }),
          /* @__PURE__ */ m('div', {
            className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
            children: t.map((s) =>
              /* @__PURE__ */ g(
                'div',
                {
                  className:
                    'border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow',
                  children: [
                    /* @__PURE__ */ g('div', {
                      className: 'flex items-start justify-between mb-3',
                      children: [
                        /* @__PURE__ */ m('h4', {
                          className: 'font-medium text-gray-800',
                          children: s.name,
                        }),
                        /* @__PURE__ */ m('button', {
                          onClick: () => n(s.id),
                          className: 'text-red-500 hover:text-red-700 text-sm',
                          title: 'Удалить',
                          children: '✕',
                        }),
                      ],
                    }),
                    /* @__PURE__ */ g('div', {
                      className: 'space-y-1 text-xs text-gray-600 mb-3',
                      children: [
                        /* @__PURE__ */ g('div', {
                          className: 'flex justify-between',
                          children: [
                            /* @__PURE__ */ m('span', {
                              children: 'Текст вход/выход:',
                            }),
                            /* @__PURE__ */ g('span', {
                              children: [
                                s.config.textEntranceDuration,
                                '/',
                                s.config.textExitDuration,
                                'мс',
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ g('div', {
                          className: 'flex justify-between',
                          children: [
                            /* @__PURE__ */ m('span', {
                              children: 'Картинка вход/выход:',
                            }),
                            /* @__PURE__ */ g('span', {
                              children: [
                                s.config.imageEntranceDuration,
                                '/',
                                s.config.imageExitDuration,
                                'мс',
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ g('div', {
                          className: 'flex justify-between',
                          children: [
                            /* @__PURE__ */ m('span', {
                              children: 'Задержка:',
                            }),
                            /* @__PURE__ */ g('span', {
                              children: [s.config.imageDelay, 'мс'],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ g('div', {
                          className: 'flex justify-between',
                          children: [
                            /* @__PURE__ */ m('span', { children: 'Цикл:' }),
                            /* @__PURE__ */ g('span', {
                              children: [s.config.cycleDelay, 'мс'],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ m('button', {
                      onClick: () => e(s.config),
                      className:
                        'w-full px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors',
                      children: 'Применить',
                    }),
                  ],
                },
                s.id,
              ),
            ),
          }),
        ],
      });
}
function Fu() {
  const [t, e] = Y({
      textEntranceDuration: 500,
      textEntranceEase: 'easeInOut',
      textExitDuration: 500,
      textExitEase: 'easeInOut',
      imageEntranceDuration: 500,
      imageEntranceEase: 'easeInOut',
      imageExitDuration: 500,
      imageExitEase: 'easeInOut',
      imageDelay: 200,
      cycleDelay: 4e3,
      textMovementDistance: 50,
      imageMovementDistance: 50,
    }),
    [n, s] = Y([]),
    r = Xe();
  return /* @__PURE__ */ g('div', {
    className: 'flex flex-col gap-[24px] px-8 py-12',
    children: [
      /* @__PURE__ */ m(Nu, { direction: 'reverse', config: t }),
      /* @__PURE__ */ m(Iu, {
        config: t,
        onConfigChange: e,
        onSave: (o) => {
          const l = {
            id: `${r}-${n.length}`,
            name: o,
            config: t,
          };
          s([...n, l]);
        },
      }),
      /* @__PURE__ */ m(Bu, {
        savedConfigs: n,
        onApply: (o) => {
          e(o);
        },
        onDelete: (o) => {
          s(n.filter((l) => l.id !== o));
        },
      }),
    ],
  });
}
function Ou() {
  return /* @__PURE__ */ m('div', {
    className: 'min-h-screen w-full bg-white overflow-y-auto',
    children: /* @__PURE__ */ m(Fu, {}),
  });
}
const ju = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: Ou,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
export { Uu as Code0_8 };
