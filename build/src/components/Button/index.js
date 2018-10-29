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
var disabledStyle = 'o-50 pointer-events-none';
var defaultStyle = 'ph3 pv1 br1 bg-black white b--none';
var transparentStyle = 'ph3 pv1 br1 bg-transparent black ba bw1 b--black';
export default function Button(_a) {
    var _b;
    var children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.transparent, transparent = _d === void 0 ? false : _d, _e = _a.reset, reset = _e === void 0 ? false : _e, _f = _a.className, className = _f === void 0 ? '' : _f, _g = _a.style, style = _g === void 0 ? {} : _g, _h = _a.onClick, onClick = _h === void 0 ? function (event) { } : _h, _j = _a.type, type = _j === void 0 ? 'button' : _j, props = __rest(_a, ["children", "disabled", "transparent", "reset", "className", "style", "onClick", "type"]);
    var classes = classNames(className, 'flex justify-center items-center pointer outline-transparent', (_b = {},
        _b[disabledStyle] = disabled,
        _b[transparentStyle] = transparent && !reset,
        _b[defaultStyle] = !transparent && !reset,
        _b));
    return (React.createElement("button", __assign({}, props, { disabled: disabled, className: classes, style: style, onClick: onClick, type: type }), children));
}
//# sourceMappingURL=index.js.map