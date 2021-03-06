function launch() {
    var t = App.sponsor
      , e = App.getSponsorFeatures(t);
    t === Sponsor.eSponsorID.NONE ? new Sponsor.SponsorNone(e) : t === Sponsor.eSponsorID.COOLMATHGAMES && new Sponsor.SponsorCoolmathGames(e),
    Utils.StorageUtils.load(App.Config.saveKey).then(function(t) {
        null != t && void 0 !== t.id && "snake" === t.id && (App.settings = t),
        createAndStartGame()
    }).catch(function(t) {})
}
function createAndStartGame() {
    var t = new Snake.Game;
    App.game = t
}
var Collections, __extends = this && this.__extends || function() {
    var t = function(e, i) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        )(e, i)
    };
    return function(e, i) {
        function n() {
            this.constructor = e
        }
        t(e, i),
        e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype,
        new n)
    }
}(), __awaiter = this && this.__awaiter || function(t, e, i, n) {
    return new (i || (i = Promise))(function(o, r) {
        function s(t) {
            try {
                h(n.next(t))
            } catch (t) {
                r(t)
            }
        }
        function a(t) {
            try {
                h(n.throw(t))
            } catch (t) {
                r(t)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }
            ).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
    }
    )
}
, __generator = this && this.__generator || function(t, e) {
    function i(i) {
        return function(s) {
            return function(i) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (n = 1,
                        o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o),
                        0) : o.next) && !(r = r.call(o, i[1])).done)
                            return r;
                        switch (o = 0,
                        r && (i = [2 & i[0], r.value]),
                        i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: i[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            o = i[1],
                            i = [0];
                            continue;
                        case 7:
                            i = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (r = a.trys,
                            !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                a.label = i[1];
                                break
                            }
                            if (6 === i[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = i;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(i);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t],
                        o = 0
                    } finally {
                        n = r = 0
                    }
                if (5 & i[0])
                    throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                }
            }([i, s])
        }
    }
    var n, o, r, s, a = {
        label: 0,
        sent: function() {
            if (1 & r[0])
                throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        throw: i(1),
        return: i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s
}
;
!function(t) {
    var e = function() {
        function t(t, e, i) {
            void 0 === i && (i = null),
            this.name = "<no name>",
            this.debug = 0,
            this._newFunction = null,
            this._count = 0,
            this._pool = [],
            this._canGrow = !1,
            this._poolSize = 0,
            this._classType = t,
            this._newFunction = i;
            for (var n = 0; n < e; n++) {
                var o = this.newItem();
                this._pool[this._count++] = o
            }
            this._poolSize = e
        }
        return t.prototype.spawn = function() {
            return 0 === this._count ? (this.debug,
            this._canGrow ? this.newItem() : null) : (this.debug,
            this._pool[--this._count])
        }
        ,
        t.prototype.despawn = function(t) {
            this.debug,
            this._pool[this._count++] = t
        }
        ,
        Object.defineProperty(t.prototype, "newFunction", {
            set: function(t) {
                this._newFunction = t
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.newItem = function() {
            return null !== this._newFunction ? this._newFunction() : new this._classType
        }
        ,
        Object.defineProperty(t.prototype, "canGrow", {
            set: function(t) {
                this._canGrow = t
            },
            enumerable: !0,
            configurable: !0
        }),
        t.DEBUG_ALLOCATION = 1,
        t.DEBUG_CREATE = 2,
        t.DEBUG_DESTROY = 4,
        t.DEBUG_ALL = 7,
        t
    }();
    t.Pool = e
}(Collections || (Collections = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.randomizeArray = function(t, e, i, n) {
            void 0 === i && (i = !1),
            void 0 === n && (n = !1);
            var o = i ? e.slice() : e;
            return Phaser.ArrayUtils.shuffle(o),
            n ? o.slice(0, t) : o
        }
        ,
        t.sort = function(e, i, n, o) {
            if (void 0 === n && (n = 0),
            void 0 === o && (o = e.length),
            n < o) {
                for (var r, s = n, a = n + 1; a <= o; a++)
                    i(e[n], e[a]) > 0 && (r = e[++s],
                    e[s] = e[a],
                    e[a] = r);
                r = e[n],
                e[n] = e[s],
                e[s] = r,
                t.sort(e, i, n, s - 1),
                t.sort(e, i, s + 1, o)
            }
        }
        ,
        t
    }();
    t.ArrayUtils = e
}(Helper || (Helper = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.addSpriteIntoFont = function(e, i, n, o, r, s, a, h) {
            void 0 === s && (s = "0"),
            void 0 === a && (a = t.ALIGN_CENTER),
            void 0 === h && (h = .5),
            "string" == typeof s && (s = s.charCodeAt(0));
            var c = e.cache.getBitmapFont(i)
              , l = c.font.chars
              , u = l[s];
            if (null == u)
                throw new Error("Reference character " + String.fromCharCode(s) + " with code " + s + " is mssing in font. Try another.");
            var p = null
              , _ = (p = "string" == typeof o ? e.cache.getFrameByName(n, o) : e.cache.getFrameByIndex(n, o)).sourceSizeW
              , d = p.sourceSizeH
              , f = u.yOffset + (a === t.ALIGN_CENTER ? u.height / 2 : a === t.ALIGN_BOTTOM ? u.height : 0)
              , g = Math.round(f - d * h);
            l[r] = {
                x: p.x,
                y: p.y,
                width: p.width,
                height: p.height,
                xOffset: 0,
                yOffset: g,
                xAdvance: _ + 2,
                kerning: [],
                texture: new PIXI.Texture(c.base,new PIXI.Rectangle(p.x,p.y,p.width,p.height))
            }
        }
        ,
        t.ALIGN_TOP = 0,
        t.ALIGN_CENTER = 1,
        t.ALIGN_BOTTOM = 2,
        t
    }();
    t.FontUtils = e
}(Helper || (Helper = {}));
!function(t) {
    !function(t) {
        function e(t) {
            return -2 * t * t + 3 * t
        }
        t.wiggle = function(t, e, i) {
            var n = t * Math.PI * 2 * e
              , o = t * (2 * Math.PI * i + Math.PI / 2);
            return Math.sin(n) * Math.cos(o)
        }
        ,
        t.sinWithExpDecay = function(t, e, i) {
            var n = t * Math.PI * 2 * e
              , o = -t * i;
            return Math.sin(n) * Math.exp(o)
        }
        ,
        t.pop5 = e,
        t.pop5rev = function(t) {
            return -(e(1 - t) - 1)
        }
        ,
        t.sin = function(t) {
            return Math.sin(2 * t * Math.PI)
        }
        ,
        t.halfSin = function(t) {
            return Math.sin(t * Math.PI)
        }
        ,
        t.sinWithPeriod = function(t, e) {
            return Math.sin(2 * t * Math.PI * e)
        }
    }(t.Easing || (t.Easing = {}))
}(Helper || (Helper = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.angleLinear = function(t, e, i) {
            return t < e ? e - t > 180 && (e -= 360) : t - e > 180 && (t -= 360),
            t + (e - t) * i
        }
        ,
        t
    }();
    t.MathHelp = e
}(Helper || (Helper = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.create = function(e, i, n, o, r, s, a, h, c, l, u, p) {
            void 0 === s && (s = 0),
            void 0 === a && (a = 0),
            void 0 === h && (h = 0),
            void 0 === c && (c = 0),
            void 0 === l && (l = !1),
            void 0 === u && (u = !1),
            void 0 === p && (p = !1);
            var _, d = new Phaser.Image(e,0,0,o,r);
            return _ = "string" == typeof r ? e.cache.getFrameByName(o, r) : e.cache.getFrameByIndex(o, r),
            t._scaleCenterX = u,
            t._scaleCenterY = p,
            t.calculateNineImage(_, i, n, s, a, h, c, l),
            t._nineImage = new Phaser.BitmapData(e,"NineImage" + t._textureKey++,t._width,t._height),
            t.renderNineImage(d),
            t._nineImage
        }
        ,
        t.calculateNineImage = function(e, i, n, o, r, s, a, h) {
            if (t._centralWidth = e.width - r - a,
            t._centralHeight = e.height - o - s,
            h)
                t._horizontalRepeats = i,
                t._verticalRepeats = n,
                t._width = r + a + t._centralWidth * i,
                t._height = o + s + t._centralHeight * n,
                t._lastWidth = 0,
                t._lastHeight = 0;
            else {
                var c = i - r - a;
                t._horizontalRepeats = Math.floor(c / t._centralWidth),
                t._lastWidth = c % t._centralWidth;
                var l = n - o - s;
                t._verticalRepeats = Math.floor(l / t._centralHeight),
                t._lastHeight = l % t._centralHeight,
                t._width = i,
                t._height = n
            }
            t._leftWidth = r,
            t._rightWidth = a,
            t._topHeight = o,
            t._bottomHeight = s
        }
        ,
        t.renderNineImage = function(e) {
            var i = 0
              , n = 0;
            if (t._topHeight > 0 && (t.renderNineImageRow(e, i, n, t._topHeight),
            i += t._topHeight,
            n += t._topHeight),
            t._scaleCenterY) {
                var o = t._verticalRepeats * t._centralHeight + t._lastHeight;
                t.renderNineImageRow(e, i, n, t._centralHeight, o),
                n += o
            } else {
                for (var r = 0; r < t._verticalRepeats; r++)
                    t.renderNineImageRow(e, i, n, t._centralHeight),
                    n += t._centralHeight;
                t._lastHeight > 0 && (t.renderNineImageRow(e, i, n, t._lastHeight),
                n += t._lastHeight)
            }
            i += t._centralHeight,
            t._bottomHeight > 0 && t.renderNineImageRow(e, i, n, t._bottomHeight)
        }
        ,
        t.renderNineImageRow = function(e, i, n, o, r) {
            var s = 0
              , a = 0;
            if (r = r || o,
            t._leftWidth > 0 && (t._nineImage.copy(e, s, i, t._leftWidth, o, a, n, t._leftWidth, r),
            a += t._leftWidth,
            s += t._leftWidth),
            t._scaleCenterX) {
                var h = t._horizontalRepeats * t._centralWidth + t._lastWidth;
                t._nineImage.copy(e, s, i, t._centralWidth, o, a, n, h, r),
                a += h
            } else {
                for (var c = 0; c < t._horizontalRepeats; c++)
                    t._nineImage.copy(e, s, i, t._centralWidth, o, a, n, t._centralWidth, r),
                    a += t._centralWidth;
                t._lastWidth > 0 && (t._nineImage.copy(e, s, i, t._lastWidth, o, a, n, t._lastWidth, r),
                a += t._lastWidth)
            }
            s += t._centralWidth,
            t._rightWidth > 0 && t._nineImage.copy(e, s, i, t._rightWidth, o, a, n, t._rightWidth, r)
        }
        ,
        t._textureKey = 0,
        t
    }();
    t.NineImage = e
}(Helper || (Helper = {}));
!function(t) {
    var e = function() {
        return function(t, e, i) {
            this.dot2 = function(t, e) {
                return this.x * t + this.y * e
            }
            ,
            this.dot3 = function(t, e, i) {
                return this.x * t + this.y * e + this.z * i
            }
            ,
            this.x = t,
            this.y = e,
            this.z = i
        }
    }()
      , i = function() {
        function t() {}
        return t.seed = function(e) {
            e > 0 && e < 1 && (e *= 65536),
            (e = Math.floor(e)) < 256 && (e |= e << 8);
            for (var i = 0; i < 256; i++) {
                var n;
                n = 1 & i ? t.p[i] ^ 255 & e : t.p[i] ^ e >> 8 & 255,
                t.perm[i] = t.perm[i + 256] = n,
                t.gradP[i] = t.gradP[i + 256] = t.grad3[n % 12]
            }
        }
        ,
        t.simplex2 = function(e, i) {
            var n, o, r, s, a, h = (e + i) * t.F2, c = Math.floor(e + h), l = Math.floor(i + h), u = (c + l) * t.G2, p = e - c + u, _ = i - l + u;
            p > _ ? (s = 1,
            a = 0) : (s = 0,
            a = 1);
            var d = p - s + t.G2
              , f = _ - a + t.G2
              , g = p - 1 + 2 * t.G2
              , m = _ - 1 + 2 * t.G2
              , v = t.gradP[(c &= 255) + t.perm[l &= 255]]
              , y = t.gradP[c + s + t.perm[l + a]]
              , S = t.gradP[c + 1 + t.perm[l + 1]]
              , P = .5 - p * p - _ * _;
            n = P < 0 ? 0 : (P *= P) * P * v.dot2(p, _);
            var b = .5 - d * d - f * f;
            o = b < 0 ? 0 : (b *= b) * b * y.dot2(d, f);
            var O = .5 - g * g - m * m;
            return r = O < 0 ? 0 : (O *= O) * O * S.dot2(g, m),
            70 * (n + o + r)
        }
        ,
        t.simplex3 = function(e, i, n) {
            var o, r, s, a, h, c, l, u, p, _, d = (e + i + n) * t.F3, f = Math.floor(e + d), g = Math.floor(i + d), m = Math.floor(n + d), v = (f + g + m) * t.G3, y = e - f + v, S = i - g + v, P = n - m + v;
            y >= S ? S >= P ? (h = 1,
            c = 0,
            l = 0,
            u = 1,
            p = 1,
            _ = 0) : y >= P ? (h = 1,
            c = 0,
            l = 0,
            u = 1,
            p = 0,
            _ = 1) : (h = 0,
            c = 0,
            l = 1,
            u = 1,
            p = 0,
            _ = 1) : S < P ? (h = 0,
            c = 0,
            l = 1,
            u = 0,
            p = 1,
            _ = 1) : y < P ? (h = 0,
            c = 1,
            l = 0,
            u = 0,
            p = 1,
            _ = 1) : (h = 0,
            c = 1,
            l = 0,
            u = 1,
            p = 1,
            _ = 0);
            var b = y - h + t.G3
              , O = S - c + t.G3
              , A = P - l + t.G3
              , E = y - u + 2 * t.G3
              , T = S - p + 2 * t.G3
              , w = P - _ + 2 * t.G3
              , C = y - 1 + 3 * t.G3
              , x = S - 1 + 3 * t.G3
              , I = P - 1 + 3 * t.G3
              , M = t.gradP[(f &= 255) + t.perm[(g &= 255) + t.perm[m &= 255]]]
              , N = t.gradP[f + h + t.perm[g + c + t.perm[m + l]]]
              , R = t.gradP[f + u + t.perm[g + p + t.perm[m + _]]]
              , k = t.gradP[f + 1 + t.perm[g + 1 + t.perm[m + 1]]]
              , D = .6 - y * y - S * S - P * P;
            o = D < 0 ? 0 : (D *= D) * D * M.dot3(y, S, P);
            var G = .6 - b * b - O * O - A * A;
            r = G < 0 ? 0 : (G *= G) * G * N.dot3(b, O, A);
            var F = .6 - E * E - T * T - w * w;
            s = F < 0 ? 0 : (F *= F) * F * R.dot3(E, T, w);
            var U = .6 - C * C - x * x - I * I;
            return a = U < 0 ? 0 : (U *= U) * U * k.dot3(C, x, I),
            32 * (o + r + s + a)
        }
        ,
        t.fade = function(t) {
            return t * t * t * (t * (6 * t - 15) + 10)
        }
        ,
        t.lerp = function(t, e, i) {
            return (1 - i) * t + i * e
        }
        ,
        t.perlin2 = function(e, i) {
            var n = Math.floor(e)
              , o = Math.floor(i);
            e -= n,
            i -= o;
            var r = t.gradP[(n &= 255) + t.perm[o &= 255]].dot2(e, i)
              , s = t.gradP[n + t.perm[o + 1]].dot2(e, i - 1)
              , a = t.gradP[n + 1 + t.perm[o]].dot2(e - 1, i)
              , h = t.gradP[n + 1 + t.perm[o + 1]].dot2(e - 1, i - 1)
              , c = t.fade(e);
            return t.lerp(t.lerp(r, a, c), t.lerp(s, h, c), t.fade(i))
        }
        ,
        t.perlin3 = function(e, i, n) {
            var o = Math.floor(e)
              , r = Math.floor(i)
              , s = Math.floor(n);
            e -= o,
            i -= r,
            n -= s;
            var a = t.gradP[(o &= 255) + t.perm[(r &= 255) + t.perm[s &= 255]]].dot3(e, i, n)
              , h = t.gradP[o + t.perm[r + t.perm[s + 1]]].dot3(e, i, n - 1)
              , c = t.gradP[o + t.perm[r + 1 + t.perm[s]]].dot3(e, i - 1, n)
              , l = t.gradP[o + t.perm[r + 1 + t.perm[s + 1]]].dot3(e, i - 1, n - 1)
              , u = t.gradP[o + 1 + t.perm[r + t.perm[s]]].dot3(e - 1, i, n)
              , p = t.gradP[o + 1 + t.perm[r + t.perm[s + 1]]].dot3(e - 1, i, n - 1)
              , _ = t.gradP[o + 1 + t.perm[r + 1 + t.perm[s]]].dot3(e - 1, i - 1, n)
              , d = t.gradP[o + 1 + t.perm[r + 1 + t.perm[s + 1]]].dot3(e - 1, i - 1, n - 1)
              , f = t.fade(e)
              , g = t.fade(i)
              , m = t.fade(n);
            return t.lerp(t.lerp(t.lerp(a, u, f), t.lerp(h, p, f), m), t.lerp(t.lerp(c, _, f), t.lerp(l, d, f), m), g)
        }
        ,
        t.grad3 = [new e(1,1,0), new e(-1,1,0), new e(1,-1,0), new e(-1,-1,0), new e(1,0,1), new e(-1,0,1), new e(1,0,-1), new e(-1,0,-1), new e(0,1,1), new e(0,-1,1), new e(0,1,-1), new e(0,-1,-1)],
        t.p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
        t.perm = new Array(512),
        t.gradP = new Array(512),
        t.F2 = .5 * (Math.sqrt(3) - 1),
        t.G2 = (3 - Math.sqrt(3)) / 6,
        t.F3 = 1 / 3,
        t.G3 = 1 / 6,
        t
    }();
    t.Perlin = i,
    i.seed(0)
}(Helper || (Helper = {}));
!function(t) {
    var e = function() {
        function t(t, e) {
            this._rnd = t,
            this.reset(e)
        }
        return t.prototype.reset = function(t) {
            --t;
            var e = Math.ceil(t / 2);
            this._lbound = -e,
            this._ubound = t - e,
            this._currentBalance = 0 === t ? this._rnd.integerInRange(-1, 0) : 0
        }
        ,
        t.prototype.getBoolean = function() {
            var t = this._currentBalance + this._rnd.integerInRange(this._lbound, this._ubound);
            return this._currentBalance += t >= 0 ? -1 : 1,
            t >= 0
        }
        ,
        t
    }();
    t.RandomBooleanBalancer = e
}(Helper || (Helper = {}));
var Helper;
!function(t) {
    var e;
    !function(t) {
        t[t.UNDEFINED = -1] = "UNDEFINED",
        t[t.SPACE = 1] = "SPACE",
        t[t.NEWLINE = 2] = "NEWLINE",
        t[t.CHARACTER = 3] = "CHARACTER"
    }(e || (e = {}));
    var i = function() {
        function t() {}
        return t.hasNext = function() {
            return t.textPosition < t.text.length
        }
        ,
        t.getChar = function() {
            return t.text.charAt(t.textPosition++)
        }
        ,
        t.peekChar = function() {
            return t.text.charAt(t.textPosition)
        }
        ,
        t.getPosition = function() {
            return t.textPosition
        }
        ,
        t.setPosition = function(e) {
            t.textPosition = e
        }
        ,
        t.getCharAdvance = function(e, i) {
            var n = t.fontData.chars[e];
            if (!n)
                return 0;
            var o = n.xAdvance;
            return i > 0 && n.kerning[i] && (o += n.kerning[i]),
            o
        }
        ,
        t.getCharType = function(t) {
            return " " === t ? e.SPACE : /(?:\r\n|\r|\n)/.test(t) ? e.NEWLINE : e.CHARACTER
        }
        ,
        t.wrapText = function(i, n, o, r, s, a, h) {
            void 0 === h && (h = !1),
            t.text = n,
            t.setPosition(0),
            t.fontData = i.cache.getBitmapFont(s).font,
            void 0 === a && (a = t.fontData.size);
            var c = a / t.fontData.size
              , l = t.fontData.lineHeight * c
              , u = o / c
              , p = []
              , _ = []
              , d = []
              , f = 0
              , g = 0
              , m = 0;
            p[f] = m,
            d[g++] = 0;
            for (var v = r; t.hasNext(); ) {
                for (var y = 0, S = 0, P = -1, b = e.UNDEFINED, O = e.UNDEFINED, A = u, E = -1; t.hasNext(); ) {
                    m = t.getPosition();
                    var T = t.getChar();
                    b = t.getCharType(T);
                    var w = T.charCodeAt(0);
                    if (b === e.SPACE)
                        O !== e.SPACE && (S = y),
                        ++y,
                        A -= t.getCharAdvance(w, E);
                    else if (b === e.CHARACTER) {
                        if (O !== e.CHARACTER && (P = m),
                        (A -= t.getCharAdvance(w, E)) < 0) {
                            h && (S = y + 1,
                            m = P = t.getPosition(),
                            A = -1,
                            b = e.CHARACTER);
                            break
                        }
                        ++y
                    } else if (b === e.NEWLINE) {
                        var C = !1;
                        if (t.hasNext() && (C = !0,
                        S = y,
                        m = P = t.getPosition(),
                        A = -1,
                        b = e.CHARACTER),
                        C)
                            break
                    }
                    O = b,
                    E = w
                }
                (v -= l) < 0 && (d[g++] = f),
                A < 0 && b === e.CHARACTER ? (_[f] = 0 !== S ? S : y,
                !1,
                v < 0 && (!0,
                v = r - l),
                0 !== S ? (p[++f] = P,
                t.setPosition(P)) : (p[++f] = m,
                t.setPosition(m))) : t.hasNext() || (b === e.CHARACTER ? _[f] = y : b === e.SPACE && (_[f] = S))
            }
            d[g] = f + 1;
            for (var x = [], I = 1; I <= g; I++) {
                for (var M = d[I - 1], N = d[I], R = [], k = M; k < N; k++)
                    R.push(t.text.substr(p[k], _[k]));
                x.push(R.join("\n"))
            }
            return x
        }
        ,
        t
    }();
    t.TextWrapper = i
}(Helper || (Helper = {}));
!function(t) {
    var e = function() {
        function e(t, i) {
            this.maxVelocity = e.MAX_VELOCITY,
            this._delay = 0,
            this._velocity = new Phaser.Point(0,0),
            this._angularVelocity = 0,
            this._friction = 0,
            this._angularDrag = 0,
            this._gravity = 0,
            this._alpha = 1,
            this._scaleChange = 0,
            this._alphaChange = 0,
            this._game = t
        }
        return Object.defineProperty(e.prototype, "visual", {
            get: function() {
                return this._visual
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "on", {
            set: function(t) {
                this._on = t,
                this._visual.exists = t,
                this._visual.visible = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.remove = function() {
            var t = this._visual.parent;
            null !== t && (t instanceof Phaser.Group ? t.remove(this._visual) : t.removeChild(this._visual),
            t = null)
        }
        ,
        e.prototype.bringToTop = function() {
            var t = this._visual.parent;
            t instanceof Phaser.Group && t.bringToTop(this._visual)
        }
        ,
        e.prototype.sendToBack = function() {
            var t = this._visual.parent;
            t instanceof Phaser.Group && t.sendToBack(this._visual)
        }
        ,
        Object.defineProperty(e.prototype, "textureKey", {
            set: function(t) {
                this._textureKey = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setScaleChange = function(t, e) {
            void 0 === e && (e = 0),
            this._scaleChangeType = t,
            this._scaleChange = e
        }
        ,
        Object.defineProperty(e.prototype, "delay", {
            set: function(t) {
                this._delay = t,
                t > 0 && (this.on = !1)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "alpha", {
            set: function(t) {
                this._alpha = t,
                this._visual.alpha = Phaser.Math.clamp(t, 0, 1)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setAlphaChange = function(t, e) {
            void 0 === e && (e = 0),
            this._alphaChangeType = t,
            this._alphaChange = e
        }
        ,
        e.prototype.setPhysics = function(t, e, i, n, o, r) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = 0),
            void 0 === r && (r = 0),
            this._velocity.setTo(t, e),
            this._angularVelocity = i,
            this._friction = n,
            this._angularDrag = o,
            this._gravity = r,
            this._simplePhysics = 0 === r && 0 === n && 0 === o
        }
        ,
        Object.defineProperty(e.prototype, "velocity", {
            get: function() {
                return this._velocity
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setFrame = function(t) {}
        ,
        e.prototype.onEmit = function(t) {
            t.add(this._visual)
        }
        ,
        e.prototype.onKill = function(t) {}
        ,
        e.prototype.update = function(e) {
            void 0 === e && (e = !0);
            var i = this._game.time.physicsElapsed;
            if (this._delay > 0) {
                if ((this._delay -= i) > 0)
                    return !0;
                this.on = !0
            }
            if (this.lifetime > 0 && (this.lifetime -= i) <= 0)
                return !1;
            if (0 === this._velocity.x && 0 === this._velocity.y || (this._visual.x += this._velocity.x * i,
            this._visual.y += this._velocity.y * i),
            0 !== this._angularVelocity && (this._visual.angle += this._angularVelocity * i),
            this._simplePhysics || (this._velocity.x += -this._friction * this._velocity.x * i,
            this._velocity.y += (this._gravity - this._friction * this._velocity.y) * i,
            this._angularVelocity += -this._angularDrag * this._angularVelocity * i),
            !e)
                return !0;
            if (this._scaleChangeType != t.eParameterChangeType.NO_CHANGE)
                switch (this._scaleChangeType) {
                case t.eParameterChangeType.IN_TIME:
                    (this._visual.scale.x += this._scaleChange * i) < 0 && (this._visual.scale.x = 0,
                    this._scaleChange < 0 && (this._scaleChangeType = t.eParameterChangeType.NO_CHANGE)),
                    (this._visual.scale.y += this._scaleChange * i) < 0 && (this._visual.scale.y = 0,
                    this._scaleChange < 0 && (this._scaleChangeType = t.eParameterChangeType.NO_CHANGE))
                }
            if (this._alphaChangeType != t.eParameterChangeType.NO_CHANGE)
                switch (this._alphaChangeType) {
                case t.eParameterChangeType.IN_TIME:
                    this._alpha += this._alphaChange * i,
                    this._alpha < 0 ? (this._visual.alpha = 0,
                    this._alphaChange < 0 && (this._alphaChangeType = t.eParameterChangeType.NO_CHANGE)) : this._alpha > 1 ? (this._visual.alpha = 1,
                    this._alphaChange > 0 && (this._alphaChangeType = t.eParameterChangeType.NO_CHANGE)) : this._visual.alpha = this._alpha
                }
            return !0
        }
        ,
        e.MAX_VELOCITY = 1e3,
        e
    }();
    t.Particle = e
}(Particles || (Particles = {}));
!function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype.setFrame = function(t) {
            var e = this._visual;
            "string" == typeof t ? e.frameName = t : e.frame = t
        }
        ,
        e.prototype.onCreate = function(t) {
            var e = new Phaser.Sprite(this._game,0,0,this._textureKey);
            e.anchor.setTo(.5, .5),
            this._visual = e
        }
        ,
        e
    }(t.Particle);
    t.SpriteParticle = e
}(Particles || (Particles = {}));
!function(t) {
    var e = function(t) {
        function e(e, i) {
            var n = t.call(this, e, i) || this;
            return void 0 !== i && null === i || (n._anims = i[0]),
            n
        }
        return __extends(e, t),
        e.prototype.onCreate = function(e) {
            t.prototype.onCreate.call(this, e);
            for (var i = this._visual, n = 0; n < this._anims.length; n++) {
                var o = this._anims[n]
                  , r = i.animations.add(o.name, o.frames, o.frameRate, o.loop);
                !o.loop && o.killOnComplete && (r.killOnComplete = !0)
            }
        }
        ,
        e.prototype.update = function(e) {
            void 0 === e && (e = !0);
            var i = this._delay
              , n = t.prototype.update.call(this, e);
            return i > 0 && this._delay <= 0 && this._visual.animations.currentAnim.play(),
            n
        }
        ,
        e.prototype.setFrame = function(t) {
            this.setAnim(t)
        }
        ,
        e.prototype.setAnim = function(t) {
            var e = this._visual;
            e.animations.stop(null, !0),
            this._delay <= 0 ? e.animations.play(t) : (e.animations.currentAnim = e.animations.getAnimation(t),
            e.frame = e.animations.currentAnim._frames[0])
        }
        ,
        e.prototype.setRandomAnim = function() {
            this._visual;
            var t = this._anims[this._game.rnd.integerInRange(0, this._anims.length - 1)].name;
            this.setAnim(t)
        }
        ,
        e
    }(t.SpriteParticle);
    t.AnimatedParticle = e
}(Particles || (Particles = {}));
!function(t) {
    var e = function() {
        function e(e) {
            this.area = new Phaser.Point(0,0),
            this.gravity = 0,
            this.minLifetime = 1,
            this.maxLifetime = 1,
            this.delay = 0,
            this.minScale = 1,
            this.maxScale = 1,
            this.scaleChange = 0,
            this.scaleChangeType = t.eParameterChangeType.NO_CHANGE,
            this.minAngle = 0,
            this.maxAngle = 0,
            this.minSpeedX = 0,
            this.maxSpeedX = 0,
            this.minSpeedY = 0,
            this.maxSpeedY = 0,
            this.friction = 0,
            this.minAngularSpeed = 0,
            this.maxAngularSpeed = 0,
            this.angularDrag = 0,
            this.minAlpha = 1,
            this.maxAlpha = 1,
            this.alphaChange = 0,
            this.alphaChangeType = t.eParameterChangeType.NO_CHANGE,
            this.frames = null,
            this._minAdvScale = new Phaser.Point(1,1),
            this._maxAdvScale = new Phaser.Point(1,1),
            this._game = e
        }
        return e.readParams = function(t, i) {
            var n = {};
            for (var o in i) {
                var r = new e(t);
                e.doReadParams(r, i, o),
                n[o] = r
            }
            return n
        }
        ,
        e.doReadParams = function(t, i, n) {
            var o = i[n];
            if (void 0 !== o.parent && null !== o.parent) {
                var r = o.parent;
                e.doReadParams(t, i, r)
            }
            for (var s in o)
                "parent" !== s && (t[s],
                t[s] = o[s])
        }
        ,
        e.prototype.clear = function() {
            this.gravity = 0,
            this.setXSpeed(0, 0),
            this.setYSpeed(0, 0),
            this.setAngularSpeed(0)
        }
        ,
        e.prototype.randomFrame = function() {
            var t = null;
            return null !== this.frames && (t = Array.isArray(this.frames) ? (this.frames[0],
            this._game.rnd.pick(this.frames)) : this.frames),
            t
        }
        ,
        e.prototype.setXSpeed = function(t, e) {
            t = t || 0,
            e = e || 0,
            this.minSpeedX = t,
            this.maxSpeedX = e
        }
        ,
        e.prototype.setYSpeed = function(t, e) {
            t = t || 0,
            e = e || 0,
            this.minSpeedY = t,
            this.maxSpeedY = e
        }
        ,
        e.prototype.setAngularSpeed = function(t, e) {
            t = t || 0,
            e = e || 0,
            this.minAngularSpeed = t,
            this.maxAngularSpeed = e
        }
        ,
        e.prototype.setAlpha = function(t, e) {
            void 0 === t && (t = 1),
            void 0 === e && (e = 1),
            this.minAlpha = t,
            this.maxAlpha = e
        }
        ,
        e.prototype.setAlphaChange = function(e, i, n) {
            switch (void 0 === i && (i = 0),
            void 0 === n && (n = 0),
            this.alphaChangeType = e,
            e) {
            case t.eParameterChangeType.NO_CHANGE:
                this.alphaChange = 0;
                break;
            case t.eParameterChangeType.IN_TIME:
                0 === n && (n = 1),
                this.alphaChange = i / n
            }
        }
        ,
        e.prototype.setScale = function(t, e) {
            t = t || 0,
            e = e || 0,
            this.minScale = t,
            this.maxScale = e
        }
        ,
        Object.defineProperty(e.prototype, "advScaleMin", {
            get: function() {
                return this._minAdvScale
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "advScaleMax", {
            get: function() {
                return this._maxAdvScale
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setAdvScale = function(t, e, i, n) {
            void 0 === t && (t = 1),
            void 0 === e && (e = 1),
            void 0 === i && (i = 1),
            void 0 === n && (n = 1),
            this._minAdvScale.setTo(t, i),
            this._maxAdvScale.setTo(e, n)
        }
        ,
        e.prototype.setScaleChange = function(e, i, n) {
            switch (void 0 === i && (i = 0),
            void 0 === n && (n = 0),
            this.scaleChangeType = e,
            e) {
            case t.eParameterChangeType.NO_CHANGE:
                this.scaleChange = 0;
                break;
            case t.eParameterChangeType.IN_TIME:
                0 === n && (n = 1),
                this.scaleChange = i / n
            }
        }
        ,
        e.prototype.setAngle = function(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            this.minAngle = t,
            this.maxAngle = e
        }
        ,
        e
    }();
    t.ParticleParams = e
}(Particles || (Particles = {}));
!function(t) {
    var e;
    !function(t) {
        t[t.NONE = 0] = "NONE",
        t[t.FLOW = 1] = "FLOW",
        t[t.EXPLODE = 2] = "EXPLODE"
    }(e || (e = {}));
    var i;
    !function(t) {
        t[t.NO_CHANGE = 0] = "NO_CHANGE",
        t[t.IN_TIME = 1] = "IN_TIME"
    }(i = t.eParameterChangeType || (t.eParameterChangeType = {}));
    var n = function(n) {
        function o(i, r, s, a) {
            var h = n.call(this, i, null) || this;
            return h._maxParticles = o.MAX_PARTICELES,
            h.emitPoint = new Phaser.Point(0,0),
            h.emitObject = null,
            h.particleClass = t.SpriteParticle,
            h.particleBringToTop = !1,
            h.particleSendToBack = !1,
            h.frequency = 100,
            h.forceEmit = !1,
            h._alternativeParams = null,
            h._on = !1,
            h._mode = e.NONE,
            h._flowQuantity = 0,
            h._flowTotal = 0,
            h._flowCounter = 0,
            h._particlesPool = [],
            h._counterPool = 0,
            h._particlesUsed = [],
            h._counterUsed = 0,
            h._timer = 0,
            h._emitPoint = new Phaser.Point(0,0),
            h._params = new t.ParticleParams(i),
            h.position.setTo(r, s),
            h._maxParticles = a,
            h
        }
        return __extends(o, n),
        Object.defineProperty(o.prototype, "params", {
            get: function() {
                return this._params
            },
            set: function(t) {
                this._params = t
            },
            enumerable: !0,
            configurable: !0
        }),
        o.prototype.clear = function() {
            this._params.clear()
        }
        ,
        o.prototype.update = function() {
            if (this._on && this.game.time.time >= this._timer && (this._timer = this.game.time.time + this.frequency * this.game.time.slowMotion,
            this._mode === e.FLOW))
                if (-1 !== this._flowTotal && this._flowCounter >= this._flowTotal)
                    this.stopFlow();
                else
                    for (var t = Math.max(1, this._flowQuantity), i = 0; i < t && !(this.emitParticle(this.forceEmit) && (this._flowCounter++,
                    -1 !== this._flowTotal && this._flowCounter >= this._flowTotal)); i++)
                        ;
            for (i = this._counterUsed - 1; i >= 0; i--) {
                var n = this._particlesUsed[i];
                n.update() || (n.on = !1,
                n.remove(),
                n.onKill(this),
                this._particlesUsed[i] = this._particlesUsed[--this._counterUsed],
                this._particlesPool[this._counterPool++] = n)
            }
        }
        ,
        o.prototype.makeParticles = function(t, e, i, n) {
            (void 0 === i || i > this._maxParticles) && (i = this._maxParticles),
            void 0 !== e && (this._params.frames = e);
            for (var o = 0; o < i; o++) {
                var r = new this.particleClass(this.game,n);
                r.textureKey = t,
                r.onCreate(this),
                r.on = !1,
                this._particlesPool[this._counterPool++] = r
            }
        }
        ,
        Object.defineProperty(o.prototype, "on", {
            set: function(t) {
                this._on = t,
                this.exists = t,
                this.visible = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "countParticles", {
            get: function() {
                return this._counterUsed
            },
            enumerable: !0,
            configurable: !0
        }),
        o.prototype.explode = function(t, i, n) {
            this._mode = e.EXPLODE,
            this.on = !0,
            this.emitParticles(t, i, n)
        }
        ,
        o.prototype.flow = function(t, i, n, o, r, s) {
            this._mode = e.FLOW,
            this.on = !0,
            void 0 !== i && 0 !== i || (i = 1),
            void 0 === n && (n = -1),
            void 0 === o && (o = !0),
            i > this._maxParticles && (i = this._maxParticles),
            this.frequency = t,
            this._flowCounter = 0,
            this._flowQuantity = i,
            this._flowTotal = n,
            o && (this.emitParticles(i, r, s),
            this._flowCounter += i,
            this._timer = this.game.time.time + t * this.game.time.slowMotion)
        }
        ,
        o.prototype.stopFlow = function() {
            this._mode = e.NONE
        }
        ,
        o.prototype.killAllParticles = function(t) {
            for (void 0 === t && (t = !0); this._counterUsed > 0; ) {
                var e = this._particlesUsed[--this._counterUsed];
                e.remove(),
                t || e.onKill(this),
                this._particlesPool[this._counterPool++] = e
            }
        }
        ,
        o.prototype.emitParticles = function(t, e, i) {
            for (var n = 0; n < t; n++) {
                var o = this.emitParticle(this.forceEmit);
                if (null === o)
                    break;
                void 0 !== e && null !== e && e.call(i, o)
            }
        }
        ,
        o.prototype.emitParticle = function(t, e) {
            if (void 0 === t && (t = !1),
            void 0 === e && (e = !1),
            0 === this._counterPool) {
                if (!t)
                    return null;
                var n = this._particlesUsed[0];
                this._particlesUsed[0] = this._particlesUsed[--this._counterUsed],
                n.remove(),
                n.onKill(this),
                this._particlesPool[this._counterPool++] = n
            }
            var o = this._particlesPool[--this._counterPool];
            this._particlesUsed[this._counterUsed++] = o,
            o.on = !0;
            var r = null !== this._alternativeParams ? this._alternativeParams : this._params;
            if (this.randomEmitPoint(this._emitPoint, r),
            o.visual.position.set(this._emitPoint.x, this._emitPoint.y),
            o.visual.angle = 0,
            e)
                o.lifetime = -1,
                o.visual.scale.set(1, 1),
                o.setScaleChange(i.NO_CHANGE),
                o.visual.angle = 0,
                o.alpha = 1,
                o.setAlphaChange(i.NO_CHANGE),
                o.setPhysics();
            else {
                if (o.lifetime = this.game.rnd.realInRange(r.minLifetime, r.maxLifetime),
                o.delay = r.delay,
                1 !== r.minScale || 1 !== r.maxScale) {
                    var s = this.game.rnd.realInRange(r.minScale, r.maxScale);
                    o.visual.scale.set(s, s)
                } else
                    r.advScaleMin.x !== r.advScaleMax.x || r.advScaleMin.y !== r.advScaleMax.y ? o.visual.scale.set(this.game.rnd.realInRange(r.advScaleMin.x, r.advScaleMax.x), this.game.rnd.realInRange(r.advScaleMin.y, r.advScaleMax.y)) : o.visual.scale.set(1, 1);
                o.setScaleChange(r.scaleChangeType, r.scaleChange),
                o.visual.angle = r.minAngle === r.maxAngle ? r.minAngle : this.game.rnd.realInRange(r.minAngle, r.maxAngle),
                o.alpha = this.game.rnd.realInRange(r.minAlpha, r.maxAlpha),
                o.setAlphaChange(r.alphaChangeType, r.alphaChange),
                o.setPhysics(this.game.rnd.realInRange(r.minSpeedX, r.maxSpeedX), this.game.rnd.realInRange(r.minSpeedY, r.maxSpeedY), this.game.rnd.realInRange(r.minAngularSpeed, r.maxAngularSpeed), r.friction, r.angularDrag, r.gravity),
                null !== r.frames && o.setFrame(r.randomFrame())
            }
            return o.onEmit(this),
            this.particleBringToTop ? o.bringToTop() : this.particleSendToBack && o.sendToBack(),
            o
        }
        ,
        o.prototype.destroy = function() {
            t.ParticlesManager.instance.remove(this),
            n.prototype.destroy.call(this, !0, !1)
        }
        ,
        o.prototype.randomEmitPoint = function(t, e) {
            return e.area instanceof Phaser.Point ? t.setTo(0, 0) : e.area.random(t),
            t.x += this.emitPoint.x,
            t.y += this.emitPoint.y,
            null !== this.emitObject && (t.x += this.emitObject.x,
            t.y += this.emitObject.y),
            t
        }
        ,
        Object.defineProperty(o.prototype, "area", {
            set: function(t) {
                this._params.area = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "gravity", {
            set: function(t) {
                this._params.gravity = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "friction", {
            set: function(t) {
                this._params.friction = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "angularDrag", {
            set: function(t) {
                this._params.angularDrag = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "minScale", {
            set: function(t) {
                this._params.minScale = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "maxScale", {
            set: function(t) {
                this._params.maxScale = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "minAngle", {
            set: function(t) {
                this._params.minAngle = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "maxAngle", {
            set: function(t) {
                this._params.maxAngle = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "lifetime", {
            set: function(t) {
                this._params.minLifetime = this._params.maxLifetime = t
            },
            enumerable: !0,
            configurable: !0
        }),
        o.prototype.setXSpeed = function(t, e) {
            this._params.setXSpeed(t, e)
        }
        ,
        o.prototype.setYSpeed = function(t, e) {
            this._params.setYSpeed(t, e)
        }
        ,
        o.prototype.setAngularSpeed = function(t, e) {
            this._params.setAngularSpeed(t, e)
        }
        ,
        o.prototype.setAlpha = function(t, e) {
            this._params.setAlpha(t, e)
        }
        ,
        o.prototype.setAlphaChange = function(t, e, i) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            this._params.setAlphaChange(t, e, i)
        }
        ,
        o.prototype.setScale = function(t, e) {
            this._params.setScale(t, e)
        }
        ,
        o.prototype.setAdvScale = function(t, e, i, n) {
            this._params.setAdvScale(t, e, i, n)
        }
        ,
        o.prototype.setScaleChange = function(t, e, i) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            this._params.setScaleChange(t, e, i)
        }
        ,
        o.prototype.setAngle = function(t, e) {
            this._params.setAngle(t, e)
        }
        ,
        o.prototype.emitAt = function(t, e) {
            this.emitPoint.setTo(t, e)
        }
        ,
        o.prototype.emitAtObject = function(t) {
            t.center ? this.emitPoint.setTo(t.center.x, t.center.y) : this.emitPoint.setTo(t.x, t.y)
        }
        ,
        o.MAX_PARTICELES = 16,
        o
    }(Phaser.Group);
    t.ParticlesEmitter = n
}(Particles || (Particles = {}));
!function(t) {
    var e = function() {
        function t(t, e, i, n) {
            void 0 === i && (i = null),
            void 0 === n && (n = null),
            this._emitter = null,
            this._game = t,
            this._emitter = e,
            this._animEmitter = i,
            this._params = n
        }
        return t.prototype.emit = function(t, e, i, n, o) {
            for (this._emitter.emitAt(t, e),
            null !== this._animEmitter && this._animEmitter.emitAt(t, e); null !== i; ) {
                var r = i.animated ? this._animEmitter : this._emitter;
                if (null === this._params && i.paramsName,
                null !== this._params) {
                    var s = this._params[i.paramsName];
                    void 0 === s || (r.params = s)
                }
                r.explode(this._game.rnd.integerInRange(i.countMin, i.countMax), n, o),
                i = i.next
            }
        }
        ,
        t
    }();
    t.ParticleChain = e
}(Particles || (Particles = {}));
var Particles;
!function(t) {
    var e = function() {
        function t() {
            this._emitters = [],
            this._emittersCount = 0
        }
        return Object.defineProperty(t, "instance", {
            get: function() {
                return null === t._instance && (t._instance = new t),
                t._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.add = function(t) {
            this._emitters[this._emittersCount++] = t
        }
        ,
        t.prototype.remove = function(t) {
            for (var e = this._emittersCount - 1; e >= 0 && this._emitters[e] !== t; e--)
                ;
            -1 !== e && (this._emitters[e] = this._emitters[--this._emittersCount])
        }
        ,
        t.prototype.update = function() {
            for (var t = 0; t < this._emittersCount; t++) {
                var e = this._emitters[t];
                e.exists && e.update()
            }
        }
        ,
        t._instance = null,
        t
    }();
    t.ParticlesManager = e
}(Particles || (Particles = {}));
!function(t) {
    !function(t) {
        t[t.NONE = 0] = "NONE",
        t[t.SBCGAMES = 1] = "SBCGAMES",
        t[t.DOCOMO = 2] = "DOCOMO",
        t[t.FAMOBI = 3] = "FAMOBI",
        t[t.PMCONNECT = 4] = "PMCONNECT",
        t[t.COOLMATHGAMES = 5] = "COOLMATHGAMES",
        t[t.ZYGOMATIC = 6] = "ZYGOMATIC",
        t[t.CLOUDGAMES = 7] = "CLOUDGAMES",
        t[t.WKB = 8] = "WKB",
        t[t.GAMEARTER = 9] = "GAMEARTER",
        t[t.KAPOW = 10] = "KAPOW"
    }(t.eSponsorID || (t.eSponsorID = {}))
}(Sponsor || (Sponsor = {}));
!function(t) {
    var e = function() {
        function t(e) {
            this._features = null,
            this._game = null,
            t._instance = this,
            this._features = e
        }
        return Object.defineProperty(t, "instance", {
            get: function() {
                if (null == t._instance)
                    throw new Error("Sponsor is " + t._instance + ". Sponsor must be always initialized.");
                return t._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "initialized", {
            get: function() {
                return null != t._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "id", {
            get: function() {
                return this.features.id
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "features", {
            get: function() {
                return this._features
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "game", {
            set: function(t) {
                this._game = t
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.startGameSession = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
        }
        ,
        t.prototype.endGameSession = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
        }
        ,
        t.prototype.submitScore = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
        }
        ,
        t.prototype.showAd = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
        }
        ,
        t._instance = null,
        t
    }();
    t.Sponsor = e
}(Sponsor || (Sponsor = {}));
!function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.startGameSession = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            var i = t[0];
            void 0 !== i.eventValue ? void 0 !== parent.cmgGameEvent && parent.cmgGameEvent(i.eventName, "" + i.eventValue) : void 0 !== parent.cmgGameEvent && parent.cmgGameEvent(i.eventName)
        }
        ,
        e.prototype.sendGameEvent = function(t) {
            parent && parent.cmgGameEvent && parent.cmgGameEvent(t)
        }
        ,
        e.prototype.sendDataEvent = function(t, e) {
            parent && parent.cmgDataEvent && parent.cmgDataEvent(t, e)
        }
        ,
        e
    }(t.Sponsor);
    t.SponsorCoolmathGames = e
}(Sponsor || (Sponsor = {}));
!function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e
    }(t.Sponsor);
    t.SponsorNone = e
}(Sponsor || (Sponsor = {}));
var Sponsor;
!function(t) {
    t.api = function() {
        return t.Sponsor.instance
    }
    ,
    t.id = function() {
        return t.Sponsor.instance.id
    }
    ,
    t.is = function(e) {
        return t.Sponsor.instance.id === e
    }
    ,
    t.features = function() {
        return t.Sponsor.instance.features
    }
    ,
    t.hasFeature = function(e) {
        return void 0 !== t.Sponsor.instance.features[e]
    }
    ,
    t.isFeatureOn = function(e) {
        var i = t.Sponsor.instance.features[e];
        return "boolean" == typeof i && i
    }
}(Sponsor || (Sponsor = {}));
!function(t) {
    var e = function(t) {
        function e(e, i, n, o, r, s, a) {
            var h = t.call(this, e) || this;
            h.onClick = new Phaser.Signal,
            h.onDown = new Phaser.Signal,
            h.scaleOnOver = new Phaser.Point(1,1),
            h.scaleOnDown = new Phaser.Point(1,1),
            h.offsetOnOver = new Phaser.Point(0,0),
            h.offsetOnDown = new Phaser.Point(0,0),
            h._tinted = !1,
            h._downTint = 8421504,
            h._overTint = 16777215,
            h._savePosition = new Phaser.Point,
            h._saveScale = new Phaser.Point,
            h._over = !1,
            h._down = !1,
            h.name = i;
            var c = new Phaser.Button(e,0,0,n);
            return h.add(c),
            h._button = c,
            void 0 !== r && r && (h._tinted = !0),
            void 0 === s && (s = "string" == typeof o ? o + "Down" : null,
            (h._tinted || s && !e.cache.getFrameByName(n, s)) && (s = null)),
            void 0 === a && (a = "string" == typeof o ? o + "Over" : null,
            (h._tinted || a && !e.cache.getFrameByName(n, a)) && (a = null)),
            c.setFrames(a, o, s, o),
            c.anchor.setTo(.5, .5),
            c.name = i,
            c.onInputOver.add(h.overEvent, h),
            c.onInputOut.add(h.outEvent, h),
            c.onInputDown.add(h.downEvent, h),
            c.onInputUp.add(h.upEvent, h),
            h
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "button", {
            get: function() {
                return this._button
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "anchor", {
            get: function() {
                return this._button.anchor
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setEnabled = function(t) {
            this._button.inputEnabled = t
        }
        ,
        e.prototype.setHitArea = function(t) {
            this._button.hitArea = t
        }
        ,
        e.prototype.setTint = function(t, e) {
            void 0 === e && (e = 0),
            this._downTint = t,
            this._overTint = e
        }
        ,
        e.prototype.overEvent = function(t, e) {
            this.setButton(!0, this._down),
            this.overAction()
        }
        ,
        e.prototype.outEvent = function(t, e) {
            this.setButton(!1, !1),
            this.outAction()
        }
        ,
        e.prototype.downEvent = function(t, e) {
            this.setButton(this._over, !0),
            this.downAction(),
            this.onDown.dispatch(this)
        }
        ,
        e.prototype.upEvent = function(t, e, i) {
            this.setButton(this._over, !1),
            this.upAction(),
            i && this.onClick.dispatch(this)
        }
        ,
        e.prototype.setButton = function(t, e) {
            if (this._over || this._down || (this._saveScale.copyFrom(this._button.scale),
            this._savePosition.copyFrom(this._button.position)),
            this._down = e,
            this._over = t,
            e) {
                if (Phaser.Point.multiply(this._saveScale, this.scaleOnDown, this._button.scale),
                Phaser.Point.add(this._button.position, this.offsetOnDown, this._button.position),
                this._tinted) {
                    this._button.tint = this._downTint;
                    for (var i = 0; i < this._button.children.length; i++)
                        this._button.getChildAt(i).tint = this._downTint
                }
            } else if (t) {
                if (Phaser.Point.multiply(this._saveScale, this.scaleOnOver, this._button.scale),
                Phaser.Point.add(this._button.position, this.offsetOnOver, this._button.position),
                this._tinted) {
                    this._button.tint = this._overTint;
                    for (i = 0; i < this._button.children.length; i++)
                        this._button.getChildAt(i).tint = this._overTint
                }
            } else if (this._button.scale.copyFrom(this._saveScale),
            this._button.position.copyFrom(this._savePosition),
            this._tinted) {
                this._button.tint = 16777215;
                for (i = 0; i < this._button.children.length; i++)
                    this._button.getChildAt(i).tint = 16777215
            }
        }
        ,
        e.prototype.overAction = function() {}
        ,
        e.prototype.outAction = function() {}
        ,
        e.prototype.downAction = function() {
            Utils.AudioUtils.playSound("click")
        }
        ,
        e.prototype.upAction = function() {}
        ,
        e.prototype.reset = function() {
            for (var t = this._button.input._pointerData, e = 0; e < 10; e++)
                t[e] = {
                    id: e,
                    x: 0,
                    y: 0,
                    isDown: !1,
                    isUp: !1,
                    isOver: !1,
                    isOut: !1,
                    timeOver: 0,
                    timeOut: 0,
                    timeDown: 0,
                    timeUp: 0,
                    downDuration: 0,
                    isDragged: !1
                };
            this.setButton(!1, !1)
        }
        ,
        e
    }(Phaser.Group);
    t.Button = e
}(UI || (UI = {}));
!function(t) {
    var e = function(t) {
        function e(e, i, n, o, r, s, a, h) {
            var c = t.call(this, e, i, n, o, s, a, h) || this;
            c._changeOnDown = !1,
            c._checkFramePosition = new Phaser.Point,
            c._checked = !1;
            var l = r + "On";
            c.game.cache.getFrameByName(n, l),
            c._frameChecked = l;
            var u = r + "Off";
            c.game.cache.getFrameByName(n, l) || (u = null),
            c._frameUnchecked = u;
            var p = new Phaser.Sprite(e,0,0,n);
            return p.anchor.set(.5, .5),
            c.addChild(p),
            c._checkSprite = p,
            c.checked = !1,
            c
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "checked", {
            get: function() {
                return this._checked
            },
            set: function(t) {
                if (this._checked = t,
                t)
                    this._checkSprite.frameName = this._frameChecked,
                    this._checkSprite.visible = !0;
                else {
                    var e = null !== this._frameUnchecked;
                    e && (this._checkSprite.frameName = this._frameUnchecked),
                    this._checkSprite.visible = e
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "changeOnDown", {
            get: function() {
                return this._changeOnDown
            },
            set: function(t) {
                this._changeOnDown = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "checkSprite", {
            get: function() {
                return this._checkSprite
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setCheckPosition = function(t, e) {
            this._checkSprite.position.set(t, e)
        }
        ,
        e.prototype.downEvent = function() {
            this.setButton(this._over, !0),
            this._changeOnDown && (this.checked = !this.checked),
            this.downAction(),
            this.onDown.dispatch(this, this._checked)
        }
        ,
        e.prototype.upEvent = function(t, e, i) {
            this.setButton(this._over, !1),
            this.upAction(),
            i && (this._changeOnDown || (this.checked = !this.checked),
            this.onClick.dispatch(this, this._checked))
        }
        ,
        e
    }(t.Button);
    t.CheckBox = e
}(UI || (UI = {}));
!function(t) {
    var e = function(t) {
        function e(e, i, n, o, r, s) {
            var a = t.call(this, e, i, n, o, s, r) || this;
            return a._toggled = !1,
            a._changeOnDown = !0,
            a._frameToggled = r,
            a._frameUntoggled = o,
            a.toggled = a._toggled,
            a
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "toggled", {
            get: function() {
                return this._toggled
            },
            set: function(t) {
                this._toggled = t,
                t ? (this._button.setFrames(null, this._frameToggled, this._frameToggled, this._frameToggled),
                this._changeOnDown && (this._button.frameName = this._frameToggled)) : (this._button.setFrames(null, this._frameUntoggled, this._frameUntoggled, this._frameUntoggled),
                this._changeOnDown && (this._button.frameName = this._frameUntoggled))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "changeOnDown", {
            get: function() {
                return this._changeOnDown
            },
            set: function(t) {
                this._changeOnDown = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.downEvent = function() {
            this.setButton(this._over, !0),
            this._changeOnDown && (this.toggled = !this.toggled),
            this.downAction(),
            this.onDown.dispatch(this, this._toggled)
        }
        ,
        e.prototype.upEvent = function(t, e, i) {
            this.setButton(this._over, !1),
            this.upAction(),
            i && (this._changeOnDown || (this.toggled = !this.toggled),
            this.onClick.dispatch(this, this._toggled))
        }
        ,
        e
    }(t.Button);
    t.Toggle = e
}(UI || (UI = {}));
var UI;
!function(t) {
    !function(t) {
        t[t.TOP_LEFT = 0] = "TOP_LEFT",
        t[t.TOP = 1] = "TOP",
        t[t.TOP_RIGHT = 2] = "TOP_RIGHT",
        t[t.LEFT = 3] = "LEFT",
        t[t.CENTER = 4] = "CENTER",
        t[t.RIGHT = 5] = "RIGHT",
        t[t.BOTTOM_LEFT = 6] = "BOTTOM_LEFT",
        t[t.BOTTOM = 7] = "BOTTOM",
        t[t.BOTTOM_RIGHT = 8] = "BOTTOM_RIGHT"
    }(t.eGroupPlacement || (t.eGroupPlacement = {}));
    var e = function(t) {
        function e(e, i) {
            void 0 === i && (i = null);
            var n = t.call(this, e, i) || this;
            return n._groups = [],
            n
        }
        return __extends(e, t),
        e.prototype.hasGroupAt = function(t) {
            var e = this._groups[t];
            return void 0 !== e && null !== e
        }
        ,
        e.prototype.groupAt = function(t, e) {
            void 0 === e && (e = !0);
            var i = this._groups[t];
            return void 0 !== i && null !== i || !e || ((i = new Phaser.Group(this.game,this)).fixedToCamera = !0,
            this._groups[t] = i,
            this.arrangeGroup(t)),
            i
        }
        ,
        e.prototype.arrangeGroups = function() {
            for (var t = 0; t < this._groups.length; t++) {
                var e = this._groups[t];
                void 0 !== e && null !== e && this.arrangeGroup(t)
            }
        }
        ,
        e.prototype.arrangeGroup = function(t) {
            var e = t % 3
              , i = Math.floor(t / 3)
              , n = this._groups[t];
            if (void 0 !== n && null !== n) {
                var o = this.game.width * e / 2
                  , r = this.game.height * i / 2;
                n.cameraOffset.set(o, r)
            }
        }
        ,
        e
    }(Phaser.Group);
    t.UILayer = e
}(UI || (UI = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.setSounds = function(e, i) {
            void 0 === i && (i = null),
            t._sfx = e,
            t._sfxIds = i,
            t._isAudioSprite = null !== e && e instanceof Phaser.AudioSprite
        }
        ,
        t.addSound = function(e, i) {
            t._sfxs[e] = i
        }
        ,
        t.playSoundRnd = function(e, i, n) {
            null !== e && 0 !== e.length && t.playSound(Phaser.ArrayUtils.getRandomItem(e, i, n))
        }
        ,
        t.playSound = function(e, i) {
            void 0 === i && (i = 1);
            var n = t.getSoundName(e);
            App.settings.soundOn && (null !== t._sfx ? t._isAudioSprite ? t._sfx.play(n, i) : t._sfx.play(n, 0, i) : void 0 !== t._sfxs[n] && t._sfxs[n].play("", 0, i))
        }
        ,
        t.stopSound = function(e) {
            var i = t.getSoundName(e);
            null !== t._sfx ? t._isAudioSprite && t._sfx.stop(i) : void 0 !== t._sfxs[i] && t._sfxs[i].stop()
        }
        ,
        t.getSoundName = function(e) {
            return "number" == typeof e ? t._sfxIds[e] : e
        }
        ,
        Object.defineProperty(t, "currentMusic", {
            get: function() {
                return t._currentMusic
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "isMusicPlaying", {
            get: function() {
                if (null === this._currentMusic || 0 === this._currentMusic.length)
                    return !1;
                return t._music[t._currentMusic].isPlaying
            },
            enumerable: !0,
            configurable: !0
        }),
        t.addMusic = function(e, i) {
            t._music[e] = i
        }
        ,
        t.playMusic = function(e, i) {
            if (void 0 === i && (i = !0),
            t._currentMusic !== e && (null !== t._currentMusic && t._currentMusic.length > 0 && t.stopMusic(),
            e in t._music && App.settings.musicOn)) {
                t._currentMusic = e;
                var n = t._music[e];
                n.loop = i,
                n.play(),
                i || n.onStop.addOnce(function() {
                    t.onFinished.dispatch(e)
                }, this)
            }
        }
        ,
        t.stopMusic = function() {
            if (null !== t._currentMusic && t._currentMusic.length > 0) {
                var e = t._music[t._currentMusic];
                e.isPlaying && e.stop(),
                t._currentMusic = ""
            }
        }
        ,
        t.pauseMusic = function() {
            if (null !== t._currentMusic && t._currentMusic.length > 0) {
                var e = t._music[t._currentMusic];
                e.isPlaying && e.pause()
            }
        }
        ,
        t.resumeMusic = function() {
            if (null !== t._currentMusic && t._currentMusic.length > 0) {
                var e = t._music[t._currentMusic];
                e.paused && e.resume()
            }
        }
        ,
        t._sfx = null,
        t._isAudioSprite = !1,
        t._sfxs = {},
        t._music = {},
        t._currentMusic = "",
        t.onFinished = new Phaser.Signal,
        t
    }();
    t.AudioUtils = e
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.saveTextAsFile = function(e, i) {
            var n = new Blob([e],{
                type: "text/plain"
            });
            null !== t._textFile && window.URL.revokeObjectURL(t._textFile),
            t._textFile = window.URL.createObjectURL(n);
            var o = document.createElement("a");
            o.download = i,
            o.href = t._textFile,
            o.onclick = function(t) {
                document.body.removeChild(t.target)
            }
            ,
            o.style.display = "none",
            document.body.appendChild(o),
            o.click()
        }
        ,
        t._textFile = null,
        t
    }();
    t.FileUtils = e
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.supported = function() {
            return App.game.scale.compatibility.supportsFullScreen
        }
        ,
        t.isFullscreen = function() {
            return App.game.scale.isFullScreen
        }
        ,
        t.changeFullscreen = function() {
            var t = App.game;
            t.scale.isFullScreen ? t.scale.stopFullScreen() : t.scale.startFullScreen(!1, !1)
        }
        ,
        t
    }();
    t.FullscreenUtils = e
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.loadValuesIntoObject = function(t, e) {
            for (var i in t)
                e[i] = t[i]
        }
        ,
        t
    }();
    t.ObjectUtils = e
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.ChangeAnimationPhaserJSONData = function(t) {
            Phaser.AnimationParser.myCallback = t,
            Phaser.AnimationParser.JSONData = function(t, e) {
                if (!e.frames)
                    return null;
                for (var i = new Phaser.FrameData, n = e.frames, o = 0; o < n.length; o++) {
                    var r = i.addFrame(new Phaser.Frame(o,n[o].frame.x,n[o].frame.y,n[o].frame.w,n[o].frame.h,n[o].filename));
                    n[o].trimmed && r.setTrim(n[o].trimmed, n[o].sourceSize.w, n[o].sourceSize.h, n[o].spriteSourceSize.x, n[o].spriteSourceSize.y, n[o].spriteSourceSize.w, n[o].spriteSourceSize.h),
                    Phaser.AnimationParser.myCallback(r, n[o])
                }
                return i
            }
        }
        ,
        t.AdjustTweenFunctions = function() {
            Phaser.TweenManager.prototype.removeFromUpdateQueue = function(t) {
                var e = this._tweens.indexOf(t);
                -1 !== e ? this._tweens.splice(e, 1) : -1 !== (e = this._add.indexOf(t)) && this._add.splice(e, 1)
            }
            ,
            Phaser.Tween.prototype.stopAndRemoveFromUpdateQueue = function(t) {
                var e = this.stop(t);
                return this.manager.removeFromUpdateQueue(this),
                this.pendingDelete = !1,
                e
            }
        }
        ,
        t.AddBitmapFontAddMethod = function() {
            Phaser.Cache.prototype.addBitmapFontFromImage = function(t, e, i, n, o, r, s) {
                var a = this.getImage(i, !0)
                  , h = {
                    url: e,
                    data: a.data,
                    font: null,
                    base: a.base
                };
                void 0 === r && (r = 0),
                void 0 === s && (s = 0),
                h.font = "json" === o ? Phaser.LoaderParser.jsonBitmapFont(n, h.base, r, s) : Phaser.LoaderParser.xmlBitmapFont(n, h.base, r, s),
                this._cache.bitmapFont[t] = h,
                this._resolveURL(e, h)
            }
        }
        ,
        t
    }();
    t.PhaserUtils = e
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        return function() {}
    }();
    t.ScreenMetrics = e;
    var i;
    !function(t) {
        t[t.PORTRAIT = 0] = "PORTRAIT",
        t[t.LANDSCAPE = 1] = "LANDSCAPE"
    }(i = t.eOrientation || (t.eOrientation = {}));
    var n = function() {
        function t() {}
        return t.calculateScreenMetrics = function(t, n, o, r, s, a) {
            void 0 === o && (o = i.LANDSCAPE);
            var h, c;
            if (h = window.innerWidth,
            c = window.innerHeight,
            (h < c && o === i.LANDSCAPE || c < h && o === i.PORTRAIT) && !r) {
                var l = h;
                h = c,
                c = l
            }
            void 0 !== s && void 0 !== a || (o === i.LANDSCAPE ? (s = Math.round(1024 * t / 960),
            a = Math.round(720 * n / 600)) : (s = Math.round(720 * t / 600),
            a = Math.round(1024 * n / 960)));
            var u = h / c
              , p = 0
              , _ = 0
              , d = 0
              , f = 0;
            u > t / n ? (f = n,
            d = 2 * Math.ceil(f * u / 2),
            p = ((d = Math.min(d, s)) - t) / 2,
            _ = 0) : (d = t,
            f = 2 * Math.ceil(d / u / 2),
            p = 0,
            _ = ((f = Math.min(f, a)) - n) / 2);
            var g = (h + .01) / d
              , m = (c + .01) / f;
            return r && o === i.LANDSCAPE && (g = m),
            this.screenMetrics = new e,
            this.screenMetrics.windowWidth = h,
            this.screenMetrics.windowHeight = c,
            this.screenMetrics.defaultGameWidth = t,
            this.screenMetrics.defaultGameHeight = n,
            this.screenMetrics.maxGameWidth = s,
            this.screenMetrics.maxGameHeight = a,
            this.screenMetrics.gameWidth = d,
            this.screenMetrics.gameHeight = f,
            this.screenMetrics.scaleX = g,
            this.screenMetrics.scaleY = m,
            this.screenMetrics.offsetX = p,
            this.screenMetrics.offsetY = _,
            this.screenMetrics
        }
        ,
        t
    }();
    t.ScreenUtils = n
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        function t() {}
        return Object.defineProperty(t, "sponsorStorage", {
            set: function(e) {
                t._sponsorStorage = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "allowMultipleRequests", {
            set: function(e) {
                t._allowMultipleRequests = e
            },
            enumerable: !0,
            configurable: !0
        }),
        t.save = function(e, i) {
            return __awaiter(this, void 0, void 0, function() {
                var n, o, r;
                return __generator(this, function(s) {
                    switch (s.label) {
                    case 0:
                        if (!t._allowMultipleRequests && t._requestsCounter > 0)
                            throw new Error("Previous load/save request was not finished yet");
                        return ++t._requestsCounter,
                        null === (n = t._sponsorStorage) ? [3, 2] : [4, n.save(e, i)];
                    case 1:
                        if (s.sent(),
                        !n.fallbackToStandardStorage())
                            return --t._requestsCounter,
                            [2];
                        s.label = 2;
                    case 2:
                        if (null === (o = t.getLocalStorage()))
                            throw --t._requestsCounter,
                            new Error("Standard storage not available");
                        return r = JSON.stringify(i),
                        o.setItem(e, r),
                        --t._requestsCounter,
                        [2]
                    }
                })
            })
        }
        ,
        t.load = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var i, n, o, r;
                return __generator(this, function(s) {
                    switch (s.label) {
                    case 0:
                        if (!t._allowMultipleRequests && t._requestsCounter > 0)
                            throw new Error("Previous load/save request was not finished yet");
                        return ++t._requestsCounter,
                        i = null,
                        null === (n = t._sponsorStorage) ? [3, 2] : [4, n.load(e)];
                    case 1:
                        if (null != (i = s.sent()) || !n.fallbackToStandardStorage())
                            return --t._requestsCounter,
                            [2, i];
                        s.label = 2;
                    case 2:
                        if (null === (o = t.getLocalStorage()))
                            throw --t._requestsCounter,
                            new Error("Standard storage not available");
                        return r = o.getItem(e),
                        i = JSON.parse(r),
                        --t._requestsCounter,
                        [2, i]
                    }
                })
            })
        }
        ,
        t.getLocalStorage = function() {
            try {
                if ("localStorage"in window && null != window.localStorage)
                    return localStorage
            } catch (t) {
                return null
            }
            return null
        }
        ,
        t._sponsorStorage = null,
        t._allowMultipleRequests = !0,
        t._requestsCounter = 0,
        t
    }();
    t.StorageUtils = e
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.padNumber = function(t, e, i) {
            void 0 === i && (i = "0");
            var n = t + "";
            return n.length >= e ? n : new Array(e - n.length + 1).join(i) + n
        }
        ,
        t.addSpacingToNumber = function(t, e) {
            return void 0 === e && (e = " "),
            ("" + t).replace(/\B(?=(\d{3})+(?!\d))/g, e)
        }
        ,
        t.formatTime = function(e, i, n, o) {
            void 0 === n && (n = -1),
            void 0 === o && (o = ":");
            var r = !1
              , s = "";
            if ((e = Math.floor(e)) > 3600 || 0 === i) {
                var a = Math.floor(e / 3600);
                s += (-1 !== n ? t.padNumber(a, n) : a) + o,
                e %= 3600,
                r = !0
            }
            if (!0 === r || e > 60 || 1 === i) {
                var h = Math.floor(e / 60);
                s += (-1 !== n ? t.padNumber(h, n) : h) + o,
                e %= 60,
                r = !0
            }
            var c = e;
            return s += -1 !== n ? t.padNumber(c, n) : c
        }
        ,
        t
    }();
    t.StringUtils = e
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.setTexts = function(e) {
            t._texts = e
        }
        ,
        Object.defineProperty(t, "sponsorText", {
            set: function(e) {
                t._sponsorText = e
            },
            enumerable: !0,
            configurable: !0
        }),
        t.getLanguage = function() {
            var t = null;
            return navigator && navigator.userAgent && (t = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i)) && (t = t[1]),
            !t && navigator ? (navigator.language ? t = navigator.language : navigator.languages && navigator.languages.length > 0 ? t = navigator.languages[0] : navigator.browserLanguage ? t = navigator.browserLanguage : navigator.systemLanguage ? t = navigator.systemLanguage : navigator.userLanguage && (t = navigator.userLanguage),
            t = t.substr(0, 2).toLowerCase()) : t = "en",
            t
        }
        ,
        t.getText = function(e, i) {
            if (null !== t._sponsorText)
                return t._sponsorText.getText(e, i);
            if (null === t._texts)
                throw new Error("Texts are not set.");
            void 0 === i && (i = App.settings.currentLanguage);
            var n = t._texts[i];
            if (void 0 === n)
                throw new Error("Invalid language ID " + i + ".");
            var o = n[e];
            if (void 0 === o)
                throw new Error("Text with text id: " + e + " for language " + i + " is missing.");
            return o
        }
        ,
        t._texts = null,
        t._sponsorText = null,
        t
    }();
    t.TextUtils = e
}(Utils || (Utils = {}));
var Utils;
!function(t) {
    var e = function() {
        function t() {}
        return t.isAndroidStockBrowser = function() {
            var t = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
            return t && parseFloat(t[1]) < 537
        }
        ,
        t.androidVersion = function() {
            var t = navigator.userAgent.match(/Android\s([0-9\.]*)/);
            return t ? parseFloat(t[1]) : -1
        }
        ,
        t.androidUnlockAudio = function(t) {
            t.device.android && t.device.chrome && t.device.chromeVersion >= 55 && (t.sound.touchLocked = !0,
            t.input.addTouchLockCallback(function() {
                if (this.noAudio || !this.touchLocked || null !== this._unlockSource)
                    return !0;
                if (this.usingWebAudio) {
                    var t = this.context.createBuffer(1, 1, 22050);
                    this._unlockSource = this.context.createBufferSource(),
                    this._unlockSource.buffer = t,
                    this._unlockSource.connect(this.context.destination),
                    void 0 === this._unlockSource.start ? this._unlockSource.noteOn(0) : this._unlockSource.start(0),
                    "suspended" === this._unlockSource.context.state && this._unlockSource.context.resume()
                }
                return !0
            }, t.sound, !0))
        }
        ,
        t
    }();
    t.Device = e
}(Utils || (Utils = {}));
!function(t) {
    var e = function() {
        return function() {
            this.id = "snake",
            this.musicOn = !0,
            this.soundOn = !0,
            this.currentLanguage = "en",
            this.hiScore = 238,
            this.showTutorial = !0
        }
    }();
    t.Settings = e
}(App || (App = {}));
!function(t) {
    var e;
    t.SPONSOR_FEATURES = (e = {},
    e[Sponsor.eSponsorID.NONE] = {
        id: Sponsor.eSponsorID.NONE,
        name: "none",
        hasConfig: !1,
        showFlags: !1,
        localization: !1
    },
    e[Sponsor.eSponsorID.COOLMATHGAMES] = {
        id: Sponsor.eSponsorID.COOLMATHGAMES,
        name: "coolmathgames",
        hasConfig: !1,
        showFlags: !1,
        localization: !1
    },
    e),
    t.getSponsorFeatures = function(e) {
        if (null == t.SPONSOR_FEATURES[e])
            throw new Error("Features for sponsor " + Sponsor.eSponsorID[e] + " are not in SPONSOR_FEATURES list.");
        return t.SPONSOR_FEATURES[e]
    }
}(App || (App = {}));
!function(t) {
    t.sponsor = Sponsor.eSponsorID.COOLMATHGAMES,
    t.settings = new t.Settings,
    t.game = null,
    t.correctOrientation = !1,
    t.CORDOVA = !1
}(App || (App = {})),
App.CORDOVA = !!window.cordova,
App.CORDOVA || (App.sponsor === Sponsor.eSponsorID.FAMOBI ? window.famobi_onload = launch : window.onload = launch);
var App;
!function(t) {
    var e = function() {
        function t() {}
        return t.GAME_WIDTH = 640,
        t.GAME_HEIGHT = 1024,
        t.MAX_GAME_WIDTH = 820,
        t.MAX_GAME_HEIGHT = 1136,
        t.scaleX = 1,
        t.scaleY = 1,
        t.saveKey = "snake_save",
        t.correctOrientation = !1,
        t.showLanguages = !1,
        t.supportedLanguages = ["en"],
        t.FIRE_SPONSOR_EVENTS = !0,
        t.TAP_TOLERANCE_PIXELS = 30,
        t.TAP_DEAD_BELT_IN_BLOCKS = 0,
        t.SWIPE_DISTANCE = 50,
        t.SWIPE_FINISHED_AFTER_MIN_DISTANCE = !0,
        t.SWIPE_CONTINUOUS = !1,
        t.IDEAL_BOARD_SIZE_IN_BLOCKS = 1200,
        t.MIN_SPACE_FOR_UI = 60,
        t.BG_COLOR = 0,
        t.BORDER_COLOR = 1454668,
        t.FOOD_COLOR = 16711680,
        t.SNAKE_COLOR = 3530240,
        t.SNAKE_BORDER_COLOR = 26138,
        t.SNAKE_DEATH_COLOR = 12632256,
        t.SNAKE_DEATH_BORDER_COLOR = 170,
        t.SNAKE_BLOCK_BORDER_USE_PERCENT = !1,
        t.SNAKE_BLOCK_BORDER_PIXELS = 1,
        t.SNAKE_BLOCK_BORDER_PERCENT = .1,
        t.SPEED_DESKTOP = 13.333,
        t.SPEED_MOBILE = 7,
        t.BLOCKS_ON_FOOD = 4,
        t.TEXT_STYLE = {
            font: "20px Arial",
            fill: "#fff",
            align: "center"
        },
        t.TEXT_BUTTON_STYLE = {
            font: "24px Arial",
            fill: "#fff",
            align: "center"
        },
        t
    }();
    t.Config = e
}(App || (App = {}));
!function(t) {
    var e = function(e) {
        function i() {
            var n = this
              , o = Phaser.AUTO
              , r = {
                width: App.Config.GAME_WIDTH,
                height: App.Config.GAME_HEIGHT,
                renderer: o,
                parent: "sbc_game_content",
                transparent: !1,
                antialias: !0,
                physicsConfig: null,
                preserveDrawingBuffer: !0
            };
            return Sponsor.is(Sponsor.eSponsorID.WKB) && (r.mouseWheel = !1),
            n = e.call(this, r) || this,
            i.game = n,
            Utils.PhaserUtils.ChangeAnimationPhaserJSONData(n.additionalFrameProperties),
            Utils.PhaserUtils.AdjustTweenFunctions(),
            Utils.PhaserUtils.AddBitmapFontAddMethod(),
            n.state.add("Boot", t.Boot),
            n.state.add("Preloader", t.Preloader),
            n.state.add("Menu", t.Menu),
            n.state.add("Play", t.Play),
            n.state.add("OrientationWait", t.OrientationWait),
            n.state.start("Boot"),
            n
        }
        return __extends(i, e),
        i.prototype.onSound = function(t) {
            this.sound.mute = !t
        }
        ,
        i.prototype.additionalFrameProperties = function(t, e) {
            e.anchor && (t.anchorX = e.anchor.w,
            t.anchorY = e.anchor.h),
            e.nextitem && (t.nextItemX = e.nextitem.w,
            t.nextItemY = e.nextitem.h)
        }
        ,
        i.game = null,
        i
    }(Phaser.Game);
    t.Game = e
}(Snake || (Snake = {}));
var Log;
!function(t) {
    var e = function() {
        return function(t, e) {
            this.msg = t,
            this.color = e
        }
    }()
      , i = function() {
        function t() {}
        return t.msg = function(i, n) {
            var o = t.messages;
            void 0 === n && (n = t.YELLOW);
            for (var r = 0; r < i.length; ) {
                var s = i.substr(r, 60);
                if (o.length < t.MAX_LINE)
                    t.messages.push(new e(s,n));
                else {
                    for (var a = 1; a < t.MAX_LINE; a++)
                        o[a - 1].msg = o[a].msg,
                        o[a - 1].color = o[a].color;
                    o[t.MAX_LINE - 1].msg = s,
                    o[t.MAX_LINE - 1].color = n
                }
                r += 60
            }
        }
        ,
        t.render = function(e) {
            for (var i = t.messages, n = 0; n < i.length; n++)
                e.text(i[n].msg, 10, 70 + 16 * n, i[n].color)
        }
        ,
        t.RED = "RGB(255, 0, 0)",
        t.GREEN = "RGB(0, 255, 0)",
        t.BLUE = "RGB(, 0, 255)",
        t.YELLOW = "RGB(255, 255, 0)",
        t.MAGENTA = "RGB(255, 0, 255)",
        t.CYAN = "RGB(0, 255, 255)",
        t.WHITE = "RGB(255, 255, 255)",
        t.MAX_LINE = 32,
        t.messages = [],
        t
    }();
    t.Log = i
}(Log || (Log = {}));
!function(t) {
    var e = function() {
        function t() {}
        return t.AUDIO_JSON = {
            resources: ["assets\\sfx\\Sfx.ogg", "assets\\sfx\\Sfx.m4a"],
            spritemap: {
                GameOver: {
                    start: 0,
                    end: 1.05718820861678,
                    loop: !1
                }
            }
        },
        t
    }();
    t.Sounds = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e(e, i) {
            var n = t.call(this, e, 0, 0, i) || this;
            return n._grid = new Phaser.Point,
            n._image = null,
            n._image = i,
            n
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "size", {
            get: function() {
                return this._image.width
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "gridX", {
            get: function() {
                return this._grid.x
            },
            set: function(t) {
                this._grid.x = t,
                this.setPositionFromGrid(this._grid.x, this._grid.y)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "gridY", {
            get: function() {
                return this._grid.y
            },
            set: function(t) {
                this._grid.y = t,
                this.setPositionFromGrid(this._grid.x, this._grid.y)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setGrid = function(t, e) {
            this._grid.set(t, e),
            this.setPositionFromGrid(this._grid.x, this._grid.y)
        }
        ,
        e.prototype.setPositionFromGrid = function(t, e) {
            this.position.set(t * this.size, e * this.size)
        }
        ,
        e
    }(Phaser.Sprite);
    t.Block = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(e) {
        function i(i, n, o) {
            var r = e.call(this, i, n) || this;
            return r._parentState = null,
            r._dims = new Phaser.Point,
            r._innerOffset = new Phaser.Point,
            r._borders = null,
            r._inner = null,
            r._food = null,
            r._snake = null,
            r._snakeImage = null,
            r._foodImage = null,
            r._deathImage = null,
            r._parentState = o,
            r._borders = new t.Borders(i,r),
            r.calculateDimensions(i.width, i.height),
            r.createGraphhics(r._blockSize),
            r._borders.resize(r._innerOffset, r._dims, r._blockSize),
            r._inner = new Phaser.Group(i,r),
            r._inner.position.copyFrom(r._innerOffset),
            r._snake = new t.Snake(i,r,r._snakeImage,r._dims),
            r._food = new t.Food(i,r._foodImage),
            r._inner.add(r._food),
            r
        }
        return __extends(i, e),
        i.prototype.render = function() {}
        ,
        Object.defineProperty(i.prototype, "inner", {
            get: function() {
                return this._inner
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "innerOffset", {
            get: function() {
                return this._innerOffset
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "snake", {
            get: function() {
                return this._snake
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "dimensions", {
            get: function() {
                return this._dims
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "blockSize", {
            get: function() {
                return this._blockSize
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "UICenterY", {
            get: function() {
                return this._UICenterY
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.calculateDimensions = function(t, e) {
            var i = t / e;
            for (this._dims.x = Math.floor(Math.sqrt(App.Config.IDEAL_BOARD_SIZE_IN_BLOCKS * i)),
            this._dims.y = Math.floor(this._dims.x / i),
            this._blockSize = Math.min(Math.floor(t / this._dims.x), Math.floor(e / this._dims.y)); t - this._dims.x * this._blockSize < 2 * this._blockSize; )
                --this._dims.x;
            for (; e - this._dims.y * this._blockSize < 2 * this._blockSize; )
                --this._dims.y;
            for (this._innerOffset.set(Math.floor((t - this._dims.x * this._blockSize) / 2), Math.floor((e - this._dims.y * this._blockSize) / 2)); e - this._innerOffset.y - this._dims.y * this._blockSize < App.Config.MIN_SPACE_FOR_UI; )
                --this._dims.y;
            this._UICenterY = Math.floor(e - (e - this._innerOffset.y - this._dims.y * this._blockSize) / 2)
        }
        ,
        i.prototype.createGraphhics = function(t) {
            var e = App.Config.SNAKE_BLOCK_BORDER_PIXELS;
            App.Config.SNAKE_BLOCK_BORDER_USE_PERCENT && (e = Math.floor(t * App.Config.SNAKE_BLOCK_BORDER_PERCENT));
            var i = t - 2 * e;
            this._snakeImage = new Phaser.BitmapData(this.game,"snake",t,t),
            this._snakeImage.rect(0, 0, t, t, Phaser.Color.getWebRGB(App.Config.SNAKE_BORDER_COLOR)),
            this._snakeImage.rect(e, e, i, i, Phaser.Color.getWebRGB(App.Config.SNAKE_COLOR)),
            this._foodImage = new Phaser.BitmapData(this.game,"food",t,t),
            this._foodImage.rect(0, 0, t, t, Phaser.Color.getWebRGB(App.Config.FOOD_COLOR)),
            this._deathImage = new Phaser.BitmapData(this.game,"death",t,t),
            this._deathImage.rect(0, 0, t, t, Phaser.Color.getWebRGB(App.Config.SNAKE_DEATH_BORDER_COLOR)),
            this._deathImage.rect(e, e, i, i, Phaser.Color.getWebRGB(App.Config.SNAKE_DEATH_COLOR))
        }
        ,
        i.prototype.updateBoard = function(t, e) {
            this._food.active || this.placeFood(),
            this._snake.update(t, e) && (this.checkFood(),
            this.checkBorderCollision(),
            this.checkSnakeCollision())
        }
        ,
        i.prototype.placeFood = function() {
            var t = this._snake.blocks;
            do {
                for (var e = this.game.rnd.integerInRange(0, this._dims.x - 1), i = this.game.rnd.integerInRange(0, this._dims.y - 1), n = !1, o = t.length - 1; o >= 0; o--) {
                    var r = t[o];
                    if (r.gridX === e && r.gridY === i) {
                        n = !0;
                        break
                    }
                }
                n || (this._food.setGrid(e, i),
                this._food.active = !0)
            } while (!this._food.active)
        }
        ,
        i.prototype.checkFood = function() {
            var t = this._snake.headPosition;
            t.x === this._food.gridX && t.y === this._food.gridY && (this._parentState.onScore(App.Config.BLOCKS_ON_FOOD),
            this._snake.addNewBlocks(App.Config.BLOCKS_ON_FOOD),
            this._food.active = !1)
        }
        ,
        i.prototype.checkBorderCollision = function() {
            var t = this._snake.headPosition;
            (t.x < 0 || t.x >= this._dims.x || t.y < 0 || t.y >= this._dims.y) && this.gameOver()
        }
        ,
        i.prototype.checkSnakeCollision = function() {
            var t = this._snake.blocks;
            if (!(t.length <= 1))
                for (var e = this._snake.headPosition, i = 1; i < t.length; i++) {
                    var n = t[i];
                    if (n.gridX === e.x && n.gridY === e.y)
                        return void this.gameOver()
                }
        }
        ,
        i.prototype.gameOver = function() {
            var t = this._snake.blocks[0];
            t.loadTexture(this._deathImage),
            this._inner.bringToTop(t),
            this._parentState.onGameOver()
        }
        ,
        i
    }(Phaser.Group);
    t.Board = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e(i, n) {
            var o = t.call(this, i, n) || this;
            return o._sprite = null,
            o._left = null,
            o._right = null,
            o._top = null,
            o._bottom = null,
            o._sprite = new Phaser.BitmapData(i,"border",e.SPRITE_SIZE,e.SPRITE_SIZE),
            o._sprite.rect(0, 0, e.SPRITE_SIZE, e.SPRITE_SIZE, Phaser.Color.getWebRGB(App.Config.BORDER_COLOR)),
            o._left = i.add.sprite(0, 0, o._sprite, 0, o),
            o._left.anchor.set(1, .5),
            o._right = i.add.sprite(0, 0, o._sprite, 0, o),
            o._right.anchor.set(0, .5),
            o._top = i.add.sprite(0, 0, o._sprite, 0, o),
            o._top.anchor.set(.5, 1),
            o._bottom = i.add.sprite(0, 0, o._sprite, 0, o),
            o._bottom.anchor.set(.5, 0),
            o
        }
        return __extends(e, t),
        e.prototype.resize = function(t, e, i) {
            this._left.position.set(t.x, this.game.height / 2),
            this._left.width = t.x,
            this._left.height = this.game.height;
            var n = t.x + e.x * i;
            this._right.position.set(n, this.game.height / 2),
            this._right.width = this.game.width - n,
            this._right.height = this.game.height,
            this._top.position.set(this.game.width / 2, t.y),
            this._top.width = this.game.width,
            this._top.height = t.y;
            var o = t.y + e.y * i;
            this._bottom.position.set(this.game.width / 2, o),
            this._bottom.width = this.game.width,
            this._bottom.height = this.game.height - o
        }
        ,
        e.SPRITE_SIZE = 64,
        e
    }(Phaser.Group);
    t.Borders = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e(e, i, n, o) {
            var r = t.call(this, e, i) || this;
            return r._length = null,
            r._best = null,
            r._length = e.add.text(0, 0, "", App.Config.TEXT_STYLE, r),
            r._length.align = "left",
            r._length.anchor.set(0, .5),
            r._length.position.set(o, n),
            e.device.pixelRatio > 1 && (r._length.fontSize = 2 * r._length.fontSize),
            r._best = e.add.text(0, 0, "", App.Config.TEXT_STYLE, r),
            r._best.align = "right",
            r._best.anchor.set(1, .5),
            r._best.position.set(e.width - o, n),
            e.device.pixelRatio > 1 && (r._best.fontSize = 2 * r._best.fontSize),
            r
        }
        return __extends(e, t),
        e.prototype.setLength = function(t) {
            this._length.text = Utils.TextUtils.getText("TXT_LENGTH") + t
        }
        ,
        e.prototype.setBest = function(t) {
            this._best.text = Utils.TextUtils.getText("TXT_BEST") + t
        }
        ,
        e
    }(Phaser.Group);
    t.BottomUI = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(e) {
        function i(n, o, r, s, a, h, c) {
            void 0 === c && (c = !0);
            var l = e.call(this, n, o) || this;
            l._bg = null,
            l._text = null,
            l._button = null;
            var u = h.blockSize
              , p = h.dimensions
              , _ = n.device.pixelRatio > 1 ? 2 : 1;
            r *= _,
            s *= _;
            var d = Math.ceil(r / u);
            (d % 2 == 1 && p.x % 2 == 0 || d % 2 == 0 && p.x % 2 == 1) && ++d,
            r = d * u;
            var f = Math.ceil(s / u);
            for ((f % 2 == 1 && p.y % 2 == 0 || f % 2 == 0 && p.y % 2 == 1) && ++f,
            s = f * u; r > p.x * u; )
                r -= 2 * u;
            return l._height = s,
            l._width = r,
            l._bg = n.add.sprite(0, 0, "Sprites", "Black", l),
            l._bg.width = r,
            l._bg.height = s,
            l._bg.anchor.set(.5, .5),
            l._text = n.add.text(0, 0, "", App.Config.TEXT_STYLE, l),
            l._text.anchor.set(.5, 0),
            l._text.y = -s / 2 + i.BORDER * _,
            l._text.fontSize = l._text.fontSize * _,
            c && (l._button = new t.TextButton(n,a),
            l._button.y = s / 2 - 50 * _,
            l.add(l._button),
            l._button.scale.set(_)),
            l.visible = !1,
            l
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "button", {
            get: function() {
                return this._button
            },
            enumerable: !0,
            configurable: !0
        }),
        i.BORDER = 20,
        i
    }(Phaser.Group);
    t.Dialog = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(e) {
        function i(t, i, n, o, r) {
            return e.call(this, t, i, n, o, Utils.TextUtils.getText("TXT_PLAY_AGAIN_BUTTON"), r) || this
        }
        return __extends(i, e),
        i.prototype.setScore = function(e, i) {
            var n = this.game.device.pixelRatio > 1 ? 2 : 1
              , o = "";
            i ? (o += Utils.TextUtils.getText("TXT_CONGRATS"),
            o += "\n\n",
            this._text.lineSpacing = -5,
            this._text.y = -this._height / 2 + t.Dialog.BORDER / 2 * n,
            this._button.y = this._height / 2 - 40 * n,
            this._text.addColor("#FFFF00", 0),
            this._text.addColor("#FFFFFF", 16)) : (o += Utils.TextUtils.getText("TXT_GAME_OVER"),
            o += "\n",
            this._text.lineSpacing = Math.floor(.85 * this._text.fontSize),
            this._text.y = -this._height / 2 + t.Dialog.BORDER * n,
            this._button.y = this._height / 2 - 50 * n,
            this._text.clearColors()),
            o += Utils.TextUtils.getText("TXT_LENGTH"),
            o += e.toString(),
            this._text.text = o
        }
        ,
        i
    }(t.Dialog);
    t.DialogGameOver = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e(e, i, n, o, r) {
            var s = t.call(this, e, i, n, o, null, r, !1) || this;
            return s._text.text = Utils.TextUtils.getText("TXT_PAUSE"),
            s._text.y = 0,
            s._text.anchor.set(.5),
            s._text.fontSize = .75 * s._text.fontSize,
            s
        }
        return __extends(e, t),
        e
    }(t.Dialog);
    t.DialogPause = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e(e, i, n, o, r) {
            var s = t.call(this, e, i, n, o, Utils.TextUtils.getText("TXT_START_BUTTON"), r) || this;
            return e.device.desktop ? s._text.text = Utils.TextUtils.getText("TXT_START_PC") : s._text.text = Utils.TextUtils.getText("TXT_START_MOBILE"),
            s
        }
        return __extends(e, t),
        e
    }(t.Dialog);
    t.DialogStart = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e(e, i) {
            var n = t.call(this, e, i) || this;
            return n.active = !1,
            n
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "active", {
            get: function() {
                return this._active
            },
            set: function(t) {
                this._active = t,
                this.visible = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }(t.Block);
    t.Food = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function() {
        function t(t, e, i) {
            this._board = null,
            this._cursorKeys = null,
            this._direction = new Phaser.Point,
            this._tmpDirection = new Phaser.Point,
            this._down = !1,
            this._downPosition = new Phaser.Point,
            this._hlpPt = new Phaser.Point,
            this._game = t,
            this._parentState = e,
            this._board = i,
            this._cursorKeys = t.input.keyboard.createCursorKeys(),
            t.input.onDown.add(this.onDown, this),
            t.input.addMoveCallback(this.onMove, this),
            t.input.onUp.add(this.onUp, this)
        }
        return t.prototype.onDown = function(t) {
            this._parentState.blockInput || (this._down = !0,
            this._downPosition.copyFrom(t.position),
            this._downTime = this._game.time.time)
        }
        ,
        t.prototype.onMove = function(e, i, n, o) {
            if (this._down) {
                if (Phaser.Point.subtract(e.position, this._downPosition, this._hlpPt).getMagnitude() >= App.Config.SWIPE_DISTANCE && App.Config.SWIPE_FINISHED_AFTER_MIN_DISTANCE) {
                    var r = this._board.snake.lastDirection
                      , s = Phaser.Point.subtract(e.position, this._downPosition, this._hlpPt);
                    App.Config.SWIPE_CONTINUOUS && this._downPosition.copyFrom(e.position),
                    0 !== r.x ? Math.abs(s.y) > Math.abs(s.x) && (s.y < 0 ? this._direction.copyFrom(t.UP) : this._direction.copyFrom(t.DOWN)) : 0 !== r.y ? Math.abs(s.x) > Math.abs(s.y) && (s.x < 0 ? this._direction.copyFrom(t.LEFT) : this._direction.copyFrom(t.RIGHT)) : Math.abs(s.y) > Math.abs(s.x) ? s.y < 0 ? this._direction.copyFrom(t.UP) : this._direction.copyFrom(t.DOWN) : s.x < 0 ? this._direction.copyFrom(t.LEFT) : this._direction.copyFrom(t.RIGHT)
                }
            }
        }
        ,
        t.prototype.onUp = function(e) {
            if (this._down) {
                this._down = !1;
                var i = Phaser.Point.subtract(e.position, this._downPosition, this._hlpPt).getMagnitude();
                if (i < App.Config.TAP_TOLERANCE_PIXELS) {
                    var n = this._board.snake.blocks[0].world
                      , o = this._board.snake.lastDirection
                      , r = Phaser.Point.subtract(e.position, n, this._hlpPt);
                    0 !== o.x ? Math.abs(r.y) > this._board.blockSize * App.Config.TAP_DEAD_BELT_IN_BLOCKS / 2 && (r.y < 0 ? this._direction.copyFrom(t.UP) : this._direction.copyFrom(t.DOWN)) : 0 !== o.y ? Math.abs(r.x) > this._board.blockSize * App.Config.TAP_DEAD_BELT_IN_BLOCKS / 2 && (r.x < 0 ? this._direction.copyFrom(t.LEFT) : this._direction.copyFrom(t.RIGHT)) : Math.abs(r.y) > Math.abs(r.x) ? r.y < 0 ? this._direction.copyFrom(t.UP) : this._direction.copyFrom(t.DOWN) : r.x < 0 ? this._direction.copyFrom(t.LEFT) : this._direction.copyFrom(t.RIGHT)
                }
                if (i >= App.Config.SWIPE_DISTANCE && !App.Config.SWIPE_FINISHED_AFTER_MIN_DISTANCE) {
                    o = this._board.snake.lastDirection,
                    r = Phaser.Point.subtract(e.position, this._downPosition, this._hlpPt);
                    0 !== o.x ? Math.abs(r.y) > Math.abs(r.x) && (r.y < 0 ? this._direction.copyFrom(t.UP) : this._direction.copyFrom(t.DOWN)) : 0 !== o.y ? Math.abs(r.x) > Math.abs(r.y) && (r.x < 0 ? this._direction.copyFrom(t.LEFT) : this._direction.copyFrom(t.RIGHT)) : Math.abs(r.y) > Math.abs(r.x) ? r.y < 0 ? this._direction.copyFrom(t.UP) : this._direction.copyFrom(t.DOWN) : r.x < 0 ? this._direction.copyFrom(t.LEFT) : this._direction.copyFrom(t.RIGHT)
                }
            }
        }
        ,
        t.prototype.update = function() {
            this._cursorKeys.left.isDown ? this._direction.copyFrom(t.LEFT) : this._cursorKeys.right.isDown ? this._direction.copyFrom(t.RIGHT) : this._cursorKeys.up.isDown ? this._direction.copyFrom(t.UP) : this._cursorKeys.down.isDown && this._direction.copyFrom(t.DOWN)
        }
        ,
        Object.defineProperty(t.prototype, "direction", {
            get: function() {
                return this._tmpDirection.copyFrom(this._direction),
                this._direction.set(0, 0),
                this._tmpDirection
            },
            enumerable: !0,
            configurable: !0
        }),
        t.LEFT = new Phaser.Point(-1,0),
        t.RIGHT = new Phaser.Point(1,0),
        t.UP = new Phaser.Point(0,-1),
        t.DOWN = new Phaser.Point(0,1),
        t
    }();
    t.Input = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function() {
        function e(e, i, n, o) {
            this._parent = null,
            this._pool = null,
            this._direction = new Phaser.Point,
            this._lastDirection = new Phaser.Point,
            this._hlpPt = new Phaser.Point,
            this._parent = i,
            this._pool = new Collections.Pool(t.Block,200,function() {
                return new t.Block(e,n)
            }
            ),
            this._pool.canGrow = !0,
            this._blocks = [],
            this._blocksToAdd = 0,
            this.addBlock(Math.floor(o.x / 2), Math.floor(o.y / 2)),
            this._timeToMove = 1e3 / (e.device.desktop ? App.Config.SPEED_DESKTOP : App.Config.SPEED_MOBILE),
            this._currentTimeToMove = this._timeToMove
        }
        return Object.defineProperty(e.prototype, "blocks", {
            get: function() {
                return this._blocks
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isMoving", {
            get: function() {
                return 0 !== this._direction.x || 0 !== this._direction.y
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "headPosition", {
            get: function() {
                var t = this._blocks[0];
                return this._hlpPt.set(t.gridX, t.gridY),
                this._hlpPt
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "lastDirection", {
            get: function() {
                return this._lastDirection
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.addNewBlocks = function(t) {
            this._blocksToAdd += t
        }
        ,
        e.prototype.addBlock = function(t, e) {
            var i = this._pool.spawn();
            this._parent.inner.add(i),
            i.setGrid(t, e),
            this._blocks.push(i)
        }
        ,
        e.prototype.update = function(t, e) {
            return (0 !== e.x && 0 === this._lastDirection.x || 0 !== e.y && 0 === this._lastDirection.y) && this._direction.copyFrom(e),
            (0 !== this._direction.x || 0 !== this._direction.y) && (this._currentTimeToMove -= t,
            !(this._currentTimeToMove > 0) && (this._currentTimeToMove = this._timeToMove,
            this.move(this._direction),
            this._lastDirection.copyFrom(this._direction),
            !0))
        }
        ,
        e.prototype.move = function(t) {
            for (var e = this._hlpPt, i = 0; i < this._blocks.length; i++) {
                var n = this._blocks[i]
                  , o = n.gridX
                  , r = n.gridY;
                0 === i ? n.setGrid(n.gridX + t.x, n.gridY + t.y) : n.setGrid(e.x, e.y),
                e.set(o, r)
            }
            this._blocksToAdd > 0 && (--this._blocksToAdd,
            this.addBlock(e.x, e.y))
        }
        ,
        e
    }();
    t.Snake = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e(e, i) {
            var n = t.call(this, e, "Button", "Sprites", "Button") || this;
            return n._text = null,
            n.downAction = function() {}
            ,
            n._text = e.add.text(0, 0, i, App.Config.TEXT_BUTTON_STYLE, n),
            n._text.anchor.set(.5),
            n._text.y = Math.floor(.15 * n._text.fontSize),
            n
        }
        return __extends(e, t),
        e
    }(UI.Button);
    t.TextButton = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._userScale = new Phaser.Point(1,1),
            e._gameDims = new Phaser.Point,
            e
        }
        return __extends(e, t),
        e.prototype.init = function() {
            this.calcGameDims(),
            this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE,
            this.scale.setUserScale(this._userScale.x, this._userScale.y),
            this.scale.pageAlignHorizontally = !0,
            this.scale.pageAlignVertically = !0,
            this.scale.setResizeCallback(this.gameResized, this),
            this.game.device.desktop ? App.correctOrientation = !0 : (this.scale.forceOrientation(!1, !0),
            this.scale.onOrientationChange.add(this.orientationChange, this),
            this.orientationChange(this.scale, "", !0)),
            Utils.Device.androidUnlockAudio(this.game)
        }
        ,
        e.prototype.calcGameDims = function() {
            var t = window.innerWidth
              , e = window.innerHeight
              , i = this.game.device.pixelRatio
              , n = 1 / i
              , o = 1 / i
              , r = t * i
              , s = e * i;
            this._userScale.set(o, n),
            this._gameDims.set(r, s)
        }
        ,
        e.prototype.gameResized = function(t, e) {
            if (!t.incorrectOrientation) {
                var i = this._userScale.x
                  , n = this._userScale.y;
                this.calcGameDims();
                var o = this._gameDims
                  , r = this._userScale;
                if (o.x !== this.game.width || o.y !== this.game.height || Math.abs(r.x - i) > .001 || Math.abs(r.y - n) > .001) {
                    this.scale.setGameSize(o.x, o.y),
                    this.scale.setUserScale(r.x, r.y);
                    var s = this.game.state.getCurrentState();
                    "function" == typeof s.onResize && s.onResize(o.x, o.y)
                }
            }
        }
        ,
        e.prototype.orientationChange = function(t, e, i) {
            t.isPortrait ? this.leaveIncorrectOrientation() : this.enterIncorrectOrientation()
        }
        ,
        e.prototype.enterIncorrectOrientation = function() {
            document.getElementById("sbc_orientation").style.display = "block";
            var t = this.game.state.getCurrentState();
            "function" == typeof t.onPause && t.onPause(),
            App.correctOrientation = !1
        }
        ,
        e.prototype.leaveIncorrectOrientation = function() {
            document.getElementById("sbc_orientation").style.display = "none";
            var t = this.game.state.getCurrentState();
            "function" == typeof t.onResume && t.onResume(),
            App.correctOrientation = !0
        }
        ,
        e
    }(Phaser.State);
    t.Boot = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype.setView = function(t, e) {
            this.camera.bounds = null
        }
        ,
        e
    }(Phaser.State);
    t.SceneBase = e
}(Snake || (Snake = {}));
!function(t) {
    var e;
    !function(t) {
        t[t.NOTHING = 0] = "NOTHING",
        t[t.IDLE = 1] = "IDLE",
        t[t.RUNNING = 2] = "RUNNING",
        t[t.PREPARE_TO_FLEE = 3] = "PREPARE_TO_FLEE",
        t[t.FLEE = 4] = "FLEE"
    }(e || (e = {}));
    var i = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype.create = function() {
            this.stage.backgroundColor = 0,
            this.onResize(this.game.width, this.game.height),
            App.correctOrientation ? this.game.state.start("Play") : this.game.state.start("OrientationWait")
        }
        ,
        e.prototype.onResize = function(t, e) {
            this.setView(t, e)
        }
        ,
        e
    }(t.SceneBase);
    t.Menu = i
}(Snake || (Snake = {}));
!function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._lock = !1,
            e
        }
        return __extends(e, t),
        e.prototype.create = function() {
            this.stage.backgroundColor = 0
        }
        ,
        e.prototype.update = function() {
            this._lock || App.correctOrientation && (this._lock = !0,
            this.time.events.add(200, function() {
                this.game.state.start("Play")
            }, this))
        }
        ,
        e
    }(Phaser.State);
    t.OrientationWait = e
}(Snake || (Snake = {}));
!function(t) {
    var e = function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._input = null,
            t._blockInput = !0,
            t._board = null,
            t._ui = null,
            t._score = 0,
            t._dialogStart = null,
            t._dialogGameOver = null,
            t._dialogPause = null,
            t._gameOver = !1,
            t._firstGame = !0,
            t
        }
        return __extends(i, e),
        i.prototype.create = function() {
            this.stage.backgroundColor = App.Config.BG_COLOR,
            this._score = 1,
            this._board = new t.Board(this.game,this.world,this),
            this._ui = new t.BottomUI(this.game,this.world,this._board.UICenterY,this._board.innerOffset.x),
            this._ui.setLength(this._score),
            this._ui.setBest(App.settings.hiScore),
            this._input = new t.Input(this.game,this,this._board),
            this._blockInput = !0,
            this.input.keyboard.addKey(Phaser.KeyCode.ENTER).onDown.add(this.onKeyPressed, this),
            this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR).onDown.add(this.onSpacePressed, this),
            this.onResize(this.game.width, this.game.height),
            this._gameOver = !1;
            var e = this._board.dimensions.y * this._board.blockSize / 2 + this._board.innerOffset.y;
            this._dialogGameOver = new t.DialogGameOver(this.game,this.world,360,200,this._board),
            this._dialogGameOver.position.set(this.world.centerX, e),
            this._dialogGameOver.button.onClick.add(function() {
                this.restartGame()
            }, this),
            this._dialogStart = new t.DialogStart(this.game,this.world,450,170,this._board),
            this._dialogStart.position.set(this.world.centerX, e),
            this._dialogStart.button.onClick.add(function() {
                this.startGame()
            }, this),
            this._dialogPause = new t.DialogPause(this.game,this.world,360,200,this._board),
            this._dialogPause.position.set(this.world.centerX, e),
            this._firstGame && (this._dialogStart.visible = !0)
        }
        ,
        i.prototype.onSpacePressed = function() {
            !this.dialogOnScreen && this._board.snake.isMoving ? this._dialogPause.visible = !0 : this._dialogPause.visible ? this._dialogPause.visible = !1 : this.onKeyPressed()
        }
        ,
        i.prototype.onKeyPressed = function() {
            this._dialogGameOver.visible ? this.restartGame() : this._dialogStart.visible && this.startGame()
        }
        ,
        i.prototype.startGame = function() {
            this._firstGame && (App.Config.FIRE_SPONSOR_EVENTS && Sponsor.api().sendGameEvent("start"),
            this._firstGame = !1),
            this._dialogStart.visible = !1
        }
        ,
        i.prototype.restartGame = function() {
            App.Config.FIRE_SPONSOR_EVENTS && Sponsor.api().sendGameEvent("replay"),
            this.state.start("Play")
        }
        ,
        i.prototype.onResize = function(t, e) {
            this.setView(t, e)
        }
        ,
        Object.defineProperty(i.prototype, "dialogOnScreen", {
            get: function() {
                return this._dialogStart.visible || this._dialogGameOver.visible || this._dialogPause.visible
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "blockInput", {
            get: function() {
                return this._blockInput
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.update = function() {
            if (!this.dialogOnScreen) {
                var t = Math.min(this.game.time.elapsedMS, 1e3 / 15);
                if (!this._gameOver) {
                    this._blockInput = !1,
                    this._input.update();
                    var e = this._input.direction;
                    this._board.updateBoard(t, e)
                }
            }
        }
        ,
        i.prototype.onScore = function(t) {
            this._score += t,
            this._ui.setLength(this._score)
        }
        ,
        i.prototype.onGameOver = function() {
            if (!this._gameOver) {
                this._gameOver = !0;
                var t = this._score > App.settings.hiScore;
                t && (App.settings.hiScore = this._score,
                this._ui.setBest(App.settings.hiScore),
                Utils.StorageUtils.save(App.Config.saveKey, App.settings)),
                this._dialogGameOver.setScore(this._score, t),
                this._dialogGameOver.visible = !0
            }
        }
        ,
        i
    }(t.SceneBase);
    t.Play = e
}(Snake || (Snake = {}));
var Snake;
!function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = null,
            e._ready = !1,
            e
        }
        return __extends(e, t),
        e.prototype.preload = function() {
            this.setView(this.game.width, this.game.height),
            this.stage.backgroundColor = 0;
            var t = "assets/sfx/";
            t = "assets/background/",
            t = "assets/atlas/",
            this.load.atlas("Sprites", t + "Sprites.png", t + "Sprites.json"),
            t = "assets/font/",
            t = "assets/text/",
            this.load.json("Texts", t + "text.json"),
            this.onResize(this.game.width, this.game.height)
        }
        ,
        e.prototype.create = function() {
            Utils.TextUtils.setTexts(this.game.cache.getJSON("Texts"))
        }
        ,
        e.prototype.update = function() {
            this._ready || (this._ready = !0,
            this.time.events.add(150, function() {
                this.game.state.start("Menu")
            }, this))
        }
        ,
        e.prototype.onResize = function(t, e) {
            this.setView(t, e)
        }
        ,
        e
    }(t.SceneBase);
    t.Preloader = e
}(Snake || (Snake = {}));
