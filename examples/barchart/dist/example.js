(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by psc-bundle 0.9.2
var PS = {};
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var Control_Category = PS["Control.Category"];
  var applyFlipped = function (x) {
      return function (f) {
          return f(x);
      };
  };
  exports["applyFlipped"] = applyFlipped;
})(PS["Data.Function"] = PS["Data.Function"] || {});
(function(exports) {
    "use strict";

  // module Data.Unit

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
    "use strict";

  exports.showNumberImpl = function (n) {
    var str = n.toString();
    return isNaN(str + ".0") ? str : str + ".0";
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Data.Show"];     
  var Show = function (show) {
      this.show = show;
  };                                                 
  var showNumber = new Show($foreign.showNumberImpl);
  var show = function (dict) {
      return dict.show;
  };
  exports["Show"] = Show;
  exports["show"] = show;
  exports["showNumber"] = showNumber;
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Data.Unit"];
  var Data_Show = PS["Data.Show"];
  exports["unit"] = $foreign.unit;
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Data.Functor"];
  var Data_Function = PS["Data.Function"];
  var Data_Unit = PS["Data.Unit"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];        
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  exports["Functor"] = Functor;
  exports["map"] = map;
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Function = PS["Data.Function"];
  var Control_Category = PS["Control.Category"];        
  var Apply = function (__superclass_Data$dotFunctor$dotFunctor_0, apply) {
      this["__superclass_Data.Functor.Functor_0"] = __superclass_Data$dotFunctor$dotFunctor_0;
      this.apply = apply;
  };                      
  var apply = function (dict) {
      return dict.apply;
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Applicative = function (__superclass_Control$dotApply$dotApply_0, pure) {
      this["__superclass_Control.Apply.Apply_0"] = __superclass_Control$dotApply$dotApply_0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative["__superclass_Control.Apply.Apply_0"]())(pure(dictApplicative)(f))(a);
          };
      };
  };
  exports["Applicative"] = Applicative;
  exports["liftA1"] = liftA1;
  exports["pure"] = pure;
})(PS["Control.Applicative"] = PS["Control.Applicative"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Control.Bind"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];        
  var Bind = function (__superclass_Control$dotApply$dotApply_0, bind) {
      this["__superclass_Control.Apply.Apply_0"] = __superclass_Control$dotApply$dotApply_0;
      this.bind = bind;
  };                     
  var bind = function (dict) {
      return dict.bind;
  };
  exports["Bind"] = Bind;
  exports["bind"] = bind;
})(PS["Control.Bind"] = PS["Control.Bind"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Functor = PS["Data.Functor"];        
  var Monad = function (__superclass_Control$dotApplicative$dotApplicative_0, __superclass_Control$dotBind$dotBind_1) {
      this["__superclass_Control.Applicative.Applicative_0"] = __superclass_Control$dotApplicative$dotApplicative_0;
      this["__superclass_Control.Bind.Bind_1"] = __superclass_Control$dotBind$dotBind_1;
  };
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad["__superclass_Control.Bind.Bind_1"]())(f)(function (v) {
                  return Control_Bind.bind(dictMonad["__superclass_Control.Bind.Bind_1"]())(a)(function (v1) {
                      return Control_Applicative.pure(dictMonad["__superclass_Control.Applicative.Applicative_0"]())(v(v1));
                  });
              });
          };
      };
  };
  exports["Monad"] = Monad;
  exports["ap"] = ap;
})(PS["Control.Monad"] = PS["Control.Monad"] || {});
(function(exports) {
    "use strict";

  // module Control.Monad.Eff

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Control.Monad.Eff"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var monadEff = new Control_Monad.Monad(function () {
      return applicativeEff;
  }, function () {
      return bindEff;
  });
  var bindEff = new Control_Bind.Bind(function () {
      return applyEff;
  }, $foreign.bindE);
  var applyEff = new Control_Apply.Apply(function () {
      return functorEff;
  }, Control_Monad.ap(monadEff));
  var applicativeEff = new Control_Applicative.Applicative(function () {
      return applyEff;
  }, $foreign.pureE);
  var functorEff = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEff));
  exports["functorEff"] = functorEff;
  exports["applyEff"] = applyEff;
  exports["applicativeEff"] = applicativeEff;
  exports["bindEff"] = bindEff;
  exports["monadEff"] = monadEff;
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["D3.Base"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Array = PS["Data.Array"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Foreign_Null = PS["Data.Foreign.Null"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];
  var Data_Show = PS["Data.Show"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data = (function () {
      function Data(value0) {
          this.value0 = value0;
      };
      Data.create = function (value0) {
          return new Data(value0);
      };
      return Data;
  })();
  var Keyed = (function () {
      function Keyed(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Keyed.create = function (value0) {
          return function (value1) {
              return new Keyed(value0, value1);
          };
      };
      return Keyed;
  })();
  var Value = (function () {
      function Value(value0) {
          this.value0 = value0;
      };
      Value.create = function (value0) {
          return new Value(value0);
      };
      return Value;
  })();
  var SetByIndex = (function () {
      function SetByIndex(value0) {
          this.value0 = value0;
      };
      SetByIndex.create = function (value0) {
          return new SetByIndex(value0);
      };
      return SetByIndex;
  })();
  var SetAttr = (function () {
      function SetAttr(value0) {
          this.value0 = value0;
      };
      SetAttr.create = function (value0) {
          return new SetAttr(value0);
      };
      return SetAttr;
  })();
  var AttrFn = (function () {
      function AttrFn(value0) {
          this.value0 = value0;
      };
      AttrFn.create = function (value0) {
          return new AttrFn(value0);
      };
      return AttrFn;
  })();
  exports["SetAttr"] = SetAttr;
  exports["AttrFn"] = AttrFn;
  exports["Data"] = Data;
  exports["Keyed"] = Keyed;
  exports["Value"] = Value;
  exports["SetByIndex"] = SetByIndex;
})(PS["D3.Base"] = PS["D3.Base"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // constructors - continuous scales
  exports.d3IdentityScaleFn = function() { return d3.scaleIdentity(); }
  exports.d3LinearScaleFn   = function() { return d3.scaleLinear(); }
  exports.d3LogScaleFn      = function() { return d3.scaleLog(); }
  exports.d3PowerScaleFn    = function() { return d3.scalePow(); }
  exports.d3TimeScaleFn     = function() { return d3.scaleTime(); }

  // constructors - ordinal scales
  exports.d3BandScaleFn     = function()       { return d3.scaleBand(); }
  exports.d3PointScaleFn    = function()       { return d3.scalePoint(); }
  exports.d3CategoryScaleFn = function(scheme) { return d3.scaleCategory(scheme); }

  // constructors - QuantizeScale
  exports.d3QuantizeScaleFn  = function()      { return d3.scaleQuantize(); }
  exports.d3QuantileScaleFn  = function()      { return d3.scaleQuantile(); }
  exports.d3ThresholdScaleFn = function()      { return d3.ScaleThreshold(); }                      //  a dark-to-light, rotating-hue color scheme.

  // functions on scales (not all applicable to all scale types however)
  exports.rangeRoundFn  = function(start, end, scale) { return scale.rangeRound([start, end]); }
  exports.applyScaleFn  = function(d, scale)          { return scale(d); }    // disabled for PointScale

  // these functions are particular to Band scales
  exports.paddingFn         = function(p, scale) { return scale.padding(p); }     
  exports.bandwidthFn       = function(scale)    { return scale.bandwidth(); }
})(PS["D3.Scale"] = PS["D3.Scale"] || {});
(function(exports) {

  exports.mkEffFn2 = function mkEffFn2(fn) {
    return function(a, b) {
      return fn(a)(b)();
    };
  };

  exports.mkEffFn4 = function mkEffFn4(fn) {
    return function(a, b, c, d) {
      return fn(a)(b)(c)(d)();
    };
  };

  exports.runEffFn1 = function runEffFn1(fn) {
    return function(a) {
      return function() {
        return fn(a);
      };
    };
  };

  exports.runEffFn2 = function runEffFn2(fn) {
    return function(a) {
      return function(b) {
        return function() {
          return fn(a, b);
        };
      };
    };
  };

  exports.runEffFn3 = function runEffFn3(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function() {
            return fn(a, b, c);
          };
        };
      };
    };
  };
})(PS["Data.Function.Eff"] = PS["Data.Function.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["Data.Function.Eff"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["mkEffFn2"] = $foreign.mkEffFn2;
  exports["mkEffFn4"] = $foreign.mkEffFn4;
  exports["runEffFn1"] = $foreign.runEffFn1;
  exports["runEffFn2"] = $foreign.runEffFn2;
  exports["runEffFn3"] = $foreign.runEffFn3;
})(PS["Data.Function.Eff"] = PS["Data.Function.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["D3.Scale"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var D3_Base = PS["D3.Base"];
  var Data_Function_Eff = PS["Data.Function.Eff"];
  var Data_Maybe = PS["Data.Maybe"];        
  var Band = (function () {
      function Band() {

      };
      Band.value = new Band();
      return Band;
  })();
  var Category = (function () {
      function Category(value0) {
          this.value0 = value0;
      };
      Category.create = function (value0) {
          return new Category(value0);
      };
      return Category;
  })();
  var Identity = (function () {
      function Identity() {

      };
      Identity.value = new Identity();
      return Identity;
  })();
  var Linear = (function () {
      function Linear() {

      };
      Linear.value = new Linear();
      return Linear;
  })();
  var Log = (function () {
      function Log() {

      };
      Log.value = new Log();
      return Log;
  })();
  var Point = (function () {
      function Point() {

      };
      Point.value = new Point();
      return Point;
  })();
  var Power = (function () {
      function Power() {

      };
      Power.value = new Power();
      return Power;
  })();
  var Quantile = (function () {
      function Quantile() {

      };
      Quantile.value = new Quantile();
      return Quantile;
  })();
  var Quantize = (function () {
      function Quantize() {

      };
      Quantize.value = new Quantize();
      return Quantize;
  })();
  var Threshold = (function () {
      function Threshold() {

      };
      Threshold.value = new Threshold();
      return Threshold;
  })();
  var Time = (function () {
      function Time() {

      };
      Time.value = new Time();
      return Time;
  })();
  var scale = Data_Function_Eff.runEffFn2($foreign.applyScaleFn);
  var rangeRound = Data_Function_Eff.runEffFn3($foreign.rangeRoundFn);    
  var padding = Data_Function_Eff.runEffFn2($foreign.paddingFn);
  var d3Scale = function (v) {
      if (v instanceof Category) {
          return Data_Function_Eff.runEffFn1($foreign.d3CategoryScaleFn)(v.value0);
      };
      if (v instanceof Band) {
          return $foreign.d3BandScaleFn;
      };
      if (v instanceof Identity) {
          return $foreign.d3IdentityScaleFn;
      };
      if (v instanceof Linear) {
          return $foreign.d3LinearScaleFn;
      };
      if (v instanceof Log) {
          return $foreign.d3LogScaleFn;
      };
      if (v instanceof Point) {
          return $foreign.d3PointScaleFn;
      };
      if (v instanceof Power) {
          return $foreign.d3PowerScaleFn;
      };
      if (v instanceof Quantile) {
          return $foreign.d3QuantileScaleFn;
      };
      if (v instanceof Quantize) {
          return $foreign.d3QuantizeScaleFn;
      };
      if (v instanceof Threshold) {
          return $foreign.d3ThresholdScaleFn;
      };
      if (v instanceof Time) {
          return $foreign.d3TimeScaleFn;
      };
      throw new Error("Failed pattern match at D3.Scale line 101, column 1 - line 101, column 63: " + [ v.constructor.name ]);
  };                                                        
  var bandwidth = Data_Function_Eff.runEffFn1($foreign.bandwidthFn);
  exports["Band"] = Band;
  exports["Category"] = Category;
  exports["Identity"] = Identity;
  exports["Linear"] = Linear;
  exports["Log"] = Log;
  exports["Point"] = Point;
  exports["Power"] = Power;
  exports["Quantile"] = Quantile;
  exports["Quantize"] = Quantize;
  exports["Threshold"] = Threshold;
  exports["Time"] = Time;
  exports["bandwidth"] = bandwidth;
  exports["d3Scale"] = d3Scale;
  exports["padding"] = padding;
  exports["rangeRound"] = rangeRound;
  exports["scale"] = scale;
})(PS["D3.Scale"] = PS["D3.Scale"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.d3SelectFn    = function (selector)              { return d3.select(selector); }   

  exports.appendFn    = function (tag, selection)          { return selection.append(tag); }
  exports.attrFn      = function (attr, b, selection)      { return selection.attr(attr, b); }
  exports.attrFnP     = function (names, fn, selection)    { return selection.attr(names, fn); }
  exports.bindDataFn  = function (array, selection)        { return selection.data(array); }
  exports.bindDataFnK = function (array, keyFn, selection) { return selection.data(array, keyFn); }
  exports.enterFn     = function (selection)               { return selection.enter(); }          
  exports.getAttrFn   = function (attr, selection)         { return selection.attr(attr); }
  exports.selectAllFn = function (selector, selection)     { return selection.selectAll(selector); }
  exports.textFn      = function (text, selection)         { return selection.text(text); }
  exports.textFnFn    = function (fn, selection)           { return selection.text(fn); }

  // utility function to package up the parameter block for a callback
  function getCallBackParams(d, elem, prop) {
    var cbParams = { datum:     d
                   , elem:      elem
                   , prop:      prop    // NB - untyped assignment - only use in mkCallback fns
                   , timestamp: d3.event.timeStamp
                   , meta:      d3.event.metaKey
                   , shift:     d3.event.shiftKey
                   , ctrl:      d3.event.ctrlKey
                   , alt:       d3.event.altKey };
    return cbParams;
  }
})(PS["D3.Selection"] = PS["D3.Selection"] || {});
(function(exports) {
  // Generated by psc version 0.9.2
  "use strict";
  var $foreign = PS["D3.Selection"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var D3_Base = PS["D3.Base"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var Data_Function_Eff = PS["Data.Function.Eff"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Nullable = PS["Data.Nullable"];
  var Prelude = PS["Prelude"];
  var Data_Functor = PS["Data.Functor"];        
  var text = function (v) {
      if (v instanceof D3_Base.Value) {
          return Data_Function_Eff.runEffFn2($foreign.textFn)(v.value0);
      };
      if (v instanceof D3_Base.SetByIndex) {
          return Data_Function_Eff.runEffFn2($foreign.textFnFn)(Data_Function_Eff.mkEffFn2(v.value0));
      };
      throw new Error("Failed pattern match at D3.Selection line 124, column 1 - line 124, column 54: " + [ v.constructor.name ]);
  };
  var selectAll = function (selector) {
      return Data_Function_Eff.runEffFn2($foreign.selectAllFn)(selector);
  };
  var getAttr = function (s) {
      return Data_Function_Eff.runEffFn2($foreign.getAttrFn)(s);
  };                                                      
  var enter = Data_Function_Eff.runEffFn1($foreign.enterFn);
  var dataBind = function (v) {
      if (v instanceof D3_Base.Data) {
          return Data_Function_Eff.runEffFn2($foreign.bindDataFn)(v.value0);
      };
      if (v instanceof D3_Base.Keyed) {
          return Data_Function_Eff.runEffFn3($foreign.bindDataFnK)(v.value0)(v.value1);
      };
      throw new Error("Failed pattern match at D3.Selection line 145, column 1 - line 145, column 67: " + [ v.constructor.name ]);
  };
  var d3Select = function (selector) {
      return Data_Function_Eff.runEffFn1($foreign.d3SelectFn)(selector);
  };
  var attr = function (s) {
      return function (v) {
          if (v instanceof D3_Base.SetAttr) {
              return Data_Function_Eff.runEffFn3($foreign.attrFn)(s)(v.value0);
          };
          if (v instanceof D3_Base.AttrFn) {
              return Data_Function_Eff.runEffFn3($foreign.attrFnP)(s)(Data_Function_Eff.mkEffFn4(v.value0));
          };
          throw new Error("Failed pattern match at D3.Selection line 116, column 1 - line 116, column 53: " + [ s.constructor.name, v.constructor.name ]);
      };
  };
  var append = function (tag) {
      return Data_Function_Eff.runEffFn2($foreign.appendFn)(tag);
  };
  exports["append"] = append;
  exports["attr"] = attr;
  exports["d3Select"] = d3Select;
  exports["dataBind"] = dataBind;
  exports["enter"] = enter;
  exports["getAttr"] = getAttr;
  exports["selectAll"] = selectAll;
  exports["text"] = text;
})(PS["D3.Selection"] = PS["D3.Selection"] || {});
(function(exports) {
    "use strict";
  var D3_Selection = PS["D3.Selection"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var D3_Base = PS["D3.Base"];
  var D3_Scale = PS["D3.Scale"];
  var Prelude = PS["Prelude"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Function = PS["Data.Function"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Control_Applicative = PS["Control.Applicative"];
  var Data_Unit = PS["Data.Unit"];        

  /**
 *  define a margin, look to purescript-css for more sophisticated definition
 */  
  var margin = {
      top: 20.0, 
      right: 20.0, 
      bottom: 30.0, 
      left: 40.0
  };
  var frequencies = [ {
      letter: "A", 
      frequency: 8.167e-2
  }, {
      letter: "B", 
      frequency: 1.492e-2
  }, {
      letter: "C", 
      frequency: 2.782e-2
  }, {
      letter: "D", 
      frequency: 4.253e-2
  }, {
      letter: "E", 
      frequency: 0.12702
  }, {
      letter: "F", 
      frequency: 2.288e-2
  }, {
      letter: "G", 
      frequency: 2.015e-2
  }, {
      letter: "H", 
      frequency: 6.094e-2
  }, {
      letter: "I", 
      frequency: 6.966e-2
  }, {
      letter: "J", 
      frequency: 1.53e-3
  }, {
      letter: "K", 
      frequency: 7.72e-3
  }, {
      letter: "L", 
      frequency: 4.025e-2
  }, {
      letter: "M", 
      frequency: 2.406e-2
  }, {
      letter: "N", 
      frequency: 6.749e-2
  }, {
      letter: "O", 
      frequency: 7.507e-2
  }, {
      letter: "P", 
      frequency: 1.929e-2
  }, {
      letter: "Q", 
      frequency: 9.5e-4
  }, {
      letter: "R", 
      frequency: 5.987e-2
  }, {
      letter: "S", 
      frequency: 6.327e-2
  }, {
      letter: "T", 
      frequency: 9.056e-2
  }, {
      letter: "U", 
      frequency: 2.758e-2
  }, {
      letter: "V", 
      frequency: 9.78e-3
  }, {
      letter: "W", 
      frequency: 2.36e-2
  }, {
      letter: "X", 
      frequency: 1.5e-3
  }, {
      letter: "Y", 
      frequency: 1.974e-2
  }, {
      letter: "Z", 
      frequency: 7.4e-4
  } ];
  var main = function __do() {
      var v = D3_Selection.d3Select(".svg")();
      var v1 = Data_Function.applyFlipped(v)(D3_Selection.getAttr("width"))();
      var v2 = Data_Function.applyFlipped(v)(D3_Selection.getAttr("height"))();
      var width = v1 - margin.left - margin.right;
      var height = v2 - margin.top - margin.bottom;
      var v3 = Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(D3_Scale.d3Scale(D3_Scale.Band.value))(D3_Scale.rangeRound(0.0)(width)))(D3_Scale.padding(0.1))();
      var v4 = Control_Bind.bind(Control_Monad_Eff.bindEff)(D3_Scale.d3Scale(D3_Scale.Linear.value))(D3_Scale.rangeRound(height)(0.0))();
      var v5 = Control_Bind.bind(Control_Monad_Eff.bindEff)(Data_Function.applyFlipped(v)(D3_Selection.append("g")))(D3_Selection.attr("transform")(new D3_Base.SetAttr("translate(" + (Data_Show.show(Data_Show.showNumber)(margin.left) + ("," + (Data_Show.show(Data_Show.showNumber)(margin.top) + ")"))))))();
      Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Data_Function.applyFlipped(v5)(D3_Selection.append("g")))(D3_Selection.attr("class")(new D3_Base.SetAttr("axis axis--x"))))(D3_Selection.attr("transform")(new D3_Base.SetAttr("translate(0," + (Data_Show.show(Data_Show.showNumber)(height) + ")"))))();
      Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Data_Function.applyFlipped(v5)(D3_Selection.append("g")))(D3_Selection.attr("class")(new D3_Base.SetAttr("axis axis--y"))))(D3_Selection.append("text")))(D3_Selection.attr("transform")(new D3_Base.SetAttr("rotate(-90)"))))(D3_Selection.attr("y")(new D3_Base.SetAttr(6.0))))(D3_Selection.attr("dy")(new D3_Base.SetAttr("0.71em"))))(D3_Selection.attr("text-anchor")(new D3_Base.SetAttr("end"))))(D3_Selection.text(new D3_Base.Value("Frequency")))();
      Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(Data_Function.applyFlipped(v5)(D3_Selection.selectAll(".bar")))(D3_Selection.dataBind(new D3_Base.Data(frequencies))))(D3_Selection.enter))(D3_Selection.append("rect")))(D3_Selection.attr("class")(new D3_Base.SetAttr("bar"))))(D3_Selection.attr("x")(new D3_Base.AttrFn(function (d) {
          return function (i) {
              return function (nodes) {
                  return function (el) {
                      return function __do() {
                          var v6 = D3_Scale.scale(i)(v3)();
                          return v6;
                      };
                  };
              };
          };
      }))))(D3_Selection.attr("y")(new D3_Base.AttrFn(function (d) {
          return function (i) {
              return function (nodes) {
                  return function (el) {
                      return function __do() {
                          var v6 = D3_Scale.scale(d.frequency)(v4)();
                          return v6;
                      };
                  };
              };
          };
      }))))(D3_Selection.attr("width")(new D3_Base.SetAttr(D3_Scale.bandwidth(v3)))))(D3_Selection.attr("height")(new D3_Base.AttrFn(function (d) {
          return function (i) {
              return function (nodes) {
                  return function (el) {
                      return function __do() {
                          var v6 = D3_Scale.scale(d.frequency)(v4)();
                          return height - v6;
                      };
                  };
              };
          };
      })))();
      return Data_Unit.unit;
  };
  exports["frequencies"] = frequencies;
  exports["main"] = main;
  exports["margin"] = margin;
})(PS["Main"] = PS["Main"] || {});
PS["Main"].main();

},{}]},{},[1]);
