!(function(e) {
  function t(s) {
    if (r[s]) return r[s].exports;
    var n = (r[s] = { i: s, l: !1, exports: {} });
    return e[s].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
  }
  var r = {};
  (t.m = e),
    (t.c = r),
    (t.d = function(e, r, s) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: s });
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = '/dist/'),
    t((t.s = 3));
})([
  function(e, t, r) {
    'use strict';
    function s(e, t, r) {
      if (((r = r || {}), !p(r))) throw new Error('options is invalid');
      var s = r.bbox,
        n = r.id;
      if (void 0 === e) throw new Error('geometry is required');
      if (t && t.constructor !== Object) throw new Error('properties must be an Object');
      s && m(s), n && f(n);
      var o = { type: 'Feature' };
      return n && (o.id = n), s && (o.bbox = s), (o.properties = t || {}), (o.geometry = e), o;
    }
    function n(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (!Array.isArray(e)) throw new Error('coordinates must be an Array');
      if (e.length < 2) throw new Error('coordinates must be at least 2 numbers long');
      if (!d(e[0]) || !d(e[1])) throw new Error('coordinates must contain numbers');
      return s({ type: 'Point', coordinates: e }, t, r);
    }
    function o(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        if (o.length < 4)
          throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        for (var i = 0; i < o[o.length - 1].length; i++) {
          if ((0 === n && 0 === i && !d(o[0][0])) || !d(o[0][1]))
            throw new Error('coordinates must contain numbers');
          if (o[o.length - 1][i] !== o[0][i])
            throw new Error('First and last Position are not equivalent.');
        }
      }
      return s({ type: 'Polygon', coordinates: e }, t, r);
    }
    function i(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (e.length < 2) throw new Error('coordinates must be an array of two or more positions');
      if (!d(e[0][1]) || !d(e[0][1])) throw new Error('coordinates must contain numbers');
      return s({ type: 'LineString', coordinates: e }, t, r);
    }
    function a(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return s({ type: 'MultiLineString', coordinates: e }, t, r);
    }
    function l(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return s({ type: 'MultiPoint', coordinates: e }, t, r);
    }
    function u(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return s({ type: 'MultiPolygon', coordinates: e }, t, r);
    }
    function c(e, t) {
      if (void 0 === e || null === e) throw new Error('radians is required');
      if (t && 'string' != typeof t) throw new Error('units must be a string');
      var r = y[t || 'kilometers'];
      if (!r) throw new Error(t + ' units is invalid');
      return e * r;
    }
    function h(e) {
      if (null === e || void 0 === e) throw new Error('degrees is required');
      return ((e % 360) * Math.PI) / 180;
    }
    function d(e) {
      return !isNaN(e) && null !== e && !Array.isArray(e);
    }
    function p(e) {
      return !!e && e.constructor === Object;
    }
    function m(e) {
      if (!e) throw new Error('bbox is required');
      if (!Array.isArray(e)) throw new Error('bbox must be an Array');
      if (4 !== e.length && 6 !== e.length)
        throw new Error('bbox must be an Array of 4 or 6 numbers');
      e.forEach(function(e) {
        if (!d(e)) throw new Error('bbox must only contain numbers');
      });
    }
    function f(e) {
      if (!e) throw new Error('id is required');
      if (-1 === ['string', 'number'].indexOf(typeof e))
        throw new Error('id must be a number or a string');
    }
    r.d(t, 'b', function() {
      return s;
    }),
      r.d(t, 'f', function() {
        return n;
      }),
      r.d(t, 'e', function() {
        return i;
      }),
      r.d(t, 'g', function() {
        return c;
      }),
      r.d(t, 'a', function() {
        return h;
      }),
      r.d(t, 'c', function() {
        return d;
      }),
      r.d(t, 'd', function() {
        return p;
      });
    var y = {
      meters: 6371008.8,
      metres: 6371008.8,
      millimeters: 6371008800,
      millimetres: 6371008800,
      centimeters: 637100880,
      centimetres: 637100880,
      kilometers: 6371.0088,
      kilometres: 6371.0088,
      miles: 3958.761333810546,
      nauticalmiles: 6371008.8 / 1852,
      inches: 6371008.8 * 39.37,
      yards: 6371008.8 / 1.0936,
      feet: 20902260.511392,
      radians: 1,
      degrees: 6371008.8 / 111325
    };
  },
  function(e, t, r) {
    'use strict';
    function s(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.',
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ',',
        n = e < 0 ? '-' : '',
        o = Math.abs(+e || 0),
        i = parseInt(o.toFixed(t), 10) + '',
        a = i.length > 3 ? i.length % 3 : 0;
      return [
        n,
        a ? i.substr(0, a) + s : '',
        i.substr(a).replace(/(\d{3})(?=\d)/g, '$1' + s),
        t
          ? '' +
            r +
            Math.abs(o - i)
              .toFixed(t)
              .slice(2)
          : ''
      ].join('');
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.numberFormat = s);
  },
  function(e, t, r) {
    'use strict';
    function s(e, t, r) {
      if (null !== e)
        for (
          var n,
            o,
            i,
            a,
            l,
            u,
            c,
            h,
            d = 0,
            p = 0,
            m = e.type,
            f = 'FeatureCollection' === m,
            y = 'Feature' === m,
            g = f ? e.features.length : 1,
            _ = 0;
          _ < g;
          _++
        ) {
          (c = f ? e.features[_].geometry : y ? e.geometry : e),
            (h = !!c && 'GeometryCollection' === c.type),
            (l = h ? c.geometries.length : 1);
          for (var v = 0; v < l; v++) {
            var b = 0,
              M = 0;
            if (null !== (a = h ? c.geometries[v] : c)) {
              u = a.coordinates;
              var L = a.type;
              switch (((d = !r || ('Polygon' !== L && 'MultiPolygon' !== L) ? 0 : 1), L)) {
                case null:
                  break;
                case 'Point':
                  if (!1 === t(u, p, _, b, M)) return !1;
                  p++, b++;
                  break;
                case 'LineString':
                case 'MultiPoint':
                  for (n = 0; n < u.length; n++) {
                    if (!1 === t(u[n], p, _, b, M)) return !1;
                    p++, 'MultiPoint' === L && b++;
                  }
                  'LineString' === L && b++;
                  break;
                case 'Polygon':
                case 'MultiLineString':
                  for (n = 0; n < u.length; n++) {
                    for (o = 0; o < u[n].length - d; o++) {
                      if (!1 === t(u[n][o], p, _, b, M)) return !1;
                      p++;
                    }
                    'MultiLineString' === L && b++, 'Polygon' === L && M++;
                  }
                  'Polygon' === L && b++;
                  break;
                case 'MultiPolygon':
                  for (n = 0; n < u.length; n++) {
                    for ('MultiPolygon' === L && (M = 0), o = 0; o < u[n].length; o++) {
                      for (i = 0; i < u[n][o].length - d; i++) {
                        if (!1 === t(u[n][o][i], p, _, b, M)) return !1;
                        p++;
                      }
                      M++;
                    }
                    b++;
                  }
                  break;
                case 'GeometryCollection':
                  for (n = 0; n < a.geometries.length; n++)
                    if (!1 === s(a.geometries[n], t, r)) return !1;
                  break;
                default:
                  throw new Error('Unknown Geometry Type');
              }
            }
          }
        }
    }
    function n(e, t) {
      var r,
        s,
        n,
        o,
        i,
        a,
        l,
        u,
        c,
        h,
        d = 0,
        p = 'FeatureCollection' === e.type,
        m = 'Feature' === e.type,
        f = p ? e.features.length : 1;
      for (r = 0; r < f; r++) {
        for (
          a = p ? e.features[r].geometry : m ? e.geometry : e,
            u = p ? e.features[r].properties : m ? e.properties : {},
            c = p ? e.features[r].bbox : m ? e.bbox : void 0,
            h = p ? e.features[r].id : m ? e.id : void 0,
            l = !!a && 'GeometryCollection' === a.type,
            i = l ? a.geometries.length : 1,
            n = 0;
          n < i;
          n++
        )
          if (null !== (o = l ? a.geometries[n] : a))
            switch (o.type) {
              case 'Point':
              case 'LineString':
              case 'MultiPoint':
              case 'Polygon':
              case 'MultiLineString':
              case 'MultiPolygon':
                if (!1 === t(o, d, u, c, h)) return !1;
                break;
              case 'GeometryCollection':
                for (s = 0; s < o.geometries.length; s++)
                  if (!1 === t(o.geometries[s], d, u, c, h)) return !1;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          else if (!1 === t(null, d, u, c, h)) return !1;
        d++;
      }
    }
    function o(e, t, r) {
      var s = r;
      return (
        n(e, function(e, n, o, i, a) {
          s = 0 === n && void 0 === r ? e : t(s, e, n, o, i, a);
        }),
        s
      );
    }
    function i(e, t) {
      n(e, function(e, r, s, n, o) {
        var i = null === e ? null : e.type;
        switch (i) {
          case null:
          case 'Point':
          case 'LineString':
          case 'Polygon':
            if (!1 === t(Object(u.b)(e, s, { bbox: n, id: o }), r, 0)) return !1;
            return;
        }
        var a;
        switch (i) {
          case 'MultiPoint':
            a = 'Point';
            break;
          case 'MultiLineString':
            a = 'LineString';
            break;
          case 'MultiPolygon':
            a = 'Polygon';
        }
        for (var l = 0; l < e.coordinates.length; l++) {
          var c = e.coordinates[l],
            h = { type: a, coordinates: c };
          if (!1 === t(Object(u.b)(h, s), r, l)) return !1;
        }
      });
    }
    function a(e, t) {
      i(e, function(e, r, n) {
        var o = 0;
        if (e.geometry) {
          var i = e.geometry.type;
          if ('Point' !== i && 'MultiPoint' !== i) {
            var a;
            return (
              !1 !==
                s(e, function(s, i, l, c, h) {
                  if (void 0 === a) return void (a = s);
                  var d = Object(u.e)([a, s], e.properties);
                  if (!1 === t(d, r, n, h, o)) return !1;
                  o++, (a = s);
                }) && void 0
            );
          }
        }
      });
    }
    function l(e, t, r) {
      var s = r,
        n = !1;
      return (
        a(e, function(e, o, i, a, l) {
          (s = !1 === n && void 0 === r ? e : t(s, e, o, i, a, l)), (n = !0);
        }),
        s
      );
    }
    r.d(t, 'a', function() {
      return o;
    }),
      r.d(t, 'b', function() {
        return l;
      });
    var u = r(0);
  },
  function(e, t, r) {
    e.exports = r(4);
  },
  function(e, t, r) {
    'use strict';
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r(5);
    var n = r(6),
      o = s(n),
      i = r(7),
      a = s(i),
      l = r(12),
      u = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      })(l),
      c = r(13),
      h = s(c),
      d = r(1),
      p = r(14);
    (L.Control.Measure = L.Control.extend({
      _className: 'leaflet-control-measure',
      options: {
        units: {},
        position: 'topright',
        primaryLengthUnit: 'meters',
        secondaryLengthUnit: 'miles',
        primaryAreaUnit: 'sqmeters',
        secondaryAreaUnit: 'hectares',
        activeColor: '#c6e6a1',
        completedColor: '#edfade',
        captureZIndex: 1e4,
        popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }
      },
      initialize: function(e) {
        L.setOptions(this, e);
        var t = this.options,
          r = t.activeColor,
          s = t.completedColor;
        (this._symbols = new h.default({ activeColor: r, completedColor: s })),
          (this.options.units = L.extend({}, o.default, this.options.units));
      },
      createMeasure: function(e, t, r) {
        (this._closeShape = t), (this._latlngs = r);
        var s = this._createResult(!1, !1);
        return (s.callbackId = e), this._clearMeasure(), s;
      },
      onAdd: function(e) {
        return (
          (this._map = e),
          (this._latlngs = []),
          this._initLayout(),
          e.on('click', this._collapse, this),
          (this._layer = L.layerGroup().addTo(e)),
          this._container
        );
      },
      onRemove: function(e) {
        e.off('click', this._collapse, this), e.removeLayer(this._layer);
      },
      _initLayout: function() {
        var e = this._className,
          t = (this._container = L.DomUtil.create('div', e + ' leaflet-bar'));
        (t.innerHTML = (0, p.controlTemplate)({ className: e })),
          t.setAttribute('aria-haspopup', !0),
          L.DomEvent.disableClickPropagation(t),
          L.DomEvent.disableScrollPropagation(t);
        var r = (this.$toggle = (0, l.selectOne)('.js-toggle', t));
        this.$interaction = (0, l.selectOne)('.js-interaction', t);
        var s = (0, l.selectOne)('.js-start-area', t),
          n = (0, l.selectOne)('.js-start-line', t),
          o = (0, l.selectOne)('.js-cancel', t),
          i = (0, l.selectOne)('.js-finish', t);
        (this.$startPrompt = (0, l.selectOne)('.js-startprompt', t)),
          (this.$measuringPrompt = (0, l.selectOne)('.js-measuringprompt', t)),
          (this.$startHelp = (0, l.selectOne)('.js-starthelp', t)),
          (this.$results = (0, l.selectOne)('.js-results', t)),
          (this.$measureTasks = (0, l.selectOne)('.js-measuretasks', t)),
          this._collapse(),
          this._updateMeasureNotStarted(),
          L.Browser.android ||
            (L.DomEvent.on(t, 'mouseenter', this._expand, this),
            L.DomEvent.on(t, 'mouseleave', this._collapse, this)),
          L.DomEvent.on(r, 'click', L.DomEvent.stop),
          L.Browser.touch
            ? L.DomEvent.on(r, 'click', this._expand, this)
            : L.DomEvent.on(r, 'focus', this._expand, this),
          L.DomEvent.on(s, 'click', L.DomEvent.stop),
          L.DomEvent.on(n, 'click', L.DomEvent.stop),
          L.DomEvent.on(s, 'click', this._startArea, this),
          L.DomEvent.on(n, 'click', this._startLine, this),
          L.DomEvent.on(o, 'click', L.DomEvent.stop),
          L.DomEvent.on(o, 'click', this._finishMeasure, this),
          L.DomEvent.on(i, 'click', L.DomEvent.stop),
          L.DomEvent.on(i, 'click', this._handleMeasureDoubleClick, this);
      },
      _expand: function() {
        u.hide(this.$toggle), u.show(this.$interaction);
      },
      _collapse: function() {
        this._locked || (u.hide(this.$interaction), u.show(this.$toggle));
      },
      _updateMeasureNotStarted: function() {
        u.hide(this.$startHelp),
          u.hide(this.$results),
          u.hide(this.$measureTasks),
          u.hide(this.$measuringPrompt),
          u.show(this.$startPrompt);
      },
      _updateMeasureStartedNoPoints: function() {
        u.hide(this.$results),
          u.show(this.$startHelp),
          u.show(this.$measureTasks),
          u.hide(this.$startPrompt),
          u.show(this.$measuringPrompt);
      },
      _updateMeasureStartedWithPoints: function() {
        u.hide(this.$startHelp),
          u.show(this.$results),
          u.show(this.$measureTasks),
          u.hide(this.$startPrompt),
          u.show(this.$measuringPrompt);
      },
      _startArea: function() {
        (this._closeShape = !0), this._startMeasure();
      },
      _startLine: function() {
        (this._closeShape = !1), this._startMeasure();
      },
      _startMeasure: function() {
        (this._locked = !0),
          (this._measureVertexes = L.featureGroup().addTo(this._layer)),
          (this._captureMarker = L.marker(this._map.getCenter(), {
            clickable: !0,
            zIndexOffset: this.options.captureZIndex,
            opacity: 0
          }).addTo(this._layer)),
          this._setCaptureMarkerIcon(),
          this._captureMarker
            .on('mouseout', this._handleMapMouseOut, this)
            .on('dblclick', this._handleMeasureDoubleClick, this)
            .on('click', this._handleMeasureClick, this),
          this._map
            .on('mousemove', this._handleMeasureMove, this)
            .on('mouseout', this._handleMapMouseOut, this)
            .on('move', this._centerCaptureMarker, this)
            .on('resize', this._setCaptureMarkerIcon, this),
          L.DomEvent.on(this._container, 'mouseenter', this._handleMapMouseOut, this),
          this._updateMeasureStartedNoPoints(),
          this._map.fire('measurestart', null, !1);
      },
      _finishMeasure: function() {
        var e = L.extend({}, this._resultsModel, { points: this._latlngs });
        (this._locked = !1),
          L.DomEvent.off(this._container, 'mouseover', this._handleMapMouseOut, this),
          this._clearMeasure(),
          this._captureMarker
            .off('mouseout', this._handleMapMouseOut, this)
            .off('dblclick', this._handleMeasureDoubleClick, this)
            .off('click', this._handleMeasureClick, this),
          this._map
            .off('mousemove', this._handleMeasureMove, this)
            .off('mouseout', this._handleMapMouseOut, this)
            .off('move', this._centerCaptureMarker, this)
            .off('resize', this._setCaptureMarkerIcon, this),
          this._layer.removeLayer(this._measureVertexes).removeLayer(this._captureMarker),
          (this._measureVertexes = null),
          this._updateMeasureNotStarted(),
          this._collapse(),
          this._map.fire('measurefinish', e, !1);
      },
      _clearMeasure: function() {
        (this._latlngs = []),
          (this._resultsModel = null),
          this._measureVertexes && this._measureVertexes.clearLayers(),
          this._measureDrag && this._layer.removeLayer(this._measureDrag),
          this._measureArea && this._layer.removeLayer(this._measureArea),
          this._measureBoundary && this._layer.removeLayer(this._measureBoundary),
          (this._measureDrag = null),
          (this._measureArea = null),
          (this._measureBoundary = null);
      },
      _centerCaptureMarker: function() {
        this._captureMarker.setLatLng(this._map.getCenter());
      },
      _setCaptureMarkerIcon: function() {
        this._captureMarker.setIcon(L.divIcon({ iconSize: this._map.getSize().multiplyBy(2) }));
      },
      _getMeasurementDisplayStrings: function(e) {
        function t(e, t, n, o, i) {
          if (t && s[t]) {
            var a = r(e, s[t], o, i);
            if (n && s[n]) {
              a = a + ' (' + r(e, s[n], o, i) + ')';
            }
            return a;
          }
          return r(e, null, o, i);
        }
        function r(e, t, r, s) {
          var n = L.extend({ factor: 1, decimals: 0 }, t);
          return [
            (0, d.numberFormat)(e * n.factor, n.decimals, r || '.', s || ','),
            n.display
          ].join(' ');
        }
        var s = this.options.units;
        return {
          lengthDisplay: t(
            e.length,
            this.options.primaryLengthUnit,
            this.options.secondaryLengthUnit,
            this.options.decPoint,
            this.options.thousandsSep
          ),
          areaDisplay: t(
            e.area,
            this.options.primaryAreaUnit,
            this.options.secondaryAreaUnit,
            this.options.decPoint,
            this.options.thousandsSep
          )
        };
      },
      _updateResults: function() {
        var e = (0, a.default)(this._latlngs),
          t = (this._resultsModel = L.extend({}, e, this._getMeasurementDisplayStrings(e), {
            pointCount: this._latlngs.length,
            showArea: this._closeShape
          }));
        this.$results.innerHTML = (0, p.resultsTemplate)(t);
      },
      _handleMeasureMove: function(e) {
        this._measureDrag
          ? this._measureDrag.setLatLng(e.latlng)
          : (this._measureDrag = L.circleMarker(
              e.latlng,
              this._symbols.getSymbol('measureDrag')
            ).addTo(this._layer)),
          this._measureDrag.bringToFront();
      },
      _handleMeasureDoubleClick: function() {
        this._createResult(!0, !0), this._finishMeasure();
      },
      _handleMeasureClick: function(e) {
        var t = this._map.mouseEventToLatLng(e.originalEvent),
          r = this._latlngs[this._latlngs.length - 1],
          s = this._symbols.getSymbol('measureVertex');
        (r && t.equals(r)) ||
          (this._latlngs.push(t),
          this._addMeasureBoundary(this._latlngs),
          this._closeShape && this._addMeasureArea(this._latlngs),
          this._measureVertexes.eachLayer(function(e) {
            e.setStyle(s), e._path && e._path.setAttribute('class', s.className);
          }),
          this._addNewVertex(t),
          this._measureBoundary && this._measureBoundary.bringToFront(),
          this._measureVertexes.bringToFront()),
          this._updateResults(),
          this._updateMeasureStartedWithPoints();
      },
      _handleMapMouseOut: function() {
        this._measureDrag &&
          (this._layer.removeLayer(this._measureDrag), (this._measureDrag = null));
      },
      _createResult: function(e, t) {
        var r = this._latlngs,
          s = void 0,
          n = void 0;
        if (r.length) {
          var o = (0, a.default)(r),
            i = L.extend({ showSave: t }, o, this._getMeasurementDisplayStrings(o));
          1 === r.length
            ? ((s = L.circleMarker(r[0], this._symbols.getSymbol('resultPoint'))),
              (n = (0, p.pointPopupTemplate)(o)))
            : 2 !== r.length && this._closeShape
            ? (r.push(r[0]),
              (s = L.polygon(r, this._symbols.getSymbol('resultArea'))),
              (n = (0, p.areaPopupTemplate)(i)))
            : ((s = L.polyline(r, this._symbols.getSymbol('resultLine'))),
              (n = (0, p.linePopupTemplate)(i)));
          var u = L.DomUtil.create('div', '');
          u.innerHTML = n;
          var c = (0, l.selectOne)('.js-zoomto', u);
          c &&
            (L.DomEvent.on(c, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              c,
              'click',
              function() {
                s.getBounds
                  ? this._map.fitBounds(s.getBounds(), { padding: [20, 20], maxZoom: 17 })
                  : s.getLatLng && this._map.panTo(s.getLatLng());
              },
              this
            ));
          var h = (0, l.selectOne)('.js-deletemarkup', u);
          h &&
            (L.DomEvent.on(h, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              h,
              'click',
              function() {
                this._map.fire('measuredelete', { layer: s }), this._layer.removeLayer(s);
              },
              this
            ));
          var d = (0, l.selectOne)('.js-savemarkup', u);
          if (
            (d &&
              (L.DomEvent.on(d, 'click', L.DomEvent.stop),
              L.DomEvent.on(
                d,
                'click',
                function() {
                  this._map.fire('measuresave', { layer: s }), L.DomUtil.remove(d);
                },
                this
              )),
            s.addTo(this._layer),
            s.bindPopup(u, this.options.popupOptions),
            e)
          ) {
            var m = s.getBounds ? s.getBounds().getCenter() : s.getLatLng();
            s.openPopup(m);
          }
          return s;
        }
      },
      _addNewVertex: function(e) {
        L.circleMarker(e, this._symbols.getSymbol('measureVertexActive')).addTo(
          this._measureVertexes
        );
      },
      _addMeasureArea: function(e) {
        if (e.length < 3)
          return void (
            this._measureArea &&
            (this._layer.removeLayer(this._measureArea), (this._measureArea = null))
          );
        this._measureArea
          ? this._measureArea.setLatLngs(e)
          : (this._measureArea = L.polygon(e, this._symbols.getSymbol('measureArea')).addTo(
              this._layer
            ));
      },
      _addMeasureBoundary: function(e) {
        if (e.length < 2)
          return void (
            this._measureBoundary &&
            (this._layer.removeLayer(this._measureBoundary), (this._measureBoundary = null))
          );
        this._measureBoundary
          ? this._measureBoundary.setLatLngs(e)
          : (this._measureBoundary = L.polyline(
              e,
              this._symbols.getSymbol('measureBoundary')
            ).addTo(this._layer));
      }
    })),
      L.Map.mergeOptions({ measureControl: !1 }),
      L.Map.addInitHook(function() {
        this.options.measureControl && (this.measureControl = new L.Control.Measure().addTo(this));
      }),
      (L.control.measure = function(e) {
        return new L.Control.Measure(e);
      });
  },
  function(e, t) {},
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        acres: { factor: 24711e-8, display: 'Acres', decimals: 2 },
        feet: { factor: 3.2808, display: 'Feet', decimals: 0 },
        kilometers: { factor: 0.001, display: 'Kilometers', decimals: 2 },
        hectares: { factor: 1e-4, display: 'Hectares', decimals: 2 },
        meters: { factor: 1, display: 'Meters', decimals: 0 },
        miles: { factor: 3.2808 / 5280, display: 'Miles', decimals: 2 },
        sqfeet: { factor: 10.7639, display: 'Sq Feet', decimals: 0 },
        sqmeters: { factor: 1, display: 'Sq Meters', decimals: 0 },
        sqmiles: { factor: 3.86102e-7, display: 'Sq Miles', decimals: 2 }
      });
  },
  function(e, t, r) {
    'use strict';
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      return e < 10 ? '0' + e.toString() : e.toString();
    }
    function o(e, t, r) {
      var s = Math.abs(e),
        o = Math.floor(s),
        i = Math.floor(60 * (s - o)),
        a = Math.round(3600 * (s - o - i / 60) * 100) / 100,
        l = s === e ? t : r;
      return n(o) + '&deg; ' + n(i) + "' " + n(a) + '" ' + l;
    }
    function i(e) {
      var t = e[e.length - 1],
        r = e.map(function(e) {
          return [e.lat, e.lng];
        }),
        s = L.polyline(r),
        n = L.polygon(r),
        i = 1e3 * (0, l.default)(s.toGeoJSON(), { units: 'kilometers' }),
        a = (0, c.default)(n.toGeoJSON());
      return {
        lastCoord: {
          dd: { x: t.lng, y: t.lat },
          dms: { x: o(t.lng, 'E', 'W'), y: o(t.lat, 'N', 'S') }
        },
        length: i,
        area: a
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = i);
    var a = r(8),
      l = s(a),
      u = r(11),
      c = s(u);
  },
  function(e, t, r) {
    'use strict';
    function s(e, t) {
      if (((t = t || {}), !Object(i.d)(t))) throw new Error('options is invalid');
      if (!e) throw new Error('geojson is required');
      return Object(o.b)(
        e,
        function(e, r) {
          var s = r.geometry.coordinates;
          return e + Object(n.a)(s[0], s[1], t);
        },
        0
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = r(9),
      o = r(2),
      i = r(0);
    t.default = s;
  },
  function(e, t, r) {
    'use strict';
    function s(e, t, r) {
      if (((r = r || {}), !Object(o.d)(r))) throw new Error('options is invalid');
      var s = r.units,
        i = Object(n.a)(e),
        a = Object(n.a)(t),
        l = Object(o.a)(a[1] - i[1]),
        u = Object(o.a)(a[0] - i[0]),
        c = Object(o.a)(i[1]),
        h = Object(o.a)(a[1]),
        d = Math.pow(Math.sin(l / 2), 2) + Math.pow(Math.sin(u / 2), 2) * Math.cos(c) * Math.cos(h);
      return Object(o.g)(2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d)), s);
    }
    var n = r(10),
      o = r(0);
    t.a = s;
  },
  function(e, t, r) {
    'use strict';
    function s(e) {
      if (!e) throw new Error('coord is required');
      if ('Feature' === e.type && null !== e.geometry && 'Point' === e.geometry.type)
        return e.geometry.coordinates;
      if ('Point' === e.type) return e.coordinates;
      if (Array.isArray(e) && e.length >= 2 && void 0 === e[0].length && void 0 === e[1].length)
        return e;
      throw new Error('coord must be GeoJSON Point or an Array of numbers');
    }
    r.d(t, 'a', function() {
      return s;
    });
    r(0);
  },
  function(e, t, r) {
    'use strict';
    function s(e) {
      return Object(l.a)(
        e,
        function(e, t) {
          return e + n(t);
        },
        0
      );
    }
    function n(e) {
      var t,
        r = 0;
      switch (e.type) {
        case 'Polygon':
          return o(e.coordinates);
        case 'MultiPolygon':
          for (t = 0; t < e.coordinates.length; t++) r += o(e.coordinates[t]);
          return r;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
          return 0;
        case 'GeometryCollection':
          for (t = 0; t < e.geometries.length; t++) r += n(e.geometries[t]);
          return r;
      }
    }
    function o(e) {
      var t = 0;
      if (e && e.length > 0) {
        t += Math.abs(i(e[0]));
        for (var r = 1; r < e.length; r++) t -= Math.abs(i(e[r]));
      }
      return t;
    }
    function i(e) {
      var t,
        r,
        s,
        n,
        o,
        i,
        l,
        c = 0,
        h = e.length;
      if (h > 2) {
        for (l = 0; l < h; l++)
          l === h - 2
            ? ((n = h - 2), (o = h - 1), (i = 0))
            : l === h - 1
            ? ((n = h - 1), (o = 0), (i = 1))
            : ((n = l), (o = l + 1), (i = l + 2)),
            (t = e[n]),
            (r = e[o]),
            (s = e[i]),
            (c += (a(s[0]) - a(t[0])) * Math.sin(a(r[1])));
        c = (c * u * u) / 2;
      }
      return c;
    }
    function a(e) {
      return (e * Math.PI) / 180;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = r(2),
      u = 6378137;
    t.default = s;
  },
  function(e, t, r) {
    'use strict';
    function s(e, t) {
      return t || (t = document), t.querySelector(e);
    }
    function n(e, t) {
      return t || (t = document), Array.prototype.slice.call(t.querySelectorAll(e));
    }
    function o(e) {
      if (e) return e.setAttribute('style', 'display:none;'), e;
    }
    function i(e) {
      if (e) return e.removeAttribute('style'), e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.selectOne = s),
      (t.selectAll = n),
      (t.hide = o),
      (t.show = i);
  },
  function(e, t, r) {
    'use strict';
    function s(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var s = t[r];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              'value' in s && (s.writable = !0),
              Object.defineProperty(e, s.key, s);
          }
        }
        return function(t, r, s) {
          return r && e(t.prototype, r), s && e(t, s), t;
        };
      })(),
      o = { activeColor: '#ABE67E', completedColor: '#C8F2BE' },
      i = (function() {
        function e(t) {
          s(this, e), (this._options = L.extend({}, o, this._options, t));
        }
        return (
          n(e, [
            {
              key: 'getSymbol',
              value: function(e) {
                return {
                  measureDrag: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.7,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.5,
                    className: 'layer-measuredrag'
                  },
                  measureArea: {
                    clickable: !1,
                    stroke: !1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.2,
                    className: 'layer-measurearea'
                  },
                  measureBoundary: {
                    clickable: !1,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measureboundary'
                  },
                  measureVertex: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.7,
                    className: 'layer-measurevertex'
                  },
                  measureVertexActive: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 1,
                    className: 'layer-measurevertex active'
                  },
                  resultArea: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 0.9,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.2,
                    className: 'layer-measure-resultarea'
                  },
                  resultLine: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 3,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measure-resultline'
                  },
                  resultPoint: {
                    clickable: !0,
                    radius: 4,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.7,
                    className: 'layer-measure-resultpoint'
                  }
                }[e];
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t, r) {
    'use strict';
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = r(15);
    Object.defineProperty(t, 'controlTemplate', {
      enumerable: !0,
      get: function() {
        return s(n).default;
      }
    });
    var o = r(16);
    Object.defineProperty(t, 'resultsTemplate', {
      enumerable: !0,
      get: function() {
        return s(o).default;
      }
    });
    var i = r(17);
    Object.defineProperty(t, 'pointPopupTemplate', {
      enumerable: !0,
      get: function() {
        return s(i).default;
      }
    });
    var a = r(18);
    Object.defineProperty(t, 'linePopupTemplate', {
      enumerable: !0,
      get: function() {
        return s(a).default;
      }
    });
    var l = r(19);
    Object.defineProperty(t, 'areaPopupTemplate', {
      enumerable: !0,
      get: function() {
        return s(l).default;
      }
    });
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        return (
          '\n  <a class="' +
          e.className +
          '-toggle js-toggle" href="#" title="Measure distances and areas">Measure</a>\n  <div class="' +
          e.className +
          '-interaction js-interaction">\n    <div class="js-startprompt startprompt">\n      <h3>Create measurement</h3>\n      <ul class="tasks">\n        <a href="#" class="js-start-area start">Measure area</a>\n        <a href="#" class="js-start-line start">Measure distance</a>\n      </ul>\n    </div>\n    <div class="js-measuringprompt">\n      <h3>Measure distances and areas</h3>\n      <p class="js-starthelp">Start creating a measurement by adding points to the map</p>\n      <div class="js-results results"></div>\n      <ul class="js-measuretasks tasks">\n        <li><a href="#" class="js-cancel cancel">Cancel</a></li>\n        <li><a href="#" class="js-finish finish">Finish measurement</a></li>\n      </ul>\n    </div>\n  </div>\n'
        );
      });
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var s = r(1);
    t.default = function(e) {
      var t =
          e.pointCount <= 1
            ? ''
            : '\n    <div class="group">\n      <p><span class="heading">Path distance</span> ' +
              e.lengthDisplay +
              '</p>\n    </div>\n  ',
        r =
          e.pointCount <= 2 || !e.showArea
            ? ''
            : '\n    <div class="group">\n      <p><span class="heading">Area</span> ' +
              e.areaDisplay +
              '</p>\n    </div>\n  ';
      return (
        '\n    <div class="group">\n      <p class="lastpoint heading">Last point</p>\n      <p>' +
        e.lastCoord.dms.y +
        ' <span class="coorddivider">/</span> ' +
        e.lastCoord.dms.x +
        '</p>\n      <p>' +
        (0, s.numberFormat)(e.lastCoord.dd.y, 6) +
        ' <span class="coorddivider">/</span> ' +
        (0, s.numberFormat)(e.lastCoord.dd.x, 6) +
        '</p>\n    </div>\n    ' +
        t +
        '\n    ' +
        r +
        '\n  '
      );
    };
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var s = r(1);
    t.default = function(e) {
      return (
        '\n  <h3>Point location</h3>\n  <p>' +
        e.lastCoord.dms.y +
        ' <span class="coorddivider">/</span> ' +
        e.lastCoord.dms.x +
        '</p>\n  <p>' +
        (0, s.numberFormat)(e.lastCoord.dd.y, 6) +
        ' <span class="coorddivider">/</span> ' +
        (0, s.numberFormat)(e.lastCoord.dd.x, 6) +
        '</p>\n  <ul class="tasks">\n    <li><a href="#" class="js-zoomto zoomto">Center on this location</a></li>\n    <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>\n  </ul>\n'
      );
    };
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.showSave
          ? '<li><a href="#" class="js-savemarkup savemarkup">Save to scan</a></li>'
          : '';
        return (
          '\n    <h3>Linear measurement</h3>\n    <p>' +
          e.lengthDisplay +
          '</p>\n    <ul class="tasks">\n      <li><a href="#" class="js-zoomto zoomto">Center on this line</a></li>\n      <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>\n      ' +
          t +
          '\n    </ul>\n  '
        );
      });
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.showSave
          ? '<li><a href="#" class="js-savemarkup savemarkup">Save to scan</a></li>'
          : '';
        return (
          '\n    <h3>Area measurement</h3>\n    <p>' +
          e.areaDisplay +
          '</p>\n    <p>' +
          e.lengthDisplay +
          ' Perimeter</p>\n    <ul class="tasks">\n      <li><a href="#" class="js-zoomto zoomto">Center on this area</a></li>\n      <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>\n      ' +
          t +
          '\n    </ul>\n  '
        );
      });
  }
]);
