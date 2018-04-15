// TODO: write tests for currentUnits.js

const currentUnits = (conversionType, currentState) => {
  const unitObject = {};
  unitObject.unitNameLeft = `${conversionType}UnitLeft`;
  unitObject.unitNameRight = `${conversionType}UnitRight`;
  unitObject.unitValueLeft = currentState[unitObject.unitNameLeft];
  unitObject.unitValueRight = currentState[unitObject.unitNameRight];
  return unitObject;
};

export default currentUnits;
