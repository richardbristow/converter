import React from 'react';
import PropTypes from 'prop-types';

import InputUnit from './InputUnit';
import ConvertArrows from './ConvertArrows';

const InputUnitGroup = ({
  leftInput, rightInput, leftUnit, rightUnit, options, handleChange, conversionType,
}) => (
  <React.Fragment>
    <InputUnit
      name="left"
      textValue={leftInput}
      dropdownValue={leftUnit}
      options={options}
      handleChange={handleChange}
      conversionType={conversionType}
    />
    <ConvertArrows />
    <InputUnit
      name="right"
      textValue={rightInput}
      dropdownValue={rightUnit}
      options={options}
      handleChange={handleChange}
      conversionType={conversionType}
    />
  </React.Fragment>
);

InputUnitGroup.propTypes = {
  leftInput: PropTypes.string.isRequired,
  rightInput: PropTypes.string.isRequired,
  leftUnit: PropTypes.string.isRequired,
  rightUnit: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  conversionType: PropTypes.string.isRequired,
};

export default InputUnitGroup;
