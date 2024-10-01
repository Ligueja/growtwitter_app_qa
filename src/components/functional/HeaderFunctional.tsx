import { Fragment } from "react/jsx-runtime";
import { Header as HeaderStyled } from "../styled/Header";
import { useTheme } from "styled-components";

export function Header() {
  const theme = useTheme();

  return (
    <Fragment>
      <HeaderStyled>
        <img
          src={theme.icons.main}
          alt='logoGrowtweet'
          className='logo-growtweet'
        />
      </HeaderStyled>
    </Fragment>
  );
}
