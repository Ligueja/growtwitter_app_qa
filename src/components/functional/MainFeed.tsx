import { Fragment } from "react";
import { Main as Content } from "../styled/Main/Main";

export function Main() {
  return (
    <Fragment>
      <Content>
        <div style={{ backgroundColor: "white" }}>
          <h1>Página Inicial</h1>
          <main></main>
        </div>
      </Content>
    </Fragment>
  );
}
