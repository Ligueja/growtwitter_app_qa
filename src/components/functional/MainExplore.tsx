import { Fragment } from "react";
import { Main as Container } from "../styled/Main/Main";
import { ContainerMainExplorer } from "../styled/ContainerMainExplore";

export function MainExplore() {
  return (
    <Fragment>
      <Container>
        <div style={{ backgroundColor: "white" }}>
          <h1>Explorar</h1>
        </div>
        <ContainerMainExplorer>
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
            <li>
              <p className='label'>Entretenimento - Assunto do Momento</p>
              <p className='title'>Assunto sobre Entretenimento</p>
            </li>
            <li>
              <p className='label'>Assunto do Momento em Porto Alegre</p>
              <p className='title'>Assunto do Momento em Porto Alegre</p>
            </li>
            <li>
              <p className='label'>Daphne - Principal Assunto do Momento</p>
              <p className='title'>Assunto sobre a Daphne</p>
            </li>
          </ul>
        </ContainerMainExplorer>
      </Container>
    </Fragment>
  );
}
