import conversions from '../constants/conversions';

const getUnits = (inputUnits, conversionType) => {
  const units = {};
  units.unitLeft = inputUnits.unitLeft ?
    inputUnits.unitLeft : conversions[conversionType].initialUnitLeft;
  units.unitRight = inputUnits.unitRight ?
    inputUnits.unitRight : conversions[conversionType].initialUnitRight;
  return units;
};

export default getUnits;
