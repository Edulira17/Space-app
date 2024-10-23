// Styled Components:
import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";

// React Components:
import Cabecalho from "./components/Cabecalho";
import Aside from "./components/Aside";
import Banner from "./components/Banner";

import bannerBackground from "./assets/banner.png";
import Galeria from "./components/Galeria";

import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

// Background Gradient:
const FundoGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154589 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    setFotosGaleria(
      fotosGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  return (
    <FundoGradient>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <Aside />
          <ConteudoGaleria>
            <Banner
              backgroundImage={bannerBackground}
              texto="A galeria mais completa de fotos do espaço!"
            />
            <Galeria
              fotos={fotosGaleria}
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
      />
    </FundoGradient>
  );
};

export default App;
