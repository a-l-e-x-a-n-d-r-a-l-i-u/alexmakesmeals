import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (<>
  <input type="text"
    list={props.name}
    onChange={props.controlFunc} 
    className="form-select" />

  <datalist id={props.name}>
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
  </datalist>
</>);

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  selectedOption: PropTypes.string,
  controlFunc: PropTypes.func,
  placeholder: PropTypes.string
};

export default Select