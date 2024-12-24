import { Link } from "react-router-dom";

const Button = ({ children, onClick, to, type = "md" }) => {
  const className =
    "inline-block bg-yellow-500 rounded-full font-semibold hover:bg-yellow-400 focus:outline-none transition-colors duration-300 uppercase tracking-wide focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400";

  const types = {
    md: `${className} py-3 px-4`,
    sm: `${className} py-2 px-2 text-sm`,
    secondary:
      "inline-block rounded-full px-4 py-3 font-semibold bg-transparent border border-stone-400 text-stone-500 hover:bg-stone-300 hover:text-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-stone-400",
  };

  if (onClick) {
    return (
      <button onClick={onClick} className={types[type]}>
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={types[type]}>
        {children} 
      </Link>
    );
  }

  return <button className={types[type]}>{children}</button>;
};

export default Button;
