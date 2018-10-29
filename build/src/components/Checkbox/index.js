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
var disabledStyle = 'o-30 pointer-events-none';
var inactiveStyle = 'o-50';
var defaultInputStyle = 'bw1 b--black';
var CheckSvg = function (_a) {
    var className = _a.className, style = _a.style;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 21.25 18.58", className: className, style: style },
        React.createElement("polygon", { points: "7.35 18.58 0 11.23 2.83 8.4 7.15 12.72 18.24 0 21.25 2.63 7.35 18.58", fill: "inherit" })));
};
export default function Checkbox(_a) {
    var _b, _c;
    var children = _a.children, svg = _a.svg, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.inputClassName, inputClassName = _e === void 0 ? '' : _e, _f = _a.style, style = _f === void 0 ? {} : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.checked, checked = _h === void 0 ? false : _h, _j = _a.onChange, onChange = _j === void 0 ? function (event) { } : _j, _k = _a.reset, reset = _k === void 0 ? false : _k, props = __rest(_a, ["children", "svg", "className", "inputClassName", "style", "disabled", "checked", "onChange", "reset"]);
    function handleChange(event) {
        onChange(event.currentTarget.checked);
    }
    var classes = classNames(className, 'flex items-center w-fit pointer', (_b = {},
        _b[disabledStyle] = disabled,
        _b[inactiveStyle] = !checked && !reset,
        _b));
    var inputClasses = classNames(inputClassName, 'absolute absolute--fill center input-reset outline-0 pointer', (_c = {},
        _c[defaultInputStyle] = !reset,
        _c));
    return (React.createElement("label", { style: style, className: classes },
        React.createElement("div", { className: "relative", style: {
                width: 18,
                minWidth: 18,
                height: 18,
                minHeight: 18,
            } },
            React.createElement("input", __assign({}, props, { className: "ba " + inputClasses, type: "checkbox", checked: checked, onChange: handleChange, style: {
                    width: 18,
                    height: 18,
                } })),
            checked &&
                (svg ? (svg) : (React.createElement(CheckSvg, { className: "absolute absolute--fill center m-auto pointer-events-none " + inputClasses, style: { width: 10, height: 10, fill: 'currentColor' } })))),
        children && React.createElement("div", { className: "ml2" }, children)));
}
//# sourceMappingURL=index.js.map