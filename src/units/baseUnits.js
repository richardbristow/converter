import addPrefixes from './../utils/addPrefixes';

import length from './unitTypes/length';
import surfaceArea from './unitTypes/surfaceArea';
import angles from './unitTypes/angles';
import time from './unitTypes/time';
import mass from './unitTypes/mass';
import temperature from './unitTypes/temperature';
import force from './unitTypes/force';
import energy from './unitTypes/energy';
import binary from './unitTypes/binary';

// import smallPrefixes from './prefixes/smallPrefixes';
// import largePrefixes from './prefixes/largePrefixes';
import binaryPrefixes from './prefixes/binaryPrefixes';

const baseUnits = {
  length,
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
  binary: addPrefixes(binaryPrefixes, binary),
};

export default baseUnits;
