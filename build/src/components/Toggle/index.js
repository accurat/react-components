import classNames from 'classnames';
import * as React from 'react';
var disabledStyle = 'o-30 pointer-events-none';
var inactiveStyle = 'o-50';
export default function Toogle(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.inputClassName, inputClassName = _c === void 0 ? '' : _c, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.checked, checked = _f === void 0 ? false : _f, _g = _a.onChange, onChange = _g === void 0 ? function (event) { } : _g, _h = _a.reset, reset = _h === void 0 ? false : _h;
    var _j, _k;
    function handleChange(event) {
        onChange(event.currentTarget.checked);
    }
    var classes = classNames('flex flex-row justify-start items-center w-fit pointer', (_j = {},
        _j[disabledStyle] = disabled,
        _j[inactiveStyle] = !checked,
        _j[className] = className,
        _j));
    var inputClasses = classNames('relative br4 bg-black', (_k = {},
        _k[inputClassName] = inputClassName,
        _k));
    return (React.createElement("label", { style: style, className: classes },
        React.createElement("div", { className: inputClasses, style: {
                height: 20,
                width: 38,
                minHeight: 20,
                minWidth: 38,
            } },
            React.createElement("input", { className: "absolute top-0 left-0 o-0 pointer", type: "checkbox", checked: checked, onChange: handleChange, style: {
                    width: 38,
                    height: 20,
                } }),
            React.createElement("div", { className: "absolute center-vertical bg-white br-100 top-0 bottom-0 pointer-events-none", style: {
                    width: 16,
                    height: 16,
                    transition: 'left 0.2s',
                    left: checked ? 20 : 2,
                } })),
        children && React.createElement("div", { className: "ml2 pointer" }, children)));
}
//# sourceMappingURL=index.js.map