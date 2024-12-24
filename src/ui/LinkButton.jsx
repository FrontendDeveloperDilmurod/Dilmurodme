import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === "-1") {
    navigate(-1);
  }
  return (
    <Link
      to={to}
      className="text-sm text-sky-500 hover:underline hover:text-sky-600 md:text-base"
    >
      {children}
    </Link>
  );
}
