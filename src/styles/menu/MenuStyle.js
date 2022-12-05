import styled from 'styled-components'

export const MenuStyle = styled.div`
    z-index: 100;

    img {
        width: 120px;
        margin-left: 1.5em;
        margin-top: 1.5em;
        margin-bottom: 1.7em;
    }
    
    span {
        color: #5E5E5E;
        font-size: 0.9em;
        text-transform: uppercase;
        margin-left: 2.2em;
        padding-top: 2.5em;
    }
    
    @media (max-width: 768px){
        
        nav > ul {
            display: flex;
            justify-content: center;
        }
    }
    `