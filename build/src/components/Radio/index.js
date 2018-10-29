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
var defaultInputStyle = 'bw1 b--black bg-black outline-transparent';
export default function Radio(_a) {
    var _b, _c;
    var children = _a.children, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.inputClassName, inputClassName = _e === void 0 ? '' : _e, _f = _a.style, style = _f === void 0 ? {} : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.checked, checked = _h === void 0 ? false : _h, _j = _a.onChange, onChange = _j === void 0 ? function (event) { } : _j, _k = _a.reset, reset = _k === void 0 ? false : _k, props = __rest(_a, ["children", "className", "inputClassName", "style", "disabled", "checked", "onChange", "reset"]);
    function handleChange(event) {
        onChange(event.currentTarget.checked);
    }
    var classes = classNames(className, 'flex items-center w-fit pointer', (_b = {},
        _b[disabledStyle] = disabled,
        _b[inactiveStyle] = !checked && !reset,
        _b));
    var inputClasses = classNames(inputClassName, 'absolute absolute--fill center ba', (_c = {},
        _c[defaultInputStyle] = !reset,
        _c));
    return (React.createElement("label", { className: classes, style: style },
        React.createElement("div", { className: "relative", style: {
                width: 18,
                minWidth: 18,
                height: 18,
                minHeight: 18,
            } },
            React.createElement("input", __assign({}, props, { className: inputClasses + " input-reset br-100 pointer", type: "radio", checked: checked, onChange: handleChange, style: {
                    width: 18,
                    height: 18,
                    // This is here to override the custom `bg-something` you can pass to the input,
                    // since it will affect also the circle on the inside
                    backgroundColor: 'white',
                } })),
            checked && (React.createElement("div", { className: inputClasses + " z-5 m-auto br-100", style: {
                    width: 10,
                    height: 10,
                } }))),
        children && React.createElement("div", { className: "ml2 pointer" }, children)));
}
//# sourceMappingURL=index.js.map