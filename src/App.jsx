// Styled Components:
import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"

// React Components:
import Cabecalho from "./components/Cabecalho"
import Aside from "./components/Aside"

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154589 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradient>
      <EstilosGlobais />
      <Cabecalho/>
      <Aside/>
    </FundoGradient>
  )
}

export default App
