import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => (<>
    <label className="form-label">{props.label}</label>
    <textarea
      className="form-input"
      style={props.resize ? null : {resize: 'none'}}
      name={props.name}
      rows={props.rows}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} />
</>);

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  content: PropTypes.string,
  resize: PropTypes.bool,
  placeholder: PropTypes.string,
  controlFunc: PropTypes.func
};

export default TextArea;
