module D3.Scale
  ( d3ContinuousScale
  , d3OrdinalScale
  , ContinuousScaleType (..)
  , ScaleContinuous
  , OrdinalScaleType (..)
  , ScaleOrdinal
  , SchemeCategory
  , rangeRound
  , class Ranged
  , padding
  , paddingInner
  , paddingOuter
  ) where

import Control.Monad.Eff (Eff)
import D3.Base (D3)
import Data.Function.Eff (EffFn2, runEffFn2, EffFn3, EffFn1, runEffFn3, runEffFn1)

foreign import data ScaleContinuous :: * -> * -> *
foreign import data ScaleOrdinal    :: * -> * -> *
foreign import data ScaleSequential :: * -> * -> *
foreign import data ScaleQuantize   :: * -> * -> *
foreign import data ScaleQuantile   :: * -> * -> *
foreign import data ScaleThreshold  :: * -> * -> *

foreign import d3LinearScaleFn   :: ∀ d r eff. Eff (d3::D3|eff) (ScaleContinuous d r)
foreign import d3LogScaleFn      :: ∀ d r eff. Eff (d3::D3|eff) (ScaleContinuous d r)
foreign import d3PowerScaleFn    :: ∀ d r eff. Eff (d3::D3|eff) (ScaleContinuous d r)
foreign import d3IdentityScaleFn :: ∀ d r eff. Eff (d3::D3|eff) (ScaleContinuous d r)
foreign import d3TimeScaleFn     :: ∀ d r eff. Eff (d3::D3|eff) (ScaleContinuous d r)

foreign import d3BandScaleFn     :: ∀ d r eff. Eff (d3::D3|eff)                   (ScaleOrdinal d r)
foreign import d3PointScaleFn    :: ∀ d r eff. Eff (d3::D3|eff)                   (ScaleOrdinal d r)
foreign import d3CategoryScaleFn :: ∀ d r eff. EffFn1 (d3::D3|eff) SchemeCategory (ScaleOrdinal d r)

foreign import paddingFn         :: ∀ d r eff. EffFn2 (d3::D3|eff) Number (ScaleOrdinal d r) (ScaleOrdinal d r)
foreign import paddingInnerFn    :: ∀ d r eff. EffFn2 (d3::D3|eff) Number (ScaleOrdinal d r) (ScaleOrdinal d r)
foreign import paddingOuterFn    :: ∀ d r eff. EffFn2 (d3::D3|eff) Number (ScaleOrdinal d r) (ScaleOrdinal d r)

-- | Incorporating some of d3-scale-chromatic here just for now, to be broken out later

foreign import data SchemeCategory :: *       -- in practice it's just a string, i think

data ContinuousScaleType = Linear | Log | Power | Identity | Time
data OrdinalScaleType    = Band   | Point |  Category SchemeCategory
data SequentialScaleType = Sequential
data QuantizeScaleType   = Quantize
data QuantileScaleType   = Quantile
data ThresholdScaleType  = Threshold

-- | Probably want to use the type system to distinguish between rangeRound[start, end] and rangeRound[v1, v2, v3...]
foreign import rangeRoundCFn :: ∀ d r eff. EffFn3 (d3::D3|eff) Number Number (ScaleContinuous d r) (ScaleContinuous d r)
foreign import rangeRoundOFn :: ∀ d r eff. EffFn3 (d3::D3|eff) Number Number (ScaleOrdinal d r)    (ScaleOrdinal d r)


d3ContinuousScale :: ∀ d r eff. ContinuousScaleType -> Eff (d3::D3|eff) (ScaleContinuous d r)
d3ContinuousScale Linear   = d3LinearScaleFn
d3ContinuousScale Log      = d3LogScaleFn
d3ContinuousScale Power    = d3PowerScaleFn
d3ContinuousScale Identity = d3IdentityScaleFn
d3ContinuousScale Time     = d3TimeScaleFn

d3OrdinalScale :: ∀ d r eff. OrdinalScaleType       -> Eff (d3::D3|eff) (ScaleOrdinal d r)
d3OrdinalScale Band              = d3BandScaleFn
d3OrdinalScale Point             = d3PointScaleFn
d3OrdinalScale (Category scheme) = runEffFn1 d3CategoryScaleFn scheme

class Ranged a where
  rangeRound :: ∀ eff. Number -> Number -> a -> Eff (d3::D3|eff) a

instance rangeRoundContinuous :: Ranged (ScaleContinuous d r) where
  rangeRound start end = runEffFn3 rangeRoundCFn start end

instance rangeRoundOrdinal :: Ranged (ScaleOrdinal d r) where
  rangeRound start end = runEffFn3 rangeRoundOFn start end

-- this function should only apply to scales of type band, tricky to express the
-- way it's written right now...TODO revisit the types here

padding      :: ∀ d r eff. Number -> ScaleOrdinal d r -> Eff (d3::D3|eff) (ScaleOrdinal d r)
padding      = runEffFn2 paddingFn

paddingInner :: ∀ d r eff. Number -> ScaleOrdinal d r -> Eff (d3::D3|eff) (ScaleOrdinal d r)
paddingInner = runEffFn2 paddingInnerFn

paddingOuter :: ∀ d r eff. Number -> ScaleOrdinal d r -> Eff (d3::D3|eff) (ScaleOrdinal d r)
paddingOuter = runEffFn2 paddingOuterFn

class Scaling a where
  scaling :: ∀ d r eff. a -> d -> Eff (d3::D3|eff) r

instance scalingContinuous :: Scaling (ScaleContinuous d r) where
  scaling s d = runEffFn2 applyScaleCFn s d

instance scalingOrdinal :: Scaling (ScaleOrdinal d r) where
  scaling s d = runEffFn2 applyScaleOFn s d

foreign import applyScaleCFn :: ∀ d r eff. EffFn2 (d3::D3|eff) (ScaleContinuous d r) d r
foreign import applyScaleOFn :: ∀ d r eff. EffFn2 (d3::D3|eff) (ScaleOrdinal d r) d r
