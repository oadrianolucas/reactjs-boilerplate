import * as S from "./styles";
import {
  SiNextdotjs,
  SiEslint,
  SiJest,
  SiBabel,
  SiPrettier,
  SiTypescript,
  SiStyledcomponents,
} from "react-icons/si";
import { IoLogoPwa } from "react-icons/io5";
const Main = ({ title = "Boilerplate" }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.List>
      <SiNextdotjs /> <IoLogoPwa /> <SiEslint /> <SiJest />
      <SiBabel /> <SiPrettier /> <SiTypescript /> <SiStyledcomponents />
    </S.List>
    <S.Illustration
      src="/img/person.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);

export default Main;
