import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InputUnit from './InputUnit';
import ConvertArrows from './ConvertArrows';

const InputUnitGroup = ({
  leftInput, rightInput, leftUnit, rightUnit, options, handleChange, conversionType, disableInputs,
}) => (
  <Fragment>
    <InputUnit
      name="left"
      textValue={leftInput}
      dropdownValue={leftUnit}
      options={options}
      handleChange={handleChange}
      conversionType={conversionType}
      disableInputs={disableInputs}
    />
    <ConvertArrows />
    <InputUnit
      name="right"
      textValue={rightInput}
      dropdownValue={rightUnit}
      options={options}
      handleChange={handleChange}
      conversionType={conversionType}
      disableInputs={disableInputs}
    />
  </Fragment>
);

InputUnitGroup.defaultProps = {
  disableInputs: false,
};

InputUnitGroup.propTypes = {
  leftInput: PropTypes.string.isRequired,
  rightInput: PropTypes.string.isRequired,
  leftUnit: PropTypes.string.isRequired,
  rightUnit: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  conversionType: PropTypes.string.isRequired,
  disableInputs: PropTypes.bool,
};

export default InputUnitGroup;
