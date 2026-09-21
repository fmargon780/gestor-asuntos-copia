(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var t;
  var e;
  var i;
  var s;
  var n = { 976: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { AnnotationLayer: () => AnnotationLayer, FreeTextAnnotationElement: () => FreeTextAnnotationElement, InkAnnotationElement: () => InkAnnotationElement, StampAnnotationElement: () => StampAnnotationElement });
    var i2 = e2(292), s2 = e2(419), n2 = e2(792);
    function makeColorComp(t3) {
      return Math.floor(255 * Math.max(0, Math.min(1, t3))).toString(16).padStart(2, "0");
    }
    function scaleAndClamp(t3) {
      return Math.max(0, Math.min(255, 255 * t3));
    }
    class ColorConverters {
      static CMYK_G([t3, e3, i3, s3]) {
        return ["G", 1 - Math.min(1, 0.3 * t3 + 0.59 * i3 + 0.11 * e3 + s3)];
      }
      static G_CMYK([t3]) {
        return ["CMYK", 0, 0, 0, 1 - t3];
      }
      static G_RGB([t3]) {
        return ["RGB", t3, t3, t3];
      }
      static G_rgb([t3]) {
        return [t3 = scaleAndClamp(t3), t3, t3];
      }
      static G_HTML([t3]) {
        const e3 = makeColorComp(t3);
        return `#${e3}${e3}${e3}`;
      }
      static RGB_G([t3, e3, i3]) {
        return ["G", 0.3 * t3 + 0.59 * e3 + 0.11 * i3];
      }
      static RGB_rgb(t3) {
        return t3.map(scaleAndClamp);
      }
      static RGB_HTML(t3) {
        return `#${t3.map(makeColorComp).join("")}`;
      }
      static T_HTML() {
        return "#00000000";
      }
      static T_rgb() {
        return [null];
      }
      static CMYK_RGB([t3, e3, i3, s3]) {
        return ["RGB", 1 - Math.min(1, t3 + s3), 1 - Math.min(1, i3 + s3), 1 - Math.min(1, e3 + s3)];
      }
      static CMYK_rgb([t3, e3, i3, s3]) {
        return [scaleAndClamp(1 - Math.min(1, t3 + s3)), scaleAndClamp(1 - Math.min(1, i3 + s3)), scaleAndClamp(1 - Math.min(1, e3 + s3))];
      }
      static CMYK_HTML(t3) {
        const e3 = this.CMYK_RGB(t3).slice(1);
        return this.RGB_HTML(e3);
      }
      static RGB_CMYK([t3, e3, i3]) {
        const s3 = 1 - t3, n3 = 1 - e3, a3 = 1 - i3;
        return ["CMYK", s3, n3, a3, Math.min(s3, n3, a3)];
      }
    }
    var a2 = e2(284);
    const r2 = 1e3, o2 = /* @__PURE__ */ new WeakSet();
    function getRectDims(t3) {
      return { width: t3[2] - t3[0], height: t3[3] - t3[1] };
    }
    class AnnotationElementFactory {
      static create(t3) {
        switch (t3.data.annotationType) {
          case i2.AnnotationType.LINK:
            return new LinkAnnotationElement(t3);
          case i2.AnnotationType.TEXT:
            return new TextAnnotationElement(t3);
          case i2.AnnotationType.WIDGET:
            switch (t3.data.fieldType) {
              case "Tx":
                return new TextWidgetAnnotationElement(t3);
              case "Btn":
                return t3.data.radioButton ? new RadioButtonWidgetAnnotationElement(t3) : t3.data.checkBox ? new CheckboxWidgetAnnotationElement(t3) : new PushButtonWidgetAnnotationElement(t3);
              case "Ch":
                return new ChoiceWidgetAnnotationElement(t3);
              case "Sig":
                return new SignatureWidgetAnnotationElement(t3);
            }
            return new WidgetAnnotationElement(t3);
          case i2.AnnotationType.POPUP:
            return new PopupAnnotationElement(t3);
          case i2.AnnotationType.FREETEXT:
            return new FreeTextAnnotationElement(t3);
          case i2.AnnotationType.LINE:
            return new LineAnnotationElement(t3);
          case i2.AnnotationType.SQUARE:
            return new SquareAnnotationElement(t3);
          case i2.AnnotationType.CIRCLE:
            return new CircleAnnotationElement(t3);
          case i2.AnnotationType.POLYLINE:
            return new PolylineAnnotationElement(t3);
          case i2.AnnotationType.CARET:
            return new CaretAnnotationElement(t3);
          case i2.AnnotationType.INK:
            return new InkAnnotationElement(t3);
          case i2.AnnotationType.POLYGON:
            return new PolygonAnnotationElement(t3);
          case i2.AnnotationType.HIGHLIGHT:
            return new HighlightAnnotationElement(t3);
          case i2.AnnotationType.UNDERLINE:
            return new UnderlineAnnotationElement(t3);
          case i2.AnnotationType.SQUIGGLY:
            return new SquigglyAnnotationElement(t3);
          case i2.AnnotationType.STRIKEOUT:
            return new StrikeOutAnnotationElement(t3);
          case i2.AnnotationType.STAMP:
            return new StampAnnotationElement(t3);
          case i2.AnnotationType.FILEATTACHMENT:
            return new FileAttachmentAnnotationElement(t3);
          default:
            return new AnnotationElement(t3);
        }
      }
    }
    class AnnotationElement {
      #t = null;
      #e = false;
      constructor(t3, { isRenderable: e3 = false, ignoreBorder: i3 = false, createQuadrilaterals: s3 = false } = {}) {
        this.isRenderable = e3;
        this.data = t3.data;
        this.layer = t3.layer;
        this.linkService = t3.linkService;
        this.downloadManager = t3.downloadManager;
        this.imageResourcesPath = t3.imageResourcesPath;
        this.renderForms = t3.renderForms;
        this.svgFactory = t3.svgFactory;
        this.annotationStorage = t3.annotationStorage;
        this.enableScripting = t3.enableScripting;
        this.hasJSActions = t3.hasJSActions;
        this._fieldObjects = t3.fieldObjects;
        this.parent = t3.parent;
        e3 && (this.container = this._createContainer(i3));
        s3 && this._createQuadrilaterals();
      }
      static _hasPopupData({ titleObj: t3, contentsObj: e3, richText: i3 }) {
        return !!(t3?.str || e3?.str || i3?.str);
      }
      get hasPopupData() {
        return AnnotationElement._hasPopupData(this.data);
      }
      updateEdited(t3) {
        if (!this.container) return;
        this.#t ||= { rect: this.data.rect.slice(0) };
        const { rect: e3 } = t3;
        e3 && this.#i(e3);
      }
      resetEdited() {
        if (this.#t) {
          this.#i(this.#t.rect);
          this.#t = null;
        }
      }
      #i(t3) {
        const { container: { style: e3 }, data: { rect: i3, rotation: s3 }, parent: { viewport: { rawDims: { pageWidth: n3, pageHeight: a3, pageX: r3, pageY: o3 } } } } = this;
        i3?.splice(0, 4, ...t3);
        const { width: l2, height: h2 } = getRectDims(t3);
        e3.left = 100 * (t3[0] - r3) / n3 + "%";
        e3.top = 100 * (a3 - t3[3] + o3) / a3 + "%";
        if (0 === s3) {
          e3.width = 100 * l2 / n3 + "%";
          e3.height = 100 * h2 / a3 + "%";
        } else this.setRotation(s3);
      }
      _createContainer(t3) {
        const { data: e3, parent: { page: s3, viewport: n3 } } = this, a3 = document.createElement("section");
        a3.setAttribute("data-annotation-id", e3.id);
        this instanceof WidgetAnnotationElement || (a3.tabIndex = r2);
        const { style: o3 } = a3;
        o3.zIndex = this.parent.zIndex++;
        e3.popupRef && a3.setAttribute("aria-haspopup", "dialog");
        e3.alternativeText && (a3.title = e3.alternativeText);
        e3.noRotate && a3.classList.add("norotate");
        if (!e3.rect || this instanceof PopupAnnotationElement) {
          const { rotation: t4 } = e3;
          e3.hasOwnCanvas || 0 === t4 || this.setRotation(t4, a3);
          return a3;
        }
        const { width: l2, height: h2 } = getRectDims(e3.rect);
        if (!t3 && e3.borderStyle.width > 0) {
          o3.borderWidth = `${e3.borderStyle.width}px`;
          const t4 = e3.borderStyle.horizontalCornerRadius, s4 = e3.borderStyle.verticalCornerRadius;
          if (t4 > 0 || s4 > 0) {
            const e4 = `calc(${t4}px * var(--scale-factor)) / calc(${s4}px * var(--scale-factor))`;
            o3.borderRadius = e4;
          } else if (this instanceof RadioButtonWidgetAnnotationElement) {
            const t5 = `calc(${l2}px * var(--scale-factor)) / calc(${h2}px * var(--scale-factor))`;
            o3.borderRadius = t5;
          }
          switch (e3.borderStyle.style) {
            case i2.AnnotationBorderStyleType.SOLID:
              o3.borderStyle = "solid";
              break;
            case i2.AnnotationBorderStyleType.DASHED:
              o3.borderStyle = "dashed";
              break;
            case i2.AnnotationBorderStyleType.BEVELED:
              (0, i2.warn)("Unimplemented border style: beveled");
              break;
            case i2.AnnotationBorderStyleType.INSET:
              (0, i2.warn)("Unimplemented border style: inset");
              break;
            case i2.AnnotationBorderStyleType.UNDERLINE:
              o3.borderBottomStyle = "solid";
          }
          const n4 = e3.borderColor || null;
          if (n4) {
            this.#e = true;
            o3.borderColor = i2.Util.makeHexColor(0 | n4[0], 0 | n4[1], 0 | n4[2]);
          } else o3.borderWidth = 0;
        }
        const d2 = i2.Util.normalizeRect([e3.rect[0], s3.view[3] - e3.rect[1] + s3.view[1], e3.rect[2], s3.view[3] - e3.rect[3] + s3.view[1]]), { pageWidth: c2, pageHeight: u2, pageX: p2, pageY: g2 } = n3.rawDims;
        o3.left = 100 * (d2[0] - p2) / c2 + "%";
        o3.top = 100 * (d2[1] - g2) / u2 + "%";
        const { rotation: m2 } = e3;
        if (e3.hasOwnCanvas || 0 === m2) {
          o3.width = 100 * l2 / c2 + "%";
          o3.height = 100 * h2 / u2 + "%";
        } else this.setRotation(m2, a3);
        return a3;
      }
      setRotation(t3, e3 = this.container) {
        if (!this.data.rect) return;
        const { pageWidth: i3, pageHeight: s3 } = this.parent.viewport.rawDims, { width: n3, height: a3 } = getRectDims(this.data.rect);
        let r3, o3;
        if (t3 % 180 == 0) {
          r3 = 100 * n3 / i3;
          o3 = 100 * a3 / s3;
        } else {
          r3 = 100 * a3 / i3;
          o3 = 100 * n3 / s3;
        }
        e3.style.width = `${r3}%`;
        e3.style.height = `${o3}%`;
        e3.setAttribute("data-main-rotation", (360 - t3) % 360);
      }
      get _commonActions() {
        const setColor = (t3, e3, i3) => {
          const s3 = i3.detail[t3], n3 = s3[0], a3 = s3.slice(1);
          i3.target.style[e3] = ColorConverters[`${n3}_HTML`](a3);
          this.annotationStorage.setValue(this.data.id, { [e3]: ColorConverters[`${n3}_rgb`](a3) });
        };
        return (0, i2.shadow)(this, "_commonActions", { display: (t3) => {
          const { display: e3 } = t3.detail, i3 = e3 % 2 == 1;
          this.container.style.visibility = i3 ? "hidden" : "visible";
          this.annotationStorage.setValue(this.data.id, { noView: i3, noPrint: 1 === e3 || 2 === e3 });
        }, print: (t3) => {
          this.annotationStorage.setValue(this.data.id, { noPrint: !t3.detail.print });
        }, hidden: (t3) => {
          const { hidden: e3 } = t3.detail;
          this.container.style.visibility = e3 ? "hidden" : "visible";
          this.annotationStorage.setValue(this.data.id, { noPrint: e3, noView: e3 });
        }, focus: (t3) => {
          setTimeout((() => t3.target.focus({ preventScroll: false })), 0);
        }, userName: (t3) => {
          t3.target.title = t3.detail.userName;
        }, readonly: (t3) => {
          t3.target.disabled = t3.detail.readonly;
        }, required: (t3) => {
          this._setRequired(t3.target, t3.detail.required);
        }, bgColor: (t3) => {
          setColor("bgColor", "backgroundColor", t3);
        }, fillColor: (t3) => {
          setColor("fillColor", "backgroundColor", t3);
        }, fgColor: (t3) => {
          setColor("fgColor", "color", t3);
        }, textColor: (t3) => {
          setColor("textColor", "color", t3);
        }, borderColor: (t3) => {
          setColor("borderColor", "borderColor", t3);
        }, strokeColor: (t3) => {
          setColor("strokeColor", "borderColor", t3);
        }, rotation: (t3) => {
          const e3 = t3.detail.rotation;
          this.setRotation(e3);
          this.annotationStorage.setValue(this.data.id, { rotation: e3 });
        } });
      }
      _dispatchEventFromSandbox(t3, e3) {
        const i3 = this._commonActions;
        for (const s3 of Object.keys(e3.detail)) {
          const n3 = t3[s3] || i3[s3];
          n3?.(e3);
        }
      }
      _setDefaultPropertiesFromJS(t3) {
        if (!this.enableScripting) return;
        const e3 = this.annotationStorage.getRawValue(this.data.id);
        if (!e3) return;
        const i3 = this._commonActions;
        for (const [s3, n3] of Object.entries(e3)) {
          const a3 = i3[s3];
          if (a3) {
            a3({ detail: { [s3]: n3 }, target: t3 });
            delete e3[s3];
          }
        }
      }
      _createQuadrilaterals() {
        if (!this.container) return;
        const { quadPoints: t3 } = this.data;
        if (!t3) return;
        const [e3, i3, s3, n3] = this.data.rect;
        if (1 === t3.length) {
          const [, { x: a4, y: r4 }, { x: o4, y: l3 }] = t3[0];
          if (s3 === a4 && n3 === r4 && e3 === o4 && i3 === l3) return;
        }
        const { style: a3 } = this.container;
        let r3;
        if (this.#e) {
          const { borderColor: t4, borderWidth: e4 } = a3;
          a3.borderWidth = 0;
          r3 = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${t4}" stroke-width="${e4}">`];
          this.container.classList.add("hasBorder");
        }
        const o3 = s3 - e3, l2 = n3 - i3, { svgFactory: h2 } = this, d2 = h2.createElement("svg");
        d2.classList.add("quadrilateralsContainer");
        d2.setAttribute("width", 0);
        d2.setAttribute("height", 0);
        const c2 = h2.createElement("defs");
        d2.append(c2);
        const u2 = h2.createElement("clipPath"), p2 = `clippath_${this.data.id}`;
        u2.setAttribute("id", p2);
        u2.setAttribute("clipPathUnits", "objectBoundingBox");
        c2.append(u2);
        for (const [, { x: i4, y: s4 }, { x: a4, y: d3 }] of t3) {
          const t4 = h2.createElement("rect"), c3 = (a4 - e3) / o3, p3 = (n3 - s4) / l2, g2 = (i4 - a4) / o3, m2 = (s4 - d3) / l2;
          t4.setAttribute("x", c3);
          t4.setAttribute("y", p3);
          t4.setAttribute("width", g2);
          t4.setAttribute("height", m2);
          u2.append(t4);
          r3?.push(`<rect vector-effect="non-scaling-stroke" x="${c3}" y="${p3}" width="${g2}" height="${m2}"/>`);
        }
        if (this.#e) {
          r3.push("</g></svg>')");
          a3.backgroundImage = r3.join("");
        }
        this.container.append(d2);
        this.container.style.clipPath = `url(#${p2})`;
      }
      _createPopup() {
        const { container: t3, data: e3 } = this;
        t3.setAttribute("aria-haspopup", "dialog");
        const i3 = new PopupAnnotationElement({ data: { color: e3.color, titleObj: e3.titleObj, modificationDate: e3.modificationDate, contentsObj: e3.contentsObj, richText: e3.richText, parentRect: e3.rect, borderStyle: 0, id: `popup_${e3.id}`, rotation: e3.rotation }, parent: this.parent, elements: [this] });
        this.parent.div.append(i3.render());
      }
      render() {
        (0, i2.unreachable)("Abstract method `AnnotationElement.render` called");
      }
      _getElementsByName(t3, e3 = null) {
        const s3 = [];
        if (this._fieldObjects) {
          const n3 = this._fieldObjects[t3];
          if (n3) for (const { page: t4, id: a3, exportValues: r3 } of n3) {
            if (-1 === t4) continue;
            if (a3 === e3) continue;
            const n4 = "string" == typeof r3 ? r3 : null, l2 = document.querySelector(`[data-element-id="${a3}"]`);
            !l2 || o2.has(l2) ? s3.push({ id: a3, exportValue: n4, domElement: l2 }) : (0, i2.warn)(`_getElementsByName - element not allowed: ${a3}`);
          }
          return s3;
        }
        for (const i3 of document.getElementsByName(t3)) {
          const { exportValue: t4 } = i3, n3 = i3.getAttribute("data-element-id");
          n3 !== e3 && (o2.has(i3) && s3.push({ id: n3, exportValue: t4, domElement: i3 }));
        }
        return s3;
      }
      show() {
        this.container && (this.container.hidden = false);
        this.popup?.maybeShow();
      }
      hide() {
        this.container && (this.container.hidden = true);
        this.popup?.forceHide();
      }
      getElementsToTriggerPopup() {
        return this.container;
      }
      addHighlightArea() {
        const t3 = this.getElementsToTriggerPopup();
        if (Array.isArray(t3)) for (const e3 of t3) e3.classList.add("highlightArea");
        else t3.classList.add("highlightArea");
      }
      get _isEditable() {
        return false;
      }
      _editOnDoubleClick() {
        if (!this._isEditable) return;
        const { annotationEditorType: t3, data: { id: e3 } } = this;
        this.container.addEventListener("dblclick", (() => {
          this.linkService.eventBus?.dispatch("switchannotationeditormode", { source: this, mode: t3, editId: e3 });
        }));
      }
    }
    class LinkAnnotationElement extends AnnotationElement {
      constructor(t3, e3 = null) {
        super(t3, { isRenderable: true, ignoreBorder: !!e3?.ignoreBorder, createQuadrilaterals: true });
        this.isTooltipOnly = t3.data.isTooltipOnly;
      }
      render() {
        const { data: t3, linkService: e3 } = this, i3 = document.createElement("a");
        i3.setAttribute("data-element-id", t3.id);
        let s3 = false;
        if (t3.url) {
          e3.addLinkAttributes(i3, t3.url, t3.newWindow);
          s3 = true;
        } else if (t3.action) {
          this._bindNamedAction(i3, t3.action);
          s3 = true;
        } else if (t3.attachment) {
          this.#s(i3, t3.attachment, t3.attachmentDest);
          s3 = true;
        } else if (t3.setOCGState) {
          this.#n(i3, t3.setOCGState);
          s3 = true;
        } else if (t3.dest) {
          this._bindLink(i3, t3.dest);
          s3 = true;
        } else {
          if (t3.actions && (t3.actions.Action || t3.actions["Mouse Up"] || t3.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
            this._bindJSAction(i3, t3);
            s3 = true;
          }
          if (t3.resetForm) {
            this._bindResetFormAction(i3, t3.resetForm);
            s3 = true;
          } else if (this.isTooltipOnly && !s3) {
            this._bindLink(i3, "");
            s3 = true;
          }
        }
        this.container.classList.add("linkAnnotation");
        s3 && this.container.append(i3);
        return this.container;
      }
      #a() {
        this.container.setAttribute("data-internal-link", "");
      }
      _bindLink(t3, e3) {
        t3.href = this.linkService.getDestinationHash(e3);
        t3.onclick = () => {
          e3 && this.linkService.goToDestination(e3);
          return false;
        };
        (e3 || "" === e3) && this.#a();
      }
      _bindNamedAction(t3, e3) {
        t3.href = this.linkService.getAnchorUrl("");
        t3.onclick = () => {
          this.linkService.executeNamedAction(e3);
          return false;
        };
        this.#a();
      }
      #s(t3, e3, i3 = null) {
        t3.href = this.linkService.getAnchorUrl("");
        t3.onclick = () => {
          this.downloadManager?.openOrDownloadData(e3.content, e3.filename, i3);
          return false;
        };
        this.#a();
      }
      #n(t3, e3) {
        t3.href = this.linkService.getAnchorUrl("");
        t3.onclick = () => {
          this.linkService.executeSetOCGState(e3);
          return false;
        };
        this.#a();
      }
      _bindJSAction(t3, e3) {
        t3.href = this.linkService.getAnchorUrl("");
        const i3 = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
        for (const s3 of Object.keys(e3.actions)) {
          const n3 = i3.get(s3);
          n3 && (t3[n3] = () => {
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e3.id, name: s3 } });
            return false;
          });
        }
        t3.onclick || (t3.onclick = () => false);
        this.#a();
      }
      _bindResetFormAction(t3, e3) {
        const s3 = t3.onclick;
        s3 || (t3.href = this.linkService.getAnchorUrl(""));
        this.#a();
        if (this._fieldObjects) t3.onclick = () => {
          s3?.();
          const { fields: t4, refs: n3, include: a3 } = e3, r3 = [];
          if (0 !== t4.length || 0 !== n3.length) {
            const e4 = new Set(n3);
            for (const i3 of t4) {
              const t5 = this._fieldObjects[i3] || [];
              for (const { id: i4 } of t5) e4.add(i4);
            }
            for (const t5 of Object.values(this._fieldObjects)) for (const i3 of t5) e4.has(i3.id) === a3 && r3.push(i3);
          } else for (const t5 of Object.values(this._fieldObjects)) r3.push(...t5);
          const l2 = this.annotationStorage, h2 = [];
          for (const t5 of r3) {
            const { id: e4 } = t5;
            h2.push(e4);
            switch (t5.type) {
              case "text": {
                const i3 = t5.defaultValue || "";
                l2.setValue(e4, { value: i3 });
                break;
              }
              case "checkbox":
              case "radiobutton": {
                const i3 = t5.defaultValue === t5.exportValues;
                l2.setValue(e4, { value: i3 });
                break;
              }
              case "combobox":
              case "listbox": {
                const i3 = t5.defaultValue || "";
                l2.setValue(e4, { value: i3 });
                break;
              }
              default:
                continue;
            }
            const s4 = document.querySelector(`[data-element-id="${e4}"]`);
            s4 && (o2.has(s4) ? s4.dispatchEvent(new Event("resetform")) : (0, i2.warn)(`_bindResetFormAction - element not allowed: ${e4}`));
          }
          this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: h2, name: "ResetForm" } });
          return false;
        };
        else {
          (0, i2.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
          s3 || (t3.onclick = () => false);
        }
      }
    }
    class TextAnnotationElement extends AnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: true });
      }
      render() {
        this.container.classList.add("textAnnotation");
        const t3 = document.createElement("img");
        t3.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
        t3.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
        t3.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name }));
        !this.data.popupRef && this.hasPopupData && this._createPopup();
        this.container.append(t3);
        return this.container;
      }
    }
    class WidgetAnnotationElement extends AnnotationElement {
      render() {
        return this.container;
      }
      showElementAndHideCanvas(t3) {
        if (this.data.hasOwnCanvas) {
          "CANVAS" === t3.previousSibling?.nodeName && (t3.previousSibling.hidden = true);
          t3.hidden = false;
        }
      }
      _getKeyModifier(t3) {
        return i2.FeatureTest.platform.isMac ? t3.metaKey : t3.ctrlKey;
      }
      _setEventListener(t3, e3, i3, s3, n3) {
        i3.includes("mouse") ? t3.addEventListener(i3, ((t4) => {
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: s3, value: n3(t4), shift: t4.shiftKey, modifier: this._getKeyModifier(t4) } });
        })) : t3.addEventListener(i3, ((t4) => {
          if ("blur" === i3) {
            if (!e3.focused || !t4.relatedTarget) return;
            e3.focused = false;
          } else if ("focus" === i3) {
            if (e3.focused) return;
            e3.focused = true;
          }
          n3 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: s3, value: n3(t4) } });
        }));
      }
      _setEventListeners(t3, e3, i3, s3) {
        for (const [n3, a3] of i3) if ("Action" === a3 || this.data.actions?.[a3]) {
          "Focus" !== a3 && "Blur" !== a3 || (e3 ||= { focused: false });
          this._setEventListener(t3, e3, n3, a3, s3);
          "Focus" !== a3 || this.data.actions?.Blur ? "Blur" !== a3 || this.data.actions?.Focus || this._setEventListener(t3, e3, "focus", "Focus", null) : this._setEventListener(t3, e3, "blur", "Blur", null);
        }
      }
      _setBackgroundColor(t3) {
        const e3 = this.data.backgroundColor || null;
        t3.style.backgroundColor = null === e3 ? "transparent" : i2.Util.makeHexColor(e3[0], e3[1], e3[2]);
      }
      _setTextStyle(t3) {
        const e3 = ["left", "center", "right"], { fontColor: s3 } = this.data.defaultAppearanceData, n3 = this.data.defaultAppearanceData.fontSize || 9, a3 = t3.style;
        let r3;
        const roundToOneDecimal = (t4) => Math.round(10 * t4) / 10;
        if (this.data.multiLine) {
          const t4 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), e4 = t4 / (Math.round(t4 / (i2.LINE_FACTOR * n3)) || 1);
          r3 = Math.min(n3, roundToOneDecimal(e4 / i2.LINE_FACTOR));
        } else {
          const t4 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
          r3 = Math.min(n3, roundToOneDecimal(t4 / i2.LINE_FACTOR));
        }
        a3.fontSize = `calc(${r3}px * var(--scale-factor))`;
        a3.color = i2.Util.makeHexColor(s3[0], s3[1], s3[2]);
        null !== this.data.textAlignment && (a3.textAlign = e3[this.data.textAlignment]);
      }
      _setRequired(t3, e3) {
        e3 ? t3.setAttribute("required", true) : t3.removeAttribute("required");
        t3.setAttribute("aria-required", e3);
      }
    }
    class TextWidgetAnnotationElement extends WidgetAnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: t3.renderForms || t3.data.hasOwnCanvas || !t3.data.hasAppearance && !!t3.data.fieldValue });
      }
      setPropertyOnSiblings(t3, e3, i3, s3) {
        const n3 = this.annotationStorage;
        for (const a3 of this._getElementsByName(t3.name, t3.id)) {
          a3.domElement && (a3.domElement[e3] = i3);
          n3.setValue(a3.id, { [s3]: i3 });
        }
      }
      render() {
        const t3 = this.annotationStorage, e3 = this.data.id;
        this.container.classList.add("textWidgetAnnotation");
        let i3 = null;
        if (this.renderForms) {
          const s3 = t3.getValue(e3, { value: this.data.fieldValue });
          let n3 = s3.value || "";
          const a3 = t3.getValue(e3, { charLimit: this.data.maxLen }).charLimit;
          a3 && n3.length > a3 && (n3 = n3.slice(0, a3));
          let l2 = s3.formattedValue || this.data.textContent?.join("\n") || null;
          l2 && this.data.comb && (l2 = l2.replaceAll(/\s+/g, ""));
          const h2 = { userValue: n3, formattedValue: l2, lastCommittedValue: null, commitKey: 1, focused: false };
          if (this.data.multiLine) {
            i3 = document.createElement("textarea");
            i3.textContent = l2 ?? n3;
            this.data.doNotScroll && (i3.style.overflowY = "hidden");
          } else {
            i3 = document.createElement("input");
            i3.type = "text";
            i3.setAttribute("value", l2 ?? n3);
            this.data.doNotScroll && (i3.style.overflowX = "hidden");
          }
          this.data.hasOwnCanvas && (i3.hidden = true);
          o2.add(i3);
          i3.setAttribute("data-element-id", e3);
          i3.disabled = this.data.readOnly;
          i3.name = this.data.fieldName;
          i3.tabIndex = r2;
          this._setRequired(i3, this.data.required);
          a3 && (i3.maxLength = a3);
          i3.addEventListener("input", ((s4) => {
            t3.setValue(e3, { value: s4.target.value });
            this.setPropertyOnSiblings(i3, "value", s4.target.value, "value");
            h2.formattedValue = null;
          }));
          i3.addEventListener("resetform", ((t4) => {
            const e4 = this.data.defaultFieldValue ?? "";
            i3.value = h2.userValue = e4;
            h2.formattedValue = null;
          }));
          let blurListener = (t4) => {
            const { formattedValue: e4 } = h2;
            null != e4 && (t4.target.value = e4);
            t4.target.scrollLeft = 0;
          };
          if (this.enableScripting && this.hasJSActions) {
            i3.addEventListener("focus", ((t4) => {
              if (h2.focused) return;
              const { target: e4 } = t4;
              h2.userValue && (e4.value = h2.userValue);
              h2.lastCommittedValue = e4.value;
              h2.commitKey = 1;
              this.data.actions?.Focus || (h2.focused = true);
            }));
            i3.addEventListener("updatefromsandbox", ((i4) => {
              this.showElementAndHideCanvas(i4.target);
              const s5 = { value(i5) {
                h2.userValue = i5.detail.value ?? "";
                t3.setValue(e3, { value: h2.userValue.toString() });
                i5.target.value = h2.userValue;
              }, formattedValue(i5) {
                const { formattedValue: s6 } = i5.detail;
                h2.formattedValue = s6;
                null != s6 && i5.target !== document.activeElement && (i5.target.value = s6);
                t3.setValue(e3, { formattedValue: s6 });
              }, selRange(t4) {
                t4.target.setSelectionRange(...t4.detail.selRange);
              }, charLimit: (i5) => {
                const { charLimit: s6 } = i5.detail, { target: n4 } = i5;
                if (0 === s6) {
                  n4.removeAttribute("maxLength");
                  return;
                }
                n4.setAttribute("maxLength", s6);
                let a4 = h2.userValue;
                if (a4 && !(a4.length <= s6)) {
                  a4 = a4.slice(0, s6);
                  n4.value = h2.userValue = a4;
                  t3.setValue(e3, { value: a4 });
                  this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e3, name: "Keystroke", value: a4, willCommit: true, commitKey: 1, selStart: n4.selectionStart, selEnd: n4.selectionEnd } });
                }
              } };
              this._dispatchEventFromSandbox(s5, i4);
            }));
            i3.addEventListener("keydown", ((t4) => {
              h2.commitKey = 1;
              let i4 = -1;
              "Escape" === t4.key ? i4 = 0 : "Enter" !== t4.key || this.data.multiLine ? "Tab" === t4.key && (h2.commitKey = 3) : i4 = 2;
              if (-1 === i4) return;
              const { value: s5 } = t4.target;
              if (h2.lastCommittedValue !== s5) {
                h2.lastCommittedValue = s5;
                h2.userValue = s5;
                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e3, name: "Keystroke", value: s5, willCommit: true, commitKey: i4, selStart: t4.target.selectionStart, selEnd: t4.target.selectionEnd } });
              }
            }));
            const s4 = blurListener;
            blurListener = null;
            i3.addEventListener("blur", ((t4) => {
              if (!h2.focused || !t4.relatedTarget) return;
              this.data.actions?.Blur || (h2.focused = false);
              const { value: i4 } = t4.target;
              h2.userValue = i4;
              h2.lastCommittedValue !== i4 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e3, name: "Keystroke", value: i4, willCommit: true, commitKey: h2.commitKey, selStart: t4.target.selectionStart, selEnd: t4.target.selectionEnd } });
              s4(t4);
            }));
            this.data.actions?.Keystroke && i3.addEventListener("beforeinput", ((t4) => {
              h2.lastCommittedValue = null;
              const { data: i4, target: s5 } = t4, { value: n4, selectionStart: a4, selectionEnd: r3 } = s5;
              let o3 = a4, l3 = r3;
              switch (t4.inputType) {
                case "deleteWordBackward": {
                  const t5 = n4.substring(0, a4).match(/\w*[^\w]*$/);
                  t5 && (o3 -= t5[0].length);
                  break;
                }
                case "deleteWordForward": {
                  const t5 = n4.substring(a4).match(/^[^\w]*\w*/);
                  t5 && (l3 += t5[0].length);
                  break;
                }
                case "deleteContentBackward":
                  a4 === r3 && (o3 -= 1);
                  break;
                case "deleteContentForward":
                  a4 === r3 && (l3 += 1);
              }
              t4.preventDefault();
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e3, name: "Keystroke", value: n4, change: i4 || "", willCommit: false, selStart: o3, selEnd: l3 } });
            }));
            this._setEventListeners(i3, h2, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], ((t4) => t4.target.value));
          }
          blurListener && i3.addEventListener("blur", blurListener);
          if (this.data.comb) {
            const t4 = (this.data.rect[2] - this.data.rect[0]) / a3;
            i3.classList.add("comb");
            i3.style.letterSpacing = `calc(${t4}px * var(--scale-factor) - 1ch)`;
          }
        } else {
          i3 = document.createElement("div");
          i3.textContent = this.data.fieldValue;
          i3.style.verticalAlign = "middle";
          i3.style.display = "table-cell";
          this.data.hasOwnCanvas && (i3.hidden = true);
        }
        this._setTextStyle(i3);
        this._setBackgroundColor(i3);
        this._setDefaultPropertiesFromJS(i3);
        this.container.append(i3);
        return this.container;
      }
    }
    class SignatureWidgetAnnotationElement extends WidgetAnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: !!t3.data.hasOwnCanvas });
      }
    }
    class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: t3.renderForms });
      }
      render() {
        const t3 = this.annotationStorage, e3 = this.data, i3 = e3.id;
        let s3 = t3.getValue(i3, { value: e3.exportValue === e3.fieldValue }).value;
        if ("string" == typeof s3) {
          s3 = "Off" !== s3;
          t3.setValue(i3, { value: s3 });
        }
        this.container.classList.add("buttonWidgetAnnotation", "checkBox");
        const n3 = document.createElement("input");
        o2.add(n3);
        n3.setAttribute("data-element-id", i3);
        n3.disabled = e3.readOnly;
        this._setRequired(n3, this.data.required);
        n3.type = "checkbox";
        n3.name = e3.fieldName;
        s3 && n3.setAttribute("checked", true);
        n3.setAttribute("exportValue", e3.exportValue);
        n3.tabIndex = r2;
        n3.addEventListener("change", ((s4) => {
          const { name: n4, checked: a3 } = s4.target;
          for (const s5 of this._getElementsByName(n4, i3)) {
            const i4 = a3 && s5.exportValue === e3.exportValue;
            s5.domElement && (s5.domElement.checked = i4);
            t3.setValue(s5.id, { value: i4 });
          }
          t3.setValue(i3, { value: a3 });
        }));
        n3.addEventListener("resetform", ((t4) => {
          const i4 = e3.defaultFieldValue || "Off";
          t4.target.checked = i4 === e3.exportValue;
        }));
        if (this.enableScripting && this.hasJSActions) {
          n3.addEventListener("updatefromsandbox", ((e4) => {
            const s4 = { value(e5) {
              e5.target.checked = "Off" !== e5.detail.value;
              t3.setValue(i3, { value: e5.target.checked });
            } };
            this._dispatchEventFromSandbox(s4, e4);
          }));
          this._setEventListeners(n3, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], ((t4) => t4.target.checked));
        }
        this._setBackgroundColor(n3);
        this._setDefaultPropertiesFromJS(n3);
        this.container.append(n3);
        return this.container;
      }
    }
    class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: t3.renderForms });
      }
      render() {
        this.container.classList.add("buttonWidgetAnnotation", "radioButton");
        const t3 = this.annotationStorage, e3 = this.data, i3 = e3.id;
        let s3 = t3.getValue(i3, { value: e3.fieldValue === e3.buttonValue }).value;
        if ("string" == typeof s3) {
          s3 = s3 !== e3.buttonValue;
          t3.setValue(i3, { value: s3 });
        }
        if (s3) for (const s4 of this._getElementsByName(e3.fieldName, i3)) t3.setValue(s4.id, { value: false });
        const n3 = document.createElement("input");
        o2.add(n3);
        n3.setAttribute("data-element-id", i3);
        n3.disabled = e3.readOnly;
        this._setRequired(n3, this.data.required);
        n3.type = "radio";
        n3.name = e3.fieldName;
        s3 && n3.setAttribute("checked", true);
        n3.tabIndex = r2;
        n3.addEventListener("change", ((e4) => {
          const { name: s4, checked: n4 } = e4.target;
          for (const e5 of this._getElementsByName(s4, i3)) t3.setValue(e5.id, { value: false });
          t3.setValue(i3, { value: n4 });
        }));
        n3.addEventListener("resetform", ((t4) => {
          const i4 = e3.defaultFieldValue;
          t4.target.checked = null != i4 && i4 === e3.buttonValue;
        }));
        if (this.enableScripting && this.hasJSActions) {
          const s4 = e3.buttonValue;
          n3.addEventListener("updatefromsandbox", ((e4) => {
            const n4 = { value: (e5) => {
              const n5 = s4 === e5.detail.value;
              for (const s5 of this._getElementsByName(e5.target.name)) {
                const e6 = n5 && s5.id === i3;
                s5.domElement && (s5.domElement.checked = e6);
                t3.setValue(s5.id, { value: e6 });
              }
            } };
            this._dispatchEventFromSandbox(n4, e4);
          }));
          this._setEventListeners(n3, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], ((t4) => t4.target.checked));
        }
        this._setBackgroundColor(n3);
        this._setDefaultPropertiesFromJS(n3);
        this.container.append(n3);
        return this.container;
      }
    }
    class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
      constructor(t3) {
        super(t3, { ignoreBorder: t3.data.hasAppearance });
      }
      render() {
        const t3 = super.render();
        t3.classList.add("buttonWidgetAnnotation", "pushButton");
        const e3 = t3.lastChild;
        if (this.enableScripting && this.hasJSActions && e3) {
          this._setDefaultPropertiesFromJS(e3);
          e3.addEventListener("updatefromsandbox", ((t4) => {
            this._dispatchEventFromSandbox({}, t4);
          }));
        }
        return t3;
      }
    }
    class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: t3.renderForms });
      }
      render() {
        this.container.classList.add("choiceWidgetAnnotation");
        const t3 = this.annotationStorage, e3 = this.data.id, i3 = t3.getValue(e3, { value: this.data.fieldValue }), s3 = document.createElement("select");
        o2.add(s3);
        s3.setAttribute("data-element-id", e3);
        s3.disabled = this.data.readOnly;
        this._setRequired(s3, this.data.required);
        s3.name = this.data.fieldName;
        s3.tabIndex = r2;
        let n3 = this.data.combo && this.data.options.length > 0;
        if (!this.data.combo) {
          s3.size = this.data.options.length;
          this.data.multiSelect && (s3.multiple = true);
        }
        s3.addEventListener("resetform", ((t4) => {
          const e4 = this.data.defaultFieldValue;
          for (const t5 of s3.options) t5.selected = t5.value === e4;
        }));
        for (const t4 of this.data.options) {
          const e4 = document.createElement("option");
          e4.textContent = t4.displayValue;
          e4.value = t4.exportValue;
          if (i3.value.includes(t4.exportValue)) {
            e4.setAttribute("selected", true);
            n3 = false;
          }
          s3.append(e4);
        }
        let a3 = null;
        if (n3) {
          const t4 = document.createElement("option");
          t4.value = " ";
          t4.setAttribute("hidden", true);
          t4.setAttribute("selected", true);
          s3.prepend(t4);
          a3 = () => {
            t4.remove();
            s3.removeEventListener("input", a3);
            a3 = null;
          };
          s3.addEventListener("input", a3);
        }
        const getValue = (t4) => {
          const e4 = t4 ? "value" : "textContent", { options: i4, multiple: n4 } = s3;
          return n4 ? Array.prototype.filter.call(i4, ((t5) => t5.selected)).map(((t5) => t5[e4])) : -1 === i4.selectedIndex ? null : i4[i4.selectedIndex][e4];
        };
        let l2 = getValue(false);
        const getItems = (t4) => {
          const e4 = t4.target.options;
          return Array.prototype.map.call(e4, ((t5) => ({ displayValue: t5.textContent, exportValue: t5.value })));
        };
        if (this.enableScripting && this.hasJSActions) {
          s3.addEventListener("updatefromsandbox", ((i4) => {
            const n4 = { value(i5) {
              a3?.();
              const n5 = i5.detail.value, r3 = new Set(Array.isArray(n5) ? n5 : [n5]);
              for (const t4 of s3.options) t4.selected = r3.has(t4.value);
              t3.setValue(e3, { value: getValue(true) });
              l2 = getValue(false);
            }, multipleSelection(t4) {
              s3.multiple = true;
            }, remove(i5) {
              const n5 = s3.options, a4 = i5.detail.remove;
              n5[a4].selected = false;
              s3.remove(a4);
              if (n5.length > 0) {
                -1 === Array.prototype.findIndex.call(n5, ((t4) => t4.selected)) && (n5[0].selected = true);
              }
              t3.setValue(e3, { value: getValue(true), items: getItems(i5) });
              l2 = getValue(false);
            }, clear(i5) {
              for (; 0 !== s3.length; ) s3.remove(0);
              t3.setValue(e3, { value: null, items: [] });
              l2 = getValue(false);
            }, insert(i5) {
              const { index: n5, displayValue: a4, exportValue: r3 } = i5.detail.insert, o3 = s3.children[n5], h2 = document.createElement("option");
              h2.textContent = a4;
              h2.value = r3;
              o3 ? o3.before(h2) : s3.append(h2);
              t3.setValue(e3, { value: getValue(true), items: getItems(i5) });
              l2 = getValue(false);
            }, items(i5) {
              const { items: n5 } = i5.detail;
              for (; 0 !== s3.length; ) s3.remove(0);
              for (const t4 of n5) {
                const { displayValue: e4, exportValue: i6 } = t4, n6 = document.createElement("option");
                n6.textContent = e4;
                n6.value = i6;
                s3.append(n6);
              }
              s3.options.length > 0 && (s3.options[0].selected = true);
              t3.setValue(e3, { value: getValue(true), items: getItems(i5) });
              l2 = getValue(false);
            }, indices(i5) {
              const s4 = new Set(i5.detail.indices);
              for (const t4 of i5.target.options) t4.selected = s4.has(t4.index);
              t3.setValue(e3, { value: getValue(true) });
              l2 = getValue(false);
            }, editable(t4) {
              t4.target.disabled = !t4.detail.editable;
            } };
            this._dispatchEventFromSandbox(n4, i4);
          }));
          s3.addEventListener("input", ((i4) => {
            const s4 = getValue(true), n4 = getValue(false);
            t3.setValue(e3, { value: s4 });
            i4.preventDefault();
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e3, name: "Keystroke", value: l2, change: n4, changeEx: s4, willCommit: false, commitKey: 1, keyDown: false } });
          }));
          this._setEventListeners(s3, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], ((t4) => t4.target.value));
        } else s3.addEventListener("input", (function(i4) {
          t3.setValue(e3, { value: getValue(true) });
        }));
        this.data.combo && this._setTextStyle(s3);
        this._setBackgroundColor(s3);
        this._setDefaultPropertiesFromJS(s3);
        this.container.append(s3);
        return this.container;
      }
    }
    class PopupAnnotationElement extends AnnotationElement {
      constructor(t3) {
        const { data: e3, elements: i3 } = t3;
        super(t3, { isRenderable: AnnotationElement._hasPopupData(e3) });
        this.elements = i3;
      }
      render() {
        this.container.classList.add("popupAnnotation");
        const t3 = new PopupElement({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open }), e3 = [];
        for (const i3 of this.elements) {
          i3.popup = t3;
          e3.push(i3.data.id);
          i3.addHighlightArea();
        }
        this.container.setAttribute("aria-controls", e3.map(((t4) => `${i2.AnnotationPrefix}${t4}`)).join(","));
        return this.container;
      }
    }
    class PopupElement {
      #r = this.#o.bind(this);
      #l = this.#h.bind(this);
      #d = this.#c.bind(this);
      #u = this.#p.bind(this);
      #g = null;
      #m = null;
      #f = null;
      #b = null;
      #A = null;
      #v = null;
      #y = null;
      #E = false;
      #w = null;
      #_ = null;
      #x = null;
      #T = null;
      #S = false;
      constructor({ container: t3, color: e3, elements: i3, titleObj: n3, modificationDate: a3, contentsObj: r3, richText: o3, parent: l2, rect: h2, parentRect: d2, open: c2 }) {
        this.#m = t3;
        this.#T = n3;
        this.#f = r3;
        this.#x = o3;
        this.#v = l2;
        this.#g = e3;
        this.#_ = h2;
        this.#y = d2;
        this.#A = i3;
        this.#b = s2.PDFDateString.toDateObject(a3);
        this.trigger = i3.flatMap(((t4) => t4.getElementsToTriggerPopup()));
        for (const t4 of this.trigger) {
          t4.addEventListener("click", this.#u);
          t4.addEventListener("mouseenter", this.#d);
          t4.addEventListener("mouseleave", this.#l);
          t4.classList.add("popupTriggerArea");
        }
        for (const t4 of i3) t4.container?.addEventListener("keydown", this.#r);
        this.#m.hidden = true;
        c2 && this.#p();
      }
      render() {
        if (this.#w) return;
        const { page: { view: t3 }, viewport: { rawDims: { pageWidth: e3, pageHeight: s3, pageX: n3, pageY: r3 } } } = this.#v, o3 = this.#w = document.createElement("div");
        o3.className = "popup";
        if (this.#g) {
          const t4 = o3.style.outlineColor = i2.Util.makeHexColor(...this.#g);
          if (CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")) o3.style.backgroundColor = `color-mix(in srgb, ${t4} 30%, white)`;
          else {
            const t5 = 0.7;
            o3.style.backgroundColor = i2.Util.makeHexColor(...this.#g.map(((e4) => Math.floor(t5 * (255 - e4) + e4))));
          }
        }
        const l2 = document.createElement("span");
        l2.className = "header";
        const h2 = document.createElement("h1");
        l2.append(h2);
        ({ dir: h2.dir, str: h2.textContent } = this.#T);
        o3.append(l2);
        if (this.#b) {
          const t4 = document.createElement("span");
          t4.classList.add("popupDate");
          t4.setAttribute("data-l10n-id", "pdfjs-annotation-date-string");
          t4.setAttribute("data-l10n-args", JSON.stringify({ date: this.#b.toLocaleDateString(), time: this.#b.toLocaleTimeString() }));
          l2.append(t4);
        }
        const d2 = this.#f, c2 = this.#x;
        if (!c2?.str || d2?.str && d2.str !== c2.str) {
          const t4 = this._formatContents(d2);
          o3.append(t4);
        } else {
          a2.XfaLayer.render({ xfaHtml: c2.html, intent: "richText", div: o3 });
          o3.lastChild.classList.add("richText", "popupContent");
        }
        let u2 = !!this.#y, p2 = u2 ? this.#y : this.#_;
        for (const t4 of this.#A) if (!p2 || null !== i2.Util.intersect(t4.data.rect, p2)) {
          p2 = t4.data.rect;
          u2 = true;
          break;
        }
        const g2 = i2.Util.normalizeRect([p2[0], t3[3] - p2[1] + t3[1], p2[2], t3[3] - p2[3] + t3[1]]), m2 = u2 ? p2[2] - p2[0] + 5 : 0, f2 = g2[0] + m2, b2 = g2[1], { style: A2 } = this.#m;
        A2.left = 100 * (f2 - n3) / e3 + "%";
        A2.top = 100 * (b2 - r3) / s3 + "%";
        this.#m.append(o3);
      }
      _formatContents({ str: t3, dir: e3 }) {
        const i3 = document.createElement("p");
        i3.classList.add("popupContent");
        i3.dir = e3;
        const s3 = t3.split(/(?:\r\n?|\n)/);
        for (let t4 = 0, e4 = s3.length; t4 < e4; ++t4) {
          const n3 = s3[t4];
          i3.append(document.createTextNode(n3));
          t4 < e4 - 1 && i3.append(document.createElement("br"));
        }
        return i3;
      }
      #o(t3) {
        t3.altKey || t3.shiftKey || t3.ctrlKey || t3.metaKey || ("Enter" === t3.key || "Escape" === t3.key && this.#E) && this.#p();
      }
      #p() {
        this.#E = !this.#E;
        if (this.#E) {
          this.#c();
          this.#m.addEventListener("click", this.#u);
          this.#m.addEventListener("keydown", this.#r);
        } else {
          this.#h();
          this.#m.removeEventListener("click", this.#u);
          this.#m.removeEventListener("keydown", this.#r);
        }
      }
      #c() {
        this.#w || this.render();
        if (this.isVisible) this.#E && this.#m.classList.add("focused");
        else {
          this.#m.hidden = false;
          this.#m.style.zIndex = parseInt(this.#m.style.zIndex) + 1e3;
        }
      }
      #h() {
        this.#m.classList.remove("focused");
        if (!this.#E && this.isVisible) {
          this.#m.hidden = true;
          this.#m.style.zIndex = parseInt(this.#m.style.zIndex) - 1e3;
        }
      }
      forceHide() {
        this.#S = this.isVisible;
        this.#S && (this.#m.hidden = true);
      }
      maybeShow() {
        if (this.#S) {
          this.#S = false;
          this.#m.hidden = false;
        }
      }
      get isVisible() {
        return false === this.#m.hidden;
      }
    }
    class FreeTextAnnotationElement extends AnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true });
        this.textContent = t3.data.textContent;
        this.textPosition = t3.data.textPosition;
        this.annotationEditorType = i2.AnnotationEditorType.FREETEXT;
      }
      render() {
        this.container.classList.add("freeTextAnnotation");
        if (this.textContent) {
          const t3 = document.createElement("div");
          t3.classList.add("annotationTextContent");
          t3.setAttribute("role", "comment");
          for (const e3 of this.textContent) {
            const i3 = document.createElement("span");
            i3.textContent = e3;
            t3.append(i3);
          }
          this.container.append(t3);
        }
        !this.data.popupRef && this.hasPopupData && this._createPopup();
        this._editOnDoubleClick();
        return this.container;
      }
      get _isEditable() {
        return this.data.hasOwnCanvas;
      }
    }
    class LineAnnotationElement extends AnnotationElement {
      #C = null;
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true });
      }
      render() {
        this.container.classList.add("lineAnnotation");
        const t3 = this.data, { width: e3, height: i3 } = getRectDims(t3.rect), s3 = this.svgFactory.create(e3, i3, true), n3 = this.#C = this.svgFactory.createElement("svg:line");
        n3.setAttribute("x1", t3.rect[2] - t3.lineCoordinates[0]);
        n3.setAttribute("y1", t3.rect[3] - t3.lineCoordinates[1]);
        n3.setAttribute("x2", t3.rect[2] - t3.lineCoordinates[2]);
        n3.setAttribute("y2", t3.rect[3] - t3.lineCoordinates[3]);
        n3.setAttribute("stroke-width", t3.borderStyle.width || 1);
        n3.setAttribute("stroke", "transparent");
        n3.setAttribute("fill", "transparent");
        s3.append(n3);
        this.container.append(s3);
        !t3.popupRef && this.hasPopupData && this._createPopup();
        return this.container;
      }
      getElementsToTriggerPopup() {
        return this.#C;
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    class SquareAnnotationElement extends AnnotationElement {
      #M = null;
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true });
      }
      render() {
        this.container.classList.add("squareAnnotation");
        const t3 = this.data, { width: e3, height: i3 } = getRectDims(t3.rect), s3 = this.svgFactory.create(e3, i3, true), n3 = t3.borderStyle.width, a3 = this.#M = this.svgFactory.createElement("svg:rect");
        a3.setAttribute("x", n3 / 2);
        a3.setAttribute("y", n3 / 2);
        a3.setAttribute("width", e3 - n3);
        a3.setAttribute("height", i3 - n3);
        a3.setAttribute("stroke-width", n3 || 1);
        a3.setAttribute("stroke", "transparent");
        a3.setAttribute("fill", "transparent");
        s3.append(a3);
        this.container.append(s3);
        !t3.popupRef && this.hasPopupData && this._createPopup();
        return this.container;
      }
      getElementsToTriggerPopup() {
        return this.#M;
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    class CircleAnnotationElement extends AnnotationElement {
      #P = null;
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true });
      }
      render() {
        this.container.classList.add("circleAnnotation");
        const t3 = this.data, { width: e3, height: i3 } = getRectDims(t3.rect), s3 = this.svgFactory.create(e3, i3, true), n3 = t3.borderStyle.width, a3 = this.#P = this.svgFactory.createElement("svg:ellipse");
        a3.setAttribute("cx", e3 / 2);
        a3.setAttribute("cy", i3 / 2);
        a3.setAttribute("rx", e3 / 2 - n3 / 2);
        a3.setAttribute("ry", i3 / 2 - n3 / 2);
        a3.setAttribute("stroke-width", n3 || 1);
        a3.setAttribute("stroke", "transparent");
        a3.setAttribute("fill", "transparent");
        s3.append(a3);
        this.container.append(s3);
        !t3.popupRef && this.hasPopupData && this._createPopup();
        return this.container;
      }
      getElementsToTriggerPopup() {
        return this.#P;
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    class PolylineAnnotationElement extends AnnotationElement {
      #R = null;
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true });
        this.containerClassName = "polylineAnnotation";
        this.svgElementName = "svg:polyline";
      }
      render() {
        this.container.classList.add(this.containerClassName);
        const t3 = this.data, { width: e3, height: i3 } = getRectDims(t3.rect), s3 = this.svgFactory.create(e3, i3, true);
        let n3 = [];
        for (const e4 of t3.vertices) {
          const i4 = e4.x - t3.rect[0], s4 = t3.rect[3] - e4.y;
          n3.push(i4 + "," + s4);
        }
        n3 = n3.join(" ");
        const a3 = this.#R = this.svgFactory.createElement(this.svgElementName);
        a3.setAttribute("points", n3);
        a3.setAttribute("stroke-width", t3.borderStyle.width || 1);
        a3.setAttribute("stroke", "transparent");
        a3.setAttribute("fill", "transparent");
        s3.append(a3);
        this.container.append(s3);
        !t3.popupRef && this.hasPopupData && this._createPopup();
        return this.container;
      }
      getElementsToTriggerPopup() {
        return this.#R;
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    class PolygonAnnotationElement extends PolylineAnnotationElement {
      constructor(t3) {
        super(t3);
        this.containerClassName = "polygonAnnotation";
        this.svgElementName = "svg:polygon";
      }
    }
    class CaretAnnotationElement extends AnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true });
      }
      render() {
        this.container.classList.add("caretAnnotation");
        !this.data.popupRef && this.hasPopupData && this._createPopup();
        return this.container;
      }
    }
    class InkAnnotationElement extends AnnotationElement {
      #F = [];
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true });
        this.containerClassName = "inkAnnotation";
        this.svgElementName = "svg:polyline";
        this.annotationEditorType = i2.AnnotationEditorType.INK;
      }
      render() {
        this.container.classList.add(this.containerClassName);
        const t3 = this.data, { width: e3, height: i3 } = getRectDims(t3.rect), s3 = this.svgFactory.create(e3, i3, true);
        for (const e4 of t3.inkLists) {
          let i4 = [];
          for (const s4 of e4) {
            const e5 = s4.x - t3.rect[0], n4 = t3.rect[3] - s4.y;
            i4.push(`${e5},${n4}`);
          }
          i4 = i4.join(" ");
          const n3 = this.svgFactory.createElement(this.svgElementName);
          this.#F.push(n3);
          n3.setAttribute("points", i4);
          n3.setAttribute("stroke-width", t3.borderStyle.width || 1);
          n3.setAttribute("stroke", "transparent");
          n3.setAttribute("fill", "transparent");
          !t3.popupRef && this.hasPopupData && this._createPopup();
          s3.append(n3);
        }
        this.container.append(s3);
        return this.container;
      }
      getElementsToTriggerPopup() {
        return this.#F;
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    class HighlightAnnotationElement extends AnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
      }
      render() {
        !this.data.popupRef && this.hasPopupData && this._createPopup();
        this.container.classList.add("highlightAnnotation");
        return this.container;
      }
    }
    class UnderlineAnnotationElement extends AnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
      }
      render() {
        !this.data.popupRef && this.hasPopupData && this._createPopup();
        this.container.classList.add("underlineAnnotation");
        return this.container;
      }
    }
    class SquigglyAnnotationElement extends AnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
      }
      render() {
        !this.data.popupRef && this.hasPopupData && this._createPopup();
        this.container.classList.add("squigglyAnnotation");
        return this.container;
      }
    }
    class StrikeOutAnnotationElement extends AnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
      }
      render() {
        !this.data.popupRef && this.hasPopupData && this._createPopup();
        this.container.classList.add("strikeoutAnnotation");
        return this.container;
      }
    }
    class StampAnnotationElement extends AnnotationElement {
      constructor(t3) {
        super(t3, { isRenderable: true, ignoreBorder: true });
      }
      render() {
        this.container.classList.add("stampAnnotation");
        !this.data.popupRef && this.hasPopupData && this._createPopup();
        return this.container;
      }
    }
    class FileAttachmentAnnotationElement extends AnnotationElement {
      #k = null;
      constructor(t3) {
        super(t3, { isRenderable: true });
        const { filename: e3, content: i3 } = this.data.file;
        this.filename = (0, s2.getFilenameFromUrl)(e3, true);
        this.content = i3;
        this.linkService.eventBus?.dispatch("fileattachmentannotation", { source: this, filename: e3, content: i3 });
      }
      render() {
        this.container.classList.add("fileAttachmentAnnotation");
        const { container: t3, data: e3 } = this;
        let s3;
        if (e3.hasAppearance || 0 === e3.fillAlpha) s3 = document.createElement("div");
        else {
          s3 = document.createElement("img");
          s3.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e3.name) ? "paperclip" : "pushpin"}.svg`;
          e3.fillAlpha && e3.fillAlpha < 1 && (s3.style = `filter: opacity(${Math.round(100 * e3.fillAlpha)}%);`);
        }
        s3.addEventListener("dblclick", this.#D.bind(this));
        this.#k = s3;
        const { isMac: n3 } = i2.FeatureTest.platform;
        t3.addEventListener("keydown", ((t4) => {
          "Enter" === t4.key && (n3 ? t4.metaKey : t4.ctrlKey) && this.#D();
        }));
        !e3.popupRef && this.hasPopupData ? this._createPopup() : s3.classList.add("popupTriggerArea");
        t3.append(s3);
        return t3;
      }
      getElementsToTriggerPopup() {
        return this.#k;
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
      #D() {
        this.downloadManager?.openOrDownloadData(this.content, this.filename);
      }
    }
    class AnnotationLayer {
      #I = null;
      #L = null;
      #O = /* @__PURE__ */ new Map();
      constructor({ div: t3, accessibilityManager: e3, annotationCanvasMap: i3, annotationEditorUIManager: s3, page: n3, viewport: a3 }) {
        this.div = t3;
        this.#I = e3;
        this.#L = i3;
        this.page = n3;
        this.viewport = a3;
        this.zIndex = 0;
        this._annotationEditorUIManager = s3;
      }
      #N(t3, e3) {
        const s3 = t3.firstChild || t3;
        s3.id = `${i2.AnnotationPrefix}${e3}`;
        this.div.append(t3);
        this.#I?.moveElementInDOM(this.div, t3, s3, false);
      }
      async render(t3) {
        const { annotations: e3 } = t3, a3 = this.div;
        (0, s2.setLayerDimensions)(a3, this.viewport);
        const r3 = /* @__PURE__ */ new Map(), o3 = { data: null, layer: a3, linkService: t3.linkService, downloadManager: t3.downloadManager, imageResourcesPath: t3.imageResourcesPath || "", renderForms: false !== t3.renderForms, svgFactory: new s2.DOMSVGFactory(), annotationStorage: t3.annotationStorage || new n2.AnnotationStorage(), enableScripting: true === t3.enableScripting, hasJSActions: t3.hasJSActions, fieldObjects: t3.fieldObjects, parent: this, elements: null };
        for (const t4 of e3) {
          if (t4.noHTML) continue;
          const e4 = t4.annotationType === i2.AnnotationType.POPUP;
          if (e4) {
            const e5 = r3.get(t4.id);
            if (!e5) continue;
            o3.elements = e5;
          } else {
            const { width: e5, height: i3 } = getRectDims(t4.rect);
            if (e5 <= 0 || i3 <= 0) continue;
          }
          o3.data = t4;
          const s3 = AnnotationElementFactory.create(o3);
          if (!s3.isRenderable) continue;
          if (!e4 && t4.popupRef) {
            const e5 = r3.get(t4.popupRef);
            e5 ? e5.push(s3) : r3.set(t4.popupRef, [s3]);
          }
          const n3 = s3.render();
          t4.hidden && (n3.style.visibility = "hidden");
          this.#N(n3, t4.id);
          if (s3.annotationEditorType > 0) {
            this.#O.set(s3.data.id, s3);
            this._annotationEditorUIManager?.renderAnnotationElement(s3);
          }
        }
        this.#B();
      }
      update({ viewport: t3 }) {
        const e3 = this.div;
        this.viewport = t3;
        (0, s2.setLayerDimensions)(e3, { rotation: t3.rotation });
        this.#B();
        e3.hidden = false;
      }
      #B() {
        if (!this.#L) return;
        const t3 = this.div;
        for (const [e3, i3] of this.#L) {
          const s3 = t3.querySelector(`[data-annotation-id="${e3}"]`);
          if (!s3) continue;
          i3.className = "annotationContent";
          const { firstChild: n3 } = s3;
          n3 ? "CANVAS" === n3.nodeName ? n3.replaceWith(i3) : n3.classList.contains("annotationContent") ? n3.after(i3) : n3.before(i3) : s3.append(i3);
        }
        this.#L.clear();
      }
      getEditableAnnotations() {
        return Array.from(this.#O.values());
      }
      getEditableAnnotation(t3) {
        return this.#O.get(t3);
      }
    }
  }, 792: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { AnnotationStorage: () => AnnotationStorage, PrintAnnotationStorage: () => PrintAnnotationStorage, SerializableEmpty: () => a2 });
    var i2 = e2(292), s2 = e2(310), n2 = e2(651);
    const a2 = Object.freeze({ map: null, hash: "", transfer: void 0 });
    class AnnotationStorage {
      #H = false;
      #U = /* @__PURE__ */ new Map();
      constructor() {
        this.onSetModified = null;
        this.onResetModified = null;
        this.onAnnotationEditor = null;
      }
      getValue(t3, e3) {
        const i3 = this.#U.get(t3);
        return void 0 === i3 ? e3 : Object.assign(e3, i3);
      }
      getRawValue(t3) {
        return this.#U.get(t3);
      }
      remove(t3) {
        this.#U.delete(t3);
        0 === this.#U.size && this.resetModified();
        if ("function" == typeof this.onAnnotationEditor) {
          for (const t4 of this.#U.values()) if (t4 instanceof s2.AnnotationEditor) return;
          this.onAnnotationEditor(null);
        }
      }
      setValue(t3, e3) {
        const i3 = this.#U.get(t3);
        let n3 = false;
        if (void 0 !== i3) {
          for (const [t4, s3] of Object.entries(e3)) if (i3[t4] !== s3) {
            n3 = true;
            i3[t4] = s3;
          }
        } else {
          n3 = true;
          this.#U.set(t3, e3);
        }
        n3 && this.#z();
        e3 instanceof s2.AnnotationEditor && "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e3.constructor._type);
      }
      has(t3) {
        return this.#U.has(t3);
      }
      getAll() {
        return this.#U.size > 0 ? (0, i2.objectFromMap)(this.#U) : null;
      }
      setAll(t3) {
        for (const [e3, i3] of Object.entries(t3)) this.setValue(e3, i3);
      }
      get size() {
        return this.#U.size;
      }
      #z() {
        if (!this.#H) {
          this.#H = true;
          "function" == typeof this.onSetModified && this.onSetModified();
        }
      }
      resetModified() {
        if (this.#H) {
          this.#H = false;
          "function" == typeof this.onResetModified && this.onResetModified();
        }
      }
      get print() {
        return new PrintAnnotationStorage(this);
      }
      get serializable() {
        if (0 === this.#U.size) return a2;
        const t3 = /* @__PURE__ */ new Map(), e3 = new n2.MurmurHash3_64(), i3 = [], r2 = /* @__PURE__ */ Object.create(null);
        let o2 = false;
        for (const [i4, n3] of this.#U) {
          const a3 = n3 instanceof s2.AnnotationEditor ? n3.serialize(false, r2) : n3;
          if (a3) {
            t3.set(i4, a3);
            e3.update(`${i4}:${JSON.stringify(a3)}`);
            o2 ||= !!a3.bitmap;
          }
        }
        if (o2) for (const e4 of t3.values()) e4.bitmap && i3.push(e4.bitmap);
        return t3.size > 0 ? { map: t3, hash: e3.hexdigest(), transfer: i3 } : a2;
      }
      get editorStats() {
        let t3 = null;
        const e3 = /* @__PURE__ */ new Map();
        for (const i3 of this.#U.values()) {
          if (!(i3 instanceof s2.AnnotationEditor)) continue;
          const n3 = i3.telemetryFinalData;
          if (!n3) continue;
          const { type: a3 } = n3;
          e3.has(a3) || e3.set(a3, Object.getPrototypeOf(i3).constructor);
          t3 ||= /* @__PURE__ */ Object.create(null);
          const r2 = t3[a3] ||= /* @__PURE__ */ new Map();
          for (const [t4, e4] of Object.entries(n3)) {
            if ("type" === t4) continue;
            let i4 = r2.get(t4);
            if (!i4) {
              i4 = /* @__PURE__ */ new Map();
              r2.set(t4, i4);
            }
            const s3 = i4.get(e4) ?? 0;
            i4.set(e4, s3 + 1);
          }
        }
        for (const [i3, s3] of e3) t3[i3] = s3.computeTelemetryFinalData(t3[i3]);
        return t3;
      }
    }
    class PrintAnnotationStorage extends AnnotationStorage {
      #V;
      constructor(t3) {
        super();
        const { map: e3, hash: i3, transfer: s3 } = t3.serializable, n3 = structuredClone(e3, s3 ? { transfer: s3 } : null);
        this.#V = { map: n3, hash: i3, transfer: s3 };
      }
      get print() {
        (0, i2.unreachable)("Should not call PrintAnnotationStorage.print");
      }
      get serializable() {
        return this.#V;
      }
    }
  }, 831: (t2, __webpack_exports__2, e2) => {
    e2.a(t2, (async (t3, i2) => {
      try {
        let getDocument = function(t4) {
          "string" == typeof t4 || t4 instanceof URL ? t4 = { url: t4 } : (t4 instanceof ArrayBuffer || ArrayBuffer.isView(t4)) && (t4 = { data: t4 });
          if ("object" != typeof t4) throw new Error("Invalid parameter in getDocument, need parameter object.");
          if (!t4.url && !t4.data && !t4.range) throw new Error("Invalid parameter object: need either .data, .range or .url");
          const e3 = new PDFDocumentLoadingTask(), { docId: i3 } = e3, n3 = t4.url ? getUrlProp(t4.url) : null, r3 = t4.data ? getDataProp(t4.data) : null, o3 = t4.httpHeaders || null, l3 = true === t4.withCredentials, h3 = t4.password ?? null, u3 = t4.range instanceof PDFDataRangeTransport ? t4.range : null, p3 = Number.isInteger(t4.rangeChunkSize) && t4.rangeChunkSize > 0 ? t4.rangeChunkSize : y2;
          let A3 = t4.worker instanceof PDFWorker ? t4.worker : null;
          const v3 = t4.verbosity, E3 = "string" != typeof t4.docBaseUrl || (0, a2.isDataScheme)(t4.docBaseUrl) ? null : t4.docBaseUrl, w3 = "string" == typeof t4.cMapUrl ? t4.cMapUrl : null, C3 = false !== t4.cMapPacked, M3 = t4.CMapReaderFactory || x2, P3 = "string" == typeof t4.standardFontDataUrl ? t4.standardFontDataUrl : null, R3 = t4.StandardFontDataFactory || S2, F2 = true !== t4.stopAtErrors, k2 = Number.isInteger(t4.maxImageSize) && t4.maxImageSize > -1 ? t4.maxImageSize : -1, D2 = false !== t4.isEvalSupported, I2 = "boolean" == typeof t4.isOffscreenCanvasSupported ? t4.isOffscreenCanvasSupported : !s2.isNodeJS, L2 = Number.isInteger(t4.canvasMaxAreaInBytes) ? t4.canvasMaxAreaInBytes : -1, O2 = "boolean" == typeof t4.disableFontFace ? t4.disableFontFace : s2.isNodeJS, N2 = true === t4.fontExtraProperties, B2 = true === t4.enableXfa, H2 = t4.ownerDocument || globalThis.document, U2 = true === t4.disableRange, z2 = true === t4.disableStream, V2 = true === t4.disableAutoFetch, j2 = true === t4.pdfBug, G2 = u3 ? u3.length : t4.length ?? NaN, $2 = "boolean" == typeof t4.useSystemFonts ? t4.useSystemFonts : !s2.isNodeJS && !O2, W2 = "boolean" == typeof t4.useWorkerFetch ? t4.useWorkerFetch : M3 === a2.DOMCMapReaderFactory && R3 === a2.DOMStandardFontDataFactory && w3 && P3 && (0, a2.isValidFetchUrl)(w3, document.baseURI) && (0, a2.isValidFetchUrl)(P3, document.baseURI), q2 = t4.canvasFactory || new _2({ ownerDocument: H2 }), K2 = t4.filterFactory || new T2({ docId: i3, ownerDocument: H2 });
          (0, s2.setVerbosityLevel)(v3);
          const X2 = { canvasFactory: q2, filterFactory: K2 };
          if (!W2) {
            X2.cMapReaderFactory = new M3({ baseUrl: w3, isCompressed: C3 });
            X2.standardFontDataFactory = new R3({ baseUrl: P3 });
          }
          if (!A3) {
            const t5 = { verbosity: v3, port: d2.GlobalWorkerOptions.workerPort };
            A3 = t5.port ? PDFWorker.fromPort(t5) : new PDFWorker(t5);
            e3._worker = A3;
          }
          const Y2 = { docId: i3, apiVersion: "4.2.67", data: r3, password: h3, disableAutoFetch: V2, rangeChunkSize: p3, length: G2, docBaseUrl: E3, enableXfa: B2, evaluatorOptions: { maxImageSize: k2, disableFontFace: O2, ignoreErrors: F2, isEvalSupported: D2, isOffscreenCanvasSupported: I2, canvasMaxAreaInBytes: L2, fontExtraProperties: N2, useSystemFonts: $2, cMapUrl: W2 ? w3 : null, standardFontDataUrl: W2 ? P3 : null } }, J = { ignoreErrors: F2, disableFontFace: O2, fontExtraProperties: N2, enableXfa: B2, ownerDocument: H2, disableAutoFetch: V2, pdfBug: j2, styleElement: null };
          A3.promise.then((function() {
            if (e3.destroyed) throw new Error("Loading aborted");
            const t5 = _fetchDocument(A3, Y2), h4 = new Promise((function(t6) {
              let e4;
              if (u3) e4 = new g2.PDFDataTransportStream(u3, { disableRange: U2, disableStream: z2 });
              else if (!r3) {
                e4 = ((t7) => {
                  if (s2.isNodeJS) {
                    return (function() {
                      return "undefined" != typeof fetch && "undefined" != typeof Response && "body" in Response.prototype;
                    })() && (0, a2.isValidFetchUrl)(t7.url) ? new m2.PDFFetchStream(t7) : new b2.PDFNodeStream(t7);
                  }
                  return (0, a2.isValidFetchUrl)(t7.url) ? new m2.PDFFetchStream(t7) : new f2.PDFNetworkStream(t7);
                })({ url: n3, length: G2, httpHeaders: o3, withCredentials: l3, rangeChunkSize: p3, disableRange: U2, disableStream: z2 });
              }
              t6(e4);
            }));
            return Promise.all([t5, h4]).then((function([t6, s3]) {
              if (e3.destroyed) throw new Error("Loading aborted");
              const n4 = new c2.MessageHandler(i3, t6, A3.port), a3 = new WorkerTransport(n4, e3, s3, J, X2);
              e3._transport = a3;
              n4.send("Ready", null);
            }));
          })).catch(e3._capability.reject);
          return e3;
        }, getUrlProp = function(t4) {
          if (t4 instanceof URL) return t4.href;
          try {
            return new URL(t4, window.location).href;
          } catch {
            if (s2.isNodeJS && "string" == typeof t4) return t4;
          }
          throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
        }, getDataProp = function(t4) {
          if (s2.isNodeJS && "undefined" != typeof Buffer && t4 instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
          if (t4 instanceof Uint8Array && t4.byteLength === t4.buffer.byteLength) return t4;
          if ("string" == typeof t4) return (0, s2.stringToBytes)(t4);
          if (t4 instanceof ArrayBuffer || ArrayBuffer.isView(t4) || "object" == typeof t4 && !isNaN(t4?.length)) return new Uint8Array(t4);
          throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
        }, isRefProxy = function(t4) {
          return "object" == typeof t4 && Number.isInteger(t4?.num) && t4.num >= 0 && Number.isInteger(t4?.gen) && t4.gen >= 0;
        };
        e2.d(__webpack_exports__2, { PDFDataRangeTransport: () => PDFDataRangeTransport, PDFWorker: () => PDFWorker, build: () => R2, getDocument: () => getDocument, version: () => P2 });
        var s2 = e2(292), n2 = e2(792), a2 = e2(419), r2 = e2(10), o2 = e2(573), l2 = e2(923), h2 = e2(814), d2 = e2(164), c2 = e2(178), u2 = e2(62), p2 = e2(626), g2 = e2(585), m2 = e2(94), f2 = e2(457), b2 = e2(786), A2 = e2(50), v2 = t3([o2, b2]);
        [o2, b2] = v2.then ? (await v2)() : v2;
        const y2 = 65536, E2 = 100, w2 = 5e3, _2 = s2.isNodeJS ? o2.NodeCanvasFactory : a2.DOMCanvasFactory, x2 = s2.isNodeJS ? o2.NodeCMapReaderFactory : a2.DOMCMapReaderFactory, T2 = s2.isNodeJS ? o2.NodeFilterFactory : a2.DOMFilterFactory, S2 = s2.isNodeJS ? o2.NodeStandardFontDataFactory : a2.DOMStandardFontDataFactory;
        async function _fetchDocument(t4, e3) {
          if (t4.destroyed) throw new Error("Worker was destroyed");
          const i3 = await t4.messageHandler.sendWithPromise("GetDocRequest", e3, e3.data ? [e3.data.buffer] : null);
          if (t4.destroyed) throw new Error("Worker was destroyed");
          return i3;
        }
        class PDFDocumentLoadingTask {
          static #j = 0;
          constructor() {
            this._capability = Promise.withResolvers();
            this._transport = null;
            this._worker = null;
            this.docId = "d" + PDFDocumentLoadingTask.#j++;
            this.destroyed = false;
            this.onPassword = null;
            this.onProgress = null;
          }
          get promise() {
            return this._capability.promise;
          }
          async destroy() {
            this.destroyed = true;
            try {
              this._worker?.port && (this._worker._pendingDestroy = true);
              await this._transport?.destroy();
            } catch (t4) {
              this._worker?.port && delete this._worker._pendingDestroy;
              throw t4;
            }
            this._transport = null;
            if (this._worker) {
              this._worker.destroy();
              this._worker = null;
            }
          }
        }
        class PDFDataRangeTransport {
          constructor(t4, e3, i3 = false, s3 = null) {
            this.length = t4;
            this.initialData = e3;
            this.progressiveDone = i3;
            this.contentDispositionFilename = s3;
            this._rangeListeners = [];
            this._progressListeners = [];
            this._progressiveReadListeners = [];
            this._progressiveDoneListeners = [];
            this._readyCapability = Promise.withResolvers();
          }
          addRangeListener(t4) {
            this._rangeListeners.push(t4);
          }
          addProgressListener(t4) {
            this._progressListeners.push(t4);
          }
          addProgressiveReadListener(t4) {
            this._progressiveReadListeners.push(t4);
          }
          addProgressiveDoneListener(t4) {
            this._progressiveDoneListeners.push(t4);
          }
          onDataRange(t4, e3) {
            for (const i3 of this._rangeListeners) i3(t4, e3);
          }
          onDataProgress(t4, e3) {
            this._readyCapability.promise.then((() => {
              for (const i3 of this._progressListeners) i3(t4, e3);
            }));
          }
          onDataProgressiveRead(t4) {
            this._readyCapability.promise.then((() => {
              for (const e3 of this._progressiveReadListeners) e3(t4);
            }));
          }
          onDataProgressiveDone() {
            this._readyCapability.promise.then((() => {
              for (const t4 of this._progressiveDoneListeners) t4();
            }));
          }
          transportReady() {
            this._readyCapability.resolve();
          }
          requestDataRange(t4, e3) {
            (0, s2.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
          }
          abort() {
          }
        }
        class PDFDocumentProxy {
          constructor(t4, e3) {
            this._pdfInfo = t4;
            this._transport = e3;
          }
          get annotationStorage() {
            return this._transport.annotationStorage;
          }
          get filterFactory() {
            return this._transport.filterFactory;
          }
          get numPages() {
            return this._pdfInfo.numPages;
          }
          get fingerprints() {
            return this._pdfInfo.fingerprints;
          }
          get isPureXfa() {
            return (0, s2.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
          }
          get allXfaHtml() {
            return this._transport._htmlForXfa;
          }
          getPage(t4) {
            return this._transport.getPage(t4);
          }
          getPageIndex(t4) {
            return this._transport.getPageIndex(t4);
          }
          getDestinations() {
            return this._transport.getDestinations();
          }
          getDestination(t4) {
            return this._transport.getDestination(t4);
          }
          getPageLabels() {
            return this._transport.getPageLabels();
          }
          getPageLayout() {
            return this._transport.getPageLayout();
          }
          getPageMode() {
            return this._transport.getPageMode();
          }
          getViewerPreferences() {
            return this._transport.getViewerPreferences();
          }
          getOpenAction() {
            return this._transport.getOpenAction();
          }
          getAttachments() {
            return this._transport.getAttachments();
          }
          getJSActions() {
            return this._transport.getDocJSActions();
          }
          getOutline() {
            return this._transport.getOutline();
          }
          getOptionalContentConfig({ intent: t4 = "display" } = {}) {
            const { renderingIntent: e3 } = this._transport.getRenderingIntent(t4);
            return this._transport.getOptionalContentConfig(e3);
          }
          getPermissions() {
            return this._transport.getPermissions();
          }
          getMetadata() {
            return this._transport.getMetadata();
          }
          getMarkInfo() {
            return this._transport.getMarkInfo();
          }
          getData() {
            return this._transport.getData();
          }
          saveDocument() {
            return this._transport.saveDocument();
          }
          getDownloadInfo() {
            return this._transport.downloadInfoCapability.promise;
          }
          cleanup(t4 = false) {
            return this._transport.startCleanup(t4 || this.isPureXfa);
          }
          destroy() {
            return this.loadingTask.destroy();
          }
          cachedPageNumber(t4) {
            return this._transport.cachedPageNumber(t4);
          }
          get loadingParams() {
            return this._transport.loadingParams;
          }
          get loadingTask() {
            return this._transport.loadingTask;
          }
          getFieldObjects() {
            return this._transport.getFieldObjects();
          }
          hasJSActions() {
            return this._transport.hasJSActions();
          }
          getCalculationOrderIds() {
            return this._transport.getCalculationOrderIds();
          }
        }
        class PDFPageProxy {
          #G = null;
          #$ = false;
          constructor(t4, e3, i3, s3 = false) {
            this._pageIndex = t4;
            this._pageInfo = e3;
            this._transport = i3;
            this._stats = s3 ? new a2.StatTimer() : null;
            this._pdfBug = s3;
            this.commonObjs = i3.commonObjs;
            this.objs = new PDFObjects();
            this._maybeCleanupAfterRender = false;
            this._intentStates = /* @__PURE__ */ new Map();
            this.destroyed = false;
          }
          get pageNumber() {
            return this._pageIndex + 1;
          }
          get rotate() {
            return this._pageInfo.rotate;
          }
          get ref() {
            return this._pageInfo.ref;
          }
          get userUnit() {
            return this._pageInfo.userUnit;
          }
          get view() {
            return this._pageInfo.view;
          }
          getViewport({ scale: t4, rotation: e3 = this.rotate, offsetX: i3 = 0, offsetY: s3 = 0, dontFlip: n3 = false } = {}) {
            return new a2.PageViewport({ viewBox: this.view, scale: t4, rotation: e3, offsetX: i3, offsetY: s3, dontFlip: n3 });
          }
          getAnnotations({ intent: t4 = "display" } = {}) {
            const { renderingIntent: e3 } = this._transport.getRenderingIntent(t4);
            return this._transport.getAnnotations(this._pageIndex, e3);
          }
          getJSActions() {
            return this._transport.getPageJSActions(this._pageIndex);
          }
          get filterFactory() {
            return this._transport.filterFactory;
          }
          get isPureXfa() {
            return (0, s2.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
          }
          async getXfa() {
            return this._transport._htmlForXfa?.children[this._pageIndex] || null;
          }
          render({ canvasContext: t4, viewport: e3, intent: i3 = "display", annotationMode: n3 = s2.AnnotationMode.ENABLE, transform: a3 = null, background: r3 = null, optionalContentConfigPromise: o3 = null, annotationCanvasMap: l3 = null, pageColors: h3 = null, printAnnotationStorage: d3 = null }) {
            this._stats?.time("Overall");
            const c3 = this._transport.getRenderingIntent(i3, n3, d3), { renderingIntent: u3, cacheKey: p3 } = c3;
            this.#$ = false;
            this.#W();
            o3 ||= this._transport.getOptionalContentConfig(u3);
            let g3 = this._intentStates.get(p3);
            if (!g3) {
              g3 = /* @__PURE__ */ Object.create(null);
              this._intentStates.set(p3, g3);
            }
            if (g3.streamReaderCancelTimeout) {
              clearTimeout(g3.streamReaderCancelTimeout);
              g3.streamReaderCancelTimeout = null;
            }
            const m3 = !!(u3 & s2.RenderingIntentFlag.PRINT);
            if (!g3.displayReadyCapability) {
              g3.displayReadyCapability = Promise.withResolvers();
              g3.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null };
              this._stats?.time("Page Request");
              this._pumpOperatorList(c3);
            }
            const complete = (t5) => {
              g3.renderTasks.delete(f3);
              (this._maybeCleanupAfterRender || m3) && (this.#$ = true);
              this.#q(!m3);
              if (t5) {
                f3.capability.reject(t5);
                this._abortOperatorList({ intentState: g3, reason: t5 instanceof Error ? t5 : new Error(t5) });
              } else f3.capability.resolve();
              this._stats?.timeEnd("Rendering");
              this._stats?.timeEnd("Overall");
            }, f3 = new InternalRenderTask({ callback: complete, params: { canvasContext: t4, viewport: e3, transform: a3, background: r3 }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: l3, operatorList: g3.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !m3, pdfBug: this._pdfBug, pageColors: h3 });
            (g3.renderTasks ||= /* @__PURE__ */ new Set()).add(f3);
            const b3 = f3.task;
            Promise.all([g3.displayReadyCapability.promise, o3]).then((([t5, e4]) => {
              if (this.destroyed) complete();
              else {
                this._stats?.time("Rendering");
                if (!(e4.renderingIntent & u3)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
                f3.initializeGraphics({ transparency: t5, optionalContentConfig: e4 });
                f3.operatorListChanged();
              }
            })).catch(complete);
            return b3;
          }
          getOperatorList({ intent: t4 = "display", annotationMode: e3 = s2.AnnotationMode.ENABLE, printAnnotationStorage: i3 = null } = {}) {
            const n3 = this._transport.getRenderingIntent(t4, e3, i3, true);
            let a3, r3 = this._intentStates.get(n3.cacheKey);
            if (!r3) {
              r3 = /* @__PURE__ */ Object.create(null);
              this._intentStates.set(n3.cacheKey, r3);
            }
            if (!r3.opListReadCapability) {
              a3 = /* @__PURE__ */ Object.create(null);
              a3.operatorListChanged = function operatorListChanged() {
                if (r3.operatorList.lastChunk) {
                  r3.opListReadCapability.resolve(r3.operatorList);
                  r3.renderTasks.delete(a3);
                }
              };
              r3.opListReadCapability = Promise.withResolvers();
              (r3.renderTasks ||= /* @__PURE__ */ new Set()).add(a3);
              r3.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null };
              this._stats?.time("Page Request");
              this._pumpOperatorList(n3);
            }
            return r3.opListReadCapability.promise;
          }
          streamTextContent({ includeMarkedContent: t4 = false, disableNormalization: e3 = false } = {}) {
            return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: true === t4, disableNormalization: true === e3 }, { highWaterMark: 100, size: (t5) => t5.items.length });
          }
          getTextContent(t4 = {}) {
            if (this._transport._htmlForXfa) return this.getXfa().then(((t5) => A2.XfaText.textContent(t5)));
            const e3 = this.streamTextContent(t4);
            return new Promise((function(t5, i3) {
              const s3 = e3.getReader(), n3 = { items: [], styles: /* @__PURE__ */ Object.create(null) };
              !(function pump() {
                s3.read().then((function({ value: e4, done: i4 }) {
                  if (i4) t5(n3);
                  else {
                    Object.assign(n3.styles, e4.styles);
                    n3.items.push(...e4.items);
                    pump();
                  }
                }), i3);
              })();
            }));
          }
          getStructTree() {
            return this._transport.getStructTree(this._pageIndex);
          }
          _destroy() {
            this.destroyed = true;
            const t4 = [];
            for (const e3 of this._intentStates.values()) {
              this._abortOperatorList({ intentState: e3, reason: new Error("Page was destroyed."), force: true });
              if (!e3.opListReadCapability) for (const i3 of e3.renderTasks) {
                t4.push(i3.completed);
                i3.cancel();
              }
            }
            this.objs.clear();
            this.#$ = false;
            this.#W();
            return Promise.all(t4);
          }
          cleanup(t4 = false) {
            this.#$ = true;
            const e3 = this.#q(false);
            t4 && e3 && (this._stats &&= new a2.StatTimer());
            return e3;
          }
          #q(t4 = false) {
            this.#W();
            if (!this.#$ || this.destroyed) return false;
            if (t4) {
              this.#G = setTimeout((() => {
                this.#G = null;
                this.#q(false);
              }), w2);
              return false;
            }
            for (const { renderTasks: t5, operatorList: e3 } of this._intentStates.values()) if (t5.size > 0 || !e3.lastChunk) return false;
            this._intentStates.clear();
            this.objs.clear();
            this.#$ = false;
            return true;
          }
          #W() {
            if (this.#G) {
              clearTimeout(this.#G);
              this.#G = null;
            }
          }
          _startRenderPage(t4, e3) {
            const i3 = this._intentStates.get(e3);
            if (i3) {
              this._stats?.timeEnd("Page Request");
              i3.displayReadyCapability?.resolve(t4);
            }
          }
          _renderPageChunk(t4, e3) {
            for (let i3 = 0, s3 = t4.length; i3 < s3; i3++) {
              e3.operatorList.fnArray.push(t4.fnArray[i3]);
              e3.operatorList.argsArray.push(t4.argsArray[i3]);
            }
            e3.operatorList.lastChunk = t4.lastChunk;
            e3.operatorList.separateAnnots = t4.separateAnnots;
            for (const t5 of e3.renderTasks) t5.operatorListChanged();
            t4.lastChunk && this.#q(true);
          }
          _pumpOperatorList({ renderingIntent: t4, cacheKey: e3, annotationStorageSerializable: i3 }) {
            const { map: s3, transfer: n3 } = i3, a3 = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: t4, cacheKey: e3, annotationStorage: s3 }, n3).getReader(), r3 = this._intentStates.get(e3);
            r3.streamReader = a3;
            const pump = () => {
              a3.read().then((({ value: t5, done: e4 }) => {
                if (e4) r3.streamReader = null;
                else if (!this._transport.destroyed) {
                  this._renderPageChunk(t5, r3);
                  pump();
                }
              }), ((t5) => {
                r3.streamReader = null;
                if (!this._transport.destroyed) {
                  if (r3.operatorList) {
                    r3.operatorList.lastChunk = true;
                    for (const t6 of r3.renderTasks) t6.operatorListChanged();
                    this.#q(true);
                  }
                  if (r3.displayReadyCapability) r3.displayReadyCapability.reject(t5);
                  else {
                    if (!r3.opListReadCapability) throw t5;
                    r3.opListReadCapability.reject(t5);
                  }
                }
              }));
            };
            pump();
          }
          _abortOperatorList({ intentState: t4, reason: e3, force: i3 = false }) {
            if (t4.streamReader) {
              if (t4.streamReaderCancelTimeout) {
                clearTimeout(t4.streamReaderCancelTimeout);
                t4.streamReaderCancelTimeout = null;
              }
              if (!i3) {
                if (t4.renderTasks.size > 0) return;
                if (e3 instanceof a2.RenderingCancelledException) {
                  let i4 = E2;
                  e3.extraDelay > 0 && e3.extraDelay < 1e3 && (i4 += e3.extraDelay);
                  t4.streamReaderCancelTimeout = setTimeout((() => {
                    t4.streamReaderCancelTimeout = null;
                    this._abortOperatorList({ intentState: t4, reason: e3, force: true });
                  }), i4);
                  return;
                }
              }
              t4.streamReader.cancel(new s2.AbortException(e3.message)).catch((() => {
              }));
              t4.streamReader = null;
              if (!this._transport.destroyed) {
                for (const [e4, i4] of this._intentStates) if (i4 === t4) {
                  this._intentStates.delete(e4);
                  break;
                }
                this.cleanup();
              }
            }
          }
          get stats() {
            return this._stats;
          }
        }
        class LoopbackPort {
          #K = /* @__PURE__ */ new Set();
          #X = Promise.resolve();
          postMessage(t4, e3) {
            const i3 = { data: structuredClone(t4, e3 ? { transfer: e3 } : null) };
            this.#X.then((() => {
              for (const t5 of this.#K) t5.call(this, i3);
            }));
          }
          addEventListener(t4, e3) {
            this.#K.add(e3);
          }
          removeEventListener(t4, e3) {
            this.#K.delete(e3);
          }
          terminate() {
            this.#K.clear();
          }
        }
        const C2 = { isWorkerDisabled: false, fakeWorkerId: 0 };
        if (s2.isNodeJS) {
          C2.isWorkerDisabled = true;
          d2.GlobalWorkerOptions.workerSrc ||= "./pdf.worker.mjs";
        }
        C2.isSameOrigin = function(t4, e3) {
          let i3;
          try {
            i3 = new URL(t4);
            if (!i3.origin || "null" === i3.origin) return false;
          } catch {
            return false;
          }
          const s3 = new URL(e3, i3);
          return i3.origin === s3.origin;
        };
        C2.createCDNWrapper = function(t4) {
          const e3 = `await import("${t4}");`;
          return URL.createObjectURL(new Blob([e3], { type: "text/javascript" }));
        };
        class PDFWorker {
          static #Y;
          constructor({ name: t4 = null, port: e3 = null, verbosity: i3 = (0, s2.getVerbosityLevel)() } = {}) {
            this.name = t4;
            this.destroyed = false;
            this.verbosity = i3;
            this._readyCapability = Promise.withResolvers();
            this._port = null;
            this._webWorker = null;
            this._messageHandler = null;
            if (e3) {
              if (PDFWorker.#Y?.has(e3)) throw new Error("Cannot use more than one PDFWorker per port.");
              (PDFWorker.#Y ||= /* @__PURE__ */ new WeakMap()).set(e3, this);
              this._initializeFromPort(e3);
            } else this._initialize();
          }
          get promise() {
            return this._readyCapability.promise;
          }
          get port() {
            return this._port;
          }
          get messageHandler() {
            return this._messageHandler;
          }
          _initializeFromPort(t4) {
            this._port = t4;
            this._messageHandler = new c2.MessageHandler("main", "worker", t4);
            this._messageHandler.on("ready", (function() {
            }));
            this._readyCapability.resolve();
            this._messageHandler.send("configure", { verbosity: this.verbosity });
          }
          _initialize() {
            if (!C2.isWorkerDisabled && !PDFWorker.#J) {
              let { workerSrc: t4 } = PDFWorker;
              try {
                C2.isSameOrigin(window.location.href, t4) || (t4 = C2.createCDNWrapper(new URL(t4, window.location).href));
                const e3 = new Worker(t4, { type: "module" }), i3 = new c2.MessageHandler("main", "worker", e3), terminateEarly = () => {
                  e3.removeEventListener("error", onWorkerError);
                  i3.destroy();
                  e3.terminate();
                  this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                }, onWorkerError = () => {
                  this._webWorker || terminateEarly();
                };
                e3.addEventListener("error", onWorkerError);
                i3.on("test", ((t5) => {
                  e3.removeEventListener("error", onWorkerError);
                  if (this.destroyed) terminateEarly();
                  else if (t5) {
                    this._messageHandler = i3;
                    this._port = e3;
                    this._webWorker = e3;
                    this._readyCapability.resolve();
                    i3.send("configure", { verbosity: this.verbosity });
                  } else {
                    this._setupFakeWorker();
                    i3.destroy();
                    e3.terminate();
                  }
                }));
                i3.on("ready", ((t5) => {
                  e3.removeEventListener("error", onWorkerError);
                  if (this.destroyed) terminateEarly();
                  else try {
                    sendTest();
                  } catch {
                    this._setupFakeWorker();
                  }
                }));
                const sendTest = () => {
                  const t5 = new Uint8Array();
                  i3.send("test", t5, [t5.buffer]);
                };
                sendTest();
                return;
              } catch {
                (0, s2.info)("The worker has been disabled.");
              }
            }
            this._setupFakeWorker();
          }
          _setupFakeWorker() {
            if (!C2.isWorkerDisabled) {
              (0, s2.warn)("Setting up fake worker.");
              C2.isWorkerDisabled = true;
            }
            PDFWorker._setupFakeWorkerGlobal.then(((t4) => {
              if (this.destroyed) {
                this._readyCapability.reject(new Error("Worker was destroyed"));
                return;
              }
              const e3 = new LoopbackPort();
              this._port = e3;
              const i3 = "fake" + C2.fakeWorkerId++, s3 = new c2.MessageHandler(i3 + "_worker", i3, e3);
              t4.setup(s3, e3);
              const n3 = new c2.MessageHandler(i3, i3 + "_worker", e3);
              this._messageHandler = n3;
              this._readyCapability.resolve();
              n3.send("configure", { verbosity: this.verbosity });
            })).catch(((t4) => {
              this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t4.message}".`));
            }));
          }
          destroy() {
            this.destroyed = true;
            if (this._webWorker) {
              this._webWorker.terminate();
              this._webWorker = null;
            }
            PDFWorker.#Y?.delete(this._port);
            this._port = null;
            if (this._messageHandler) {
              this._messageHandler.destroy();
              this._messageHandler = null;
            }
          }
          static fromPort(t4) {
            if (!t4?.port) throw new Error("PDFWorker.fromPort - invalid method signature.");
            const e3 = this.#Y?.get(t4.port);
            if (e3) {
              if (e3._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
              return e3;
            }
            return new PDFWorker(t4);
          }
          static get workerSrc() {
            if (d2.GlobalWorkerOptions.workerSrc) return d2.GlobalWorkerOptions.workerSrc;
            throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
          }
          static get #J() {
            try {
              return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
            } catch {
              return null;
            }
          }
          static get _setupFakeWorkerGlobal() {
            return (0, s2.shadow)(this, "_setupFakeWorkerGlobal", (async () => {
              if (this.#J) return this.#J;
              return (await import(this.workerSrc)).WorkerMessageHandler;
            })());
          }
        }
        class WorkerTransport {
          #Q = /* @__PURE__ */ new Map();
          #Z = /* @__PURE__ */ new Map();
          #tt = /* @__PURE__ */ new Map();
          #et = /* @__PURE__ */ new Map();
          #it = null;
          constructor(t4, e3, i3, s3, n3) {
            this.messageHandler = t4;
            this.loadingTask = e3;
            this.commonObjs = new PDFObjects();
            this.fontLoader = new r2.FontLoader({ ownerDocument: s3.ownerDocument, styleElement: s3.styleElement });
            this._params = s3;
            this.canvasFactory = n3.canvasFactory;
            this.filterFactory = n3.filterFactory;
            this.cMapReaderFactory = n3.cMapReaderFactory;
            this.standardFontDataFactory = n3.standardFontDataFactory;
            this.destroyed = false;
            this.destroyCapability = null;
            this._networkStream = i3;
            this._fullReader = null;
            this._lastProgress = null;
            this.downloadInfoCapability = Promise.withResolvers();
            this.setupMessageHandler();
          }
          #st(t4, e3 = null) {
            const i3 = this.#Q.get(t4);
            if (i3) return i3;
            const s3 = this.messageHandler.sendWithPromise(t4, e3);
            this.#Q.set(t4, s3);
            return s3;
          }
          get annotationStorage() {
            return (0, s2.shadow)(this, "annotationStorage", new n2.AnnotationStorage());
          }
          getRenderingIntent(t4, e3 = s2.AnnotationMode.ENABLE, i3 = null, a3 = false) {
            let r3 = s2.RenderingIntentFlag.DISPLAY, o3 = n2.SerializableEmpty;
            switch (t4) {
              case "any":
                r3 = s2.RenderingIntentFlag.ANY;
                break;
              case "display":
                break;
              case "print":
                r3 = s2.RenderingIntentFlag.PRINT;
                break;
              default:
                (0, s2.warn)(`getRenderingIntent - invalid intent: ${t4}`);
            }
            switch (e3) {
              case s2.AnnotationMode.DISABLE:
                r3 += s2.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                break;
              case s2.AnnotationMode.ENABLE:
                break;
              case s2.AnnotationMode.ENABLE_FORMS:
                r3 += s2.RenderingIntentFlag.ANNOTATIONS_FORMS;
                break;
              case s2.AnnotationMode.ENABLE_STORAGE:
                r3 += s2.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                o3 = (r3 & s2.RenderingIntentFlag.PRINT && i3 instanceof n2.PrintAnnotationStorage ? i3 : this.annotationStorage).serializable;
                break;
              default:
                (0, s2.warn)(`getRenderingIntent - invalid annotationMode: ${e3}`);
            }
            a3 && (r3 += s2.RenderingIntentFlag.OPLIST);
            return { renderingIntent: r3, cacheKey: `${r3}_${o3.hash}`, annotationStorageSerializable: o3 };
          }
          destroy() {
            if (this.destroyCapability) return this.destroyCapability.promise;
            this.destroyed = true;
            this.destroyCapability = Promise.withResolvers();
            this.#it?.reject(new Error("Worker was destroyed during onPassword callback"));
            const t4 = [];
            for (const e4 of this.#Z.values()) t4.push(e4._destroy());
            this.#Z.clear();
            this.#tt.clear();
            this.#et.clear();
            this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
            const e3 = this.messageHandler.sendWithPromise("Terminate", null);
            t4.push(e3);
            Promise.all(t4).then((() => {
              this.commonObjs.clear();
              this.fontLoader.clear();
              this.#Q.clear();
              this.filterFactory.destroy();
              (0, h2.cleanupTextLayer)();
              this._networkStream?.cancelAllRequests(new s2.AbortException("Worker was terminated."));
              if (this.messageHandler) {
                this.messageHandler.destroy();
                this.messageHandler = null;
              }
              this.destroyCapability.resolve();
            }), this.destroyCapability.reject);
            return this.destroyCapability.promise;
          }
          setupMessageHandler() {
            const { messageHandler: t4, loadingTask: e3 } = this;
            t4.on("GetReader", ((t5, e4) => {
              (0, s2.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available.");
              this._fullReader = this._networkStream.getFullReader();
              this._fullReader.onProgress = (t6) => {
                this._lastProgress = { loaded: t6.loaded, total: t6.total };
              };
              e4.onPull = () => {
                this._fullReader.read().then((function({ value: t6, done: i3 }) {
                  if (i3) e4.close();
                  else {
                    (0, s2.assert)(t6 instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
                    e4.enqueue(new Uint8Array(t6), 1, [t6]);
                  }
                })).catch(((t6) => {
                  e4.error(t6);
                }));
              };
              e4.onCancel = (t6) => {
                this._fullReader.cancel(t6);
                e4.ready.catch(((t7) => {
                  if (!this.destroyed) throw t7;
                }));
              };
            }));
            t4.on("ReaderHeadersReady", ((t5) => {
              const i3 = Promise.withResolvers(), s3 = this._fullReader;
              s3.headersReady.then((() => {
                if (!s3.isStreamingSupported || !s3.isRangeSupported) {
                  this._lastProgress && e3.onProgress?.(this._lastProgress);
                  s3.onProgress = (t6) => {
                    e3.onProgress?.({ loaded: t6.loaded, total: t6.total });
                  };
                }
                i3.resolve({ isStreamingSupported: s3.isStreamingSupported, isRangeSupported: s3.isRangeSupported, contentLength: s3.contentLength });
              }), i3.reject);
              return i3.promise;
            }));
            t4.on("GetRangeReader", ((t5, e4) => {
              (0, s2.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
              const i3 = this._networkStream.getRangeReader(t5.begin, t5.end);
              if (i3) {
                e4.onPull = () => {
                  i3.read().then((function({ value: t6, done: i4 }) {
                    if (i4) e4.close();
                    else {
                      (0, s2.assert)(t6 instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                      e4.enqueue(new Uint8Array(t6), 1, [t6]);
                    }
                  })).catch(((t6) => {
                    e4.error(t6);
                  }));
                };
                e4.onCancel = (t6) => {
                  i3.cancel(t6);
                  e4.ready.catch(((t7) => {
                    if (!this.destroyed) throw t7;
                  }));
                };
              } else e4.close();
            }));
            t4.on("GetDoc", (({ pdfInfo: t5 }) => {
              this._numPages = t5.numPages;
              this._htmlForXfa = t5.htmlForXfa;
              delete t5.htmlForXfa;
              e3._capability.resolve(new PDFDocumentProxy(t5, this));
            }));
            t4.on("DocException", (function(t5) {
              let i3;
              switch (t5.name) {
                case "PasswordException":
                  i3 = new s2.PasswordException(t5.message, t5.code);
                  break;
                case "InvalidPDFException":
                  i3 = new s2.InvalidPDFException(t5.message);
                  break;
                case "MissingPDFException":
                  i3 = new s2.MissingPDFException(t5.message);
                  break;
                case "UnexpectedResponseException":
                  i3 = new s2.UnexpectedResponseException(t5.message, t5.status);
                  break;
                case "UnknownErrorException":
                  i3 = new s2.UnknownErrorException(t5.message, t5.details);
                  break;
                default:
                  (0, s2.unreachable)("DocException - expected a valid Error.");
              }
              e3._capability.reject(i3);
            }));
            t4.on("PasswordRequest", ((t5) => {
              this.#it = Promise.withResolvers();
              if (e3.onPassword) {
                const updatePassword = (t6) => {
                  t6 instanceof Error ? this.#it.reject(t6) : this.#it.resolve({ password: t6 });
                };
                try {
                  e3.onPassword(updatePassword, t5.code);
                } catch (t6) {
                  this.#it.reject(t6);
                }
              } else this.#it.reject(new s2.PasswordException(t5.message, t5.code));
              return this.#it.promise;
            }));
            t4.on("DataLoaded", ((t5) => {
              e3.onProgress?.({ loaded: t5.length, total: t5.length });
              this.downloadInfoCapability.resolve(t5);
            }));
            t4.on("StartRenderPage", ((t5) => {
              if (this.destroyed) return;
              this.#Z.get(t5.pageIndex)._startRenderPage(t5.transparency, t5.cacheKey);
            }));
            t4.on("commonobj", (([e4, i3, n3]) => {
              if (this.destroyed) return null;
              if (this.commonObjs.has(e4)) return null;
              switch (i3) {
                case "Font":
                  const a3 = this._params;
                  if ("error" in n3) {
                    const t5 = n3.error;
                    (0, s2.warn)(`Error during font loading: ${t5}`);
                    this.commonObjs.resolve(e4, t5);
                    break;
                  }
                  const o3 = a3.pdfBug && globalThis.FontInspector?.enabled ? (t5, e5) => globalThis.FontInspector.fontAdded(t5, e5) : null, l3 = new r2.FontFaceObject(n3, { disableFontFace: a3.disableFontFace, ignoreErrors: a3.ignoreErrors, inspectFont: o3 });
                  this.fontLoader.bind(l3).catch((() => t4.sendWithPromise("FontFallback", { id: e4 }))).finally((() => {
                    !a3.fontExtraProperties && l3.data && (l3.data = null);
                    this.commonObjs.resolve(e4, l3);
                  }));
                  break;
                case "CopyLocalImage":
                  const { imageRef: h3 } = n3;
                  (0, s2.assert)(h3, "The imageRef must be defined.");
                  for (const t5 of this.#Z.values()) for (const [, i4] of t5.objs) if (i4.ref === h3) {
                    if (!i4.dataLen) return null;
                    this.commonObjs.resolve(e4, structuredClone(i4));
                    return i4.dataLen;
                  }
                  break;
                case "FontPath":
                case "Image":
                case "Pattern":
                  this.commonObjs.resolve(e4, n3);
                  break;
                default:
                  throw new Error(`Got unknown common object type ${i3}`);
              }
              return null;
            }));
            t4.on("obj", (([t5, e4, i3, n3]) => {
              if (this.destroyed) return;
              const a3 = this.#Z.get(e4);
              if (!a3.objs.has(t5)) if (0 !== a3._intentStates.size) switch (i3) {
                case "Image":
                  a3.objs.resolve(t5, n3);
                  n3?.dataLen > s2.MAX_IMAGE_SIZE_TO_CACHE && (a3._maybeCleanupAfterRender = true);
                  break;
                case "Pattern":
                  a3.objs.resolve(t5, n3);
                  break;
                default:
                  throw new Error(`Got unknown object type ${i3}`);
              }
              else n3?.bitmap?.close();
            }));
            t4.on("DocProgress", ((t5) => {
              this.destroyed || e3.onProgress?.({ loaded: t5.loaded, total: t5.total });
            }));
            t4.on("FetchBuiltInCMap", ((t5) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(t5) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))));
            t4.on("FetchStandardFontData", ((t5) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(t5) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."))));
          }
          getData() {
            return this.messageHandler.sendWithPromise("GetData", null);
          }
          saveDocument() {
            this.annotationStorage.size <= 0 && (0, s2.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
            const { map: t4, transfer: e3 } = this.annotationStorage.serializable;
            return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t4, filename: this._fullReader?.filename ?? null }, e3).finally((() => {
              this.annotationStorage.resetModified();
            }));
          }
          getPage(t4) {
            if (!Number.isInteger(t4) || t4 <= 0 || t4 > this._numPages) return Promise.reject(new Error("Invalid page request."));
            const e3 = t4 - 1, i3 = this.#tt.get(e3);
            if (i3) return i3;
            const s3 = this.messageHandler.sendWithPromise("GetPage", { pageIndex: e3 }).then(((i4) => {
              if (this.destroyed) throw new Error("Transport destroyed");
              i4.refStr && this.#et.set(i4.refStr, t4);
              const s4 = new PDFPageProxy(e3, i4, this, this._params.pdfBug);
              this.#Z.set(e3, s4);
              return s4;
            }));
            this.#tt.set(e3, s3);
            return s3;
          }
          getPageIndex(t4) {
            return isRefProxy(t4) ? this.messageHandler.sendWithPromise("GetPageIndex", { num: t4.num, gen: t4.gen }) : Promise.reject(new Error("Invalid pageIndex request."));
          }
          getAnnotations(t4, e3) {
            return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: t4, intent: e3 });
          }
          getFieldObjects() {
            return this.#st("GetFieldObjects");
          }
          hasJSActions() {
            return this.#st("HasJSActions");
          }
          getCalculationOrderIds() {
            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
          }
          getDestinations() {
            return this.messageHandler.sendWithPromise("GetDestinations", null);
          }
          getDestination(t4) {
            return "string" != typeof t4 ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: t4 });
          }
          getPageLabels() {
            return this.messageHandler.sendWithPromise("GetPageLabels", null);
          }
          getPageLayout() {
            return this.messageHandler.sendWithPromise("GetPageLayout", null);
          }
          getPageMode() {
            return this.messageHandler.sendWithPromise("GetPageMode", null);
          }
          getViewerPreferences() {
            return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
          }
          getOpenAction() {
            return this.messageHandler.sendWithPromise("GetOpenAction", null);
          }
          getAttachments() {
            return this.messageHandler.sendWithPromise("GetAttachments", null);
          }
          getDocJSActions() {
            return this.#st("GetDocJSActions");
          }
          getPageJSActions(t4) {
            return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: t4 });
          }
          getStructTree(t4) {
            return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: t4 });
          }
          getOutline() {
            return this.messageHandler.sendWithPromise("GetOutline", null);
          }
          getOptionalContentConfig(t4) {
            return this.#st("GetOptionalContentConfig").then(((e3) => new p2.OptionalContentConfig(e3, t4)));
          }
          getPermissions() {
            return this.messageHandler.sendWithPromise("GetPermissions", null);
          }
          getMetadata() {
            const t4 = "GetMetadata", e3 = this.#Q.get(t4);
            if (e3) return e3;
            const i3 = this.messageHandler.sendWithPromise(t4, null).then(((t5) => ({ info: t5[0], metadata: t5[1] ? new u2.Metadata(t5[1]) : null, contentDispositionFilename: this._fullReader?.filename ?? null, contentLength: this._fullReader?.contentLength ?? null })));
            this.#Q.set(t4, i3);
            return i3;
          }
          getMarkInfo() {
            return this.messageHandler.sendWithPromise("GetMarkInfo", null);
          }
          async startCleanup(t4 = false) {
            if (!this.destroyed) {
              await this.messageHandler.sendWithPromise("Cleanup", null);
              for (const t5 of this.#Z.values()) {
                if (!t5.cleanup()) throw new Error(`startCleanup: Page ${t5.pageNumber} is currently rendering.`);
              }
              this.commonObjs.clear();
              t4 || this.fontLoader.clear();
              this.#Q.clear();
              this.filterFactory.destroy(true);
              (0, h2.cleanupTextLayer)();
            }
          }
          cachedPageNumber(t4) {
            if (!isRefProxy(t4)) return null;
            const e3 = 0 === t4.gen ? `${t4.num}R` : `${t4.num}R${t4.gen}`;
            return this.#et.get(e3) ?? null;
          }
          get loadingParams() {
            const { disableAutoFetch: t4, enableXfa: e3 } = this._params;
            return (0, s2.shadow)(this, "loadingParams", { disableAutoFetch: t4, enableXfa: e3 });
          }
        }
        const M2 = /* @__PURE__ */ Symbol("INITIAL_DATA");
        class PDFObjects {
          #nt = /* @__PURE__ */ Object.create(null);
          #at(t4) {
            return this.#nt[t4] ||= { ...Promise.withResolvers(), data: M2 };
          }
          get(t4, e3 = null) {
            if (e3) {
              const i4 = this.#at(t4);
              i4.promise.then((() => e3(i4.data)));
              return null;
            }
            const i3 = this.#nt[t4];
            if (!i3 || i3.data === M2) throw new Error(`Requesting object that isn't resolved yet ${t4}.`);
            return i3.data;
          }
          has(t4) {
            const e3 = this.#nt[t4];
            return !!e3 && e3.data !== M2;
          }
          resolve(t4, e3 = null) {
            const i3 = this.#at(t4);
            i3.data = e3;
            i3.resolve();
          }
          clear() {
            for (const t4 in this.#nt) {
              const { data: e3 } = this.#nt[t4];
              e3?.bitmap?.close();
            }
            this.#nt = /* @__PURE__ */ Object.create(null);
          }
          *[Symbol.iterator]() {
            for (const t4 in this.#nt) {
              const { data: e3 } = this.#nt[t4];
              e3 !== M2 && (yield [t4, e3]);
            }
          }
        }
        class RenderTask {
          #rt = null;
          constructor(t4) {
            this.#rt = t4;
            this.onContinue = null;
          }
          get promise() {
            return this.#rt.capability.promise;
          }
          cancel(t4 = 0) {
            this.#rt.cancel(null, t4);
          }
          get separateAnnots() {
            const { separateAnnots: t4 } = this.#rt.operatorList;
            if (!t4) return false;
            const { annotationCanvasMap: e3 } = this.#rt;
            return t4.form || t4.canvas && e3?.size > 0;
          }
        }
        class InternalRenderTask {
          static #ot = /* @__PURE__ */ new WeakSet();
          constructor({ callback: t4, params: e3, objs: i3, commonObjs: s3, annotationCanvasMap: n3, operatorList: a3, pageIndex: r3, canvasFactory: o3, filterFactory: l3, useRequestAnimationFrame: h3 = false, pdfBug: d3 = false, pageColors: c3 = null }) {
            this.callback = t4;
            this.params = e3;
            this.objs = i3;
            this.commonObjs = s3;
            this.annotationCanvasMap = n3;
            this.operatorListIdx = null;
            this.operatorList = a3;
            this._pageIndex = r3;
            this.canvasFactory = o3;
            this.filterFactory = l3;
            this._pdfBug = d3;
            this.pageColors = c3;
            this.running = false;
            this.graphicsReadyCallback = null;
            this.graphicsReady = false;
            this._useRequestAnimationFrame = true === h3 && "undefined" != typeof window;
            this.cancelled = false;
            this.capability = Promise.withResolvers();
            this.task = new RenderTask(this);
            this._cancelBound = this.cancel.bind(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = e3.canvasContext.canvas;
          }
          get completed() {
            return this.capability.promise.catch((function() {
            }));
          }
          initializeGraphics({ transparency: t4 = false, optionalContentConfig: e3 }) {
            if (this.cancelled) return;
            if (this._canvas) {
              if (InternalRenderTask.#ot.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
              InternalRenderTask.#ot.add(this._canvas);
            }
            if (this._pdfBug && globalThis.StepperManager?.enabled) {
              this.stepper = globalThis.StepperManager.create(this._pageIndex);
              this.stepper.init(this.operatorList);
              this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
            }
            const { canvasContext: i3, viewport: s3, transform: n3, background: a3 } = this.params;
            this.gfx = new l2.CanvasGraphics(i3, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e3 }, this.annotationCanvasMap, this.pageColors);
            this.gfx.beginDrawing({ transform: n3, viewport: s3, transparency: t4, background: a3 });
            this.operatorListIdx = 0;
            this.graphicsReady = true;
            this.graphicsReadyCallback?.();
          }
          cancel(t4 = null, e3 = 0) {
            this.running = false;
            this.cancelled = true;
            this.gfx?.endDrawing();
            InternalRenderTask.#ot.delete(this._canvas);
            this.callback(t4 || new a2.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, e3));
          }
          operatorListChanged() {
            if (this.graphicsReady) {
              this.stepper?.updateOperatorList(this.operatorList);
              this.running || this._continue();
            } else this.graphicsReadyCallback ||= this._continueBound;
          }
          _continue() {
            this.running = true;
            this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
          }
          _scheduleNext() {
            this._useRequestAnimationFrame ? window.requestAnimationFrame((() => {
              this._nextBound().catch(this._cancelBound);
            })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
          }
          async _next() {
            if (!this.cancelled) {
              this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
              if (this.operatorListIdx === this.operatorList.argsArray.length) {
                this.running = false;
                if (this.operatorList.lastChunk) {
                  this.gfx.endDrawing();
                  InternalRenderTask.#ot.delete(this._canvas);
                  this.callback();
                }
              }
            }
          }
        }
        const P2 = "4.2.67", R2 = "49b388101";
        i2();
      } catch (F2) {
        i2(F2);
      }
    }));
  }, 583: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { BaseCMapReaderFactory: () => BaseCMapReaderFactory, BaseCanvasFactory: () => BaseCanvasFactory, BaseFilterFactory: () => BaseFilterFactory, BaseSVGFactory: () => BaseSVGFactory, BaseStandardFontDataFactory: () => BaseStandardFontDataFactory });
    var i2 = e2(292);
    class BaseFilterFactory {
      constructor() {
        this.constructor === BaseFilterFactory && (0, i2.unreachable)("Cannot initialize BaseFilterFactory.");
      }
      addFilter(t3) {
        return "none";
      }
      addHCMFilter(t3, e3) {
        return "none";
      }
      addHighlightHCMFilter(t3, e3, i3, s2, n2) {
        return "none";
      }
      destroy(t3 = false) {
      }
    }
    class BaseCanvasFactory {
      constructor() {
        this.constructor === BaseCanvasFactory && (0, i2.unreachable)("Cannot initialize BaseCanvasFactory.");
      }
      create(t3, e3) {
        if (t3 <= 0 || e3 <= 0) throw new Error("Invalid canvas size");
        const i3 = this._createCanvas(t3, e3);
        return { canvas: i3, context: i3.getContext("2d") };
      }
      reset(t3, e3, i3) {
        if (!t3.canvas) throw new Error("Canvas is not specified");
        if (e3 <= 0 || i3 <= 0) throw new Error("Invalid canvas size");
        t3.canvas.width = e3;
        t3.canvas.height = i3;
      }
      destroy(t3) {
        if (!t3.canvas) throw new Error("Canvas is not specified");
        t3.canvas.width = 0;
        t3.canvas.height = 0;
        t3.canvas = null;
        t3.context = null;
      }
      _createCanvas(t3, e3) {
        (0, i2.unreachable)("Abstract method `_createCanvas` called.");
      }
    }
    class BaseCMapReaderFactory {
      constructor({ baseUrl: t3 = null, isCompressed: e3 = true }) {
        this.constructor === BaseCMapReaderFactory && (0, i2.unreachable)("Cannot initialize BaseCMapReaderFactory.");
        this.baseUrl = t3;
        this.isCompressed = e3;
      }
      async fetch({ name: t3 }) {
        if (!this.baseUrl) throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
        if (!t3) throw new Error("CMap name must be specified.");
        const e3 = this.baseUrl + t3 + (this.isCompressed ? ".bcmap" : ""), s2 = this.isCompressed ? i2.CMapCompressionType.BINARY : i2.CMapCompressionType.NONE;
        return this._fetchData(e3, s2).catch(((t4) => {
          throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e3}`);
        }));
      }
      _fetchData(t3, e3) {
        (0, i2.unreachable)("Abstract method `_fetchData` called.");
      }
    }
    class BaseStandardFontDataFactory {
      constructor({ baseUrl: t3 = null }) {
        this.constructor === BaseStandardFontDataFactory && (0, i2.unreachable)("Cannot initialize BaseStandardFontDataFactory.");
        this.baseUrl = t3;
      }
      async fetch({ filename: t3 }) {
        if (!this.baseUrl) throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
        if (!t3) throw new Error("Font filename must be specified.");
        const e3 = `${this.baseUrl}${t3}`;
        return this._fetchData(e3).catch(((t4) => {
          throw new Error(`Unable to load font data at: ${e3}`);
        }));
      }
      _fetchData(t3) {
        (0, i2.unreachable)("Abstract method `_fetchData` called.");
      }
    }
    class BaseSVGFactory {
      constructor() {
        this.constructor === BaseSVGFactory && (0, i2.unreachable)("Cannot initialize BaseSVGFactory.");
      }
      create(t3, e3, i3 = false) {
        if (t3 <= 0 || e3 <= 0) throw new Error("Invalid SVG dimensions");
        const s2 = this._createSVG("svg:svg");
        s2.setAttribute("version", "1.1");
        if (!i3) {
          s2.setAttribute("width", `${t3}px`);
          s2.setAttribute("height", `${e3}px`);
        }
        s2.setAttribute("preserveAspectRatio", "none");
        s2.setAttribute("viewBox", `0 0 ${t3} ${e3}`);
        return s2;
      }
      createElement(t3) {
        if ("string" != typeof t3) throw new Error("Invalid SVG element type");
        return this._createSVG(t3);
      }
      _createSVG(t3) {
        (0, i2.unreachable)("Abstract method `_createSVG` called.");
      }
    }
  }, 923: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { CanvasGraphics: () => CanvasGraphics });
    var i2 = e2(292), s2 = e2(419);
    const n2 = "Fill", a2 = "Stroke", r2 = "Shading";
    function applyBoundingBox(t3, e3) {
      if (!e3) return;
      const i3 = e3[2] - e3[0], s3 = e3[3] - e3[1], n3 = new Path2D();
      n3.rect(e3[0], e3[1], i3, s3);
      t3.clip(n3);
    }
    class BaseShadingPattern {
      constructor() {
        this.constructor === BaseShadingPattern && (0, i2.unreachable)("Cannot initialize BaseShadingPattern.");
      }
      getPattern() {
        (0, i2.unreachable)("Abstract method `getPattern` called.");
      }
    }
    class RadialAxialShadingPattern extends BaseShadingPattern {
      constructor(t3) {
        super();
        this._type = t3[1];
        this._bbox = t3[2];
        this._colorStops = t3[3];
        this._p0 = t3[4];
        this._p1 = t3[5];
        this._r0 = t3[6];
        this._r1 = t3[7];
        this.matrix = null;
      }
      _createGradient(t3) {
        let e3;
        "axial" === this._type ? e3 = t3.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (e3 = t3.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
        for (const t4 of this._colorStops) e3.addColorStop(t4[0], t4[1]);
        return e3;
      }
      getPattern(t3, e3, r3, o3) {
        let l3;
        if (o3 === a2 || o3 === n2) {
          const n3 = e3.current.getClippedPathBoundingBox(o3, (0, s2.getCurrentTransform)(t3)) || [0, 0, 0, 0], a3 = Math.ceil(n3[2] - n3[0]) || 1, h3 = Math.ceil(n3[3] - n3[1]) || 1, d3 = e3.cachedCanvases.getCanvas("pattern", a3, h3, true), c3 = d3.context;
          c3.clearRect(0, 0, c3.canvas.width, c3.canvas.height);
          c3.beginPath();
          c3.rect(0, 0, c3.canvas.width, c3.canvas.height);
          c3.translate(-n3[0], -n3[1]);
          r3 = i2.Util.transform(r3, [1, 0, 0, 1, n3[0], n3[1]]);
          c3.transform(...e3.baseTransform);
          this.matrix && c3.transform(...this.matrix);
          applyBoundingBox(c3, this._bbox);
          c3.fillStyle = this._createGradient(c3);
          c3.fill();
          l3 = t3.createPattern(d3.canvas, "no-repeat");
          const u3 = new DOMMatrix(r3);
          l3.setTransform(u3);
        } else {
          applyBoundingBox(t3, this._bbox);
          l3 = this._createGradient(t3);
        }
        return l3;
      }
    }
    function drawTriangle(t3, e3, i3, s3, n3, a3, r3, o3) {
      const l3 = e3.coords, h3 = e3.colors, d3 = t3.data, c3 = 4 * t3.width;
      let u3;
      if (l3[i3 + 1] > l3[s3 + 1]) {
        u3 = i3;
        i3 = s3;
        s3 = u3;
        u3 = a3;
        a3 = r3;
        r3 = u3;
      }
      if (l3[s3 + 1] > l3[n3 + 1]) {
        u3 = s3;
        s3 = n3;
        n3 = u3;
        u3 = r3;
        r3 = o3;
        o3 = u3;
      }
      if (l3[i3 + 1] > l3[s3 + 1]) {
        u3 = i3;
        i3 = s3;
        s3 = u3;
        u3 = a3;
        a3 = r3;
        r3 = u3;
      }
      const p3 = (l3[i3] + e3.offsetX) * e3.scaleX, g3 = (l3[i3 + 1] + e3.offsetY) * e3.scaleY, m2 = (l3[s3] + e3.offsetX) * e3.scaleX, f2 = (l3[s3 + 1] + e3.offsetY) * e3.scaleY, b2 = (l3[n3] + e3.offsetX) * e3.scaleX, A2 = (l3[n3 + 1] + e3.offsetY) * e3.scaleY;
      if (g3 >= A2) return;
      const v2 = h3[a3], y2 = h3[a3 + 1], E2 = h3[a3 + 2], w2 = h3[r3], _2 = h3[r3 + 1], x2 = h3[r3 + 2], T2 = h3[o3], S2 = h3[o3 + 1], C2 = h3[o3 + 2], M2 = Math.round(g3), P2 = Math.round(A2);
      let R2, F2, k2, D2, I2, L2, O2, N2;
      for (let t4 = M2; t4 <= P2; t4++) {
        if (t4 < f2) {
          const e5 = t4 < g3 ? 0 : (g3 - t4) / (g3 - f2);
          R2 = p3 - (p3 - m2) * e5;
          F2 = v2 - (v2 - w2) * e5;
          k2 = y2 - (y2 - _2) * e5;
          D2 = E2 - (E2 - x2) * e5;
        } else {
          let e5;
          e5 = t4 > A2 ? 1 : f2 === A2 ? 0 : (f2 - t4) / (f2 - A2);
          R2 = m2 - (m2 - b2) * e5;
          F2 = w2 - (w2 - T2) * e5;
          k2 = _2 - (_2 - S2) * e5;
          D2 = x2 - (x2 - C2) * e5;
        }
        let e4;
        e4 = t4 < g3 ? 0 : t4 > A2 ? 1 : (g3 - t4) / (g3 - A2);
        I2 = p3 - (p3 - b2) * e4;
        L2 = v2 - (v2 - T2) * e4;
        O2 = y2 - (y2 - S2) * e4;
        N2 = E2 - (E2 - C2) * e4;
        const i4 = Math.round(Math.min(R2, I2)), s4 = Math.round(Math.max(R2, I2));
        let n4 = c3 * t4 + 4 * i4;
        for (let t5 = i4; t5 <= s4; t5++) {
          e4 = (R2 - t5) / (R2 - I2);
          e4 < 0 ? e4 = 0 : e4 > 1 && (e4 = 1);
          d3[n4++] = F2 - (F2 - L2) * e4 | 0;
          d3[n4++] = k2 - (k2 - O2) * e4 | 0;
          d3[n4++] = D2 - (D2 - N2) * e4 | 0;
          d3[n4++] = 255;
        }
      }
    }
    function drawFigure(t3, e3, i3) {
      const s3 = e3.coords, n3 = e3.colors;
      let a3, r3;
      switch (e3.type) {
        case "lattice":
          const o3 = e3.verticesPerRow, l3 = Math.floor(s3.length / o3) - 1, h3 = o3 - 1;
          for (a3 = 0; a3 < l3; a3++) {
            let e4 = a3 * o3;
            for (let a4 = 0; a4 < h3; a4++, e4++) {
              drawTriangle(t3, i3, s3[e4], s3[e4 + 1], s3[e4 + o3], n3[e4], n3[e4 + 1], n3[e4 + o3]);
              drawTriangle(t3, i3, s3[e4 + o3 + 1], s3[e4 + 1], s3[e4 + o3], n3[e4 + o3 + 1], n3[e4 + 1], n3[e4 + o3]);
            }
          }
          break;
        case "triangles":
          for (a3 = 0, r3 = s3.length; a3 < r3; a3 += 3) drawTriangle(t3, i3, s3[a3], s3[a3 + 1], s3[a3 + 2], n3[a3], n3[a3 + 1], n3[a3 + 2]);
          break;
        default:
          throw new Error("illegal figure");
      }
    }
    class MeshShadingPattern extends BaseShadingPattern {
      constructor(t3) {
        super();
        this._coords = t3[2];
        this._colors = t3[3];
        this._figures = t3[4];
        this._bounds = t3[5];
        this._bbox = t3[7];
        this._background = t3[8];
        this.matrix = null;
      }
      _createMeshCanvas(t3, e3, i3) {
        const s3 = Math.floor(this._bounds[0]), n3 = Math.floor(this._bounds[1]), a3 = Math.ceil(this._bounds[2]) - s3, r3 = Math.ceil(this._bounds[3]) - n3, o3 = Math.min(Math.ceil(Math.abs(a3 * t3[0] * 1.1)), 3e3), l3 = Math.min(Math.ceil(Math.abs(r3 * t3[1] * 1.1)), 3e3), h3 = a3 / o3, d3 = r3 / l3, c3 = { coords: this._coords, colors: this._colors, offsetX: -s3, offsetY: -n3, scaleX: 1 / h3, scaleY: 1 / d3 }, u3 = o3 + 4, p3 = l3 + 4, g3 = i3.getCanvas("mesh", u3, p3, false), m2 = g3.context, f2 = m2.createImageData(o3, l3);
        if (e3) {
          const t4 = f2.data;
          for (let i4 = 0, s4 = t4.length; i4 < s4; i4 += 4) {
            t4[i4] = e3[0];
            t4[i4 + 1] = e3[1];
            t4[i4 + 2] = e3[2];
            t4[i4 + 3] = 255;
          }
        }
        for (const t4 of this._figures) drawFigure(f2, t4, c3);
        m2.putImageData(f2, 2, 2);
        return { canvas: g3.canvas, offsetX: s3 - 2 * h3, offsetY: n3 - 2 * d3, scaleX: h3, scaleY: d3 };
      }
      getPattern(t3, e3, n3, a3) {
        applyBoundingBox(t3, this._bbox);
        let o3;
        if (a3 === r2) o3 = i2.Util.singularValueDecompose2dScale((0, s2.getCurrentTransform)(t3));
        else {
          o3 = i2.Util.singularValueDecompose2dScale(e3.baseTransform);
          if (this.matrix) {
            const t4 = i2.Util.singularValueDecompose2dScale(this.matrix);
            o3 = [o3[0] * t4[0], o3[1] * t4[1]];
          }
        }
        const l3 = this._createMeshCanvas(o3, a3 === r2 ? null : this._background, e3.cachedCanvases);
        if (a3 !== r2) {
          t3.setTransform(...e3.baseTransform);
          this.matrix && t3.transform(...this.matrix);
        }
        t3.translate(l3.offsetX, l3.offsetY);
        t3.scale(l3.scaleX, l3.scaleY);
        return t3.createPattern(l3.canvas, "no-repeat");
      }
    }
    class DummyShadingPattern extends BaseShadingPattern {
      getPattern() {
        return "hotpink";
      }
    }
    const o2 = 1, l2 = 2;
    class TilingPattern {
      static MAX_PATTERN_SIZE = 3e3;
      constructor(t3, e3, i3, s3, n3) {
        this.operatorList = t3[2];
        this.matrix = t3[3] || [1, 0, 0, 1, 0, 0];
        this.bbox = t3[4];
        this.xstep = t3[5];
        this.ystep = t3[6];
        this.paintType = t3[7];
        this.tilingType = t3[8];
        this.color = e3;
        this.ctx = i3;
        this.canvasGraphicsFactory = s3;
        this.baseTransform = n3;
      }
      createPatternCanvas(t3) {
        const e3 = this.operatorList, n3 = this.bbox, a3 = this.xstep, r3 = this.ystep, o3 = this.paintType, l3 = this.tilingType, h3 = this.color, d3 = this.canvasGraphicsFactory;
        (0, i2.info)("TilingType: " + l3);
        const c3 = n3[0], u3 = n3[1], p3 = n3[2], g3 = n3[3], m2 = i2.Util.singularValueDecompose2dScale(this.matrix), f2 = i2.Util.singularValueDecompose2dScale(this.baseTransform), b2 = [m2[0] * f2[0], m2[1] * f2[1]], A2 = this.getSizeAndScale(a3, this.ctx.canvas.width, b2[0]), v2 = this.getSizeAndScale(r3, this.ctx.canvas.height, b2[1]), y2 = t3.cachedCanvases.getCanvas("pattern", A2.size, v2.size, true), E2 = y2.context, w2 = d3.createCanvasGraphics(E2);
        w2.groupLevel = t3.groupLevel;
        this.setFillAndStrokeStyleToContext(w2, o3, h3);
        let _2 = c3, x2 = u3, T2 = p3, S2 = g3;
        if (c3 < 0) {
          _2 = 0;
          T2 += Math.abs(c3);
        }
        if (u3 < 0) {
          x2 = 0;
          S2 += Math.abs(u3);
        }
        E2.translate(-A2.scale * _2, -v2.scale * x2);
        w2.transform(A2.scale, 0, 0, v2.scale, 0, 0);
        E2.save();
        this.clipBbox(w2, _2, x2, T2, S2);
        w2.baseTransform = (0, s2.getCurrentTransform)(w2.ctx);
        w2.executeOperatorList(e3);
        w2.endDrawing();
        return { canvas: y2.canvas, scaleX: A2.scale, scaleY: v2.scale, offsetX: _2, offsetY: x2 };
      }
      getSizeAndScale(t3, e3, i3) {
        t3 = Math.abs(t3);
        const s3 = Math.max(TilingPattern.MAX_PATTERN_SIZE, e3);
        let n3 = Math.ceil(t3 * i3);
        n3 >= s3 ? n3 = s3 : i3 = n3 / t3;
        return { scale: i3, size: n3 };
      }
      clipBbox(t3, e3, i3, n3, a3) {
        const r3 = n3 - e3, o3 = a3 - i3;
        t3.ctx.rect(e3, i3, r3, o3);
        t3.current.updateRectMinMax((0, s2.getCurrentTransform)(t3.ctx), [e3, i3, n3, a3]);
        t3.clip();
        t3.endPath();
      }
      setFillAndStrokeStyleToContext(t3, e3, s3) {
        const n3 = t3.ctx, a3 = t3.current;
        switch (e3) {
          case o2:
            const t4 = this.ctx;
            n3.fillStyle = t4.fillStyle;
            n3.strokeStyle = t4.strokeStyle;
            a3.fillColor = t4.fillStyle;
            a3.strokeColor = t4.strokeStyle;
            break;
          case l2:
            const r3 = i2.Util.makeHexColor(s3[0], s3[1], s3[2]);
            n3.fillStyle = r3;
            n3.strokeStyle = r3;
            a3.fillColor = r3;
            a3.strokeColor = r3;
            break;
          default:
            throw new i2.FormatError(`Unsupported paint type: ${e3}`);
        }
      }
      getPattern(t3, e3, s3, n3) {
        let a3 = s3;
        if (n3 !== r2) {
          a3 = i2.Util.transform(a3, e3.baseTransform);
          this.matrix && (a3 = i2.Util.transform(a3, this.matrix));
        }
        const o3 = this.createPatternCanvas(e3);
        let l3 = new DOMMatrix(a3);
        l3 = l3.translate(o3.offsetX, o3.offsetY);
        l3 = l3.scale(1 / o3.scaleX, 1 / o3.scaleY);
        const h3 = t3.createPattern(o3.canvas, "repeat");
        h3.setTransform(l3);
        return h3;
      }
    }
    function convertBlackAndWhiteToRGBA({ src: t3, srcPos: e3 = 0, dest: s3, width: n3, height: a3, nonBlackColor: r3 = 4294967295, inverseDecode: o3 = false }) {
      const l3 = i2.FeatureTest.isLittleEndian ? 4278190080 : 255, [h3, d3] = o3 ? [r3, l3] : [l3, r3], c3 = n3 >> 3, u3 = 7 & n3, p3 = t3.length;
      s3 = new Uint32Array(s3.buffer);
      let g3 = 0;
      for (let i3 = 0; i3 < a3; i3++) {
        for (const i5 = e3 + c3; e3 < i5; e3++) {
          const i6 = e3 < p3 ? t3[e3] : 255;
          s3[g3++] = 128 & i6 ? d3 : h3;
          s3[g3++] = 64 & i6 ? d3 : h3;
          s3[g3++] = 32 & i6 ? d3 : h3;
          s3[g3++] = 16 & i6 ? d3 : h3;
          s3[g3++] = 8 & i6 ? d3 : h3;
          s3[g3++] = 4 & i6 ? d3 : h3;
          s3[g3++] = 2 & i6 ? d3 : h3;
          s3[g3++] = 1 & i6 ? d3 : h3;
        }
        if (0 === u3) continue;
        const i4 = e3 < p3 ? t3[e3++] : 255;
        for (let t4 = 0; t4 < u3; t4++) s3[g3++] = i4 & 1 << 7 - t4 ? d3 : h3;
      }
      return { srcPos: e3, destPos: g3 };
    }
    const h2 = 4096, d2 = 16;
    class CachedCanvases {
      constructor(t3) {
        this.canvasFactory = t3;
        this.cache = /* @__PURE__ */ Object.create(null);
      }
      getCanvas(t3, e3, i3) {
        let s3;
        if (void 0 !== this.cache[t3]) {
          s3 = this.cache[t3];
          this.canvasFactory.reset(s3, e3, i3);
        } else {
          s3 = this.canvasFactory.create(e3, i3);
          this.cache[t3] = s3;
        }
        return s3;
      }
      delete(t3) {
        delete this.cache[t3];
      }
      clear() {
        for (const t3 in this.cache) {
          const e3 = this.cache[t3];
          this.canvasFactory.destroy(e3);
          delete this.cache[t3];
        }
      }
    }
    function drawImageAtIntegerCoords(t3, e3, i3, n3, a3, r3, o3, l3, h3, d3) {
      const [c3, u3, p3, g3, m2, f2] = (0, s2.getCurrentTransform)(t3);
      if (0 === u3 && 0 === p3) {
        const s3 = o3 * c3 + m2, b2 = Math.round(s3), A2 = l3 * g3 + f2, v2 = Math.round(A2), y2 = (o3 + h3) * c3 + m2, E2 = Math.abs(Math.round(y2) - b2) || 1, w2 = (l3 + d3) * g3 + f2, _2 = Math.abs(Math.round(w2) - v2) || 1;
        t3.setTransform(Math.sign(c3), 0, 0, Math.sign(g3), b2, v2);
        t3.drawImage(e3, i3, n3, a3, r3, 0, 0, E2, _2);
        t3.setTransform(c3, u3, p3, g3, m2, f2);
        return [E2, _2];
      }
      if (0 === c3 && 0 === g3) {
        const s3 = l3 * p3 + m2, b2 = Math.round(s3), A2 = o3 * u3 + f2, v2 = Math.round(A2), y2 = (l3 + d3) * p3 + m2, E2 = Math.abs(Math.round(y2) - b2) || 1, w2 = (o3 + h3) * u3 + f2, _2 = Math.abs(Math.round(w2) - v2) || 1;
        t3.setTransform(0, Math.sign(u3), Math.sign(p3), 0, b2, v2);
        t3.drawImage(e3, i3, n3, a3, r3, 0, 0, _2, E2);
        t3.setTransform(c3, u3, p3, g3, m2, f2);
        return [_2, E2];
      }
      t3.drawImage(e3, i3, n3, a3, r3, o3, l3, h3, d3);
      return [Math.hypot(c3, u3) * h3, Math.hypot(p3, g3) * d3];
    }
    class CanvasExtraState {
      constructor(t3, e3) {
        this.alphaIsShape = false;
        this.fontSize = 0;
        this.fontSizeScale = 1;
        this.textMatrix = i2.IDENTITY_MATRIX;
        this.textMatrixScale = 1;
        this.fontMatrix = i2.FONT_IDENTITY_MATRIX;
        this.leading = 0;
        this.x = 0;
        this.y = 0;
        this.lineX = 0;
        this.lineY = 0;
        this.charSpacing = 0;
        this.wordSpacing = 0;
        this.textHScale = 1;
        this.textRenderingMode = i2.TextRenderingMode.FILL;
        this.textRise = 0;
        this.fillColor = "#000000";
        this.strokeColor = "#000000";
        this.patternFill = false;
        this.fillAlpha = 1;
        this.strokeAlpha = 1;
        this.lineWidth = 1;
        this.activeSMask = null;
        this.transferMaps = "none";
        this.startNewPathAndClipBox([0, 0, t3, e3]);
      }
      clone() {
        const t3 = Object.create(this);
        t3.clipBox = this.clipBox.slice();
        return t3;
      }
      setCurrentPoint(t3, e3) {
        this.x = t3;
        this.y = e3;
      }
      updatePathMinMax(t3, e3, s3) {
        [e3, s3] = i2.Util.applyTransform([e3, s3], t3);
        this.minX = Math.min(this.minX, e3);
        this.minY = Math.min(this.minY, s3);
        this.maxX = Math.max(this.maxX, e3);
        this.maxY = Math.max(this.maxY, s3);
      }
      updateRectMinMax(t3, e3) {
        const s3 = i2.Util.applyTransform(e3, t3), n3 = i2.Util.applyTransform(e3.slice(2), t3), a3 = i2.Util.applyTransform([e3[0], e3[3]], t3), r3 = i2.Util.applyTransform([e3[2], e3[1]], t3);
        this.minX = Math.min(this.minX, s3[0], n3[0], a3[0], r3[0]);
        this.minY = Math.min(this.minY, s3[1], n3[1], a3[1], r3[1]);
        this.maxX = Math.max(this.maxX, s3[0], n3[0], a3[0], r3[0]);
        this.maxY = Math.max(this.maxY, s3[1], n3[1], a3[1], r3[1]);
      }
      updateScalingPathMinMax(t3, e3) {
        i2.Util.scaleMinMax(t3, e3);
        this.minX = Math.min(this.minX, e3[0]);
        this.minY = Math.min(this.minY, e3[1]);
        this.maxX = Math.max(this.maxX, e3[2]);
        this.maxY = Math.max(this.maxY, e3[3]);
      }
      updateCurvePathMinMax(t3, e3, s3, n3, a3, r3, o3, l3, h3, d3) {
        const c3 = i2.Util.bezierBoundingBox(e3, s3, n3, a3, r3, o3, l3, h3, d3);
        d3 || this.updateRectMinMax(t3, c3);
      }
      getPathBoundingBox(t3 = n2, e3 = null) {
        const s3 = [this.minX, this.minY, this.maxX, this.maxY];
        if (t3 === a2) {
          e3 || (0, i2.unreachable)("Stroke bounding box must include transform.");
          const t4 = i2.Util.singularValueDecompose2dScale(e3), n3 = t4[0] * this.lineWidth / 2, a3 = t4[1] * this.lineWidth / 2;
          s3[0] -= n3;
          s3[1] -= a3;
          s3[2] += n3;
          s3[3] += a3;
        }
        return s3;
      }
      updateClipFromPath() {
        const t3 = i2.Util.intersect(this.clipBox, this.getPathBoundingBox());
        this.startNewPathAndClipBox(t3 || [0, 0, 0, 0]);
      }
      isEmptyClip() {
        return this.minX === 1 / 0;
      }
      startNewPathAndClipBox(t3) {
        this.clipBox = t3;
        this.minX = 1 / 0;
        this.minY = 1 / 0;
        this.maxX = 0;
        this.maxY = 0;
      }
      getClippedPathBoundingBox(t3 = n2, e3 = null) {
        return i2.Util.intersect(this.clipBox, this.getPathBoundingBox(t3, e3));
      }
    }
    function putBinaryImageData(t3, e3) {
      if ("undefined" != typeof ImageData && e3 instanceof ImageData) {
        t3.putImageData(e3, 0, 0);
        return;
      }
      const s3 = e3.height, n3 = e3.width, a3 = s3 % d2, r3 = (s3 - a3) / d2, o3 = 0 === a3 ? r3 : r3 + 1, l3 = t3.createImageData(n3, d2);
      let h3, c3 = 0;
      const u3 = e3.data, p3 = l3.data;
      let g3, m2, f2, b2;
      if (e3.kind === i2.ImageKind.GRAYSCALE_1BPP) {
        const e4 = u3.byteLength, s4 = new Uint32Array(p3.buffer, 0, p3.byteLength >> 2), b3 = s4.length, A2 = n3 + 7 >> 3, v2 = 4294967295, y2 = i2.FeatureTest.isLittleEndian ? 4278190080 : 255;
        for (g3 = 0; g3 < o3; g3++) {
          f2 = g3 < r3 ? d2 : a3;
          h3 = 0;
          for (m2 = 0; m2 < f2; m2++) {
            const t4 = e4 - c3;
            let i3 = 0;
            const a4 = t4 > A2 ? n3 : 8 * t4 - 7, r4 = -8 & a4;
            let o4 = 0, l4 = 0;
            for (; i3 < r4; i3 += 8) {
              l4 = u3[c3++];
              s4[h3++] = 128 & l4 ? v2 : y2;
              s4[h3++] = 64 & l4 ? v2 : y2;
              s4[h3++] = 32 & l4 ? v2 : y2;
              s4[h3++] = 16 & l4 ? v2 : y2;
              s4[h3++] = 8 & l4 ? v2 : y2;
              s4[h3++] = 4 & l4 ? v2 : y2;
              s4[h3++] = 2 & l4 ? v2 : y2;
              s4[h3++] = 1 & l4 ? v2 : y2;
            }
            for (; i3 < a4; i3++) {
              if (0 === o4) {
                l4 = u3[c3++];
                o4 = 128;
              }
              s4[h3++] = l4 & o4 ? v2 : y2;
              o4 >>= 1;
            }
          }
          for (; h3 < b3; ) s4[h3++] = 0;
          t3.putImageData(l3, 0, g3 * d2);
        }
      } else if (e3.kind === i2.ImageKind.RGBA_32BPP) {
        m2 = 0;
        b2 = n3 * d2 * 4;
        for (g3 = 0; g3 < r3; g3++) {
          p3.set(u3.subarray(c3, c3 + b2));
          c3 += b2;
          t3.putImageData(l3, 0, m2);
          m2 += d2;
        }
        if (g3 < o3) {
          b2 = n3 * a3 * 4;
          p3.set(u3.subarray(c3, c3 + b2));
          t3.putImageData(l3, 0, m2);
        }
      } else {
        if (e3.kind !== i2.ImageKind.RGB_24BPP) throw new Error(`bad image kind: ${e3.kind}`);
        f2 = d2;
        b2 = n3 * f2;
        for (g3 = 0; g3 < o3; g3++) {
          if (g3 >= r3) {
            f2 = a3;
            b2 = n3 * f2;
          }
          h3 = 0;
          for (m2 = b2; m2--; ) {
            p3[h3++] = u3[c3++];
            p3[h3++] = u3[c3++];
            p3[h3++] = u3[c3++];
            p3[h3++] = 255;
          }
          t3.putImageData(l3, 0, g3 * d2);
        }
      }
    }
    function putBinaryImageMask(t3, e3) {
      if (e3.bitmap) {
        t3.drawImage(e3.bitmap, 0, 0);
        return;
      }
      const i3 = e3.height, s3 = e3.width, n3 = i3 % d2, a3 = (i3 - n3) / d2, r3 = 0 === n3 ? a3 : a3 + 1, o3 = t3.createImageData(s3, d2);
      let l3 = 0;
      const h3 = e3.data, c3 = o3.data;
      for (let e4 = 0; e4 < r3; e4++) {
        const i4 = e4 < a3 ? d2 : n3;
        ({ srcPos: l3 } = convertBlackAndWhiteToRGBA({ src: h3, srcPos: l3, dest: c3, width: s3, height: i4, nonBlackColor: 0 }));
        t3.putImageData(o3, 0, e4 * d2);
      }
    }
    function copyCtxState(t3, e3) {
      const i3 = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
      for (const s3 of i3) void 0 !== t3[s3] && (e3[s3] = t3[s3]);
      if (void 0 !== t3.setLineDash) {
        e3.setLineDash(t3.getLineDash());
        e3.lineDashOffset = t3.lineDashOffset;
      }
    }
    function resetCtxToDefault(t3) {
      t3.strokeStyle = t3.fillStyle = "#000000";
      t3.fillRule = "nonzero";
      t3.globalAlpha = 1;
      t3.lineWidth = 1;
      t3.lineCap = "butt";
      t3.lineJoin = "miter";
      t3.miterLimit = 10;
      t3.globalCompositeOperation = "source-over";
      t3.font = "10px sans-serif";
      if (void 0 !== t3.setLineDash) {
        t3.setLineDash([]);
        t3.lineDashOffset = 0;
      }
      if (!i2.isNodeJS) {
        const { filter: e3 } = t3;
        "none" !== e3 && "" !== e3 && (t3.filter = "none");
      }
    }
    function composeSMaskBackdrop(t3, e3, i3, s3) {
      const n3 = t3.length;
      for (let a3 = 3; a3 < n3; a3 += 4) {
        const n4 = t3[a3];
        if (0 === n4) {
          t3[a3 - 3] = e3;
          t3[a3 - 2] = i3;
          t3[a3 - 1] = s3;
        } else if (n4 < 255) {
          const r3 = 255 - n4;
          t3[a3 - 3] = t3[a3 - 3] * n4 + e3 * r3 >> 8;
          t3[a3 - 2] = t3[a3 - 2] * n4 + i3 * r3 >> 8;
          t3[a3 - 1] = t3[a3 - 1] * n4 + s3 * r3 >> 8;
        }
      }
    }
    function composeSMaskAlpha(t3, e3, i3) {
      const s3 = t3.length;
      for (let n3 = 3; n3 < s3; n3 += 4) {
        const s4 = i3 ? i3[t3[n3]] : t3[n3];
        e3[n3] = e3[n3] * s4 * 0.00392156862745098 | 0;
      }
    }
    function composeSMaskLuminosity(t3, e3, i3) {
      const s3 = t3.length;
      for (let n3 = 3; n3 < s3; n3 += 4) {
        const s4 = 77 * t3[n3 - 3] + 152 * t3[n3 - 2] + 28 * t3[n3 - 1];
        e3[n3] = i3 ? e3[n3] * i3[s4 >> 8] >> 8 : e3[n3] * s4 >> 16;
      }
    }
    function composeSMask(t3, e3, i3, s3) {
      const n3 = s3[0], a3 = s3[1], r3 = s3[2] - n3, o3 = s3[3] - a3;
      if (0 !== r3 && 0 !== o3) {
        !(function genericComposeSMask(t4, e4, i4, s4, n4, a4, r4, o4, l3, h3, d3) {
          const c3 = !!a4, u3 = c3 ? a4[0] : 0, p3 = c3 ? a4[1] : 0, g3 = c3 ? a4[2] : 0, m2 = "Luminosity" === n4 ? composeSMaskLuminosity : composeSMaskAlpha, f2 = Math.min(s4, Math.ceil(1048576 / i4));
          for (let n5 = 0; n5 < s4; n5 += f2) {
            const a5 = Math.min(f2, s4 - n5), b2 = t4.getImageData(o4 - h3, n5 + (l3 - d3), i4, a5), A2 = e4.getImageData(o4, n5 + l3, i4, a5);
            c3 && composeSMaskBackdrop(b2.data, u3, p3, g3);
            m2(b2.data, A2.data, r4);
            e4.putImageData(A2, o4, n5 + l3);
          }
        })(e3.context, i3, r3, o3, e3.subtype, e3.backdrop, e3.transferMap, n3, a3, e3.offsetX, e3.offsetY);
        t3.save();
        t3.globalAlpha = 1;
        t3.globalCompositeOperation = "source-over";
        t3.setTransform(1, 0, 0, 1, 0, 0);
        t3.drawImage(i3.canvas, 0, 0);
        t3.restore();
      }
    }
    function getImageSmoothingEnabled(t3, e3) {
      if (e3) return true;
      const n3 = i2.Util.singularValueDecompose2dScale(t3);
      n3[0] = Math.fround(n3[0]);
      n3[1] = Math.fround(n3[1]);
      const a3 = Math.fround((globalThis.devicePixelRatio || 1) * s2.PixelsPerInch.PDF_TO_CSS_UNITS);
      return n3[0] <= a3 && n3[1] <= a3;
    }
    const c2 = ["butt", "round", "square"], u2 = ["miter", "round", "bevel"], p2 = {}, g2 = {};
    class CanvasGraphics {
      constructor(t3, e3, i3, s3, n3, { optionalContentConfig: a3, markedContentStack: r3 = null }, o3, l3) {
        this.ctx = t3;
        this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
        this.stateStack = [];
        this.pendingClip = null;
        this.pendingEOFill = false;
        this.res = null;
        this.xobjs = null;
        this.commonObjs = e3;
        this.objs = i3;
        this.canvasFactory = s3;
        this.filterFactory = n3;
        this.groupStack = [];
        this.processingType3 = null;
        this.baseTransform = null;
        this.baseTransformStack = [];
        this.groupLevel = 0;
        this.smaskStack = [];
        this.smaskCounter = 0;
        this.tempSMask = null;
        this.suspendedCtx = null;
        this.contentVisible = true;
        this.markedContentStack = r3 || [];
        this.optionalContentConfig = a3;
        this.cachedCanvases = new CachedCanvases(this.canvasFactory);
        this.cachedPatterns = /* @__PURE__ */ new Map();
        this.annotationCanvasMap = o3;
        this.viewportScale = 1;
        this.outputScaleX = 1;
        this.outputScaleY = 1;
        this.pageColors = l3;
        this._cachedScaleForStroking = [-1, 0];
        this._cachedGetSinglePixelWidth = null;
        this._cachedBitmapsMap = /* @__PURE__ */ new Map();
      }
      getObject(t3, e3 = null) {
        return "string" == typeof t3 ? t3.startsWith("g_") ? this.commonObjs.get(t3) : this.objs.get(t3) : e3;
      }
      beginDrawing({ transform: t3, viewport: e3, transparency: i3 = false, background: n3 = null }) {
        const a3 = this.ctx.canvas.width, r3 = this.ctx.canvas.height, o3 = this.ctx.fillStyle;
        this.ctx.fillStyle = n3 || "#ffffff";
        this.ctx.fillRect(0, 0, a3, r3);
        this.ctx.fillStyle = o3;
        if (i3) {
          const t4 = this.cachedCanvases.getCanvas("transparent", a3, r3);
          this.compositeCtx = this.ctx;
          this.transparentCanvas = t4.canvas;
          this.ctx = t4.context;
          this.ctx.save();
          this.ctx.transform(...(0, s2.getCurrentTransform)(this.compositeCtx));
        }
        this.ctx.save();
        resetCtxToDefault(this.ctx);
        if (t3) {
          this.ctx.transform(...t3);
          this.outputScaleX = t3[0];
          this.outputScaleY = t3[0];
        }
        this.ctx.transform(...e3.transform);
        this.viewportScale = e3.scale;
        this.baseTransform = (0, s2.getCurrentTransform)(this.ctx);
      }
      executeOperatorList(t3, e3, s3, n3) {
        const a3 = t3.argsArray, r3 = t3.fnArray;
        let o3 = e3 || 0;
        const l3 = a3.length;
        if (l3 === o3) return o3;
        const h3 = l3 - o3 > 10 && "function" == typeof s3, d3 = h3 ? Date.now() + 15 : 0;
        let c3 = 0;
        const u3 = this.commonObjs, p3 = this.objs;
        let g3;
        for (; ; ) {
          if (void 0 !== n3 && o3 === n3.nextBreakPoint) {
            n3.breakIt(o3, s3);
            return o3;
          }
          g3 = r3[o3];
          if (g3 !== i2.OPS.dependency) this[g3].apply(this, a3[o3]);
          else for (const t4 of a3[o3]) {
            const e4 = t4.startsWith("g_") ? u3 : p3;
            if (!e4.has(t4)) {
              e4.get(t4, s3);
              return o3;
            }
          }
          o3++;
          if (o3 === l3) return o3;
          if (h3 && ++c3 > 10) {
            if (Date.now() > d3) {
              s3();
              return o3;
            }
            c3 = 0;
          }
        }
      }
      #lt() {
        for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
        this.ctx.restore();
        if (this.transparentCanvas) {
          this.ctx = this.compositeCtx;
          this.ctx.save();
          this.ctx.setTransform(1, 0, 0, 1, 0, 0);
          this.ctx.drawImage(this.transparentCanvas, 0, 0);
          this.ctx.restore();
          this.transparentCanvas = null;
        }
      }
      endDrawing() {
        this.#lt();
        this.cachedCanvases.clear();
        this.cachedPatterns.clear();
        for (const t3 of this._cachedBitmapsMap.values()) {
          for (const e3 of t3.values()) "undefined" != typeof HTMLCanvasElement && e3 instanceof HTMLCanvasElement && (e3.width = e3.height = 0);
          t3.clear();
        }
        this._cachedBitmapsMap.clear();
        this.#ht();
      }
      #ht() {
        if (this.pageColors) {
          const t3 = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
          if ("none" !== t3) {
            const e3 = this.ctx.filter;
            this.ctx.filter = t3;
            this.ctx.drawImage(this.ctx.canvas, 0, 0);
            this.ctx.filter = e3;
          }
        }
      }
      _scaleImage(t3, e3) {
        const i3 = t3.width, s3 = t3.height;
        let n3, a3, r3 = Math.max(Math.hypot(e3[0], e3[1]), 1), o3 = Math.max(Math.hypot(e3[2], e3[3]), 1), l3 = i3, h3 = s3, d3 = "prescale1";
        for (; r3 > 2 && l3 > 1 || o3 > 2 && h3 > 1; ) {
          let e4 = l3, i4 = h3;
          if (r3 > 2 && l3 > 1) {
            e4 = l3 >= 16384 ? Math.floor(l3 / 2) - 1 || 1 : Math.ceil(l3 / 2);
            r3 /= l3 / e4;
          }
          if (o3 > 2 && h3 > 1) {
            i4 = h3 >= 16384 ? Math.floor(h3 / 2) - 1 || 1 : Math.ceil(h3) / 2;
            o3 /= h3 / i4;
          }
          n3 = this.cachedCanvases.getCanvas(d3, e4, i4);
          a3 = n3.context;
          a3.clearRect(0, 0, e4, i4);
          a3.drawImage(t3, 0, 0, l3, h3, 0, 0, e4, i4);
          t3 = n3.canvas;
          l3 = e4;
          h3 = i4;
          d3 = "prescale1" === d3 ? "prescale2" : "prescale1";
        }
        return { img: t3, paintWidth: l3, paintHeight: h3 };
      }
      _createMaskCanvas(t3) {
        const e3 = this.ctx, { width: a3, height: r3 } = t3, o3 = this.current.fillColor, l3 = this.current.patternFill, h3 = (0, s2.getCurrentTransform)(e3);
        let d3, c3, u3, p3;
        if ((t3.bitmap || t3.data) && t3.count > 1) {
          const e4 = t3.bitmap || t3.data.buffer;
          c3 = JSON.stringify(l3 ? h3 : [h3.slice(0, 4), o3]);
          d3 = this._cachedBitmapsMap.get(e4);
          if (!d3) {
            d3 = /* @__PURE__ */ new Map();
            this._cachedBitmapsMap.set(e4, d3);
          }
          const i3 = d3.get(c3);
          if (i3 && !l3) {
            return { canvas: i3, offsetX: Math.round(Math.min(h3[0], h3[2]) + h3[4]), offsetY: Math.round(Math.min(h3[1], h3[3]) + h3[5]) };
          }
          u3 = i3;
        }
        if (!u3) {
          p3 = this.cachedCanvases.getCanvas("maskCanvas", a3, r3);
          putBinaryImageMask(p3.context, t3);
        }
        let g3 = i2.Util.transform(h3, [1 / a3, 0, 0, -1 / r3, 0, 0]);
        g3 = i2.Util.transform(g3, [1, 0, 0, 1, 0, -r3]);
        const [m2, f2, b2, A2] = i2.Util.getAxialAlignedBoundingBox([0, 0, a3, r3], g3), v2 = Math.round(b2 - m2) || 1, y2 = Math.round(A2 - f2) || 1, E2 = this.cachedCanvases.getCanvas("fillCanvas", v2, y2), w2 = E2.context, _2 = m2, x2 = f2;
        w2.translate(-_2, -x2);
        w2.transform(...g3);
        if (!u3) {
          u3 = this._scaleImage(p3.canvas, (0, s2.getCurrentTransformInverse)(w2));
          u3 = u3.img;
          d3 && l3 && d3.set(c3, u3);
        }
        w2.imageSmoothingEnabled = getImageSmoothingEnabled((0, s2.getCurrentTransform)(w2), t3.interpolate);
        drawImageAtIntegerCoords(w2, u3, 0, 0, u3.width, u3.height, 0, 0, a3, r3);
        w2.globalCompositeOperation = "source-in";
        const T2 = i2.Util.transform((0, s2.getCurrentTransformInverse)(w2), [1, 0, 0, 1, -_2, -x2]);
        w2.fillStyle = l3 ? o3.getPattern(e3, this, T2, n2) : o3;
        w2.fillRect(0, 0, a3, r3);
        if (d3 && !l3) {
          this.cachedCanvases.delete("fillCanvas");
          d3.set(c3, E2.canvas);
        }
        return { canvas: E2.canvas, offsetX: Math.round(_2), offsetY: Math.round(x2) };
      }
      setLineWidth(t3) {
        t3 !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1);
        this.current.lineWidth = t3;
        this.ctx.lineWidth = t3;
      }
      setLineCap(t3) {
        this.ctx.lineCap = c2[t3];
      }
      setLineJoin(t3) {
        this.ctx.lineJoin = u2[t3];
      }
      setMiterLimit(t3) {
        this.ctx.miterLimit = t3;
      }
      setDash(t3, e3) {
        const i3 = this.ctx;
        if (void 0 !== i3.setLineDash) {
          i3.setLineDash(t3);
          i3.lineDashOffset = e3;
        }
      }
      setRenderingIntent(t3) {
      }
      setFlatness(t3) {
      }
      setGState(t3) {
        for (const [e3, i3] of t3) switch (e3) {
          case "LW":
            this.setLineWidth(i3);
            break;
          case "LC":
            this.setLineCap(i3);
            break;
          case "LJ":
            this.setLineJoin(i3);
            break;
          case "ML":
            this.setMiterLimit(i3);
            break;
          case "D":
            this.setDash(i3[0], i3[1]);
            break;
          case "RI":
            this.setRenderingIntent(i3);
            break;
          case "FL":
            this.setFlatness(i3);
            break;
          case "Font":
            this.setFont(i3[0], i3[1]);
            break;
          case "CA":
            this.current.strokeAlpha = i3;
            break;
          case "ca":
            this.current.fillAlpha = i3;
            this.ctx.globalAlpha = i3;
            break;
          case "BM":
            this.ctx.globalCompositeOperation = i3;
            break;
          case "SMask":
            this.current.activeSMask = i3 ? this.tempSMask : null;
            this.tempSMask = null;
            this.checkSMaskState();
            break;
          case "TR":
            this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(i3);
        }
      }
      get inSMaskMode() {
        return !!this.suspendedCtx;
      }
      checkSMaskState() {
        const t3 = this.inSMaskMode;
        this.current.activeSMask && !t3 ? this.beginSMaskMode() : !this.current.activeSMask && t3 && this.endSMaskMode();
      }
      beginSMaskMode() {
        if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
        const t3 = this.ctx.canvas.width, e3 = this.ctx.canvas.height, i3 = "smaskGroupAt" + this.groupLevel, n3 = this.cachedCanvases.getCanvas(i3, t3, e3);
        this.suspendedCtx = this.ctx;
        this.ctx = n3.context;
        const a3 = this.ctx;
        a3.setTransform(...(0, s2.getCurrentTransform)(this.suspendedCtx));
        copyCtxState(this.suspendedCtx, a3);
        !(function mirrorContextOperations(t4, e4) {
          if (t4._removeMirroring) throw new Error("Context is already forwarding operations.");
          t4.__originalSave = t4.save;
          t4.__originalRestore = t4.restore;
          t4.__originalRotate = t4.rotate;
          t4.__originalScale = t4.scale;
          t4.__originalTranslate = t4.translate;
          t4.__originalTransform = t4.transform;
          t4.__originalSetTransform = t4.setTransform;
          t4.__originalResetTransform = t4.resetTransform;
          t4.__originalClip = t4.clip;
          t4.__originalMoveTo = t4.moveTo;
          t4.__originalLineTo = t4.lineTo;
          t4.__originalBezierCurveTo = t4.bezierCurveTo;
          t4.__originalRect = t4.rect;
          t4.__originalClosePath = t4.closePath;
          t4.__originalBeginPath = t4.beginPath;
          t4._removeMirroring = () => {
            t4.save = t4.__originalSave;
            t4.restore = t4.__originalRestore;
            t4.rotate = t4.__originalRotate;
            t4.scale = t4.__originalScale;
            t4.translate = t4.__originalTranslate;
            t4.transform = t4.__originalTransform;
            t4.setTransform = t4.__originalSetTransform;
            t4.resetTransform = t4.__originalResetTransform;
            t4.clip = t4.__originalClip;
            t4.moveTo = t4.__originalMoveTo;
            t4.lineTo = t4.__originalLineTo;
            t4.bezierCurveTo = t4.__originalBezierCurveTo;
            t4.rect = t4.__originalRect;
            t4.closePath = t4.__originalClosePath;
            t4.beginPath = t4.__originalBeginPath;
            delete t4._removeMirroring;
          };
          t4.save = function ctxSave() {
            e4.save();
            this.__originalSave();
          };
          t4.restore = function ctxRestore() {
            e4.restore();
            this.__originalRestore();
          };
          t4.translate = function ctxTranslate(t5, i4) {
            e4.translate(t5, i4);
            this.__originalTranslate(t5, i4);
          };
          t4.scale = function ctxScale(t5, i4) {
            e4.scale(t5, i4);
            this.__originalScale(t5, i4);
          };
          t4.transform = function ctxTransform(t5, i4, s3, n4, a4, r3) {
            e4.transform(t5, i4, s3, n4, a4, r3);
            this.__originalTransform(t5, i4, s3, n4, a4, r3);
          };
          t4.setTransform = function ctxSetTransform(t5, i4, s3, n4, a4, r3) {
            e4.setTransform(t5, i4, s3, n4, a4, r3);
            this.__originalSetTransform(t5, i4, s3, n4, a4, r3);
          };
          t4.resetTransform = function ctxResetTransform() {
            e4.resetTransform();
            this.__originalResetTransform();
          };
          t4.rotate = function ctxRotate(t5) {
            e4.rotate(t5);
            this.__originalRotate(t5);
          };
          t4.clip = function ctxRotate(t5) {
            e4.clip(t5);
            this.__originalClip(t5);
          };
          t4.moveTo = function(t5, i4) {
            e4.moveTo(t5, i4);
            this.__originalMoveTo(t5, i4);
          };
          t4.lineTo = function(t5, i4) {
            e4.lineTo(t5, i4);
            this.__originalLineTo(t5, i4);
          };
          t4.bezierCurveTo = function(t5, i4, s3, n4, a4, r3) {
            e4.bezierCurveTo(t5, i4, s3, n4, a4, r3);
            this.__originalBezierCurveTo(t5, i4, s3, n4, a4, r3);
          };
          t4.rect = function(t5, i4, s3, n4) {
            e4.rect(t5, i4, s3, n4);
            this.__originalRect(t5, i4, s3, n4);
          };
          t4.closePath = function() {
            e4.closePath();
            this.__originalClosePath();
          };
          t4.beginPath = function() {
            e4.beginPath();
            this.__originalBeginPath();
          };
        })(a3, this.suspendedCtx);
        this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
      }
      endSMaskMode() {
        if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
        this.ctx._removeMirroring();
        copyCtxState(this.ctx, this.suspendedCtx);
        this.ctx = this.suspendedCtx;
        this.suspendedCtx = null;
      }
      compose(t3) {
        if (!this.current.activeSMask) return;
        if (t3) {
          t3[0] = Math.floor(t3[0]);
          t3[1] = Math.floor(t3[1]);
          t3[2] = Math.ceil(t3[2]);
          t3[3] = Math.ceil(t3[3]);
        } else t3 = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
        const e3 = this.current.activeSMask;
        composeSMask(this.suspendedCtx, e3, this.ctx, t3);
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.restore();
      }
      save() {
        if (this.inSMaskMode) {
          copyCtxState(this.ctx, this.suspendedCtx);
          this.suspendedCtx.save();
        } else this.ctx.save();
        const t3 = this.current;
        this.stateStack.push(t3);
        this.current = t3.clone();
      }
      restore() {
        0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode();
        if (0 !== this.stateStack.length) {
          this.current = this.stateStack.pop();
          if (this.inSMaskMode) {
            this.suspendedCtx.restore();
            copyCtxState(this.suspendedCtx, this.ctx);
          } else this.ctx.restore();
          this.checkSMaskState();
          this.pendingClip = null;
          this._cachedScaleForStroking[0] = -1;
          this._cachedGetSinglePixelWidth = null;
        }
      }
      transform(t3, e3, i3, s3, n3, a3) {
        this.ctx.transform(t3, e3, i3, s3, n3, a3);
        this._cachedScaleForStroking[0] = -1;
        this._cachedGetSinglePixelWidth = null;
      }
      constructPath(t3, e3, n3) {
        const a3 = this.ctx, r3 = this.current;
        let o3, l3, h3 = r3.x, d3 = r3.y;
        const c3 = (0, s2.getCurrentTransform)(a3), u3 = 0 === c3[0] && 0 === c3[3] || 0 === c3[1] && 0 === c3[2], p3 = u3 ? n3.slice(0) : null;
        for (let s3 = 0, n4 = 0, g3 = t3.length; s3 < g3; s3++) switch (0 | t3[s3]) {
          case i2.OPS.rectangle:
            h3 = e3[n4++];
            d3 = e3[n4++];
            const t4 = e3[n4++], s4 = e3[n4++], g4 = h3 + t4, m2 = d3 + s4;
            a3.moveTo(h3, d3);
            if (0 === t4 || 0 === s4) a3.lineTo(g4, m2);
            else {
              a3.lineTo(g4, d3);
              a3.lineTo(g4, m2);
              a3.lineTo(h3, m2);
            }
            u3 || r3.updateRectMinMax(c3, [h3, d3, g4, m2]);
            a3.closePath();
            break;
          case i2.OPS.moveTo:
            h3 = e3[n4++];
            d3 = e3[n4++];
            a3.moveTo(h3, d3);
            u3 || r3.updatePathMinMax(c3, h3, d3);
            break;
          case i2.OPS.lineTo:
            h3 = e3[n4++];
            d3 = e3[n4++];
            a3.lineTo(h3, d3);
            u3 || r3.updatePathMinMax(c3, h3, d3);
            break;
          case i2.OPS.curveTo:
            o3 = h3;
            l3 = d3;
            h3 = e3[n4 + 4];
            d3 = e3[n4 + 5];
            a3.bezierCurveTo(e3[n4], e3[n4 + 1], e3[n4 + 2], e3[n4 + 3], h3, d3);
            r3.updateCurvePathMinMax(c3, o3, l3, e3[n4], e3[n4 + 1], e3[n4 + 2], e3[n4 + 3], h3, d3, p3);
            n4 += 6;
            break;
          case i2.OPS.curveTo2:
            o3 = h3;
            l3 = d3;
            a3.bezierCurveTo(h3, d3, e3[n4], e3[n4 + 1], e3[n4 + 2], e3[n4 + 3]);
            r3.updateCurvePathMinMax(c3, o3, l3, h3, d3, e3[n4], e3[n4 + 1], e3[n4 + 2], e3[n4 + 3], p3);
            h3 = e3[n4 + 2];
            d3 = e3[n4 + 3];
            n4 += 4;
            break;
          case i2.OPS.curveTo3:
            o3 = h3;
            l3 = d3;
            h3 = e3[n4 + 2];
            d3 = e3[n4 + 3];
            a3.bezierCurveTo(e3[n4], e3[n4 + 1], h3, d3, h3, d3);
            r3.updateCurvePathMinMax(c3, o3, l3, e3[n4], e3[n4 + 1], h3, d3, h3, d3, p3);
            n4 += 4;
            break;
          case i2.OPS.closePath:
            a3.closePath();
        }
        u3 && r3.updateScalingPathMinMax(c3, p3);
        r3.setCurrentPoint(h3, d3);
      }
      closePath() {
        this.ctx.closePath();
      }
      stroke(t3 = true) {
        const e3 = this.ctx, i3 = this.current.strokeColor;
        e3.globalAlpha = this.current.strokeAlpha;
        if (this.contentVisible) if ("object" == typeof i3 && i3?.getPattern) {
          e3.save();
          e3.strokeStyle = i3.getPattern(e3, this, (0, s2.getCurrentTransformInverse)(e3), a2);
          this.rescaleAndStroke(false);
          e3.restore();
        } else this.rescaleAndStroke(true);
        t3 && this.consumePath(this.current.getClippedPathBoundingBox());
        e3.globalAlpha = this.current.fillAlpha;
      }
      closeStroke() {
        this.closePath();
        this.stroke();
      }
      fill(t3 = true) {
        const e3 = this.ctx, i3 = this.current.fillColor;
        let a3 = false;
        if (this.current.patternFill) {
          e3.save();
          e3.fillStyle = i3.getPattern(e3, this, (0, s2.getCurrentTransformInverse)(e3), n2);
          a3 = true;
        }
        const r3 = this.current.getClippedPathBoundingBox();
        if (this.contentVisible && null !== r3) if (this.pendingEOFill) {
          e3.fill("evenodd");
          this.pendingEOFill = false;
        } else e3.fill();
        a3 && e3.restore();
        t3 && this.consumePath(r3);
      }
      eoFill() {
        this.pendingEOFill = true;
        this.fill();
      }
      fillStroke() {
        this.fill(false);
        this.stroke(false);
        this.consumePath();
      }
      eoFillStroke() {
        this.pendingEOFill = true;
        this.fillStroke();
      }
      closeFillStroke() {
        this.closePath();
        this.fillStroke();
      }
      closeEOFillStroke() {
        this.pendingEOFill = true;
        this.closePath();
        this.fillStroke();
      }
      endPath() {
        this.consumePath();
      }
      clip() {
        this.pendingClip = p2;
      }
      eoClip() {
        this.pendingClip = g2;
      }
      beginText() {
        this.current.textMatrix = i2.IDENTITY_MATRIX;
        this.current.textMatrixScale = 1;
        this.current.x = this.current.lineX = 0;
        this.current.y = this.current.lineY = 0;
      }
      endText() {
        const t3 = this.pendingTextPaths, e3 = this.ctx;
        if (void 0 !== t3) {
          e3.save();
          e3.beginPath();
          for (const i3 of t3) {
            e3.setTransform(...i3.transform);
            e3.translate(i3.x, i3.y);
            i3.addToPath(e3, i3.fontSize);
          }
          e3.restore();
          e3.clip();
          e3.beginPath();
          delete this.pendingTextPaths;
        } else e3.beginPath();
      }
      setCharSpacing(t3) {
        this.current.charSpacing = t3;
      }
      setWordSpacing(t3) {
        this.current.wordSpacing = t3;
      }
      setHScale(t3) {
        this.current.textHScale = t3 / 100;
      }
      setLeading(t3) {
        this.current.leading = -t3;
      }
      setFont(t3, e3) {
        const s3 = this.commonObjs.get(t3), n3 = this.current;
        if (!s3) throw new Error(`Can't find font for ${t3}`);
        n3.fontMatrix = s3.fontMatrix || i2.FONT_IDENTITY_MATRIX;
        0 !== n3.fontMatrix[0] && 0 !== n3.fontMatrix[3] || (0, i2.warn)("Invalid font matrix for font " + t3);
        if (e3 < 0) {
          e3 = -e3;
          n3.fontDirection = -1;
        } else n3.fontDirection = 1;
        this.current.font = s3;
        this.current.fontSize = e3;
        if (s3.isType3Font) return;
        const a3 = s3.loadedName || "sans-serif", r3 = s3.systemFontInfo?.css || `"${a3}", ${s3.fallbackName}`;
        let o3 = "normal";
        s3.black ? o3 = "900" : s3.bold && (o3 = "bold");
        const l3 = s3.italic ? "italic" : "normal";
        let h3 = e3;
        e3 < 16 ? h3 = 16 : e3 > 100 && (h3 = 100);
        this.current.fontSizeScale = e3 / h3;
        this.ctx.font = `${l3} ${o3} ${h3}px ${r3}`;
      }
      setTextRenderingMode(t3) {
        this.current.textRenderingMode = t3;
      }
      setTextRise(t3) {
        this.current.textRise = t3;
      }
      moveText(t3, e3) {
        this.current.x = this.current.lineX += t3;
        this.current.y = this.current.lineY += e3;
      }
      setLeadingMoveText(t3, e3) {
        this.setLeading(-e3);
        this.moveText(t3, e3);
      }
      setTextMatrix(t3, e3, i3, s3, n3, a3) {
        this.current.textMatrix = [t3, e3, i3, s3, n3, a3];
        this.current.textMatrixScale = Math.hypot(t3, e3);
        this.current.x = this.current.lineX = 0;
        this.current.y = this.current.lineY = 0;
      }
      nextLine() {
        this.moveText(0, this.current.leading);
      }
      paintChar(t3, e3, n3, a3) {
        const r3 = this.ctx, o3 = this.current, l3 = o3.font, h3 = o3.textRenderingMode, d3 = o3.fontSize / o3.fontSizeScale, c3 = h3 & i2.TextRenderingMode.FILL_STROKE_MASK, u3 = !!(h3 & i2.TextRenderingMode.ADD_TO_PATH_FLAG), p3 = o3.patternFill && !l3.missingFile;
        let g3;
        (l3.disableFontFace || u3 || p3) && (g3 = l3.getPathGenerator(this.commonObjs, t3));
        if (l3.disableFontFace || p3) {
          r3.save();
          r3.translate(e3, n3);
          r3.beginPath();
          g3(r3, d3);
          a3 && r3.setTransform(...a3);
          c3 !== i2.TextRenderingMode.FILL && c3 !== i2.TextRenderingMode.FILL_STROKE || r3.fill();
          c3 !== i2.TextRenderingMode.STROKE && c3 !== i2.TextRenderingMode.FILL_STROKE || r3.stroke();
          r3.restore();
        } else {
          c3 !== i2.TextRenderingMode.FILL && c3 !== i2.TextRenderingMode.FILL_STROKE || r3.fillText(t3, e3, n3);
          c3 !== i2.TextRenderingMode.STROKE && c3 !== i2.TextRenderingMode.FILL_STROKE || r3.strokeText(t3, e3, n3);
        }
        if (u3) {
          (this.pendingTextPaths ||= []).push({ transform: (0, s2.getCurrentTransform)(r3), x: e3, y: n3, fontSize: d3, addToPath: g3 });
        }
      }
      get isFontSubpixelAAEnabled() {
        const { context: t3 } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
        t3.scale(1.5, 1);
        t3.fillText("I", 0, 10);
        const e3 = t3.getImageData(0, 0, 10, 10).data;
        let s3 = false;
        for (let t4 = 3; t4 < e3.length; t4 += 4) if (e3[t4] > 0 && e3[t4] < 255) {
          s3 = true;
          break;
        }
        return (0, i2.shadow)(this, "isFontSubpixelAAEnabled", s3);
      }
      showText(t3) {
        const e3 = this.current, a3 = e3.font;
        if (a3.isType3Font) return this.showType3Text(t3);
        const r3 = e3.fontSize;
        if (0 === r3) return;
        const o3 = this.ctx, l3 = e3.fontSizeScale, h3 = e3.charSpacing, d3 = e3.wordSpacing, c3 = e3.fontDirection, u3 = e3.textHScale * c3, p3 = t3.length, g3 = a3.vertical, m2 = g3 ? 1 : -1, f2 = a3.defaultVMetrics, b2 = r3 * e3.fontMatrix[0], A2 = e3.textRenderingMode === i2.TextRenderingMode.FILL && !a3.disableFontFace && !e3.patternFill;
        o3.save();
        o3.transform(...e3.textMatrix);
        o3.translate(e3.x, e3.y + e3.textRise);
        c3 > 0 ? o3.scale(u3, -1) : o3.scale(u3, 1);
        let v2;
        if (e3.patternFill) {
          o3.save();
          const t4 = e3.fillColor.getPattern(o3, this, (0, s2.getCurrentTransformInverse)(o3), n2);
          v2 = (0, s2.getCurrentTransform)(o3);
          o3.restore();
          o3.fillStyle = t4;
        }
        let y2 = e3.lineWidth;
        const E2 = e3.textMatrixScale;
        if (0 === E2 || 0 === y2) {
          const t4 = e3.textRenderingMode & i2.TextRenderingMode.FILL_STROKE_MASK;
          t4 !== i2.TextRenderingMode.STROKE && t4 !== i2.TextRenderingMode.FILL_STROKE || (y2 = this.getSinglePixelWidth());
        } else y2 /= E2;
        if (1 !== l3) {
          o3.scale(l3, l3);
          y2 /= l3;
        }
        o3.lineWidth = y2;
        if (a3.isInvalidPDFjsFont) {
          const i3 = [];
          let s3 = 0;
          for (const e4 of t3) {
            i3.push(e4.unicode);
            s3 += e4.width;
          }
          o3.fillText(i3.join(""), 0, 0);
          e3.x += s3 * b2 * u3;
          o3.restore();
          this.compose();
          return;
        }
        let w2, _2 = 0;
        for (w2 = 0; w2 < p3; ++w2) {
          const e4 = t3[w2];
          if ("number" == typeof e4) {
            _2 += m2 * e4 * r3 / 1e3;
            continue;
          }
          let i3 = false;
          const s3 = (e4.isSpace ? d3 : 0) + h3, n3 = e4.fontChar, u4 = e4.accent;
          let p4, y3, E3 = e4.width;
          if (g3) {
            const t4 = e4.vmetric || f2, i4 = -(e4.vmetric ? t4[1] : 0.5 * E3) * b2, s4 = t4[2] * b2;
            E3 = t4 ? -t4[0] : E3;
            p4 = i4 / l3;
            y3 = (_2 + s4) / l3;
          } else {
            p4 = _2 / l3;
            y3 = 0;
          }
          if (a3.remeasure && E3 > 0) {
            const t4 = 1e3 * o3.measureText(n3).width / r3 * l3;
            if (E3 < t4 && this.isFontSubpixelAAEnabled) {
              const e5 = E3 / t4;
              i3 = true;
              o3.save();
              o3.scale(e5, 1);
              p4 /= e5;
            } else E3 !== t4 && (p4 += (E3 - t4) / 2e3 * r3 / l3);
          }
          if (this.contentVisible && (e4.isInFont || a3.missingFile)) if (A2 && !u4) o3.fillText(n3, p4, y3);
          else {
            this.paintChar(n3, p4, y3, v2);
            if (u4) {
              const t4 = p4 + r3 * u4.offset.x / l3, e5 = y3 - r3 * u4.offset.y / l3;
              this.paintChar(u4.fontChar, t4, e5, v2);
            }
          }
          _2 += g3 ? E3 * b2 - s3 * c3 : E3 * b2 + s3 * c3;
          i3 && o3.restore();
        }
        g3 ? e3.y -= _2 : e3.x += _2 * u3;
        o3.restore();
        this.compose();
      }
      showType3Text(t3) {
        const e3 = this.ctx, s3 = this.current, n3 = s3.font, a3 = s3.fontSize, r3 = s3.fontDirection, o3 = n3.vertical ? 1 : -1, l3 = s3.charSpacing, h3 = s3.wordSpacing, d3 = s3.textHScale * r3, c3 = s3.fontMatrix || i2.FONT_IDENTITY_MATRIX, u3 = t3.length;
        let p3, g3, m2, f2;
        if (!(s3.textRenderingMode === i2.TextRenderingMode.INVISIBLE) && 0 !== a3) {
          this._cachedScaleForStroking[0] = -1;
          this._cachedGetSinglePixelWidth = null;
          e3.save();
          e3.transform(...s3.textMatrix);
          e3.translate(s3.x, s3.y);
          e3.scale(d3, r3);
          for (p3 = 0; p3 < u3; ++p3) {
            g3 = t3[p3];
            if ("number" == typeof g3) {
              f2 = o3 * g3 * a3 / 1e3;
              this.ctx.translate(f2, 0);
              s3.x += f2 * d3;
              continue;
            }
            const r4 = (g3.isSpace ? h3 : 0) + l3, u4 = n3.charProcOperatorList[g3.operatorListId];
            if (!u4) {
              (0, i2.warn)(`Type3 character "${g3.operatorListId}" is not available.`);
              continue;
            }
            if (this.contentVisible) {
              this.processingType3 = g3;
              this.save();
              e3.scale(a3, a3);
              e3.transform(...c3);
              this.executeOperatorList(u4);
              this.restore();
            }
            m2 = i2.Util.applyTransform([g3.width, 0], c3)[0] * a3 + r4;
            e3.translate(m2, 0);
            s3.x += m2 * d3;
          }
          e3.restore();
          this.processingType3 = null;
        }
      }
      setCharWidth(t3, e3) {
      }
      setCharWidthAndBounds(t3, e3, i3, s3, n3, a3) {
        this.ctx.rect(i3, s3, n3 - i3, a3 - s3);
        this.ctx.clip();
        this.endPath();
      }
      getColorN_Pattern(t3) {
        let e3;
        if ("TilingPattern" === t3[0]) {
          const i3 = t3[1], n3 = this.baseTransform || (0, s2.getCurrentTransform)(this.ctx), a3 = { createCanvasGraphics: (t4) => new CanvasGraphics(t4, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }) };
          e3 = new TilingPattern(t3, i3, this.ctx, a3, n3);
        } else e3 = this._getPattern(t3[1], t3[2]);
        return e3;
      }
      setStrokeColorN() {
        this.current.strokeColor = this.getColorN_Pattern(arguments);
      }
      setFillColorN() {
        this.current.fillColor = this.getColorN_Pattern(arguments);
        this.current.patternFill = true;
      }
      setStrokeRGBColor(t3, e3, s3) {
        const n3 = i2.Util.makeHexColor(t3, e3, s3);
        this.ctx.strokeStyle = n3;
        this.current.strokeColor = n3;
      }
      setFillRGBColor(t3, e3, s3) {
        const n3 = i2.Util.makeHexColor(t3, e3, s3);
        this.ctx.fillStyle = n3;
        this.current.fillColor = n3;
        this.current.patternFill = false;
      }
      _getPattern(t3, e3 = null) {
        let i3;
        if (this.cachedPatterns.has(t3)) i3 = this.cachedPatterns.get(t3);
        else {
          i3 = (function getShadingPattern(t4) {
            switch (t4[0]) {
              case "RadialAxial":
                return new RadialAxialShadingPattern(t4);
              case "Mesh":
                return new MeshShadingPattern(t4);
              case "Dummy":
                return new DummyShadingPattern();
            }
            throw new Error(`Unknown IR type: ${t4[0]}`);
          })(this.getObject(t3));
          this.cachedPatterns.set(t3, i3);
        }
        e3 && (i3.matrix = e3);
        return i3;
      }
      shadingFill(t3) {
        if (!this.contentVisible) return;
        const e3 = this.ctx;
        this.save();
        const n3 = this._getPattern(t3);
        e3.fillStyle = n3.getPattern(e3, this, (0, s2.getCurrentTransformInverse)(e3), r2);
        const a3 = (0, s2.getCurrentTransformInverse)(e3);
        if (a3) {
          const { width: t4, height: s3 } = e3.canvas, [n4, r3, o3, l3] = i2.Util.getAxialAlignedBoundingBox([0, 0, t4, s3], a3);
          this.ctx.fillRect(n4, r3, o3 - n4, l3 - r3);
        } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
        this.compose(this.current.getClippedPathBoundingBox());
        this.restore();
      }
      beginInlineImage() {
        (0, i2.unreachable)("Should not call beginInlineImage");
      }
      beginImageData() {
        (0, i2.unreachable)("Should not call beginImageData");
      }
      paintFormXObjectBegin(t3, e3) {
        if (this.contentVisible) {
          this.save();
          this.baseTransformStack.push(this.baseTransform);
          Array.isArray(t3) && 6 === t3.length && this.transform(...t3);
          this.baseTransform = (0, s2.getCurrentTransform)(this.ctx);
          if (e3) {
            const t4 = e3[2] - e3[0], i3 = e3[3] - e3[1];
            this.ctx.rect(e3[0], e3[1], t4, i3);
            this.current.updateRectMinMax((0, s2.getCurrentTransform)(this.ctx), e3);
            this.clip();
            this.endPath();
          }
        }
      }
      paintFormXObjectEnd() {
        if (this.contentVisible) {
          this.restore();
          this.baseTransform = this.baseTransformStack.pop();
        }
      }
      beginGroup(t3) {
        if (!this.contentVisible) return;
        this.save();
        if (this.inSMaskMode) {
          this.endSMaskMode();
          this.current.activeSMask = null;
        }
        const e3 = this.ctx;
        t3.isolated || (0, i2.info)("TODO: Support non-isolated groups.");
        t3.knockout && (0, i2.warn)("Knockout groups not supported.");
        const n3 = (0, s2.getCurrentTransform)(e3);
        t3.matrix && e3.transform(...t3.matrix);
        if (!t3.bbox) throw new Error("Bounding box is required.");
        let a3 = i2.Util.getAxialAlignedBoundingBox(t3.bbox, (0, s2.getCurrentTransform)(e3));
        const r3 = [0, 0, e3.canvas.width, e3.canvas.height];
        a3 = i2.Util.intersect(a3, r3) || [0, 0, 0, 0];
        const o3 = Math.floor(a3[0]), l3 = Math.floor(a3[1]);
        let d3 = Math.max(Math.ceil(a3[2]) - o3, 1), c3 = Math.max(Math.ceil(a3[3]) - l3, 1), u3 = 1, p3 = 1;
        if (d3 > h2) {
          u3 = d3 / h2;
          d3 = h2;
        }
        if (c3 > h2) {
          p3 = c3 / h2;
          c3 = h2;
        }
        this.current.startNewPathAndClipBox([0, 0, d3, c3]);
        let g3 = "groupAt" + this.groupLevel;
        t3.smask && (g3 += "_smask_" + this.smaskCounter++ % 2);
        const m2 = this.cachedCanvases.getCanvas(g3, d3, c3), f2 = m2.context;
        f2.scale(1 / u3, 1 / p3);
        f2.translate(-o3, -l3);
        f2.transform(...n3);
        if (t3.smask) this.smaskStack.push({ canvas: m2.canvas, context: f2, offsetX: o3, offsetY: l3, scaleX: u3, scaleY: p3, subtype: t3.smask.subtype, backdrop: t3.smask.backdrop, transferMap: t3.smask.transferMap || null, startTransformInverse: null });
        else {
          e3.setTransform(1, 0, 0, 1, 0, 0);
          e3.translate(o3, l3);
          e3.scale(u3, p3);
          e3.save();
        }
        copyCtxState(e3, f2);
        this.ctx = f2;
        this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
        this.groupStack.push(e3);
        this.groupLevel++;
      }
      endGroup(t3) {
        if (!this.contentVisible) return;
        this.groupLevel--;
        const e3 = this.ctx, n3 = this.groupStack.pop();
        this.ctx = n3;
        this.ctx.imageSmoothingEnabled = false;
        if (t3.smask) {
          this.tempSMask = this.smaskStack.pop();
          this.restore();
        } else {
          this.ctx.restore();
          const t4 = (0, s2.getCurrentTransform)(this.ctx);
          this.restore();
          this.ctx.save();
          this.ctx.setTransform(...t4);
          const n4 = i2.Util.getAxialAlignedBoundingBox([0, 0, e3.canvas.width, e3.canvas.height], t4);
          this.ctx.drawImage(e3.canvas, 0, 0);
          this.ctx.restore();
          this.compose(n4);
        }
      }
      beginAnnotation(t3, e3, n3, a3, r3) {
        this.#lt();
        resetCtxToDefault(this.ctx);
        this.ctx.save();
        this.save();
        this.baseTransform && this.ctx.setTransform(...this.baseTransform);
        if (Array.isArray(e3) && 4 === e3.length) {
          const a4 = e3[2] - e3[0], o3 = e3[3] - e3[1];
          if (r3 && this.annotationCanvasMap) {
            (n3 = n3.slice())[4] -= e3[0];
            n3[5] -= e3[1];
            (e3 = e3.slice())[0] = e3[1] = 0;
            e3[2] = a4;
            e3[3] = o3;
            const [r4, l3] = i2.Util.singularValueDecompose2dScale((0, s2.getCurrentTransform)(this.ctx)), { viewportScale: h3 } = this, d3 = Math.ceil(a4 * this.outputScaleX * h3), c3 = Math.ceil(o3 * this.outputScaleY * h3);
            this.annotationCanvas = this.canvasFactory.create(d3, c3);
            const { canvas: u3, context: p3 } = this.annotationCanvas;
            this.annotationCanvasMap.set(t3, u3);
            this.annotationCanvas.savedCtx = this.ctx;
            this.ctx = p3;
            this.ctx.save();
            this.ctx.setTransform(r4, 0, 0, -l3, 0, o3 * l3);
            resetCtxToDefault(this.ctx);
          } else {
            resetCtxToDefault(this.ctx);
            this.ctx.rect(e3[0], e3[1], a4, o3);
            this.ctx.clip();
            this.endPath();
          }
        }
        this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
        this.transform(...n3);
        this.transform(...a3);
      }
      endAnnotation() {
        if (this.annotationCanvas) {
          this.ctx.restore();
          this.#ht();
          this.ctx = this.annotationCanvas.savedCtx;
          delete this.annotationCanvas.savedCtx;
          delete this.annotationCanvas;
        }
      }
      paintImageMaskXObject(t3) {
        if (!this.contentVisible) return;
        const e3 = t3.count;
        (t3 = this.getObject(t3.data, t3)).count = e3;
        const i3 = this.ctx, s3 = this.processingType3;
        if (s3) {
          void 0 === s3.compiled && (s3.compiled = (function compileType3Glyph(t4) {
            const { width: e4, height: i4 } = t4;
            if (e4 > 1e3 || i4 > 1e3) return null;
            const s4 = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), n4 = e4 + 1;
            let a4, r3, o3, l3 = new Uint8Array(n4 * (i4 + 1));
            const h3 = e4 + 7 & -8;
            let d3 = new Uint8Array(h3 * i4), c3 = 0;
            for (const e5 of t4.data) {
              let t5 = 128;
              for (; t5 > 0; ) {
                d3[c3++] = e5 & t5 ? 0 : 255;
                t5 >>= 1;
              }
            }
            let u3 = 0;
            c3 = 0;
            if (0 !== d3[c3]) {
              l3[0] = 1;
              ++u3;
            }
            for (r3 = 1; r3 < e4; r3++) {
              if (d3[c3] !== d3[c3 + 1]) {
                l3[r3] = d3[c3] ? 2 : 1;
                ++u3;
              }
              c3++;
            }
            if (0 !== d3[c3]) {
              l3[r3] = 2;
              ++u3;
            }
            for (a4 = 1; a4 < i4; a4++) {
              c3 = a4 * h3;
              o3 = a4 * n4;
              if (d3[c3 - h3] !== d3[c3]) {
                l3[o3] = d3[c3] ? 1 : 8;
                ++u3;
              }
              let t5 = (d3[c3] ? 4 : 0) + (d3[c3 - h3] ? 8 : 0);
              for (r3 = 1; r3 < e4; r3++) {
                t5 = (t5 >> 2) + (d3[c3 + 1] ? 4 : 0) + (d3[c3 - h3 + 1] ? 8 : 0);
                if (s4[t5]) {
                  l3[o3 + r3] = s4[t5];
                  ++u3;
                }
                c3++;
              }
              if (d3[c3 - h3] !== d3[c3]) {
                l3[o3 + r3] = d3[c3] ? 2 : 4;
                ++u3;
              }
              if (u3 > 1e3) return null;
            }
            c3 = h3 * (i4 - 1);
            o3 = a4 * n4;
            if (0 !== d3[c3]) {
              l3[o3] = 8;
              ++u3;
            }
            for (r3 = 1; r3 < e4; r3++) {
              if (d3[c3] !== d3[c3 + 1]) {
                l3[o3 + r3] = d3[c3] ? 4 : 8;
                ++u3;
              }
              c3++;
            }
            if (0 !== d3[c3]) {
              l3[o3 + r3] = 4;
              ++u3;
            }
            if (u3 > 1e3) return null;
            const p3 = new Int32Array([0, n4, -1, 0, -n4, 0, 0, 0, 1]), g3 = new Path2D();
            for (a4 = 0; u3 && a4 <= i4; a4++) {
              let t5 = a4 * n4;
              const i5 = t5 + e4;
              for (; t5 < i5 && !l3[t5]; ) t5++;
              if (t5 === i5) continue;
              g3.moveTo(t5 % n4, a4);
              const s5 = t5;
              let r4 = l3[t5];
              do {
                const e5 = p3[r4];
                do {
                  t5 += e5;
                } while (!l3[t5]);
                const i6 = l3[t5];
                if (5 !== i6 && 10 !== i6) {
                  r4 = i6;
                  l3[t5] = 0;
                } else {
                  r4 = i6 & 51 * r4 >> 4;
                  l3[t5] &= r4 >> 2 | r4 << 2;
                }
                g3.lineTo(t5 % n4, t5 / n4 | 0);
                l3[t5] || --u3;
              } while (s5 !== t5);
              --a4;
            }
            d3 = null;
            l3 = null;
            return function(t5) {
              t5.save();
              t5.scale(1 / e4, -1 / i4);
              t5.translate(0, -i4);
              t5.fill(g3);
              t5.beginPath();
              t5.restore();
            };
          })(t3));
          if (s3.compiled) {
            s3.compiled(i3);
            return;
          }
        }
        const n3 = this._createMaskCanvas(t3), a3 = n3.canvas;
        i3.save();
        i3.setTransform(1, 0, 0, 1, 0, 0);
        i3.drawImage(a3, n3.offsetX, n3.offsetY);
        i3.restore();
        this.compose();
      }
      paintImageMaskXObjectRepeat(t3, e3, n3 = 0, a3 = 0, r3, o3) {
        if (!this.contentVisible) return;
        t3 = this.getObject(t3.data, t3);
        const l3 = this.ctx;
        l3.save();
        const h3 = (0, s2.getCurrentTransform)(l3);
        l3.transform(e3, n3, a3, r3, 0, 0);
        const d3 = this._createMaskCanvas(t3);
        l3.setTransform(1, 0, 0, 1, d3.offsetX - h3[4], d3.offsetY - h3[5]);
        for (let t4 = 0, s3 = o3.length; t4 < s3; t4 += 2) {
          const s4 = i2.Util.transform(h3, [e3, n3, a3, r3, o3[t4], o3[t4 + 1]]), [c3, u3] = i2.Util.applyTransform([0, 0], s4);
          l3.drawImage(d3.canvas, c3, u3);
        }
        l3.restore();
        this.compose();
      }
      paintImageMaskXObjectGroup(t3) {
        if (!this.contentVisible) return;
        const e3 = this.ctx, i3 = this.current.fillColor, a3 = this.current.patternFill;
        for (const r3 of t3) {
          const { data: t4, width: o3, height: l3, transform: h3 } = r3, d3 = this.cachedCanvases.getCanvas("maskCanvas", o3, l3), c3 = d3.context;
          c3.save();
          putBinaryImageMask(c3, this.getObject(t4, r3));
          c3.globalCompositeOperation = "source-in";
          c3.fillStyle = a3 ? i3.getPattern(c3, this, (0, s2.getCurrentTransformInverse)(e3), n2) : i3;
          c3.fillRect(0, 0, o3, l3);
          c3.restore();
          e3.save();
          e3.transform(...h3);
          e3.scale(1, -1);
          drawImageAtIntegerCoords(e3, d3.canvas, 0, 0, o3, l3, 0, -1, 1, 1);
          e3.restore();
        }
        this.compose();
      }
      paintImageXObject(t3) {
        if (!this.contentVisible) return;
        const e3 = this.getObject(t3);
        e3 ? this.paintInlineImageXObject(e3) : (0, i2.warn)("Dependent image isn't ready yet");
      }
      paintImageXObjectRepeat(t3, e3, s3, n3) {
        if (!this.contentVisible) return;
        const a3 = this.getObject(t3);
        if (!a3) {
          (0, i2.warn)("Dependent image isn't ready yet");
          return;
        }
        const r3 = a3.width, o3 = a3.height, l3 = [];
        for (let t4 = 0, i3 = n3.length; t4 < i3; t4 += 2) l3.push({ transform: [e3, 0, 0, s3, n3[t4], n3[t4 + 1]], x: 0, y: 0, w: r3, h: o3 });
        this.paintInlineImageXObjectGroup(a3, l3);
      }
      applyTransferMapsToCanvas(t3) {
        if ("none" !== this.current.transferMaps) {
          t3.filter = this.current.transferMaps;
          t3.drawImage(t3.canvas, 0, 0);
          t3.filter = "none";
        }
        return t3.canvas;
      }
      applyTransferMapsToBitmap(t3) {
        if ("none" === this.current.transferMaps) return t3.bitmap;
        const { bitmap: e3, width: i3, height: s3 } = t3, n3 = this.cachedCanvases.getCanvas("inlineImage", i3, s3), a3 = n3.context;
        a3.filter = this.current.transferMaps;
        a3.drawImage(e3, 0, 0);
        a3.filter = "none";
        return n3.canvas;
      }
      paintInlineImageXObject(t3) {
        if (!this.contentVisible) return;
        const e3 = t3.width, n3 = t3.height, a3 = this.ctx;
        this.save();
        if (!i2.isNodeJS) {
          const { filter: t4 } = a3;
          "none" !== t4 && "" !== t4 && (a3.filter = "none");
        }
        a3.scale(1 / e3, -1 / n3);
        let r3;
        if (t3.bitmap) r3 = this.applyTransferMapsToBitmap(t3);
        else if ("function" == typeof HTMLElement && t3 instanceof HTMLElement || !t3.data) r3 = t3;
        else {
          const i3 = this.cachedCanvases.getCanvas("inlineImage", e3, n3).context;
          putBinaryImageData(i3, t3);
          r3 = this.applyTransferMapsToCanvas(i3);
        }
        const o3 = this._scaleImage(r3, (0, s2.getCurrentTransformInverse)(a3));
        a3.imageSmoothingEnabled = getImageSmoothingEnabled((0, s2.getCurrentTransform)(a3), t3.interpolate);
        drawImageAtIntegerCoords(a3, o3.img, 0, 0, o3.paintWidth, o3.paintHeight, 0, -n3, e3, n3);
        this.compose();
        this.restore();
      }
      paintInlineImageXObjectGroup(t3, e3) {
        if (!this.contentVisible) return;
        const i3 = this.ctx;
        let s3;
        if (t3.bitmap) s3 = t3.bitmap;
        else {
          const e4 = t3.width, i4 = t3.height, n3 = this.cachedCanvases.getCanvas("inlineImage", e4, i4).context;
          putBinaryImageData(n3, t3);
          s3 = this.applyTransferMapsToCanvas(n3);
        }
        for (const t4 of e3) {
          i3.save();
          i3.transform(...t4.transform);
          i3.scale(1, -1);
          drawImageAtIntegerCoords(i3, s3, t4.x, t4.y, t4.w, t4.h, 0, -1, 1, 1);
          i3.restore();
        }
        this.compose();
      }
      paintSolidColorImageMask() {
        if (this.contentVisible) {
          this.ctx.fillRect(0, 0, 1, 1);
          this.compose();
        }
      }
      markPoint(t3) {
      }
      markPointProps(t3, e3) {
      }
      beginMarkedContent(t3) {
        this.markedContentStack.push({ visible: true });
      }
      beginMarkedContentProps(t3, e3) {
        "OC" === t3 ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(e3) }) : this.markedContentStack.push({ visible: true });
        this.contentVisible = this.isContentVisible();
      }
      endMarkedContent() {
        this.markedContentStack.pop();
        this.contentVisible = this.isContentVisible();
      }
      beginCompat() {
      }
      endCompat() {
      }
      consumePath(t3) {
        const e3 = this.current.isEmptyClip();
        this.pendingClip && this.current.updateClipFromPath();
        this.pendingClip || this.compose(t3);
        const i3 = this.ctx;
        if (this.pendingClip) {
          e3 || (this.pendingClip === g2 ? i3.clip("evenodd") : i3.clip());
          this.pendingClip = null;
        }
        this.current.startNewPathAndClipBox(this.current.clipBox);
        i3.beginPath();
      }
      getSinglePixelWidth() {
        if (!this._cachedGetSinglePixelWidth) {
          const t3 = (0, s2.getCurrentTransform)(this.ctx);
          if (0 === t3[1] && 0 === t3[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t3[0]), Math.abs(t3[3]));
          else {
            const e3 = Math.abs(t3[0] * t3[3] - t3[2] * t3[1]), i3 = Math.hypot(t3[0], t3[2]), s3 = Math.hypot(t3[1], t3[3]);
            this._cachedGetSinglePixelWidth = Math.max(i3, s3) / e3;
          }
        }
        return this._cachedGetSinglePixelWidth;
      }
      getScaleForStroking() {
        if (-1 === this._cachedScaleForStroking[0]) {
          const { lineWidth: t3 } = this.current, { a: e3, b: i3, c: s3, d: n3 } = this.ctx.getTransform();
          let a3, r3;
          if (0 === i3 && 0 === s3) {
            const i4 = Math.abs(e3), s4 = Math.abs(n3);
            if (i4 === s4) if (0 === t3) a3 = r3 = 1 / i4;
            else {
              const e4 = i4 * t3;
              a3 = r3 = e4 < 1 ? 1 / e4 : 1;
            }
            else if (0 === t3) {
              a3 = 1 / i4;
              r3 = 1 / s4;
            } else {
              const e4 = i4 * t3, n4 = s4 * t3;
              a3 = e4 < 1 ? 1 / e4 : 1;
              r3 = n4 < 1 ? 1 / n4 : 1;
            }
          } else {
            const o3 = Math.abs(e3 * n3 - i3 * s3), l3 = Math.hypot(e3, i3), h3 = Math.hypot(s3, n3);
            if (0 === t3) {
              a3 = h3 / o3;
              r3 = l3 / o3;
            } else {
              const e4 = t3 * o3;
              a3 = h3 > e4 ? h3 / e4 : 1;
              r3 = l3 > e4 ? l3 / e4 : 1;
            }
          }
          this._cachedScaleForStroking[0] = a3;
          this._cachedScaleForStroking[1] = r3;
        }
        return this._cachedScaleForStroking;
      }
      rescaleAndStroke(t3) {
        const { ctx: e3 } = this, { lineWidth: i3 } = this.current, [s3, n3] = this.getScaleForStroking();
        e3.lineWidth = i3 || 1;
        if (1 === s3 && 1 === n3) {
          e3.stroke();
          return;
        }
        const a3 = e3.getLineDash();
        t3 && e3.save();
        e3.scale(s3, n3);
        if (a3.length > 0) {
          const t4 = Math.max(s3, n3);
          e3.setLineDash(a3.map(((e4) => e4 / t4)));
          e3.lineDashOffset /= t4;
        }
        e3.stroke();
        t3 && e3.restore();
      }
      isContentVisible() {
        for (let t3 = this.markedContentStack.length - 1; t3 >= 0; t3--) if (!this.markedContentStack[t3].visible) return false;
        return true;
      }
    }
    for (const t3 in i2.OPS) void 0 !== CanvasGraphics.prototype[t3] && (CanvasGraphics.prototype[i2.OPS[t3]] = CanvasGraphics.prototype[t3]);
  }, 419: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { DOMCMapReaderFactory: () => DOMCMapReaderFactory, DOMCanvasFactory: () => DOMCanvasFactory, DOMFilterFactory: () => DOMFilterFactory, DOMSVGFactory: () => DOMSVGFactory, DOMStandardFontDataFactory: () => DOMStandardFontDataFactory, PDFDateString: () => PDFDateString, PageViewport: () => PageViewport, PixelsPerInch: () => PixelsPerInch, RenderingCancelledException: () => RenderingCancelledException, StatTimer: () => StatTimer, fetchData: () => fetchData, getColorValues: () => getColorValues, getCurrentTransform: () => getCurrentTransform, getCurrentTransformInverse: () => getCurrentTransformInverse, getFilenameFromUrl: () => getFilenameFromUrl, getPdfFilenameFromUrl: () => getPdfFilenameFromUrl, getRGB: () => getRGB, getXfaPageViewport: () => getXfaPageViewport, isDataScheme: () => isDataScheme, isPdfFile: () => isPdfFile, isValidFetchUrl: () => isValidFetchUrl, noContextMenu: () => noContextMenu, setLayerDimensions: () => setLayerDimensions });
    var i2 = e2(583), s2 = e2(292);
    const n2 = "http://www.w3.org/2000/svg";
    class PixelsPerInch {
      static CSS = 96;
      static PDF = 72;
      static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
    }
    class DOMFilterFactory extends i2.BaseFilterFactory {
      #dt;
      #ct;
      #j;
      #ut;
      #pt;
      #gt = 0;
      constructor({ docId: t3, ownerDocument: e3 = globalThis.document } = {}) {
        super();
        this.#j = t3;
        this.#ut = e3;
      }
      get #mt() {
        return this.#dt ||= /* @__PURE__ */ new Map();
      }
      get #ft() {
        return this.#pt ||= /* @__PURE__ */ new Map();
      }
      get #bt() {
        if (!this.#ct) {
          const t3 = this.#ut.createElement("div"), { style: e3 } = t3;
          e3.visibility = "hidden";
          e3.contain = "strict";
          e3.width = e3.height = 0;
          e3.position = "absolute";
          e3.top = e3.left = 0;
          e3.zIndex = -1;
          const i3 = this.#ut.createElementNS(n2, "svg");
          i3.setAttribute("width", 0);
          i3.setAttribute("height", 0);
          this.#ct = this.#ut.createElementNS(n2, "defs");
          t3.append(i3);
          i3.append(this.#ct);
          this.#ut.body.append(t3);
        }
        return this.#ct;
      }
      addFilter(t3) {
        if (!t3) return "none";
        let e3, i3, s3, n3, a3 = this.#mt.get(t3);
        if (a3) return a3;
        if (1 === t3.length) {
          const a4 = t3[0], r3 = new Array(256);
          for (let t4 = 0; t4 < 256; t4++) r3[t4] = a4[t4] / 255;
          n3 = e3 = i3 = s3 = r3.join(",");
        } else {
          const [a4, r3, o3] = t3, l3 = new Array(256), h2 = new Array(256), d2 = new Array(256);
          for (let t4 = 0; t4 < 256; t4++) {
            l3[t4] = a4[t4] / 255;
            h2[t4] = r3[t4] / 255;
            d2[t4] = o3[t4] / 255;
          }
          e3 = l3.join(",");
          i3 = h2.join(",");
          s3 = d2.join(",");
          n3 = `${e3}${i3}${s3}`;
        }
        a3 = this.#mt.get(n3);
        if (a3) {
          this.#mt.set(t3, a3);
          return a3;
        }
        const r2 = `g_${this.#j}_transfer_map_${this.#gt++}`, o2 = `url(#${r2})`;
        this.#mt.set(t3, o2);
        this.#mt.set(n3, o2);
        const l2 = this.#At(r2);
        this.#vt(e3, i3, s3, l2);
        return o2;
      }
      addHCMFilter(t3, e3) {
        const i3 = `${t3}-${e3}`, n3 = "base";
        let a3 = this.#ft.get(n3);
        if (a3?.key === i3) return a3.url;
        if (a3) {
          a3.filter?.remove();
          a3.key = i3;
          a3.url = "none";
          a3.filter = null;
        } else {
          a3 = { key: i3, url: "none", filter: null };
          this.#ft.set(n3, a3);
        }
        if (!t3 || !e3) return a3.url;
        const r2 = this.#yt(t3);
        t3 = s2.Util.makeHexColor(...r2);
        const o2 = this.#yt(e3);
        e3 = s2.Util.makeHexColor(...o2);
        this.#bt.style.color = "";
        if ("#000000" === t3 && "#ffffff" === e3 || t3 === e3) return a3.url;
        const l2 = new Array(256);
        for (let t4 = 0; t4 <= 255; t4++) {
          const e4 = t4 / 255;
          l2[t4] = e4 <= 0.03928 ? e4 / 12.92 : ((e4 + 0.055) / 1.055) ** 2.4;
        }
        const h2 = l2.join(","), d2 = `g_${this.#j}_hcm_filter`, c2 = a3.filter = this.#At(d2);
        this.#vt(h2, h2, h2, c2);
        this.#Et(c2);
        const getSteps = (t4, e4) => {
          const i4 = r2[t4] / 255, s3 = o2[t4] / 255, n4 = new Array(e4 + 1);
          for (let t5 = 0; t5 <= e4; t5++) n4[t5] = i4 + t5 / e4 * (s3 - i4);
          return n4.join(",");
        };
        this.#vt(getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), c2);
        a3.url = `url(#${d2})`;
        return a3.url;
      }
      addHighlightHCMFilter(t3, e3, i3, s3, n3) {
        const a3 = `${e3}-${i3}-${s3}-${n3}`;
        let r2 = this.#ft.get(t3);
        if (r2?.key === a3) return r2.url;
        if (r2) {
          r2.filter?.remove();
          r2.key = a3;
          r2.url = "none";
          r2.filter = null;
        } else {
          r2 = { key: a3, url: "none", filter: null };
          this.#ft.set(t3, r2);
        }
        if (!e3 || !i3) return r2.url;
        const [o2, l2] = [e3, i3].map(this.#yt.bind(this));
        let h2 = Math.round(0.2126 * o2[0] + 0.7152 * o2[1] + 0.0722 * o2[2]), d2 = Math.round(0.2126 * l2[0] + 0.7152 * l2[1] + 0.0722 * l2[2]), [c2, u2] = [s3, n3].map(this.#yt.bind(this));
        d2 < h2 && ([h2, d2, c2, u2] = [d2, h2, u2, c2]);
        this.#bt.style.color = "";
        const getSteps = (t4, e4, i4) => {
          const s4 = new Array(256), n4 = (d2 - h2) / i4, a4 = t4 / 255, r3 = (e4 - t4) / (255 * i4);
          let o3 = 0;
          for (let t5 = 0; t5 <= i4; t5++) {
            const e5 = Math.round(h2 + t5 * n4), i5 = a4 + t5 * r3;
            for (let t6 = o3; t6 <= e5; t6++) s4[t6] = i5;
            o3 = e5 + 1;
          }
          for (let t5 = o3; t5 < 256; t5++) s4[t5] = s4[o3 - 1];
          return s4.join(",");
        }, p2 = `g_${this.#j}_hcm_${t3}_filter`, g2 = r2.filter = this.#At(p2);
        this.#Et(g2);
        this.#vt(getSteps(c2[0], u2[0], 5), getSteps(c2[1], u2[1], 5), getSteps(c2[2], u2[2], 5), g2);
        r2.url = `url(#${p2})`;
        return r2.url;
      }
      destroy(t3 = false) {
        if (!t3 || 0 === this.#ft.size) {
          if (this.#ct) {
            this.#ct.parentNode.parentNode.remove();
            this.#ct = null;
          }
          if (this.#dt) {
            this.#dt.clear();
            this.#dt = null;
          }
          this.#gt = 0;
        }
      }
      #Et(t3) {
        const e3 = this.#ut.createElementNS(n2, "feColorMatrix");
        e3.setAttribute("type", "matrix");
        e3.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
        t3.append(e3);
      }
      #At(t3) {
        const e3 = this.#ut.createElementNS(n2, "filter");
        e3.setAttribute("color-interpolation-filters", "sRGB");
        e3.setAttribute("id", t3);
        this.#bt.append(e3);
        return e3;
      }
      #wt(t3, e3, i3) {
        const s3 = this.#ut.createElementNS(n2, e3);
        s3.setAttribute("type", "discrete");
        s3.setAttribute("tableValues", i3);
        t3.append(s3);
      }
      #vt(t3, e3, i3, s3) {
        const a3 = this.#ut.createElementNS(n2, "feComponentTransfer");
        s3.append(a3);
        this.#wt(a3, "feFuncR", t3);
        this.#wt(a3, "feFuncG", e3);
        this.#wt(a3, "feFuncB", i3);
      }
      #yt(t3) {
        this.#bt.style.color = t3;
        return getRGB(getComputedStyle(this.#bt).getPropertyValue("color"));
      }
    }
    class DOMCanvasFactory extends i2.BaseCanvasFactory {
      constructor({ ownerDocument: t3 = globalThis.document } = {}) {
        super();
        this._document = t3;
      }
      _createCanvas(t3, e3) {
        const i3 = this._document.createElement("canvas");
        i3.width = t3;
        i3.height = e3;
        return i3;
      }
    }
    async function fetchData(t3, e3 = "text") {
      if (isValidFetchUrl(t3, document.baseURI)) {
        const i3 = await fetch(t3);
        if (!i3.ok) throw new Error(i3.statusText);
        switch (e3) {
          case "arraybuffer":
            return i3.arrayBuffer();
          case "blob":
            return i3.blob();
          case "json":
            return i3.json();
        }
        return i3.text();
      }
      return new Promise(((i3, s3) => {
        const n3 = new XMLHttpRequest();
        n3.open("GET", t3, true);
        n3.responseType = e3;
        n3.onreadystatechange = () => {
          if (n3.readyState === XMLHttpRequest.DONE) if (200 !== n3.status && 0 !== n3.status) s3(new Error(n3.statusText));
          else {
            switch (e3) {
              case "arraybuffer":
              case "blob":
              case "json":
                i3(n3.response);
                return;
            }
            i3(n3.responseText);
          }
        };
        n3.send(null);
      }));
    }
    class DOMCMapReaderFactory extends i2.BaseCMapReaderFactory {
      _fetchData(t3, e3) {
        return fetchData(t3, this.isCompressed ? "arraybuffer" : "text").then(((t4) => ({ cMapData: t4 instanceof ArrayBuffer ? new Uint8Array(t4) : (0, s2.stringToBytes)(t4), compressionType: e3 })));
      }
    }
    class DOMStandardFontDataFactory extends i2.BaseStandardFontDataFactory {
      _fetchData(t3) {
        return fetchData(t3, "arraybuffer").then(((t4) => new Uint8Array(t4)));
      }
    }
    class DOMSVGFactory extends i2.BaseSVGFactory {
      _createSVG(t3) {
        return document.createElementNS(n2, t3);
      }
    }
    class PageViewport {
      constructor({ viewBox: t3, scale: e3, rotation: i3, offsetX: s3 = 0, offsetY: n3 = 0, dontFlip: a3 = false }) {
        this.viewBox = t3;
        this.scale = e3;
        this.rotation = i3;
        this.offsetX = s3;
        this.offsetY = n3;
        const r2 = (t3[2] + t3[0]) / 2, o2 = (t3[3] + t3[1]) / 2;
        let l2, h2, d2, c2, u2, p2, g2, m2;
        (i3 %= 360) < 0 && (i3 += 360);
        switch (i3) {
          case 180:
            l2 = -1;
            h2 = 0;
            d2 = 0;
            c2 = 1;
            break;
          case 90:
            l2 = 0;
            h2 = 1;
            d2 = 1;
            c2 = 0;
            break;
          case 270:
            l2 = 0;
            h2 = -1;
            d2 = -1;
            c2 = 0;
            break;
          case 0:
            l2 = 1;
            h2 = 0;
            d2 = 0;
            c2 = -1;
            break;
          default:
            throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
        }
        if (a3) {
          d2 = -d2;
          c2 = -c2;
        }
        if (0 === l2) {
          u2 = Math.abs(o2 - t3[1]) * e3 + s3;
          p2 = Math.abs(r2 - t3[0]) * e3 + n3;
          g2 = (t3[3] - t3[1]) * e3;
          m2 = (t3[2] - t3[0]) * e3;
        } else {
          u2 = Math.abs(r2 - t3[0]) * e3 + s3;
          p2 = Math.abs(o2 - t3[1]) * e3 + n3;
          g2 = (t3[2] - t3[0]) * e3;
          m2 = (t3[3] - t3[1]) * e3;
        }
        this.transform = [l2 * e3, h2 * e3, d2 * e3, c2 * e3, u2 - l2 * e3 * r2 - d2 * e3 * o2, p2 - h2 * e3 * r2 - c2 * e3 * o2];
        this.width = g2;
        this.height = m2;
      }
      get rawDims() {
        const { viewBox: t3 } = this;
        return (0, s2.shadow)(this, "rawDims", { pageWidth: t3[2] - t3[0], pageHeight: t3[3] - t3[1], pageX: t3[0], pageY: t3[1] });
      }
      clone({ scale: t3 = this.scale, rotation: e3 = this.rotation, offsetX: i3 = this.offsetX, offsetY: s3 = this.offsetY, dontFlip: n3 = false } = {}) {
        return new PageViewport({ viewBox: this.viewBox.slice(), scale: t3, rotation: e3, offsetX: i3, offsetY: s3, dontFlip: n3 });
      }
      convertToViewportPoint(t3, e3) {
        return s2.Util.applyTransform([t3, e3], this.transform);
      }
      convertToViewportRectangle(t3) {
        const e3 = s2.Util.applyTransform([t3[0], t3[1]], this.transform), i3 = s2.Util.applyTransform([t3[2], t3[3]], this.transform);
        return [e3[0], e3[1], i3[0], i3[1]];
      }
      convertToPdfPoint(t3, e3) {
        return s2.Util.applyInverseTransform([t3, e3], this.transform);
      }
    }
    class RenderingCancelledException extends s2.BaseException {
      constructor(t3, e3 = 0) {
        super(t3, "RenderingCancelledException");
        this.extraDelay = e3;
      }
    }
    function isDataScheme(t3) {
      const e3 = t3.length;
      let i3 = 0;
      for (; i3 < e3 && "" === t3[i3].trim(); ) i3++;
      return "data:" === t3.substring(i3, i3 + 5).toLowerCase();
    }
    function isPdfFile(t3) {
      return "string" == typeof t3 && /\.pdf$/i.test(t3);
    }
    function getFilenameFromUrl(t3, e3 = false) {
      e3 || ([t3] = t3.split(/[#?]/, 1));
      return t3.substring(t3.lastIndexOf("/") + 1);
    }
    function getPdfFilenameFromUrl(t3, e3 = "document.pdf") {
      if ("string" != typeof t3) return e3;
      if (isDataScheme(t3)) {
        (0, s2.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
        return e3;
      }
      const i3 = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, n3 = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t3);
      let a3 = i3.exec(n3[1]) || i3.exec(n3[2]) || i3.exec(n3[3]);
      if (a3) {
        a3 = a3[0];
        if (a3.includes("%")) try {
          a3 = i3.exec(decodeURIComponent(a3))[0];
        } catch {
        }
      }
      return a3 || e3;
    }
    class StatTimer {
      started = /* @__PURE__ */ Object.create(null);
      times = [];
      time(t3) {
        t3 in this.started && (0, s2.warn)(`Timer is already running for ${t3}`);
        this.started[t3] = Date.now();
      }
      timeEnd(t3) {
        t3 in this.started || (0, s2.warn)(`Timer has not been started for ${t3}`);
        this.times.push({ name: t3, start: this.started[t3], end: Date.now() });
        delete this.started[t3];
      }
      toString() {
        const t3 = [];
        let e3 = 0;
        for (const { name: t4 } of this.times) e3 = Math.max(t4.length, e3);
        for (const { name: i3, start: s3, end: n3 } of this.times) t3.push(`${i3.padEnd(e3)} ${n3 - s3}ms
`);
        return t3.join("");
      }
    }
    function isValidFetchUrl(t3, e3) {
      try {
        const { protocol: i3 } = e3 ? new URL(t3, e3) : new URL(t3);
        return "http:" === i3 || "https:" === i3;
      } catch {
        return false;
      }
    }
    function noContextMenu(t3) {
      t3.preventDefault();
    }
    let a2;
    class PDFDateString {
      static toDateObject(t3) {
        if (!t3 || "string" != typeof t3) return null;
        a2 ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
        const e3 = a2.exec(t3);
        if (!e3) return null;
        const i3 = parseInt(e3[1], 10);
        let s3 = parseInt(e3[2], 10);
        s3 = s3 >= 1 && s3 <= 12 ? s3 - 1 : 0;
        let n3 = parseInt(e3[3], 10);
        n3 = n3 >= 1 && n3 <= 31 ? n3 : 1;
        let r2 = parseInt(e3[4], 10);
        r2 = r2 >= 0 && r2 <= 23 ? r2 : 0;
        let o2 = parseInt(e3[5], 10);
        o2 = o2 >= 0 && o2 <= 59 ? o2 : 0;
        let l2 = parseInt(e3[6], 10);
        l2 = l2 >= 0 && l2 <= 59 ? l2 : 0;
        const h2 = e3[7] || "Z";
        let d2 = parseInt(e3[8], 10);
        d2 = d2 >= 0 && d2 <= 23 ? d2 : 0;
        let c2 = parseInt(e3[9], 10) || 0;
        c2 = c2 >= 0 && c2 <= 59 ? c2 : 0;
        if ("-" === h2) {
          r2 += d2;
          o2 += c2;
        } else if ("+" === h2) {
          r2 -= d2;
          o2 -= c2;
        }
        return new Date(Date.UTC(i3, s3, n3, r2, o2, l2));
      }
    }
    function getXfaPageViewport(t3, { scale: e3 = 1, rotation: i3 = 0 }) {
      const { width: s3, height: n3 } = t3.attributes.style, a3 = [0, 0, parseInt(s3), parseInt(n3)];
      return new PageViewport({ viewBox: a3, scale: e3, rotation: i3 });
    }
    function getRGB(t3) {
      if (t3.startsWith("#")) {
        const e3 = parseInt(t3.slice(1), 16);
        return [(16711680 & e3) >> 16, (65280 & e3) >> 8, 255 & e3];
      }
      if (t3.startsWith("rgb(")) return t3.slice(4, -1).split(",").map(((t4) => parseInt(t4)));
      if (t3.startsWith("rgba(")) return t3.slice(5, -1).split(",").map(((t4) => parseInt(t4))).slice(0, 3);
      (0, s2.warn)(`Not a valid color format: "${t3}"`);
      return [0, 0, 0];
    }
    function getColorValues(t3) {
      const e3 = document.createElement("span");
      e3.style.visibility = "hidden";
      document.body.append(e3);
      for (const i3 of t3.keys()) {
        e3.style.color = i3;
        const s3 = window.getComputedStyle(e3).color;
        t3.set(i3, getRGB(s3));
      }
      e3.remove();
    }
    function getCurrentTransform(t3) {
      const { a: e3, b: i3, c: s3, d: n3, e: a3, f: r2 } = t3.getTransform();
      return [e3, i3, s3, n3, a3, r2];
    }
    function getCurrentTransformInverse(t3) {
      const { a: e3, b: i3, c: s3, d: n3, e: a3, f: r2 } = t3.getTransform().invertSelf();
      return [e3, i3, s3, n3, a3, r2];
    }
    function setLayerDimensions(t3, e3, i3 = false, n3 = true) {
      if (e3 instanceof PageViewport) {
        const { pageWidth: n4, pageHeight: a3 } = e3.rawDims, { style: r2 } = t3, o2 = s2.FeatureTest.isCSSRoundSupported, l2 = `var(--scale-factor) * ${n4}px`, h2 = `var(--scale-factor) * ${a3}px`, d2 = o2 ? `round(${l2}, 1px)` : `calc(${l2})`, c2 = o2 ? `round(${h2}, 1px)` : `calc(${h2})`;
        if (i3 && e3.rotation % 180 != 0) {
          r2.width = c2;
          r2.height = d2;
        } else {
          r2.width = d2;
          r2.height = c2;
        }
      }
      n3 && t3.setAttribute("data-main-rotation", e3.rotation);
    }
  }, 47: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { DrawLayer: () => DrawLayer });
    var i2 = e2(419), s2 = e2(292);
    class DrawLayer {
      #v = null;
      #gt = 0;
      #_t = /* @__PURE__ */ new Map();
      #xt = /* @__PURE__ */ new Map();
      constructor({ pageIndex: t3 }) {
        this.pageIndex = t3;
      }
      setParent(t3) {
        if (this.#v) {
          if (this.#v !== t3) {
            if (this.#_t.size > 0) for (const e3 of this.#_t.values()) {
              e3.remove();
              t3.append(e3);
            }
            this.#v = t3;
          }
        } else this.#v = t3;
      }
      static get _svgFactory() {
        return (0, s2.shadow)(this, "_svgFactory", new i2.DOMSVGFactory());
      }
      static #Tt(t3, { x: e3 = 0, y: i3 = 0, width: s3 = 1, height: n2 = 1 } = {}) {
        const { style: a2 } = t3;
        a2.top = 100 * i3 + "%";
        a2.left = 100 * e3 + "%";
        a2.width = 100 * s3 + "%";
        a2.height = 100 * n2 + "%";
      }
      #St(t3) {
        const e3 = DrawLayer._svgFactory.create(1, 1, true);
        this.#v.append(e3);
        e3.setAttribute("aria-hidden", true);
        DrawLayer.#Tt(e3, t3);
        return e3;
      }
      #Ct(t3, e3) {
        const i3 = DrawLayer._svgFactory.createElement("clipPath");
        t3.append(i3);
        const s3 = `clip_${e3}`;
        i3.setAttribute("id", s3);
        i3.setAttribute("clipPathUnits", "objectBoundingBox");
        const n2 = DrawLayer._svgFactory.createElement("use");
        i3.append(n2);
        n2.setAttribute("href", `#${e3}`);
        n2.classList.add("clip");
        return s3;
      }
      highlight(t3, e3, i3, s3 = false) {
        const n2 = this.#gt++, a2 = this.#St(t3.box);
        a2.classList.add("highlight");
        t3.free && a2.classList.add("free");
        const r2 = DrawLayer._svgFactory.createElement("defs");
        a2.append(r2);
        const o2 = DrawLayer._svgFactory.createElement("path");
        r2.append(o2);
        const l2 = `path_p${this.pageIndex}_${n2}`;
        o2.setAttribute("id", l2);
        o2.setAttribute("d", t3.toSVGPath());
        s3 && this.#xt.set(n2, o2);
        const h2 = this.#Ct(r2, l2), d2 = DrawLayer._svgFactory.createElement("use");
        a2.append(d2);
        a2.setAttribute("fill", e3);
        a2.setAttribute("fill-opacity", i3);
        d2.setAttribute("href", `#${l2}`);
        this.#_t.set(n2, a2);
        return { id: n2, clipPathId: `url(#${h2})` };
      }
      highlightOutline(t3) {
        const e3 = this.#gt++, i3 = this.#St(t3.box);
        i3.classList.add("highlightOutline");
        const s3 = DrawLayer._svgFactory.createElement("defs");
        i3.append(s3);
        const n2 = DrawLayer._svgFactory.createElement("path");
        s3.append(n2);
        const a2 = `path_p${this.pageIndex}_${e3}`;
        n2.setAttribute("id", a2);
        n2.setAttribute("d", t3.toSVGPath());
        n2.setAttribute("vector-effect", "non-scaling-stroke");
        let r2;
        if (t3.free) {
          i3.classList.add("free");
          const t4 = DrawLayer._svgFactory.createElement("mask");
          s3.append(t4);
          r2 = `mask_p${this.pageIndex}_${e3}`;
          t4.setAttribute("id", r2);
          t4.setAttribute("maskUnits", "objectBoundingBox");
          const n3 = DrawLayer._svgFactory.createElement("rect");
          t4.append(n3);
          n3.setAttribute("width", "1");
          n3.setAttribute("height", "1");
          n3.setAttribute("fill", "white");
          const o3 = DrawLayer._svgFactory.createElement("use");
          t4.append(o3);
          o3.setAttribute("href", `#${a2}`);
          o3.setAttribute("stroke", "none");
          o3.setAttribute("fill", "black");
          o3.setAttribute("fill-rule", "nonzero");
          o3.classList.add("mask");
        }
        const o2 = DrawLayer._svgFactory.createElement("use");
        i3.append(o2);
        o2.setAttribute("href", `#${a2}`);
        r2 && o2.setAttribute("mask", `url(#${r2})`);
        const l2 = o2.cloneNode();
        i3.append(l2);
        o2.classList.add("mainOutline");
        l2.classList.add("secondaryOutline");
        this.#_t.set(e3, i3);
        return e3;
      }
      finalizeLine(t3, e3) {
        const i3 = this.#xt.get(t3);
        this.#xt.delete(t3);
        this.updateBox(t3, e3.box);
        i3.setAttribute("d", e3.toSVGPath());
      }
      updateLine(t3, e3) {
        this.#_t.get(t3).firstChild.firstChild.setAttribute("d", e3.toSVGPath());
      }
      removeFreeHighlight(t3) {
        this.remove(t3);
        this.#xt.delete(t3);
      }
      updatePath(t3, e3) {
        this.#xt.get(t3).setAttribute("d", e3.toSVGPath());
      }
      updateBox(t3, e3) {
        DrawLayer.#Tt(this.#_t.get(t3), e3);
      }
      show(t3, e3) {
        this.#_t.get(t3).classList.toggle("hidden", !e3);
      }
      rotate(t3, e3) {
        this.#_t.get(t3).setAttribute("data-main-rotation", e3);
      }
      changeColor(t3, e3) {
        this.#_t.get(t3).setAttribute("fill", e3);
      }
      changeOpacity(t3, e3) {
        this.#_t.get(t3).setAttribute("fill-opacity", e3);
      }
      addClass(t3, e3) {
        this.#_t.get(t3).classList.add(e3);
      }
      removeClass(t3, e3) {
        this.#_t.get(t3).classList.remove(e3);
      }
      remove(t3) {
        if (null !== this.#v) {
          this.#_t.get(t3).remove();
          this.#_t.delete(t3);
        }
      }
      destroy() {
        this.#v = null;
        for (const t3 of this.#_t.values()) t3.remove();
        this.#_t.clear();
      }
    }
  }, 731: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { AnnotationEditorLayer: () => AnnotationEditorLayer });
    var i2 = e2(292), s2 = e2(310), n2 = e2(830), a2 = e2(976);
    const r2 = /\r\n?|\n/g;
    class FreeTextEditor extends s2.AnnotationEditor {
      #Mt = this.editorDivBlur.bind(this);
      #Pt = this.editorDivFocus.bind(this);
      #Rt = this.editorDivInput.bind(this);
      #Ft = this.editorDivKeydown.bind(this);
      #kt = this.editorDivPaste.bind(this);
      #g;
      #Dt = "";
      #It = `${this.id}-editor`;
      #Lt;
      #Ot = null;
      static _freeTextDefaultContent = "";
      static _internalPadding = 0;
      static _defaultColor = null;
      static _defaultFontSize = 10;
      static get _keyboardManager() {
        const t3 = FreeTextEditor.prototype, arrowChecker = (t4) => t4.isEmpty(), e3 = n2.AnnotationEditorUIManager.TRANSLATE_SMALL, s3 = n2.AnnotationEditorUIManager.TRANSLATE_BIG;
        return (0, i2.shadow)(this, "_keyboardManager", new n2.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t3.commitOrRemove, { bubbles: true }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t3.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t3._translateEmpty, { args: [-e3, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t3._translateEmpty, { args: [-s3, 0], checker: arrowChecker }], [["ArrowRight", "mac+ArrowRight"], t3._translateEmpty, { args: [e3, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t3._translateEmpty, { args: [s3, 0], checker: arrowChecker }], [["ArrowUp", "mac+ArrowUp"], t3._translateEmpty, { args: [0, -e3], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t3._translateEmpty, { args: [0, -s3], checker: arrowChecker }], [["ArrowDown", "mac+ArrowDown"], t3._translateEmpty, { args: [0, e3], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t3._translateEmpty, { args: [0, s3], checker: arrowChecker }]]));
      }
      static _type = "freetext";
      static _editorType = i2.AnnotationEditorType.FREETEXT;
      constructor(t3) {
        super({ ...t3, name: "freeTextEditor" });
        this.#g = t3.color || FreeTextEditor._defaultColor || s2.AnnotationEditor._defaultLineColor;
        this.#Lt = t3.fontSize || FreeTextEditor._defaultFontSize;
      }
      static initialize(t3, e3) {
        s2.AnnotationEditor.initialize(t3, e3, { strings: ["pdfjs-free-text-default-content"] });
        const i3 = getComputedStyle(document.documentElement);
        this._internalPadding = parseFloat(i3.getPropertyValue("--freetext-padding"));
      }
      static updateDefaultParams(t3, e3) {
        switch (t3) {
          case i2.AnnotationEditorParamsType.FREETEXT_SIZE:
            FreeTextEditor._defaultFontSize = e3;
            break;
          case i2.AnnotationEditorParamsType.FREETEXT_COLOR:
            FreeTextEditor._defaultColor = e3;
        }
      }
      updateParams(t3, e3) {
        switch (t3) {
          case i2.AnnotationEditorParamsType.FREETEXT_SIZE:
            this.#Nt(e3);
            break;
          case i2.AnnotationEditorParamsType.FREETEXT_COLOR:
            this.#Bt(e3);
        }
      }
      static get defaultPropertiesToUpdate() {
        return [[i2.AnnotationEditorParamsType.FREETEXT_SIZE, FreeTextEditor._defaultFontSize], [i2.AnnotationEditorParamsType.FREETEXT_COLOR, FreeTextEditor._defaultColor || s2.AnnotationEditor._defaultLineColor]];
      }
      get propertiesToUpdate() {
        return [[i2.AnnotationEditorParamsType.FREETEXT_SIZE, this.#Lt], [i2.AnnotationEditorParamsType.FREETEXT_COLOR, this.#g]];
      }
      #Nt(t3) {
        const setFontsize = (t4) => {
          this.editorDiv.style.fontSize = `calc(${t4}px * var(--scale-factor))`;
          this.translate(0, -(t4 - this.#Lt) * this.parentScale);
          this.#Lt = t4;
          this.#Ht();
        }, e3 = this.#Lt;
        this.addCommands({ cmd: setFontsize.bind(this, t3), undo: setFontsize.bind(this, e3), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: i2.AnnotationEditorParamsType.FREETEXT_SIZE, overwriteIfSameType: true, keepUndo: true });
      }
      #Bt(t3) {
        const setColor = (t4) => {
          this.#g = this.editorDiv.style.color = t4;
        }, e3 = this.#g;
        this.addCommands({ cmd: setColor.bind(this, t3), undo: setColor.bind(this, e3), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: i2.AnnotationEditorParamsType.FREETEXT_COLOR, overwriteIfSameType: true, keepUndo: true });
      }
      _translateEmpty(t3, e3) {
        this._uiManager.translateSelectedEditors(t3, e3, true);
      }
      getInitialTranslation() {
        const t3 = this.parentScale;
        return [-FreeTextEditor._internalPadding * t3, -(FreeTextEditor._internalPadding + this.#Lt) * t3];
      }
      rebuild() {
        if (this.parent) {
          super.rebuild();
          null !== this.div && (this.isAttachedToDOM || this.parent.add(this));
        }
      }
      enableEditMode() {
        if (!this.isInEditMode()) {
          this.parent.setEditingState(false);
          this.parent.updateToolbar(i2.AnnotationEditorType.FREETEXT);
          super.enableEditMode();
          this.overlayDiv.classList.remove("enabled");
          this.editorDiv.contentEditable = true;
          this._isDraggable = false;
          this.div.removeAttribute("aria-activedescendant");
          this.editorDiv.addEventListener("keydown", this.#Ft);
          this.editorDiv.addEventListener("focus", this.#Pt);
          this.editorDiv.addEventListener("blur", this.#Mt);
          this.editorDiv.addEventListener("input", this.#Rt);
          this.editorDiv.addEventListener("paste", this.#kt);
        }
      }
      disableEditMode() {
        if (this.isInEditMode()) {
          this.parent.setEditingState(true);
          super.disableEditMode();
          this.overlayDiv.classList.add("enabled");
          this.editorDiv.contentEditable = false;
          this.div.setAttribute("aria-activedescendant", this.#It);
          this._isDraggable = true;
          this.editorDiv.removeEventListener("keydown", this.#Ft);
          this.editorDiv.removeEventListener("focus", this.#Pt);
          this.editorDiv.removeEventListener("blur", this.#Mt);
          this.editorDiv.removeEventListener("input", this.#Rt);
          this.editorDiv.removeEventListener("paste", this.#kt);
          this.div.focus({ preventScroll: true });
          this.isEditing = false;
          this.parent.div.classList.add("freetextEditing");
        }
      }
      focusin(t3) {
        if (this._focusEventsAllowed) {
          super.focusin(t3);
          t3.target !== this.editorDiv && this.editorDiv.focus();
        }
      }
      onceAdded() {
        if (!this.width) {
          this.enableEditMode();
          this.editorDiv.focus();
          this._initialOptions?.isCentered && this.center();
          this._initialOptions = null;
        }
      }
      isEmpty() {
        return !this.editorDiv || "" === this.editorDiv.innerText.trim();
      }
      remove() {
        this.isEditing = false;
        if (this.parent) {
          this.parent.setEditingState(true);
          this.parent.div.classList.add("freetextEditing");
        }
        super.remove();
      }
      #Ut() {
        const t3 = [];
        this.editorDiv.normalize();
        for (const e3 of this.editorDiv.childNodes) t3.push(FreeTextEditor.#zt(e3));
        return t3.join("\n");
      }
      #Ht() {
        const [t3, e3] = this.parentDimensions;
        let i3;
        if (this.isAttachedToDOM) i3 = this.div.getBoundingClientRect();
        else {
          const { currentLayer: t4, div: e4 } = this, s3 = e4.style.display, n3 = e4.classList.contains("hidden");
          e4.classList.remove("hidden");
          e4.style.display = "hidden";
          t4.div.append(this.div);
          i3 = e4.getBoundingClientRect();
          e4.remove();
          e4.style.display = s3;
          e4.classList.toggle("hidden", n3);
        }
        if (this.rotation % 180 == this.parentRotation % 180) {
          this.width = i3.width / t3;
          this.height = i3.height / e3;
        } else {
          this.width = i3.height / t3;
          this.height = i3.width / e3;
        }
        this.fixAndSetPosition();
      }
      commit() {
        if (!this.isInEditMode()) return;
        super.commit();
        this.disableEditMode();
        const t3 = this.#Dt, e3 = this.#Dt = this.#Ut().trimEnd();
        if (t3 === e3) return;
        const setText = (t4) => {
          this.#Dt = t4;
          if (t4) {
            this.#Vt();
            this._uiManager.rebuild(this);
            this.#Ht();
          } else this.remove();
        };
        this.addCommands({ cmd: () => {
          setText(e3);
        }, undo: () => {
          setText(t3);
        }, mustExec: false });
        this.#Ht();
      }
      shouldGetKeyboardEvents() {
        return this.isInEditMode();
      }
      enterInEditMode() {
        this.enableEditMode();
        this.editorDiv.focus();
      }
      dblclick(t3) {
        this.enterInEditMode();
      }
      keydown(t3) {
        if (t3.target === this.div && "Enter" === t3.key) {
          this.enterInEditMode();
          t3.preventDefault();
        }
      }
      editorDivKeydown(t3) {
        FreeTextEditor._keyboardManager.exec(this, t3);
      }
      editorDivFocus(t3) {
        this.isEditing = true;
      }
      editorDivBlur(t3) {
        this.isEditing = false;
      }
      editorDivInput(t3) {
        this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
      }
      disableEditing() {
        this.editorDiv.setAttribute("role", "comment");
        this.editorDiv.removeAttribute("aria-multiline");
      }
      enableEditing() {
        this.editorDiv.setAttribute("role", "textbox");
        this.editorDiv.setAttribute("aria-multiline", true);
      }
      render() {
        if (this.div) return this.div;
        let t3, e3;
        if (this.width) {
          t3 = this.x;
          e3 = this.y;
        }
        super.render();
        this.editorDiv = document.createElement("div");
        this.editorDiv.className = "internal";
        this.editorDiv.setAttribute("id", this.#It);
        this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text");
        this.enableEditing();
        s2.AnnotationEditor._l10nPromise.get("pdfjs-free-text-default-content").then(((t4) => this.editorDiv?.setAttribute("default-content", t4)));
        this.editorDiv.contentEditable = true;
        const { style: i3 } = this.editorDiv;
        i3.fontSize = `calc(${this.#Lt}px * var(--scale-factor))`;
        i3.color = this.#g;
        this.div.append(this.editorDiv);
        this.overlayDiv = document.createElement("div");
        this.overlayDiv.classList.add("overlay", "enabled");
        this.div.append(this.overlayDiv);
        (0, n2.bindEvents)(this, this.div, ["dblclick", "keydown"]);
        if (this.width) {
          const [i4, s3] = this.parentDimensions;
          if (this.annotationElementId) {
            const { position: n3 } = this.#Ot;
            let [a3, r3] = this.getInitialTranslation();
            [a3, r3] = this.pageTranslationToScreen(a3, r3);
            const [o3, l3] = this.pageDimensions, [h3, d2] = this.pageTranslation;
            let c2, u2;
            switch (this.rotation) {
              case 0:
                c2 = t3 + (n3[0] - h3) / o3;
                u2 = e3 + this.height - (n3[1] - d2) / l3;
                break;
              case 90:
                c2 = t3 + (n3[0] - h3) / o3;
                u2 = e3 - (n3[1] - d2) / l3;
                [a3, r3] = [r3, -a3];
                break;
              case 180:
                c2 = t3 - this.width + (n3[0] - h3) / o3;
                u2 = e3 - (n3[1] - d2) / l3;
                [a3, r3] = [-a3, -r3];
                break;
              case 270:
                c2 = t3 + (n3[0] - h3 - this.height * l3) / o3;
                u2 = e3 + (n3[1] - d2 - this.width * o3) / l3;
                [a3, r3] = [-r3, a3];
            }
            this.setAt(c2 * i4, u2 * s3, a3, r3);
          } else this.setAt(t3 * i4, e3 * s3, this.width * i4, this.height * s3);
          this.#Vt();
          this._isDraggable = true;
          this.editorDiv.contentEditable = false;
        } else {
          this._isDraggable = false;
          this.editorDiv.contentEditable = true;
        }
        return this.div;
      }
      static #zt(t3) {
        return (t3.nodeType === Node.TEXT_NODE ? t3.nodeValue : t3.innerText).replaceAll(r2, "");
      }
      editorDivPaste(t3) {
        const e3 = t3.clipboardData || window.clipboardData, { types: i3 } = e3;
        if (1 === i3.length && "text/plain" === i3[0]) return;
        t3.preventDefault();
        const s3 = FreeTextEditor.#jt(e3.getData("text") || "").replaceAll(r2, "\n");
        if (!s3) return;
        const n3 = window.getSelection();
        if (!n3.rangeCount) return;
        this.editorDiv.normalize();
        n3.deleteFromDocument();
        const a3 = n3.getRangeAt(0);
        if (!s3.includes("\n")) {
          a3.insertNode(document.createTextNode(s3));
          this.editorDiv.normalize();
          n3.collapseToStart();
          return;
        }
        const { startContainer: o3, startOffset: l3 } = a3, h3 = [], d2 = [];
        if (o3.nodeType === Node.TEXT_NODE) {
          const t4 = o3.parentElement;
          d2.push(o3.nodeValue.slice(l3).replaceAll(r2, ""));
          if (t4 !== this.editorDiv) {
            let e4 = h3;
            for (const i4 of this.editorDiv.childNodes) i4 !== t4 ? e4.push(FreeTextEditor.#zt(i4)) : e4 = d2;
          }
          h3.push(o3.nodeValue.slice(0, l3).replaceAll(r2, ""));
        } else if (o3 === this.editorDiv) {
          let t4 = h3, e4 = 0;
          for (const i4 of this.editorDiv.childNodes) {
            e4++ === l3 && (t4 = d2);
            t4.push(FreeTextEditor.#zt(i4));
          }
        }
        this.#Dt = `${h3.join("\n")}${s3}${d2.join("\n")}`;
        this.#Vt();
        const c2 = new Range();
        let u2 = h3.reduce(((t4, e4) => t4 + e4.length), 0);
        for (const { firstChild: t4 } of this.editorDiv.childNodes) if (t4.nodeType === Node.TEXT_NODE) {
          const e4 = t4.nodeValue.length;
          if (u2 <= e4) {
            c2.setStart(t4, u2);
            c2.setEnd(t4, u2);
            break;
          }
          u2 -= e4;
        }
        n3.removeAllRanges();
        n3.addRange(c2);
      }
      #Vt() {
        this.editorDiv.replaceChildren();
        if (this.#Dt) for (const t3 of this.#Dt.split("\n")) {
          const e3 = document.createElement("div");
          e3.append(t3 ? document.createTextNode(t3) : document.createElement("br"));
          this.editorDiv.append(e3);
        }
      }
      #Gt() {
        return this.#Dt.replaceAll("\xA0", " ");
      }
      static #jt(t3) {
        return t3.replaceAll(" ", "\xA0");
      }
      get contentDiv() {
        return this.editorDiv;
      }
      static deserialize(t3, e3, s3) {
        let n3 = null;
        if (t3 instanceof a2.FreeTextAnnotationElement) {
          const { data: { defaultAppearanceData: { fontSize: e4, fontColor: s4 }, rect: a3, rotation: r4, id: o3 }, textContent: l3, textPosition: h3, parent: { page: { pageNumber: d2 } } } = t3;
          if (!l3 || 0 === l3.length) return null;
          n3 = t3 = { annotationType: i2.AnnotationEditorType.FREETEXT, color: Array.from(s4), fontSize: e4, value: l3.join("\n"), position: h3, pageIndex: d2 - 1, rect: a3.slice(0), rotation: r4, id: o3, deleted: false };
        }
        const r3 = super.deserialize(t3, e3, s3);
        r3.#Lt = t3.fontSize;
        r3.#g = i2.Util.makeHexColor(...t3.color);
        r3.#Dt = FreeTextEditor.#jt(t3.value);
        r3.annotationElementId = t3.id || null;
        r3.#Ot = n3;
        return r3;
      }
      serialize(t3 = false) {
        if (this.isEmpty()) return null;
        if (this.deleted) return { pageIndex: this.pageIndex, id: this.annotationElementId, deleted: true };
        const e3 = FreeTextEditor._internalPadding * this.parentScale, n3 = this.getRect(e3, e3), a3 = s2.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#g), r3 = { annotationType: i2.AnnotationEditorType.FREETEXT, color: a3, fontSize: this.#Lt, value: this.#Gt(), pageIndex: this.pageIndex, rect: n3, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
        if (t3) return r3;
        if (this.annotationElementId && !this.#$t(r3)) return null;
        r3.id = this.annotationElementId;
        return r3;
      }
      #$t(t3) {
        const { value: e3, fontSize: i3, color: s3, pageIndex: n3 } = this.#Ot;
        return this._hasBeenMoved || t3.value !== e3 || t3.fontSize !== i3 || t3.color.some(((t4, e4) => t4 !== s3[e4])) || t3.pageIndex !== n3;
      }
      renderAnnotationElement(t3) {
        const e3 = super.renderAnnotationElement(t3);
        if (this.deleted) return e3;
        const { style: i3 } = e3;
        i3.fontSize = `calc(${this.#Lt}px * var(--scale-factor))`;
        i3.color = this.#g;
        e3.replaceChildren();
        for (const t4 of this.#Dt.split("\n")) {
          const i4 = document.createElement("div");
          i4.append(t4 ? document.createTextNode(t4) : document.createElement("br"));
          e3.append(i4);
        }
        const s3 = FreeTextEditor._internalPadding * this.parentScale;
        t3.updateEdited({ rect: this.getRect(s3, s3) });
        return e3;
      }
      resetAnnotationElement(t3) {
        super.resetAnnotationElement(t3);
        t3.resetEdited();
      }
    }
    var o2 = e2(61), l2 = e2(259), h2 = e2(419);
    class HighlightEditor extends s2.AnnotationEditor {
      #Wt = null;
      #qt = 0;
      #Kt;
      #Xt = null;
      #Yt = null;
      #Jt = null;
      #Qt = null;
      #Zt = 0;
      #te = null;
      #ee = null;
      #gt = null;
      #ie = false;
      #se = this.#ne.bind(this);
      #ae = null;
      #re;
      #oe = null;
      #le = "";
      #he;
      #de = "";
      static _defaultColor = null;
      static _defaultOpacity = 1;
      static _defaultThickness = 12;
      static _l10nPromise;
      static _type = "highlight";
      static _editorType = i2.AnnotationEditorType.HIGHLIGHT;
      static _freeHighlightId = -1;
      static _freeHighlight = null;
      static _freeHighlightClipId = "";
      static get _keyboardManager() {
        const t3 = HighlightEditor.prototype;
        return (0, i2.shadow)(this, "_keyboardManager", new n2.KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], t3._moveCaret, { args: [0] }], [["ArrowRight", "mac+ArrowRight"], t3._moveCaret, { args: [1] }], [["ArrowUp", "mac+ArrowUp"], t3._moveCaret, { args: [2] }], [["ArrowDown", "mac+ArrowDown"], t3._moveCaret, { args: [3] }]]));
      }
      constructor(t3) {
        super({ ...t3, name: "highlightEditor" });
        this.color = t3.color || HighlightEditor._defaultColor;
        this.#he = t3.thickness || HighlightEditor._defaultThickness;
        this.#re = t3.opacity || HighlightEditor._defaultOpacity;
        this.#Kt = t3.boxes || null;
        this.#de = t3.methodOfCreation || "";
        this.#le = t3.text || "";
        this._isDraggable = false;
        if (t3.highlightId > -1) {
          this.#ie = true;
          this.#ce(t3);
          this.#ue();
        } else {
          this.#Wt = t3.anchorNode;
          this.#qt = t3.anchorOffset;
          this.#Qt = t3.focusNode;
          this.#Zt = t3.focusOffset;
          this.#pe();
          this.#ue();
          this.rotate(this.rotation);
        }
      }
      get telemetryInitialData() {
        return { action: "added", type: this.#ie ? "free_highlight" : "highlight", color: this._uiManager.highlightColorNames.get(this.color), thickness: this.#he, methodOfCreation: this.#de };
      }
      get telemetryFinalData() {
        return { type: "highlight", color: this._uiManager.highlightColorNames.get(this.color) };
      }
      static computeTelemetryFinalData(t3) {
        return { numberOfColors: t3.get("color").size };
      }
      #pe() {
        const t3 = new o2.Outliner(this.#Kt, 1e-3);
        this.#ee = t3.getOutlines();
        ({ x: this.x, y: this.y, width: this.width, height: this.height } = this.#ee.box);
        const e3 = new o2.Outliner(this.#Kt, 25e-4, 1e-3, "ltr" === this._uiManager.direction);
        this.#Jt = e3.getOutlines();
        const { lastPoint: i3 } = this.#Jt.box;
        this.#ae = [(i3[0] - this.x) / this.width, (i3[1] - this.y) / this.height];
      }
      #ce({ highlightOutlines: t3, highlightId: e3, clipPathId: i3 }) {
        this.#ee = t3;
        this.#Jt = t3.getNewOutline(this.#he / 2 + 1.5, 25e-4);
        if (e3 >= 0) {
          this.#gt = e3;
          this.#Xt = i3;
          this.parent.drawLayer.finalizeLine(e3, t3);
          this.#oe = this.parent.drawLayer.highlightOutline(this.#Jt);
        } else if (this.parent) {
          const e4 = this.parent.viewport.rotation;
          this.parent.drawLayer.updateLine(this.#gt, t3);
          this.parent.drawLayer.updateBox(this.#gt, HighlightEditor.#ge(this.#ee.box, (e4 - this.rotation + 360) % 360));
          this.parent.drawLayer.updateLine(this.#oe, this.#Jt);
          this.parent.drawLayer.updateBox(this.#oe, HighlightEditor.#ge(this.#Jt.box, e4));
        }
        const { x: s3, y: n3, width: a3, height: r3 } = t3.box;
        switch (this.rotation) {
          case 0:
            this.x = s3;
            this.y = n3;
            this.width = a3;
            this.height = r3;
            break;
          case 90: {
            const [t4, e4] = this.parentDimensions;
            this.x = n3;
            this.y = 1 - s3;
            this.width = a3 * e4 / t4;
            this.height = r3 * t4 / e4;
            break;
          }
          case 180:
            this.x = 1 - s3;
            this.y = 1 - n3;
            this.width = a3;
            this.height = r3;
            break;
          case 270: {
            const [t4, e4] = this.parentDimensions;
            this.x = 1 - n3;
            this.y = s3;
            this.width = a3 * e4 / t4;
            this.height = r3 * t4 / e4;
            break;
          }
        }
        const { lastPoint: o3 } = this.#Jt.box;
        this.#ae = [(o3[0] - s3) / a3, (o3[1] - n3) / r3];
      }
      static initialize(t3, e3) {
        s2.AnnotationEditor.initialize(t3, e3);
        HighlightEditor._defaultColor ||= e3.highlightColors?.values().next().value || "#fff066";
      }
      static updateDefaultParams(t3, e3) {
        switch (t3) {
          case i2.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
            HighlightEditor._defaultColor = e3;
            break;
          case i2.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
            HighlightEditor._defaultThickness = e3;
        }
      }
      translateInPage(t3, e3) {
      }
      get toolbarPosition() {
        return this.#ae;
      }
      updateParams(t3, e3) {
        switch (t3) {
          case i2.AnnotationEditorParamsType.HIGHLIGHT_COLOR:
            this.#Bt(e3);
            break;
          case i2.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
            this.#me(e3);
        }
      }
      static get defaultPropertiesToUpdate() {
        return [[i2.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, HighlightEditor._defaultColor], [i2.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, HighlightEditor._defaultThickness]];
      }
      get propertiesToUpdate() {
        return [[i2.AnnotationEditorParamsType.HIGHLIGHT_COLOR, this.color || HighlightEditor._defaultColor], [i2.AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, this.#he || HighlightEditor._defaultThickness], [i2.AnnotationEditorParamsType.HIGHLIGHT_FREE, this.#ie]];
      }
      #Bt(t3) {
        const setColor = (t4) => {
          this.color = t4;
          this.parent?.drawLayer.changeColor(this.#gt, t4);
          this.#Yt?.updateColor(t4);
        }, e3 = this.color;
        this.addCommands({ cmd: setColor.bind(this, t3), undo: setColor.bind(this, e3), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: i2.AnnotationEditorParamsType.HIGHLIGHT_COLOR, overwriteIfSameType: true, keepUndo: true });
        this._reportTelemetry({ action: "color_changed", color: this._uiManager.highlightColorNames.get(t3) }, true);
      }
      #me(t3) {
        const e3 = this.#he, setThickness = (t4) => {
          this.#he = t4;
          this.#fe(t4);
        };
        this.addCommands({ cmd: setThickness.bind(this, t3), undo: setThickness.bind(this, e3), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: i2.AnnotationEditorParamsType.INK_THICKNESS, overwriteIfSameType: true, keepUndo: true });
        this._reportTelemetry({ action: "thickness_changed", thickness: t3 }, true);
      }
      async addEditToolbar() {
        const t3 = await super.addEditToolbar();
        if (!t3) return null;
        if (this._uiManager.highlightColors) {
          this.#Yt = new l2.ColorPicker({ editor: this });
          t3.addColorPicker(this.#Yt);
        }
        return t3;
      }
      disableEditing() {
        super.disableEditing();
        this.div.classList.toggle("disabled", true);
      }
      enableEditing() {
        super.enableEditing();
        this.div.classList.toggle("disabled", false);
      }
      fixAndSetPosition() {
        return super.fixAndSetPosition(this.#be());
      }
      getBaseTranslation() {
        return [0, 0];
      }
      getRect(t3, e3) {
        return super.getRect(t3, e3, this.#be());
      }
      onceAdded() {
        this.parent.addUndoableEditor(this);
        this.div.focus();
      }
      remove() {
        this.#Ae();
        this._reportTelemetry({ action: "deleted" });
        super.remove();
      }
      rebuild() {
        if (this.parent) {
          super.rebuild();
          if (null !== this.div) {
            this.#ue();
            this.isAttachedToDOM || this.parent.add(this);
          }
        }
      }
      setParent(t3) {
        let e3 = false;
        if (this.parent && !t3) this.#Ae();
        else if (t3) {
          this.#ue(t3);
          e3 = !this.parent && this.div?.classList.contains("selectedEditor");
        }
        super.setParent(t3);
        this.show(this._isVisible);
        e3 && this.select();
      }
      #fe(t3) {
        if (!this.#ie) return;
        this.#ce({ highlightOutlines: this.#ee.getNewOutline(t3 / 2) });
        this.fixAndSetPosition();
        const [e3, i3] = this.parentDimensions;
        this.setDims(this.width * e3, this.height * i3);
      }
      #Ae() {
        if (null !== this.#gt && this.parent) {
          this.parent.drawLayer.remove(this.#gt);
          this.#gt = null;
          this.parent.drawLayer.remove(this.#oe);
          this.#oe = null;
        }
      }
      #ue(t3 = this.parent) {
        if (null === this.#gt) {
          ({ id: this.#gt, clipPathId: this.#Xt } = t3.drawLayer.highlight(this.#ee, this.color, this.#re));
          this.#oe = t3.drawLayer.highlightOutline(this.#Jt);
          this.#te && (this.#te.style.clipPath = this.#Xt);
        }
      }
      static #ge({ x: t3, y: e3, width: i3, height: s3 }, n3) {
        switch (n3) {
          case 90:
            return { x: 1 - e3 - s3, y: t3, width: s3, height: i3 };
          case 180:
            return { x: 1 - t3 - i3, y: 1 - e3 - s3, width: i3, height: s3 };
          case 270:
            return { x: e3, y: 1 - t3 - i3, width: s3, height: i3 };
        }
        return { x: t3, y: e3, width: i3, height: s3 };
      }
      rotate(t3) {
        const { drawLayer: e3 } = this.parent;
        let i3;
        if (this.#ie) {
          t3 = (t3 - this.rotation + 360) % 360;
          i3 = HighlightEditor.#ge(this.#ee.box, t3);
        } else i3 = HighlightEditor.#ge(this, t3);
        e3.rotate(this.#gt, t3);
        e3.rotate(this.#oe, t3);
        e3.updateBox(this.#gt, i3);
        e3.updateBox(this.#oe, HighlightEditor.#ge(this.#Jt.box, t3));
      }
      render() {
        if (this.div) return this.div;
        const t3 = super.render();
        if (this.#le) {
          t3.setAttribute("aria-label", this.#le);
          t3.setAttribute("role", "mark");
        }
        this.#ie ? t3.classList.add("free") : this.div.addEventListener("keydown", this.#se);
        const e3 = this.#te = document.createElement("div");
        t3.append(e3);
        e3.setAttribute("aria-hidden", "true");
        e3.className = "internal";
        e3.style.clipPath = this.#Xt;
        const [i3, s3] = this.parentDimensions;
        this.setDims(this.width * i3, this.height * s3);
        (0, n2.bindEvents)(this, this.#te, ["pointerover", "pointerleave"]);
        this.enableEditing();
        return t3;
      }
      pointerover() {
        this.parent.drawLayer.addClass(this.#oe, "hovered");
      }
      pointerleave() {
        this.parent.drawLayer.removeClass(this.#oe, "hovered");
      }
      #ne(t3) {
        HighlightEditor._keyboardManager.exec(this, t3);
      }
      _moveCaret(t3) {
        this.parent.unselect(this);
        switch (t3) {
          case 0:
          case 2:
            this.#ve(true);
            break;
          case 1:
          case 3:
            this.#ve(false);
        }
      }
      #ve(t3) {
        if (!this.#Wt) return;
        const e3 = window.getSelection();
        t3 ? e3.setPosition(this.#Wt, this.#qt) : e3.setPosition(this.#Qt, this.#Zt);
      }
      select() {
        super.select();
        if (this.#oe) {
          this.parent?.drawLayer.removeClass(this.#oe, "hovered");
          this.parent?.drawLayer.addClass(this.#oe, "selected");
        }
      }
      unselect() {
        super.unselect();
        if (this.#oe) {
          this.parent?.drawLayer.removeClass(this.#oe, "selected");
          this.#ie || this.#ve(false);
        }
      }
      get _mustFixPosition() {
        return !this.#ie;
      }
      show(t3 = this._isVisible) {
        super.show(t3);
        if (this.parent) {
          this.parent.drawLayer.show(this.#gt, t3);
          this.parent.drawLayer.show(this.#oe, t3);
        }
      }
      #be() {
        return this.#ie ? this.rotation : 0;
      }
      #ye() {
        if (this.#ie) return null;
        const [t3, e3] = this.pageDimensions, i3 = this.#Kt, s3 = new Array(8 * i3.length);
        let n3 = 0;
        for (const { x: a3, y: r3, width: o3, height: l3 } of i3) {
          const i4 = a3 * t3, h3 = (1 - r3 - l3) * e3;
          s3[n3] = s3[n3 + 4] = i4;
          s3[n3 + 1] = s3[n3 + 3] = h3;
          s3[n3 + 2] = s3[n3 + 6] = i4 + o3 * t3;
          s3[n3 + 5] = s3[n3 + 7] = h3 + l3 * e3;
          n3 += 8;
        }
        return s3;
      }
      #Ee(t3) {
        return this.#ee.serialize(t3, this.#be());
      }
      static startHighlighting(t3, e3, { target: i3, x: s3, y: n3 }) {
        const { x: a3, y: r3, width: l3, height: d2 } = i3.getBoundingClientRect(), pointerMove = (e4) => {
          this.#we(t3, e4);
        }, c2 = { capture: true, passive: false }, pointerDown = (t4) => {
          t4.preventDefault();
          t4.stopPropagation();
        }, pointerUpCallback = (e4) => {
          i3.removeEventListener("pointermove", pointerMove);
          window.removeEventListener("blur", pointerUpCallback);
          window.removeEventListener("pointerup", pointerUpCallback);
          window.removeEventListener("pointerdown", pointerDown, c2);
          window.removeEventListener("contextmenu", h2.noContextMenu);
          this.#_e(t3, e4);
        };
        window.addEventListener("blur", pointerUpCallback);
        window.addEventListener("pointerup", pointerUpCallback);
        window.addEventListener("pointerdown", pointerDown, c2);
        window.addEventListener("contextmenu", h2.noContextMenu);
        i3.addEventListener("pointermove", pointerMove);
        this._freeHighlight = new o2.FreeOutliner({ x: s3, y: n3 }, [a3, r3, l3, d2], t3.scale, this._defaultThickness / 2, e3, 1e-3);
        ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t3.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, true));
      }
      static #we(t3, e3) {
        this._freeHighlight.add(e3) && t3.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
      }
      static #_e(t3, e3) {
        this._freeHighlight.isEmpty() ? t3.drawLayer.removeFreeHighlight(this._freeHighlightId) : t3.createAndAddNewEditor(e3, false, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" });
        this._freeHighlightId = -1;
        this._freeHighlight = null;
        this._freeHighlightClipId = "";
      }
      static deserialize(t3, e3, s3) {
        const n3 = super.deserialize(t3, e3, s3), { rect: [a3, r3, o3, l3], color: h3, quadPoints: d2 } = t3;
        n3.color = i2.Util.makeHexColor(...h3);
        n3.#re = t3.opacity;
        const [c2, u2] = n3.pageDimensions;
        n3.width = (o3 - a3) / c2;
        n3.height = (l3 - r3) / u2;
        const p2 = n3.#Kt = [];
        for (let t4 = 0; t4 < d2.length; t4 += 8) p2.push({ x: (d2[4] - o3) / c2, y: (l3 - (1 - d2[t4 + 5])) / u2, width: (d2[t4 + 2] - d2[t4]) / c2, height: (d2[t4 + 5] - d2[t4 + 1]) / u2 });
        n3.#pe();
        return n3;
      }
      serialize(t3 = false) {
        if (this.isEmpty() || t3) return null;
        const e3 = this.getRect(0, 0), n3 = s2.AnnotationEditor._colorManager.convert(this.color);
        return { annotationType: i2.AnnotationEditorType.HIGHLIGHT, color: n3, opacity: this.#re, thickness: this.#he, quadPoints: this.#ye(), outlines: this.#Ee(e3), pageIndex: this.pageIndex, rect: e3, rotation: this.#be(), structTreeParentId: this._structTreeParentId };
      }
      static canCreateNewEmptyEditor() {
        return false;
      }
    }
    class InkEditor extends s2.AnnotationEditor {
      #xe = 0;
      #Te = 0;
      #Se = this.canvasPointermove.bind(this);
      #Ce = this.canvasPointerleave.bind(this);
      #Me = this.canvasPointerup.bind(this);
      #Pe = this.canvasPointerdown.bind(this);
      #Re = null;
      #Fe = new Path2D();
      #ke = false;
      #De = false;
      #Ie = false;
      #Le = null;
      #Oe = 0;
      #Ne = 0;
      #Be = null;
      static _defaultColor = null;
      static _defaultOpacity = 1;
      static _defaultThickness = 1;
      static _type = "ink";
      static _editorType = i2.AnnotationEditorType.INK;
      constructor(t3) {
        super({ ...t3, name: "inkEditor" });
        this.color = t3.color || null;
        this.thickness = t3.thickness || null;
        this.opacity = t3.opacity || null;
        this.paths = [];
        this.bezierPath2D = [];
        this.allRawPaths = [];
        this.currentPath = [];
        this.scaleFactor = 1;
        this.translationX = this.translationY = 0;
        this.x = 0;
        this.y = 0;
        this._willKeepAspectRatio = true;
      }
      static initialize(t3, e3) {
        s2.AnnotationEditor.initialize(t3, e3);
      }
      static updateDefaultParams(t3, e3) {
        switch (t3) {
          case i2.AnnotationEditorParamsType.INK_THICKNESS:
            InkEditor._defaultThickness = e3;
            break;
          case i2.AnnotationEditorParamsType.INK_COLOR:
            InkEditor._defaultColor = e3;
            break;
          case i2.AnnotationEditorParamsType.INK_OPACITY:
            InkEditor._defaultOpacity = e3 / 100;
        }
      }
      updateParams(t3, e3) {
        switch (t3) {
          case i2.AnnotationEditorParamsType.INK_THICKNESS:
            this.#me(e3);
            break;
          case i2.AnnotationEditorParamsType.INK_COLOR:
            this.#Bt(e3);
            break;
          case i2.AnnotationEditorParamsType.INK_OPACITY:
            this.#He(e3);
        }
      }
      static get defaultPropertiesToUpdate() {
        return [[i2.AnnotationEditorParamsType.INK_THICKNESS, InkEditor._defaultThickness], [i2.AnnotationEditorParamsType.INK_COLOR, InkEditor._defaultColor || s2.AnnotationEditor._defaultLineColor], [i2.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * InkEditor._defaultOpacity)]];
      }
      get propertiesToUpdate() {
        return [[i2.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || InkEditor._defaultThickness], [i2.AnnotationEditorParamsType.INK_COLOR, this.color || InkEditor._defaultColor || s2.AnnotationEditor._defaultLineColor], [i2.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? InkEditor._defaultOpacity))]];
      }
      #me(t3) {
        const setThickness = (t4) => {
          this.thickness = t4;
          this.#Ue();
        }, e3 = this.thickness;
        this.addCommands({ cmd: setThickness.bind(this, t3), undo: setThickness.bind(this, e3), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: i2.AnnotationEditorParamsType.INK_THICKNESS, overwriteIfSameType: true, keepUndo: true });
      }
      #Bt(t3) {
        const setColor = (t4) => {
          this.color = t4;
          this.#ze();
        }, e3 = this.color;
        this.addCommands({ cmd: setColor.bind(this, t3), undo: setColor.bind(this, e3), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: i2.AnnotationEditorParamsType.INK_COLOR, overwriteIfSameType: true, keepUndo: true });
      }
      #He(t3) {
        const setOpacity = (t4) => {
          this.opacity = t4;
          this.#ze();
        };
        t3 /= 100;
        const e3 = this.opacity;
        this.addCommands({ cmd: setOpacity.bind(this, t3), undo: setOpacity.bind(this, e3), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: i2.AnnotationEditorParamsType.INK_OPACITY, overwriteIfSameType: true, keepUndo: true });
      }
      rebuild() {
        if (this.parent) {
          super.rebuild();
          if (null !== this.div) {
            if (!this.canvas) {
              this.#Ve();
              this.#je();
            }
            if (!this.isAttachedToDOM) {
              this.parent.add(this);
              this.#Ge();
            }
            this.#Ue();
          }
        }
      }
      remove() {
        if (null !== this.canvas) {
          this.isEmpty() || this.commit();
          this.canvas.width = this.canvas.height = 0;
          this.canvas.remove();
          this.canvas = null;
          if (this.#Re) {
            clearTimeout(this.#Re);
            this.#Re = null;
          }
          this.#Le.disconnect();
          this.#Le = null;
          super.remove();
        }
      }
      setParent(t3) {
        !this.parent && t3 ? this._uiManager.removeShouldRescale(this) : this.parent && null === t3 && this._uiManager.addShouldRescale(this);
        super.setParent(t3);
      }
      onScaleChanging() {
        const [t3, e3] = this.parentDimensions, i3 = this.width * t3, s3 = this.height * e3;
        this.setDimensions(i3, s3);
      }
      enableEditMode() {
        if (!this.#ke && null !== this.canvas) {
          super.enableEditMode();
          this._isDraggable = false;
          this.canvas.addEventListener("pointerdown", this.#Pe);
        }
      }
      disableEditMode() {
        if (this.isInEditMode() && null !== this.canvas) {
          super.disableEditMode();
          this._isDraggable = !this.isEmpty();
          this.div.classList.remove("editing");
          this.canvas.removeEventListener("pointerdown", this.#Pe);
        }
      }
      onceAdded() {
        this._isDraggable = !this.isEmpty();
      }
      isEmpty() {
        return 0 === this.paths.length || 1 === this.paths.length && 0 === this.paths[0].length;
      }
      #$e() {
        const { parentRotation: t3, parentDimensions: [e3, i3] } = this;
        switch (t3) {
          case 90:
            return [0, i3, i3, e3];
          case 180:
            return [e3, i3, e3, i3];
          case 270:
            return [e3, 0, i3, e3];
          default:
            return [0, 0, e3, i3];
        }
      }
      #We() {
        const { ctx: t3, color: e3, opacity: i3, thickness: s3, parentScale: a3, scaleFactor: r3 } = this;
        t3.lineWidth = s3 * a3 / r3;
        t3.lineCap = "round";
        t3.lineJoin = "round";
        t3.miterLimit = 10;
        t3.strokeStyle = `${e3}${(0, n2.opacityToHex)(i3)}`;
      }
      #qe(t3, e3) {
        this.canvas.addEventListener("contextmenu", h2.noContextMenu);
        this.canvas.addEventListener("pointerleave", this.#Ce);
        this.canvas.addEventListener("pointermove", this.#Se);
        this.canvas.addEventListener("pointerup", this.#Me);
        this.canvas.removeEventListener("pointerdown", this.#Pe);
        this.isEditing = true;
        if (!this.#Ie) {
          this.#Ie = true;
          this.#Ge();
          this.thickness ||= InkEditor._defaultThickness;
          this.color ||= InkEditor._defaultColor || s2.AnnotationEditor._defaultLineColor;
          this.opacity ??= InkEditor._defaultOpacity;
        }
        this.currentPath.push([t3, e3]);
        this.#De = false;
        this.#We();
        this.#Be = () => {
          this.#Ke();
          this.#Be && window.requestAnimationFrame(this.#Be);
        };
        window.requestAnimationFrame(this.#Be);
      }
      #Xe(t3, e3) {
        const [i3, s3] = this.currentPath.at(-1);
        if (this.currentPath.length > 1 && t3 === i3 && e3 === s3) return;
        const n3 = this.currentPath;
        let a3 = this.#Fe;
        n3.push([t3, e3]);
        this.#De = true;
        if (n3.length <= 2) {
          a3.moveTo(...n3[0]);
          a3.lineTo(t3, e3);
        } else {
          if (3 === n3.length) {
            this.#Fe = a3 = new Path2D();
            a3.moveTo(...n3[0]);
          }
          this.#Ye(a3, ...n3.at(-3), ...n3.at(-2), t3, e3);
        }
      }
      #Je() {
        if (0 === this.currentPath.length) return;
        const t3 = this.currentPath.at(-1);
        this.#Fe.lineTo(...t3);
      }
      #Qe(t3, e3) {
        this.#Be = null;
        t3 = Math.min(Math.max(t3, 0), this.canvas.width);
        e3 = Math.min(Math.max(e3, 0), this.canvas.height);
        this.#Xe(t3, e3);
        this.#Je();
        let i3;
        if (1 !== this.currentPath.length) i3 = this.#Ze();
        else {
          const s4 = [t3, e3];
          i3 = [[s4, s4.slice(), s4.slice(), s4]];
        }
        const s3 = this.#Fe, n3 = this.currentPath;
        this.currentPath = [];
        this.#Fe = new Path2D();
        this.addCommands({ cmd: () => {
          this.allRawPaths.push(n3);
          this.paths.push(i3);
          this.bezierPath2D.push(s3);
          this._uiManager.rebuild(this);
        }, undo: () => {
          this.allRawPaths.pop();
          this.paths.pop();
          this.bezierPath2D.pop();
          if (0 === this.paths.length) this.remove();
          else {
            if (!this.canvas) {
              this.#Ve();
              this.#je();
            }
            this.#Ue();
          }
        }, mustExec: true });
      }
      #Ke() {
        if (!this.#De) return;
        this.#De = false;
        const t3 = Math.ceil(this.thickness * this.parentScale), e3 = this.currentPath.slice(-3), i3 = e3.map(((t4) => t4[0])), s3 = e3.map(((t4) => t4[1])), { ctx: n3 } = (Math.min(...i3), Math.max(...i3), Math.min(...s3), Math.max(...s3), this);
        n3.save();
        n3.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const t4 of this.bezierPath2D) n3.stroke(t4);
        n3.stroke(this.#Fe);
        n3.restore();
      }
      #Ye(t3, e3, i3, s3, n3, a3, r3) {
        const o3 = (e3 + s3) / 2, l3 = (i3 + n3) / 2, h3 = (s3 + a3) / 2, d2 = (n3 + r3) / 2;
        t3.bezierCurveTo(o3 + 2 * (s3 - o3) / 3, l3 + 2 * (n3 - l3) / 3, h3 + 2 * (s3 - h3) / 3, d2 + 2 * (n3 - d2) / 3, h3, d2);
      }
      #Ze() {
        const t3 = this.currentPath;
        if (t3.length <= 2) return [[t3[0], t3[0], t3.at(-1), t3.at(-1)]];
        const e3 = [];
        let i3, [s3, n3] = t3[0];
        for (i3 = 1; i3 < t3.length - 2; i3++) {
          const [a4, r4] = t3[i3], [o4, l4] = t3[i3 + 1], h4 = (a4 + o4) / 2, d3 = (r4 + l4) / 2, c2 = [s3 + 2 * (a4 - s3) / 3, n3 + 2 * (r4 - n3) / 3], u2 = [h4 + 2 * (a4 - h4) / 3, d3 + 2 * (r4 - d3) / 3];
          e3.push([[s3, n3], c2, u2, [h4, d3]]);
          [s3, n3] = [h4, d3];
        }
        const [a3, r3] = t3[i3], [o3, l3] = t3[i3 + 1], h3 = [s3 + 2 * (a3 - s3) / 3, n3 + 2 * (r3 - n3) / 3], d2 = [o3 + 2 * (a3 - o3) / 3, l3 + 2 * (r3 - l3) / 3];
        e3.push([[s3, n3], h3, d2, [o3, l3]]);
        return e3;
      }
      #ze() {
        if (this.isEmpty()) {
          this.#ti();
          return;
        }
        this.#We();
        const { canvas: t3, ctx: e3 } = this;
        e3.setTransform(1, 0, 0, 1, 0, 0);
        e3.clearRect(0, 0, t3.width, t3.height);
        this.#ti();
        for (const t4 of this.bezierPath2D) e3.stroke(t4);
      }
      commit() {
        if (!this.#ke) {
          super.commit();
          this.isEditing = false;
          this.disableEditMode();
          this.setInForeground();
          this.#ke = true;
          this.div.classList.add("disabled");
          this.#Ue(true);
          this.select();
          this.parent.addInkEditorIfNeeded(true);
          this.moveInDOM();
          this.div.focus({ preventScroll: true });
        }
      }
      focusin(t3) {
        if (this._focusEventsAllowed) {
          super.focusin(t3);
          this.enableEditMode();
        }
      }
      canvasPointerdown(t3) {
        if (0 === t3.button && this.isInEditMode() && !this.#ke) {
          this.setInForeground();
          t3.preventDefault();
          this.div.contains(document.activeElement) || this.div.focus({ preventScroll: true });
          this.#qe(t3.offsetX, t3.offsetY);
        }
      }
      canvasPointermove(t3) {
        t3.preventDefault();
        this.#Xe(t3.offsetX, t3.offsetY);
      }
      canvasPointerup(t3) {
        t3.preventDefault();
        this.#ei(t3);
      }
      canvasPointerleave(t3) {
        this.#ei(t3);
      }
      #ei(t3) {
        this.canvas.removeEventListener("pointerleave", this.#Ce);
        this.canvas.removeEventListener("pointermove", this.#Se);
        this.canvas.removeEventListener("pointerup", this.#Me);
        this.canvas.addEventListener("pointerdown", this.#Pe);
        this.#Re && clearTimeout(this.#Re);
        this.#Re = setTimeout((() => {
          this.#Re = null;
          this.canvas.removeEventListener("contextmenu", h2.noContextMenu);
        }), 10);
        this.#Qe(t3.offsetX, t3.offsetY);
        this.addToAnnotationStorage();
        this.setInBackground();
      }
      #Ve() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.canvas.height = 0;
        this.canvas.className = "inkEditorCanvas";
        this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas");
        this.div.append(this.canvas);
        this.ctx = this.canvas.getContext("2d");
      }
      #je() {
        this.#Le = new ResizeObserver(((t3) => {
          const e3 = t3[0].contentRect;
          e3.width && e3.height && this.setDimensions(e3.width, e3.height);
        }));
        this.#Le.observe(this.div);
      }
      get isResizable() {
        return !this.isEmpty() && this.#ke;
      }
      render() {
        if (this.div) return this.div;
        let t3, e3;
        if (this.width) {
          t3 = this.x;
          e3 = this.y;
        }
        super.render();
        this.div.setAttribute("data-l10n-id", "pdfjs-ink");
        const [i3, s3, n3, a3] = this.#$e();
        this.setAt(i3, s3, 0, 0);
        this.setDims(n3, a3);
        this.#Ve();
        if (this.width) {
          const [i4, s4] = this.parentDimensions;
          this.setAspectRatio(this.width * i4, this.height * s4);
          this.setAt(t3 * i4, e3 * s4, this.width * i4, this.height * s4);
          this.#Ie = true;
          this.#Ge();
          this.setDims(this.width * i4, this.height * s4);
          this.#ze();
          this.div.classList.add("disabled");
        } else {
          this.div.classList.add("editing");
          this.enableEditMode();
        }
        this.#je();
        return this.div;
      }
      #Ge() {
        if (!this.#Ie) return;
        const [t3, e3] = this.parentDimensions;
        this.canvas.width = Math.ceil(this.width * t3);
        this.canvas.height = Math.ceil(this.height * e3);
        this.#ti();
      }
      setDimensions(t3, e3) {
        const i3 = Math.round(t3), s3 = Math.round(e3);
        if (this.#Oe === i3 && this.#Ne === s3) return;
        this.#Oe = i3;
        this.#Ne = s3;
        this.canvas.style.visibility = "hidden";
        const [n3, a3] = this.parentDimensions;
        this.width = t3 / n3;
        this.height = e3 / a3;
        this.fixAndSetPosition();
        this.#ke && this.#ii(t3, e3);
        this.#Ge();
        this.#ze();
        this.canvas.style.visibility = "visible";
        this.fixDims();
      }
      #ii(t3, e3) {
        const i3 = this.#si(), s3 = (t3 - i3) / this.#Te, n3 = (e3 - i3) / this.#xe;
        this.scaleFactor = Math.min(s3, n3);
      }
      #ti() {
        const t3 = this.#si() / 2;
        this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + t3, this.translationY * this.scaleFactor + t3);
      }
      static #ni(t3) {
        const e3 = new Path2D();
        for (let i3 = 0, s3 = t3.length; i3 < s3; i3++) {
          const [s4, n3, a3, r3] = t3[i3];
          0 === i3 && e3.moveTo(...s4);
          e3.bezierCurveTo(n3[0], n3[1], a3[0], a3[1], r3[0], r3[1]);
        }
        return e3;
      }
      static #ai(t3, e3, i3) {
        const [s3, n3, a3, r3] = e3;
        switch (i3) {
          case 0:
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
              t3[e4] += s3;
              t3[e4 + 1] = r3 - t3[e4 + 1];
            }
            break;
          case 90:
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
              const i5 = t3[e4];
              t3[e4] = t3[e4 + 1] + s3;
              t3[e4 + 1] = i5 + n3;
            }
            break;
          case 180:
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
              t3[e4] = a3 - t3[e4];
              t3[e4 + 1] += n3;
            }
            break;
          case 270:
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
              const i5 = t3[e4];
              t3[e4] = a3 - t3[e4 + 1];
              t3[e4 + 1] = r3 - i5;
            }
            break;
          default:
            throw new Error("Invalid rotation");
        }
        return t3;
      }
      static #ri(t3, e3, i3) {
        const [s3, n3, a3, r3] = e3;
        switch (i3) {
          case 0:
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
              t3[e4] -= s3;
              t3[e4 + 1] = r3 - t3[e4 + 1];
            }
            break;
          case 90:
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
              const i5 = t3[e4];
              t3[e4] = t3[e4 + 1] - n3;
              t3[e4 + 1] = i5 - s3;
            }
            break;
          case 180:
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
              t3[e4] = a3 - t3[e4];
              t3[e4 + 1] -= n3;
            }
            break;
          case 270:
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
              const i5 = t3[e4];
              t3[e4] = r3 - t3[e4 + 1];
              t3[e4 + 1] = a3 - i5;
            }
            break;
          default:
            throw new Error("Invalid rotation");
        }
        return t3;
      }
      #oi(t3, e3, i3, s3) {
        const n3 = [], a3 = this.thickness / 2, r3 = t3 * e3 + a3, o3 = t3 * i3 + a3;
        for (const e4 of this.paths) {
          const i4 = [], a4 = [];
          for (let s4 = 0, n4 = e4.length; s4 < n4; s4++) {
            const [l3, h3, d2, c2] = e4[s4];
            if (l3[0] === c2[0] && l3[1] === c2[1] && 1 === n4) {
              const e5 = t3 * l3[0] + r3, s5 = t3 * l3[1] + o3;
              i4.push(e5, s5);
              a4.push(e5, s5);
              break;
            }
            const u2 = t3 * l3[0] + r3, p2 = t3 * l3[1] + o3, g2 = t3 * h3[0] + r3, m2 = t3 * h3[1] + o3, f2 = t3 * d2[0] + r3, b2 = t3 * d2[1] + o3, A2 = t3 * c2[0] + r3, v2 = t3 * c2[1] + o3;
            if (0 === s4) {
              i4.push(u2, p2);
              a4.push(u2, p2);
            }
            i4.push(g2, m2, f2, b2, A2, v2);
            a4.push(g2, m2);
            s4 === n4 - 1 && a4.push(A2, v2);
          }
          n3.push({ bezier: InkEditor.#ai(i4, s3, this.rotation), points: InkEditor.#ai(a4, s3, this.rotation) });
        }
        return n3;
      }
      #li() {
        let t3 = 1 / 0, e3 = -1 / 0, s3 = 1 / 0, n3 = -1 / 0;
        for (const a3 of this.paths) for (const [r3, o3, l3, h3] of a3) {
          const a4 = i2.Util.bezierBoundingBox(...r3, ...o3, ...l3, ...h3);
          t3 = Math.min(t3, a4[0]);
          s3 = Math.min(s3, a4[1]);
          e3 = Math.max(e3, a4[2]);
          n3 = Math.max(n3, a4[3]);
        }
        return [t3, s3, e3, n3];
      }
      #si() {
        return this.#ke ? Math.ceil(this.thickness * this.parentScale) : 0;
      }
      #Ue(t3 = false) {
        if (this.isEmpty()) return;
        if (!this.#ke) {
          this.#ze();
          return;
        }
        const e3 = this.#li(), i3 = this.#si();
        this.#Te = Math.max(s2.AnnotationEditor.MIN_SIZE, e3[2] - e3[0]);
        this.#xe = Math.max(s2.AnnotationEditor.MIN_SIZE, e3[3] - e3[1]);
        const n3 = Math.ceil(i3 + this.#Te * this.scaleFactor), a3 = Math.ceil(i3 + this.#xe * this.scaleFactor), [r3, o3] = this.parentDimensions;
        this.width = n3 / r3;
        this.height = a3 / o3;
        this.setAspectRatio(n3, a3);
        const l3 = this.translationX, h3 = this.translationY;
        this.translationX = -e3[0];
        this.translationY = -e3[1];
        this.#Ge();
        this.#ze();
        this.#Oe = n3;
        this.#Ne = a3;
        this.setDims(n3, a3);
        const d2 = t3 ? i3 / this.scaleFactor / 2 : 0;
        this.translate(l3 - this.translationX - d2, h3 - this.translationY - d2);
      }
      static deserialize(t3, e3, n3) {
        if (t3 instanceof a2.InkAnnotationElement) return null;
        const r3 = super.deserialize(t3, e3, n3);
        r3.thickness = t3.thickness;
        r3.color = i2.Util.makeHexColor(...t3.color);
        r3.opacity = t3.opacity;
        const [o3, l3] = r3.pageDimensions, h3 = r3.width * o3, d2 = r3.height * l3, c2 = r3.parentScale, u2 = t3.thickness / 2;
        r3.#ke = true;
        r3.#Oe = Math.round(h3);
        r3.#Ne = Math.round(d2);
        const { paths: p2, rect: g2, rotation: m2 } = t3;
        for (let { bezier: t4 } of p2) {
          t4 = InkEditor.#ri(t4, g2, m2);
          const e4 = [];
          r3.paths.push(e4);
          let i3 = c2 * (t4[0] - u2), s3 = c2 * (t4[1] - u2);
          for (let n5 = 2, a3 = t4.length; n5 < a3; n5 += 6) {
            const a4 = c2 * (t4[n5] - u2), r4 = c2 * (t4[n5 + 1] - u2), o4 = c2 * (t4[n5 + 2] - u2), l4 = c2 * (t4[n5 + 3] - u2), h4 = c2 * (t4[n5 + 4] - u2), d3 = c2 * (t4[n5 + 5] - u2);
            e4.push([[i3, s3], [a4, r4], [o4, l4], [h4, d3]]);
            i3 = h4;
            s3 = d3;
          }
          const n4 = this.#ni(e4);
          r3.bezierPath2D.push(n4);
        }
        const f2 = r3.#li();
        r3.#Te = Math.max(s2.AnnotationEditor.MIN_SIZE, f2[2] - f2[0]);
        r3.#xe = Math.max(s2.AnnotationEditor.MIN_SIZE, f2[3] - f2[1]);
        r3.#ii(h3, d2);
        return r3;
      }
      serialize() {
        if (this.isEmpty()) return null;
        const t3 = this.getRect(0, 0), e3 = s2.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
        return { annotationType: i2.AnnotationEditorType.INK, color: e3, thickness: this.thickness, opacity: this.opacity, paths: this.#oi(this.scaleFactor / this.parentScale, this.translationX, this.translationY, t3), pageIndex: this.pageIndex, rect: t3, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
      }
    }
    class StampEditor extends s2.AnnotationEditor {
      #hi = null;
      #di = null;
      #ci = null;
      #ui = null;
      #pi = null;
      #gi = "";
      #mi = null;
      #Le = null;
      #fi = null;
      #bi = false;
      #Ai = false;
      static _type = "stamp";
      static _editorType = i2.AnnotationEditorType.STAMP;
      constructor(t3) {
        super({ ...t3, name: "stampEditor" });
        this.#ui = t3.bitmapUrl;
        this.#pi = t3.bitmapFile;
      }
      static initialize(t3, e3) {
        s2.AnnotationEditor.initialize(t3, e3);
      }
      static get supportedTypes() {
        return (0, i2.shadow)(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map(((t3) => `image/${t3}`)));
      }
      static get supportedTypesStr() {
        return (0, i2.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
      }
      static isHandlingMimeForPasting(t3) {
        return this.supportedTypes.includes(t3);
      }
      static paste(t3, e3) {
        e3.pasteEditor(i2.AnnotationEditorType.STAMP, { bitmapFile: t3.getAsFile() });
      }
      #vi(t3, e3 = false) {
        if (t3) {
          this.#hi = t3.bitmap;
          if (!e3) {
            this.#di = t3.id;
            this.#bi = t3.isSvg;
          }
          t3.file && (this.#gi = t3.file.name);
          this.#Ve();
        } else this.remove();
      }
      #yi() {
        this.#ci = null;
        this._uiManager.enableWaiting(false);
        this.#mi && this.div.focus();
      }
      #Ei() {
        if (this.#di) {
          this._uiManager.enableWaiting(true);
          this._uiManager.imageManager.getFromId(this.#di).then(((t4) => this.#vi(t4, true))).finally((() => this.#yi()));
          return;
        }
        if (this.#ui) {
          const t4 = this.#ui;
          this.#ui = null;
          this._uiManager.enableWaiting(true);
          this.#ci = this._uiManager.imageManager.getFromUrl(t4).then(((t5) => this.#vi(t5))).finally((() => this.#yi()));
          return;
        }
        if (this.#pi) {
          const t4 = this.#pi;
          this.#pi = null;
          this._uiManager.enableWaiting(true);
          this.#ci = this._uiManager.imageManager.getFromFile(t4).then(((t5) => this.#vi(t5))).finally((() => this.#yi()));
          return;
        }
        const t3 = document.createElement("input");
        t3.type = "file";
        t3.accept = StampEditor.supportedTypesStr;
        this.#ci = new Promise(((e3) => {
          t3.addEventListener("change", (async () => {
            if (t3.files && 0 !== t3.files.length) {
              this._uiManager.enableWaiting(true);
              const e4 = await this._uiManager.imageManager.getFromFile(t3.files[0]);
              this.#vi(e4);
            } else this.remove();
            e3();
          }));
          t3.addEventListener("cancel", (() => {
            this.remove();
            e3();
          }));
        })).finally((() => this.#yi()));
        t3.click();
      }
      remove() {
        if (this.#di) {
          this.#hi = null;
          this._uiManager.imageManager.deleteId(this.#di);
          this.#mi?.remove();
          this.#mi = null;
          this.#Le?.disconnect();
          this.#Le = null;
          if (this.#fi) {
            clearTimeout(this.#fi);
            this.#fi = null;
          }
        }
        super.remove();
      }
      rebuild() {
        if (this.parent) {
          super.rebuild();
          if (null !== this.div) {
            this.#di && null === this.#mi && this.#Ei();
            this.isAttachedToDOM || this.parent.add(this);
          }
        } else this.#di && this.#Ei();
      }
      onceAdded() {
        this._isDraggable = true;
        this.div.focus();
      }
      isEmpty() {
        return !(this.#ci || this.#hi || this.#ui || this.#pi || this.#di);
      }
      get isResizable() {
        return true;
      }
      render() {
        if (this.div) return this.div;
        let t3, e3;
        if (this.width) {
          t3 = this.x;
          e3 = this.y;
        }
        super.render();
        this.div.hidden = true;
        this.addAltTextButton();
        this.#hi ? this.#Ve() : this.#Ei();
        if (this.width) {
          const [i3, s3] = this.parentDimensions;
          this.setAt(t3 * i3, e3 * s3, this.width * i3, this.height * s3);
        }
        return this.div;
      }
      #Ve() {
        const { div: t3 } = this;
        let { width: e3, height: i3 } = this.#hi;
        const [s3, n3] = this.pageDimensions, a3 = 0.75;
        if (this.width) {
          e3 = this.width * s3;
          i3 = this.height * n3;
        } else if (e3 > a3 * s3 || i3 > a3 * n3) {
          const t4 = Math.min(a3 * s3 / e3, a3 * n3 / i3);
          e3 *= t4;
          i3 *= t4;
        }
        const [r3, o3] = this.parentDimensions;
        this.setDims(e3 * r3 / s3, i3 * o3 / n3);
        this._uiManager.enableWaiting(false);
        const l3 = this.#mi = document.createElement("canvas");
        t3.append(l3);
        t3.hidden = false;
        this.#wi(e3, i3);
        this.#je();
        if (!this.#Ai) {
          this.parent.addUndoableEditor(this);
          this.#Ai = true;
        }
        this._reportTelemetry({ action: "inserted_image" });
        this.#gi && l3.setAttribute("aria-label", this.#gi);
      }
      #_i(t3, e3) {
        const [i3, s3] = this.parentDimensions;
        this.width = t3 / i3;
        this.height = e3 / s3;
        this.setDims(t3, e3);
        this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition();
        this._initialOptions = null;
        null !== this.#fi && clearTimeout(this.#fi);
        this.#fi = setTimeout((() => {
          this.#fi = null;
          this.#wi(t3, e3);
        }), 200);
      }
      #xi(t3, e3) {
        const { width: i3, height: s3 } = this.#hi;
        let n3 = i3, a3 = s3, r3 = this.#hi;
        for (; n3 > 2 * t3 || a3 > 2 * e3; ) {
          const i4 = n3, s4 = a3;
          n3 > 2 * t3 && (n3 = n3 >= 16384 ? Math.floor(n3 / 2) - 1 : Math.ceil(n3 / 2));
          a3 > 2 * e3 && (a3 = a3 >= 16384 ? Math.floor(a3 / 2) - 1 : Math.ceil(a3 / 2));
          const o3 = new OffscreenCanvas(n3, a3);
          o3.getContext("2d").drawImage(r3, 0, 0, i4, s4, 0, 0, n3, a3);
          r3 = o3.transferToImageBitmap();
        }
        return r3;
      }
      #wi(t3, e3) {
        t3 = Math.ceil(t3);
        e3 = Math.ceil(e3);
        const i3 = this.#mi;
        if (!i3 || i3.width === t3 && i3.height === e3) return;
        i3.width = t3;
        i3.height = e3;
        const s3 = this.#bi ? this.#hi : this.#xi(t3, e3);
        if (this._uiManager.hasMLManager && !this.hasAltText()) {
          const i4 = new OffscreenCanvas(t3, e3);
          i4.getContext("2d").drawImage(s3, 0, 0, s3.width, s3.height, 0, 0, t3, e3);
          i4.convertToBlob().then(((t4) => {
            const e4 = new FileReader();
            e4.onload = () => {
              const t5 = e4.result;
              this._uiManager.mlGuess({ service: "image-to-text", request: { imageData: t5 } }).then(((t6) => {
                const e5 = t6?.output || "";
                this.parent && e5 && !this.hasAltText() && (this.altTextData = { altText: e5, decorative: false });
              }));
            };
            e4.readAsDataURL(t4);
          }));
        }
        const n3 = i3.getContext("2d");
        n3.filter = this._uiManager.hcmFilter;
        n3.drawImage(s3, 0, 0, s3.width, s3.height, 0, 0, t3, e3);
      }
      getImageForAltText() {
        return this.#mi;
      }
      #Ti(t3) {
        if (t3) {
          if (this.#bi) {
            const t5 = this._uiManager.imageManager.getSvgUrl(this.#di);
            if (t5) return t5;
          }
          const t4 = document.createElement("canvas");
          ({ width: t4.width, height: t4.height } = this.#hi);
          t4.getContext("2d").drawImage(this.#hi, 0, 0);
          return t4.toDataURL();
        }
        if (this.#bi) {
          const [t4, e3] = this.pageDimensions, i3 = Math.round(this.width * t4 * h2.PixelsPerInch.PDF_TO_CSS_UNITS), s3 = Math.round(this.height * e3 * h2.PixelsPerInch.PDF_TO_CSS_UNITS), n3 = new OffscreenCanvas(i3, s3);
          n3.getContext("2d").drawImage(this.#hi, 0, 0, this.#hi.width, this.#hi.height, 0, 0, i3, s3);
          return n3.transferToImageBitmap();
        }
        return structuredClone(this.#hi);
      }
      #je() {
        this.#Le = new ResizeObserver(((t3) => {
          const e3 = t3[0].contentRect;
          e3.width && e3.height && this.#_i(e3.width, e3.height);
        }));
        this.#Le.observe(this.div);
      }
      static deserialize(t3, e3, i3) {
        if (t3 instanceof a2.StampAnnotationElement) return null;
        const s3 = super.deserialize(t3, e3, i3), { rect: n3, bitmapUrl: r3, bitmapId: o3, isSvg: l3, accessibilityData: h3 } = t3;
        o3 && i3.imageManager.isValidId(o3) ? s3.#di = o3 : s3.#ui = r3;
        s3.#bi = l3;
        const [d2, c2] = s3.pageDimensions;
        s3.width = (n3[2] - n3[0]) / d2;
        s3.height = (n3[3] - n3[1]) / c2;
        h3 && (s3.altTextData = h3);
        return s3;
      }
      serialize(t3 = false, e3 = null) {
        if (this.isEmpty()) return null;
        const s3 = { annotationType: i2.AnnotationEditorType.STAMP, bitmapId: this.#di, pageIndex: this.pageIndex, rect: this.getRect(0, 0), rotation: this.rotation, isSvg: this.#bi, structTreeParentId: this._structTreeParentId };
        if (t3) {
          s3.bitmapUrl = this.#Ti(true);
          s3.accessibilityData = this.altTextData;
          return s3;
        }
        const { decorative: n3, altText: a3 } = this.altTextData;
        !n3 && a3 && (s3.accessibilityData = { type: "Figure", alt: a3 });
        if (null === e3) return s3;
        e3.stamps ||= /* @__PURE__ */ new Map();
        const r3 = this.#bi ? (s3.rect[2] - s3.rect[0]) * (s3.rect[3] - s3.rect[1]) : null;
        if (e3.stamps.has(this.#di)) {
          if (this.#bi) {
            const t4 = e3.stamps.get(this.#di);
            if (r3 > t4.area) {
              t4.area = r3;
              t4.serialized.bitmap.close();
              t4.serialized.bitmap = this.#Ti(false);
            }
          }
        } else {
          e3.stamps.set(this.#di, { area: r3, serialized: s3 });
          s3.bitmap = this.#Ti(false);
        }
        return s3;
      }
    }
    class AnnotationEditorLayer {
      #I;
      #Si = false;
      #Ci = null;
      #Mi = null;
      #Pi = null;
      #Ri = null;
      #Fi = null;
      #ki = /* @__PURE__ */ new Map();
      #Di = false;
      #Ii = false;
      #Li = false;
      #Oi = null;
      #Ni;
      static _initialized = false;
      static #Bi = new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor].map(((t3) => [t3._editorType, t3])));
      constructor({ uiManager: t3, pageIndex: e3, div: i3, accessibilityManager: s3, annotationLayer: n3, drawLayer: a3, textLayer: r3, viewport: o3, l10n: l3 }) {
        const h3 = [...AnnotationEditorLayer.#Bi.values()];
        if (!AnnotationEditorLayer._initialized) {
          AnnotationEditorLayer._initialized = true;
          for (const e4 of h3) e4.initialize(l3, t3);
        }
        t3.registerEditorTypes(h3);
        this.#Ni = t3;
        this.pageIndex = e3;
        this.div = i3;
        this.#I = s3;
        this.#Ci = n3;
        this.viewport = o3;
        this.#Oi = r3;
        this.drawLayer = a3;
        this.#Ni.addLayer(this);
      }
      get isEmpty() {
        return 0 === this.#ki.size;
      }
      get isInvisible() {
        return this.isEmpty && this.#Ni.getMode() === i2.AnnotationEditorType.NONE;
      }
      updateToolbar(t3) {
        this.#Ni.updateToolbar(t3);
      }
      updateMode(t3 = this.#Ni.getMode()) {
        this.#Hi();
        switch (t3) {
          case i2.AnnotationEditorType.NONE:
            this.disableTextSelection();
            this.togglePointerEvents(false);
            this.toggleAnnotationLayerPointerEvents(true);
            this.disableClick();
            return;
          case i2.AnnotationEditorType.INK:
            this.addInkEditorIfNeeded(false);
            this.disableTextSelection();
            this.togglePointerEvents(true);
            this.disableClick();
            break;
          case i2.AnnotationEditorType.HIGHLIGHT:
            this.enableTextSelection();
            this.togglePointerEvents(false);
            this.disableClick();
            break;
          default:
            this.disableTextSelection();
            this.togglePointerEvents(true);
            this.enableClick();
        }
        this.toggleAnnotationLayerPointerEvents(false);
        const { classList: e3 } = this.div;
        for (const i3 of AnnotationEditorLayer.#Bi.values()) e3.toggle(`${i3._type}Editing`, t3 === i3._editorType);
        this.div.hidden = false;
      }
      hasTextLayer(t3) {
        return t3 === this.#Oi?.div;
      }
      addInkEditorIfNeeded(t3) {
        if (this.#Ni.getMode() !== i2.AnnotationEditorType.INK) return;
        if (!t3) {
          for (const t4 of this.#ki.values()) if (t4.isEmpty()) {
            t4.setInBackground();
            return;
          }
        }
        this.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, false).setInBackground();
      }
      setEditingState(t3) {
        this.#Ni.setEditingState(t3);
      }
      addCommands(t3) {
        this.#Ni.addCommands(t3);
      }
      togglePointerEvents(t3 = false) {
        this.div.classList.toggle("disabled", !t3);
      }
      toggleAnnotationLayerPointerEvents(t3 = false) {
        this.#Ci?.div.classList.toggle("disabled", !t3);
      }
      enable() {
        this.div.tabIndex = 0;
        this.togglePointerEvents(true);
        const t3 = /* @__PURE__ */ new Set();
        for (const e4 of this.#ki.values()) {
          e4.enableEditing();
          e4.show(true);
          if (e4.annotationElementId) {
            this.#Ni.removeChangedExistingAnnotation(e4);
            t3.add(e4.annotationElementId);
          }
        }
        if (!this.#Ci) return;
        const e3 = this.#Ci.getEditableAnnotations();
        for (const i3 of e3) {
          i3.hide();
          if (this.#Ni.isDeletedAnnotationElement(i3.data.id)) continue;
          if (t3.has(i3.data.id)) continue;
          const e4 = this.deserialize(i3);
          if (e4) {
            this.addOrRebuild(e4);
            e4.enableEditing();
          }
        }
      }
      disable() {
        this.#Li = true;
        this.div.tabIndex = -1;
        this.togglePointerEvents(false);
        const t3 = /* @__PURE__ */ new Map(), e3 = /* @__PURE__ */ new Map();
        for (const i4 of this.#ki.values()) {
          i4.disableEditing();
          if (i4.annotationElementId) if (null === i4.serialize()) {
            e3.set(i4.annotationElementId, i4);
            this.getEditableAnnotation(i4.annotationElementId)?.show();
            i4.remove();
          } else t3.set(i4.annotationElementId, i4);
        }
        if (this.#Ci) {
          const i4 = this.#Ci.getEditableAnnotations();
          for (const s3 of i4) {
            const { id: i5 } = s3.data;
            if (this.#Ni.isDeletedAnnotationElement(i5)) continue;
            let n3 = e3.get(i5);
            if (n3) {
              n3.resetAnnotationElement(s3);
              n3.show(false);
              s3.show();
            } else {
              n3 = t3.get(i5);
              if (n3) {
                this.#Ni.addChangedExistingAnnotation(n3);
                n3.renderAnnotationElement(s3);
                n3.show(false);
              }
              s3.show();
            }
          }
        }
        this.#Hi();
        this.isEmpty && (this.div.hidden = true);
        const { classList: i3 } = this.div;
        for (const t4 of AnnotationEditorLayer.#Bi.values()) i3.remove(`${t4._type}Editing`);
        this.disableTextSelection();
        this.toggleAnnotationLayerPointerEvents(true);
        this.#Li = false;
      }
      getEditableAnnotation(t3) {
        return this.#Ci?.getEditableAnnotation(t3) || null;
      }
      setActiveEditor(t3) {
        this.#Ni.getActive() !== t3 && this.#Ni.setActiveEditor(t3);
      }
      enableTextSelection() {
        this.div.tabIndex = -1;
        if (this.#Oi?.div && !this.#Ri) {
          this.#Ri = this.#Ui.bind(this);
          this.#Oi.div.addEventListener("pointerdown", this.#Ri);
          this.#Oi.div.classList.add("highlighting");
        }
      }
      disableTextSelection() {
        this.div.tabIndex = 0;
        if (this.#Oi?.div && this.#Ri) {
          this.#Oi.div.removeEventListener("pointerdown", this.#Ri);
          this.#Ri = null;
          this.#Oi.div.classList.remove("highlighting");
        }
      }
      #Ui(t3) {
        this.#Ni.unselectAll();
        if (t3.target === this.#Oi.div) {
          const { isMac: e3 } = i2.FeatureTest.platform;
          if (0 !== t3.button || t3.ctrlKey && e3) return;
          this.#Ni.showAllEditors("highlight", true, true);
          this.#Oi.div.classList.add("free");
          HighlightEditor.startHighlighting(this, "ltr" === this.#Ni.direction, t3);
          this.#Oi.div.addEventListener("pointerup", (() => {
            this.#Oi.div.classList.remove("free");
          }), { once: true });
          t3.preventDefault();
        }
      }
      enableClick() {
        if (!this.#Pi) {
          this.#Pi = this.pointerdown.bind(this);
          this.#Mi = this.pointerup.bind(this);
          this.div.addEventListener("pointerdown", this.#Pi);
          this.div.addEventListener("pointerup", this.#Mi);
        }
      }
      disableClick() {
        if (this.#Pi) {
          this.div.removeEventListener("pointerdown", this.#Pi);
          this.div.removeEventListener("pointerup", this.#Mi);
          this.#Pi = null;
          this.#Mi = null;
        }
      }
      attach(t3) {
        this.#ki.set(t3.id, t3);
        const { annotationElementId: e3 } = t3;
        e3 && this.#Ni.isDeletedAnnotationElement(e3) && this.#Ni.removeDeletedAnnotationElement(t3);
      }
      detach(t3) {
        this.#ki.delete(t3.id);
        this.#I?.removePointerInTextLayer(t3.contentDiv);
        !this.#Li && t3.annotationElementId && this.#Ni.addDeletedAnnotationElement(t3);
      }
      remove(t3) {
        this.detach(t3);
        this.#Ni.removeEditor(t3);
        t3.div.remove();
        t3.isAttachedToDOM = false;
        this.#Ii || this.addInkEditorIfNeeded(false);
      }
      changeParent(t3) {
        if (t3.parent !== this) {
          if (t3.parent && t3.annotationElementId) {
            this.#Ni.addDeletedAnnotationElement(t3.annotationElementId);
            s2.AnnotationEditor.deleteAnnotationElement(t3);
            t3.annotationElementId = null;
          }
          this.attach(t3);
          t3.parent?.detach(t3);
          t3.setParent(this);
          if (t3.div && t3.isAttachedToDOM) {
            t3.div.remove();
            this.div.append(t3.div);
          }
        }
      }
      add(t3) {
        if (t3.parent !== this || !t3.isAttachedToDOM) {
          this.changeParent(t3);
          this.#Ni.addEditor(t3);
          this.attach(t3);
          if (!t3.isAttachedToDOM) {
            const e3 = t3.render();
            this.div.append(e3);
            t3.isAttachedToDOM = true;
          }
          t3.fixAndSetPosition();
          t3.onceAdded();
          this.#Ni.addToAnnotationStorage(t3);
          t3._reportTelemetry(t3.telemetryInitialData);
        }
      }
      moveEditorInDOM(t3) {
        if (!t3.isAttachedToDOM) return;
        const { activeElement: e3 } = document;
        if (t3.div.contains(e3) && !this.#Fi) {
          t3._focusEventsAllowed = false;
          this.#Fi = setTimeout((() => {
            this.#Fi = null;
            if (t3.div.contains(document.activeElement)) t3._focusEventsAllowed = true;
            else {
              t3.div.addEventListener("focusin", (() => {
                t3._focusEventsAllowed = true;
              }), { once: true });
              e3.focus();
            }
          }), 0);
        }
        t3._structTreeParentId = this.#I?.moveElementInDOM(this.div, t3.div, t3.contentDiv, true);
      }
      addOrRebuild(t3) {
        if (t3.needsToBeRebuilt()) {
          t3.parent ||= this;
          t3.rebuild();
          t3.show();
        } else this.add(t3);
      }
      addUndoableEditor(t3) {
        this.addCommands({ cmd: () => t3._uiManager.rebuild(t3), undo: () => {
          t3.remove();
        }, mustExec: false });
      }
      getNextId() {
        return this.#Ni.getId();
      }
      get #zi() {
        return AnnotationEditorLayer.#Bi.get(this.#Ni.getMode());
      }
      #Vi(t3) {
        const e3 = this.#zi;
        return e3 ? new e3.prototype.constructor(t3) : null;
      }
      canCreateNewEmptyEditor() {
        return this.#zi?.canCreateNewEmptyEditor();
      }
      pasteEditor(t3, e3) {
        this.#Ni.updateToolbar(t3);
        this.#Ni.updateMode(t3);
        const { offsetX: i3, offsetY: s3 } = this.#ji(), n3 = this.getNextId(), a3 = this.#Vi({ parent: this, id: n3, x: i3, y: s3, uiManager: this.#Ni, isCentered: true, ...e3 });
        a3 && this.add(a3);
      }
      deserialize(t3) {
        return AnnotationEditorLayer.#Bi.get(t3.annotationType ?? t3.annotationEditorType)?.deserialize(t3, this, this.#Ni) || null;
      }
      createAndAddNewEditor(t3, e3, i3 = {}) {
        const s3 = this.getNextId(), n3 = this.#Vi({ parent: this, id: s3, x: t3.offsetX, y: t3.offsetY, uiManager: this.#Ni, isCentered: e3, ...i3 });
        n3 && this.add(n3);
        return n3;
      }
      #ji() {
        const { x: t3, y: e3, width: i3, height: s3 } = this.div.getBoundingClientRect(), n3 = Math.max(0, t3), a3 = Math.max(0, e3), r3 = (n3 + Math.min(window.innerWidth, t3 + i3)) / 2 - t3, o3 = (a3 + Math.min(window.innerHeight, e3 + s3)) / 2 - e3, [l3, h3] = this.viewport.rotation % 180 == 0 ? [r3, o3] : [o3, r3];
        return { offsetX: l3, offsetY: h3 };
      }
      addNewEditor() {
        this.createAndAddNewEditor(this.#ji(), true);
      }
      setSelected(t3) {
        this.#Ni.setSelected(t3);
      }
      toggleSelected(t3) {
        this.#Ni.toggleSelected(t3);
      }
      isSelected(t3) {
        return this.#Ni.isSelected(t3);
      }
      unselect(t3) {
        this.#Ni.unselect(t3);
      }
      pointerup(t3) {
        const { isMac: e3 } = i2.FeatureTest.platform;
        if (!(0 !== t3.button || t3.ctrlKey && e3) && t3.target === this.div && this.#Di) {
          this.#Di = false;
          this.#Si ? this.#Ni.getMode() !== i2.AnnotationEditorType.STAMP ? this.createAndAddNewEditor(t3, false) : this.#Ni.unselectAll() : this.#Si = true;
        }
      }
      pointerdown(t3) {
        this.#Ni.getMode() === i2.AnnotationEditorType.HIGHLIGHT && this.enableTextSelection();
        if (this.#Di) {
          this.#Di = false;
          return;
        }
        const { isMac: e3 } = i2.FeatureTest.platform;
        if (0 !== t3.button || t3.ctrlKey && e3) return;
        if (t3.target !== this.div) return;
        this.#Di = true;
        const s3 = this.#Ni.getActive();
        this.#Si = !s3 || s3.isEmpty();
      }
      findNewParent(t3, e3, i3) {
        const s3 = this.#Ni.findParent(e3, i3);
        if (null === s3 || s3 === this) return false;
        s3.changeParent(t3);
        return true;
      }
      destroy() {
        if (this.#Ni.getActive()?.parent === this) {
          this.#Ni.commitOrRemove();
          this.#Ni.setActiveEditor(null);
        }
        if (this.#Fi) {
          clearTimeout(this.#Fi);
          this.#Fi = null;
        }
        for (const t3 of this.#ki.values()) {
          this.#I?.removePointerInTextLayer(t3.contentDiv);
          t3.setParent(null);
          t3.isAttachedToDOM = false;
          t3.div.remove();
        }
        this.div = null;
        this.#ki.clear();
        this.#Ni.removeLayer(this);
      }
      #Hi() {
        this.#Ii = true;
        for (const t3 of this.#ki.values()) t3.isEmpty() && t3.remove();
        this.#Ii = false;
      }
      render({ viewport: t3 }) {
        this.viewport = t3;
        (0, h2.setLayerDimensions)(this.div, t3);
        for (const t4 of this.#Ni.getEditors(this.pageIndex)) {
          this.add(t4);
          t4.rebuild();
        }
        this.updateMode();
      }
      update({ viewport: t3 }) {
        this.#Ni.commitOrRemove();
        this.#Hi();
        const e3 = this.viewport.rotation, i3 = t3.rotation;
        this.viewport = t3;
        (0, h2.setLayerDimensions)(this.div, { rotation: i3 });
        if (e3 !== i3) for (const t4 of this.#ki.values()) t4.rotate(i3);
        this.addInkEditorIfNeeded(false);
      }
      get pageDimensions() {
        const { pageWidth: t3, pageHeight: e3 } = this.viewport.rawDims;
        return [t3, e3];
      }
      get scale() {
        return this.#Ni.viewParameters.realScale;
      }
    }
  }, 259: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { ColorPicker: () => ColorPicker });
    var i2 = e2(292), s2 = e2(830), n2 = e2(419);
    class ColorPicker {
      #r = this.#o.bind(this);
      #Gi = this.#$i.bind(this);
      #Wi = null;
      #qi = null;
      #Ki;
      #Xi = null;
      #Yi = false;
      #Ji = false;
      #Qi = null;
      #Zi;
      #Ni = null;
      #ts;
      static get _keyboardManager() {
        return (0, i2.shadow)(this, "_keyboardManager", new s2.KeyboardManager([[["Escape", "mac+Escape"], ColorPicker.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ColorPicker.prototype._moveToPrevious], [["Home", "mac+Home"], ColorPicker.prototype._moveToBeginning], [["End", "mac+End"], ColorPicker.prototype._moveToEnd]]));
      }
      constructor({ editor: t3 = null, uiManager: e3 = null }) {
        if (t3) {
          this.#Ji = false;
          this.#ts = i2.AnnotationEditorParamsType.HIGHLIGHT_COLOR;
          this.#Qi = t3;
        } else {
          this.#Ji = true;
          this.#ts = i2.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR;
        }
        this.#Ni = t3?._uiManager || e3;
        this.#Zi = this.#Ni._eventBus;
        this.#Ki = t3?.color || this.#Ni?.highlightColors.values().next().value || "#FFFF98";
      }
      renderButton() {
        const t3 = this.#Wi = document.createElement("button");
        t3.className = "colorPicker";
        t3.tabIndex = "0";
        t3.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
        t3.setAttribute("aria-haspopup", true);
        t3.addEventListener("click", this.#es.bind(this));
        t3.addEventListener("keydown", this.#r);
        const e3 = this.#qi = document.createElement("span");
        e3.className = "swatch";
        e3.setAttribute("aria-hidden", true);
        e3.style.backgroundColor = this.#Ki;
        t3.append(e3);
        return t3;
      }
      renderMainDropdown() {
        const t3 = this.#Xi = this.#is();
        t3.setAttribute("aria-orientation", "horizontal");
        t3.setAttribute("aria-labelledby", "highlightColorPickerLabel");
        return t3;
      }
      #is() {
        const t3 = document.createElement("div");
        t3.addEventListener("contextmenu", n2.noContextMenu);
        t3.className = "dropdown";
        t3.role = "listbox";
        t3.setAttribute("aria-multiselectable", false);
        t3.setAttribute("aria-orientation", "vertical");
        t3.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
        for (const [e3, i3] of this.#Ni.highlightColors) {
          const s3 = document.createElement("button");
          s3.tabIndex = "0";
          s3.role = "option";
          s3.setAttribute("data-color", i3);
          s3.title = e3;
          s3.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${e3}`);
          const n3 = document.createElement("span");
          s3.append(n3);
          n3.className = "swatch";
          n3.style.backgroundColor = i3;
          s3.setAttribute("aria-selected", i3 === this.#Ki);
          s3.addEventListener("click", this.#ss.bind(this, i3));
          t3.append(s3);
        }
        t3.addEventListener("keydown", this.#r);
        return t3;
      }
      #ss(t3, e3) {
        e3.stopPropagation();
        this.#Zi.dispatch("switchannotationeditorparams", { source: this, type: this.#ts, value: t3 });
      }
      _colorSelectFromKeyboard(t3) {
        if (t3.target === this.#Wi) {
          this.#es(t3);
          return;
        }
        const e3 = t3.target.getAttribute("data-color");
        e3 && this.#ss(e3, t3);
      }
      _moveToNext(t3) {
        this.#ns ? t3.target !== this.#Wi ? t3.target.nextSibling?.focus() : this.#Xi.firstChild?.focus() : this.#es(t3);
      }
      _moveToPrevious(t3) {
        if (t3.target !== this.#Xi?.firstChild && t3.target !== this.#Wi) {
          this.#ns || this.#es(t3);
          t3.target.previousSibling?.focus();
        } else this.#ns && this._hideDropdownFromKeyboard();
      }
      _moveToBeginning(t3) {
        this.#ns ? this.#Xi.firstChild?.focus() : this.#es(t3);
      }
      _moveToEnd(t3) {
        this.#ns ? this.#Xi.lastChild?.focus() : this.#es(t3);
      }
      #o(t3) {
        ColorPicker._keyboardManager.exec(this, t3);
      }
      #es(t3) {
        if (this.#ns) {
          this.hideDropdown();
          return;
        }
        this.#Yi = 0 === t3.detail;
        window.addEventListener("pointerdown", this.#Gi);
        if (this.#Xi) {
          this.#Xi.classList.remove("hidden");
          return;
        }
        const e3 = this.#Xi = this.#is();
        this.#Wi.append(e3);
      }
      #$i(t3) {
        this.#Xi?.contains(t3.target) || this.hideDropdown();
      }
      hideDropdown() {
        this.#Xi?.classList.add("hidden");
        window.removeEventListener("pointerdown", this.#Gi);
      }
      get #ns() {
        return this.#Xi && !this.#Xi.classList.contains("hidden");
      }
      _hideDropdownFromKeyboard() {
        if (!this.#Ji) if (this.#ns) {
          this.hideDropdown();
          this.#Wi.focus({ preventScroll: true, focusVisible: this.#Yi });
        } else this.#Qi?.unselect();
      }
      updateColor(t3) {
        this.#qi && (this.#qi.style.backgroundColor = t3);
        if (!this.#Xi) return;
        const e3 = this.#Ni.highlightColors.values();
        for (const i3 of this.#Xi.children) i3.setAttribute("aria-selected", e3.next().value === t3);
      }
      destroy() {
        this.#Wi?.remove();
        this.#Wi = null;
        this.#qi = null;
        this.#Xi?.remove();
        this.#Xi = null;
      }
    }
  }, 310: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { AnnotationEditor: () => AnnotationEditor });
    var i2 = e2(830), s2 = e2(292), n2 = e2(419);
    class AltText {
      #as = "";
      #rs = false;
      #os = null;
      #ls = null;
      #hs = null;
      #ds = false;
      #Qi = null;
      static _l10nPromise = null;
      constructor(t3) {
        this.#Qi = t3;
      }
      static initialize(t3) {
        AltText._l10nPromise ||= t3;
      }
      async render() {
        const t3 = this.#os = document.createElement("button");
        t3.className = "altText";
        const e3 = await AltText._l10nPromise.get("pdfjs-editor-alt-text-button-label");
        t3.textContent = e3;
        t3.setAttribute("aria-label", e3);
        t3.tabIndex = "0";
        t3.addEventListener("contextmenu", n2.noContextMenu);
        t3.addEventListener("pointerdown", ((t4) => t4.stopPropagation()));
        const onClick = (t4) => {
          t4.preventDefault();
          this.#Qi._uiManager.editAltText(this.#Qi);
        };
        t3.addEventListener("click", onClick, { capture: true });
        t3.addEventListener("keydown", ((e4) => {
          if (e4.target === t3 && "Enter" === e4.key) {
            this.#ds = true;
            onClick(e4);
          }
        }));
        await this.#cs();
        return t3;
      }
      finish() {
        if (this.#os) {
          this.#os.focus({ focusVisible: this.#ds });
          this.#ds = false;
        }
      }
      isEmpty() {
        return !this.#as && !this.#rs;
      }
      get data() {
        return { altText: this.#as, decorative: this.#rs };
      }
      set data({ altText: t3, decorative: e3 }) {
        if (this.#as !== t3 || this.#rs !== e3) {
          this.#as = t3;
          this.#rs = e3;
          this.#cs();
        }
      }
      toggle(t3 = false) {
        if (this.#os) {
          if (!t3 && this.#hs) {
            clearTimeout(this.#hs);
            this.#hs = null;
          }
          this.#os.disabled = !t3;
        }
      }
      destroy() {
        this.#os?.remove();
        this.#os = null;
        this.#ls = null;
      }
      async #cs() {
        const t3 = this.#os;
        if (!t3) return;
        if (!this.#as && !this.#rs) {
          t3.classList.remove("done");
          this.#ls?.remove();
          return;
        }
        t3.classList.add("done");
        AltText._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then(((e4) => {
          t3.setAttribute("aria-label", e4);
        }));
        let e3 = this.#ls;
        if (!e3) {
          this.#ls = e3 = document.createElement("span");
          e3.className = "tooltip";
          e3.setAttribute("role", "tooltip");
          const i4 = e3.id = `alt-text-tooltip-${this.#Qi.id}`;
          t3.setAttribute("aria-describedby", i4);
          const s3 = 100;
          t3.addEventListener("mouseenter", (() => {
            this.#hs = setTimeout((() => {
              this.#hs = null;
              this.#ls.classList.add("show");
              this.#Qi._reportTelemetry({ action: "alt_text_tooltip" });
            }), s3);
          }));
          t3.addEventListener("mouseleave", (() => {
            if (this.#hs) {
              clearTimeout(this.#hs);
              this.#hs = null;
            }
            this.#ls?.classList.remove("show");
          }));
        }
        e3.innerText = this.#rs ? await AltText._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : this.#as;
        e3.parentNode || t3.append(e3);
        const i3 = this.#Qi.getImageForAltText();
        i3?.setAttribute("aria-describedby", e3.id);
      }
    }
    var a2 = e2(362);
    class AnnotationEditor {
      #us = null;
      #as = null;
      #ps = false;
      #gs = false;
      #ms = null;
      #fs = null;
      #bs = this.focusin.bind(this);
      #As = this.focusout.bind(this);
      #vs = null;
      #ys = "";
      #Es = false;
      #ws = null;
      #_s = false;
      #xs = false;
      #Ts = false;
      #Ss = null;
      #Cs = 0;
      #Ms = 0;
      #Ps = null;
      _initialOptions = /* @__PURE__ */ Object.create(null);
      _isVisible = true;
      _uiManager = null;
      _focusEventsAllowed = true;
      _l10nPromise = null;
      #Rs = false;
      #Fs = AnnotationEditor._zIndex++;
      static _borderLineWidth = -1;
      static _colorManager = new i2.ColorManager();
      static _zIndex = 1;
      static _telemetryTimeout = 1e3;
      static get _resizerKeyboardManager() {
        const t3 = AnnotationEditor.prototype._resizeWithKeyboard, e3 = i2.AnnotationEditorUIManager.TRANSLATE_SMALL, n3 = i2.AnnotationEditorUIManager.TRANSLATE_BIG;
        return (0, s2.shadow)(this, "_resizerKeyboardManager", new i2.KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], t3, { args: [-e3, 0] }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t3, { args: [-n3, 0] }], [["ArrowRight", "mac+ArrowRight"], t3, { args: [e3, 0] }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t3, { args: [n3, 0] }], [["ArrowUp", "mac+ArrowUp"], t3, { args: [0, -e3] }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t3, { args: [0, -n3] }], [["ArrowDown", "mac+ArrowDown"], t3, { args: [0, e3] }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t3, { args: [0, n3] }], [["Escape", "mac+Escape"], AnnotationEditor.prototype._stopResizingWithKeyboard]]));
      }
      constructor(t3) {
        this.constructor === AnnotationEditor && (0, s2.unreachable)("Cannot initialize AnnotationEditor.");
        this.parent = t3.parent;
        this.id = t3.id;
        this.width = this.height = null;
        this.pageIndex = t3.parent.pageIndex;
        this.name = t3.name;
        this.div = null;
        this._uiManager = t3.uiManager;
        this.annotationElementId = null;
        this._willKeepAspectRatio = false;
        this._initialOptions.isCentered = t3.isCentered;
        this._structTreeParentId = null;
        const { rotation: e3, rawDims: { pageWidth: i3, pageHeight: n3, pageX: a3, pageY: r2 } } = this.parent.viewport;
        this.rotation = e3;
        this.pageRotation = (360 + e3 - this._uiManager.viewParameters.rotation) % 360;
        this.pageDimensions = [i3, n3];
        this.pageTranslation = [a3, r2];
        const [o2, l2] = this.parentDimensions;
        this.x = t3.x / o2;
        this.y = t3.y / l2;
        this.isAttachedToDOM = false;
        this.deleted = false;
      }
      get editorType() {
        return Object.getPrototypeOf(this).constructor._type;
      }
      static get _defaultLineColor() {
        return (0, s2.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
      }
      static deleteAnnotationElement(t3) {
        const e3 = new FakeEditor({ id: t3.parent.getNextId(), parent: t3.parent, uiManager: t3._uiManager });
        e3.annotationElementId = t3.annotationElementId;
        e3.deleted = true;
        e3._uiManager.addToAnnotationStorage(e3);
      }
      static initialize(t3, e3, i3) {
        AnnotationEditor._l10nPromise ||= new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map(((e4) => [e4, t3.get(e4.replaceAll(/([A-Z])/g, ((t4) => `-${t4.toLowerCase()}`)))])));
        if (i3?.strings) for (const e4 of i3.strings) AnnotationEditor._l10nPromise.set(e4, t3.get(e4));
        if (-1 !== AnnotationEditor._borderLineWidth) return;
        const s3 = getComputedStyle(document.documentElement);
        AnnotationEditor._borderLineWidth = parseFloat(s3.getPropertyValue("--outline-width")) || 0;
      }
      static updateDefaultParams(t3, e3) {
      }
      static get defaultPropertiesToUpdate() {
        return [];
      }
      static isHandlingMimeForPasting(t3) {
        return false;
      }
      static paste(t3, e3) {
        (0, s2.unreachable)("Not implemented");
      }
      get propertiesToUpdate() {
        return [];
      }
      get _isDraggable() {
        return this.#Rs;
      }
      set _isDraggable(t3) {
        this.#Rs = t3;
        this.div?.classList.toggle("draggable", t3);
      }
      get isEnterHandled() {
        return true;
      }
      center() {
        const [t3, e3] = this.pageDimensions;
        switch (this.parentRotation) {
          case 90:
            this.x -= this.height * e3 / (2 * t3);
            this.y += this.width * t3 / (2 * e3);
            break;
          case 180:
            this.x += this.width / 2;
            this.y += this.height / 2;
            break;
          case 270:
            this.x += this.height * e3 / (2 * t3);
            this.y -= this.width * t3 / (2 * e3);
            break;
          default:
            this.x -= this.width / 2;
            this.y -= this.height / 2;
        }
        this.fixAndSetPosition();
      }
      addCommands(t3) {
        this._uiManager.addCommands(t3);
      }
      get currentLayer() {
        return this._uiManager.currentLayer;
      }
      setInBackground() {
        this.div.style.zIndex = 0;
      }
      setInForeground() {
        this.div.style.zIndex = this.#Fs;
      }
      setParent(t3) {
        if (null !== t3) {
          this.pageIndex = t3.pageIndex;
          this.pageDimensions = t3.pageDimensions;
        } else this.#ks();
        this.parent = t3;
      }
      focusin(t3) {
        this._focusEventsAllowed && (this.#Es ? this.#Es = false : this.parent.setSelected(this));
      }
      focusout(t3) {
        if (!this._focusEventsAllowed) return;
        if (!this.isAttachedToDOM) return;
        const e3 = t3.relatedTarget;
        if (!e3?.closest(`#${this.id}`)) {
          t3.preventDefault();
          this.parent?.isMultipleSelection || this.commitOrRemove();
        }
      }
      commitOrRemove() {
        this.isEmpty() ? this.remove() : this.commit();
      }
      commit() {
        this.addToAnnotationStorage();
      }
      addToAnnotationStorage() {
        this._uiManager.addToAnnotationStorage(this);
      }
      setAt(t3, e3, i3, s3) {
        const [n3, a3] = this.parentDimensions;
        [i3, s3] = this.screenToPageTranslation(i3, s3);
        this.x = (t3 + i3) / n3;
        this.y = (e3 + s3) / a3;
        this.fixAndSetPosition();
      }
      #Ds([t3, e3], i3, s3) {
        [i3, s3] = this.screenToPageTranslation(i3, s3);
        this.x += i3 / t3;
        this.y += s3 / e3;
        this.fixAndSetPosition();
      }
      translate(t3, e3) {
        this.#Ds(this.parentDimensions, t3, e3);
      }
      translateInPage(t3, e3) {
        this.#ws ||= [this.x, this.y];
        this.#Ds(this.pageDimensions, t3, e3);
        this.div.scrollIntoView({ block: "nearest" });
      }
      drag(t3, e3) {
        this.#ws ||= [this.x, this.y];
        const [i3, s3] = this.parentDimensions;
        this.x += t3 / i3;
        this.y += e3 / s3;
        if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
          const { x: t4, y: e4 } = this.div.getBoundingClientRect();
          if (this.parent.findNewParent(this, t4, e4)) {
            this.x -= Math.floor(this.x);
            this.y -= Math.floor(this.y);
          }
        }
        let { x: n3, y: a3 } = this;
        const [r2, o2] = this.getBaseTranslation();
        n3 += r2;
        a3 += o2;
        this.div.style.left = `${(100 * n3).toFixed(2)}%`;
        this.div.style.top = `${(100 * a3).toFixed(2)}%`;
        this.div.scrollIntoView({ block: "nearest" });
      }
      get _hasBeenMoved() {
        return !!this.#ws && (this.#ws[0] !== this.x || this.#ws[1] !== this.y);
      }
      getBaseTranslation() {
        const [t3, e3] = this.parentDimensions, { _borderLineWidth: i3 } = AnnotationEditor, s3 = i3 / t3, n3 = i3 / e3;
        switch (this.rotation) {
          case 90:
            return [-s3, n3];
          case 180:
            return [s3, n3];
          case 270:
            return [s3, -n3];
          default:
            return [-s3, -n3];
        }
      }
      get _mustFixPosition() {
        return true;
      }
      fixAndSetPosition(t3 = this.rotation) {
        const [e3, i3] = this.pageDimensions;
        let { x: s3, y: n3, width: a3, height: r2 } = this;
        a3 *= e3;
        r2 *= i3;
        s3 *= e3;
        n3 *= i3;
        if (this._mustFixPosition) switch (t3) {
          case 0:
            s3 = Math.max(0, Math.min(e3 - a3, s3));
            n3 = Math.max(0, Math.min(i3 - r2, n3));
            break;
          case 90:
            s3 = Math.max(0, Math.min(e3 - r2, s3));
            n3 = Math.min(i3, Math.max(a3, n3));
            break;
          case 180:
            s3 = Math.min(e3, Math.max(a3, s3));
            n3 = Math.min(i3, Math.max(r2, n3));
            break;
          case 270:
            s3 = Math.min(e3, Math.max(r2, s3));
            n3 = Math.max(0, Math.min(i3 - a3, n3));
        }
        this.x = s3 /= e3;
        this.y = n3 /= i3;
        const [o2, l2] = this.getBaseTranslation();
        s3 += o2;
        n3 += l2;
        const { style: h2 } = this.div;
        h2.left = `${(100 * s3).toFixed(2)}%`;
        h2.top = `${(100 * n3).toFixed(2)}%`;
        this.moveInDOM();
      }
      static #Is(t3, e3, i3) {
        switch (i3) {
          case 90:
            return [e3, -t3];
          case 180:
            return [-t3, -e3];
          case 270:
            return [-e3, t3];
          default:
            return [t3, e3];
        }
      }
      screenToPageTranslation(t3, e3) {
        return AnnotationEditor.#Is(t3, e3, this.parentRotation);
      }
      pageTranslationToScreen(t3, e3) {
        return AnnotationEditor.#Is(t3, e3, 360 - this.parentRotation);
      }
      #Ls(t3) {
        switch (t3) {
          case 90: {
            const [t4, e3] = this.pageDimensions;
            return [0, -t4 / e3, e3 / t4, 0];
          }
          case 180:
            return [-1, 0, 0, -1];
          case 270: {
            const [t4, e3] = this.pageDimensions;
            return [0, t4 / e3, -e3 / t4, 0];
          }
          default:
            return [1, 0, 0, 1];
        }
      }
      get parentScale() {
        return this._uiManager.viewParameters.realScale;
      }
      get parentRotation() {
        return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
      }
      get parentDimensions() {
        const { parentScale: t3, pageDimensions: [e3, i3] } = this, n3 = e3 * t3, a3 = i3 * t3;
        return s2.FeatureTest.isCSSRoundSupported ? [Math.round(n3), Math.round(a3)] : [n3, a3];
      }
      setDims(t3, e3) {
        const [i3, s3] = this.parentDimensions;
        this.div.style.width = `${(100 * t3 / i3).toFixed(2)}%`;
        this.#gs || (this.div.style.height = `${(100 * e3 / s3).toFixed(2)}%`);
      }
      fixDims() {
        const { style: t3 } = this.div, { height: e3, width: i3 } = t3, s3 = i3.endsWith("%"), n3 = !this.#gs && e3.endsWith("%");
        if (s3 && n3) return;
        const [a3, r2] = this.parentDimensions;
        s3 || (t3.width = `${(100 * parseFloat(i3) / a3).toFixed(2)}%`);
        this.#gs || n3 || (t3.height = `${(100 * parseFloat(e3) / r2).toFixed(2)}%`);
      }
      getInitialTranslation() {
        return [0, 0];
      }
      #Os() {
        if (this.#ms) return;
        this.#ms = document.createElement("div");
        this.#ms.classList.add("resizers");
        const t3 = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
        for (const e3 of t3) {
          const t4 = document.createElement("div");
          this.#ms.append(t4);
          t4.classList.add("resizer", e3);
          t4.setAttribute("data-resizer-name", e3);
          t4.addEventListener("pointerdown", this.#Ns.bind(this, e3));
          t4.addEventListener("contextmenu", n2.noContextMenu);
          t4.tabIndex = -1;
        }
        this.div.prepend(this.#ms);
      }
      #Ns(t3, e3) {
        e3.preventDefault();
        const { isMac: i3 } = s2.FeatureTest.platform;
        if (0 !== e3.button || e3.ctrlKey && i3) return;
        this.#as?.toggle(false);
        const a3 = this.#Bs.bind(this, t3), r2 = this._isDraggable;
        this._isDraggable = false;
        const o2 = { passive: true, capture: true };
        this.parent.togglePointerEvents(false);
        window.addEventListener("pointermove", a3, o2);
        window.addEventListener("contextmenu", n2.noContextMenu);
        const l2 = this.x, h2 = this.y, d2 = this.width, c2 = this.height, u2 = this.parent.div.style.cursor, p2 = this.div.style.cursor;
        this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e3.target).cursor;
        const pointerUpCallback = () => {
          this.parent.togglePointerEvents(true);
          this.#as?.toggle(true);
          this._isDraggable = r2;
          window.removeEventListener("pointerup", pointerUpCallback);
          window.removeEventListener("blur", pointerUpCallback);
          window.removeEventListener("pointermove", a3, o2);
          window.removeEventListener("contextmenu", n2.noContextMenu);
          this.parent.div.style.cursor = u2;
          this.div.style.cursor = p2;
          this.#Hs(l2, h2, d2, c2);
        };
        window.addEventListener("pointerup", pointerUpCallback);
        window.addEventListener("blur", pointerUpCallback);
      }
      #Hs(t3, e3, i3, s3) {
        const n3 = this.x, a3 = this.y, r2 = this.width, o2 = this.height;
        n3 === t3 && a3 === e3 && r2 === i3 && o2 === s3 || this.addCommands({ cmd: () => {
          this.width = r2;
          this.height = o2;
          this.x = n3;
          this.y = a3;
          const [t4, e4] = this.parentDimensions;
          this.setDims(t4 * r2, e4 * o2);
          this.fixAndSetPosition();
        }, undo: () => {
          this.width = i3;
          this.height = s3;
          this.x = t3;
          this.y = e3;
          const [n4, a4] = this.parentDimensions;
          this.setDims(n4 * i3, a4 * s3);
          this.fixAndSetPosition();
        }, mustExec: true });
      }
      #Bs(t3, e3) {
        const [i3, s3] = this.parentDimensions, n3 = this.x, a3 = this.y, r2 = this.width, o2 = this.height, l2 = AnnotationEditor.MIN_SIZE / i3, h2 = AnnotationEditor.MIN_SIZE / s3, round = (t4) => Math.round(1e4 * t4) / 1e4, d2 = this.#Ls(this.rotation), transf = (t4, e4) => [d2[0] * t4 + d2[2] * e4, d2[1] * t4 + d2[3] * e4], c2 = this.#Ls(360 - this.rotation);
        let u2, p2, g2 = false, m2 = false;
        switch (t3) {
          case "topLeft":
            g2 = true;
            u2 = (t4, e4) => [0, 0];
            p2 = (t4, e4) => [t4, e4];
            break;
          case "topMiddle":
            u2 = (t4, e4) => [t4 / 2, 0];
            p2 = (t4, e4) => [t4 / 2, e4];
            break;
          case "topRight":
            g2 = true;
            u2 = (t4, e4) => [t4, 0];
            p2 = (t4, e4) => [0, e4];
            break;
          case "middleRight":
            m2 = true;
            u2 = (t4, e4) => [t4, e4 / 2];
            p2 = (t4, e4) => [0, e4 / 2];
            break;
          case "bottomRight":
            g2 = true;
            u2 = (t4, e4) => [t4, e4];
            p2 = (t4, e4) => [0, 0];
            break;
          case "bottomMiddle":
            u2 = (t4, e4) => [t4 / 2, e4];
            p2 = (t4, e4) => [t4 / 2, 0];
            break;
          case "bottomLeft":
            g2 = true;
            u2 = (t4, e4) => [0, e4];
            p2 = (t4, e4) => [t4, 0];
            break;
          case "middleLeft":
            m2 = true;
            u2 = (t4, e4) => [0, e4 / 2];
            p2 = (t4, e4) => [t4, e4 / 2];
        }
        const f2 = u2(r2, o2), b2 = p2(r2, o2);
        let A2 = transf(...b2);
        const v2 = round(n3 + A2[0]), y2 = round(a3 + A2[1]);
        let E2 = 1, w2 = 1, [_2, x2] = this.screenToPageTranslation(e3.movementX, e3.movementY);
        [_2, x2] = (T2 = _2 / i3, S2 = x2 / s3, [c2[0] * T2 + c2[2] * S2, c2[1] * T2 + c2[3] * S2]);
        var T2, S2;
        if (g2) {
          const t4 = Math.hypot(r2, o2);
          E2 = w2 = Math.max(Math.min(Math.hypot(b2[0] - f2[0] - _2, b2[1] - f2[1] - x2) / t4, 1 / r2, 1 / o2), l2 / r2, h2 / o2);
        } else m2 ? E2 = Math.max(l2, Math.min(1, Math.abs(b2[0] - f2[0] - _2))) / r2 : w2 = Math.max(h2, Math.min(1, Math.abs(b2[1] - f2[1] - x2))) / o2;
        const C2 = round(r2 * E2), M2 = round(o2 * w2);
        A2 = transf(...p2(C2, M2));
        const P2 = v2 - A2[0], R2 = y2 - A2[1];
        this.width = C2;
        this.height = M2;
        this.x = P2;
        this.y = R2;
        this.setDims(i3 * C2, s3 * M2);
        this.fixAndSetPosition();
      }
      altTextFinish() {
        this.#as?.finish();
      }
      async addEditToolbar() {
        if (this.#vs || this.#xs) return this.#vs;
        this.#vs = new a2.EditorToolbar(this);
        this.div.append(this.#vs.render());
        this.#as && this.#vs.addAltTextButton(await this.#as.render());
        return this.#vs;
      }
      removeEditToolbar() {
        if (this.#vs) {
          this.#vs.remove();
          this.#vs = null;
          this.#as?.destroy();
        }
      }
      getClientDimensions() {
        return this.div.getBoundingClientRect();
      }
      async addAltTextButton() {
        if (!this.#as) {
          AltText.initialize(AnnotationEditor._l10nPromise);
          this.#as = new AltText(this);
          await this.addEditToolbar();
        }
      }
      get altTextData() {
        return this.#as?.data;
      }
      set altTextData(t3) {
        this.#as && (this.#as.data = t3);
      }
      hasAltText() {
        return !this.#as?.isEmpty();
      }
      render() {
        this.div = document.createElement("div");
        this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
        this.div.className = this.name;
        this.div.setAttribute("id", this.id);
        this.div.tabIndex = this.#ps ? -1 : 0;
        this._isVisible || this.div.classList.add("hidden");
        this.setInForeground();
        this.div.addEventListener("focusin", this.#bs);
        this.div.addEventListener("focusout", this.#As);
        const [t3, e3] = this.parentDimensions;
        if (this.parentRotation % 180 != 0) {
          this.div.style.maxWidth = `${(100 * e3 / t3).toFixed(2)}%`;
          this.div.style.maxHeight = `${(100 * t3 / e3).toFixed(2)}%`;
        }
        const [s3, n3] = this.getInitialTranslation();
        this.translate(s3, n3);
        (0, i2.bindEvents)(this, this.div, ["pointerdown"]);
        return this.div;
      }
      pointerdown(t3) {
        const { isMac: e3 } = s2.FeatureTest.platform;
        if (0 !== t3.button || t3.ctrlKey && e3) t3.preventDefault();
        else {
          this.#Es = true;
          this._isDraggable ? this.#Us(t3) : this.#zs(t3);
        }
      }
      #zs(t3) {
        const { isMac: e3 } = s2.FeatureTest.platform;
        t3.ctrlKey && !e3 || t3.shiftKey || t3.metaKey && e3 ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
      }
      #Us(t3) {
        const e3 = this._uiManager.isSelected(this);
        this._uiManager.setUpDragSession();
        let i3, s3;
        if (e3) {
          this.div.classList.add("moving");
          i3 = { passive: true, capture: true };
          this.#Cs = t3.clientX;
          this.#Ms = t3.clientY;
          s3 = (t4) => {
            const { clientX: e4, clientY: i4 } = t4, [s4, n3] = this.screenToPageTranslation(e4 - this.#Cs, i4 - this.#Ms);
            this.#Cs = e4;
            this.#Ms = i4;
            this._uiManager.dragSelectedEditors(s4, n3);
          };
          window.addEventListener("pointermove", s3, i3);
        }
        const pointerUpCallback = () => {
          window.removeEventListener("pointerup", pointerUpCallback);
          window.removeEventListener("blur", pointerUpCallback);
          if (e3) {
            this.div.classList.remove("moving");
            window.removeEventListener("pointermove", s3, i3);
          }
          this.#Es = false;
          this._uiManager.endDragSession() || this.#zs(t3);
        };
        window.addEventListener("pointerup", pointerUpCallback);
        window.addEventListener("blur", pointerUpCallback);
      }
      moveInDOM() {
        this.#Ss && clearTimeout(this.#Ss);
        this.#Ss = setTimeout((() => {
          this.#Ss = null;
          this.parent?.moveEditorInDOM(this);
        }), 0);
      }
      _setParentAndPosition(t3, e3, i3) {
        t3.changeParent(this);
        this.x = e3;
        this.y = i3;
        this.fixAndSetPosition();
      }
      getRect(t3, e3, i3 = this.rotation) {
        const s3 = this.parentScale, [n3, a3] = this.pageDimensions, [r2, o2] = this.pageTranslation, l2 = t3 / s3, h2 = e3 / s3, d2 = this.x * n3, c2 = this.y * a3, u2 = this.width * n3, p2 = this.height * a3;
        switch (i3) {
          case 0:
            return [d2 + l2 + r2, a3 - c2 - h2 - p2 + o2, d2 + l2 + u2 + r2, a3 - c2 - h2 + o2];
          case 90:
            return [d2 + h2 + r2, a3 - c2 + l2 + o2, d2 + h2 + p2 + r2, a3 - c2 + l2 + u2 + o2];
          case 180:
            return [d2 - l2 - u2 + r2, a3 - c2 + h2 + o2, d2 - l2 + r2, a3 - c2 + h2 + p2 + o2];
          case 270:
            return [d2 - h2 - p2 + r2, a3 - c2 - l2 - u2 + o2, d2 - h2 + r2, a3 - c2 - l2 + o2];
          default:
            throw new Error("Invalid rotation");
        }
      }
      getRectInCurrentCoords(t3, e3) {
        const [i3, s3, n3, a3] = t3, r2 = n3 - i3, o2 = a3 - s3;
        switch (this.rotation) {
          case 0:
            return [i3, e3 - a3, r2, o2];
          case 90:
            return [i3, e3 - s3, o2, r2];
          case 180:
            return [n3, e3 - s3, r2, o2];
          case 270:
            return [n3, e3 - a3, o2, r2];
          default:
            throw new Error("Invalid rotation");
        }
      }
      onceAdded() {
      }
      isEmpty() {
        return false;
      }
      enableEditMode() {
        this.#xs = true;
      }
      disableEditMode() {
        this.#xs = false;
      }
      isInEditMode() {
        return this.#xs;
      }
      shouldGetKeyboardEvents() {
        return this.#Ts;
      }
      needsToBeRebuilt() {
        return this.div && !this.isAttachedToDOM;
      }
      rebuild() {
        this.div?.addEventListener("focusin", this.#bs);
        this.div?.addEventListener("focusout", this.#As);
      }
      rotate(t3) {
      }
      serialize(t3 = false, e3 = null) {
        (0, s2.unreachable)("An editor must be serializable");
      }
      static deserialize(t3, e3, i3) {
        const s3 = new this.prototype.constructor({ parent: e3, id: e3.getNextId(), uiManager: i3 });
        s3.rotation = t3.rotation;
        const [n3, a3] = s3.pageDimensions, [r2, o2, l2, h2] = s3.getRectInCurrentCoords(t3.rect, a3);
        s3.x = r2 / n3;
        s3.y = o2 / a3;
        s3.width = l2 / n3;
        s3.height = h2 / a3;
        return s3;
      }
      get hasBeenModified() {
        return !!this.annotationElementId && (this.deleted || null !== this.serialize());
      }
      remove() {
        this.div.removeEventListener("focusin", this.#bs);
        this.div.removeEventListener("focusout", this.#As);
        this.isEmpty() || this.commit();
        this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this);
        if (this.#Ss) {
          clearTimeout(this.#Ss);
          this.#Ss = null;
        }
        this.#ks();
        this.removeEditToolbar();
        if (this.#Ps) {
          for (const t3 of this.#Ps.values()) clearTimeout(t3);
          this.#Ps = null;
        }
        this.parent = null;
      }
      get isResizable() {
        return false;
      }
      makeResizable() {
        if (this.isResizable) {
          this.#Os();
          this.#ms.classList.remove("hidden");
          (0, i2.bindEvents)(this, this.div, ["keydown"]);
        }
      }
      get toolbarPosition() {
        return null;
      }
      keydown(t3) {
        if (!this.isResizable || t3.target !== this.div || "Enter" !== t3.key) return;
        this._uiManager.setSelected(this);
        this.#fs = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
        const e3 = this.#ms.children;
        if (!this.#us) {
          this.#us = Array.from(e3);
          const t4 = this.#Vs.bind(this), i4 = this.#js.bind(this);
          for (const e4 of this.#us) {
            const s4 = e4.getAttribute("data-resizer-name");
            e4.setAttribute("role", "spinbutton");
            e4.addEventListener("keydown", t4);
            e4.addEventListener("blur", i4);
            e4.addEventListener("focus", this.#Gs.bind(this, s4));
            AnnotationEditor._l10nPromise.get(`pdfjs-editor-resizer-label-${s4}`).then(((t5) => e4.setAttribute("aria-label", t5)));
          }
        }
        const i3 = this.#us[0];
        let s3 = 0;
        for (const t4 of e3) {
          if (t4 === i3) break;
          s3++;
        }
        const n3 = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#us.length / 4);
        if (n3 !== s3) {
          if (n3 < s3) for (let t5 = 0; t5 < s3 - n3; t5++) this.#ms.append(this.#ms.firstChild);
          else if (n3 > s3) for (let t5 = 0; t5 < n3 - s3; t5++) this.#ms.firstChild.before(this.#ms.lastChild);
          let t4 = 0;
          for (const i4 of e3) {
            const e4 = this.#us[t4++].getAttribute("data-resizer-name");
            AnnotationEditor._l10nPromise.get(`pdfjs-editor-resizer-label-${e4}`).then(((t5) => i4.setAttribute("aria-label", t5)));
          }
        }
        this.#$s(0);
        this.#Ts = true;
        this.#ms.firstChild.focus({ focusVisible: true });
        t3.preventDefault();
        t3.stopImmediatePropagation();
      }
      #Vs(t3) {
        AnnotationEditor._resizerKeyboardManager.exec(this, t3);
      }
      #js(t3) {
        this.#Ts && t3.relatedTarget?.parentNode !== this.#ms && this.#ks();
      }
      #Gs(t3) {
        this.#ys = this.#Ts ? t3 : "";
      }
      #$s(t3) {
        if (this.#us) for (const e3 of this.#us) e3.tabIndex = t3;
      }
      _resizeWithKeyboard(t3, e3) {
        this.#Ts && this.#Bs(this.#ys, { movementX: t3, movementY: e3 });
      }
      #ks() {
        this.#Ts = false;
        this.#$s(-1);
        if (this.#fs) {
          const { savedX: t3, savedY: e3, savedWidth: i3, savedHeight: s3 } = this.#fs;
          this.#Hs(t3, e3, i3, s3);
          this.#fs = null;
        }
      }
      _stopResizingWithKeyboard() {
        this.#ks();
        this.div.focus();
      }
      select() {
        this.makeResizable();
        this.div?.classList.add("selectedEditor");
        this.#vs ? this.#vs?.show() : this.addEditToolbar().then((() => {
          this.div?.classList.contains("selectedEditor") && this.#vs?.show();
        }));
      }
      unselect() {
        this.#ms?.classList.add("hidden");
        this.div?.classList.remove("selectedEditor");
        this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({ preventScroll: true });
        this.#vs?.hide();
      }
      updateParams(t3, e3) {
      }
      disableEditing() {
      }
      enableEditing() {
      }
      enterInEditMode() {
      }
      getImageForAltText() {
        return null;
      }
      get contentDiv() {
        return this.div;
      }
      get isEditing() {
        return this.#_s;
      }
      set isEditing(t3) {
        this.#_s = t3;
        if (this.parent) if (t3) {
          this.parent.setSelected(this);
          this.parent.setActiveEditor(this);
        } else this.parent.setActiveEditor(null);
      }
      setAspectRatio(t3, e3) {
        this.#gs = true;
        const i3 = t3 / e3, { style: s3 } = this.div;
        s3.aspectRatio = i3;
        s3.height = "auto";
      }
      static get MIN_SIZE() {
        return 16;
      }
      static canCreateNewEmptyEditor() {
        return true;
      }
      get telemetryInitialData() {
        return { action: "added" };
      }
      get telemetryFinalData() {
        return null;
      }
      _reportTelemetry(t3, e3 = false) {
        if (e3) {
          this.#Ps ||= /* @__PURE__ */ new Map();
          const { action: e4 } = t3;
          let i3 = this.#Ps.get(e4);
          i3 && clearTimeout(i3);
          i3 = setTimeout((() => {
            this._reportTelemetry(t3);
            this.#Ps.delete(e4);
            0 === this.#Ps.size && (this.#Ps = null);
          }), AnnotationEditor._telemetryTimeout);
          this.#Ps.set(e4, i3);
        } else {
          t3.type ||= this.editorType;
          this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: t3 } });
        }
      }
      show(t3 = this._isVisible) {
        this.div.classList.toggle("hidden", !t3);
        this._isVisible = t3;
      }
      enable() {
        this.div && (this.div.tabIndex = 0);
        this.#ps = false;
      }
      disable() {
        this.div && (this.div.tabIndex = -1);
        this.#ps = true;
      }
      renderAnnotationElement(t3) {
        let e3 = t3.container.querySelector(".annotationContent");
        if (e3) {
          if ("CANVAS" === e3.nodeName) {
            const t4 = e3;
            e3 = document.createElement("div");
            e3.classList.add("annotationContent", this.editorType);
            t4.before(e3);
          }
        } else {
          e3 = document.createElement("div");
          e3.classList.add("annotationContent", this.editorType);
          t3.container.prepend(e3);
        }
        return e3;
      }
      resetAnnotationElement(t3) {
        const { firstChild: e3 } = t3.container;
        "DIV" === e3.nodeName && e3.classList.contains("annotationContent") && e3.remove();
      }
    }
    class FakeEditor extends AnnotationEditor {
      constructor(t3) {
        super(t3);
        this.annotationElementId = t3.annotationElementId;
        this.deleted = true;
      }
      serialize() {
        return { id: this.annotationElementId, deleted: true, pageIndex: this.pageIndex };
      }
    }
  }, 61: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { FreeOutliner: () => FreeOutliner, Outliner: () => Outliner });
    var i2 = e2(292);
    class Outliner {
      #Ws;
      #qs = [];
      #Ks = [];
      constructor(t3, e3 = 0, i3 = 0, s2 = true) {
        let n2 = 1 / 0, a2 = -1 / 0, r2 = 1 / 0, o2 = -1 / 0;
        const l2 = 10 ** -4;
        for (const { x: i4, y: s3, width: h3, height: d3 } of t3) {
          const t4 = Math.floor((i4 - e3) / l2) * l2, c3 = Math.ceil((i4 + h3 + e3) / l2) * l2, u3 = Math.floor((s3 - e3) / l2) * l2, p3 = Math.ceil((s3 + d3 + e3) / l2) * l2, g3 = [t4, u3, p3, true], m2 = [c3, u3, p3, false];
          this.#qs.push(g3, m2);
          n2 = Math.min(n2, t4);
          a2 = Math.max(a2, c3);
          r2 = Math.min(r2, u3);
          o2 = Math.max(o2, p3);
        }
        const h2 = a2 - n2 + 2 * i3, d2 = o2 - r2 + 2 * i3, c2 = n2 - i3, u2 = r2 - i3, p2 = this.#qs.at(s2 ? -1 : -2), g2 = [p2[0], p2[2]];
        for (const t4 of this.#qs) {
          const [e4, i4, s3] = t4;
          t4[0] = (e4 - c2) / h2;
          t4[1] = (i4 - u2) / d2;
          t4[2] = (s3 - u2) / d2;
        }
        this.#Ws = { x: c2, y: u2, width: h2, height: d2, lastPoint: g2 };
      }
      getOutlines() {
        this.#qs.sort(((t4, e3) => t4[0] - e3[0] || t4[1] - e3[1] || t4[2] - e3[2]));
        const t3 = [];
        for (const e3 of this.#qs) if (e3[3]) {
          t3.push(...this.#Xs(e3));
          this.#Ys(e3);
        } else {
          this.#Js(e3);
          t3.push(...this.#Xs(e3));
        }
        return this.#Qs(t3);
      }
      #Qs(t3) {
        const e3 = [], i3 = /* @__PURE__ */ new Set();
        for (const i4 of t3) {
          const [t4, s3, n3] = i4;
          e3.push([t4, s3, i4], [t4, n3, i4]);
        }
        e3.sort(((t4, e4) => t4[1] - e4[1] || t4[0] - e4[0]));
        for (let t4 = 0, s3 = e3.length; t4 < s3; t4 += 2) {
          const s4 = e3[t4][2], n3 = e3[t4 + 1][2];
          s4.push(n3);
          n3.push(s4);
          i3.add(s4);
          i3.add(n3);
        }
        const s2 = [];
        let n2;
        for (; i3.size > 0; ) {
          const t4 = i3.values().next().value;
          let [e4, a2, r2, o2, l2] = t4;
          i3.delete(t4);
          let h2 = e4, d2 = a2;
          n2 = [e4, r2];
          s2.push(n2);
          for (; ; ) {
            let t5;
            if (i3.has(o2)) t5 = o2;
            else {
              if (!i3.has(l2)) break;
              t5 = l2;
            }
            i3.delete(t5);
            [e4, a2, r2, o2, l2] = t5;
            if (h2 !== e4) {
              n2.push(h2, d2, e4, d2 === a2 ? a2 : r2);
              h2 = e4;
            }
            d2 = d2 === a2 ? r2 : a2;
          }
          n2.push(h2, d2);
        }
        return new HighlightOutline(s2, this.#Ws);
      }
      #Zs(t3) {
        const e3 = this.#Ks;
        let i3 = 0, s2 = e3.length - 1;
        for (; i3 <= s2; ) {
          const n2 = i3 + s2 >> 1, a2 = e3[n2][0];
          if (a2 === t3) return n2;
          a2 < t3 ? i3 = n2 + 1 : s2 = n2 - 1;
        }
        return s2 + 1;
      }
      #Ys([, t3, e3]) {
        const i3 = this.#Zs(t3);
        this.#Ks.splice(i3, 0, [t3, e3]);
      }
      #Js([, t3, e3]) {
        const i3 = this.#Zs(t3);
        for (let s2 = i3; s2 < this.#Ks.length; s2++) {
          const [i4, n2] = this.#Ks[s2];
          if (i4 !== t3) break;
          if (i4 === t3 && n2 === e3) {
            this.#Ks.splice(s2, 1);
            return;
          }
        }
        for (let s2 = i3 - 1; s2 >= 0; s2--) {
          const [i4, n2] = this.#Ks[s2];
          if (i4 !== t3) break;
          if (i4 === t3 && n2 === e3) {
            this.#Ks.splice(s2, 1);
            return;
          }
        }
      }
      #Xs(t3) {
        const [e3, i3, s2] = t3, n2 = [[e3, i3, s2]], a2 = this.#Zs(s2);
        for (let t4 = 0; t4 < a2; t4++) {
          const [i4, s3] = this.#Ks[t4];
          for (let t5 = 0, a3 = n2.length; t5 < a3; t5++) {
            const [, r2, o2] = n2[t5];
            if (!(s3 <= r2 || o2 <= i4)) if (r2 >= i4) if (o2 > s3) n2[t5][1] = s3;
            else {
              if (1 === a3) return [];
              n2.splice(t5, 1);
              t5--;
              a3--;
            }
            else {
              n2[t5][2] = i4;
              o2 > s3 && n2.push([e3, s3, o2]);
            }
          }
        }
        return n2;
      }
    }
    class Outline {
      toSVGPath() {
        throw new Error("Abstract method `toSVGPath` must be implemented.");
      }
      get box() {
        throw new Error("Abstract getter `box` must be implemented.");
      }
      serialize(t3, e3) {
        throw new Error("Abstract method `serialize` must be implemented.");
      }
      get free() {
        return this instanceof FreeHighlightOutline;
      }
    }
    class HighlightOutline extends Outline {
      #Ws;
      #tn;
      constructor(t3, e3) {
        super();
        this.#tn = t3;
        this.#Ws = e3;
      }
      toSVGPath() {
        const t3 = [];
        for (const e3 of this.#tn) {
          let [i3, s2] = e3;
          t3.push(`M${i3} ${s2}`);
          for (let n2 = 2; n2 < e3.length; n2 += 2) {
            const a2 = e3[n2], r2 = e3[n2 + 1];
            if (a2 === i3) {
              t3.push(`V${r2}`);
              s2 = r2;
            } else if (r2 === s2) {
              t3.push(`H${a2}`);
              i3 = a2;
            }
          }
          t3.push("Z");
        }
        return t3.join(" ");
      }
      serialize([t3, e3, i3, s2], n2) {
        const a2 = [], r2 = i3 - t3, o2 = s2 - e3;
        for (const e4 of this.#tn) {
          const i4 = new Array(e4.length);
          for (let n3 = 0; n3 < e4.length; n3 += 2) {
            i4[n3] = t3 + e4[n3] * r2;
            i4[n3 + 1] = s2 - e4[n3 + 1] * o2;
          }
          a2.push(i4);
        }
        return a2;
      }
      get box() {
        return this.#Ws;
      }
    }
    class FreeOutliner {
      #Ws;
      #en = [];
      #in;
      #sn;
      #nn = [];
      #an = new Float64Array(18);
      #rn;
      #on;
      #ln;
      #hn;
      #dn;
      #he;
      #cn = [];
      static #un = 8;
      static #pn = 2;
      static #gn = FreeOutliner.#un + FreeOutliner.#pn;
      constructor({ x: t3, y: e3 }, i3, s2, n2, a2, r2 = 0) {
        this.#Ws = i3;
        this.#he = n2 * s2;
        this.#sn = a2;
        this.#an.set([NaN, NaN, NaN, NaN, t3, e3], 6);
        this.#in = r2;
        this.#hn = FreeOutliner.#un * s2;
        this.#ln = FreeOutliner.#gn * s2;
        this.#dn = s2;
        this.#cn.push(t3, e3);
      }
      get free() {
        return true;
      }
      isEmpty() {
        return isNaN(this.#an[8]);
      }
      #mn() {
        const t3 = this.#an.subarray(4, 6), e3 = this.#an.subarray(16, 18), [i3, s2, n2, a2] = this.#Ws;
        return [(this.#rn + (t3[0] - e3[0]) / 2 - i3) / n2, (this.#on + (t3[1] - e3[1]) / 2 - s2) / a2, (this.#rn + (e3[0] - t3[0]) / 2 - i3) / n2, (this.#on + (e3[1] - t3[1]) / 2 - s2) / a2];
      }
      add({ x: t3, y: e3 }) {
        this.#rn = t3;
        this.#on = e3;
        const [i3, s2, n2, a2] = this.#Ws;
        let [r2, o2, l2, h2] = this.#an.subarray(8, 12);
        const d2 = t3 - l2, c2 = e3 - h2, u2 = Math.hypot(d2, c2);
        if (u2 < this.#ln) return false;
        const p2 = u2 - this.#hn, g2 = p2 / u2, m2 = g2 * d2, f2 = g2 * c2;
        let b2 = r2, A2 = o2;
        r2 = l2;
        o2 = h2;
        l2 += m2;
        h2 += f2;
        this.#cn?.push(t3, e3);
        const v2 = m2 / p2, y2 = -f2 / p2 * this.#he, E2 = v2 * this.#he;
        this.#an.set(this.#an.subarray(2, 8), 0);
        this.#an.set([l2 + y2, h2 + E2], 4);
        this.#an.set(this.#an.subarray(14, 18), 12);
        this.#an.set([l2 - y2, h2 - E2], 16);
        if (isNaN(this.#an[6])) {
          if (0 === this.#nn.length) {
            this.#an.set([r2 + y2, o2 + E2], 2);
            this.#nn.push(NaN, NaN, NaN, NaN, (r2 + y2 - i3) / n2, (o2 + E2 - s2) / a2);
            this.#an.set([r2 - y2, o2 - E2], 14);
            this.#en.push(NaN, NaN, NaN, NaN, (r2 - y2 - i3) / n2, (o2 - E2 - s2) / a2);
          }
          this.#an.set([b2, A2, r2, o2, l2, h2], 6);
          return !this.isEmpty();
        }
        this.#an.set([b2, A2, r2, o2, l2, h2], 6);
        if (Math.abs(Math.atan2(A2 - o2, b2 - r2) - Math.atan2(f2, m2)) < Math.PI / 2) {
          [r2, o2, l2, h2] = this.#an.subarray(2, 6);
          this.#nn.push(NaN, NaN, NaN, NaN, ((r2 + l2) / 2 - i3) / n2, ((o2 + h2) / 2 - s2) / a2);
          [r2, o2, b2, A2] = this.#an.subarray(14, 18);
          this.#en.push(NaN, NaN, NaN, NaN, ((b2 + r2) / 2 - i3) / n2, ((A2 + o2) / 2 - s2) / a2);
          return true;
        }
        [b2, A2, r2, o2, l2, h2] = this.#an.subarray(0, 6);
        this.#nn.push(((b2 + 5 * r2) / 6 - i3) / n2, ((A2 + 5 * o2) / 6 - s2) / a2, ((5 * r2 + l2) / 6 - i3) / n2, ((5 * o2 + h2) / 6 - s2) / a2, ((r2 + l2) / 2 - i3) / n2, ((o2 + h2) / 2 - s2) / a2);
        [l2, h2, r2, o2, b2, A2] = this.#an.subarray(12, 18);
        this.#en.push(((b2 + 5 * r2) / 6 - i3) / n2, ((A2 + 5 * o2) / 6 - s2) / a2, ((5 * r2 + l2) / 6 - i3) / n2, ((5 * o2 + h2) / 6 - s2) / a2, ((r2 + l2) / 2 - i3) / n2, ((o2 + h2) / 2 - s2) / a2);
        return true;
      }
      toSVGPath() {
        if (this.isEmpty()) return "";
        const t3 = this.#nn, e3 = this.#en, i3 = this.#an.subarray(4, 6), s2 = this.#an.subarray(16, 18), [n2, a2, r2, o2] = this.#Ws, [l2, h2, d2, c2] = this.#mn();
        if (isNaN(this.#an[6]) && !this.isEmpty()) return `M${(this.#an[2] - n2) / r2} ${(this.#an[3] - a2) / o2} L${(this.#an[4] - n2) / r2} ${(this.#an[5] - a2) / o2} L${l2} ${h2} L${d2} ${c2} L${(this.#an[16] - n2) / r2} ${(this.#an[17] - a2) / o2} L${(this.#an[14] - n2) / r2} ${(this.#an[15] - a2) / o2} Z`;
        const u2 = [];
        u2.push(`M${t3[4]} ${t3[5]}`);
        for (let e4 = 6; e4 < t3.length; e4 += 6) isNaN(t3[e4]) ? u2.push(`L${t3[e4 + 4]} ${t3[e4 + 5]}`) : u2.push(`C${t3[e4]} ${t3[e4 + 1]} ${t3[e4 + 2]} ${t3[e4 + 3]} ${t3[e4 + 4]} ${t3[e4 + 5]}`);
        u2.push(`L${(i3[0] - n2) / r2} ${(i3[1] - a2) / o2} L${l2} ${h2} L${d2} ${c2} L${(s2[0] - n2) / r2} ${(s2[1] - a2) / o2}`);
        for (let t4 = e3.length - 6; t4 >= 6; t4 -= 6) isNaN(e3[t4]) ? u2.push(`L${e3[t4 + 4]} ${e3[t4 + 5]}`) : u2.push(`C${e3[t4]} ${e3[t4 + 1]} ${e3[t4 + 2]} ${e3[t4 + 3]} ${e3[t4 + 4]} ${e3[t4 + 5]}`);
        u2.push(`L${e3[4]} ${e3[5]} Z`);
        return u2.join(" ");
      }
      getOutlines() {
        const t3 = this.#nn, e3 = this.#en, i3 = this.#an, s2 = i3.subarray(4, 6), n2 = i3.subarray(16, 18), [a2, r2, o2, l2] = this.#Ws, h2 = new Float64Array((this.#cn?.length ?? 0) + 2);
        for (let t4 = 0, e4 = h2.length - 2; t4 < e4; t4 += 2) {
          h2[t4] = (this.#cn[t4] - a2) / o2;
          h2[t4 + 1] = (this.#cn[t4 + 1] - r2) / l2;
        }
        h2[h2.length - 2] = (this.#rn - a2) / o2;
        h2[h2.length - 1] = (this.#on - r2) / l2;
        const [d2, c2, u2, p2] = this.#mn();
        if (isNaN(i3[6]) && !this.isEmpty()) {
          const t4 = new Float64Array(36);
          t4.set([NaN, NaN, NaN, NaN, (i3[2] - a2) / o2, (i3[3] - r2) / l2, NaN, NaN, NaN, NaN, (i3[4] - a2) / o2, (i3[5] - r2) / l2, NaN, NaN, NaN, NaN, d2, c2, NaN, NaN, NaN, NaN, u2, p2, NaN, NaN, NaN, NaN, (i3[16] - a2) / o2, (i3[17] - r2) / l2, NaN, NaN, NaN, NaN, (i3[14] - a2) / o2, (i3[15] - r2) / l2], 0);
          return new FreeHighlightOutline(t4, h2, this.#Ws, this.#dn, this.#in, this.#sn);
        }
        const g2 = new Float64Array(this.#nn.length + 24 + this.#en.length);
        let m2 = t3.length;
        for (let e4 = 0; e4 < m2; e4 += 2) if (isNaN(t3[e4])) g2[e4] = g2[e4 + 1] = NaN;
        else {
          g2[e4] = t3[e4];
          g2[e4 + 1] = t3[e4 + 1];
        }
        g2.set([NaN, NaN, NaN, NaN, (s2[0] - a2) / o2, (s2[1] - r2) / l2, NaN, NaN, NaN, NaN, d2, c2, NaN, NaN, NaN, NaN, u2, p2, NaN, NaN, NaN, NaN, (n2[0] - a2) / o2, (n2[1] - r2) / l2], m2);
        m2 += 24;
        for (let t4 = e3.length - 6; t4 >= 6; t4 -= 6) for (let i4 = 0; i4 < 6; i4 += 2) if (isNaN(e3[t4 + i4])) {
          g2[m2] = g2[m2 + 1] = NaN;
          m2 += 2;
        } else {
          g2[m2] = e3[t4 + i4];
          g2[m2 + 1] = e3[t4 + i4 + 1];
          m2 += 2;
        }
        g2.set([NaN, NaN, NaN, NaN, e3[4], e3[5]], m2);
        return new FreeHighlightOutline(g2, h2, this.#Ws, this.#dn, this.#in, this.#sn);
      }
    }
    class FreeHighlightOutline extends Outline {
      #Ws;
      #fn = null;
      #in;
      #sn;
      #cn;
      #dn;
      #bn;
      constructor(t3, e3, i3, s2, n2, a2) {
        super();
        this.#bn = t3;
        this.#cn = e3;
        this.#Ws = i3;
        this.#dn = s2;
        this.#in = n2;
        this.#sn = a2;
        this.#An(a2);
        const { x: r2, y: o2, width: l2, height: h2 } = this.#fn;
        for (let e4 = 0, i4 = t3.length; e4 < i4; e4 += 2) {
          t3[e4] = (t3[e4] - r2) / l2;
          t3[e4 + 1] = (t3[e4 + 1] - o2) / h2;
        }
        for (let t4 = 0, i4 = e3.length; t4 < i4; t4 += 2) {
          e3[t4] = (e3[t4] - r2) / l2;
          e3[t4 + 1] = (e3[t4 + 1] - o2) / h2;
        }
      }
      toSVGPath() {
        const t3 = [`M${this.#bn[4]} ${this.#bn[5]}`];
        for (let e3 = 6, i3 = this.#bn.length; e3 < i3; e3 += 6) isNaN(this.#bn[e3]) ? t3.push(`L${this.#bn[e3 + 4]} ${this.#bn[e3 + 5]}`) : t3.push(`C${this.#bn[e3]} ${this.#bn[e3 + 1]} ${this.#bn[e3 + 2]} ${this.#bn[e3 + 3]} ${this.#bn[e3 + 4]} ${this.#bn[e3 + 5]}`);
        t3.push("Z");
        return t3.join(" ");
      }
      serialize([t3, e3, i3, s2], n2) {
        const a2 = i3 - t3, r2 = s2 - e3;
        let o2, l2;
        switch (n2) {
          case 0:
            o2 = this.#vn(this.#bn, t3, s2, a2, -r2);
            l2 = this.#vn(this.#cn, t3, s2, a2, -r2);
            break;
          case 90:
            o2 = this.#yn(this.#bn, t3, e3, a2, r2);
            l2 = this.#yn(this.#cn, t3, e3, a2, r2);
            break;
          case 180:
            o2 = this.#vn(this.#bn, i3, e3, -a2, r2);
            l2 = this.#vn(this.#cn, i3, e3, -a2, r2);
            break;
          case 270:
            o2 = this.#yn(this.#bn, i3, s2, -a2, -r2);
            l2 = this.#yn(this.#cn, i3, s2, -a2, -r2);
        }
        return { outline: Array.from(o2), points: [Array.from(l2)] };
      }
      #vn(t3, e3, i3, s2, n2) {
        const a2 = new Float64Array(t3.length);
        for (let r2 = 0, o2 = t3.length; r2 < o2; r2 += 2) {
          a2[r2] = e3 + t3[r2] * s2;
          a2[r2 + 1] = i3 + t3[r2 + 1] * n2;
        }
        return a2;
      }
      #yn(t3, e3, i3, s2, n2) {
        const a2 = new Float64Array(t3.length);
        for (let r2 = 0, o2 = t3.length; r2 < o2; r2 += 2) {
          a2[r2] = e3 + t3[r2 + 1] * s2;
          a2[r2 + 1] = i3 + t3[r2] * n2;
        }
        return a2;
      }
      #An(t3) {
        const e3 = this.#bn;
        let s2 = e3[4], n2 = e3[5], a2 = s2, r2 = n2, o2 = s2, l2 = n2, h2 = s2, d2 = n2;
        const c2 = t3 ? Math.max : Math.min;
        for (let t4 = 6, u3 = e3.length; t4 < u3; t4 += 6) {
          if (isNaN(e3[t4])) {
            a2 = Math.min(a2, e3[t4 + 4]);
            r2 = Math.min(r2, e3[t4 + 5]);
            o2 = Math.max(o2, e3[t4 + 4]);
            l2 = Math.max(l2, e3[t4 + 5]);
            if (d2 < e3[t4 + 5]) {
              h2 = e3[t4 + 4];
              d2 = e3[t4 + 5];
            } else d2 === e3[t4 + 5] && (h2 = c2(h2, e3[t4 + 4]));
          } else {
            const u4 = i2.Util.bezierBoundingBox(s2, n2, ...e3.slice(t4, t4 + 6));
            a2 = Math.min(a2, u4[0]);
            r2 = Math.min(r2, u4[1]);
            o2 = Math.max(o2, u4[2]);
            l2 = Math.max(l2, u4[3]);
            if (d2 < u4[3]) {
              h2 = u4[2];
              d2 = u4[3];
            } else d2 === u4[3] && (h2 = c2(h2, u4[2]));
          }
          s2 = e3[t4 + 4];
          n2 = e3[t4 + 5];
        }
        const u2 = a2 - this.#in, p2 = r2 - this.#in, g2 = o2 - a2 + 2 * this.#in, m2 = l2 - r2 + 2 * this.#in;
        this.#fn = { x: u2, y: p2, width: g2, height: m2, lastPoint: [h2, d2] };
      }
      get box() {
        return this.#fn;
      }
      getNewOutline(t3, e3) {
        const { x: i3, y: s2, width: n2, height: a2 } = this.#fn, [r2, o2, l2, h2] = this.#Ws, d2 = n2 * l2, c2 = a2 * h2, u2 = i3 * l2 + r2, p2 = s2 * h2 + o2, g2 = new FreeOutliner({ x: this.#cn[0] * d2 + u2, y: this.#cn[1] * c2 + p2 }, this.#Ws, this.#dn, t3, this.#sn, e3 ?? this.#in);
        for (let t4 = 2; t4 < this.#cn.length; t4 += 2) g2.add({ x: this.#cn[t4] * d2 + u2, y: this.#cn[t4 + 1] * c2 + p2 });
        return g2.getOutlines();
      }
    }
  }, 362: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { EditorToolbar: () => EditorToolbar, HighlightToolbar: () => HighlightToolbar });
    var i2 = e2(419);
    class EditorToolbar {
      #En = null;
      #Yt = null;
      #Qi;
      #wn = null;
      constructor(t3) {
        this.#Qi = t3;
      }
      render() {
        const t3 = this.#En = document.createElement("div");
        t3.className = "editToolbar";
        t3.setAttribute("role", "toolbar");
        t3.addEventListener("contextmenu", i2.noContextMenu);
        t3.addEventListener("pointerdown", EditorToolbar.#$i);
        const e3 = this.#wn = document.createElement("div");
        e3.className = "buttons";
        t3.append(e3);
        const s2 = this.#Qi.toolbarPosition;
        if (s2) {
          const { style: e4 } = t3, i3 = "ltr" === this.#Qi._uiManager.direction ? 1 - s2[0] : s2[0];
          e4.insetInlineEnd = 100 * i3 + "%";
          e4.top = `calc(${100 * s2[1]}% + var(--editor-toolbar-vert-offset))`;
        }
        this.#_n();
        return t3;
      }
      static #$i(t3) {
        t3.stopPropagation();
      }
      #xn(t3) {
        this.#Qi._focusEventsAllowed = false;
        t3.preventDefault();
        t3.stopPropagation();
      }
      #Tn(t3) {
        this.#Qi._focusEventsAllowed = true;
        t3.preventDefault();
        t3.stopPropagation();
      }
      #Sn(t3) {
        t3.addEventListener("focusin", this.#xn.bind(this), { capture: true });
        t3.addEventListener("focusout", this.#Tn.bind(this), { capture: true });
        t3.addEventListener("contextmenu", i2.noContextMenu);
      }
      hide() {
        this.#En.classList.add("hidden");
        this.#Yt?.hideDropdown();
      }
      show() {
        this.#En.classList.remove("hidden");
      }
      #_n() {
        const t3 = document.createElement("button");
        t3.className = "delete";
        t3.tabIndex = 0;
        t3.setAttribute("data-l10n-id", `pdfjs-editor-remove-${this.#Qi.editorType}-button`);
        this.#Sn(t3);
        t3.addEventListener("click", ((t4) => {
          this.#Qi._uiManager.delete();
        }));
        this.#wn.append(t3);
      }
      get #Cn() {
        const t3 = document.createElement("div");
        t3.className = "divider";
        return t3;
      }
      addAltTextButton(t3) {
        this.#Sn(t3);
        this.#wn.prepend(t3, this.#Cn);
      }
      addColorPicker(t3) {
        this.#Yt = t3;
        const e3 = t3.renderButton();
        this.#Sn(e3);
        this.#wn.prepend(e3, this.#Cn);
      }
      remove() {
        this.#En.remove();
        this.#Yt?.destroy();
        this.#Yt = null;
      }
    }
    class HighlightToolbar {
      #wn = null;
      #En = null;
      #Ni;
      constructor(t3) {
        this.#Ni = t3;
      }
      #Mn() {
        const t3 = this.#En = document.createElement("div");
        t3.className = "editToolbar";
        t3.setAttribute("role", "toolbar");
        t3.addEventListener("contextmenu", i2.noContextMenu);
        const e3 = this.#wn = document.createElement("div");
        e3.className = "buttons";
        t3.append(e3);
        this.#Pn();
        return t3;
      }
      #Rn(t3, e3) {
        let i3 = 0, s2 = 0;
        for (const n2 of t3) {
          const t4 = n2.y + n2.height;
          if (t4 < i3) continue;
          const a2 = n2.x + (e3 ? n2.width : 0);
          if (t4 > i3) {
            s2 = a2;
            i3 = t4;
          } else e3 ? a2 > s2 && (s2 = a2) : a2 < s2 && (s2 = a2);
        }
        return [e3 ? 1 - s2 : s2, i3];
      }
      show(t3, e3, i3) {
        const [s2, n2] = this.#Rn(e3, i3), { style: a2 } = this.#En ||= this.#Mn();
        t3.append(this.#En);
        a2.insetInlineEnd = 100 * s2 + "%";
        a2.top = `calc(${100 * n2}% + var(--editor-toolbar-vert-offset))`;
      }
      hide() {
        this.#En.remove();
      }
      #Pn() {
        const t3 = document.createElement("button");
        t3.className = "highlightButton";
        t3.tabIndex = 0;
        t3.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
        const e3 = document.createElement("span");
        t3.append(e3);
        e3.className = "visuallyHidden";
        e3.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
        t3.addEventListener("contextmenu", i2.noContextMenu);
        t3.addEventListener("click", (() => {
          this.#Ni.highlightSelection("floating_button");
        }));
        this.#wn.append(t3);
      }
    }
  }, 830: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { AnnotationEditorUIManager: () => AnnotationEditorUIManager, ColorManager: () => ColorManager, KeyboardManager: () => KeyboardManager, bindEvents: () => bindEvents, opacityToHex: () => opacityToHex });
    var i2 = e2(292), s2 = e2(419), n2 = e2(362);
    function bindEvents(t3, e3, i3) {
      for (const s3 of i3) e3.addEventListener(s3, t3[s3].bind(t3));
    }
    function opacityToHex(t3) {
      return Math.round(Math.min(255, Math.max(1, 255 * t3))).toString(16).padStart(2, "0");
    }
    class IdManager {
      #gt = 0;
      constructor() {
      }
      get id() {
        return `${i2.AnnotationEditorPrefix}${this.#gt++}`;
      }
    }
    class ImageManager {
      #Fn = (0, i2.getUuid)();
      #gt = 0;
      #mt = null;
      static get _isSVGFittingCanvas() {
        const t3 = new OffscreenCanvas(1, 3).getContext("2d"), e3 = new Image();
        e3.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
        const s3 = e3.decode().then((() => {
          t3.drawImage(e3, 0, 0, 1, 1, 0, 0, 1, 3);
          return 0 === new Uint32Array(t3.getImageData(0, 0, 1, 1).data.buffer)[0];
        }));
        return (0, i2.shadow)(this, "_isSVGFittingCanvas", s3);
      }
      async #kn(t3, e3) {
        this.#mt ||= /* @__PURE__ */ new Map();
        let i3 = this.#mt.get(t3);
        if (null === i3) return null;
        if (i3?.bitmap) {
          i3.refCounter += 1;
          return i3;
        }
        try {
          i3 ||= { bitmap: null, id: `image_${this.#Fn}_${this.#gt++}`, refCounter: 0, isSvg: false };
          let t4;
          if ("string" == typeof e3) {
            i3.url = e3;
            t4 = await (0, s2.fetchData)(e3, "blob");
          } else t4 = i3.file = e3;
          if ("image/svg+xml" === t4.type) {
            const e4 = ImageManager._isSVGFittingCanvas, s3 = new FileReader(), n3 = new Image(), a2 = new Promise(((t5, a3) => {
              n3.onload = () => {
                i3.bitmap = n3;
                i3.isSvg = true;
                t5();
              };
              s3.onload = async () => {
                const t6 = i3.svgUrl = s3.result;
                n3.src = await e4 ? `${t6}#svgView(preserveAspectRatio(none))` : t6;
              };
              n3.onerror = s3.onerror = a3;
            }));
            s3.readAsDataURL(t4);
            await a2;
          } else i3.bitmap = await createImageBitmap(t4);
          i3.refCounter = 1;
        } catch (t4) {
          console.error(t4);
          i3 = null;
        }
        this.#mt.set(t3, i3);
        i3 && this.#mt.set(i3.id, i3);
        return i3;
      }
      async getFromFile(t3) {
        const { lastModified: e3, name: i3, size: s3, type: n3 } = t3;
        return this.#kn(`${e3}_${i3}_${s3}_${n3}`, t3);
      }
      async getFromUrl(t3) {
        return this.#kn(t3, t3);
      }
      async getFromId(t3) {
        this.#mt ||= /* @__PURE__ */ new Map();
        const e3 = this.#mt.get(t3);
        if (!e3) return null;
        if (e3.bitmap) {
          e3.refCounter += 1;
          return e3;
        }
        return e3.file ? this.getFromFile(e3.file) : this.getFromUrl(e3.url);
      }
      getSvgUrl(t3) {
        const e3 = this.#mt.get(t3);
        return e3?.isSvg ? e3.svgUrl : null;
      }
      deleteId(t3) {
        this.#mt ||= /* @__PURE__ */ new Map();
        const e3 = this.#mt.get(t3);
        if (e3) {
          e3.refCounter -= 1;
          0 === e3.refCounter && (e3.bitmap = null);
        }
      }
      isValidId(t3) {
        return t3.startsWith(`image_${this.#Fn}_`);
      }
    }
    class CommandManager {
      #Dn = [];
      #In = false;
      #Ln;
      #On = -1;
      constructor(t3 = 128) {
        this.#Ln = t3;
      }
      add({ cmd: t3, undo: e3, post: i3, mustExec: s3, type: n3 = NaN, overwriteIfSameType: a2 = false, keepUndo: r2 = false }) {
        s3 && t3();
        if (this.#In) return;
        const o2 = { cmd: t3, undo: e3, post: i3, type: n3 };
        if (-1 === this.#On) {
          this.#Dn.length > 0 && (this.#Dn.length = 0);
          this.#On = 0;
          this.#Dn.push(o2);
          return;
        }
        if (a2 && this.#Dn[this.#On].type === n3) {
          r2 && (o2.undo = this.#Dn[this.#On].undo);
          this.#Dn[this.#On] = o2;
          return;
        }
        const l2 = this.#On + 1;
        if (l2 === this.#Ln) this.#Dn.splice(0, 1);
        else {
          this.#On = l2;
          l2 < this.#Dn.length && this.#Dn.splice(l2);
        }
        this.#Dn.push(o2);
      }
      undo() {
        if (-1 === this.#On) return;
        this.#In = true;
        const { undo: t3, post: e3 } = this.#Dn[this.#On];
        t3();
        e3?.();
        this.#In = false;
        this.#On -= 1;
      }
      redo() {
        if (this.#On < this.#Dn.length - 1) {
          this.#On += 1;
          this.#In = true;
          const { cmd: t3, post: e3 } = this.#Dn[this.#On];
          t3();
          e3?.();
          this.#In = false;
        }
      }
      hasSomethingToUndo() {
        return -1 !== this.#On;
      }
      hasSomethingToRedo() {
        return this.#On < this.#Dn.length - 1;
      }
      destroy() {
        this.#Dn = null;
      }
    }
    class KeyboardManager {
      constructor(t3) {
        this.buffer = [];
        this.callbacks = /* @__PURE__ */ new Map();
        this.allKeys = /* @__PURE__ */ new Set();
        const { isMac: e3 } = i2.FeatureTest.platform;
        for (const [i3, s3, n3 = {}] of t3) for (const t4 of i3) {
          const i4 = t4.startsWith("mac+");
          if (e3 && i4) {
            this.callbacks.set(t4.slice(4), { callback: s3, options: n3 });
            this.allKeys.add(t4.split("+").at(-1));
          } else if (!e3 && !i4) {
            this.callbacks.set(t4, { callback: s3, options: n3 });
            this.allKeys.add(t4.split("+").at(-1));
          }
        }
      }
      #Nn(t3) {
        t3.altKey && this.buffer.push("alt");
        t3.ctrlKey && this.buffer.push("ctrl");
        t3.metaKey && this.buffer.push("meta");
        t3.shiftKey && this.buffer.push("shift");
        this.buffer.push(t3.key);
        const e3 = this.buffer.join("+");
        this.buffer.length = 0;
        return e3;
      }
      exec(t3, e3) {
        if (!this.allKeys.has(e3.key)) return;
        const i3 = this.callbacks.get(this.#Nn(e3));
        if (!i3) return;
        const { callback: s3, options: { bubbles: n3 = false, args: a2 = [], checker: r2 = null } } = i3;
        if (!r2 || r2(t3, e3)) {
          s3.bind(t3, ...a2, e3)();
          if (!n3) {
            e3.stopPropagation();
            e3.preventDefault();
          }
        }
      }
    }
    class ColorManager {
      static _colorsMapping = /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
      get _colors() {
        const t3 = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
        (0, s2.getColorValues)(t3);
        return (0, i2.shadow)(this, "_colors", t3);
      }
      convert(t3) {
        const e3 = (0, s2.getRGB)(t3);
        if (!window.matchMedia("(forced-colors: active)").matches) return e3;
        for (const [t4, i3] of this._colors) if (i3.every(((t5, i4) => t5 === e3[i4]))) return ColorManager._colorsMapping.get(t4);
        return e3;
      }
      getHexCode(t3) {
        const e3 = this._colors.get(t3);
        return e3 ? i2.Util.makeHexColor(...e3) : t3;
      }
    }
    class AnnotationEditorUIManager {
      #Bn = null;
      #Hn = /* @__PURE__ */ new Map();
      #Un = /* @__PURE__ */ new Map();
      #zn = null;
      #Vn = null;
      #jn = null;
      #Gn = new CommandManager();
      #$n = 0;
      #Wn = /* @__PURE__ */ new Set();
      #qn = null;
      #Bi = null;
      #Kn = /* @__PURE__ */ new Set();
      #Xn = false;
      #Yn = null;
      #Jn = null;
      #Qn = null;
      #Zn = false;
      #ta = null;
      #ea = new IdManager();
      #ia = false;
      #sa = false;
      #na = null;
      #aa = null;
      #ra = null;
      #oa = i2.AnnotationEditorType.NONE;
      #la = /* @__PURE__ */ new Set();
      #ha = null;
      #da = null;
      #ca = null;
      #ua = this.blur.bind(this);
      #pa = this.focus.bind(this);
      #ga = this.copy.bind(this);
      #ma = this.cut.bind(this);
      #fa = this.paste.bind(this);
      #se = this.keydown.bind(this);
      #ba = this.keyup.bind(this);
      #Aa = this.onEditingAction.bind(this);
      #va = this.onPageChanging.bind(this);
      #ya = this.onScaleChanging.bind(this);
      #Ea = this.#wa.bind(this);
      #_a = this.onRotationChanging.bind(this);
      #xa = { isEditing: false, isEmpty: true, hasSomethingToUndo: false, hasSomethingToRedo: false, hasSelectedEditor: false, hasSelectedText: false };
      #Ta = [0, 0];
      #Sa = null;
      #m = null;
      #Ca = null;
      static TRANSLATE_SMALL = 1;
      static TRANSLATE_BIG = 10;
      static get _keyboardManager() {
        const t3 = AnnotationEditorUIManager.prototype, arrowChecker = (t4) => t4.#m.contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t4.hasSomethingToControl(), textInputChecker = (t4, { target: e4 }) => {
          if (e4 instanceof HTMLInputElement) {
            const { type: t5 } = e4;
            return "text" !== t5 && "number" !== t5;
          }
          return true;
        }, e3 = this.TRANSLATE_SMALL, s3 = this.TRANSLATE_BIG;
        return (0, i2.shadow)(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], t3.selectAll, { checker: textInputChecker }], [["ctrl+z", "mac+meta+z"], t3.undo, { checker: textInputChecker }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t3.redo, { checker: textInputChecker }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t3.delete, { checker: textInputChecker }], [["Enter", "mac+Enter"], t3.addNewEditorFromKeyboard, { checker: (t4, { target: e4 }) => !(e4 instanceof HTMLButtonElement) && t4.#m.contains(e4) && !t4.isEnterHandled }], [[" ", "mac+ "], t3.addNewEditorFromKeyboard, { checker: (t4, { target: e4 }) => !(e4 instanceof HTMLButtonElement) && t4.#m.contains(document.activeElement) }], [["Escape", "mac+Escape"], t3.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t3.translateSelectedEditors, { args: [-e3, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t3.translateSelectedEditors, { args: [-s3, 0], checker: arrowChecker }], [["ArrowRight", "mac+ArrowRight"], t3.translateSelectedEditors, { args: [e3, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t3.translateSelectedEditors, { args: [s3, 0], checker: arrowChecker }], [["ArrowUp", "mac+ArrowUp"], t3.translateSelectedEditors, { args: [0, -e3], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t3.translateSelectedEditors, { args: [0, -s3], checker: arrowChecker }], [["ArrowDown", "mac+ArrowDown"], t3.translateSelectedEditors, { args: [0, e3], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t3.translateSelectedEditors, { args: [0, s3], checker: arrowChecker }]]));
      }
      constructor(t3, e3, i3, n3, a2, r2, o2, l2, h2) {
        this.#m = t3;
        this.#Ca = e3;
        this.#zn = i3;
        this._eventBus = n3;
        this._eventBus._on("editingaction", this.#Aa);
        this._eventBus._on("pagechanging", this.#va);
        this._eventBus._on("scalechanging", this.#ya);
        this._eventBus._on("rotationchanging", this.#_a);
        this.#Ma();
        this.#Pa();
        this.#Vn = a2.annotationStorage;
        this.#Yn = a2.filterFactory;
        this.#da = r2;
        this.#Qn = o2 || null;
        this.#Xn = l2;
        this.#ra = h2 || null;
        this.viewParameters = { realScale: s2.PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
        this.isShiftKeyDown = false;
      }
      destroy() {
        this.#Ra();
        this.#Fa();
        this._eventBus._off("editingaction", this.#Aa);
        this._eventBus._off("pagechanging", this.#va);
        this._eventBus._off("scalechanging", this.#ya);
        this._eventBus._off("rotationchanging", this.#_a);
        for (const t3 of this.#Un.values()) t3.destroy();
        this.#Un.clear();
        this.#Hn.clear();
        this.#Kn.clear();
        this.#Bn = null;
        this.#la.clear();
        this.#Gn.destroy();
        this.#zn?.destroy();
        this.#ta?.hide();
        this.#ta = null;
        if (this.#Jn) {
          clearTimeout(this.#Jn);
          this.#Jn = null;
        }
        if (this.#Sa) {
          clearTimeout(this.#Sa);
          this.#Sa = null;
        }
        this.#ka();
      }
      async mlGuess(t3) {
        return this.#ra?.guess(t3) || null;
      }
      get hasMLManager() {
        return !!this.#ra;
      }
      get hcmFilter() {
        return (0, i2.shadow)(this, "hcmFilter", this.#da ? this.#Yn.addHCMFilter(this.#da.foreground, this.#da.background) : "none");
      }
      get direction() {
        return (0, i2.shadow)(this, "direction", getComputedStyle(this.#m).direction);
      }
      get highlightColors() {
        return (0, i2.shadow)(this, "highlightColors", this.#Qn ? new Map(this.#Qn.split(",").map(((t3) => t3.split("=").map(((t4) => t4.trim()))))) : null);
      }
      get highlightColorNames() {
        return (0, i2.shadow)(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, ((t3) => t3.reverse()))) : null);
      }
      setMainHighlightColorPicker(t3) {
        this.#aa = t3;
      }
      editAltText(t3) {
        this.#zn?.editAltText(this, t3);
      }
      onPageChanging({ pageNumber: t3 }) {
        this.#$n = t3 - 1;
      }
      focusMainContainer() {
        this.#m.focus();
      }
      findParent(t3, e3) {
        for (const i3 of this.#Un.values()) {
          const { x: s3, y: n3, width: a2, height: r2 } = i3.div.getBoundingClientRect();
          if (t3 >= s3 && t3 <= s3 + a2 && e3 >= n3 && e3 <= n3 + r2) return i3;
        }
        return null;
      }
      disableUserSelect(t3 = false) {
        this.#Ca.classList.toggle("noUserSelect", t3);
      }
      addShouldRescale(t3) {
        this.#Kn.add(t3);
      }
      removeShouldRescale(t3) {
        this.#Kn.delete(t3);
      }
      onScaleChanging({ scale: t3 }) {
        this.commitOrRemove();
        this.viewParameters.realScale = t3 * s2.PixelsPerInch.PDF_TO_CSS_UNITS;
        for (const t4 of this.#Kn) t4.onScaleChanging();
      }
      onRotationChanging({ pagesRotation: t3 }) {
        this.commitOrRemove();
        this.viewParameters.rotation = t3;
      }
      #Da({ anchorNode: t3 }) {
        return t3.nodeType === Node.TEXT_NODE ? t3.parentElement : t3;
      }
      highlightSelection(t3 = "") {
        const e3 = document.getSelection();
        if (!e3 || e3.isCollapsed) return;
        const { anchorNode: s3, anchorOffset: n3, focusNode: a2, focusOffset: r2 } = e3, o2 = e3.toString(), l2 = this.#Da(e3).closest(".textLayer"), h2 = this.getSelectionBoxes(l2);
        if (h2) {
          e3.empty();
          if (this.#oa === i2.AnnotationEditorType.NONE) {
            this._eventBus.dispatch("showannotationeditorui", { source: this, mode: i2.AnnotationEditorType.HIGHLIGHT });
            this.showAllEditors("highlight", true, true);
          }
          for (const e4 of this.#Un.values()) if (e4.hasTextLayer(l2)) {
            e4.createAndAddNewEditor({ x: 0, y: 0 }, false, { methodOfCreation: t3, boxes: h2, anchorNode: s3, anchorOffset: n3, focusNode: a2, focusOffset: r2, text: o2 });
            break;
          }
        }
      }
      #Ia() {
        const t3 = document.getSelection();
        if (!t3 || t3.isCollapsed) return;
        const e3 = this.#Da(t3).closest(".textLayer"), i3 = this.getSelectionBoxes(e3);
        if (i3) {
          this.#ta ||= new n2.HighlightToolbar(this);
          this.#ta.show(e3, i3, "ltr" === this.direction);
        }
      }
      addToAnnotationStorage(t3) {
        t3.isEmpty() || !this.#Vn || this.#Vn.has(t3.id) || this.#Vn.setValue(t3.id, t3);
      }
      #wa() {
        const t3 = document.getSelection();
        if (!t3 || t3.isCollapsed) {
          if (this.#ha) {
            this.#ta?.hide();
            this.#ha = null;
            this.#La({ hasSelectedText: false });
          }
          return;
        }
        const { anchorNode: e3 } = t3;
        if (e3 === this.#ha) return;
        if (this.#Da(t3).closest(".textLayer")) {
          this.#ta?.hide();
          this.#ha = e3;
          this.#La({ hasSelectedText: true });
          if (this.#oa === i2.AnnotationEditorType.HIGHLIGHT || this.#oa === i2.AnnotationEditorType.NONE) {
            this.#oa === i2.AnnotationEditorType.HIGHLIGHT && this.showAllEditors("highlight", true, true);
            this.#Zn = this.isShiftKeyDown;
            if (!this.isShiftKeyDown) {
              const pointerup = (t4) => {
                if ("pointerup" !== t4.type || 0 === t4.button) {
                  window.removeEventListener("pointerup", pointerup);
                  window.removeEventListener("blur", pointerup);
                  "pointerup" === t4.type && this.#Oa("main_toolbar");
                }
              };
              window.addEventListener("pointerup", pointerup);
              window.addEventListener("blur", pointerup);
            }
          }
        } else if (this.#ha) {
          this.#ta?.hide();
          this.#ha = null;
          this.#La({ hasSelectedText: false });
        }
      }
      #Oa(t3 = "") {
        this.#oa === i2.AnnotationEditorType.HIGHLIGHT ? this.highlightSelection(t3) : this.#Xn && this.#Ia();
      }
      #Ma() {
        document.addEventListener("selectionchange", this.#Ea);
      }
      #ka() {
        document.removeEventListener("selectionchange", this.#Ea);
      }
      #Na() {
        window.addEventListener("focus", this.#pa);
        window.addEventListener("blur", this.#ua);
      }
      #Fa() {
        window.removeEventListener("focus", this.#pa);
        window.removeEventListener("blur", this.#ua);
      }
      blur() {
        this.isShiftKeyDown = false;
        if (this.#Zn) {
          this.#Zn = false;
          this.#Oa("main_toolbar");
        }
        if (!this.hasSelection) return;
        const { activeElement: t3 } = document;
        for (const e3 of this.#la) if (e3.div.contains(t3)) {
          this.#na = [e3, t3];
          e3._focusEventsAllowed = false;
          break;
        }
      }
      focus() {
        if (!this.#na) return;
        const [t3, e3] = this.#na;
        this.#na = null;
        e3.addEventListener("focusin", (() => {
          t3._focusEventsAllowed = true;
        }), { once: true });
        e3.focus();
      }
      #Pa() {
        window.addEventListener("keydown", this.#se);
        window.addEventListener("keyup", this.#ba);
      }
      #Ra() {
        window.removeEventListener("keydown", this.#se);
        window.removeEventListener("keyup", this.#ba);
      }
      #Ba() {
        document.addEventListener("copy", this.#ga);
        document.addEventListener("cut", this.#ma);
        document.addEventListener("paste", this.#fa);
      }
      #Ha() {
        document.removeEventListener("copy", this.#ga);
        document.removeEventListener("cut", this.#ma);
        document.removeEventListener("paste", this.#fa);
      }
      addEditListeners() {
        this.#Pa();
        this.#Ba();
      }
      removeEditListeners() {
        this.#Ra();
        this.#Ha();
      }
      copy(t3) {
        t3.preventDefault();
        this.#Bn?.commitOrRemove();
        if (!this.hasSelection) return;
        const e3 = [];
        for (const t4 of this.#la) {
          const i3 = t4.serialize(true);
          i3 && e3.push(i3);
        }
        0 !== e3.length && t3.clipboardData.setData("application/pdfjs", JSON.stringify(e3));
      }
      cut(t3) {
        this.copy(t3);
        this.delete();
      }
      paste(t3) {
        t3.preventDefault();
        const { clipboardData: e3 } = t3;
        for (const t4 of e3.items) for (const e4 of this.#Bi) if (e4.isHandlingMimeForPasting(t4.type)) {
          e4.paste(t4, this.currentLayer);
          return;
        }
        let s3 = e3.getData("application/pdfjs");
        if (!s3) return;
        try {
          s3 = JSON.parse(s3);
        } catch (t4) {
          (0, i2.warn)(`paste: "${t4.message}".`);
          return;
        }
        if (!Array.isArray(s3)) return;
        this.unselectAll();
        const n3 = this.currentLayer;
        try {
          const t4 = [];
          for (const e4 of s3) {
            const i3 = n3.deserialize(e4);
            if (!i3) return;
            t4.push(i3);
          }
          const cmd = () => {
            for (const e4 of t4) this.#Ua(e4);
            this.#za(t4);
          }, undo = () => {
            for (const e4 of t4) e4.remove();
          };
          this.addCommands({ cmd, undo, mustExec: true });
        } catch (t4) {
          (0, i2.warn)(`paste: "${t4.message}".`);
        }
      }
      keydown(t3) {
        this.isShiftKeyDown || "Shift" !== t3.key || (this.isShiftKeyDown = true);
        this.#oa === i2.AnnotationEditorType.NONE || this.isEditorHandlingKeyboard || AnnotationEditorUIManager._keyboardManager.exec(this, t3);
      }
      keyup(t3) {
        if (this.isShiftKeyDown && "Shift" === t3.key) {
          this.isShiftKeyDown = false;
          if (this.#Zn) {
            this.#Zn = false;
            this.#Oa("main_toolbar");
          }
        }
      }
      onEditingAction({ name: t3 }) {
        switch (t3) {
          case "undo":
          case "redo":
          case "delete":
          case "selectAll":
            this[t3]();
            break;
          case "highlightSelection":
            this.highlightSelection("context_menu");
        }
      }
      #La(t3) {
        if (Object.entries(t3).some((([t4, e3]) => this.#xa[t4] !== e3))) {
          this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(this.#xa, t3) });
          this.#oa === i2.AnnotationEditorType.HIGHLIGHT && false === t3.hasSelectedEditor && this.#Va([[i2.AnnotationEditorParamsType.HIGHLIGHT_FREE, true]]);
        }
      }
      #Va(t3) {
        this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t3 });
      }
      setEditingState(t3) {
        if (t3) {
          this.#Na();
          this.#Ba();
          this.#La({ isEditing: this.#oa !== i2.AnnotationEditorType.NONE, isEmpty: this.#ja(), hasSomethingToUndo: this.#Gn.hasSomethingToUndo(), hasSomethingToRedo: this.#Gn.hasSomethingToRedo(), hasSelectedEditor: false });
        } else {
          this.#Fa();
          this.#Ha();
          this.#La({ isEditing: false });
          this.disableUserSelect(false);
        }
      }
      registerEditorTypes(t3) {
        if (!this.#Bi) {
          this.#Bi = t3;
          for (const t4 of this.#Bi) this.#Va(t4.defaultPropertiesToUpdate);
        }
      }
      getId() {
        return this.#ea.id;
      }
      get currentLayer() {
        return this.#Un.get(this.#$n);
      }
      getLayer(t3) {
        return this.#Un.get(t3);
      }
      get currentPageIndex() {
        return this.#$n;
      }
      addLayer(t3) {
        this.#Un.set(t3.pageIndex, t3);
        this.#ia ? t3.enable() : t3.disable();
      }
      removeLayer(t3) {
        this.#Un.delete(t3.pageIndex);
      }
      updateMode(t3, e3 = null, s3 = false) {
        if (this.#oa !== t3) {
          this.#oa = t3;
          if (t3 !== i2.AnnotationEditorType.NONE) {
            this.setEditingState(true);
            this.#Ga();
            this.unselectAll();
            for (const e4 of this.#Un.values()) e4.updateMode(t3);
            if (e3 || !s3) {
              if (e3) {
                for (const t4 of this.#Hn.values()) if (t4.annotationElementId === e3) {
                  this.setSelected(t4);
                  t4.enterInEditMode();
                  break;
                }
              }
            } else this.addNewEditorFromKeyboard();
          } else {
            this.setEditingState(false);
            this.#$a();
          }
        }
      }
      addNewEditorFromKeyboard() {
        this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
      }
      updateToolbar(t3) {
        t3 !== this.#oa && this._eventBus.dispatch("switchannotationeditormode", { source: this, mode: t3 });
      }
      updateParams(t3, e3) {
        if (this.#Bi) {
          switch (t3) {
            case i2.AnnotationEditorParamsType.CREATE:
              this.currentLayer.addNewEditor();
              return;
            case i2.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
              this.#aa?.updateColor(e3);
              break;
            case i2.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
              this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } });
              (this.#ca ||= /* @__PURE__ */ new Map()).set(t3, e3);
              this.showAllEditors("highlight", e3);
          }
          for (const i3 of this.#la) i3.updateParams(t3, e3);
          for (const i3 of this.#Bi) i3.updateDefaultParams(t3, e3);
        }
      }
      showAllEditors(t3, e3, s3 = false) {
        for (const i3 of this.#Hn.values()) i3.editorType === t3 && i3.show(e3);
        (this.#ca?.get(i2.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL) ?? true) !== e3 && this.#Va([[i2.AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, e3]]);
      }
      enableWaiting(t3 = false) {
        if (this.#sa !== t3) {
          this.#sa = t3;
          for (const e3 of this.#Un.values()) {
            t3 ? e3.disableClick() : e3.enableClick();
            e3.div.classList.toggle("waiting", t3);
          }
        }
      }
      #Ga() {
        if (!this.#ia) {
          this.#ia = true;
          for (const t3 of this.#Un.values()) t3.enable();
          for (const t3 of this.#Hn.values()) t3.enable();
        }
      }
      #$a() {
        this.unselectAll();
        if (this.#ia) {
          this.#ia = false;
          for (const t3 of this.#Un.values()) t3.disable();
          for (const t3 of this.#Hn.values()) t3.disable();
        }
      }
      getEditors(t3) {
        const e3 = [];
        for (const i3 of this.#Hn.values()) i3.pageIndex === t3 && e3.push(i3);
        return e3;
      }
      getEditor(t3) {
        return this.#Hn.get(t3);
      }
      addEditor(t3) {
        this.#Hn.set(t3.id, t3);
      }
      removeEditor(t3) {
        if (t3.div.contains(document.activeElement)) {
          this.#Jn && clearTimeout(this.#Jn);
          this.#Jn = setTimeout((() => {
            this.focusMainContainer();
            this.#Jn = null;
          }), 0);
        }
        this.#Hn.delete(t3.id);
        this.unselect(t3);
        t3.annotationElementId && this.#Wn.has(t3.annotationElementId) || this.#Vn?.remove(t3.id);
      }
      addDeletedAnnotationElement(t3) {
        this.#Wn.add(t3.annotationElementId);
        this.addChangedExistingAnnotation(t3);
        t3.deleted = true;
      }
      isDeletedAnnotationElement(t3) {
        return this.#Wn.has(t3);
      }
      removeDeletedAnnotationElement(t3) {
        this.#Wn.delete(t3.annotationElementId);
        this.removeChangedExistingAnnotation(t3);
        t3.deleted = false;
      }
      #Ua(t3) {
        const e3 = this.#Un.get(t3.pageIndex);
        if (e3) e3.addOrRebuild(t3);
        else {
          this.addEditor(t3);
          this.addToAnnotationStorage(t3);
        }
      }
      setActiveEditor(t3) {
        if (this.#Bn !== t3) {
          this.#Bn = t3;
          t3 && this.#Va(t3.propertiesToUpdate);
        }
      }
      get #Wa() {
        let t3 = null;
        for (t3 of this.#la) ;
        return t3;
      }
      updateUI(t3) {
        this.#Wa === t3 && this.#Va(t3.propertiesToUpdate);
      }
      toggleSelected(t3) {
        if (this.#la.has(t3)) {
          this.#la.delete(t3);
          t3.unselect();
          this.#La({ hasSelectedEditor: this.hasSelection });
        } else {
          this.#la.add(t3);
          t3.select();
          this.#Va(t3.propertiesToUpdate);
          this.#La({ hasSelectedEditor: true });
        }
      }
      setSelected(t3) {
        for (const e3 of this.#la) e3 !== t3 && e3.unselect();
        this.#la.clear();
        this.#la.add(t3);
        t3.select();
        this.#Va(t3.propertiesToUpdate);
        this.#La({ hasSelectedEditor: true });
      }
      isSelected(t3) {
        return this.#la.has(t3);
      }
      get firstSelectedEditor() {
        return this.#la.values().next().value;
      }
      unselect(t3) {
        t3.unselect();
        this.#la.delete(t3);
        this.#La({ hasSelectedEditor: this.hasSelection });
      }
      get hasSelection() {
        return 0 !== this.#la.size;
      }
      get isEnterHandled() {
        return 1 === this.#la.size && this.firstSelectedEditor.isEnterHandled;
      }
      undo() {
        this.#Gn.undo();
        this.#La({ hasSomethingToUndo: this.#Gn.hasSomethingToUndo(), hasSomethingToRedo: true, isEmpty: this.#ja() });
      }
      redo() {
        this.#Gn.redo();
        this.#La({ hasSomethingToUndo: true, hasSomethingToRedo: this.#Gn.hasSomethingToRedo(), isEmpty: this.#ja() });
      }
      addCommands(t3) {
        this.#Gn.add(t3);
        this.#La({ hasSomethingToUndo: true, hasSomethingToRedo: false, isEmpty: this.#ja() });
      }
      #ja() {
        if (0 === this.#Hn.size) return true;
        if (1 === this.#Hn.size) for (const t3 of this.#Hn.values()) return t3.isEmpty();
        return false;
      }
      delete() {
        this.commitOrRemove();
        if (!this.hasSelection) return;
        const t3 = [...this.#la];
        this.addCommands({ cmd: () => {
          for (const e3 of t3) e3.remove();
        }, undo: () => {
          for (const e3 of t3) this.#Ua(e3);
        }, mustExec: true });
      }
      commitOrRemove() {
        this.#Bn?.commitOrRemove();
      }
      hasSomethingToControl() {
        return this.#Bn || this.hasSelection;
      }
      #za(t3) {
        for (const t4 of this.#la) t4.unselect();
        this.#la.clear();
        for (const e3 of t3) if (!e3.isEmpty()) {
          this.#la.add(e3);
          e3.select();
        }
        this.#La({ hasSelectedEditor: this.hasSelection });
      }
      selectAll() {
        for (const t3 of this.#la) t3.commit();
        this.#za(this.#Hn.values());
      }
      unselectAll() {
        if (this.#Bn) {
          this.#Bn.commitOrRemove();
          if (this.#oa !== i2.AnnotationEditorType.NONE) return;
        }
        if (this.hasSelection) {
          for (const t3 of this.#la) t3.unselect();
          this.#la.clear();
          this.#La({ hasSelectedEditor: false });
        }
      }
      translateSelectedEditors(t3, e3, i3 = false) {
        i3 || this.commitOrRemove();
        if (!this.hasSelection) return;
        this.#Ta[0] += t3;
        this.#Ta[1] += e3;
        const [s3, n3] = this.#Ta, a2 = [...this.#la];
        this.#Sa && clearTimeout(this.#Sa);
        this.#Sa = setTimeout((() => {
          this.#Sa = null;
          this.#Ta[0] = this.#Ta[1] = 0;
          this.addCommands({ cmd: () => {
            for (const t4 of a2) this.#Hn.has(t4.id) && t4.translateInPage(s3, n3);
          }, undo: () => {
            for (const t4 of a2) this.#Hn.has(t4.id) && t4.translateInPage(-s3, -n3);
          }, mustExec: false });
        }), 1e3);
        for (const i4 of a2) i4.translateInPage(t3, e3);
      }
      setUpDragSession() {
        if (this.hasSelection) {
          this.disableUserSelect(true);
          this.#qn = /* @__PURE__ */ new Map();
          for (const t3 of this.#la) this.#qn.set(t3, { savedX: t3.x, savedY: t3.y, savedPageIndex: t3.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
        }
      }
      endDragSession() {
        if (!this.#qn) return false;
        this.disableUserSelect(false);
        const t3 = this.#qn;
        this.#qn = null;
        let e3 = false;
        for (const [{ x: i3, y: s3, pageIndex: n3 }, a2] of t3) {
          a2.newX = i3;
          a2.newY = s3;
          a2.newPageIndex = n3;
          e3 ||= i3 !== a2.savedX || s3 !== a2.savedY || n3 !== a2.savedPageIndex;
        }
        if (!e3) return false;
        const move = (t4, e4, i3, s3) => {
          if (this.#Hn.has(t4.id)) {
            const n3 = this.#Un.get(s3);
            if (n3) t4._setParentAndPosition(n3, e4, i3);
            else {
              t4.pageIndex = s3;
              t4.x = e4;
              t4.y = i3;
            }
          }
        };
        this.addCommands({ cmd: () => {
          for (const [e4, { newX: i3, newY: s3, newPageIndex: n3 }] of t3) move(e4, i3, s3, n3);
        }, undo: () => {
          for (const [e4, { savedX: i3, savedY: s3, savedPageIndex: n3 }] of t3) move(e4, i3, s3, n3);
        }, mustExec: true });
        return true;
      }
      dragSelectedEditors(t3, e3) {
        if (this.#qn) for (const i3 of this.#qn.keys()) i3.drag(t3, e3);
      }
      rebuild(t3) {
        if (null === t3.parent) {
          const e3 = this.getLayer(t3.pageIndex);
          if (e3) {
            e3.changeParent(t3);
            e3.addOrRebuild(t3);
          } else {
            this.addEditor(t3);
            this.addToAnnotationStorage(t3);
            t3.rebuild();
          }
        } else t3.parent.addOrRebuild(t3);
      }
      get isEditorHandlingKeyboard() {
        return this.getActive()?.shouldGetKeyboardEvents() || 1 === this.#la.size && this.firstSelectedEditor.shouldGetKeyboardEvents();
      }
      isActive(t3) {
        return this.#Bn === t3;
      }
      getActive() {
        return this.#Bn;
      }
      getMode() {
        return this.#oa;
      }
      get imageManager() {
        return (0, i2.shadow)(this, "imageManager", new ImageManager());
      }
      getSelectionBoxes(t3) {
        if (!t3) return null;
        const e3 = document.getSelection();
        for (let i4 = 0, s4 = e3.rangeCount; i4 < s4; i4++) if (!t3.contains(e3.getRangeAt(i4).commonAncestorContainer)) return null;
        const { x: i3, y: s3, width: n3, height: a2 } = t3.getBoundingClientRect();
        let r2;
        switch (t3.getAttribute("data-main-rotation")) {
          case "90":
            r2 = (t4, e4, r3, o3) => ({ x: (e4 - s3) / a2, y: 1 - (t4 + r3 - i3) / n3, width: o3 / a2, height: r3 / n3 });
            break;
          case "180":
            r2 = (t4, e4, r3, o3) => ({ x: 1 - (t4 + r3 - i3) / n3, y: 1 - (e4 + o3 - s3) / a2, width: r3 / n3, height: o3 / a2 });
            break;
          case "270":
            r2 = (t4, e4, r3, o3) => ({ x: 1 - (e4 + o3 - s3) / a2, y: (t4 - i3) / n3, width: o3 / a2, height: r3 / n3 });
            break;
          default:
            r2 = (t4, e4, r3, o3) => ({ x: (t4 - i3) / n3, y: (e4 - s3) / a2, width: r3 / n3, height: o3 / a2 });
        }
        const o2 = [];
        for (let t4 = 0, i4 = e3.rangeCount; t4 < i4; t4++) {
          const i5 = e3.getRangeAt(t4);
          if (!i5.collapsed) for (const { x: t5, y: e4, width: s4, height: n4 } of i5.getClientRects()) 0 !== s4 && 0 !== n4 && o2.push(r2(t5, e4, s4, n4));
        }
        return 0 === o2.length ? null : o2;
      }
      addChangedExistingAnnotation({ annotationElementId: t3, id: e3 }) {
        (this.#jn ||= /* @__PURE__ */ new Map()).set(t3, e3);
      }
      removeChangedExistingAnnotation({ annotationElementId: t3 }) {
        this.#jn?.delete(t3);
      }
      renderAnnotationElement(t3) {
        const e3 = this.#jn?.get(t3.data.id);
        if (!e3) return;
        const s3 = this.#Vn.getRawValue(e3);
        s3 && (this.#oa !== i2.AnnotationEditorType.NONE || s3.hasBeenModified) && s3.renderAnnotationElement(t3);
      }
    }
  }, 94: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { PDFFetchStream: () => PDFFetchStream });
    var i2 = e2(292), s2 = e2(490);
    function createFetchOptions(t3, e3, i3) {
      return { method: "GET", headers: t3, signal: i3.signal, mode: "cors", credentials: e3 ? "include" : "same-origin", redirect: "follow" };
    }
    function createHeaders(t3) {
      const e3 = new Headers();
      for (const i3 in t3) {
        const s3 = t3[i3];
        void 0 !== s3 && e3.append(i3, s3);
      }
      return e3;
    }
    function getArrayBuffer(t3) {
      if (t3 instanceof Uint8Array) return t3.buffer;
      if (t3 instanceof ArrayBuffer) return t3;
      (0, i2.warn)(`getArrayBuffer - unexpected data format: ${t3}`);
      return new Uint8Array(t3).buffer;
    }
    class PDFFetchStream {
      constructor(t3) {
        this.source = t3;
        this.isHttp = /^https?:/i.test(t3.url);
        this.httpHeaders = this.isHttp && t3.httpHeaders || {};
        this._fullRequestReader = null;
        this._rangeRequestReaders = [];
      }
      get _progressiveDataLength() {
        return this._fullRequestReader?._loaded ?? 0;
      }
      getFullReader() {
        (0, i2.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
        this._fullRequestReader = new PDFFetchStreamReader(this);
        return this._fullRequestReader;
      }
      getRangeReader(t3, e3) {
        if (e3 <= this._progressiveDataLength) return null;
        const i3 = new PDFFetchStreamRangeReader(this, t3, e3);
        this._rangeRequestReaders.push(i3);
        return i3;
      }
      cancelAllRequests(t3) {
        this._fullRequestReader?.cancel(t3);
        for (const e3 of this._rangeRequestReaders.slice(0)) e3.cancel(t3);
      }
    }
    class PDFFetchStreamReader {
      constructor(t3) {
        this._stream = t3;
        this._reader = null;
        this._loaded = 0;
        this._filename = null;
        const e3 = t3.source;
        this._withCredentials = e3.withCredentials || false;
        this._contentLength = e3.length;
        this._headersCapability = Promise.withResolvers();
        this._disableRange = e3.disableRange || false;
        this._rangeChunkSize = e3.rangeChunkSize;
        this._rangeChunkSize || this._disableRange || (this._disableRange = true);
        this._abortController = new AbortController();
        this._isStreamingSupported = !e3.disableStream;
        this._isRangeSupported = !e3.disableRange;
        this._headers = createHeaders(this._stream.httpHeaders);
        const n2 = e3.url;
        fetch(n2, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(((t4) => {
          if (!(0, s2.validateResponseStatus)(t4.status)) throw (0, s2.createResponseStatusError)(t4.status, n2);
          this._reader = t4.body.getReader();
          this._headersCapability.resolve();
          const getResponseHeader = (e5) => t4.headers.get(e5), { allowRangeRequests: e4, suggestedLength: a2 } = (0, s2.validateRangeRequestCapabilities)({ getResponseHeader, isHttp: this._stream.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
          this._isRangeSupported = e4;
          this._contentLength = a2 || this._contentLength;
          this._filename = (0, s2.extractFilenameFromHeader)(getResponseHeader);
          !this._isStreamingSupported && this._isRangeSupported && this.cancel(new i2.AbortException("Streaming is disabled."));
        })).catch(this._headersCapability.reject);
        this.onProgress = null;
      }
      get headersReady() {
        return this._headersCapability.promise;
      }
      get filename() {
        return this._filename;
      }
      get contentLength() {
        return this._contentLength;
      }
      get isRangeSupported() {
        return this._isRangeSupported;
      }
      get isStreamingSupported() {
        return this._isStreamingSupported;
      }
      async read() {
        await this._headersCapability.promise;
        const { value: t3, done: e3 } = await this._reader.read();
        if (e3) return { value: t3, done: e3 };
        this._loaded += t3.byteLength;
        this.onProgress?.({ loaded: this._loaded, total: this._contentLength });
        return { value: getArrayBuffer(t3), done: false };
      }
      cancel(t3) {
        this._reader?.cancel(t3);
        this._abortController.abort();
      }
    }
    class PDFFetchStreamRangeReader {
      constructor(t3, e3, i3) {
        this._stream = t3;
        this._reader = null;
        this._loaded = 0;
        const n2 = t3.source;
        this._withCredentials = n2.withCredentials || false;
        this._readCapability = Promise.withResolvers();
        this._isStreamingSupported = !n2.disableStream;
        this._abortController = new AbortController();
        this._headers = createHeaders(this._stream.httpHeaders);
        this._headers.append("Range", `bytes=${e3}-${i3 - 1}`);
        const a2 = n2.url;
        fetch(a2, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(((t4) => {
          if (!(0, s2.validateResponseStatus)(t4.status)) throw (0, s2.createResponseStatusError)(t4.status, a2);
          this._readCapability.resolve();
          this._reader = t4.body.getReader();
        })).catch(this._readCapability.reject);
        this.onProgress = null;
      }
      get isStreamingSupported() {
        return this._isStreamingSupported;
      }
      async read() {
        await this._readCapability.promise;
        const { value: t3, done: e3 } = await this._reader.read();
        if (e3) return { value: t3, done: e3 };
        this._loaded += t3.byteLength;
        this.onProgress?.({ loaded: this._loaded });
        return { value: getArrayBuffer(t3), done: false };
      }
      cancel(t3) {
        this._reader?.cancel(t3);
        this._abortController.abort();
      }
    }
  }, 10: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { FontFaceObject: () => FontFaceObject, FontLoader: () => FontLoader });
    var i2 = e2(292);
    class FontLoader {
      #qa = /* @__PURE__ */ new Set();
      constructor({ ownerDocument: t3 = globalThis.document, styleElement: e3 = null }) {
        this._document = t3;
        this.nativeFontFaces = /* @__PURE__ */ new Set();
        this.styleElement = null;
        this.loadingRequests = [];
        this.loadTestFontId = 0;
      }
      addNativeFontFace(t3) {
        this.nativeFontFaces.add(t3);
        this._document.fonts.add(t3);
      }
      removeNativeFontFace(t3) {
        this.nativeFontFaces.delete(t3);
        this._document.fonts.delete(t3);
      }
      insertRule(t3) {
        if (!this.styleElement) {
          this.styleElement = this._document.createElement("style");
          this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
        }
        const e3 = this.styleElement.sheet;
        e3.insertRule(t3, e3.cssRules.length);
      }
      clear() {
        for (const t3 of this.nativeFontFaces) this._document.fonts.delete(t3);
        this.nativeFontFaces.clear();
        this.#qa.clear();
        if (this.styleElement) {
          this.styleElement.remove();
          this.styleElement = null;
        }
      }
      async loadSystemFont({ systemFontInfo: t3, _inspectFont: e3 }) {
        if (t3 && !this.#qa.has(t3.loadedName)) {
          (0, i2.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
          if (this.isFontLoadingAPISupported) {
            const { loadedName: s2, src: n2, style: a2 } = t3, r2 = new FontFace(s2, n2, a2);
            this.addNativeFontFace(r2);
            try {
              await r2.load();
              this.#qa.add(s2);
              e3?.(t3);
            } catch {
              (0, i2.warn)(`Cannot load system font: ${t3.baseFontName}, installing it could help to improve PDF rendering.`);
              this.removeNativeFontFace(r2);
            }
          } else (0, i2.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
        }
      }
      async bind(t3) {
        if (t3.attached || t3.missingFile && !t3.systemFontInfo) return;
        t3.attached = true;
        if (t3.systemFontInfo) {
          await this.loadSystemFont(t3);
          return;
        }
        if (this.isFontLoadingAPISupported) {
          const e4 = t3.createNativeFontFace();
          if (e4) {
            this.addNativeFontFace(e4);
            try {
              await e4.loaded;
            } catch (s2) {
              (0, i2.warn)(`Failed to load font '${e4.family}': '${s2}'.`);
              t3.disableFontFace = true;
              throw s2;
            }
          }
          return;
        }
        const e3 = t3.createFontFaceRule();
        if (e3) {
          this.insertRule(e3);
          if (this.isSyncFontLoadingSupported) return;
          await new Promise(((e4) => {
            const i3 = this._queueLoadingCallback(e4);
            this._prepareFontLoadEvent(t3, i3);
          }));
        }
      }
      get isFontLoadingAPISupported() {
        const t3 = !!this._document?.fonts;
        return (0, i2.shadow)(this, "isFontLoadingAPISupported", t3);
      }
      get isSyncFontLoadingSupported() {
        let t3 = false;
        (i2.isNodeJS || "undefined" != typeof navigator && "string" == typeof navigator?.userAgent && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t3 = true);
        return (0, i2.shadow)(this, "isSyncFontLoadingSupported", t3);
      }
      _queueLoadingCallback(t3) {
        const { loadingRequests: e3 } = this, s2 = { done: false, complete: function completeRequest() {
          (0, i2.assert)(!s2.done, "completeRequest() cannot be called twice.");
          s2.done = true;
          for (; e3.length > 0 && e3[0].done; ) {
            const t4 = e3.shift();
            setTimeout(t4.callback, 0);
          }
        }, callback: t3 };
        e3.push(s2);
        return s2;
      }
      get _loadTestFont() {
        const t3 = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
        return (0, i2.shadow)(this, "_loadTestFont", t3);
      }
      _prepareFontLoadEvent(t3, e3) {
        function int32(t4, e4) {
          return t4.charCodeAt(e4) << 24 | t4.charCodeAt(e4 + 1) << 16 | t4.charCodeAt(e4 + 2) << 8 | 255 & t4.charCodeAt(e4 + 3);
        }
        function spliceString(t4, e4, i3, s3) {
          return t4.substring(0, e4) + s3 + t4.substring(e4 + i3);
        }
        let s2, n2;
        const a2 = this._document.createElement("canvas");
        a2.width = 1;
        a2.height = 1;
        const r2 = a2.getContext("2d");
        let o2 = 0;
        const l2 = `lt${Date.now()}${this.loadTestFontId++}`;
        let h2 = this._loadTestFont;
        h2 = spliceString(h2, 976, l2.length, l2);
        const d2 = 1482184792;
        let c2 = int32(h2, 16);
        for (s2 = 0, n2 = l2.length - 3; s2 < n2; s2 += 4) c2 = c2 - d2 + int32(l2, s2) | 0;
        s2 < l2.length && (c2 = c2 - d2 + int32(l2 + "XXX", s2) | 0);
        h2 = spliceString(h2, 16, 4, (0, i2.string32)(c2));
        const u2 = `@font-face {font-family:"${l2}";src:${`url(data:font/opentype;base64,${btoa(h2)});`}}`;
        this.insertRule(u2);
        const p2 = this._document.createElement("div");
        p2.style.visibility = "hidden";
        p2.style.width = p2.style.height = "10px";
        p2.style.position = "absolute";
        p2.style.top = p2.style.left = "0px";
        for (const e4 of [t3.loadedName, l2]) {
          const t4 = this._document.createElement("span");
          t4.textContent = "Hi";
          t4.style.fontFamily = e4;
          p2.append(t4);
        }
        this._document.body.append(p2);
        !(function isFontReady(t4, e4) {
          if (++o2 > 30) {
            (0, i2.warn)("Load test font never loaded.");
            e4();
            return;
          }
          r2.font = "30px " + t4;
          r2.fillText(".", 0, 20);
          r2.getImageData(0, 0, 1, 1).data[3] > 0 ? e4() : setTimeout(isFontReady.bind(null, t4, e4));
        })(l2, (() => {
          p2.remove();
          e3.complete();
        }));
      }
    }
    class FontFaceObject {
      constructor(t3, { disableFontFace: e3 = false, ignoreErrors: i3 = false, inspectFont: s2 = null }) {
        this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
        for (const e4 in t3) this[e4] = t3[e4];
        this.disableFontFace = true === e3;
        this.ignoreErrors = true === i3;
        this._inspectFont = s2;
      }
      createNativeFontFace() {
        if (!this.data || this.disableFontFace) return null;
        let t3;
        if (this.cssFontInfo) {
          const e3 = { weight: this.cssFontInfo.fontWeight };
          this.cssFontInfo.italicAngle && (e3.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
          t3 = new FontFace(this.cssFontInfo.fontFamily, this.data, e3);
        } else t3 = new FontFace(this.loadedName, this.data, {});
        this._inspectFont?.(this);
        return t3;
      }
      createFontFaceRule() {
        if (!this.data || this.disableFontFace) return null;
        const t3 = (0, i2.bytesToString)(this.data), e3 = `url(data:${this.mimetype};base64,${btoa(t3)});`;
        let s2;
        if (this.cssFontInfo) {
          let t4 = `font-weight: ${this.cssFontInfo.fontWeight};`;
          this.cssFontInfo.italicAngle && (t4 += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
          s2 = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${t4}src:${e3}}`;
        } else s2 = `@font-face {font-family:"${this.loadedName}";src:${e3}}`;
        this._inspectFont?.(this, e3);
        return s2;
      }
      getPathGenerator(t3, e3) {
        if (void 0 !== this.compiledGlyphs[e3]) return this.compiledGlyphs[e3];
        let s2;
        try {
          s2 = t3.get(this.loadedName + "_path_" + e3);
        } catch (t4) {
          if (!this.ignoreErrors) throw t4;
          (0, i2.warn)(`getPathGenerator - ignoring character: "${t4}".`);
        }
        if (!Array.isArray(s2) || 0 === s2.length) return this.compiledGlyphs[e3] = function(t4, e4) {
        };
        const n2 = [];
        for (let t4 = 0, e4 = s2.length; t4 < e4; ) switch (s2[t4++]) {
          case i2.FontRenderOps.BEZIER_CURVE_TO:
            {
              const [e5, i3, a2, r2, o2, l2] = s2.slice(t4, t4 + 6);
              n2.push(((t5) => t5.bezierCurveTo(e5, i3, a2, r2, o2, l2)));
              t4 += 6;
            }
            break;
          case i2.FontRenderOps.MOVE_TO:
            {
              const [e5, i3] = s2.slice(t4, t4 + 2);
              n2.push(((t5) => t5.moveTo(e5, i3)));
              t4 += 2;
            }
            break;
          case i2.FontRenderOps.LINE_TO:
            {
              const [e5, i3] = s2.slice(t4, t4 + 2);
              n2.push(((t5) => t5.lineTo(e5, i3)));
              t4 += 2;
            }
            break;
          case i2.FontRenderOps.QUADRATIC_CURVE_TO:
            {
              const [e5, i3, a2, r2] = s2.slice(t4, t4 + 4);
              n2.push(((t5) => t5.quadraticCurveTo(e5, i3, a2, r2)));
              t4 += 4;
            }
            break;
          case i2.FontRenderOps.RESTORE:
            n2.push(((t5) => t5.restore()));
            break;
          case i2.FontRenderOps.SAVE:
            n2.push(((t5) => t5.save()));
            break;
          case i2.FontRenderOps.SCALE:
            (0, i2.assert)(2 === n2.length, "Scale command is only valid at the third position.");
            break;
          case i2.FontRenderOps.TRANSFORM:
            {
              const [e5, i3, a2, r2, o2, l2] = s2.slice(t4, t4 + 6);
              n2.push(((t5) => t5.transform(e5, i3, a2, r2, o2, l2)));
              t4 += 6;
            }
            break;
          case i2.FontRenderOps.TRANSLATE: {
            const [e5, i3] = s2.slice(t4, t4 + 2);
            n2.push(((t5) => t5.translate(e5, i3)));
            t4 += 2;
          }
        }
        return this.compiledGlyphs[e3] = function glyphDrawer(t4, e4) {
          n2[0](t4);
          n2[1](t4);
          t4.scale(e4, -e4);
          for (let e5 = 2, i3 = n2.length; e5 < i3; e5++) n2[e5](t4);
        };
      }
    }
  }, 62: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { Metadata: () => Metadata });
    var i2 = e2(292);
    class Metadata {
      #Ka;
      #Xa;
      constructor({ parsedData: t3, rawData: e3 }) {
        this.#Ka = t3;
        this.#Xa = e3;
      }
      getRaw() {
        return this.#Xa;
      }
      get(t3) {
        return this.#Ka.get(t3) ?? null;
      }
      getAll() {
        return (0, i2.objectFromMap)(this.#Ka);
      }
      has(t3) {
        return this.#Ka.has(t3);
      }
    }
  }, 457: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { PDFNetworkStream: () => PDFNetworkStream });
    var i2 = e2(292), s2 = e2(490);
    class NetworkManager {
      constructor(t3, e3 = {}) {
        this.url = t3;
        this.isHttp = /^https?:/i.test(t3);
        this.httpHeaders = this.isHttp && e3.httpHeaders || /* @__PURE__ */ Object.create(null);
        this.withCredentials = e3.withCredentials || false;
        this.currXhrId = 0;
        this.pendingRequests = /* @__PURE__ */ Object.create(null);
      }
      requestRange(t3, e3, i3) {
        const s3 = { begin: t3, end: e3 };
        for (const t4 in i3) s3[t4] = i3[t4];
        return this.request(s3);
      }
      requestFull(t3) {
        return this.request(t3);
      }
      request(t3) {
        const e3 = new XMLHttpRequest(), i3 = this.currXhrId++, s3 = this.pendingRequests[i3] = { xhr: e3 };
        e3.open("GET", this.url);
        e3.withCredentials = this.withCredentials;
        for (const t4 in this.httpHeaders) {
          const i4 = this.httpHeaders[t4];
          void 0 !== i4 && e3.setRequestHeader(t4, i4);
        }
        if (this.isHttp && "begin" in t3 && "end" in t3) {
          e3.setRequestHeader("Range", `bytes=${t3.begin}-${t3.end - 1}`);
          s3.expectedStatus = 206;
        } else s3.expectedStatus = 200;
        e3.responseType = "arraybuffer";
        t3.onError && (e3.onerror = function(i4) {
          t3.onError(e3.status);
        });
        e3.onreadystatechange = this.onStateChange.bind(this, i3);
        e3.onprogress = this.onProgress.bind(this, i3);
        s3.onHeadersReceived = t3.onHeadersReceived;
        s3.onDone = t3.onDone;
        s3.onError = t3.onError;
        s3.onProgress = t3.onProgress;
        e3.send(null);
        return i3;
      }
      onProgress(t3, e3) {
        const i3 = this.pendingRequests[t3];
        i3 && i3.onProgress?.(e3);
      }
      onStateChange(t3, e3) {
        const s3 = this.pendingRequests[t3];
        if (!s3) return;
        const n2 = s3.xhr;
        if (n2.readyState >= 2 && s3.onHeadersReceived) {
          s3.onHeadersReceived();
          delete s3.onHeadersReceived;
        }
        if (4 !== n2.readyState) return;
        if (!(t3 in this.pendingRequests)) return;
        delete this.pendingRequests[t3];
        if (0 === n2.status && this.isHttp) {
          s3.onError?.(n2.status);
          return;
        }
        const a2 = n2.status || 200;
        if (!(200 === a2 && 206 === s3.expectedStatus) && a2 !== s3.expectedStatus) {
          s3.onError?.(n2.status);
          return;
        }
        const r2 = (function getArrayBuffer(t4) {
          const e4 = t4.response;
          return "string" != typeof e4 ? e4 : (0, i2.stringToBytes)(e4).buffer;
        })(n2);
        if (206 === a2) {
          const t4 = n2.getResponseHeader("Content-Range"), e4 = /bytes (\d+)-(\d+)\/(\d+)/.exec(t4);
          s3.onDone({ begin: parseInt(e4[1], 10), chunk: r2 });
        } else r2 ? s3.onDone({ begin: 0, chunk: r2 }) : s3.onError?.(n2.status);
      }
      getRequestXhr(t3) {
        return this.pendingRequests[t3].xhr;
      }
      isPendingRequest(t3) {
        return t3 in this.pendingRequests;
      }
      abortRequest(t3) {
        const e3 = this.pendingRequests[t3].xhr;
        delete this.pendingRequests[t3];
        e3.abort();
      }
    }
    class PDFNetworkStream {
      constructor(t3) {
        this._source = t3;
        this._manager = new NetworkManager(t3.url, { httpHeaders: t3.httpHeaders, withCredentials: t3.withCredentials });
        this._rangeChunkSize = t3.rangeChunkSize;
        this._fullRequestReader = null;
        this._rangeRequestReaders = [];
      }
      _onRangeRequestReaderClosed(t3) {
        const e3 = this._rangeRequestReaders.indexOf(t3);
        e3 >= 0 && this._rangeRequestReaders.splice(e3, 1);
      }
      getFullReader() {
        (0, i2.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
        this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
        return this._fullRequestReader;
      }
      getRangeReader(t3, e3) {
        const i3 = new PDFNetworkStreamRangeRequestReader(this._manager, t3, e3);
        i3.onClosed = this._onRangeRequestReaderClosed.bind(this);
        this._rangeRequestReaders.push(i3);
        return i3;
      }
      cancelAllRequests(t3) {
        this._fullRequestReader?.cancel(t3);
        for (const e3 of this._rangeRequestReaders.slice(0)) e3.cancel(t3);
      }
    }
    class PDFNetworkStreamFullRequestReader {
      constructor(t3, e3) {
        this._manager = t3;
        const i3 = { onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
        this._url = e3.url;
        this._fullRequestId = t3.requestFull(i3);
        this._headersReceivedCapability = Promise.withResolvers();
        this._disableRange = e3.disableRange || false;
        this._contentLength = e3.length;
        this._rangeChunkSize = e3.rangeChunkSize;
        this._rangeChunkSize || this._disableRange || (this._disableRange = true);
        this._isStreamingSupported = false;
        this._isRangeSupported = false;
        this._cachedChunks = [];
        this._requests = [];
        this._done = false;
        this._storedError = void 0;
        this._filename = null;
        this.onProgress = null;
      }
      _onHeadersReceived() {
        const t3 = this._fullRequestId, e3 = this._manager.getRequestXhr(t3), getResponseHeader = (t4) => e3.getResponseHeader(t4), { allowRangeRequests: i3, suggestedLength: n2 } = (0, s2.validateRangeRequestCapabilities)({ getResponseHeader, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
        i3 && (this._isRangeSupported = true);
        this._contentLength = n2 || this._contentLength;
        this._filename = (0, s2.extractFilenameFromHeader)(getResponseHeader);
        this._isRangeSupported && this._manager.abortRequest(t3);
        this._headersReceivedCapability.resolve();
      }
      _onDone(t3) {
        if (t3) if (this._requests.length > 0) {
          this._requests.shift().resolve({ value: t3.chunk, done: false });
        } else this._cachedChunks.push(t3.chunk);
        this._done = true;
        if (!(this._cachedChunks.length > 0)) {
          for (const t4 of this._requests) t4.resolve({ value: void 0, done: true });
          this._requests.length = 0;
        }
      }
      _onError(t3) {
        this._storedError = (0, s2.createResponseStatusError)(t3, this._url);
        this._headersReceivedCapability.reject(this._storedError);
        for (const t4 of this._requests) t4.reject(this._storedError);
        this._requests.length = 0;
        this._cachedChunks.length = 0;
      }
      _onProgress(t3) {
        this.onProgress?.({ loaded: t3.loaded, total: t3.lengthComputable ? t3.total : this._contentLength });
      }
      get filename() {
        return this._filename;
      }
      get isRangeSupported() {
        return this._isRangeSupported;
      }
      get isStreamingSupported() {
        return this._isStreamingSupported;
      }
      get contentLength() {
        return this._contentLength;
      }
      get headersReady() {
        return this._headersReceivedCapability.promise;
      }
      async read() {
        if (this._storedError) throw this._storedError;
        if (this._cachedChunks.length > 0) {
          return { value: this._cachedChunks.shift(), done: false };
        }
        if (this._done) return { value: void 0, done: true };
        const t3 = Promise.withResolvers();
        this._requests.push(t3);
        return t3.promise;
      }
      cancel(t3) {
        this._done = true;
        this._headersReceivedCapability.reject(t3);
        for (const t4 of this._requests) t4.resolve({ value: void 0, done: true });
        this._requests.length = 0;
        this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId);
        this._fullRequestReader = null;
      }
    }
    class PDFNetworkStreamRangeRequestReader {
      constructor(t3, e3, i3) {
        this._manager = t3;
        const s3 = { onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
        this._url = t3.url;
        this._requestId = t3.requestRange(e3, i3, s3);
        this._requests = [];
        this._queuedChunk = null;
        this._done = false;
        this._storedError = void 0;
        this.onProgress = null;
        this.onClosed = null;
      }
      _close() {
        this.onClosed?.(this);
      }
      _onDone(t3) {
        const e3 = t3.chunk;
        if (this._requests.length > 0) {
          this._requests.shift().resolve({ value: e3, done: false });
        } else this._queuedChunk = e3;
        this._done = true;
        for (const t4 of this._requests) t4.resolve({ value: void 0, done: true });
        this._requests.length = 0;
        this._close();
      }
      _onError(t3) {
        this._storedError = (0, s2.createResponseStatusError)(t3, this._url);
        for (const t4 of this._requests) t4.reject(this._storedError);
        this._requests.length = 0;
        this._queuedChunk = null;
      }
      _onProgress(t3) {
        this.isStreamingSupported || this.onProgress?.({ loaded: t3.loaded });
      }
      get isStreamingSupported() {
        return false;
      }
      async read() {
        if (this._storedError) throw this._storedError;
        if (null !== this._queuedChunk) {
          const t4 = this._queuedChunk;
          this._queuedChunk = null;
          return { value: t4, done: false };
        }
        if (this._done) return { value: void 0, done: true };
        const t3 = Promise.withResolvers();
        this._requests.push(t3);
        return t3.promise;
      }
      cancel(t3) {
        this._done = true;
        for (const t4 of this._requests) t4.resolve({ value: void 0, done: true });
        this._requests.length = 0;
        this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId);
        this._close();
      }
    }
  }, 490: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { createResponseStatusError: () => createResponseStatusError, extractFilenameFromHeader: () => extractFilenameFromHeader, validateRangeRequestCapabilities: () => validateRangeRequestCapabilities, validateResponseStatus: () => validateResponseStatus });
    var i2 = e2(292);
    var s2 = e2(419);
    function validateRangeRequestCapabilities({ getResponseHeader: t3, isHttp: e3, rangeChunkSize: i3, disableRange: s3 }) {
      const n2 = { allowRangeRequests: false, suggestedLength: void 0 }, a2 = parseInt(t3("Content-Length"), 10);
      if (!Number.isInteger(a2)) return n2;
      n2.suggestedLength = a2;
      if (a2 <= 2 * i3) return n2;
      if (s3 || !e3) return n2;
      if ("bytes" !== t3("Accept-Ranges")) return n2;
      if ("identity" !== (t3("Content-Encoding") || "identity")) return n2;
      n2.allowRangeRequests = true;
      return n2;
    }
    function extractFilenameFromHeader(t3) {
      const e3 = t3("Content-Disposition");
      if (e3) {
        let t4 = (function getFilenameFromContentDispositionHeader(t5) {
          let e4 = true, s3 = toParamRegExp("filename\\*", "i").exec(t5);
          if (s3) {
            s3 = s3[1];
            let t6 = rfc2616unquote(s3);
            t6 = unescape(t6);
            t6 = rfc5987decode(t6);
            t6 = rfc2047decode(t6);
            return fixupEncoding(t6);
          }
          s3 = (function rfc2231getparam(t6) {
            const e5 = [];
            let i3;
            const s4 = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
            for (; null !== (i3 = s4.exec(t6)); ) {
              let [, t7, s5, n3] = i3;
              t7 = parseInt(t7, 10);
              if (t7 in e5) {
                if (0 === t7) break;
              } else e5[t7] = [s5, n3];
            }
            const n2 = [];
            for (let t7 = 0; t7 < e5.length && t7 in e5; ++t7) {
              let [i4, s5] = e5[t7];
              s5 = rfc2616unquote(s5);
              if (i4) {
                s5 = unescape(s5);
                0 === t7 && (s5 = rfc5987decode(s5));
              }
              n2.push(s5);
            }
            return n2.join("");
          })(t5);
          if (s3) return fixupEncoding(rfc2047decode(s3));
          s3 = toParamRegExp("filename", "i").exec(t5);
          if (s3) {
            s3 = s3[1];
            let t6 = rfc2616unquote(s3);
            t6 = rfc2047decode(t6);
            return fixupEncoding(t6);
          }
          function toParamRegExp(t6, e5) {
            return new RegExp("(?:^|;)\\s*" + t6 + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e5);
          }
          function textdecode(t6, s4) {
            if (t6) {
              if (!/^[\x00-\xFF]+$/.test(s4)) return s4;
              try {
                const n2 = new TextDecoder(t6, { fatal: true }), a2 = (0, i2.stringToBytes)(s4);
                s4 = n2.decode(a2);
                e4 = false;
              } catch {
              }
            }
            return s4;
          }
          function fixupEncoding(t6) {
            if (e4 && /[\x80-\xff]/.test(t6)) {
              t6 = textdecode("utf-8", t6);
              e4 && (t6 = textdecode("iso-8859-1", t6));
            }
            return t6;
          }
          function rfc2616unquote(t6) {
            if (t6.startsWith('"')) {
              const e5 = t6.slice(1).split('\\"');
              for (let t7 = 0; t7 < e5.length; ++t7) {
                const i3 = e5[t7].indexOf('"');
                if (-1 !== i3) {
                  e5[t7] = e5[t7].slice(0, i3);
                  e5.length = t7 + 1;
                }
                e5[t7] = e5[t7].replaceAll(/\\(.)/g, "$1");
              }
              t6 = e5.join('"');
            }
            return t6;
          }
          function rfc5987decode(t6) {
            const e5 = t6.indexOf("'");
            return -1 === e5 ? t6 : textdecode(t6.slice(0, e5), t6.slice(e5 + 1).replace(/^[^']*'/, ""));
          }
          function rfc2047decode(t6) {
            return !t6.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t6) ? t6 : t6.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (function(t7, e5, i3, s4) {
              if ("q" === i3 || "Q" === i3) return textdecode(e5, s4 = (s4 = s4.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, (function(t8, e6) {
                return String.fromCharCode(parseInt(e6, 16));
              })));
              try {
                s4 = atob(s4);
              } catch {
              }
              return textdecode(e5, s4);
            }));
          }
          return "";
        })(e3);
        if (t4.includes("%")) try {
          t4 = decodeURIComponent(t4);
        } catch {
        }
        if ((0, s2.isPdfFile)(t4)) return t4;
      }
      return null;
    }
    function createResponseStatusError(t3, e3) {
      return 404 === t3 || 0 === t3 && e3.startsWith("file:") ? new i2.MissingPDFException('Missing PDF "' + e3 + '".') : new i2.UnexpectedResponseException(`Unexpected server response (${t3}) while retrieving PDF "${e3}".`, t3);
    }
    function validateResponseStatus(t3) {
      return 200 === t3 || 206 === t3;
    }
  }, 786: (t2, __webpack_exports__2, e2) => {
    e2.a(t2, (async (t3, i2) => {
      try {
        let parseUrl = function(t4) {
          const e3 = l2.parse(t4);
          if ("file:" === e3.protocol || e3.host) return e3;
          if (/^[a-z]:[/\\]/i.test(t4)) return l2.parse(`file:///${t4}`);
          e3.host || (e3.protocol = "file:");
          return e3;
        }, createRequestOptions = function(t4, e3) {
          return { protocol: t4.protocol, auth: t4.auth, host: t4.hostname, port: t4.port, path: t4.path, method: "GET", headers: e3 };
        };
        e2.d(__webpack_exports__2, { PDFNodeStream: () => PDFNodeStream });
        var s2 = e2(292), n2 = e2(490);
        let a2, r2, o2, l2;
        if (s2.isNodeJS) {
          a2 = await import("fs");
          r2 = await import("http");
          o2 = await import("https");
          l2 = await import("url");
        }
        const h2 = /^file:\/\/\/[a-zA-Z]:\//;
        class PDFNodeStream {
          constructor(t4) {
            this.source = t4;
            this.url = parseUrl(t4.url);
            this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol;
            this.isFsUrl = "file:" === this.url.protocol;
            this.httpHeaders = this.isHttp && t4.httpHeaders || {};
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          get _progressiveDataLength() {
            return this._fullRequestReader?._loaded ?? 0;
          }
          getFullReader() {
            (0, s2.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
            this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
            return this._fullRequestReader;
          }
          getRangeReader(t4, e3) {
            if (e3 <= this._progressiveDataLength) return null;
            const i3 = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, t4, e3) : new PDFNodeStreamRangeReader(this, t4, e3);
            this._rangeRequestReaders.push(i3);
            return i3;
          }
          cancelAllRequests(t4) {
            this._fullRequestReader?.cancel(t4);
            for (const e3 of this._rangeRequestReaders.slice(0)) e3.cancel(t4);
          }
        }
        class BaseFullReader {
          constructor(t4) {
            this._url = t4.url;
            this._done = false;
            this._storedError = null;
            this.onProgress = null;
            const e3 = t4.source;
            this._contentLength = e3.length;
            this._loaded = 0;
            this._filename = null;
            this._disableRange = e3.disableRange || false;
            this._rangeChunkSize = e3.rangeChunkSize;
            this._rangeChunkSize || this._disableRange || (this._disableRange = true);
            this._isStreamingSupported = !e3.disableStream;
            this._isRangeSupported = !e3.disableRange;
            this._readableStream = null;
            this._readCapability = Promise.withResolvers();
            this._headersCapability = Promise.withResolvers();
          }
          get headersReady() {
            return this._headersCapability.promise;
          }
          get filename() {
            return this._filename;
          }
          get contentLength() {
            return this._contentLength;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            await this._readCapability.promise;
            if (this._done) return { value: void 0, done: true };
            if (this._storedError) throw this._storedError;
            const t4 = this._readableStream.read();
            if (null === t4) {
              this._readCapability = Promise.withResolvers();
              return this.read();
            }
            this._loaded += t4.length;
            this.onProgress?.({ loaded: this._loaded, total: this._contentLength });
            return { value: new Uint8Array(t4).buffer, done: false };
          }
          cancel(t4) {
            this._readableStream ? this._readableStream.destroy(t4) : this._error(t4);
          }
          _error(t4) {
            this._storedError = t4;
            this._readCapability.resolve();
          }
          _setReadableStream(t4) {
            this._readableStream = t4;
            t4.on("readable", (() => {
              this._readCapability.resolve();
            }));
            t4.on("end", (() => {
              t4.destroy();
              this._done = true;
              this._readCapability.resolve();
            }));
            t4.on("error", ((t5) => {
              this._error(t5);
            }));
            !this._isStreamingSupported && this._isRangeSupported && this._error(new s2.AbortException("streaming is disabled"));
            this._storedError && this._readableStream.destroy(this._storedError);
          }
        }
        class BaseRangeReader {
          constructor(t4) {
            this._url = t4.url;
            this._done = false;
            this._storedError = null;
            this.onProgress = null;
            this._loaded = 0;
            this._readableStream = null;
            this._readCapability = Promise.withResolvers();
            const e3 = t4.source;
            this._isStreamingSupported = !e3.disableStream;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            await this._readCapability.promise;
            if (this._done) return { value: void 0, done: true };
            if (this._storedError) throw this._storedError;
            const t4 = this._readableStream.read();
            if (null === t4) {
              this._readCapability = Promise.withResolvers();
              return this.read();
            }
            this._loaded += t4.length;
            this.onProgress?.({ loaded: this._loaded });
            return { value: new Uint8Array(t4).buffer, done: false };
          }
          cancel(t4) {
            this._readableStream ? this._readableStream.destroy(t4) : this._error(t4);
          }
          _error(t4) {
            this._storedError = t4;
            this._readCapability.resolve();
          }
          _setReadableStream(t4) {
            this._readableStream = t4;
            t4.on("readable", (() => {
              this._readCapability.resolve();
            }));
            t4.on("end", (() => {
              t4.destroy();
              this._done = true;
              this._readCapability.resolve();
            }));
            t4.on("error", ((t5) => {
              this._error(t5);
            }));
            this._storedError && this._readableStream.destroy(this._storedError);
          }
        }
        class PDFNodeStreamFullReader extends BaseFullReader {
          constructor(t4) {
            super(t4);
            const handleResponse = (e3) => {
              if (404 === e3.statusCode) {
                const t5 = new s2.MissingPDFException(`Missing PDF "${this._url}".`);
                this._storedError = t5;
                this._headersCapability.reject(t5);
                return;
              }
              this._headersCapability.resolve();
              this._setReadableStream(e3);
              const getResponseHeader = (t5) => this._readableStream.headers[t5.toLowerCase()], { allowRangeRequests: i3, suggestedLength: a3 } = (0, n2.validateRangeRequestCapabilities)({ getResponseHeader, isHttp: t4.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
              this._isRangeSupported = i3;
              this._contentLength = a3 || this._contentLength;
              this._filename = (0, n2.extractFilenameFromHeader)(getResponseHeader);
            };
            this._request = null;
            "http:" === this._url.protocol ? this._request = r2.request(createRequestOptions(this._url, t4.httpHeaders), handleResponse) : this._request = o2.request(createRequestOptions(this._url, t4.httpHeaders), handleResponse);
            this._request.on("error", ((t5) => {
              this._storedError = t5;
              this._headersCapability.reject(t5);
            }));
            this._request.end();
          }
        }
        class PDFNodeStreamRangeReader extends BaseRangeReader {
          constructor(t4, e3, i3) {
            super(t4);
            this._httpHeaders = {};
            for (const e4 in t4.httpHeaders) {
              const i4 = t4.httpHeaders[e4];
              void 0 !== i4 && (this._httpHeaders[e4] = i4);
            }
            this._httpHeaders.Range = `bytes=${e3}-${i3 - 1}`;
            const handleResponse = (t5) => {
              if (404 !== t5.statusCode) this._setReadableStream(t5);
              else {
                const t6 = new s2.MissingPDFException(`Missing PDF "${this._url}".`);
                this._storedError = t6;
              }
            };
            this._request = null;
            "http:" === this._url.protocol ? this._request = r2.request(createRequestOptions(this._url, this._httpHeaders), handleResponse) : this._request = o2.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
            this._request.on("error", ((t5) => {
              this._storedError = t5;
            }));
            this._request.end();
          }
        }
        class PDFNodeStreamFsFullReader extends BaseFullReader {
          constructor(t4) {
            super(t4);
            let e3 = decodeURIComponent(this._url.path);
            h2.test(this._url.href) && (e3 = e3.replace(/^\//, ""));
            a2.promises.lstat(e3).then(((t5) => {
              this._contentLength = t5.size;
              this._setReadableStream(a2.createReadStream(e3));
              this._headersCapability.resolve();
            }), ((t5) => {
              "ENOENT" === t5.code && (t5 = new s2.MissingPDFException(`Missing PDF "${e3}".`));
              this._storedError = t5;
              this._headersCapability.reject(t5);
            }));
          }
        }
        class PDFNodeStreamFsRangeReader extends BaseRangeReader {
          constructor(t4, e3, i3) {
            super(t4);
            let s3 = decodeURIComponent(this._url.path);
            h2.test(this._url.href) && (s3 = s3.replace(/^\//, ""));
            this._setReadableStream(a2.createReadStream(s3, { start: e3, end: i3 - 1 }));
          }
        }
        i2();
      } catch (d2) {
        i2(d2);
      }
    }), 1);
  }, 573: (t2, __webpack_exports__2, e2) => {
    e2.a(t2, (async (t3, i2) => {
      try {
        e2.d(__webpack_exports__2, { NodeCMapReaderFactory: () => NodeCMapReaderFactory, NodeCanvasFactory: () => NodeCanvasFactory, NodeFilterFactory: () => NodeFilterFactory, NodeStandardFontDataFactory: () => NodeStandardFontDataFactory });
        var s2 = e2(583);
        let t4, n2, a2;
        if (e2(292).isNodeJS) {
          t4 = await import("fs");
          try {
            n2 = await import("canvas");
          } catch {
          }
          try {
            a2 = await import("path2d");
          } catch {
          }
        }
        const fetchData = function(e3) {
          return t4.promises.readFile(e3).then(((t5) => new Uint8Array(t5)));
        };
        class NodeFilterFactory extends s2.BaseFilterFactory {
        }
        class NodeCanvasFactory extends s2.BaseCanvasFactory {
          _createCanvas(t5, e3) {
            return n2.createCanvas(t5, e3);
          }
        }
        class NodeCMapReaderFactory extends s2.BaseCMapReaderFactory {
          _fetchData(t5, e3) {
            return fetchData(t5).then(((t6) => ({ cMapData: t6, compressionType: e3 })));
          }
        }
        class NodeStandardFontDataFactory extends s2.BaseStandardFontDataFactory {
          _fetchData(t5) {
            return fetchData(t5);
          }
        }
        i2();
      } catch (t4) {
        i2(t4);
      }
    }), 1);
  }, 626: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { OptionalContentConfig: () => OptionalContentConfig });
    var i2 = e2(292), s2 = e2(651);
    const n2 = /* @__PURE__ */ Symbol("INTERNAL");
    class OptionalContentGroup {
      #Ya = false;
      #Ja = false;
      #Qa = false;
      #Za = true;
      constructor(t3, { name: e3, intent: s3, usage: n3 }) {
        this.#Ya = !!(t3 & i2.RenderingIntentFlag.DISPLAY);
        this.#Ja = !!(t3 & i2.RenderingIntentFlag.PRINT);
        this.name = e3;
        this.intent = s3;
        this.usage = n3;
      }
      get visible() {
        if (this.#Qa) return this.#Za;
        if (!this.#Za) return false;
        const { print: t3, view: e3 } = this.usage;
        return this.#Ya ? "OFF" !== e3?.viewState : !this.#Ja || "OFF" !== t3?.printState;
      }
      _setVisible(t3, e3, s3 = false) {
        t3 !== n2 && (0, i2.unreachable)("Internal method `_setVisible` called.");
        this.#Qa = s3;
        this.#Za = e3;
      }
    }
    class OptionalContentConfig {
      #tr = null;
      #er = /* @__PURE__ */ new Map();
      #ir = null;
      #sr = null;
      constructor(t3, e3 = i2.RenderingIntentFlag.DISPLAY) {
        this.renderingIntent = e3;
        this.name = null;
        this.creator = null;
        if (null !== t3) {
          this.name = t3.name;
          this.creator = t3.creator;
          this.#sr = t3.order;
          for (const i3 of t3.groups) this.#er.set(i3.id, new OptionalContentGroup(e3, i3));
          if ("OFF" === t3.baseState) for (const t4 of this.#er.values()) t4._setVisible(n2, false);
          for (const e4 of t3.on) this.#er.get(e4)._setVisible(n2, true);
          for (const e4 of t3.off) this.#er.get(e4)._setVisible(n2, false);
          this.#ir = this.getHash();
        }
      }
      #nr(t3) {
        const e3 = t3.length;
        if (e3 < 2) return true;
        const s3 = t3[0];
        for (let n3 = 1; n3 < e3; n3++) {
          const e4 = t3[n3];
          let a2;
          if (Array.isArray(e4)) a2 = this.#nr(e4);
          else {
            if (!this.#er.has(e4)) {
              (0, i2.warn)(`Optional content group not found: ${e4}`);
              return true;
            }
            a2 = this.#er.get(e4).visible;
          }
          switch (s3) {
            case "And":
              if (!a2) return false;
              break;
            case "Or":
              if (a2) return true;
              break;
            case "Not":
              return !a2;
            default:
              return true;
          }
        }
        return "And" === s3;
      }
      isVisible(t3) {
        if (0 === this.#er.size) return true;
        if (!t3) {
          (0, i2.info)("Optional content group not defined.");
          return true;
        }
        if ("OCG" === t3.type) {
          if (!this.#er.has(t3.id)) {
            (0, i2.warn)(`Optional content group not found: ${t3.id}`);
            return true;
          }
          return this.#er.get(t3.id).visible;
        }
        if ("OCMD" === t3.type) {
          if (t3.expression) return this.#nr(t3.expression);
          if (!t3.policy || "AnyOn" === t3.policy) {
            for (const e3 of t3.ids) {
              if (!this.#er.has(e3)) {
                (0, i2.warn)(`Optional content group not found: ${e3}`);
                return true;
              }
              if (this.#er.get(e3).visible) return true;
            }
            return false;
          }
          if ("AllOn" === t3.policy) {
            for (const e3 of t3.ids) {
              if (!this.#er.has(e3)) {
                (0, i2.warn)(`Optional content group not found: ${e3}`);
                return true;
              }
              if (!this.#er.get(e3).visible) return false;
            }
            return true;
          }
          if ("AnyOff" === t3.policy) {
            for (const e3 of t3.ids) {
              if (!this.#er.has(e3)) {
                (0, i2.warn)(`Optional content group not found: ${e3}`);
                return true;
              }
              if (!this.#er.get(e3).visible) return true;
            }
            return false;
          }
          if ("AllOff" === t3.policy) {
            for (const e3 of t3.ids) {
              if (!this.#er.has(e3)) {
                (0, i2.warn)(`Optional content group not found: ${e3}`);
                return true;
              }
              if (this.#er.get(e3).visible) return false;
            }
            return true;
          }
          (0, i2.warn)(`Unknown optional content policy ${t3.policy}.`);
          return true;
        }
        (0, i2.warn)(`Unknown group type ${t3.type}.`);
        return true;
      }
      setVisibility(t3, e3 = true) {
        const s3 = this.#er.get(t3);
        if (s3) {
          s3._setVisible(n2, !!e3, true);
          this.#tr = null;
        } else (0, i2.warn)(`Optional content group not found: ${t3}`);
      }
      setOCGState({ state: t3, preserveRB: e3 }) {
        let i3;
        for (const e4 of t3) {
          switch (e4) {
            case "ON":
            case "OFF":
            case "Toggle":
              i3 = e4;
              continue;
          }
          const t4 = this.#er.get(e4);
          if (t4) switch (i3) {
            case "ON":
              t4._setVisible(n2, true);
              break;
            case "OFF":
              t4._setVisible(n2, false);
              break;
            case "Toggle":
              t4._setVisible(n2, !t4.visible);
          }
        }
        this.#tr = null;
      }
      get hasInitialVisibility() {
        return null === this.#ir || this.getHash() === this.#ir;
      }
      getOrder() {
        return this.#er.size ? this.#sr ? this.#sr.slice() : [...this.#er.keys()] : null;
      }
      getGroups() {
        return this.#er.size > 0 ? (0, i2.objectFromMap)(this.#er) : null;
      }
      getGroup(t3) {
        return this.#er.get(t3) || null;
      }
      getHash() {
        if (null !== this.#tr) return this.#tr;
        const t3 = new s2.MurmurHash3_64();
        for (const [e3, i3] of this.#er) t3.update(`${e3}:${i3.visible}`);
        return this.#tr = t3.hexdigest();
      }
    }
  }, 814: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { cleanupTextLayer: () => cleanupTextLayer, renderTextLayer: () => renderTextLayer, updateTextLayer: () => updateTextLayer });
    var i2 = e2(292), s2 = e2(419);
    const n2 = 30, a2 = 0.8, r2 = /* @__PURE__ */ new Map();
    let o2 = null;
    function getCtx() {
      if (!o2) {
        const t3 = document.createElement("canvas");
        t3.className = "hiddenCanvasElement";
        document.body.append(t3);
        o2 = t3.getContext("2d", { alpha: false });
      }
      return o2;
    }
    function cleanupTextLayer() {
      o2?.canvas.remove();
      o2 = null;
    }
    function appendText(t3, e3, s3) {
      const o3 = document.createElement("span"), l2 = { angle: 0, canvasWidth: 0, hasText: "" !== e3.str, hasEOL: e3.hasEOL, fontSize: 0 };
      t3._textDivs.push(o3);
      const h2 = i2.Util.transform(t3._transform, e3.transform);
      let d2 = Math.atan2(h2[1], h2[0]);
      const c2 = s3[e3.fontName];
      c2.vertical && (d2 += Math.PI / 2);
      const u2 = t3._fontInspectorEnabled && c2.fontSubstitution || c2.fontFamily, p2 = Math.hypot(h2[2], h2[3]), g2 = p2 * (function getAscent(t4) {
        const e4 = r2.get(t4);
        if (e4) return e4;
        const i3 = getCtx(), s4 = i3.font;
        i3.canvas.width = i3.canvas.height = n2;
        i3.font = `${n2}px ${t4}`;
        const o4 = i3.measureText("");
        let l3 = o4.fontBoundingBoxAscent, h3 = Math.abs(o4.fontBoundingBoxDescent);
        if (l3) {
          const e5 = l3 / (l3 + h3);
          r2.set(t4, e5);
          i3.canvas.width = i3.canvas.height = 0;
          i3.font = s4;
          return e5;
        }
        i3.strokeStyle = "red";
        i3.clearRect(0, 0, n2, n2);
        i3.strokeText("g", 0, 0);
        let d3 = i3.getImageData(0, 0, n2, n2).data;
        h3 = 0;
        for (let t5 = d3.length - 1 - 3; t5 >= 0; t5 -= 4) if (d3[t5] > 0) {
          h3 = Math.ceil(t5 / 4 / n2);
          break;
        }
        i3.clearRect(0, 0, n2, n2);
        i3.strokeText("A", 0, n2);
        d3 = i3.getImageData(0, 0, n2, n2).data;
        l3 = 0;
        for (let t5 = 0, e5 = d3.length; t5 < e5; t5 += 4) if (d3[t5] > 0) {
          l3 = n2 - Math.floor(t5 / 4 / n2);
          break;
        }
        i3.canvas.width = i3.canvas.height = 0;
        i3.font = s4;
        if (l3) {
          const e5 = l3 / (l3 + h3);
          r2.set(t4, e5);
          return e5;
        }
        r2.set(t4, a2);
        return a2;
      })(u2);
      let m2, f2;
      if (0 === d2) {
        m2 = h2[4];
        f2 = h2[5] - g2;
      } else {
        m2 = h2[4] + g2 * Math.sin(d2);
        f2 = h2[5] - g2 * Math.cos(d2);
      }
      const b2 = "calc(var(--scale-factor)*", A2 = o3.style;
      if (t3._container === t3._rootContainer) {
        A2.left = `${(100 * m2 / t3._pageWidth).toFixed(2)}%`;
        A2.top = `${(100 * f2 / t3._pageHeight).toFixed(2)}%`;
      } else {
        A2.left = `${b2}${m2.toFixed(2)}px)`;
        A2.top = `${b2}${f2.toFixed(2)}px)`;
      }
      A2.fontSize = `${b2}${p2.toFixed(2)}px)`;
      A2.fontFamily = u2;
      l2.fontSize = p2;
      o3.setAttribute("role", "presentation");
      o3.textContent = e3.str;
      o3.dir = e3.dir;
      t3._fontInspectorEnabled && (o3.dataset.fontName = c2.fontSubstitutionLoadedName || e3.fontName);
      0 !== d2 && (l2.angle = d2 * (180 / Math.PI));
      let v2 = false;
      if (e3.str.length > 1) v2 = true;
      else if (" " !== e3.str && e3.transform[0] !== e3.transform[3]) {
        const t4 = Math.abs(e3.transform[0]), i3 = Math.abs(e3.transform[3]);
        t4 !== i3 && Math.max(t4, i3) / Math.min(t4, i3) > 1.5 && (v2 = true);
      }
      v2 && (l2.canvasWidth = c2.vertical ? e3.height : e3.width);
      t3._textDivProperties.set(o3, l2);
      t3._isReadableStream && t3._layoutText(o3);
    }
    function layout(t3) {
      const { div: e3, scale: i3, properties: s3, ctx: n3, prevFontSize: a3, prevFontFamily: r3 } = t3, { style: o3 } = e3;
      let l2 = "";
      if (0 !== s3.canvasWidth && s3.hasText) {
        const { fontFamily: h2 } = o3, { canvasWidth: d2, fontSize: c2 } = s3;
        if (a3 !== c2 || r3 !== h2) {
          n3.font = `${c2 * i3}px ${h2}`;
          t3.prevFontSize = c2;
          t3.prevFontFamily = h2;
        }
        const { width: u2 } = n3.measureText(e3.textContent);
        u2 > 0 && (l2 = `scaleX(${d2 * i3 / u2})`);
      }
      0 !== s3.angle && (l2 = `rotate(${s3.angle}deg) ${l2}`);
      l2.length > 0 && (o3.transform = l2);
    }
    class TextLayerRenderTask {
      constructor({ textContentSource: t3, container: e3, viewport: i3, textDivs: n3, textDivProperties: a3, textContentItemsStr: r3 }) {
        this._textContentSource = t3;
        this._isReadableStream = t3 instanceof ReadableStream;
        this._container = this._rootContainer = e3;
        this._textDivs = n3 || [];
        this._textContentItemsStr = r3 || [];
        this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
        this._reader = null;
        this._textDivProperties = a3 || /* @__PURE__ */ new WeakMap();
        this._canceled = false;
        this._capability = Promise.withResolvers();
        this._layoutTextParams = { prevFontSize: null, prevFontFamily: null, div: null, scale: i3.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: getCtx() };
        const { pageWidth: o3, pageHeight: l2, pageX: h2, pageY: d2 } = i3.rawDims;
        this._transform = [1, 0, 0, -1, -h2, d2 + l2];
        this._pageWidth = o3;
        this._pageHeight = l2;
        (0, s2.setLayerDimensions)(e3, i3);
        this._capability.promise.finally((() => {
          this._layoutTextParams = null;
        })).catch((() => {
        }));
      }
      get promise() {
        return this._capability.promise;
      }
      cancel() {
        this._canceled = true;
        if (this._reader) {
          this._reader.cancel(new i2.AbortException("TextLayer task cancelled.")).catch((() => {
          }));
          this._reader = null;
        }
        this._capability.reject(new i2.AbortException("TextLayer task cancelled."));
      }
      _processItems(t3, e3) {
        for (const i3 of t3) if (void 0 !== i3.str) {
          this._textContentItemsStr.push(i3.str);
          appendText(this, i3, e3);
        } else if ("beginMarkedContentProps" === i3.type || "beginMarkedContent" === i3.type) {
          const t4 = this._container;
          this._container = document.createElement("span");
          this._container.classList.add("markedContent");
          null !== i3.id && this._container.setAttribute("id", `${i3.id}`);
          t4.append(this._container);
        } else "endMarkedContent" === i3.type && (this._container = this._container.parentNode);
      }
      _layoutText(t3) {
        const e3 = this._layoutTextParams.properties = this._textDivProperties.get(t3);
        this._layoutTextParams.div = t3;
        layout(this._layoutTextParams);
        e3.hasText && this._container.append(t3);
        if (e3.hasEOL) {
          const t4 = document.createElement("br");
          t4.setAttribute("role", "presentation");
          this._container.append(t4);
        }
      }
      _render() {
        const { promise: t3, resolve: e3, reject: i3 } = Promise.withResolvers();
        let s3 = /* @__PURE__ */ Object.create(null);
        if (this._isReadableStream) {
          const pump = () => {
            this._reader.read().then((({ value: t4, done: i4 }) => {
              if (i4) e3();
              else {
                Object.assign(s3, t4.styles);
                this._processItems(t4.items, s3);
                pump();
              }
            }), i3);
          };
          this._reader = this._textContentSource.getReader();
          pump();
        } else {
          if (!this._textContentSource) throw new Error('No "textContentSource" parameter specified.');
          {
            const { items: t4, styles: i4 } = this._textContentSource;
            this._processItems(t4, i4);
            e3();
          }
        }
        t3.then((() => {
          s3 = null;
          !(function render(t4) {
            if (t4._canceled) return;
            const e4 = t4._textDivs, i4 = t4._capability;
            if (e4.length > 1e5) i4.resolve();
            else {
              if (!t4._isReadableStream) for (const i5 of e4) t4._layoutText(i5);
              i4.resolve();
            }
          })(this);
        }), this._capability.reject);
      }
    }
    function renderTextLayer(t3) {
      const e3 = new TextLayerRenderTask(t3);
      e3._render();
      return e3;
    }
    function updateTextLayer({ container: t3, viewport: e3, textDivs: i3, textDivProperties: n3, mustRotate: a3 = true, mustRescale: r3 = true }) {
      a3 && (0, s2.setLayerDimensions)(t3, { rotation: e3.rotation });
      if (r3) {
        const t4 = getCtx(), s3 = { prevFontSize: null, prevFontFamily: null, div: null, scale: e3.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: t4 };
        for (const t5 of i3) {
          s3.properties = n3.get(t5);
          s3.div = t5;
          layout(s3);
        }
      }
    }
  }, 585: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { PDFDataTransportStream: () => PDFDataTransportStream });
    var i2 = e2(292), s2 = e2(419);
    class PDFDataTransportStream {
      constructor(t3, { disableRange: e3 = false, disableStream: s3 = false }) {
        (0, i2.assert)(t3, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
        const { length: n2, initialData: a2, progressiveDone: r2, contentDispositionFilename: o2 } = t3;
        this._queuedChunks = [];
        this._progressiveDone = r2;
        this._contentDispositionFilename = o2;
        if (a2?.length > 0) {
          const t4 = a2 instanceof Uint8Array && a2.byteLength === a2.buffer.byteLength ? a2.buffer : new Uint8Array(a2).buffer;
          this._queuedChunks.push(t4);
        }
        this._pdfDataRangeTransport = t3;
        this._isStreamingSupported = !s3;
        this._isRangeSupported = !e3;
        this._contentLength = n2;
        this._fullRequestReader = null;
        this._rangeReaders = [];
        t3.addRangeListener(((t4, e4) => {
          this._onReceiveData({ begin: t4, chunk: e4 });
        }));
        t3.addProgressListener(((t4, e4) => {
          this._onProgress({ loaded: t4, total: e4 });
        }));
        t3.addProgressiveReadListener(((t4) => {
          this._onReceiveData({ chunk: t4 });
        }));
        t3.addProgressiveDoneListener((() => {
          this._onProgressiveDone();
        }));
        t3.transportReady();
      }
      _onReceiveData({ begin: t3, chunk: e3 }) {
        const s3 = e3 instanceof Uint8Array && e3.byteLength === e3.buffer.byteLength ? e3.buffer : new Uint8Array(e3).buffer;
        if (void 0 === t3) this._fullRequestReader ? this._fullRequestReader._enqueue(s3) : this._queuedChunks.push(s3);
        else {
          const e4 = this._rangeReaders.some((function(e5) {
            if (e5._begin !== t3) return false;
            e5._enqueue(s3);
            return true;
          }));
          (0, i2.assert)(e4, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
        }
      }
      get _progressiveDataLength() {
        return this._fullRequestReader?._loaded ?? 0;
      }
      _onProgress(t3) {
        void 0 === t3.total ? this._rangeReaders[0]?.onProgress?.({ loaded: t3.loaded }) : this._fullRequestReader?.onProgress?.({ loaded: t3.loaded, total: t3.total });
      }
      _onProgressiveDone() {
        this._fullRequestReader?.progressiveDone();
        this._progressiveDone = true;
      }
      _removeRangeReader(t3) {
        const e3 = this._rangeReaders.indexOf(t3);
        e3 >= 0 && this._rangeReaders.splice(e3, 1);
      }
      getFullReader() {
        (0, i2.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
        const t3 = this._queuedChunks;
        this._queuedChunks = null;
        return new PDFDataTransportStreamReader(this, t3, this._progressiveDone, this._contentDispositionFilename);
      }
      getRangeReader(t3, e3) {
        if (e3 <= this._progressiveDataLength) return null;
        const i3 = new PDFDataTransportStreamRangeReader(this, t3, e3);
        this._pdfDataRangeTransport.requestDataRange(t3, e3);
        this._rangeReaders.push(i3);
        return i3;
      }
      cancelAllRequests(t3) {
        this._fullRequestReader?.cancel(t3);
        for (const e3 of this._rangeReaders.slice(0)) e3.cancel(t3);
        this._pdfDataRangeTransport.abort();
      }
    }
    class PDFDataTransportStreamReader {
      constructor(t3, e3, i3 = false, n2 = null) {
        this._stream = t3;
        this._done = i3 || false;
        this._filename = (0, s2.isPdfFile)(n2) ? n2 : null;
        this._queuedChunks = e3 || [];
        this._loaded = 0;
        for (const t4 of this._queuedChunks) this._loaded += t4.byteLength;
        this._requests = [];
        this._headersReady = Promise.resolve();
        t3._fullRequestReader = this;
        this.onProgress = null;
      }
      _enqueue(t3) {
        if (!this._done) {
          if (this._requests.length > 0) {
            this._requests.shift().resolve({ value: t3, done: false });
          } else this._queuedChunks.push(t3);
          this._loaded += t3.byteLength;
        }
      }
      get headersReady() {
        return this._headersReady;
      }
      get filename() {
        return this._filename;
      }
      get isRangeSupported() {
        return this._stream._isRangeSupported;
      }
      get isStreamingSupported() {
        return this._stream._isStreamingSupported;
      }
      get contentLength() {
        return this._stream._contentLength;
      }
      async read() {
        if (this._queuedChunks.length > 0) {
          return { value: this._queuedChunks.shift(), done: false };
        }
        if (this._done) return { value: void 0, done: true };
        const t3 = Promise.withResolvers();
        this._requests.push(t3);
        return t3.promise;
      }
      cancel(t3) {
        this._done = true;
        for (const t4 of this._requests) t4.resolve({ value: void 0, done: true });
        this._requests.length = 0;
      }
      progressiveDone() {
        this._done || (this._done = true);
      }
    }
    class PDFDataTransportStreamRangeReader {
      constructor(t3, e3, i3) {
        this._stream = t3;
        this._begin = e3;
        this._end = i3;
        this._queuedChunk = null;
        this._requests = [];
        this._done = false;
        this.onProgress = null;
      }
      _enqueue(t3) {
        if (!this._done) {
          if (0 === this._requests.length) this._queuedChunk = t3;
          else {
            this._requests.shift().resolve({ value: t3, done: false });
            for (const t4 of this._requests) t4.resolve({ value: void 0, done: true });
            this._requests.length = 0;
          }
          this._done = true;
          this._stream._removeRangeReader(this);
        }
      }
      get isStreamingSupported() {
        return false;
      }
      async read() {
        if (this._queuedChunk) {
          const t4 = this._queuedChunk;
          this._queuedChunk = null;
          return { value: t4, done: false };
        }
        if (this._done) return { value: void 0, done: true };
        const t3 = Promise.withResolvers();
        this._requests.push(t3);
        return t3.promise;
      }
      cancel(t3) {
        this._done = true;
        for (const t4 of this._requests) t4.resolve({ value: void 0, done: true });
        this._requests.length = 0;
        this._stream._removeRangeReader(this);
      }
    }
  }, 164: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { GlobalWorkerOptions: () => GlobalWorkerOptions });
    class GlobalWorkerOptions {
      static #ar = null;
      static #rr = "";
      static get workerPort() {
        return this.#ar;
      }
      static set workerPort(t3) {
        if (!("undefined" != typeof Worker && t3 instanceof Worker) && null !== t3) throw new Error("Invalid `workerPort` type.");
        this.#ar = t3;
      }
      static get workerSrc() {
        return this.#rr;
      }
      static set workerSrc(t3) {
        if ("string" != typeof t3) throw new Error("Invalid `workerSrc` type.");
        this.#rr = t3;
      }
    }
  }, 284: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { XfaLayer: () => XfaLayer });
    var i2 = e2(50);
    class XfaLayer {
      static setupStorage(t3, e3, i3, s2, n2) {
        const a2 = s2.getValue(e3, { value: null });
        switch (i3.name) {
          case "textarea":
            null !== a2.value && (t3.textContent = a2.value);
            if ("print" === n2) break;
            t3.addEventListener("input", ((t4) => {
              s2.setValue(e3, { value: t4.target.value });
            }));
            break;
          case "input":
            if ("radio" === i3.attributes.type || "checkbox" === i3.attributes.type) {
              a2.value === i3.attributes.xfaOn ? t3.setAttribute("checked", true) : a2.value === i3.attributes.xfaOff && t3.removeAttribute("checked");
              if ("print" === n2) break;
              t3.addEventListener("change", ((t4) => {
                s2.setValue(e3, { value: t4.target.checked ? t4.target.getAttribute("xfaOn") : t4.target.getAttribute("xfaOff") });
              }));
            } else {
              null !== a2.value && t3.setAttribute("value", a2.value);
              if ("print" === n2) break;
              t3.addEventListener("input", ((t4) => {
                s2.setValue(e3, { value: t4.target.value });
              }));
            }
            break;
          case "select":
            if (null !== a2.value) {
              t3.setAttribute("value", a2.value);
              for (const t4 of i3.children) t4.attributes.value === a2.value ? t4.attributes.selected = true : t4.attributes.hasOwnProperty("selected") && delete t4.attributes.selected;
            }
            t3.addEventListener("input", ((t4) => {
              const i4 = t4.target.options, n3 = -1 === i4.selectedIndex ? "" : i4[i4.selectedIndex].value;
              s2.setValue(e3, { value: n3 });
            }));
        }
      }
      static setAttributes({ html: t3, element: e3, storage: i3 = null, intent: s2, linkService: n2 }) {
        const { attributes: a2 } = e3, r2 = t3 instanceof HTMLAnchorElement;
        "radio" === a2.type && (a2.name = `${a2.name}-${s2}`);
        for (const [e4, i4] of Object.entries(a2)) if (null != i4) switch (e4) {
          case "class":
            i4.length && t3.setAttribute(e4, i4.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t3.setAttribute("data-element-id", i4);
            break;
          case "style":
            Object.assign(t3.style, i4);
            break;
          case "textContent":
            t3.textContent = i4;
            break;
          default:
            (!r2 || "href" !== e4 && "newWindow" !== e4) && t3.setAttribute(e4, i4);
        }
        r2 && n2.addLinkAttributes(t3, a2.href, a2.newWindow);
        i3 && a2.dataId && this.setupStorage(t3, a2.dataId, e3, i3);
      }
      static render(t3) {
        const e3 = t3.annotationStorage, s2 = t3.linkService, n2 = t3.xfaHtml, a2 = t3.intent || "display", r2 = document.createElement(n2.name);
        n2.attributes && this.setAttributes({ html: r2, element: n2, intent: a2, linkService: s2 });
        const o2 = "richText" !== a2, l2 = t3.div;
        l2.append(r2);
        if (t3.viewport) {
          const e4 = `matrix(${t3.viewport.transform.join(",")})`;
          l2.style.transform = e4;
        }
        o2 && l2.setAttribute("class", "xfaLayer xfaFont");
        const h2 = [];
        if (0 === n2.children.length) {
          if (n2.value) {
            const t4 = document.createTextNode(n2.value);
            r2.append(t4);
            o2 && i2.XfaText.shouldBuildText(n2.name) && h2.push(t4);
          }
          return { textDivs: h2 };
        }
        const d2 = [[n2, -1, r2]];
        for (; d2.length > 0; ) {
          const [t4, n3, r3] = d2.at(-1);
          if (n3 + 1 === t4.children.length) {
            d2.pop();
            continue;
          }
          const l3 = t4.children[++d2.at(-1)[1]];
          if (null === l3) continue;
          const { name: c2 } = l3;
          if ("#text" === c2) {
            const t5 = document.createTextNode(l3.value);
            h2.push(t5);
            r3.append(t5);
            continue;
          }
          const u2 = l3?.attributes?.xmlns ? document.createElementNS(l3.attributes.xmlns, c2) : document.createElement(c2);
          r3.append(u2);
          l3.attributes && this.setAttributes({ html: u2, element: l3, storage: e3, intent: a2, linkService: s2 });
          if (l3.children?.length > 0) d2.push([l3, -1, u2]);
          else if (l3.value) {
            const t5 = document.createTextNode(l3.value);
            o2 && i2.XfaText.shouldBuildText(c2) && h2.push(t5);
            u2.append(t5);
          }
        }
        for (const t4 of l2.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) t4.setAttribute("readOnly", true);
        return { textDivs: h2 };
      }
      static update(t3) {
        const e3 = `matrix(${t3.viewport.transform.join(",")})`;
        t3.div.style.transform = e3;
        t3.div.hidden = false;
      }
    }
  }, 50: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { XfaText: () => XfaText });
    class XfaText {
      static textContent(t3) {
        const e3 = [], i2 = { items: e3, styles: /* @__PURE__ */ Object.create(null) };
        !(function walk(t4) {
          if (!t4) return;
          let i3 = null;
          const s2 = t4.name;
          if ("#text" === s2) i3 = t4.value;
          else {
            if (!XfaText.shouldBuildText(s2)) return;
            t4?.attributes?.textContent ? i3 = t4.attributes.textContent : t4.value && (i3 = t4.value);
          }
          null !== i3 && e3.push({ str: i3 });
          if (t4.children) for (const e4 of t4.children) walk(e4);
        })(t3);
        return i2;
      }
      static shouldBuildText(t3) {
        return !("textarea" === t3 || "input" === t3 || "option" === t3 || "select" === t3);
      }
    }
  }, 228: (t2, __webpack_exports__2, e2) => {
    e2.a(t2, (async (t3, i2) => {
      try {
        e2.d(__webpack_exports__2, { AbortException: () => s2.AbortException, AnnotationEditorLayer: () => o2.AnnotationEditorLayer, AnnotationEditorParamsType: () => s2.AnnotationEditorParamsType, AnnotationEditorType: () => s2.AnnotationEditorType, AnnotationEditorUIManager: () => l2.AnnotationEditorUIManager, AnnotationLayer: () => h2.AnnotationLayer, AnnotationMode: () => s2.AnnotationMode, CMapCompressionType: () => s2.CMapCompressionType, ColorPicker: () => d2.ColorPicker, DOMSVGFactory: () => a2.DOMSVGFactory, DrawLayer: () => c2.DrawLayer, FeatureTest: () => s2.FeatureTest, GlobalWorkerOptions: () => u2.GlobalWorkerOptions, ImageKind: () => s2.ImageKind, InvalidPDFException: () => s2.InvalidPDFException, MissingPDFException: () => s2.MissingPDFException, OPS: () => s2.OPS, Outliner: () => p2.Outliner, PDFDataRangeTransport: () => n2.PDFDataRangeTransport, PDFDateString: () => a2.PDFDateString, PDFWorker: () => n2.PDFWorker, PasswordResponses: () => s2.PasswordResponses, PermissionFlag: () => s2.PermissionFlag, PixelsPerInch: () => a2.PixelsPerInch, RenderingCancelledException: () => a2.RenderingCancelledException, UnexpectedResponseException: () => s2.UnexpectedResponseException, Util: () => s2.Util, VerbosityLevel: () => s2.VerbosityLevel, XfaLayer: () => g2.XfaLayer, build: () => n2.build, createValidAbsoluteUrl: () => s2.createValidAbsoluteUrl, fetchData: () => a2.fetchData, getDocument: () => n2.getDocument, getFilenameFromUrl: () => a2.getFilenameFromUrl, getPdfFilenameFromUrl: () => a2.getPdfFilenameFromUrl, getXfaPageViewport: () => a2.getXfaPageViewport, isDataScheme: () => a2.isDataScheme, isPdfFile: () => a2.isPdfFile, noContextMenu: () => a2.noContextMenu, normalizeUnicode: () => s2.normalizeUnicode, renderTextLayer: () => r2.renderTextLayer, setLayerDimensions: () => a2.setLayerDimensions, shadow: () => s2.shadow, updateTextLayer: () => r2.updateTextLayer, version: () => n2.version });
        var s2 = e2(292), n2 = e2(831), a2 = e2(419), r2 = e2(814), o2 = e2(731), l2 = e2(830), h2 = e2(976), d2 = e2(259), c2 = e2(47), u2 = e2(164), p2 = e2(61), g2 = e2(284), m2 = t3([n2]);
        n2 = (m2.then ? (await m2)() : m2)[0];
        i2();
      } catch (t4) {
        i2(t4);
      }
    }));
  }, 178: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { MessageHandler: () => MessageHandler });
    var i2 = e2(292);
    const s2 = 1, n2 = 2, a2 = 1, r2 = 2, o2 = 3, l2 = 4, h2 = 5, d2 = 6, c2 = 7, u2 = 8;
    function wrapReason(t3) {
      t3 instanceof Error || "object" == typeof t3 && null !== t3 || (0, i2.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
      switch (t3.name) {
        case "AbortException":
          return new i2.AbortException(t3.message);
        case "MissingPDFException":
          return new i2.MissingPDFException(t3.message);
        case "PasswordException":
          return new i2.PasswordException(t3.message, t3.code);
        case "UnexpectedResponseException":
          return new i2.UnexpectedResponseException(t3.message, t3.status);
        case "UnknownErrorException":
          return new i2.UnknownErrorException(t3.message, t3.details);
        default:
          return new i2.UnknownErrorException(t3.message, t3.toString());
      }
    }
    class MessageHandler {
      constructor(t3, e3, i3) {
        this.sourceName = t3;
        this.targetName = e3;
        this.comObj = i3;
        this.callbackId = 1;
        this.streamId = 1;
        this.streamSinks = /* @__PURE__ */ Object.create(null);
        this.streamControllers = /* @__PURE__ */ Object.create(null);
        this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
        this.actionHandler = /* @__PURE__ */ Object.create(null);
        this._onComObjOnMessage = (t4) => {
          const e4 = t4.data;
          if (e4.targetName !== this.sourceName) return;
          if (e4.stream) {
            this.#or(e4);
            return;
          }
          if (e4.callback) {
            const t5 = e4.callbackId, i4 = this.callbackCapabilities[t5];
            if (!i4) throw new Error(`Cannot resolve callback ${t5}`);
            delete this.callbackCapabilities[t5];
            if (e4.callback === s2) i4.resolve(e4.data);
            else {
              if (e4.callback !== n2) throw new Error("Unexpected callback case");
              i4.reject(wrapReason(e4.reason));
            }
            return;
          }
          const a3 = this.actionHandler[e4.action];
          if (!a3) throw new Error(`Unknown action from worker: ${e4.action}`);
          if (e4.callbackId) {
            const t5 = this.sourceName, r3 = e4.sourceName;
            new Promise((function(t6) {
              t6(a3(e4.data));
            })).then((function(n3) {
              i3.postMessage({ sourceName: t5, targetName: r3, callback: s2, callbackId: e4.callbackId, data: n3 });
            }), (function(s3) {
              i3.postMessage({ sourceName: t5, targetName: r3, callback: n2, callbackId: e4.callbackId, reason: wrapReason(s3) });
            }));
          } else e4.streamId ? this.#lr(e4) : a3(e4.data);
        };
        i3.addEventListener("message", this._onComObjOnMessage);
      }
      on(t3, e3) {
        const i3 = this.actionHandler;
        if (i3[t3]) throw new Error(`There is already an actionName called "${t3}"`);
        i3[t3] = e3;
      }
      send(t3, e3, i3) {
        this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t3, data: e3 }, i3);
      }
      sendWithPromise(t3, e3, i3) {
        const s3 = this.callbackId++, n3 = Promise.withResolvers();
        this.callbackCapabilities[s3] = n3;
        try {
          this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t3, callbackId: s3, data: e3 }, i3);
        } catch (t4) {
          n3.reject(t4);
        }
        return n3.promise;
      }
      sendWithStream(t3, e3, s3, n3) {
        const r3 = this.streamId++, o3 = this.sourceName, l3 = this.targetName, h3 = this.comObj;
        return new ReadableStream({ start: (i3) => {
          const s4 = Promise.withResolvers();
          this.streamControllers[r3] = { controller: i3, startCall: s4, pullCall: null, cancelCall: null, isClosed: false };
          h3.postMessage({ sourceName: o3, targetName: l3, action: t3, streamId: r3, data: e3, desiredSize: i3.desiredSize }, n3);
          return s4.promise;
        }, pull: (t4) => {
          const e4 = Promise.withResolvers();
          this.streamControllers[r3].pullCall = e4;
          h3.postMessage({ sourceName: o3, targetName: l3, stream: d2, streamId: r3, desiredSize: t4.desiredSize });
          return e4.promise;
        }, cancel: (t4) => {
          (0, i2.assert)(t4 instanceof Error, "cancel must have a valid reason");
          const e4 = Promise.withResolvers();
          this.streamControllers[r3].cancelCall = e4;
          this.streamControllers[r3].isClosed = true;
          h3.postMessage({ sourceName: o3, targetName: l3, stream: a2, streamId: r3, reason: wrapReason(t4) });
          return e4.promise;
        } }, s3);
      }
      #lr(t3) {
        const e3 = t3.streamId, s3 = this.sourceName, n3 = t3.sourceName, a3 = this.comObj, r3 = this, d3 = this.actionHandler[t3.action], c3 = { enqueue(t4, i3 = 1, r4) {
          if (this.isCancelled) return;
          const o3 = this.desiredSize;
          this.desiredSize -= i3;
          if (o3 > 0 && this.desiredSize <= 0) {
            this.sinkCapability = Promise.withResolvers();
            this.ready = this.sinkCapability.promise;
          }
          a3.postMessage({ sourceName: s3, targetName: n3, stream: l2, streamId: e3, chunk: t4 }, r4);
        }, close() {
          if (!this.isCancelled) {
            this.isCancelled = true;
            a3.postMessage({ sourceName: s3, targetName: n3, stream: o2, streamId: e3 });
            delete r3.streamSinks[e3];
          }
        }, error(t4) {
          (0, i2.assert)(t4 instanceof Error, "error must have a valid reason");
          if (!this.isCancelled) {
            this.isCancelled = true;
            a3.postMessage({ sourceName: s3, targetName: n3, stream: h2, streamId: e3, reason: wrapReason(t4) });
          }
        }, sinkCapability: Promise.withResolvers(), onPull: null, onCancel: null, isCancelled: false, desiredSize: t3.desiredSize, ready: null };
        c3.sinkCapability.resolve();
        c3.ready = c3.sinkCapability.promise;
        this.streamSinks[e3] = c3;
        new Promise((function(e4) {
          e4(d3(t3.data, c3));
        })).then((function() {
          a3.postMessage({ sourceName: s3, targetName: n3, stream: u2, streamId: e3, success: true });
        }), (function(t4) {
          a3.postMessage({ sourceName: s3, targetName: n3, stream: u2, streamId: e3, reason: wrapReason(t4) });
        }));
      }
      #or(t3) {
        const e3 = t3.streamId, s3 = this.sourceName, n3 = t3.sourceName, p2 = this.comObj, g2 = this.streamControllers[e3], m2 = this.streamSinks[e3];
        switch (t3.stream) {
          case u2:
            t3.success ? g2.startCall.resolve() : g2.startCall.reject(wrapReason(t3.reason));
            break;
          case c2:
            t3.success ? g2.pullCall.resolve() : g2.pullCall.reject(wrapReason(t3.reason));
            break;
          case d2:
            if (!m2) {
              p2.postMessage({ sourceName: s3, targetName: n3, stream: c2, streamId: e3, success: true });
              break;
            }
            m2.desiredSize <= 0 && t3.desiredSize > 0 && m2.sinkCapability.resolve();
            m2.desiredSize = t3.desiredSize;
            new Promise((function(t4) {
              t4(m2.onPull?.());
            })).then((function() {
              p2.postMessage({ sourceName: s3, targetName: n3, stream: c2, streamId: e3, success: true });
            }), (function(t4) {
              p2.postMessage({ sourceName: s3, targetName: n3, stream: c2, streamId: e3, reason: wrapReason(t4) });
            }));
            break;
          case l2:
            (0, i2.assert)(g2, "enqueue should have stream controller");
            if (g2.isClosed) break;
            g2.controller.enqueue(t3.chunk);
            break;
          case o2:
            (0, i2.assert)(g2, "close should have stream controller");
            if (g2.isClosed) break;
            g2.isClosed = true;
            g2.controller.close();
            this.#hr(g2, e3);
            break;
          case h2:
            (0, i2.assert)(g2, "error should have stream controller");
            g2.controller.error(wrapReason(t3.reason));
            this.#hr(g2, e3);
            break;
          case r2:
            t3.success ? g2.cancelCall.resolve() : g2.cancelCall.reject(wrapReason(t3.reason));
            this.#hr(g2, e3);
            break;
          case a2:
            if (!m2) break;
            new Promise((function(e4) {
              e4(m2.onCancel?.(wrapReason(t3.reason)));
            })).then((function() {
              p2.postMessage({ sourceName: s3, targetName: n3, stream: r2, streamId: e3, success: true });
            }), (function(t4) {
              p2.postMessage({ sourceName: s3, targetName: n3, stream: r2, streamId: e3, reason: wrapReason(t4) });
            }));
            m2.sinkCapability.reject(wrapReason(t3.reason));
            m2.isCancelled = true;
            delete this.streamSinks[e3];
            break;
          default:
            throw new Error("Unexpected stream case");
        }
      }
      async #hr(t3, e3) {
        await Promise.allSettled([t3.startCall?.promise, t3.pullCall?.promise, t3.cancelCall?.promise]);
        delete this.streamControllers[e3];
      }
      destroy() {
        this.comObj.removeEventListener("message", this._onComObjOnMessage);
      }
    }
  }, 651: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { MurmurHash3_64: () => MurmurHash3_64 });
    const i2 = 3285377520, s2 = 4294901760, n2 = 65535;
    class MurmurHash3_64 {
      constructor(t3) {
        this.h1 = t3 ? 4294967295 & t3 : i2;
        this.h2 = t3 ? 4294967295 & t3 : i2;
      }
      update(t3) {
        let e3, i3;
        if ("string" == typeof t3) {
          e3 = new Uint8Array(2 * t3.length);
          i3 = 0;
          for (let s3 = 0, n3 = t3.length; s3 < n3; s3++) {
            const n4 = t3.charCodeAt(s3);
            if (n4 <= 255) e3[i3++] = n4;
            else {
              e3[i3++] = n4 >>> 8;
              e3[i3++] = 255 & n4;
            }
          }
        } else {
          if (!ArrayBuffer.isView(t3)) throw new Error("Invalid data format, must be a string or TypedArray.");
          e3 = t3.slice();
          i3 = e3.byteLength;
        }
        const a2 = i3 >> 2, r2 = i3 - 4 * a2, o2 = new Uint32Array(e3.buffer, 0, a2);
        let l2 = 0, h2 = 0, d2 = this.h1, c2 = this.h2;
        const u2 = 3432918353, p2 = 461845907, g2 = 11601, m2 = 13715;
        for (let t4 = 0; t4 < a2; t4++) if (1 & t4) {
          l2 = o2[t4];
          l2 = l2 * u2 & s2 | l2 * g2 & n2;
          l2 = l2 << 15 | l2 >>> 17;
          l2 = l2 * p2 & s2 | l2 * m2 & n2;
          d2 ^= l2;
          d2 = d2 << 13 | d2 >>> 19;
          d2 = 5 * d2 + 3864292196;
        } else {
          h2 = o2[t4];
          h2 = h2 * u2 & s2 | h2 * g2 & n2;
          h2 = h2 << 15 | h2 >>> 17;
          h2 = h2 * p2 & s2 | h2 * m2 & n2;
          c2 ^= h2;
          c2 = c2 << 13 | c2 >>> 19;
          c2 = 5 * c2 + 3864292196;
        }
        l2 = 0;
        switch (r2) {
          case 3:
            l2 ^= e3[4 * a2 + 2] << 16;
          case 2:
            l2 ^= e3[4 * a2 + 1] << 8;
          case 1:
            l2 ^= e3[4 * a2];
            l2 = l2 * u2 & s2 | l2 * g2 & n2;
            l2 = l2 << 15 | l2 >>> 17;
            l2 = l2 * p2 & s2 | l2 * m2 & n2;
            1 & a2 ? d2 ^= l2 : c2 ^= l2;
        }
        this.h1 = d2;
        this.h2 = c2;
      }
      hexdigest() {
        let t3 = this.h1, e3 = this.h2;
        t3 ^= e3 >>> 1;
        t3 = 3981806797 * t3 & s2 | 36045 * t3 & n2;
        e3 = 4283543511 * e3 & s2 | (2950163797 * (e3 << 16 | t3 >>> 16) & s2) >>> 16;
        t3 ^= e3 >>> 1;
        t3 = 444984403 * t3 & s2 | 60499 * t3 & n2;
        e3 = 3301882366 * e3 & s2 | (3120437893 * (e3 << 16 | t3 >>> 16) & s2) >>> 16;
        t3 ^= e3 >>> 1;
        return (t3 >>> 0).toString(16).padStart(8, "0") + (e3 >>> 0).toString(16).padStart(8, "0");
      }
    }
  }, 292: (t2, __webpack_exports__2, e2) => {
    e2.d(__webpack_exports__2, { AbortException: () => AbortException, AnnotationBorderStyleType: () => f2, AnnotationEditorParamsType: () => c2, AnnotationEditorPrefix: () => h2, AnnotationEditorType: () => d2, AnnotationMode: () => l2, AnnotationPrefix: () => S2, AnnotationType: () => m2, BaseException: () => w2, CMapCompressionType: () => A2, FONT_IDENTITY_MATRIX: () => n2, FeatureTest: () => FeatureTest, FontRenderOps: () => C2, FormatError: () => FormatError, IDENTITY_MATRIX: () => s2, ImageKind: () => g2, InvalidPDFException: () => InvalidPDFException, LINE_FACTOR: () => r2, MAX_IMAGE_SIZE_TO_CACHE: () => a2, MissingPDFException: () => MissingPDFException, OPS: () => v2, PasswordException: () => PasswordException, PasswordResponses: () => y2, PermissionFlag: () => u2, RenderingIntentFlag: () => o2, TextRenderingMode: () => p2, UnexpectedResponseException: () => UnexpectedResponseException, UnknownErrorException: () => UnknownErrorException, Util: () => Util, VerbosityLevel: () => b2, assert: () => assert, bytesToString: () => bytesToString, createValidAbsoluteUrl: () => createValidAbsoluteUrl, getUuid: () => getUuid, getVerbosityLevel: () => getVerbosityLevel, info: () => info, isNodeJS: () => i2, normalizeUnicode: () => normalizeUnicode, objectFromMap: () => objectFromMap, setVerbosityLevel: () => setVerbosityLevel, shadow: () => shadow, string32: () => string32, stringToBytes: () => stringToBytes, unreachable: () => unreachable, warn: () => warn });
    const i2 = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type), s2 = [1, 0, 0, 1, 0, 0], n2 = [1e-3, 0, 0, 1e-3, 0, 0], a2 = 1e7, r2 = 1.35, o2 = { ANY: 1, DISPLAY: 2, PRINT: 4, SAVE: 8, ANNOTATIONS_FORMS: 16, ANNOTATIONS_STORAGE: 32, ANNOTATIONS_DISABLE: 64, OPLIST: 256 }, l2 = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, h2 = "pdfjs_internal_editor_", d2 = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15 }, c2 = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23, HIGHLIGHT_COLOR: 31, HIGHLIGHT_DEFAULT_COLOR: 32, HIGHLIGHT_THICKNESS: 33, HIGHLIGHT_FREE: 34, HIGHLIGHT_SHOW_ALL: 35 }, u2 = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, p2 = { FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_ADD_TO_PATH: 4, STROKE_ADD_TO_PATH: 5, FILL_STROKE_ADD_TO_PATH: 6, ADD_TO_PATH: 7, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4 }, g2 = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, m2 = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, f2 = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 }, b2 = { ERRORS: 0, WARNINGS: 1, INFOS: 5 }, A2 = { NONE: 0, BINARY: 1 }, v2 = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91 }, y2 = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
    let E2 = b2.WARNINGS;
    function setVerbosityLevel(t3) {
      Number.isInteger(t3) && (E2 = t3);
    }
    function getVerbosityLevel() {
      return E2;
    }
    function info(t3) {
      E2 >= b2.INFOS && console.log(`Info: ${t3}`);
    }
    function warn(t3) {
      E2 >= b2.WARNINGS && console.log(`Warning: ${t3}`);
    }
    function unreachable(t3) {
      throw new Error(t3);
    }
    function assert(t3, e3) {
      t3 || unreachable(e3);
    }
    function createValidAbsoluteUrl(t3, e3 = null, i3 = null) {
      if (!t3) return null;
      try {
        if (i3 && "string" == typeof t3) {
          if (i3.addDefaultProtocol && t3.startsWith("www.")) {
            const e4 = t3.match(/\./g);
            e4?.length >= 2 && (t3 = `http://${t3}`);
          }
          if (i3.tryConvertEncoding) try {
            t3 = (function stringToUTF8String(t4) {
              return decodeURIComponent(escape(t4));
            })(t3);
          } catch {
          }
        }
        const s3 = e3 ? new URL(t3, e3) : new URL(t3);
        if ((function _isValidProtocol(t4) {
          switch (t4?.protocol) {
            case "http:":
            case "https:":
            case "ftp:":
            case "mailto:":
            case "tel:":
              return true;
            default:
              return false;
          }
        })(s3)) return s3;
      } catch {
      }
      return null;
    }
    function shadow(t3, e3, i3, s3 = false) {
      Object.defineProperty(t3, e3, { value: i3, enumerable: !s3, configurable: true, writable: false });
      return i3;
    }
    const w2 = (function BaseExceptionClosure() {
      function BaseException(t3, e3) {
        this.constructor === BaseException && unreachable("Cannot initialize BaseException.");
        this.message = t3;
        this.name = e3;
      }
      BaseException.prototype = new Error();
      BaseException.constructor = BaseException;
      return BaseException;
    })();
    class PasswordException extends w2 {
      constructor(t3, e3) {
        super(t3, "PasswordException");
        this.code = e3;
      }
    }
    class UnknownErrorException extends w2 {
      constructor(t3, e3) {
        super(t3, "UnknownErrorException");
        this.details = e3;
      }
    }
    class InvalidPDFException extends w2 {
      constructor(t3) {
        super(t3, "InvalidPDFException");
      }
    }
    class MissingPDFException extends w2 {
      constructor(t3) {
        super(t3, "MissingPDFException");
      }
    }
    class UnexpectedResponseException extends w2 {
      constructor(t3, e3) {
        super(t3, "UnexpectedResponseException");
        this.status = e3;
      }
    }
    class FormatError extends w2 {
      constructor(t3) {
        super(t3, "FormatError");
      }
    }
    class AbortException extends w2 {
      constructor(t3) {
        super(t3, "AbortException");
      }
    }
    function bytesToString(t3) {
      "object" == typeof t3 && void 0 !== t3?.length || unreachable("Invalid argument for bytesToString");
      const e3 = t3.length, i3 = 8192;
      if (e3 < i3) return String.fromCharCode.apply(null, t3);
      const s3 = [];
      for (let n3 = 0; n3 < e3; n3 += i3) {
        const a3 = Math.min(n3 + i3, e3), r3 = t3.subarray(n3, a3);
        s3.push(String.fromCharCode.apply(null, r3));
      }
      return s3.join("");
    }
    function stringToBytes(t3) {
      "string" != typeof t3 && unreachable("Invalid argument for stringToBytes");
      const e3 = t3.length, i3 = new Uint8Array(e3);
      for (let s3 = 0; s3 < e3; ++s3) i3[s3] = 255 & t3.charCodeAt(s3);
      return i3;
    }
    function string32(t3) {
      return String.fromCharCode(t3 >> 24 & 255, t3 >> 16 & 255, t3 >> 8 & 255, 255 & t3);
    }
    function objectFromMap(t3) {
      const e3 = /* @__PURE__ */ Object.create(null);
      for (const [i3, s3] of t3) e3[i3] = s3;
      return e3;
    }
    class FeatureTest {
      static get isLittleEndian() {
        return shadow(this, "isLittleEndian", (function isLittleEndian() {
          const t3 = new Uint8Array(4);
          t3[0] = 1;
          return 1 === new Uint32Array(t3.buffer, 0, 1)[0];
        })());
      }
      static get isEvalSupported() {
        return shadow(this, "isEvalSupported", (function isEvalSupported() {
          try {
            new Function("");
            return true;
          } catch {
            return false;
          }
        })());
      }
      static get isOffscreenCanvasSupported() {
        return shadow(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas);
      }
      static get platform() {
        return "undefined" != typeof navigator && "string" == typeof navigator?.platform ? shadow(this, "platform", { isMac: navigator.platform.includes("Mac") }) : shadow(this, "platform", { isMac: false });
      }
      static get isCSSRoundSupported() {
        return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
      }
    }
    const _2 = Array.from(Array(256).keys(), ((t3) => t3.toString(16).padStart(2, "0")));
    class Util {
      static makeHexColor(t3, e3, i3) {
        return `#${_2[t3]}${_2[e3]}${_2[i3]}`;
      }
      static scaleMinMax(t3, e3) {
        let i3;
        if (t3[0]) {
          if (t3[0] < 0) {
            i3 = e3[0];
            e3[0] = e3[2];
            e3[2] = i3;
          }
          e3[0] *= t3[0];
          e3[2] *= t3[0];
          if (t3[3] < 0) {
            i3 = e3[1];
            e3[1] = e3[3];
            e3[3] = i3;
          }
          e3[1] *= t3[3];
          e3[3] *= t3[3];
        } else {
          i3 = e3[0];
          e3[0] = e3[1];
          e3[1] = i3;
          i3 = e3[2];
          e3[2] = e3[3];
          e3[3] = i3;
          if (t3[1] < 0) {
            i3 = e3[1];
            e3[1] = e3[3];
            e3[3] = i3;
          }
          e3[1] *= t3[1];
          e3[3] *= t3[1];
          if (t3[2] < 0) {
            i3 = e3[0];
            e3[0] = e3[2];
            e3[2] = i3;
          }
          e3[0] *= t3[2];
          e3[2] *= t3[2];
        }
        e3[0] += t3[4];
        e3[1] += t3[5];
        e3[2] += t3[4];
        e3[3] += t3[5];
      }
      static transform(t3, e3) {
        return [t3[0] * e3[0] + t3[2] * e3[1], t3[1] * e3[0] + t3[3] * e3[1], t3[0] * e3[2] + t3[2] * e3[3], t3[1] * e3[2] + t3[3] * e3[3], t3[0] * e3[4] + t3[2] * e3[5] + t3[4], t3[1] * e3[4] + t3[3] * e3[5] + t3[5]];
      }
      static applyTransform(t3, e3) {
        return [t3[0] * e3[0] + t3[1] * e3[2] + e3[4], t3[0] * e3[1] + t3[1] * e3[3] + e3[5]];
      }
      static applyInverseTransform(t3, e3) {
        const i3 = e3[0] * e3[3] - e3[1] * e3[2];
        return [(t3[0] * e3[3] - t3[1] * e3[2] + e3[2] * e3[5] - e3[4] * e3[3]) / i3, (-t3[0] * e3[1] + t3[1] * e3[0] + e3[4] * e3[1] - e3[5] * e3[0]) / i3];
      }
      static getAxialAlignedBoundingBox(t3, e3) {
        const i3 = this.applyTransform(t3, e3), s3 = this.applyTransform(t3.slice(2, 4), e3), n3 = this.applyTransform([t3[0], t3[3]], e3), a3 = this.applyTransform([t3[2], t3[1]], e3);
        return [Math.min(i3[0], s3[0], n3[0], a3[0]), Math.min(i3[1], s3[1], n3[1], a3[1]), Math.max(i3[0], s3[0], n3[0], a3[0]), Math.max(i3[1], s3[1], n3[1], a3[1])];
      }
      static inverseTransform(t3) {
        const e3 = t3[0] * t3[3] - t3[1] * t3[2];
        return [t3[3] / e3, -t3[1] / e3, -t3[2] / e3, t3[0] / e3, (t3[2] * t3[5] - t3[4] * t3[3]) / e3, (t3[4] * t3[1] - t3[5] * t3[0]) / e3];
      }
      static singularValueDecompose2dScale(t3) {
        const e3 = [t3[0], t3[2], t3[1], t3[3]], i3 = t3[0] * e3[0] + t3[1] * e3[2], s3 = t3[0] * e3[1] + t3[1] * e3[3], n3 = t3[2] * e3[0] + t3[3] * e3[2], a3 = t3[2] * e3[1] + t3[3] * e3[3], r3 = (i3 + a3) / 2, o3 = Math.sqrt((i3 + a3) ** 2 - 4 * (i3 * a3 - n3 * s3)) / 2, l3 = r3 + o3 || 1, h3 = r3 - o3 || 1;
        return [Math.sqrt(l3), Math.sqrt(h3)];
      }
      static normalizeRect(t3) {
        const e3 = t3.slice(0);
        if (t3[0] > t3[2]) {
          e3[0] = t3[2];
          e3[2] = t3[0];
        }
        if (t3[1] > t3[3]) {
          e3[1] = t3[3];
          e3[3] = t3[1];
        }
        return e3;
      }
      static intersect(t3, e3) {
        const i3 = Math.max(Math.min(t3[0], t3[2]), Math.min(e3[0], e3[2])), s3 = Math.min(Math.max(t3[0], t3[2]), Math.max(e3[0], e3[2]));
        if (i3 > s3) return null;
        const n3 = Math.max(Math.min(t3[1], t3[3]), Math.min(e3[1], e3[3])), a3 = Math.min(Math.max(t3[1], t3[3]), Math.max(e3[1], e3[3]));
        return n3 > a3 ? null : [i3, n3, s3, a3];
      }
      static #dr(t3, e3, i3, s3, n3, a3, r3, o3, l3, h3) {
        if (l3 <= 0 || l3 >= 1) return;
        const d3 = 1 - l3, c3 = l3 * l3, u3 = c3 * l3, p3 = d3 * (d3 * (d3 * t3 + 3 * l3 * e3) + 3 * c3 * i3) + u3 * s3, g3 = d3 * (d3 * (d3 * n3 + 3 * l3 * a3) + 3 * c3 * r3) + u3 * o3;
        h3[0] = Math.min(h3[0], p3);
        h3[1] = Math.min(h3[1], g3);
        h3[2] = Math.max(h3[2], p3);
        h3[3] = Math.max(h3[3], g3);
      }
      static #cr(t3, e3, i3, s3, n3, a3, r3, o3, l3, h3, d3, c3) {
        if (Math.abs(l3) < 1e-12) {
          Math.abs(h3) >= 1e-12 && this.#dr(t3, e3, i3, s3, n3, a3, r3, o3, -d3 / h3, c3);
          return;
        }
        const u3 = h3 ** 2 - 4 * d3 * l3;
        if (u3 < 0) return;
        const p3 = Math.sqrt(u3), g3 = 2 * l3;
        this.#dr(t3, e3, i3, s3, n3, a3, r3, o3, (-h3 + p3) / g3, c3);
        this.#dr(t3, e3, i3, s3, n3, a3, r3, o3, (-h3 - p3) / g3, c3);
      }
      static bezierBoundingBox(t3, e3, i3, s3, n3, a3, r3, o3, l3) {
        if (l3) {
          l3[0] = Math.min(l3[0], t3, r3);
          l3[1] = Math.min(l3[1], e3, o3);
          l3[2] = Math.max(l3[2], t3, r3);
          l3[3] = Math.max(l3[3], e3, o3);
        } else l3 = [Math.min(t3, r3), Math.min(e3, o3), Math.max(t3, r3), Math.max(e3, o3)];
        this.#cr(t3, i3, n3, r3, e3, s3, a3, o3, 3 * (3 * (i3 - n3) - t3 + r3), 6 * (t3 - 2 * i3 + n3), 3 * (i3 - t3), l3);
        this.#cr(t3, i3, n3, r3, e3, s3, a3, o3, 3 * (3 * (s3 - a3) - e3 + o3), 6 * (e3 - 2 * s3 + a3), 3 * (s3 - e3), l3);
        return l3;
      }
    }
    let x2 = null, T2 = null;
    function normalizeUnicode(t3) {
      if (!x2) {
        x2 = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
        T2 = /* @__PURE__ */ new Map([["\uFB05", "\u017Ft"]]);
      }
      return t3.replaceAll(x2, ((t4, e3, i3) => e3 ? e3.normalize("NFKC") : T2.get(i3)));
    }
    function getUuid() {
      if ("undefined" != typeof crypto && "function" == typeof crypto?.randomUUID) return crypto.randomUUID();
      const t3 = new Uint8Array(32);
      if ("undefined" != typeof crypto && "function" == typeof crypto?.getRandomValues) crypto.getRandomValues(t3);
      else for (let e3 = 0; e3 < 32; e3++) t3[e3] = Math.floor(255 * Math.random());
      return bytesToString(t3);
    }
    const S2 = "pdfjs_internal_id_", C2 = { BEZIER_CURVE_TO: 0, MOVE_TO: 1, LINE_TO: 2, QUADRATIC_CURVE_TO: 3, RESTORE: 4, SAVE: 5, SCALE: 6, TRANSFORM: 7, TRANSLATE: 8 };
  } };
  var a = {};
  function __webpack_require__(t2) {
    var e2 = a[t2];
    if (void 0 !== e2) return e2.exports;
    var i2 = a[t2] = { exports: {} };
    n[t2](i2, i2.exports, __webpack_require__);
    return i2.exports;
  }
  t = "function" == typeof Symbol ? /* @__PURE__ */ Symbol("webpack queues") : "__webpack_queues__", e = "function" == typeof Symbol ? /* @__PURE__ */ Symbol("webpack exports") : "__webpack_exports__", i = "function" == typeof Symbol ? /* @__PURE__ */ Symbol("webpack error") : "__webpack_error__", s = (t2) => {
    if (t2 && t2.d < 1) {
      t2.d = 1;
      t2.forEach(((t3) => t3.r--));
      t2.forEach(((t3) => t3.r-- ? t3.r++ : t3()));
    }
  }, __webpack_require__.a = (n2, a2, r2) => {
    var o2;
    r2 && ((o2 = []).d = -1);
    var l2, h2, d2, c2 = /* @__PURE__ */ new Set(), u2 = n2.exports, p2 = new Promise(((t2, e2) => {
      d2 = e2;
      h2 = t2;
    }));
    p2[e] = u2;
    p2[t] = (t2) => (o2 && t2(o2), c2.forEach(t2), p2.catch(((t3) => {
    })));
    n2.exports = p2;
    a2(((n3) => {
      l2 = ((n4) => n4.map(((n5) => {
        if (null !== n5 && "object" == typeof n5) {
          if (n5[t]) return n5;
          if (n5.then) {
            var a4 = [];
            a4.d = 0;
            n5.then(((t2) => {
              r4[e] = t2;
              s(a4);
            }), ((t2) => {
              r4[i] = t2;
              s(a4);
            }));
            var r4 = {};
            r4[t] = (t2) => t2(a4);
            return r4;
          }
        }
        var o3 = {};
        o3[t] = (t2) => {
        };
        o3[e] = n5;
        return o3;
      })))(n3);
      var a3, getResult = () => l2.map(((t2) => {
        if (t2[i]) throw t2[i];
        return t2[e];
      })), r3 = new Promise(((e2) => {
        (a3 = () => e2(getResult)).r = 0;
        var fnQueue = (t2) => t2 !== o2 && !c2.has(t2) && (c2.add(t2), t2 && !t2.d && (a3.r++, t2.push(a3)));
        l2.map(((e3) => e3[t](fnQueue)));
      }));
      return a3.r ? r3 : getResult();
    }), ((t2) => (t2 ? d2(p2[i] = t2) : h2(u2), s(o2))));
    o2 && o2.d < 0 && (o2.d = 0);
  };
  __webpack_require__.d = (t2, e2) => {
    for (var i2 in e2) __webpack_require__.o(e2, i2) && !__webpack_require__.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
  };
  __webpack_require__.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
  var __webpack_exports__ = __webpack_require__(228);
  var r = (__webpack_exports__ = globalThis.pdfjsLib = globalThis.pdfjsLibPromise = __webpack_exports__).AbortException;
  var o = __webpack_exports__.AnnotationEditorLayer;
  var l = __webpack_exports__.AnnotationEditorParamsType;
  var h = __webpack_exports__.AnnotationEditorType;
  var d = __webpack_exports__.AnnotationEditorUIManager;
  var c = __webpack_exports__.AnnotationLayer;
  var u = __webpack_exports__.AnnotationMode;
  var p = __webpack_exports__.CMapCompressionType;
  var g = __webpack_exports__.ColorPicker;
  var m = __webpack_exports__.DOMSVGFactory;
  var f = __webpack_exports__.DrawLayer;
  var b = __webpack_exports__.FeatureTest;
  var A = __webpack_exports__.GlobalWorkerOptions;
  var v = __webpack_exports__.ImageKind;
  var y = __webpack_exports__.InvalidPDFException;
  var E = __webpack_exports__.MissingPDFException;
  var w = __webpack_exports__.OPS;
  var _ = __webpack_exports__.Outliner;
  var x = __webpack_exports__.PDFDataRangeTransport;
  var T = __webpack_exports__.PDFDateString;
  var S = __webpack_exports__.PDFWorker;
  var C = __webpack_exports__.PasswordResponses;
  var M = __webpack_exports__.PermissionFlag;
  var P = __webpack_exports__.PixelsPerInch;
  var R = __webpack_exports__.RenderingCancelledException;
  var F = __webpack_exports__.UnexpectedResponseException;
  var k = __webpack_exports__.Util;
  var D = __webpack_exports__.VerbosityLevel;
  var I = __webpack_exports__.XfaLayer;
  var L = __webpack_exports__.build;
  var O = __webpack_exports__.createValidAbsoluteUrl;
  var N = __webpack_exports__.fetchData;
  var B = __webpack_exports__.getDocument;
  var H = __webpack_exports__.getFilenameFromUrl;
  var U = __webpack_exports__.getPdfFilenameFromUrl;
  var z = __webpack_exports__.getXfaPageViewport;
  var V = __webpack_exports__.isDataScheme;
  var j = __webpack_exports__.isPdfFile;
  var G = __webpack_exports__.noContextMenu;
  var $ = __webpack_exports__.normalizeUnicode;
  var W = __webpack_exports__.renderTextLayer;
  var q = __webpack_exports__.setLayerDimensions;
  var K = __webpack_exports__.shadow;
  var X = __webpack_exports__.updateTextLayer;
  var Y = __webpack_exports__.version;
})();
