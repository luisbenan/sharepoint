(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Searchable Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Jean-Pierre Sierens
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	===========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SearchableTable = function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		// Initial state of the component
		var _this = _possibleConstructorReturn(this, (SearchableTable.__proto__ || Object.getPrototypeOf(SearchableTable)).call(this));

		_this.state = { filterText: '' };
		return _this;
	}

	_createClass(SearchableTable, [{
		key: 'handleUserInput',
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2.default.createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
}(_react2.default.Component);

exports.default = SearchableTable;

var SearchBar = function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				null,
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'Search for one keyword...',
					ref: 'filterTextInput',
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

var Table = function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach(function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2.default.createElement(Section, { key: product.name, data: product }));
			}.bind(this));
			return _react2.default.createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
}(_react2.default.Component);

var Section = function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.data.name,
					' = ',
					this.props.data.price,
					' '
				)
			);
		}
	}]);

	return Section;
}(_react2.default.Component);

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchableTable = require('./SearchableTable');

var _SearchableTable2 = _interopRequireDefault(_SearchableTable);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Filterable CheatSheet Component
/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

_reactDom2.default.render(_react2.default.createElement(_SearchableTable2.default, { data: _data.data }), document.getElementById('searchableTable'));

},{"./SearchableTable":1,"./data":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvU2VhcmNoYWJsZVRhYmxlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNNQTs7Ozs7Ozs7OzsrZUFOQTs7Ozs7O0lBUXFCLGU7OztBQUNwQiw0QkFBYztBQUFBOztBQUViO0FBRmE7O0FBR1AsUUFBSyxLQUFMLEdBQWEsRUFBQyxZQUFZLEVBQWIsRUFBYjtBQUhPO0FBSVY7Ozs7a0NBQ2UsVSxFQUFZO0FBQzNCO0FBQ0E7QUFDRyxRQUFLLFFBQUwsQ0FBYyxFQUFDLFlBQVksVUFBYixFQUFkO0FBQ0g7OzsyQkFDSTtBQUNQLFVBQ0M7QUFBQTtBQUFBO0FBQ0Msa0NBQUMsU0FBRDtBQUNDLGlCQUFZLEtBQUssS0FBTCxDQUFXLFVBRHhCO0FBRWdCLGtCQUFhLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQjtBQUY3QixNQUREO0FBS0Msa0NBQUMsS0FBRDtBQUNDLFdBQU0sS0FBSyxLQUFMLENBQVcsSUFEbEI7QUFFQyxpQkFBWSxLQUFLLEtBQUwsQ0FBVztBQUZ4QjtBQUxELElBREQ7QUFZQTs7OztFQXhCMkMsZ0JBQU0sUzs7a0JBQTlCLGU7O0lBMkJmLFM7Ozs7Ozs7Ozs7O2lDQUNVO0FBQ2Q7QUFDTSxRQUFLLEtBQUwsQ0FBVyxXQUFYO0FBQ0M7QUFDRyxRQUFLLElBQUwsQ0FBVSxlQUFWLENBQTBCLEtBRjlCO0FBSUg7OzsyQkFDSTtBQUNQLFVBQ1U7QUFBQTtBQUFBO0FBQ0k7QUFDQyxXQUFLLE1BRE47QUFFQyxrQkFBWSwyQkFGYjtBQUdDLFVBQUksaUJBSEw7QUFJQyxZQUFRLEtBQUssS0FBTCxDQUFXLFVBSnBCO0FBS0MsZUFBVyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkI7QUFMWjtBQURKLElBRFY7QUFXQTs7OztFQXBCc0IsZ0JBQU0sUzs7SUF1QnhCLEs7Ozs7Ozs7Ozs7OzJCQUNHO0FBQ1AsT0FBSSxXQUFXLEVBQWY7QUFDQSxPQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBdEI7QUFDQSxRQUFLLE9BQUwsQ0FBYSxVQUFTLE9BQVQsRUFBaUI7QUFDN0IsUUFBSSxRQUFRLElBQVIsQ0FBYSxPQUFiLENBQXFCLEtBQUssS0FBTCxDQUFXLFVBQWhDLE1BQWdELENBQUMsQ0FBckQsRUFBd0Q7QUFDdkQ7QUFDQTtBQUNELGFBQVMsSUFBVCxDQUFjLDhCQUFDLE9BQUQsSUFBUyxLQUFLLFFBQVEsSUFBdEIsRUFBNEIsTUFBTSxPQUFsQyxHQUFkO0FBQ0EsSUFMWSxDQUtYLElBTFcsQ0FLTixJQUxNLENBQWI7QUFNQSxVQUNDO0FBQUE7QUFBQTtBQUFNO0FBQU4sSUFERDtBQUdBOzs7O0VBYmtCLGdCQUFNLFM7O0lBZ0JwQixPOzs7Ozs7Ozs7OzsyQkFDRztBQUNQLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUksVUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFwQjtBQUFBO0FBQTZCLFVBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBN0M7QUFBQTtBQUFBO0FBREQsSUFERDtBQUtBOzs7O0VBUG9CLGdCQUFNLFM7Ozs7O0FDckU1Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBO0FBVkE7Ozs7O0FBV0EsbUJBQVMsTUFBVCxDQUFpQiw4QkFBQyx5QkFBRCxJQUFpQixNQUFNLFVBQXZCLEdBQWpCLEVBQWlELFNBQVMsY0FBVCxDQUF3QixpQkFBeEIsQ0FBakQ7Ozs7Ozs7O0FDWE8sSUFBTSxzQkFBTyxDQUNsQixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxRQUFwQyxFQUE4QyxTQUFTLElBQXZELEVBQTZELE1BQU0sVUFBbkUsRUFEa0IsRUFFbEIsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sT0FBcEMsRUFBNkMsU0FBUyxJQUF0RCxFQUE0RCxNQUFNLFVBQWxFLEVBRmtCLEVBR2xCLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLFFBQXBDLEVBQThDLFNBQVMsS0FBdkQsRUFBOEQsTUFBTSxZQUFwRSxFQUhrQixFQUlsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFFBQWpDLEVBQTJDLFNBQVMsSUFBcEQsRUFBMEQsTUFBTSxZQUFoRSxFQUprQixFQUtsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsS0FBckQsRUFBNEQsTUFBTSxVQUFsRSxFQUxrQixFQU1sQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsSUFBckQsRUFBMkQsTUFBTSxTQUFqRSxFQU5rQixDQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcbipcdFNlYXJjaGFibGUgVGFibGVcbipcdEF1dGhvcjogSmVhbi1QaWVycmUgU2llcmVuc1xuKlx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hhYmxlVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdC8vIEluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAgICB0aGlzLnN0YXRlID0ge2ZpbHRlclRleHQ6ICcnfVxuICAgIH1cbiAgICBoYW5kbGVVc2VySW5wdXQoZmlsdGVyVGV4dCkge1xuICAgIFx0Ly8gV2hlbiB0aGVyZSdzIGEgY2hhbmdlIGluIHRoZSBzdGF0ZSwgdGhlIGNvbXBvbmVudCBhbmQgYWxsIGl0c1xuICAgIFx0Ly8gc3ViLWNvbXBvbmVudHMgZ2V0IHVwZGF0ZWQuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclRleHQ6IGZpbHRlclRleHR9KTtcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8U2VhcmNoQmFyXG5cdFx0XHRcdFx0ZmlsdGVyVGV4dD17dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuXHRcdFx0XHQ8VGFibGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG5cdFx0XHRcdFx0ZmlsdGVyVGV4dD17dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRoYW5kbGVDaGFuZ2UoKSB7XG5cdFx0Ly8gcGFzc2luZyBmaWx0ZXIgZGF0YSB1cCBieSB1c2luZyBhIGNhbGxiYWNrXG4gICAgICAgIHRoaXMucHJvcHMub25Vc2VySW5wdXQoXG4gICAgICAgIFx0Ly8gcmVmIGlzIGxpa2UgdGhlIGlkXG4gICAgICAgICAgICB0aGlzLnJlZnMuZmlsdGVyVGV4dElucHV0LnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgXHR0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgXHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3Igb25lIGtleXdvcmQuLi5cIlxuICAgICAgICAgICAgICAgIFx0cmVmPVwiZmlsdGVyVGV4dElucHV0XCJcbiAgICAgICAgICAgICAgICBcdHZhbHVlPSB7dGhpcy5wcm9wcy5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgIFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG5cdH1cbn1cblxuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRsZXQgc2VjdGlvbnMgPSBbXTtcblx0XHRsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24ocHJvZHVjdCl7XG5cdFx0XHRpZiAocHJvZHVjdC5uYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXJUZXh0KSA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2VjdGlvbnMucHVzaCg8U2VjdGlvbiBrZXk9e3Byb2R1Y3QubmFtZX0gZGF0YT17cHJvZHVjdH0gLz4pO1xuXHRcdH0uYmluZCh0aGlzKSlcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PntzZWN0aW9uc308L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5kYXRhLm5hbWV9ID0ge3RoaXMucHJvcHMuZGF0YS5wcmljZX0gPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIiwiLypcbipcdEF1dGhvcjogSmVhbi1QaWVycmUgU2llcmVuc1xuKlx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgU2VhcmNoYWJsZVRhYmxlIGZyb20gJy4vU2VhcmNoYWJsZVRhYmxlJztcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi9kYXRhJztcblxuLy8gRmlsdGVyYWJsZSBDaGVhdFNoZWV0IENvbXBvbmVudFxuUmVhY3RET00ucmVuZGVyKCA8U2VhcmNoYWJsZVRhYmxlIGRhdGE9e2RhdGF9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hhYmxlVGFibGUnKSApO1xuIiwiZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkNDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJGb290YmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQ5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiQmFzZWJhbGxcIn0sXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkMjkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiQmFza2V0YmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQ5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcImlQb2QgVG91Y2hcIn0sXG4gIHtjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiLCBwcmljZTogXCIkMzk5Ljk5XCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcImlQaG9uZSA1XCJ9LFxuICB7Y2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDE5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIk5leHVzIDdcIn1cbl07XG4iXX0=
