import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (<>
    <label className="form-label">{props.label}</label>
    <input
      className="form-input"
      name={props.name}
      type="text"
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} />
</>);

SingleInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  controlFunc: PropTypes.func,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
};

export default SingleInput