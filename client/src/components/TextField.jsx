import "./textField.scss";
export const MYTextField = ({ value, onChange }) => {
  return (
    <input
      className="textField"
      type="text"
      placeholder="New Todo"
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};
