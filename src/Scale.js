/* global exports */
"use strict"

exports.d3IdentityScaleFn = function() { return d3.scaleIdentity(); }
exports.d3LinearScaleFn   = function() { return d3.scaleLinear(); }
exports.d3LogScaleFn      = function() { return d3.scaleLog(); }
exports.d3PowerScaleFn    = function() { return d3.scalePow(); }
exports.d3TimeScaleFn     = function() { return d3.scaleTime(); }

exports.d3BandScaleFn     = function()       { return d3.scaleBand(); }
exports.d3PointScaleFn    = function()       { return d3.scalePoint(); }
exports.d3CategoryScaleFn = function(scheme) { return d3.scaleCategory(scheme); }

exports.rangeRoundFn      = function(start, end, scale)    { return scale.rangeRound([start, end]); }