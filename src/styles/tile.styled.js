import styled from 'styled-components'

const Tiles = styled.div`
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
    border: 1px solid black;
    cursor: pointer;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 66px 66px 66px;  
`;

export {Tiles, Wrapper};