// TODO - make import and change filename to Select.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import classNames from 'classnames';
import * as React from 'react';
import { InputDefaultProps } from '../../commons/interfaces';
var Scrollbars = require('react-custom-scrollbars').Scrollbars;
var omit = require('lodash').omit;
var disabledStyle = 'o-50 pointer-events-none';
var defaultStyle = 'b--black br1';
var defaultChildrenStyle = 'shadow-4 bg-white';
var DropdownSvg = function (_a) {
    var style = _a.style;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 4", style: style },
        React.createElement("polygon", { points: "0 0 8 0 4 4 0 0", fill: "inherit" })));
};
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { open: _this.props.open };
        _this.container = null;
        _this.setClose = function () { return _this.setState({ open: false }); };
        _this.setOpen = function () { return _this.setState({ open: true }); };
        _this.toogleOpen = function () { return _this.setState({ open: !_this.state.open }); };
        _this.handleClick = function (event) {
            _this.toogleOpen();
            _this.props.onClick(event);
        };
        _this.handleOutsideClick = function (event) {
            if (!(event.target instanceof Element) || // https://stackoverflow.com/a/50326668
                _this.container.contains(event.target))
                return;
            _this.setClose();
        };
        return _this;
    }
    Select.prototype.componentDidMount = function () {
        document.body.addEventListener('mouseup', this.handleOutsideClick, {
            passive: true,
        });
        document.body.addEventListener('touchend', this.handleOutsideClick, {
            passive: true,
        });
    };
    Select.prototype.componentWillUnmount = function () {
        document.body.removeEventListener('mouseup', this.handleOutsideClick);
        document.body.removeEventListener('touchend', this.handleOutsideClick);
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var _c = this.props, children = _c.children, className = _c.className, childrenClassName = _c.childrenClassName, style = _c.style, label = _c.label, scrollable = _c.scrollable, autoclose = _c.autoclose, disabled = _c.disabled, reset = _c.reset;
        var open = this.state.open;
        var classes = classNames(className, 'flex justify-between items-center pointer pa2 ba', (_a = {},
            _a[disabledStyle] = disabled,
            _a[defaultStyle] = !reset,
            _a));
        var childrenClasses = classNames(childrenClassName, 'absolute z-5', (_b = {
                "dn": !open,
                'w-100': scrollable,
                "h5": open && scrollable
            },
            _b[defaultChildrenStyle] = !reset,
            _b));
        var props = omit(this.props, Object.keys(Select.defaultProps));
        return (React.createElement("div", __assign({}, props, { ref: function (el) {
                _this.container = el;
            }, className: "relative" }),
            React.createElement("div", { onClick: this.handleClick, className: classes, style: style },
                React.createElement("span", null, label),
                React.createElement("div", { className: "ml3 " + (open ? 'rotate-180' : '') },
                    React.createElement(DropdownSvg, { style: { width: 10, height: 10, fill: 'currentColor' } }))),
            React.createElement("div", { className: childrenClasses }, scrollable ? (React.createElement(Scrollbars, { className: "h-100" }, React.Children.map(children, function (child, i) {
                return (React.createElement("div", { key: i, onClick: autoclose ? _this.setClose : null }, child));
            }))) : (React.Children.map(children, function (child, i) {
                return (React.createElement("div", { key: i, onClick: autoclose ? _this.setClose : null }, child));
            })))));
    };
    Select.defaultProps = __assign({}, InputDefaultProps, { autoclose: true });
    return Select;
}(React.Component));
export default Select;
//# sourceMappingURL=index.js.map