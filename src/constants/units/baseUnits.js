import addPrefixes from '../../utils/addPrefixes';

import length from './unitTypes/length';
import surfaceArea from './unitTypes/surfaceArea';
import volume from './unitTypes/volume';
import liquidVolume from './unitTypes/liquidVolume';
import angles from './unitTypes/angles';
import time from './unitTypes/time';
import frequency from './unitTypes/frequency';
import mass from './unitTypes/mass';
import electricCurrent from './unitTypes/electricCurrent';
import temperature from './unitTypes/temperature';
import force from './unitTypes/force';
import energy from './unitTypes/energy';
import power from './unitTypes/power';
import pressure from './unitTypes/pressure';
// import electricityAndMagnetism from './unitTypes/electricityAndMagnetism';
import datastorage from './unitTypes/dataStorage';

// import smallPrefixes from './prefixes/smallPrefixes';
// import largePrefixes from './prefixes/largePrefixes';
import metricPrefixes from './prefixes/metricPrefixes';
import datastoragePrefixes from './prefixes/dataStoragePrefixes';

const baseUnits = {
  length: addPrefixes(metricPrefixes, length),
  surfaceArea,
  volume,
  liquidVolume,
  angles,
  time: addPrefixes(metricPrefixes, time),
  frequency: addPrefixes(metricPrefixes, frequency),
  mass,
  electricCurrent: addPrefixes(metricPrefixes, electricCurrent),
  temperature,
  // amountOfSubstance,
  // luminousIntensity,
  // currency,
  force,
  energy,
  power,
  pressure,
  // electricityAndMagnetism,
  datastorage: addPrefixes(datastoragePrefixes, datastorage),
};

export default baseUnits;
