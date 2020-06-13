import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (
  <select
    id={props.name}
    value={props.selectedOption}
    onChange={props.controlFunc}
    className="form-select">
    <option value="">{props.placeholder}</option>
    {props.options.map(i => {
      return (
        <option
          key={i.name}
          value={i.name}>
          {i.label}
        </option>
      );
    })}
  </select>
);

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  selectedOption: PropTypes.string,
  controlFunc: PropTypes.func,
  placeholder: PropTypes.string
};

export default Select