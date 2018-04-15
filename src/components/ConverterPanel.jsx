import React from 'react';
import PropTypes from 'prop-types';
import conversions from '../constants/conversions';
import Dropdown from './Dropdown';
import Input from './Input';

const ConverterPanel = ({ convert }) => {
  const {
    conversionType, handleChange, inputLeft, inputRight, unitNameLeft,
    unitNameRight, unitValueLeft, unitValueRight,
  } = convert;
  return (
    <div>
      <Dropdown
        className="conversionType"
        name="conversionType"
        options={Object.keys(conversions).map((type) => {
          const reformattedObject = {
            displayName: conversions[type].displayName,
            mathName: conversions[type].mathName,
          };
          return reformattedObject;
        })}
        value={conversionType}
        handleChange={handleChange}
      />
      <br />
      <br />
      <Input name="inputLeft" value={inputLeft} handleChange={handleChange} />
      <Dropdown
        className="unitLeft"
        name={unitNameLeft}
        options={conversions[conversionType].units}
        value={unitValueLeft}
        handleChange={handleChange}
      />
      <br />
      <br />
      <Input name="inputRight" value={inputRight} handleChange={handleChange} />
      <Dropdown
        className="unitRight"
        name={unitNameRight}
        options={conversions[conversionType].units}
        value={unitValueRight}
        handleChange={handleChange}
      />
    </div>
  );
};

ConverterPanel.propTypes = {
  convert: PropTypes.shape({
    conversionType: PropTypes.string,
    handleChange: PropTypes.func,
    inputLeft: PropTypes.string,
    inputRight: PropTypes.string,
    unitNameLeft: PropTypes.string,
    unitNameRight: PropTypes.string,
    unitValueLeft: PropTypes.string,
    unitValueRight: PropTypes.string,
  }).isRequired,
};

export default ConverterPanel;
