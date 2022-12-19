import styled from "styled-components";

export const HomeStyle = styled.div`

    width: 100%;
    
    & > main{
        width: 100%;

        ul{
            display: flex;
            width: 100%;
            overflow-x: auto;
            gap: 2rem;
            padding: 2rem 0;
        }
    }

    @media (min-width: 701px) {
        & > main > ul{
            overflow-x: unset;
            flex-wrap: wrap;
        }
    }
`