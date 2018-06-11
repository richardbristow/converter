import React from 'react';
import PropTypes from 'prop-types';

import conversions from '../../constants/conversions';
import Input from './Input';
import Dropdown from './Dropdown';

const InputGroup = ({ convert, conversionType }) => {
  const {
    handleChange, inputLeft, inputRight,
  } = convert;
  const unitValueLeft = convert[`${conversionType}UnitLeft`] ? convert[`${conversionType}UnitLeft`] : conversions[conversionType].initialUnitLeft;
  const unitValueRight = convert[`${conversionType}UnitRight`] ? convert[`${conversionType}UnitRight`] : conversions[conversionType].initialUnitRight;
  return (
    <div>
      <Input name="inputLeft" value={inputLeft} handleChange={handleChange} conversionType={conversionType} />
      <Dropdown
        className="unitLeft"
        name={`${conversionType}UnitLeft`}
        options={conversions[conversionType].units}
        value={unitValueLeft}
        handleChange={handleChange}
        conversionType={conversionType}
      />
      <br />
      <br />
      <Input name="inputRight" value={inputRight} handleChange={handleChange} conversionType={conversionType} />
      <Dropdown
        className="unitRight"
        name={`${conversionType}UnitRight`}
        options={conversions[conversionType].units}
        value={unitValueRight}
        handleChange={handleChange}
        conversionType={conversionType}
      />
    </div>
  );
};

InputGroup.defaultProps = {
  conversionType: 'length',
};

InputGroup.propTypes = {
  convert: PropTypes.shape({
    handleChange: PropTypes.func,
    inputLeft: PropTypes.string,
    inputRight: PropTypes.string,
  }).isRequired,
  conversionType: PropTypes.string,
};

export default InputGroup;
