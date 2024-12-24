import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "./userSlice";
import { useTranslation } from "react-i18next";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();
    if(!username.trim()) {
      return null
    }
    dispatch(createUser(username));
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 text-sm sm:text-base text-stone-800"
    >
      <p>👋 {t("hero.text")}</p>

      <input
        type="text"
        placeholder={t("hero.inputPlaceholder")}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-72 mb-10 mt-8"
      />

      {username !== "" && (
        <div>
          <Button to="/menu" onClick={handleSubmit} className="no-underline">
            {t("hero.button")}
          </Button>
        </div>  
      )}
    </form>
  );
}

export default CreateUser;
