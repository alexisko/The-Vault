'use strict';
function vault() {
	var theVault = {};
  	function setValue(key, value) {
  		theVault[key] = value; //create new key and set value
  	}

  	function getValue(key) {
  		if(theVault[key]) { //key exists
  			return theVault[key];
  		}
  		return null; //key does not exist
  	}

  	return {
  		setValue: setValue,
  		getValue: getValue
  	};
};

//test cases
module.exports = vault;
var v = vault();

v.setValue('a', 1);
console.log(v.getValue('a')); //expected: 1
v.setValue('b', 2);
console.log(v.getValue('a')); //expected: 1
console.log(v.getValue('b')); //expected: 2

