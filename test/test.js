"use strict";

var expect = require("chai").expect;
var typeOf = require("../index");

describe("#typeOf", function() {
	it('should return "string"', function() {
		expect(typeOf(String(""))).to.equal("string");
	});

	it('should return "null"', function() {
		expect(typeOf(null)).to.equal("null");
	});

	it('should return "array"', function() {
		expect(typeOf([])).to.equal("array");
	});

	it('should return "number"', function() {
		expect(typeOf(Number(123))).to.equal("number");
	});

	it('should return "undefined"', function() {
		expect(typeOf(undefined)).to.equal("undefined");
	});

	it('should return "object"', function() {
		expect(typeOf({})).to.equal("object");
	});

	it('should return "function"', function() {
		expect(typeOf(function() {})).to.equal("function");
	});
});
