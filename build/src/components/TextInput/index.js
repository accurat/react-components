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
var defaultStyle = 'b--black black bg-white';
var handleChange = function (onChange, checkValidity) { return function (event) {
    onChange(event);
    checkValidity(event.target.checkValidity());
}; };
export default function TextInput(_a) {
    var _b;
    var value = _a.value, defaultValue = _a.defaultValue, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.type, type = _e === void 0 ? 'text' : _e, _f = _a.onChange, onChange = _f === void 0 ? function (event) { } : _f, _g = _a.checkValidity, checkValidity = _g === void 0 ? function (condition) { return true; } : _g, _h = _a.reset, reset = _h === void 0 ? false : _h, _j = _a.disabled, disabled = _j === void 0 ? false : _j, props = __rest(_a, ["value", "defaultValue", "className", "style", "type", "onChange", "checkValidity", "reset", "disabled"]);
    var classes = classNames(className, 'pa2 ba input-reset outline-transparent', (_b = {},
        _b[disabledStyle] = disabled,
        _b[defaultStyle] = !reset,
        _b));
    return (React.createElement("input", __assign({}, props, { className: classes, 
        // fontFamily: inherit is an issue with normalize.css,
        // it sets `font-family: sans-serif;` to every input/button
        style: __assign({}, style, { font: 'inherit' }), type: type, value: value, defaultValue: defaultValue, disabled: disabled, onChange: handleChange(onChange, checkValidity) })));
}
//# sourceMappingURL=index.js.map