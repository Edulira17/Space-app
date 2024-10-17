// Styled Components:
import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"

// React Components:
import Cabecalho from "./components/Cabecalho"
import Aside from "./components/Aside"
import Banner from "./components/Banner"

import bannerBackground from './assets/banner.png'

// Background Gradient:
const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154589 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <FundoGradient>
      <EstilosGlobais />
      <Cabecalho />
      <Aside />
      <Banner 
        backgroundImage={bannerBackground} 
        texto="A galeria mais completa de fotos do espaço!"
      />
    </FundoGradient>
  )
}

export default App
