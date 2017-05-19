'use strict';
module.exports = function() {
	var _key;
	var _value;
  	function setValue(key, value) {
  		_key = key;
  		_value = value;
  	}

  	function getValue(key) {
  		if(_key) {
  			return _value;
  		}
  		return null;
  	}

  	return {
  		setValue: setValue,
  		getValue: getValue
  	};
};