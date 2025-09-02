import { useState } from "react";

const Input = ({
  label,
  initialValue = "",
  onChange,
  type = "text",
  placeholder,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className="input-group">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="on"
        id={label}
        className="input-field"
        required
      />
    </div>
  );
};

export default Input;
