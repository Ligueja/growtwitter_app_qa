import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { NavMain as NavMainStyled } from "../styled/Nav/NavMain";
import { Header } from "./HeaderFunctional";
import { useTheme } from "styled-components";

export function NavMain() {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Fragment>
      <NavMainStyled>
        <Header></Header>
        <ul>
          <li>
            <Link to={"/feed"}>
              <img
                src={
                  location.pathname === "/feed"
                    ? theme.icons.iconInitialPage.selected
                    : theme.icons.iconInitialPage.default
                }
                alt='pagina inicial'
              />
              Página Inicial
            </Link>
          </li>
          <li>
            <Link to={"/explore"}>
              <img
                src={
                  location.pathname === "/explore"
                    ? theme.icons.iconExplore.selected
                    : theme.icons.iconExplore.default
                }
              />
              Explorar
            </Link>
          </li>
          <li>
            <Link to={"/profile"}>
              <img
                src={
                  location.pathname === "/profile"
                    ? theme.icons.iconProfile.selected
                    : theme.icons.iconProfile.default
                }
              />
              Perfil
            </Link>
          </li>
        </ul>
        <button>Tweetar</button>
      </NavMainStyled>
    </Fragment>
  );
}
