import conversions from '../constants/conversions';

const getUnits = (inputUnits, conversionType) => {
  const units = {};
  units.leftUnit = inputUnits.leftUnit ?
    inputUnits.leftUnit : conversions[conversionType].initialUnitLeft;
  units.rightUnit = inputUnits.rightUnit ?
    inputUnits.rightUnit : conversions[conversionType].initialUnitRight;
  return units;
};

export default getUnits;
