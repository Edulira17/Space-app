import styled from 'styled-components'

import tags from './tags.json'

const ContainerTags = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #d9d9d9;
    font-size: 24px;
    margin: 0;
`

const Tag = styled.button`
    color: #ffff;
    background:rgba(217, 217, 217, 0.3);
    border: 2px solid transparent;
    padding: 12px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    &:hover{
        border-color: #c98cf1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`


const Tags = ({setTag}) => {
    return (
        <ContainerTags>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
            </Div>
        </ContainerTags>
    )
}

export default Tags