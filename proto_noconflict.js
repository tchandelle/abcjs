// A few useful prototype elements so we don't have to load the whole thing.

if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t)
        fun.call(thisArg, t[i], i, t);
    }
  };
}

if (document.Prototype === undefined) {
	Object.clone = function(source) {
		var destination = {};
		for (var property in source)
			destination[property] = source[property];
		return destination;
	}

	Object.keys = function(object) {
		var keys = [];
		for (var property in object)
			if (object.hasOwnProperty(property))
				keys.push(property);
		return keys;
	};

	Array.prototype.clone = function(source) {
		var destination = [];
		for (var i = 0; i < source.length; i++)
			destination.push(source[i]);
		return destination;
	};

	String.prototype.gsub = function(pattern, replacement) {
		return this.split(pattern).join(replacement);
	};

	String.prototype.strip = function() {
		return this.replace(/^\s+/, '').replace(/\s+$/, '');
	};

	String.prototype.startsWith = function(pattern) {
		return this.indexOf(pattern) === 0;
	};

	String.prototype.endsWith = function(pattern) {
		var d = this.length - pattern.length;
		return d >= 0 && this.lastIndexOf(pattern) === d;
	};

	Array.prototype.each = function(iterator, context) {
		for (var i = 0, length = this.length; i < length; i++)
			iterator.apply(context, [this[i]]);
	};

	Array.prototype.last = function() {
		if (this.length === 0)
			return null;
		return this[this.length-1];
	}

	///////////////////////////////////////////////////////////////////////////////////////

	Ajax = {
		Updater: function() {},
		Request: function() {}
	}
}
