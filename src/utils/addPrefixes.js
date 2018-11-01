const addPrefixes = (prefixes, baseUnit) => {
  const units = [];
  baseUnit.units.forEach((unit) => {
    units.push({ displayName: unit.displayName, mathName: unit.mathName });
    if (unit.allowPrefixes || baseUnit.mathName === 'dataStorage') {
      const prefixUnits = prefixes.map(prefix => ({
        displayName: `${prefix.name}${unit.displayName.toLowerCase()}`,
        mathName: `${prefix.abbreviation}${unit.mathName}`,
      }));
      units.push(...prefixUnits);
    }
  });
  const prefixedBaseUnit = baseUnit;
  prefixedBaseUnit.units = units;
  return prefixedBaseUnit;
};

export default addPrefixes;
