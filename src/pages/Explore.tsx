import { Fragment } from "react/jsx-runtime";

import { NavMain } from "../components/functional/NavMain";
import { ContainerPages } from "../components/styled/ContainerPeges";
import { Nav } from "../components/styled/Nav/Nav";

import { NavDownText } from "../components/styled/Nav/NavDownText";
import { NavDownImage } from "../components/styled/Nav/NavDownImage";
import { NavDownOut } from "../components/styled/Nav/NavDownOut";
import { Link } from "react-router-dom";
import { NavDown } from "../components/styled/Nav/NavDown";

import { AssideContainer } from "../components/styled/Aside/AsideContainer";
import { AssideCard } from "../components/styled/Aside/AsideCard";
import { AssideLink } from "../components/styled/Aside/AsideLink";
import { MainExplore } from "../components/functional/MainExplore";
import { MainContainer } from "../components/styled/Main/MainContainer";

export function Explore() {
  return (
    <Fragment>
      <ContainerPages>
        <Nav>
          <NavMain />
          <NavDown>
            <NavDownImage />
            <NavDownText>
              <h1>User</h1>
              <p>@ username</p>
            </NavDownText>
          </NavDown>
          <NavDownOut>
            <Link to={"/"}>Sair</Link>
          </NavDownOut>
        </Nav>
        <MainContainer>
          <MainExplore />
        </MainContainer>
        <AssideContainer>
          <AssideCard>
            <h1>O que está acontecendo?</h1>
            <ul>
              <li>
                <p className='label'>Esportes - Há 45 min</p>
                <p className='title'>Assunto sobre esportes</p>
              </li>
              <li>
                <p className='label'>Assunto do Momento em Brasil</p>
                <p className='title'>Assunto do Momento</p>
              </li>
              <li>
                <p className='label'>Música - Assunto do Momento</p>
                <p className='title'>Assunto sobre Música</p>
              </li>
              <li>
                <p className='label'>Cinema - Assunto do Momento</p>
                <p className='title'>Assunto sobre Filmes e Cinema</p>
              </li>
            </ul>
            <AssideLink>
              <Link to={"/explore"}>Mostrar Mais</Link>
            </AssideLink>
          </AssideCard>
        </AssideContainer>
      </ContainerPages>
    </Fragment>
  );
}
