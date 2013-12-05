"use strict";

module.exports.create = function (options){
	return new Formatter (options);
};

var Formatter = function (options){
	options = options || {};
	this._complete = options.complete || "#";
	this._incomplete = options.incomplete || "·";
	this._length = options.length || 24;
};

Formatter.prototype.format = function (n){
	var bar = "";
	var percentage = n === 1 ? "100" : " " + Math.round (n*100);
	var complete = Math.round (this._length*n);
	for (var i=0, ii=complete; i<ii; i++){
		bar += this._complete;
	}
	for (var i=0, ii=this._length-complete; i<ii; i++){
		bar += this._incomplete;
	}
	return bar;
};