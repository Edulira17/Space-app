import styled from "styled-components"

import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"


const GaleriaContainer = styled.div`
  display: flex;
`

const SectionFluid = styled.section`
  flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SectionFluid>
          <Titulo>Navegue pela galeria</Titulo>
          <ul>
            {fotos.map(foto => <li>{foto.titulo}</li>)}
          </ul>
        </SectionFluid>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria