// ---------------------------------------------------------------------
// | switch localstorage api v1.0.0                                    |
//                                                                     |
// Requirements:                                                       |
// Zen-Observable v0.5.2+                                              |
// localForage v1.5.0+                                                 |
// localForage-observable v1.3.0+                                      |
// ---------------------------------------------------------------------


// LocalForage init
localforage.config({
	name: 'ricohApp',
	driver: [localforage.LOCALSTORAGE]
});
// clear all storage on page load for testing purposes
// localforage.clear();


jQuery(document).ready(function($) {


	localforage.ready(function() {


		// observe changes to app local storage
		// uncomment for testing to watch items change in local storage
		// var observable = localforage.newObservable();
		// var subscription = observable.subscribe({
		// 	next: function(args) {
		// 		console.log('observable', args);
		// 	},
		// 	error: function(err) {
		// 		console.log('observable error', err);
		// 	},
		// 	complete: function() {
		// 		console.log('observable destroyed');
		// 	}
		// });


		// localforage check if key exists and set if not
		// used on component init when you don't want a components state to reset on page load - reset with checkTimestamp
		window.setCompState = function(data, callback) {
			if (data) {
				var key = data;
				localforage.getItem(key).then(function(value) {
					if (!value) {
						callback(key);
						// console.log(key + ' not found');
					} else {
						checkTimestamp({ key: data, value: 'timestamp' });
						// console.log('setCompState - key found');
					}
				});
			}
		};
		// Example usage:
		// setCompState(foo, function() {
		// 	var compData = [];
		// 	var compKey;
		// 	var compValues;
		// 	compData = [{
		// 		checked: 'false',
		// 		id: foo,
		// 		name: bar,
		// 		timestamp: Math.floor(Date.now() / 1000),
		// 		type: 'product'
		// 	}];
		// 	compKey = compData[0].id;
		// 	compValues = compData[0];
		// 	storeKeyValue({ key: compKey, value: compValues });
		// });


		// localforage check timestamp
		// used to check the age of a local storage key - included as part of setCompState
		window.checkTimestamp = function(data) {
			if (data.key && data.value) {
				var key = data.key;
				var value = data.value;
				var now = Math.floor(Date.now() / 1000);
				localforage.getItem(key).then(function(value) {
					var timeout = (now - value.timestamp);
					// console.log(timeout);
					// set number below to expirery value in seconds e.g., 86400 for 1 day
					if (timeout > 86400) {
						deleteKey(key);
						// console.log('checkTimestamp - expire');
					} else {
						// console.log('checkTimestamp - dont expire');
						return;
					}
				});
			}
		};
		// Example usage:
		// checkTimestamp({ key: foo, value: 'timestamp'});


		// localforage store key value
		// used to store a key value usually as part of another function or component init
		window.storeKeyValue = function(data) {
			if (data.key && data.value) {
				key = data.key;
				value = data.value;
				localforage.setItem(key, value);
				// console.log(key + ' ' + JSON.stringify(data.value) + ' stored');
			}
		};
		// Example usage:
		// (function setCompState() {
		// 	var compData = [];
		// 	var compKey;
		// 	var compValues;
		// 	compData = [{
		// 		name: 'foo',
		// 		playing: 'true'
		// 	}];
		// 	compKey = compData[0].name;
		// 	compValues = compData[0];
		// 	storeKeyValue({ key: compKey, value: compValues });
		// }());


		// localforage delete key
		// used to remove an entire key and all it's values
		window.deleteKey = function(data) {
			if (data) {
				key = data;
				localforage.removeItem(key);
				// console.log(key + ' deleted');
			}
		};
		// Example usage:
		// deleteKey('foo');


		// localforage get key
		// used to get and set a value to a key
		window.getKey = function(data, callback) {
			if (data) {
				var key = data;
				// console.log(data);
				localforage.getItem(key).then(function(value) {
					if (value) {
						callback(key);
						// console.log(key + ' found');
					}
				});
			}
		};
		// Example usage:
		// getKey('foo', function() {
		// 	value.bar = 'false';
		// 	storeKeyValue({ key: key, value: value });
		// });


		// localforage get value
		// used to check current value state
		window.getValue = function(data, callback) {
			if (data.key && data.value) {
				var key = data.key;
				var value = data.value;
				localforage.getItem(key).then(function(value) {
					if (value) {
						callback(value);
						// console.log(data.value + ' found');
					}
				});
			}
		};
		// Example usage:
		// getValue({ key: 'foo', value: 'bar' }, function(value) {
		// 	if (value.bar == 'false') {
		// 		// do something
		// 	}
		// });


	});


});
