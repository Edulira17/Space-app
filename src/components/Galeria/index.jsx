import styled from "styled-components"

import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"


const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`

const SectionFluid = styled.section`
  flex-grow: 1;
`

const ImagensContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SectionFluid>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map(foto => <Imagem 
            aoZoomSolicitado={aoFotoSelecionada}
            aoAlternarFavorito={aoAlternarFavorito}
            key={foto.id} 
            foto={foto}/>)}
          </ImagensContainer>
        </SectionFluid>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria