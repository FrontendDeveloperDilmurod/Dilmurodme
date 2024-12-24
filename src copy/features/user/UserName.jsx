import { useSelector } from "react-redux";

export default function UserName() {
  const user = useSelector((state) => state.user.username);
  

  return (
    <div>
      <p className="font-semibold">{user}</p>
    </div>
  );
}
