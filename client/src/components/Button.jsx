import "./button.scss";
export const Button = ({ onClick, children, type = "primary", size = "s" }) => {
  return (
    <button
      className={`button button--${type} button--${size}`}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
};
