import styled from "styled-components";

export const Section = styled.section`
    border-radius: 0.4em;
    background-color: #2F2F2F;
    border: 0.1em solid #595958;
    margin: 2em;
    padding: 2em;
    position: relative;

    h2{
        color: #ABABAB;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;        
    }
`