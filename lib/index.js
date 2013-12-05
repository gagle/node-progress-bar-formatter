"use strict";

module.exports.create = function (options){
	return new Formatter (options);
};

var Formatter = function (options){
	options = options || {};
	this._complete = options.complete || "#";
	this._incomplete = options.incomplete || "-";
	this._length = options.length || 31;
};

Formatter.prototype.format = function (n){
	var barLength = this._length - 7;
	var bar = "";
	var percentage = n === 1 ? "100" : " " + Math.round (n*100);
	var complete = Math.round (barLength*n);
	for (var i=0, ii=complete; i<ii; i++){
		bar += this._complete;
	}
	for (var i=0, ii=barLength-complete; i<ii; i++){
		bar += this._incomplete;
	}
	return "[" + bar + "] " + percentage + "%";
};