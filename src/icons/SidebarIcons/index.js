import toReactComponent from 'svgr.macro';

export const {
  AmountOfSubstance,
  Angles,
  Currency,
  DataStorage,
  ElectricCurrent,
  ElectricityAndMagnetism,
  Energy,
  Force,
  Frequency,
  Length,
  LiquidVolume,
  LuminousIntensity,
  Mass,
  Power,
  Pressure,
  SurfaceArea,
  Temperature,
  Time,
  Volume,
} = toReactComponent(
  './svg/*.svg',
  { icon: true },
);
