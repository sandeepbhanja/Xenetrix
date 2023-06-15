import './form-input.styles.scss';
const FormInput = ({ label , ...otherProps}) => {
  return (
    <div className="group">
      {(label) && (
        <label >
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
