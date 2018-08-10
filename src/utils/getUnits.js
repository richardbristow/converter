import baseUnits from '../constants/units/baseUnits';

const getUnits = (inputUnits, conversionType) => {
  const units = {};
  units.leftUnit = inputUnits.leftUnit ?
    inputUnits.leftUnit : baseUnits[conversionType].initialUnitLeft;
  units.rightUnit = inputUnits.rightUnit ?
    inputUnits.rightUnit : baseUnits[conversionType].initialUnitRight;
  return units;
};

export default getUnits;
