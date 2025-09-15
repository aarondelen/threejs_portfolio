const Button = ({ text, containerClass }) => {
  return (
    <button className={` btn ${containerClass}`}>
      <div className="relative flex">
        <span className="btn-ping" />
        <span className="btn-ping_dot" />
      </div>
      {text}
    </button>
  );
};

export default Button;
