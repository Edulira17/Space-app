import styled from "styled-components"

const FigureEstilizada = styled.figure` 
  /* width: ${(props) => (props.$expandida ? '90%' : '460px')}; */

`

const Imagem = ({foto, expandida = false}) => {
  return (
    <FigureEstilizada $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
          <h3>{foto.titulo}</h3>
      </figcaption>
    </FigureEstilizada>
  )
}

export default Imagem