import addPrefixes from './../utils/addPrefixes';

import length from './unitTypes/length';
import surfaceArea from './unitTypes/surfaceArea';
import angles from './unitTypes/angles';
import time from './unitTypes/time';
import mass from './unitTypes/mass';
import temperature from './unitTypes/temperature';
import force from './unitTypes/force';
import energy from './unitTypes/energy';
import datastorage from './unitTypes/dataStorage';

import metricPrefixes from './prefixes/metricPrefixes';
import datastoragePrefixes from './prefixes/dataStoragePrefixes';

const baseUnits = {
  length: addPrefixes(metricPrefixes, length),
  surfaceArea,
  // volume,
  // liquidVolume,
  angles,
  time,
  // frequency,
  mass,
  // electricCurrent,
  temperature,
  // amountOfSubstance,
  // luminousIntensity,
  // currency,
  force,
  energy,
  // power,
  // pressure,
  // electricityAndMagnetism,
  datastorage: addPrefixes(datastoragePrefixes, datastorage),
};

export default baseUnits;
