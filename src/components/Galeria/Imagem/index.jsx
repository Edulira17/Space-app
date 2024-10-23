import styled from "styled-components";

import BotaoIcone from "../../BotaoIcone";

const FigureEstilizada = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: #fff;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagem = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {

  const iconeFavorito = foto.favorita ? '/icones/favorite-ativo.png' : '/icones/favorite.png'

  return (
    <FigureEstilizada $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Footer>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} alt="Icone de favorito" />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(foto)}
            >
              <img src="/icones/expandir.png" alt="Icone de expandir" />
            </BotaoIcone>
          )}
        </Footer>
      </figcaption>
    </FigureEstilizada>
  );
};

export default Imagem;
