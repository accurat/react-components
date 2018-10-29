var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import classNames from 'classnames';
import * as React from 'react';
export default function FlexView(_a) {
    var children = _a.children, column = _a.column, vAlign = _a.vAlign, hAlign = _a.hAlign, grow = _a.grow, shrink = _a.shrink, basis = _a.basis, wrap = _a.wrap, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.style, style = _c === void 0 ? {} : _c, props = __rest(_a, ["children", "column", "vAlign", "hAlign", "grow", "shrink", "basis", "wrap", "className", "style"]);
    function getGrow() {
        if (grow === undefined) {
            return 0;
        }
        return typeof grow === 'number' ? grow : 1; // default is 0
    }
    function getShrink() {
        if (shrink !== undefined) {
            // shrink is passed
            if (typeof shrink === 'number') {
                return shrink;
            }
            else {
                return shrink ? 1 : 0; // casts boolean -> number
            }
        }
        else {
            // no shrink is passed
            return basis && basis !== 'auto' ? 0 : 1;
        } // default is 1
    }
    function getBasis() {
        if (basis) {
            var suffix = typeof basis === 'number' || String(parseInt(basis, 10)) ? 'px' : '';
            return basis + suffix;
        }
        else {
            return 'auto'; // default is auto
        }
    }
    function getFlexStyle() {
        var grow = getGrow();
        var shrink = getShrink();
        var basis = getBasis();
        var values = grow + " " + shrink + " " + basis;
        return {
            WebkitBoxFlex: values,
            MozBoxFlex: values,
            msFlex: values,
            WebkitFlex: values,
            flex: values,
        };
    }
    function getStyle() {
        return __assign({}, getFlexStyle(), style);
    }
    function getContentAlignmentClasses() {
        var vAlignClasses = column
            ? {
                top: 'justify-start',
                center: 'justify-center',
                bottom: 'justify-end',
                between: 'justify-between',
                around: 'justify-around',
            }
            : {
                top: 'items-start',
                center: 'items-center',
                bottom: 'items-end',
                baseline: 'items-baseline',
                stretch: 'items-stretch',
            };
        var hAlignClasses = column
            ? {
                left: 'items-start',
                center: 'items-center',
                right: 'items-end',
                baseline: 'items-baseline',
                stretch: 'items-stretch',
            }
            : {
                left: 'justify-start',
                center: 'justify-center',
                right: 'justify-end',
                between: 'justify-between',
                around: 'justify-around',
            };
        var vAlignClassObject = vAlign && vAlignClasses[vAlign];
        var hAlignClassObject = hAlign && hAlignClasses[hAlign];
        return classNames(vAlignClassObject, hAlignClassObject);
    }
    function getClasses() {
        var direction = column && 'flex-column';
        var wrapClassName = wrap && 'flex-wrap';
        var contentAlignment = getContentAlignmentClasses();
        return classNames('flex', direction, contentAlignment, wrapClassName, className);
    }
    // TODO - can you pass other props?
    return (React.createElement("div", { className: getClasses(), style: getStyle() }, children));
}
//# sourceMappingURL=index.js.map