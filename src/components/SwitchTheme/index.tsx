import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import * as S from "./styles";
export default function SwitchTheme() {
  const [theme, setTheme] = useState<boolean>(true);
  const handleToggle = (event) => {
    setTheme(event.target.checked);
  };
  useEffect(() => {
    if (theme !== undefined) {
      if (theme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [theme]);
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setTheme(initialColorValue === "dark");
  }, []);
  return (
    <S.Box>
      <span>
        <FaRegMoon /> Dark Mode:
      </span>
      {theme !== undefined && (
        <form action="#">
          <S.CheckBoxWrapper>
            <S.CheckBox
              id="checkbox"
              type="checkbox"
              checked={theme}
              onChange={handleToggle}
            />
            <S.CheckBoxLabel htmlFor="checkbox" />
          </S.CheckBoxWrapper>
        </form>
      )}
    </S.Box>
  );
}
